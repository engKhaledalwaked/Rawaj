<script setup lang="ts">
// The Rawaj logo, inlined so it follows the light/dark theme (letters: --ink, rising dots: --brand).
import raw from '~/assets/brand/rawaj-logo.svg?raw'

const props = withDefaults(defineProps<{ height?: number }>(), { height: 36 })
const svg = computed(() =>
  raw
    .replace(/width="\d+" height="\d+"/, `height="${props.height}" role="img" aria-label="Rawaj — رواج"`)
    .replaceAll('fill="#16181D"', 'class="rj-t"')
    .replaceAll('fill="#F26B1D"', 'class="rj-m"'),
)
</script>

<template>
  <span class="r-logo" v-html="svg" />
</template>

<style scoped>
.r-logo { display: inline-flex; line-height: 0; }
.r-logo :deep(svg) { width: auto; }
</style>
