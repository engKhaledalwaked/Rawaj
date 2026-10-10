<script setup lang="ts">
import { prices, services, steps } from '~/data/site'

useHead({ title: 'رواج — برمجة وإعلانات تصنع الطلب' })
const featured = services.filter((s) => ['web', 'mobile-app', 'ecommerce', 'ads', 'social-media', 'seo'].includes(s.id))
const topPrices = prices.filter((p) => ['web', 'store', 'social', 'ads'].includes(p.id))
</script>

<template>
  <div>
    <!-- hero -->
    <section class="hero container">
      <div class="hero-text">
        <p class="t-label kicker">برمجة + إعلانات، تحت سقف واحد</p>
        <h1 class="t-display">نبني مشروعك الرقمي، ثم <span class="hl">نصنع له الطلب</span>.</h1>
        <p class="lead muted">مواقع وتطبيقات وإعلانات للشركات في الأردن والخليج. أسعار معلنة، ونتائج نقيسها بالأرقام.</p>
        <div class="ctas">
          <NuxtLink to="/contact" class="btn btn-primary">احجز مكالمة مجانية <RIcon name="arrow-left" :size="20" /></NuxtLink>
          <NuxtLink to="/pricing" class="btn btn-secondary">شاهد الأسعار</NuxtLink>
        </div>
      </div>

      <!-- visual: the logo's idea, a chart that rises to the orange dot -->
      <div class="hero-art" aria-hidden="true">
        <div class="panel">
          <div class="panel-top">
            <span class="pill"><RIcon name="growth" :size="18" /> طلباتك</span>
          </div>
          <div class="bars">
            <span style="height: 22%" /><span style="height: 34%" /><span style="height: 30%" /><span style="height: 46%" /><span style="height: 58%" /><span class="up" style="height: 72%" />
          </div>
          <div class="rise"><i /><i /><i /></div>
        </div>
      </div>
    </section>

    <!-- services -->
    <section class="section container">
      <SectionHead eyebrow="الخدمات" title="كل ما يحتاجه مشروعك ليكبر" lead="نبني الأساس الرقمي، ثم نجلب له العملاء. فريق واحد يفهم الكود والإعلان معاً." />
      <div class="grid-3">
        <ServiceCard v-for="s in featured" :key="s.id" :service="s" />
      </div>
      <NuxtLink to="/services" class="btn btn-link more">كل الخدمات (11) <RIcon name="arrow-left" :size="20" /></NuxtLink>
    </section>

    <!-- process -->
    <section class="section container">
      <SectionHead eyebrow="طريقة العمل" title="ثلاث خطوات، وأرقام في كل خطوة" />
      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.title" class="card step">
          <span class="step-num">{{ i + 1 }}</span>
          <div class="icon-badge"><RIcon :name="s.icon" :size="30" /></div>
          <h3 class="t-h3">{{ s.title }}</h3>
          <p class="muted">{{ s.body }}</p>
        </li>
      </ol>
    </section>

    <!-- prices -->
    <section class="section container">
      <SectionHead eyebrow="الأسعار" title="أسعار معلنة، بدون مفاجآت" lead="هذه أسعار البداية. السعر النهائي تعرفه قبل أن نبدأ، مكتوباً." />
      <div class="grid-4">
        <PriceCard v-for="p in topPrices" :key="p.id" :price="p" />
      </div>
      <NuxtLink to="/pricing" class="btn btn-link more">قائمة الأسعار كاملة <RIcon name="arrow-left" :size="20" /></NuxtLink>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
.hero { display: grid; grid-template-columns: 1.1fr .9fr; gap: 48px; align-items: center; padding-block: 72px 96px; }
.hero-text { display: flex; flex-direction: column; gap: 20px; }
.kicker { color: var(--accent); }
.hl { color: var(--brand-strong); }
.lead { font-size: 18px; line-height: 32px; max-width: 540px; }
.ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px; }

.hero-art { display: flex; justify-content: center; }
.panel {
  position: relative; width: 100%; max-width: 440px; aspect-ratio: 1 / .86;
  background: var(--surface-raised); border: 1px solid var(--line); border-radius: var(--radius-lg);
  padding: 28px; display: flex; flex-direction: column;
}
.panel-top { display: flex; justify-content: flex-end; }
.pill { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px; background: var(--accent-tint); font-weight: 600; font-size: 14px; }
/* charts read left to right even on Arabic pages, so growth rises to the right */
.bars { direction: ltr; flex: 1; display: flex; align-items: flex-end; gap: 12px; padding-top: 24px; border-bottom: 2px solid var(--line); }
.bars span { flex: 1; border-radius: 8px 8px 0 0; background: var(--line); }
.bars .up { background: var(--brand); }
.rise { position: absolute; top: 30px; right: 30px; display: flex; align-items: flex-end; gap: 8px; direction: ltr; }
.rise i { display: block; border-radius: 50%; background: var(--brand); }
.rise i:nth-child(1) { width: 12px; height: 12px; }
.rise i:nth-child(2) { width: 19px; height: 19px; margin-bottom: 12px; }
.rise i:nth-child(3) { width: 32px; height: 32px; margin-bottom: 30px; }

.more { margin-top: 20px; }
.steps { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
.step { position: relative; display: flex; flex-direction: column; gap: 10px; }
.step-num { position: absolute; top: 20px; inset-inline-end: 24px; font-family: var(--font-display); font-weight: 700; font-size: 40px; line-height: 1; color: var(--line); }

@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; padding-block: 40px 64px; gap: 40px; }
  .hero-text h1 { font-size: 40px; line-height: 50px; }
}
</style>
