<template>
  <div class="app">
    <a href="#main" class="skip">تخطَّ إلى المحتوى</a>
    <AppHeader />
    <main id="main">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<style>
.skip { position: absolute; inset-inline-start: 12px; top: -60px; z-index: 50; background: var(--brand); color: var(--ink-on-brand); padding: 10px 16px; border-radius: var(--radius-sm); font-weight: 600; text-decoration: none; }
.skip:focus { top: 12px; }
</style>
