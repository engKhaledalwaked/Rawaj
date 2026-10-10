<script setup lang="ts">
import { platforms, prices, services, steps } from '~/data/site'

useHead({ title: 'رواج — برمجة وإعلانات تصنع الطلب' })
const build = services.filter((s) => s.group === 'build')
const grow = services.filter((s) => s.group === 'grow')
const oneTime = prices.filter((p) => ['landing', 'web', 'store', 'system'].includes(p.id))
const monthly = prices.filter((p) => p.unit)
</script>

<template>
  <div>
    <!-- hero -->
    <section class="hero container">
      <div class="hero-text">
        <h1 class="t-display">نبني مشروعك الرقمي، ثم نصنع له الطلب.</h1>
        <p class="lead muted">مواقع وتطبيقات وإعلانات للشركات في الأردن والخليج. أسعار معلنة، ونتائج نقيسها بالأرقام.</p>
        <div class="ctas">
          <NuxtLink to="/contact" class="btn btn-primary">احجز مكالمة مجانية</NuxtLink>
          <NuxtLink to="/pricing" class="btn btn-secondary">شاهد الأسعار</NuxtLink>
        </div>
      </div>
      <HeroScene />
    </section>

    <!-- platforms we work on -->
    <div class="platforms">
      <div class="container plat-row">
        <span class="muted t-small">نعمل على</span>
        <ul>
          <li v-for="p in platforms" :key="p" :dir="/[a-z]/i.test(p) ? 'ltr' : 'rtl'">{{ p }}</li>
        </ul>
      </div>
    </div>

    <!-- build + grow -->
    <section class="section container">
      <SectionHead title="نصف عملنا بناء، ونصفه جلب العملاء" lead="فريق واحد يفهم الكود والإعلان معاً، فلا يضيع مشروعك بين شركتين." />
      <div class="halves">
        <div class="half build">
          <h3 class="half-title">نبني <span>الأساس الرقمي</span></h3>
          <ul>
            <li v-for="s in build" :key="s.id">
              <RIcon :name="s.icon" :size="26" />
              <div><strong>{{ s.title }}</strong><p class="muted">{{ s.summary }}</p></div>
            </li>
          </ul>
        </div>
        <div class="half grow">
          <h3 class="half-title">ننمّي <span>العملاء والمبيعات</span></h3>
          <ul>
            <li v-for="s in grow" :key="s.id">
              <RIcon :name="s.icon" :size="26" />
              <div><strong>{{ s.title }}</strong><p class="muted">{{ s.summary }}</p></div>
            </li>
          </ul>
        </div>
      </div>
      <NuxtLink to="/services" class="btn btn-link more">تفاصيل كل خدمة</NuxtLink>
    </section>

    <!-- funnel -->
    <section class="section container">
      <SectionHead title="من الإعلان إلى الطلب" lead="العميل يمر بأربع مراحل قبل أن يشتري، وفي كل مرحلة قد تخسره. هذه الخدمات التي تعمل في كل مرحلة." />
      <DemandFunnel />
    </section>

    <!-- process -->
    <section class="section container">
      <SectionHead title="ثلاث خطوات، وأرقام في كل خطوة" />
      <ol class="timeline">
        <li v-for="(s, i) in steps" :key="s.title">
          <span class="node">{{ i + 1 }}</span>
          <h3 class="t-h3">{{ s.title }}</h3>
          <p class="muted">{{ s.body }}</p>
        </li>
      </ol>
    </section>

    <!-- prices -->
    <section class="section container prices">
      <div class="prices-text">
        <SectionHead title="أسعار معلنة، بدون مفاجآت" lead="هذه أسعار البداية بالدينار الأردني. السعر النهائي تعرفه مكتوباً قبل أن نبدأ." />
        <ul class="monthly">
          <li v-for="p in monthly" :key="p.id">
            <span>{{ p.name }}</span>
            <span class="dots-fill" aria-hidden="true" />
            <strong>{{ p.from }}<template v-if="!p.from.includes('%')"> د.أ</template></strong>
            <span class="muted t-small">{{ p.unit }}</span>
          </li>
        </ul>
        <NuxtLink to="/pricing" class="btn btn-link">قائمة الأسعار كاملة</NuxtLink>
      </div>
      <div class="card chart-card">
        <PriceChart :items="oneTime" caption="مشاريع لمرة واحدة، يبدأ من" />
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
.hero { display: grid; grid-template-columns: 1fr 1.05fr; gap: 56px; align-items: center; padding-block: 64px 72px; }
.hero-text { display: flex; flex-direction: column; gap: 24px; }
.hero-text h1 { font-size: clamp(40px, 5.4vw, 64px); line-height: 1.18; letter-spacing: -.01em; }
.lead { font-size: 18px; line-height: 32px; max-width: 520px; }
.ctas { display: flex; flex-wrap: wrap; gap: 12px; }

.platforms { border-block: 1px solid var(--line); }
.plat-row { display: flex; align-items: center; gap: 24px; padding-block: 18px; }
.plat-row ul { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px 28px; }
.plat-row li { font: 600 17px/24px var(--font-display); color: var(--ink-muted); }

.halves { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.half { border-radius: var(--radius-lg); padding: 32px; }
.build { background: var(--accent-tint); }
.grow { background: var(--brand-tint); }
.half-title { font: 700 40px/1.1 var(--font-display); display: flex; align-items: baseline; gap: 12px; margin-bottom: 20px; }
.half-title span { font: 600 15px/1 var(--font-sans); color: var(--ink-muted); }
.build .half-title { color: var(--accent); }
.grow .half-title { color: var(--brand-strong); }
.half ul { list-style: none; margin: 0; padding: 0; }
.half li { display: flex; gap: 14px; padding-block: 14px; border-top: 1px solid color-mix(in srgb, var(--ink) 12%, transparent); }
.half li > div { display: flex; flex-direction: column; gap: 2px; }
.half li p { font-size: 15px; line-height: 24px; }
.more { margin-top: 16px; }

.timeline { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; position: relative; }
/* the line joining the three steps */
.timeline::before { content: ''; position: absolute; top: 27px; inset-inline: 28px; height: 2px; background: var(--line); }
.timeline li { position: relative; display: flex; flex-direction: column; gap: 10px; }
.node { width: 56px; height: 56px; border-radius: 50%; display: grid; place-items: center; font: 700 22px/1 var(--font-display); background: var(--surface); border: 2px solid var(--ink); margin-bottom: 6px; }
.timeline li:last-child .node { background: var(--brand); border-color: var(--brand); color: var(--ink-on-brand); }

.prices { display: grid; grid-template-columns: .9fr 1.1fr; gap: 48px; align-items: center; }
.prices-text :deep(.section-head) { margin-bottom: 24px; }
.monthly { list-style: none; margin: 0 0 16px; padding: 0; display: flex; flex-direction: column; }
.monthly li { display: flex; align-items: baseline; gap: 10px; padding-block: 10px; border-bottom: 1px solid var(--line); }
.dots-fill { flex: 1; }
.monthly strong { font-family: var(--font-display); font-size: 18px; }
.chart-card { padding: 28px; }

@media (max-width: 960px) {
  .hero, .prices { grid-template-columns: 1fr; gap: 40px; }
  .hero { padding-block: 40px 56px; }
}
@media (max-width: 760px) {
  .halves { grid-template-columns: 1fr; }
  .half { padding: 24px 20px; }
  .half-title { font-size: 32px; }
  .timeline { grid-template-columns: 1fr; gap: 24px; }
  .timeline::before { top: 28px; bottom: 28px; inset-inline-start: 27px; inset-inline-end: auto; width: 2px; height: auto; }
  .timeline li { padding-inline-start: 76px; }
  .node { position: absolute; inset-inline-start: 0; top: 0; }
  .plat-row { flex-direction: column; align-items: flex-start; gap: 8px; }
}
</style>
