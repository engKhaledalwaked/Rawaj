<script setup lang="ts">
import { prices } from '~/data/site'
useHead({ title: 'الأسعار — رواج' })

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
      <SectionHead level="h1" eyebrow="الأسعار" title="أسعار البداية، بالدينار الأردني" lead="ننشر أسعارنا لأننا نؤمن أن الثقة تبدأ بالوضوح. السعر النهائي يصلك مكتوباً قبل أن نبدأ، ولا يتغير إلا إذا غيّرت أنت المطلوب." />
      <div class="grid-4">
        <PriceCard v-for="p in prices" :key="p.id" :price="p" />
      </div>
    </section>

    <section class="section container two">
      <div class="card">
        <h2 class="t-h3">ما الذي يحدد السعر؟</h2>
        <ul class="list">
          <li v-for="f in factors" :key="f"><RIcon name="check" :size="18" /> {{ f }}</li>
        </ul>
      </div>
      <div class="card gulf">
        <h2 class="t-h3">عملاء الخليج</h2>
        <p class="muted">نعمل مع شركات في السعودية والإمارات وباقي الخليج عن بُعد، ونسعّر بالريال أو الدرهم. اطلب عرضاً وسيصلك خلال يوم عمل.</p>
        <NuxtLink to="/contact" class="btn btn-tech">اطلب عرض سعر <RIcon name="arrow-left" :size="20" /></NuxtLink>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.list { list-style: none; padding: 0; margin: 16px 0 0; display: flex; flex-direction: column; gap: 10px; }
.list li { display: flex; align-items: center; gap: 10px; }
.gulf { display: flex; flex-direction: column; gap: 14px; align-items: flex-start; background: var(--accent-tint); border-color: transparent; }
@media (max-width: 760px) { .two { grid-template-columns: 1fr; } }
</style>
