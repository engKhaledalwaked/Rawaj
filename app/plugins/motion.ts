// GSAP + ScrollTrigger, registered once. `v-reveal` fades an element (or, with v-reveal="'stagger'", its
// children) up into place the first time it scrolls into view. Skipped for prefers-reduced-motion.
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) gsap.registerPlugin(ScrollTrigger)

  nuxtApp.vueApp.directive<HTMLElement, 'stagger' | undefined>('reveal', {
    getSSRProps: () => ({}),
    mounted(el, { value }) {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.from(value === 'stagger' ? el.children : el, {
        y: 28, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      })
    },
  })

  // pages change height after navigation; recompute trigger positions
  nuxtApp.hook('page:finish', () => { if (import.meta.client) requestAnimationFrame(() => ScrollTrigger.refresh()) })
})
