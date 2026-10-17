<script setup lang="ts">
import { contact, nav } from '~/data/site'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container cols">
      <div class="about">
        <RLogo :height="36" />
        <p class="muted">برمجة وإعلانات تصنع الطلب. نخدم الشركات حول العالم، من الأردن.</p>
      </div>
      <nav aria-label="روابط الموقع">
        <h2 class="t-label">الموقع</h2>
        <NuxtLink v-for="item in nav" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink>
      </nav>
      <div class="contact">
        <h2 class="t-label">تواصل</h2>
        <p class="line"><RIcon name="phone" :size="18" /> <span dir="ltr">{{ contact.phone }}</span></p>
        <p class="line"><RIcon name="mail" :size="18" /> {{ contact.email }}</p>
        <p class="line"><RIcon name="location" :size="18" /> {{ contact.location }}</p>
      </div>
    </div>
    <div class="container legal muted">© {{ year }} رواج. جميع الحقوق محفوظة.</div>
  </footer>
</template>

<style scoped>
.site-footer { border-top: 1px solid var(--line); padding-block: 56px 24px; margin-top: var(--space-24); }
.cols { display: grid; grid-template-columns: 2fr 1fr 1.5fr; gap: 40px; }
.about { display: flex; flex-direction: column; gap: 16px; max-width: 360px; }
nav { display: flex; flex-direction: column; gap: 6px; }
nav a { color: var(--ink); text-decoration: none; padding-block: 4px; }
nav a:hover { color: var(--brand-strong); }
h2 { color: var(--ink-muted); margin-bottom: 8px; }
.line { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.legal { margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--line); font-size: 14px; }
@media (max-width: 760px) {
  .site-footer { padding-block: 40px 20px; }
  .cols { grid-template-columns: 1fr; gap: 32px; }
  .about { max-width: none; gap: 12px; }
  /* plain links in one wrapping row instead of a long list; still 44px tall to tap */
  nav { flex-direction: row; flex-wrap: wrap; gap: 0 24px; }
  nav h2 { flex-basis: 100%; }
  nav a { min-height: 44px; display: inline-flex; align-items: center; }
  .legal { margin-top: 28px; text-align: center; }
}
</style>
