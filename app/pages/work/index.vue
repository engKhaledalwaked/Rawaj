<script setup lang="ts">
import { work } from '~/data/site'
useHead({ title: 'الأعمال — رواج' })

const copied = ref('')
// key = account + field, since both accounts share a password
async function copy(key: string, value: string) {
  try { await navigator.clipboard.writeText(value) } catch { return } // clipboard blocked: the text stays selectable
  copied.value = key
  setTimeout(() => { if (copied.value === key) copied.value = '' }, 1500)
}
</script>

<template>
  <div>
    <section class="section container">
      <SectionHead level="h1" title="مشاريع بأرقام، لا بصور فقط" lead="كل مشروع هنا معه نتيجته: كم طلباً جلب، كم وفّر، كم باع." />

      <article v-for="(w, i) in work" :key="i" class="case" :class="{ flip: i % 2 }">
        <div class="frame">
          <div class="chrome" aria-hidden="true"><span /><span /><span /><em v-if="w.url" dir="ltr">{{ w.url.replace(/^https?:\/\/|\/$/g, '') }}</em></div>
          <img v-if="w.image" :src="w.image" :alt="`لقطة شاشة من ${w.title}`" class="shot" width="1280" height="800" loading="lazy">
          <div v-else class="shot stripes" aria-hidden="true"><span class="placeholder">[صورة المشروع]</span></div>
        </div>
        <div class="info">
          <p class="tag t-label">{{ w.tag }}</p>
          <h2 class="t-h2" :class="{ placeholder: w.title.startsWith('[') }">{{ w.title }}</h2>
          <p class="muted">{{ w.client }}</p>
          <ul v-if="w.built" class="built">
            <li v-for="b in w.built" :key="b"><RIcon name="check" :size="18" /> {{ b }}</li>
          </ul>
          <a v-if="w.url" :href="w.url" target="_blank" rel="noopener" class="btn btn-secondary visit">زر الموقع</a>
          <NuxtLink v-if="w.to" :to="w.to" class="btn btn-primary visit">{{ w.cta }}</NuxtLink>
          <div v-if="w.demo && w.url" class="demo">
            <h3 class="t-h3">جرّبه بنفسك</h3>
            <p class="muted t-small">في صفحة الدخول اختر «البريد الإلكتروني». الحسابات للعرض فقط: الحفظ والتعديل والحجز والدفع معطّلة.</p>
            <div v-for="d in w.demo" :key="d.email" class="acct">
              <div class="acct-head">
                <div><strong>{{ d.role }}</strong><span class="muted t-small">{{ d.who }}</span></div>
                <a :href="w.url.replace(/\/$/, '') + d.path" target="_blank" rel="noopener" class="btn btn-tech">ادخل</a>
              </div>
              <dl>
                <template v-for="f in [{ k: 'البريد', v: d.email }, { k: 'كلمة السر', v: d.password }]" :key="f.k">
                  <dt class="muted t-small">{{ f.k }}</dt>
                  <dd>
                    <code dir="ltr">{{ f.v }}</code>
                    <button type="button" class="copy" :aria-label="`انسخ ${f.k}`" @click="copy(d.email + f.k, f.v)">{{ copied === d.email + f.k ? 'تم النسخ' : 'انسخ' }}</button>
                  </dd>
                </template>
              </dl>
            </div>
          </div>
          <!-- before / after: bars stay outlined until real numbers are added -->
          <div v-if="w.result" class="result">
            <div class="ba" aria-hidden="true">
              <span class="b before" /><span class="b after" />
            </div>
            <div>
              <p class="t-label muted">النتيجة: قبل وبعد</p>
              <p class="placeholder">{{ w.result }}</p>
            </div>
          </div>
        </div>
      </article>
    </section>
    <CtaBand title="مشروعك التالي هنا؟" />
  </div>
</template>

<style scoped>
.case { display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; align-items: center; margin-bottom: 72px; }
.flip .frame { order: 2; }
.frame { background: var(--surface-raised); border: 1px solid var(--line); border-radius: var(--radius-md); overflow: hidden; }
.chrome { display: flex; gap: 6px; padding: 12px 14px; border-bottom: 1px solid var(--line); }
.chrome { align-items: center; }
.chrome span { width: 10px; height: 10px; border-radius: 50%; background: var(--line); }
.chrome em { margin-inline-start: auto; font: 600 12px/1 var(--font-sans); font-style: normal; color: var(--ink-muted); background: var(--surface); padding: 5px 12px; border-radius: 99px; }
.shot { display: block; width: 100%; height: auto; aspect-ratio: 16 / 10; object-fit: cover; }
.stripes {
  display: grid; place-items: center;
  background: repeating-linear-gradient(-45deg, var(--surface) 0 14px, var(--surface-raised) 14px 28px);
}
.built { list-style: none; margin: 6px 0 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.built li { display: flex; align-items: center; gap: 8px; }
.visit { align-self: flex-start; margin-top: 10px; }
.info { display: flex; flex-direction: column; gap: 10px; }
.demo { margin-top: 18px; padding: 20px; border-radius: var(--radius-md); background: var(--accent-tint); display: flex; flex-direction: column; gap: 12px; }
.acct { background: var(--surface-raised); border-radius: var(--radius-sm); padding: 14px 16px; }
.acct-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 10px; }
.acct-head > div { display: flex; flex-direction: column; }
.acct-head .btn { min-height: 44px; padding: 8px 18px; }
dl { margin: 0; display: grid; grid-template-columns: auto 1fr; gap: 6px 12px; align-items: center; }
dd { margin: 0; display: flex; align-items: center; justify-content: space-between; gap: 8px; min-width: 0; }
code { font: 600 14px/1.4 ui-monospace, Consolas, monospace; overflow-wrap: anywhere; }
.copy { min-height: 44px; min-width: 64px; padding: 6px 12px; font: 600 13px var(--font-sans); color: var(--ink); background: transparent; border: 1px solid var(--line); border-radius: var(--radius-sm); cursor: pointer; }
.copy:hover { border-color: var(--ink-muted); }
.tag { color: var(--accent); }
.result { display: flex; gap: 16px; align-items: flex-end; margin-top: 12px; padding: 20px; border-radius: var(--radius-md); background: var(--brand-tint); }
.ba { direction: ltr; display: flex; align-items: flex-end; gap: 6px; height: 64px; flex: none; }
.b { width: 22px; border-radius: 6px 6px 0 0; border: 2px dashed var(--brand-strong); }
.before { height: 40%; }
.after { height: 100%; }
@media (max-width: 860px) {
  .case { grid-template-columns: 1fr; gap: 20px; margin-bottom: 56px; }
  .flip .frame { order: 0; }
}
</style>
