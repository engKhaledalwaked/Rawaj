<script setup lang="ts">
// From ad to order: each stage of the funnel, and the services that work on it.
import { funnel, services } from '~/data/site'

const byId = Object.fromEntries(services.map((s) => [s.id, s]))
const widths = [100, 84, 68, 52]
</script>

<template>
  <ol class="funnel">
    <li v-for="(f, i) in funnel" :key="f.stage" class="row">
      <div class="lane">
        <div class="stage" :class="`s${i}`" :style="{ '--w': widths[i] + '%' }">
          <span class="num">{{ i + 1 }}</span>
          <div>
            <h3 class="t-h3">{{ f.stage }}</h3>
            <p>{{ f.what }}</p>
          </div>
        </div>
      </div>
      <ul class="svc" :aria-label="`خدمات مرحلة: ${f.stage}`">
        <li v-for="id in f.services" :key="id">
          <RIcon :name="byId[id]!.icon" :size="20" /> {{ byId[id]!.title }}
        </li>
      </ul>
    </li>
  </ol>
</template>

<style scoped>
.funnel { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.row { display: grid; grid-template-columns: 1.15fr 1fr; gap: 32px; align-items: center; }
.lane { display: flex; justify-content: center; }
.stage {
  width: var(--w); min-height: 92px; display: flex; align-items: center; gap: 16px;
  padding: 16px 24px; border-radius: var(--radius-md);
}
.stage p { font-size: 14px; line-height: 22px; }
.num { font: 700 30px/1 var(--font-display); opacity: .5; }
.s0 { background: var(--brand-tint); }
.s1 { background: color-mix(in srgb, var(--brand) 35%, var(--brand-tint)); }
/* 80% keeps ink-on-brand ≥ 4.5:1 in dark mode (70% drops to 4.4) */
.s2 { background: color-mix(in srgb, var(--brand) 80%, var(--brand-tint)); color: var(--ink-on-brand); }
.s3 { background: var(--brand); color: var(--ink-on-brand); }
.s2 h3, .s3 h3 { color: var(--ink-on-brand); }
.svc { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
.svc li { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border: 1px solid var(--line); border-radius: 99px; font-size: 14px; background: var(--surface-raised); }

@media (max-width: 760px) {
  .row { grid-template-columns: 1fr; gap: 10px; margin-bottom: 14px; }
  .stage { width: calc(70% + var(--w) * .3); }
}
</style>
