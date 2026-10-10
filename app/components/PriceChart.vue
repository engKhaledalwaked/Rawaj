<script setup lang="ts">
// Column chart of starting prices, drawn from `prices` in site.ts. Columns run left to right, cheapest first.
import type { Price } from '~/data/site'

const props = defineProps<{ items: Price[]; caption: string; unit?: string }>()
const value = (p: Price) => Number(p.from.replace(/,/g, ''))
const sorted = computed(() => [...props.items].sort((a, b) => value(a) - value(b)))
const max = computed(() => Math.max(...sorted.value.map(value)))
</script>

<template>
  <figure class="chart">
    <figcaption class="t-label muted">{{ caption }}</figcaption>
    <div class="plot">
      <div v-for="p in sorted" :key="p.id" class="col" :class="{ featured: p.featured }">
        <span class="val"><b>{{ p.from }}</b> د.أ<template v-if="unit"> {{ unit }}</template></span>
        <span class="bar" :style="{ height: Math.max(4, (value(p) / max) * 100) + '%' }" />
      </div>
    </div>
    <div class="names">
      <span v-for="p in sorted" :key="p.id">{{ p.name }}</span>
    </div>
  </figure>
</template>

<style scoped>
.chart { margin: 0; display: flex; flex-direction: column; gap: 16px; }
/* left to right even on Arabic pages, so prices rise to the right like the logo's dots */
.plot, .names { direction: ltr; display: grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 14px; }
.plot { height: 240px; align-items: end; border-bottom: 2px solid var(--line); }
.col { height: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: stretch; gap: 8px; }
.val { direction: rtl; text-align: center; font-size: 13px; color: var(--ink-muted); white-space: nowrap; }
.val b { font: 700 20px/1 var(--font-display); color: var(--ink); }
.bar { border-radius: 10px 10px 0 0; background: var(--line); }
.featured .bar { background: var(--brand); }
.names span { direction: rtl; text-align: center; font-size: 14px; line-height: 20px; font-weight: 600; }
@media (max-width: 520px) {
  .plot, .names { gap: 8px; }
  .val b { font-size: 16px; }
  .val { font-size: 11px; }
  .names span { font-size: 12px; line-height: 17px; }
}
</style>
