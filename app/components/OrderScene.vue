<script setup lang="ts">
// Illustration of "build, then create demand": a store we build, an ad, an order arriving on WhatsApp, orders rising.
// `stage` (1–4) reveals the story step by step; 4 shows everything. Mock-up only: no real client, no real numbers.
withDefaults(defineProps<{ stage?: number }>(), { stage: 4 })
const bars = [26, 38, 33, 52, 64, 86]
</script>

<template>
  <div class="scene" :data-stage="stage" role="img" aria-label="مثال توضيحي: متجر إلكتروني نبنيه، وإعلان يجلب الزائر، وطلب يصل على واتساب، وطلبات ترتفع">
    <!-- the ad that brings the visitor -->
    <div class="ad" aria-hidden="true">
      <div class="ad-head"><span class="avatar" /><span>متجرك</span><em>مُموَّل</em></div>
      <div class="ad-img"><b>تشكيلة جديدة</b></div>
      <span class="ad-btn">تسوّق الآن</span>
    </div>

    <!-- the product: a store in a browser -->
    <div class="browser" aria-hidden="true">
      <div class="chrome">
        <span class="dot" /><span class="dot" /><span class="dot" />
        <span class="url" dir="ltr">yourbrand.jo</span>
      </div>
      <div class="store">
        <div class="store-nav"><b class="brandmark" /><i /><i /><i /></div>
        <div class="banner">
          <div class="banner-copy">
            <strong>تشكيلة جديدة</strong>
            <span class="sk w70" /><span class="sk w45" />
          </div>
          <span class="shop-btn">اطلب الآن</span>
        </div>
        <div class="products">
          <div v-for="n in 3" :key="n" class="product">
            <span class="photo" :class="`p${n}`" />
            <span class="sk w80" /><span class="sk w40 price" />
          </div>
        </div>
      </div>
    </div>

    <!-- the demand: an order arrives on WhatsApp -->
    <div class="phone" aria-hidden="true">
      <div class="notch" />
      <div class="chat-head"><span class="avatar" /><span>متجرك</span></div>
      <div class="chat">
        <p class="bubble in">مرحباً، أريد طلب القطعة الثانية، مقاس M</p>
        <p class="bubble out">تم، نرسل لك رابط الدفع الآن</p>
        <div class="order">
          <RIcon name="check" :size="16" />
          <span>طلب جديد من المتجر</span>
        </div>
      </div>
    </div>

    <!-- the result: orders rising, ending in the logo's dots -->
    <div class="chart" aria-hidden="true">
      <div class="chart-head"><span>الطلبات</span><span class="tag">مثال</span></div>
      <div class="plot">
        <span v-for="(h, i) in bars" :key="i" class="bar" :class="{ last: i === bars.length - 1 }" :style="{ height: h + '%', '--i': i }" />
        <span class="rise"><i /><i /><i /></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scene { position: relative; container-type: inline-size; width: 100%; max-width: 600px; aspect-ratio: 1; margin-inline: auto; }

/* browser */
.browser {
  position: absolute; inset-inline-start: 0; top: 0; width: 86%;
  background: var(--surface-raised); border: 1px solid var(--line); border-radius: 3.2cqi; overflow: hidden;
}
.chrome { display: flex; align-items: center; gap: 1.2cqi; padding: 2.2cqi 2.8cqi; border-bottom: 1px solid var(--line); }
.chrome .dot { width: 1.8cqi; height: 1.8cqi; border-radius: 50%; background: var(--line); }
.url { margin-inline-start: auto; font: 600 2.2cqi/1 var(--font-sans); color: var(--ink-muted); background: var(--surface); padding: 1cqi 2.4cqi; border-radius: 99px; }
.store { padding: 3cqi; display: flex; flex-direction: column; gap: 3cqi; }
.store-nav { display: flex; align-items: center; gap: 2cqi; }
.store-nav .brandmark { width: 9cqi; height: 3cqi; border-radius: 99px; background: var(--ink); margin-inline-end: auto; }
.store-nav i { width: 6cqi; height: 1.4cqi; border-radius: 99px; background: var(--line); }
.banner { display: flex; align-items: flex-end; justify-content: space-between; gap: 3cqi; padding: 4cqi; border-radius: 2.4cqi; background: var(--accent-tint); }
.banner-copy { display: flex; flex-direction: column; gap: 1.4cqi; flex: 1; }
.banner strong { font: 700 4.2cqi/1.2 var(--font-display); color: var(--ink); }
.shop-btn { font: 600 2.4cqi/1 var(--font-sans); background: var(--brand); color: var(--ink-on-brand); padding: 1.8cqi 3cqi; border-radius: 1.6cqi; white-space: nowrap; }
.products { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.4cqi; }
.product { display: flex; flex-direction: column; gap: 1.2cqi; }
.photo { aspect-ratio: 1; border-radius: 2cqi; }
.p1 { background: var(--brand-tint); }
.p2 { background: var(--line); }
.p3 { background: var(--accent-tint); }
.sk { display: block; height: 1.4cqi; border-radius: 99px; background: var(--line); }
.sk.price { background: var(--brand); height: 1.6cqi; }
.w80 { width: 80%; } .w70 { width: 70%; } .w45 { width: 45%; } .w40 { width: 40%; }

/* phone */
.phone {
  position: absolute; z-index: 2; inset-inline-end: 0; bottom: 0; width: 34%; aspect-ratio: 9 / 17;
  background: var(--surface); border: 1.4cqi solid var(--ink); border-radius: 6cqi; overflow: hidden;
  display: flex; flex-direction: column;
}
.notch { width: 34%; height: 2.2cqi; margin: 1.2cqi auto 0; border-radius: 99px; background: var(--ink); }
.chat-head { display: flex; align-items: center; gap: 1.6cqi; padding: 2cqi 2.6cqi; font: 600 2.6cqi/1 var(--font-sans); border-bottom: 1px solid var(--line); }
.avatar { width: 4.4cqi; height: 4.4cqi; border-radius: 50%; background: var(--brand); }
.chat { flex: 1; display: flex; flex-direction: column; gap: 1.8cqi; padding: 2.6cqi; justify-content: flex-end; }
.bubble { font: 400 2.4cqi/1.5 var(--font-sans); padding: 1.6cqi 2.2cqi; border-radius: 2.4cqi; max-width: 92%; }
.bubble.in { background: var(--surface-raised); border: 1px solid var(--line); align-self: flex-start; border-start-start-radius: .6cqi; }
.bubble.out { background: var(--accent-tint); align-self: flex-end; border-start-end-radius: .6cqi; }
.order { display: flex; align-items: center; gap: 1.4cqi; font: 600 2.4cqi/1.3 var(--font-sans); background: var(--brand); color: var(--ink-on-brand); padding: 1.8cqi 2.2cqi; border-radius: 2.4cqi; }
.order :deep(.rj-i), .order :deep(.rj-a) { stroke: var(--ink-on-brand); }

/* chart (left to right, so growth rises to the right) */
.chart {
  position: absolute; z-index: 2; inset-inline-start: 5%; bottom: 0; width: 46%;
  background: var(--surface-raised); border: 1px solid var(--line); border-radius: 3.2cqi; padding: 3cqi;
}
.chart-head { display: flex; align-items: center; justify-content: space-between; font: 600 2.6cqi/1 var(--font-sans); margin-bottom: 9cqi; }
.tag { font-size: 2cqi; color: var(--ink-muted); border: 1px solid var(--line); padding: .8cqi 1.6cqi; border-radius: 99px; }
.plot { position: relative; direction: ltr; height: 22cqi; display: flex; align-items: flex-end; gap: 1.6cqi; border-bottom: 2px solid var(--line); }
.bar { flex: 1; border-radius: 1.2cqi 1.2cqi 0 0; background: var(--line); transform-origin: bottom; }
.bar.last { background: var(--brand); }
.rise { position: absolute; right: 0; top: -9cqi; display: flex; align-items: flex-end; gap: 1cqi; }
.rise i { display: block; border-radius: 50%; background: var(--brand); }
.rise i:nth-child(1) { width: 1.8cqi; height: 1.8cqi; }
.rise i:nth-child(2) { width: 2.8cqi; height: 2.8cqi; margin-bottom: 1.8cqi; }
.rise i:nth-child(3) { width: 4.4cqi; height: 4.4cqi; margin-bottom: 4.4cqi; }

/* sponsored post: the ad that brings the visitor */
.ad {
  position: absolute; z-index: 1; inset-inline-end: 0; top: 2%; width: 32%;
  background: var(--surface-raised); border: 1px solid var(--line); border-radius: 3cqi; padding: 2.4cqi;
  display: flex; flex-direction: column; gap: 1.6cqi;
}
.ad-head { display: flex; align-items: center; gap: 1.4cqi; font: 600 2.2cqi/1 var(--font-sans); }
.ad-head .avatar { width: 3.6cqi; height: 3.6cqi; }
.ad-head em { font-style: normal; color: var(--ink-muted); font-weight: 400; margin-inline-start: auto; }
.ad-img { aspect-ratio: 4 / 3; border-radius: 2cqi; background: var(--brand-tint); display: grid; place-items: center; }
.ad-img b { font: 700 3.4cqi/1.2 var(--font-display); color: var(--brand-strong); }
.ad-btn { font: 600 2.2cqi/1 var(--font-sans); text-align: center; padding: 1.6cqi; border-radius: 1.6cqi; background: var(--accent); color: var(--surface); }

/* stages, driven by the story section's scroll: 1 store, 2 ad, 3 order on WhatsApp, 4 orders rise */
.ad, .phone, .chart, .bubble, .order, .rise { transition: opacity .5s ease, transform .6s cubic-bezier(.2, .8, .2, 1); }
.bar { transition: transform .7s cubic-bezier(.2, .8, .2, 1); transition-delay: calc(var(--i) * .07s); }
.scene[data-stage="1"] :is(.ad, .phone, .chart),
.scene[data-stage="2"] :is(.phone, .chart),
.scene[data-stage="3"] .chart { opacity: 0; transform: translateY(5cqi) scale(.96); }
.scene:is([data-stage="1"], [data-stage="2"]) :is(.bubble, .order) { opacity: 0; transform: translateY(2cqi); }
.scene:not([data-stage="4"]) .bar { transform: scaleY(0); }
.scene:not([data-stage="4"]) .rise { opacity: 0; transform: translateY(3cqi); }
.bubble.out { transition-delay: .25s; }
.order { transition-delay: .5s; }
.rise { transition-delay: .5s; }
@media (prefers-reduced-motion: reduce) {
  .ad, .phone, .chart, .bubble, .order, .rise, .bar { transition: none; }
}
</style>
