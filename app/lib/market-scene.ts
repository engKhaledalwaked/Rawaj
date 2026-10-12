// The hero's 3D "market": a field of columns that rises toward the right, with the logo's three
// orange dots floating above the tallest one. Colours come from the theme tokens and follow it live.
// Loaded with a dynamic import after mount, so three.js never blocks the first paint.
import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'

type Opts = { reduced: boolean; compact: boolean }

const css = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim()
const smooth = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t) }
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

export function createMarket(canvas: HTMLCanvasElement, host: HTMLElement, opts: Opts) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100)

  // columns: x runs left → right (growth rises to the right, like the logo), z is depth
  const NX = opts.compact ? 8 : 10
  const NZ = opts.compact ? 3 : 4
  const PATH_Z = Math.floor(NZ / 2)
  const geo = new RoundedBoxGeometry(0.72, 1, 0.72, 2, 0.08)
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.6, metalness: 0.05 })
  const cols = new THREE.InstancedMesh(geo, mat, NX * NZ)
  scene.add(cols)

  // the three rising dots
  const dotMat = new THREE.MeshStandardMaterial({ roughness: 0.28, metalness: 0.1 })
  const dots = [0.2, 0.32, 0.52].map((r) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(r, 48, 32), dotMat)
    scene.add(m)
    return m
  })

  scene.add(new THREE.HemisphereLight(0xffffff, 0x888888, 1.6))
  const sun = new THREE.DirectionalLight(0xffffff, 2.4)
  sun.position.set(6, 12, 8)
  scene.add(sun)

  const cx = (x: number) => (x - (NX - 1) / 2) * 1
  const cz = (z: number) => (z - (NZ - 1) / 2) * 1
  const trend = (x: number) => Math.pow(x / (NX - 1), 1.7)

  function paint() {
    const line = new THREE.Color(css('--line'))
    const raised = new THREE.Color(css('--surface-raised'))
    const brand = new THREE.Color(css('--brand'))
    const dark = document.documentElement.dataset.theme === 'dark'
    const base = dark ? line.clone().lerp(new THREE.Color('#ffffff'), 0.06) : raised.clone().lerp(line, 0.55)
    let i = 0
    for (let x = 0; x < NX; x++) {
      for (let z = 0; z < NZ; z++) {
        const onPath = z === PATH_Z
        const k = smooth(0.45, 1, x / (NX - 1)) * (onPath ? 1 : 0.28)
        cols.setColorAt(i++, base.clone().lerp(brand, k))
      }
    }
    cols.instanceColor!.needsUpdate = true
    dotMat.color.copy(brand)
    dotMat.emissive.copy(brand).multiplyScalar(dark ? 0.35 : 0.12)
  }

  const m4 = new THREE.Matrix4()
  const pos = new THREE.Vector3()
  const scl = new THREE.Vector3()
  const quat = new THREE.Quaternion()
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 }
  let intro = opts.reduced ? 1 : 0
  let scroll = 0

  function layout(t: number) {
    const grow = easeOut(intro)
    let tallest = 0
    let i = 0
    for (let x = 0; x < NX; x++) {
      for (let z = 0; z < NZ; z++) {
        const onPath = z === PATH_Z
        const wave = opts.reduced ? 0 : 0.16 * Math.sin(t * 1.1 + x * 0.55 + z * 0.8)
        const depth = 1 - Math.abs(z - PATH_Z) / NZ * 0.6
        let h = (0.25 + trend(x) * (3.6 + scroll * 1.8) * depth + wave) * (onPath ? 1.12 : 1)
        // staggered intro: columns rise left to right
        h *= easeOut(Math.min(1, Math.max(0, grow * 1.6 - x / NX * 0.6)))
        h = Math.max(0.04, h)
        if (onPath && x === NX - 1) tallest = h
        pos.set(cx(x), h / 2, cz(z))
        scl.set(1, h, 1)
        cols.setMatrixAt(i++, m4.compose(pos, quat, scl))
      }
    }
    cols.instanceMatrix.needsUpdate = true

    // dots rise up and to the right of the tallest column, like the logo
    const top = tallest + 0.6
    const lx = cx(NX - 1)
    const bob = opts.reduced ? 0 : Math.sin(t * 1.6) * 0.08
    const spots: [number, number][] = [[-1.5, 0], [-0.75, 0.75], [0.25, 1.7]]
    dots.forEach((d, j) => {
      const [dx, dy] = spots[j]!
      d.position.set(lx + dx, top + dy + scroll * 0.8 + bob * (j + 1) * 0.6, cz(PATH_Z))
      d.scale.setScalar(easeOut(Math.min(1, Math.max(0, intro * 2 - 1 - j * 0.15))))
    })

    // camera: a slow drift, eased toward the pointer
    pointer.x += (pointer.tx - pointer.x) * 0.06
    pointer.y += (pointer.ty - pointer.y) * 0.06
    camera.position.set(-5 + pointer.x * 1.4, 4.4 + pointer.y * 0.8 - scroll * 0.6, opts.compact ? 12.5 : 17)
    camera.lookAt(0.6, 2.2 + scroll * 0.8, 0)
  }

  function resize() {
    const { width, height } = host.getBoundingClientRect()
    if (!width || !height) return
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.fov = width / height < 1 ? 46 : 34
    camera.updateProjectionMatrix()
  }

  let raf = 0
  let visible = true
  const start = performance.now()
  let last = start
  function frame(now = performance.now()) {
    raf = 0
    const dt = Math.min((now - last) / 1000, 0.05)
    last = now
    if (intro < 1) intro = Math.min(1, intro + dt / 1.8)
    const rect = host.getBoundingClientRect()
    scroll = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)))
    layout((now - start) / 1000)
    renderer.render(scene, camera)
    if (!opts.reduced && visible && !document.hidden) raf = requestAnimationFrame(frame)
  }
  const kick = () => { if (!raf) raf = requestAnimationFrame(frame) }

  const ro = new ResizeObserver(() => { resize(); kick() })
  ro.observe(host)
  const io = new IntersectionObserver(([e]) => { visible = !!e?.isIntersecting; if (visible) kick() })
  io.observe(host)
  const mo = new MutationObserver(() => { paint(); kick() })
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  const onMove = (e: PointerEvent) => {
    pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2
    pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2
  }
  const onVis = () => kick()
  if (!opts.reduced) window.addEventListener('pointermove', onMove, { passive: true })
  document.addEventListener('visibilitychange', onVis)

  paint()
  resize()
  kick()

  return () => {
    cancelAnimationFrame(raf)
    ro.disconnect(); io.disconnect(); mo.disconnect()
    window.removeEventListener('pointermove', onMove)
    document.removeEventListener('visibilitychange', onVis)
    geo.dispose(); mat.dispose(); dotMat.dispose()
    dots.forEach((d) => d.geometry.dispose())
    cols.dispose()
    renderer.dispose()
  }
}
