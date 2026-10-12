<script setup lang="ts">
import { plans } from '~/data/site'
useHead({ title: 'الخطط — رواج' })

const groups = [
  { title: 'مشاريع لمرة واحدة', items: plans.filter((p) => p.kind === 'once') },
  { title: 'خدمات شهرية', items: plans.filter((p) => p.kind === 'monthly') },
]
const factors = [
  'عدد الصفحات أو الشاشات',
  'اللغات (عربي فقط، أو عربي وإنجليزي)',
  'الربط مع أنظمة أخرى (دفع، شحن، حجوزات)',
  'من يكتب المحتوى ويجهز الصور',
  'المدة المطلوبة للتسليم',
]
</script>

<template>
  <div>
    <section class="section container">
      <SectionHead level="h1" title="اختر الخطة، ونرسل لك عرضاً مكتوباً" lead="كل مشروع يختلف، لذلك لا نضع سعراً واحداً للجميع. اختر الأقرب لك، ويصلك عرض السعر خلال يوم عمل، ولا يتغير إلا إذا غيّرت أنت المطلوب." />

      <div v-for="g in groups" :key="g.title" class="group">
        <h2 class="t-h2 g-title">{{ g.title }}</h2>
        <div v-reveal="'stagger'" class="grid">
          <PlanCard v-for="p in g.items" :key="p.id" :plan="p" />
        </div>
      </div>
    </section>

    <section class="section container two">
      <div v-reveal class="card">
        <h2 class="t-h3">ما الذي يحدد عرض السعر؟</h2>
        <ul class="factors">
          <li v-for="f in factors" :key="f"><RIcon name="check" :size="18" /> {{ f }}</li>
        </ul>
      </div>
      <div v-reveal class="card gulf">
        <h2 class="t-h3">عملاء الخليج</h2>
        <p class="muted">نعمل مع شركات في السعودية والإمارات وباقي الخليج عن بُعد، ونسعّر بالريال أو الدرهم. اطلب عرضاً وسيصلك خلال يوم عمل.</p>
        <NuxtLink to="/contact" class="btn btn-tech">اطلب عرض سعر</NuxtLink>
      </div>
    </section>

    <CtaBand title="لست متأكداً أي خطة تناسبك؟" lead="مكالمة مجانية 20 دقيقة: نسمع عن مشروعك ونقترح الخطة الأنسب." />
  </div>
</template>

<style scoped>
.group + .group { margin-top: 64px; }
.g-title { margin-bottom: 28px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; align-items: stretch; }
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.factors { list-style: none; padding: 0; margin: 16px 0 0; display: flex; flex-direction: column; gap: 10px; }
.factors li { display: flex; align-items: center; gap: 10px; }
.gulf { display: flex; flex-direction: column; gap: 14px; align-items: flex-start; background: var(--accent-tint); border-color: transparent; }
@media (max-width: 760px) { .two { grid-template-columns: 1fr; } }
</style>
