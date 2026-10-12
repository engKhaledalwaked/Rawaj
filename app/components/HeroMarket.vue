<script setup lang="ts">
// Hosts the 3D market scene. three.js is imported after mount; without WebGL the area stays empty.
const host = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()
const ready = ref(false)
let destroy: (() => void) | undefined

onMounted(async () => {
  try {
    const { createMarket } = await import('~/lib/market-scene')
    if (!host.value || !canvas.value) return
    destroy = createMarket(canvas.value, host.value, {
      reduced: matchMedia('(prefers-reduced-motion: reduce)').matches,
      compact: matchMedia('(max-width: 760px)').matches,
    })
    ready.value = true
  } catch {
    // no WebGL: the hero text carries the page on its own
  }
})
onBeforeUnmount(() => destroy?.())
</script>

<template>
  <div ref="host" class="market" :class="{ ready }" aria-hidden="true">
    <canvas ref="canvas" />
  </div>
</template>

<style scoped>
.market { position: relative; width: 100%; height: 100%; min-height: 360px; }
canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; opacity: 0; transition: opacity .6s ease; }
.ready canvas { opacity: 1; }
@media (prefers-reduced-motion: reduce) { canvas { transition: none; } }
</style>
