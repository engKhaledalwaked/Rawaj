<script setup lang="ts">
import type { Price } from '~/data/site'
defineProps<{ price: Price }>()
</script>

<template>
  <article class="card price" :class="{ featured: price.featured }">
    <p v-if="price.featured" class="badge t-label">الأكثر طلباً</p>
    <div class="top">
      <RIcon :name="price.icon" :size="26" />
      <h3 class="t-h3">{{ price.name }}</h3>
    </div>
    <p class="amount">
      <span class="from muted">يبدأ من</span>
      <span class="num">{{ price.from }}</span>
      <span v-if="!price.from.includes('%')" class="cur">د.أ</span>
      <span v-if="price.unit" class="unit muted">{{ price.unit }}</span>
    </p>
    <p class="note muted">{{ price.note }}</p>
  </article>
</template>

<style scoped>
.price { position: relative; display: flex; flex-direction: column; gap: 12px; }
.featured { border: 2px solid var(--brand); }
.badge { position: absolute; top: -12px; inset-inline-start: 20px; background: var(--brand); color: var(--ink-on-brand); padding: 3px 10px; border-radius: 999px; }
.top { display: flex; align-items: center; gap: 10px; }
.amount { display: flex; align-items: baseline; flex-wrap: wrap; gap: 6px; }
.from { font-size: 14px; }
.num { font-family: var(--font-display); font-weight: 700; font-size: 36px; line-height: 44px; color: var(--ink); }
.cur { font-weight: 600; }
.unit { font-size: 14px; }
.note { font-size: 14px; line-height: 22px; }
</style>
