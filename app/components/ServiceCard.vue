<script setup lang="ts">
import type { Service } from '~/data/site'
defineProps<{ service: Service; detailed?: boolean }>()
</script>

<template>
  <article class="card service">
    <div class="icon-badge"><RIcon :name="service.icon" :size="30" /></div>
    <h3 class="t-h3">{{ service.title }}</h3>
    <p class="muted">{{ service.summary }}</p>
    <ul v-if="detailed" class="includes">
      <li v-for="item in service.includes" :key="item"><RIcon name="check" :size="18" /> {{ item }}</li>
    </ul>
  </article>
</template>

<style scoped>
.service { display: flex; flex-direction: column; gap: 10px; height: 100%; }
.icon-badge { margin-bottom: 6px; }
.includes { list-style: none; padding: 12px 0 0; margin: auto 0 0; border-top: 1px solid var(--line); display: flex; flex-direction: column; gap: 6px; font-size: 15px; }
.includes li { display: flex; align-items: center; gap: 8px; }
</style>
