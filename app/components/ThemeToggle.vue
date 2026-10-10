<script setup lang="ts">
// Light/dark switch. The initial theme is set before paint by the head script in nuxt.config.ts.
const theme = ref<'light' | 'dark'>('light')

onMounted(() => {
  theme.value = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
})

function toggle() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  try { localStorage.setItem('rawaj-theme', theme.value) } catch {}
}
</script>

<template>
  <button
    type="button"
    class="toggle"
    :aria-label="theme === 'dark' ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن'"
    :aria-pressed="theme === 'dark'"
    @click="toggle"
  >
    <!-- drawn in the Rawaj icon style: 24 grid, 2px round stroke, one orange element -->
    <svg v-if="theme === 'dark'" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle class="rj-f" cx="12" cy="12" r="4" />
      <path class="rj-i" d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
    <svg v-else viewBox="0 0 24 24" width="22" height="22" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path class="rj-i" d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
      <circle class="rj-f" cx="18" cy="5" r="1.75" />
    </svg>
  </button>
</template>

<style scoped>
.toggle {
  width: 44px; height: 44px; display: grid; place-items: center;
  background: transparent; border: 1px solid var(--line); border-radius: var(--radius-md);
  cursor: pointer;
}
.toggle:hover { background: var(--brand-tint); }
</style>
