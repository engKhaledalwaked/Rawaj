<script setup lang="ts">
import { prices } from '~/data/site'
useHead({ title: 'الأسعار — رواج' })

const oneTime = prices.filter((p) => !p.unit)
const monthly = prices.filter((p) => p.unit)
const monthlyFixed = monthly.filter((p) => !p.from.includes('%'))

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
      <SectionHead level="h1" title="أسعار البداية، بالدينار الأردني" lead="ننشر أسعارنا لأننا نؤمن أن الثقة تبدأ بالوضوح. السعر النهائي يصلك مكتوباً قبل أن نبدأ، ولا يتغير إلا إذا غيّرت أنت المطلوب." />

      <div class="charts">
        <div class="card"><PriceChart :items="oneTime" caption="مشاريع لمرة واحدة، يبدأ من" /></div>
        <div class="card"><PriceChart :items="monthlyFixed" caption="خدمات شهرية، يبدأ من" unit="/ شهر" /></div>
      </div>

      <div class="tables">
        <table v-for="t in [{ title: 'مشاريع لمرة واحدة', rows: oneTime }, { title: 'خدمات شهرية', rows: monthly }]" :key="t.title" class="list">
          <caption class="t-h3">{{ t.title }}</caption>
          <thead class="sr-only"><tr><th>الخدمة</th><th>يبدأ من</th><th>ملاحظات</th></tr></thead>
          <tbody>
            <tr v-for="p in t.rows" :key="p.id" :class="{ featured: p.featured }">
              <th scope="row">
                <div class="name">
                  <RIcon :name="p.icon" :size="22" />
                  <span>{{ p.name }}</span>
                  <em v-if="p.featured" class="t-label">الأكثر طلباً</em>
                </div>
              </th>
              <td class="amount">
                <span class="muted t-small">يبدأ من</span>
                <b>{{ p.from }}</b>
                <span v-if="!p.from.includes('%')">د.أ</span>
                <span v-if="p.unit" class="muted t-small">{{ p.unit }}</span>
              </td>
              <td class="muted note">{{ p.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section container two">
      <div class="card">
        <h2 class="t-h3">ما الذي يحدد السعر؟</h2>
        <ul class="factors">
          <li v-for="f in factors" :key="f"><RIcon name="check" :size="18" /> {{ f }}</li>
        </ul>
      </div>
      <div class="card gulf">
        <h2 class="t-h3">عملاء الخليج</h2>
        <p class="muted">نعمل مع شركات في السعودية والإمارات وباقي الخليج عن بُعد، ونسعّر بالريال أو الدرهم. اطلب عرضاً وسيصلك خلال يوم عمل.</p>
        <NuxtLink to="/contact" class="btn btn-tech">اطلب عرض سعر</NuxtLink>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
.charts { display: grid; grid-template-columns: 1.3fr 1fr; gap: 16px; margin-bottom: 56px; }
.charts .card { padding: 28px; }
.tables { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.list { width: 100%; border-collapse: collapse; align-self: start; }
.list caption { text-align: start; padding-bottom: 12px; }
.list tr { border-top: 1px solid var(--line); }
.list th, .list td { padding: 16px 0; vertical-align: top; text-align: start; }
.list th { font-weight: 600; padding-inline-end: 12px; }
.name { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.list em { font-style: normal; background: var(--brand); color: var(--ink-on-brand); padding: 2px 10px; border-radius: 99px; }
.amount { white-space: nowrap; padding-inline-end: 16px !important; }
.amount b { font: 700 22px/1 var(--font-display); margin-inline: 4px; }
.note { font-size: 14px; line-height: 22px; }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.factors { list-style: none; padding: 0; margin: 16px 0 0; display: flex; flex-direction: column; gap: 10px; }
.factors li { display: flex; align-items: center; gap: 10px; }
.gulf { display: flex; flex-direction: column; gap: 14px; align-items: flex-start; background: var(--accent-tint); border-color: transparent; }
@media (max-width: 1100px) { .tables { grid-template-columns: 1fr; } }
@media (max-width: 760px) {
  .charts, .two { grid-template-columns: 1fr; }
  .list tr { display: grid; grid-template-columns: 1fr auto; padding-block: 12px; }
  .list th, .list td { padding: 4px 0; }
  .note { grid-column: 1 / -1; }
}
</style>
