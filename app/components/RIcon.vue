<script setup lang="ts">
// Rawaj icon set (design-system/assets/Icons/rawaj-icons.json). Colours follow the theme via .rj-* classes.
import data from '~/assets/brand/rawaj-icons.json'

const props = withDefaults(defineProps<{ name: string; size?: number }>(), { size: 24 })
const icons = data.icons as Record<string, string>
const svg = computed(() =>
  (icons[props.name] ?? '').replace('width="24" height="24"', `width="${props.size}" height="${props.size}" aria-hidden="true" focusable="false"`),
)
</script>

<template>
  <span class="r-icon" v-html="svg" />
</template>

<style scoped>
.r-icon { display: inline-flex; flex: none; line-height: 0; }
</style>
