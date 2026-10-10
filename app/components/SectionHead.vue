<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; lead?: string; level?: 'h1' | 'h2' }>()
</script>

<template>
  <div class="section-head">
    <p v-if="eyebrow" class="eyebrow t-label">{{ eyebrow }}</p>
    <component :is="level ?? 'h2'" :class="level === 'h1' ? 't-h1' : 't-h2'">{{ title }}</component>
    <p v-if="lead" class="lead muted">{{ lead }}</p>
  </div>
</template>

<style scoped>
.section-head { display: flex; flex-direction: column; gap: 10px; max-width: 680px; margin-bottom: var(--space-12); }
.eyebrow { color: var(--brand-strong); }
.lead { font-size: 17px; line-height: 30px; }
</style>
