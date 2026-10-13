// https://nuxt.com/docs/api/configuration/nuxt-config
// Also marks <html class="js"> so intro animations can start hidden without hiding content from no-JS visitors.
const themeScript = `(function(){document.documentElement.classList.add('js');try{var s=localStorage.getItem('rawaj-theme');var d=s||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',d)}catch(e){document.documentElement.setAttribute('data-theme','light')}})()`

export default defineNuxtConfig({
  compatibilityDate: '2026-07-15',
  devtools: { enabled: false },
  // Always plain static output, even when Nitro detects Cloudflare CI.
  nitro: { preset: 'static' },
  css: ['~/assets/css/tokens.css', '~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ar', dir: 'rtl' },
      title: 'رواج — برمجة وإعلانات تصنع الطلب',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'رواج: مواقع وتطبيقات وإعلانات رقمية لشركات حول العالم، من الأردن. نتائج تقاس بالأرقام.' },
        { name: 'theme-color', content: '#F4EFE6', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#121316', media: '(prefers-color-scheme: dark)' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@600;700&family=IBM+Plex+Sans+Arabic:wght@400;600&display=swap' },
      ],
      script: [{ innerHTML: themeScript, tagPosition: 'head' }],
    },
  },
})
