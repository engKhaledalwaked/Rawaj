<script setup lang="ts">
import { work } from '~/data/site'
useHead({ title: 'الأعمال — رواج' })
</script>

<template>
  <div>
    <section class="section container">
      <SectionHead level="h1" title="مشاريع بأرقام، لا بصور فقط" lead="كل مشروع هنا معه نتيجته: كم طلباً جلب، كم وفّر، كم باع." />

      <article v-for="(w, i) in work" :key="i" class="case" :class="{ flip: i % 2 }">
        <div class="frame" aria-hidden="true">
          <div class="chrome"><span /><span /><span /></div>
          <div class="shot"><span class="placeholder">[صورة المشروع]</span></div>
        </div>
        <div class="info">
          <p class="tag t-label">{{ w.tag }}</p>
          <h2 class="t-h2 placeholder">{{ w.title }}</h2>
          <p class="muted">{{ w.client }}</p>
          <!-- before / after: bars stay outlined until real numbers are added -->
          <div class="result">
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
.chrome span { width: 10px; height: 10px; border-radius: 50%; background: var(--line); }
.shot {
  aspect-ratio: 16 / 10; display: grid; place-items: center;
  background: repeating-linear-gradient(-45deg, var(--surface) 0 14px, var(--surface-raised) 14px 28px);
}
.info { display: flex; flex-direction: column; gap: 10px; }
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
