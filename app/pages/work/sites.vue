<script setup lang="ts">
import { demoSites } from '~/data/site'
useHead({ title: 'نماذج المواقع — رواج' })
const host = (u: string) => u.replace(/^https?:\/\/|\/$/g, '')
</script>

<template>
  <div>
    <section class="section container">
      <NuxtLink to="/work" class="btn btn-link back">كل الأعمال</NuxtLink>
      <SectionHead level="h1" title="نماذج مواقع أعددناها لأنشطة حقيقية" lead="كل موقع هنا نسخة عرض تجريبية صمّمناها لنشاط قائم في الأردن أو السعودية، لنريه كيف يمكن أن يبدو حضوره على الإنترنت. افتح أي موقع وجرّبه بنفسك." />

      <div v-reveal="'stagger'" class="grid">
        <article v-for="s in demoSites" :key="s.id" class="site">
          <a :href="s.url" target="_blank" rel="noopener" class="frame" :aria-label="`افتح موقع ${s.name}`">
            <div class="chrome" aria-hidden="true"><span /><span /><span /><em dir="ltr">{{ host(s.url) }}</em></div>
            <img :src="`/work/sites/${s.id}.jpg`" :alt="`الصفحة الرئيسية لموقع ${s.name}`" width="1280" height="800" loading="lazy">
          </a>
          <div class="meta">
            <div>
              <h2 class="t-h3">{{ s.name }}</h2>
              <p class="muted t-small">{{ s.sector }} · {{ s.city }}</p>
            </div>
            <a :href="s.url" target="_blank" rel="noopener" class="btn btn-secondary">زر الموقع</a>
          </div>
        </article>
      </div>
    </section>
    <CtaBand title="تريد موقعاً مثل هذه لنشاطك؟" lead="مكالمة مجانية 20 دقيقة: نسمع عن نشاطك ونقترح عليك شكل موقعك." />
  </div>
</template>

<style scoped>
.back { margin-bottom: 8px; padding-inline: 0; }
/* 3 columns: after the full-width lead, the other 15 fill 5 even rows */
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px 24px; }
@media (max-width: 1100px) { .grid { grid-template-columns: repeat(2, 1fr); } }
/* the strongest site leads, full width */
.site:first-child { grid-column: 1 / -1; }
.site { display: flex; flex-direction: column; gap: 14px; }
.frame { display: block; background: var(--surface-raised); border: 1px solid var(--line); border-radius: var(--radius-md); overflow: hidden; transition: transform .3s ease, border-color .3s ease; }
.frame:hover { transform: translateY(-4px); border-color: var(--ink-muted); }
.chrome { display: flex; align-items: center; gap: 6px; padding: 12px 14px; border-bottom: 1px solid var(--line); }
.chrome span { width: 10px; height: 10px; border-radius: 50%; background: var(--line); }
.chrome em { margin-inline-start: auto; font: 600 12px/1 var(--font-sans); font-style: normal; color: var(--ink-muted); background: var(--surface); padding: 5px 12px; border-radius: 99px; }
.frame img { display: block; width: 100%; height: auto; aspect-ratio: 16 / 10; object-fit: cover; }
.meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.meta .btn { flex: none; }
.meta > div { display: flex; flex-direction: column; gap: 2px; }
@media (max-width: 760px) {
  .grid { grid-template-columns: 1fr; gap: 32px; }
  .meta { flex-direction: column; align-items: flex-start; }
}
</style>
