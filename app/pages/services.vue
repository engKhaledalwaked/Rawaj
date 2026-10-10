<script setup lang="ts">
import { services } from '~/data/site'

useHead({ title: 'الخدمات — رواج' })
const groups = [
  { id: 'build', title: 'نبني', sub: 'الأساس الرقمي', items: services.filter((s) => s.group === 'build') },
  { id: 'grow', title: 'ننمّي', sub: 'العملاء والمبيعات', items: services.filter((s) => s.group === 'grow') },
]
</script>

<template>
  <div>
    <section class="section container">
      <SectionHead level="h1" title="نبني، ثم ننمّي" lead="نصف عملنا بناء المنتج الرقمي، والنصف الآخر جلب العملاء إليه. اختر ما تحتاجه، أو اتركنا نقترح الخطة." />

      <div v-for="g in groups" :key="g.id" class="group" :class="g.id">
        <h2 class="group-title">{{ g.title }} <span>{{ g.sub }}</span></h2>
        <article v-for="s in g.items" :id="s.id" :key="s.id" class="svc">
          <div class="svc-main">
            <span class="badge"><RIcon :name="s.icon" :size="28" /></span>
            <div>
              <h3 class="t-h3">{{ s.title }}</h3>
              <p class="muted">{{ s.summary }}</p>
            </div>
          </div>
          <ul class="includes" :aria-label="`ما تشمله ${s.title}`">
            <li v-for="item in s.includes" :key="item"><RIcon name="check" :size="18" /> {{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section container">
      <SectionHead title="أين تعمل كل خدمة" lead="العميل يمر بأربع مراحل قبل أن يشتري. كل خدمة تسد ثغرة في مرحلة منها." />
      <DemandFunnel />
    </section>

    <CtaBand title="لا تعرف من أين تبدأ؟" lead="أخبرنا عن مشروعك، ونقترح عليك أصغر خطوة تعطيك أكبر نتيجة." />
  </div>
</template>

<style scoped>
.group { border-radius: var(--radius-lg); padding: 36px 40px 20px; margin-bottom: 20px; }
.build { background: var(--accent-tint); }
.grow { background: var(--brand-tint); }
.group-title { font: 700 48px/1.1 var(--font-display); display: flex; align-items: baseline; gap: 14px; margin-bottom: 12px; }
.group-title span { font: 600 16px/1 var(--font-sans); color: var(--ink-muted); }
.build .group-title { color: var(--accent); }
.grow .group-title { color: var(--brand-strong); }
.svc { display: grid; grid-template-columns: 1.2fr 1fr; gap: 32px; padding-block: 22px; border-top: 1px solid color-mix(in srgb, var(--ink) 12%, transparent); scroll-margin-top: 90px; }
.svc-main { display: flex; gap: 16px; align-items: flex-start; }
.svc-main > div { display: flex; flex-direction: column; gap: 4px; }
.badge { width: 52px; height: 52px; flex: none; display: grid; place-items: center; border-radius: var(--radius-md); background: var(--surface-raised); }
.includes { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; font-size: 15px; }
.includes li { display: flex; align-items: center; gap: 8px; }
@media (max-width: 760px) {
  .group { padding: 24px 20px 8px; }
  .group-title { font-size: 36px; }
  .svc { grid-template-columns: 1fr; gap: 14px; }
  .includes { padding-inline-start: 68px; }
}
</style>
