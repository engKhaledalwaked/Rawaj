<script setup lang="ts">
import { work } from '~/data/site'
useHead({ title: 'الأعمال — رواج' })
</script>

<template>
  <div>
    <section class="section container">
      <SectionHead level="h1" eyebrow="الأعمال" title="مشاريع بأرقام، لا بصور فقط" lead="كل مشروع هنا معه نتيجته: كم طلباً جلب، كم وفّر، كم باع." />
      <div class="grid-3">
        <article v-for="(w, i) in work" :key="i" class="card case">
          <div class="thumb" aria-hidden="true"><span>[صورة المشروع]</span></div>
          <p class="tag t-label">{{ w.tag }}</p>
          <h2 class="t-h3 placeholder">{{ w.title }}</h2>
          <p class="muted">{{ w.client }}</p>
          <p class="result"><RIcon name="growth" :size="20" /> <span class="placeholder">{{ w.result }}</span></p>
        </article>
      </div>
    </section>
    <CtaBand title="مشروعك التالي هنا؟" />
  </div>
</template>

<style scoped>
.case { display: flex; flex-direction: column; gap: 10px; }
.thumb { aspect-ratio: 16 / 10; border-radius: var(--radius-sm); background: var(--brand-tint); display: grid; place-items: center; color: var(--brand-strong); font-weight: 600; margin-bottom: 6px; }
.tag { color: var(--accent); }
.result { display: flex; align-items: flex-start; gap: 8px; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--line); }
</style>
