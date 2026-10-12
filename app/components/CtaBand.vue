<script setup lang="ts">
withDefaults(defineProps<{ title?: string; lead?: string }>(), {
  title: 'جاهز تبدأ؟',
  lead: 'مكالمة مجانية 20 دقيقة: نفهم مشروعك ونعطيك خطة وسعراً واضحاً.',
})
</script>

<template>
  <section class="container">
    <div v-reveal class="band">
      <div class="text">
        <h2 class="t-h1">{{ title }}</h2>
        <p>{{ lead }}</p>
      </div>
      <!-- a slowly turning seal with the logo's rising dots at its centre -->
      <div class="seal" aria-hidden="true">
        <svg viewBox="0 0 160 160" class="ring">
          <defs><path id="cta-ring" d="M80 80m-62 0a62 62 0 1 1 124 0a62 62 0 1 1-124 0" /></defs>
          <text><textPath href="#cta-ring" textLength="388">نبني ثم نصنع الطلب • رواج • نبني ثم نصنع الطلب • رواج •</textPath></text>
        </svg>
        <span class="dots"><i /><i /><i /></span>
      </div>
      <NuxtLink to="/contact" class="btn btn-primary">احجز مكالمة مجانية</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.band {
  display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 40px;
  padding: 48px 56px; border-radius: var(--radius-lg);
  background: var(--brand-tint);
}
.text { display: flex; flex-direction: column; gap: 10px; max-width: 560px; }
.text p { color: var(--ink-muted); font-size: 17px; line-height: 30px; }

.seal { position: relative; width: 150px; height: 150px; display: grid; place-items: center; }
.ring { position: absolute; inset: 0; width: 100%; height: 100%; animation: turn 22s linear infinite; }
/* ltr base: in rtl, Chrome lays textPath text backwards from the path start, off the circle. The Arabic run still reads rtl. */
.ring text { font: 600 13px var(--font-sans); fill: var(--ink); direction: ltr; }
.dots { direction: ltr; display: flex; align-items: flex-end; gap: 6px; }
.dots i { display: block; border-radius: 50%; background: var(--brand); }
.dots i:nth-child(1) { width: 9px; height: 9px; }
.dots i:nth-child(2) { width: 14px; height: 14px; margin-bottom: 9px; }
.dots i:nth-child(3) { width: 24px; height: 24px; margin-bottom: 22px; }
@keyframes turn { to { transform: rotate(360deg); } }

@media (max-width: 960px) {
  .band { grid-template-columns: 1fr; gap: 24px; padding: 36px 28px; }
  .seal { display: none; }
  .btn { justify-self: start; }
}
@media (prefers-reduced-motion: reduce) { .ring { animation: none; } }
</style>
