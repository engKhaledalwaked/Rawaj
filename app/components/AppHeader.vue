<script setup lang="ts">
import { nav } from '~/data/site'

const open = ref(false)
const route = useRoute()
watch(() => route.path, () => { open.value = false })
</script>

<template>
  <header class="site-header">
    <div class="container bar">
      <NuxtLink to="/" class="brand" aria-label="رواج — الصفحة الرئيسية">
        <RLogo :height="52" />
      </NuxtLink>

      <nav class="links" aria-label="القائمة الرئيسية">
        <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" class="link">{{ item.label }}</NuxtLink>
      </nav>

      <div class="actions">
        <ThemeToggle />
        <NuxtLink to="/contact" class="btn btn-primary cta">
          <RIcon name="calendar" :size="18" />
          احجز مكالمة
        </NuxtLink>
        <button type="button" class="menu-btn" :aria-expanded="open" aria-controls="mobile-menu" :aria-label="open ? 'إغلاق القائمة' : 'فتح القائمة'" @click="open = !open">
          <RIcon :name="open ? 'close' : 'menu'" />
        </button>
      </div>
    </div>

    <nav v-show="open" id="mobile-menu" class="mobile container" aria-label="القائمة">
      <NuxtLink v-for="item in nav" :key="item.to" :to="item.to" class="mobile-link">{{ item.label }}</NuxtLink>
      <NuxtLink to="/contact" class="btn btn-primary">احجز مكالمة</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky; top: 0; z-index: 20;
  background: color-mix(in srgb, var(--surface) 92%, transparent);
  backdrop-filter: saturate(1.2) blur(10px);
  border-bottom: 1px solid var(--line);
}
.bar { display: flex; align-items: center; justify-content: space-between; gap: 24px; min-height: 72px; }
.brand { display: inline-flex; padding-block: 8px; }
.links { display: flex; gap: 28px; }
.link { color: var(--ink); text-decoration: none; font-weight: 600; font-size: 15px; padding-block: 10px; }
.link:hover { color: var(--brand-strong); }
.link.router-link-exact-active { color: var(--brand-strong); }
.actions { display: flex; align-items: center; gap: 12px; }
.menu-btn {
  display: none; width: 44px; height: 44px; place-items: center;
  background: transparent; border: 1px solid var(--line); border-radius: var(--radius-md); cursor: pointer;
}
.mobile { display: flex; flex-direction: column; gap: 4px; padding-block: 8px 20px; }
.mobile-link { color: var(--ink); text-decoration: none; font-weight: 600; padding: 12px 0; border-bottom: 1px solid var(--line); }

@media (max-width: 960px) {
  .links, .cta { display: none; }
  .menu-btn { display: grid; }
}
@media (min-width: 961px) {
  .mobile { display: none !important; }
}
</style>
