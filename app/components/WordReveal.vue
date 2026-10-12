<script setup lang="ts">
// A statement whose words light up as it scrolls through the viewport.
// Split by words only: splitting Arabic into letters would break the joined script.
import { gsap } from 'gsap'

const props = defineProps<{ text: string }>()
const words = computed(() => props.text.split(' '))
const root = ref<HTMLElement>()
let ctx: gsap.Context | undefined

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo(root.value!.querySelectorAll('.w'), { opacity: 0.16 }, {
      opacity: 1, ease: 'none', stagger: 0.1,
      scrollTrigger: { trigger: root.value, start: 'top 75%', end: 'bottom 45%', scrub: true },
    })
  }, root.value)
})
onBeforeUnmount(() => ctx?.revert())
</script>

<template>
  <p ref="root" class="statement">
    <template v-for="(w, i) in words" :key="i"><span class="w">{{ w }}</span>{{ ' ' }}</template>
  </p>
</template>

<style scoped>
.statement { font: 700 clamp(28px, 4.2vw, 52px)/1.35 var(--font-display); color: var(--ink); max-width: 22ch; }
</style>
