<script setup lang="ts">
withDefaults(defineProps<{ title?: string; lead?: string }>(), {
  title: 'جاهز تبدأ؟',
  lead: 'مكالمة مجانية 20 دقيقة: نفهم مشروعك ونعطيك خطة وسعراً واضحاً.',
})
</script>

<template>
  <section class="container">
    <div class="band">
      <div class="dots" aria-hidden="true"><span /><span /><span /></div>
      <div class="text">
        <h2 class="t-h2">{{ title }}</h2>
        <p>{{ lead }}</p>
      </div>
      <NuxtLink to="/contact" class="btn btn-primary">
        احجز مكالمة مجانية
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.band {
  position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;
  padding: 48px; border-radius: var(--radius-lg);
  background: var(--ink); color: var(--surface);
}
.band h2 { color: var(--surface); }
.text { display: flex; flex-direction: column; gap: 8px; max-width: 560px; position: relative; }
.text p { opacity: .85; }
/* the logo's rising dots, as a quiet motif */
.dots { position: absolute; inset-inline-end: 300px; top: 50%; transform: translateY(-50%); direction: ltr; display: flex; align-items: flex-end; gap: 10px; opacity: .9; }
.dots span { display: block; border-radius: 50%; background: var(--brand); }
.dots span:nth-child(1) { width: 12px; height: 12px; }
.dots span:nth-child(2) { width: 20px; height: 20px; margin-bottom: 14px; }
.dots span:nth-child(3) { width: 34px; height: 34px; margin-bottom: 34px; }
@media (max-width: 1140px) { .dots { display: none; } }
@media (max-width: 760px) { .band { padding: 32px 24px; } }
</style>
