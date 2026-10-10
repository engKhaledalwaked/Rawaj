<script setup lang="ts">
import { services } from '~/data/site'

useHead({ title: 'الخدمات — رواج' })
const build = services.filter((s) => s.group === 'build')
const grow = services.filter((s) => s.group === 'grow')
</script>

<template>
  <div>
    <section class="section container">
      <SectionHead level="h1" eyebrow="الخدمات" title="نبني، ثم ننمّي" lead="نصف عملنا بناء المنتج الرقمي، والنصف الآخر جلب العملاء إليه. اختر ما تحتاجه، أو اتركنا نقترح الخطة." />

      <h2 class="t-h2 group">نبني <span class="muted t-small">الأساس الرقمي</span></h2>
      <div class="grid-3">
        <ServiceCard v-for="s in build" :key="s.id" :service="s" detailed />
      </div>

      <h2 class="t-h2 group">ننمّي <span class="muted t-small">العملاء والمبيعات</span></h2>
      <div class="grid-3">
        <ServiceCard v-for="s in grow" :key="s.id" :service="s" detailed />
      </div>
    </section>
    <CtaBand title="لا تعرف من أين تبدأ؟" lead="أخبرنا عن مشروعك، ونقترح عليك أصغر خطوة تعطيك أكبر نتيجة." />
  </div>
</template>

<style scoped>
.group { display: flex; align-items: baseline; gap: 12px; margin: 48px 0 20px; }
.group:first-of-type { margin-top: 0; }
</style>
