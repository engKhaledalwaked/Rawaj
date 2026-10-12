<script setup lang="ts">
// One plan, without a price: what it is, who it suits, what it includes, and a quote request that pre-selects it on /contact.
import type { Plan } from '~/data/site'
defineProps<{ plan: Plan }>()
</script>

<template>
  <article class="plan" :class="{ featured: plan.featured }">
    <p v-if="plan.featured" class="badge t-label">الأكثر طلباً</p>
    <div class="top">
      <span class="ic"><RIcon :name="plan.icon" :size="26" /></span>
      <span class="kind t-label">{{ plan.kind === 'monthly' ? 'شهري' : 'مشروع' }}</span>
    </div>
    <h3 class="t-h2">{{ plan.name }}</h3>
    <p class="fit">{{ plan.fit }}</p>
    <p class="muted note">{{ plan.note }}</p>
    <ul>
      <li v-for="item in plan.includes" :key="item"><RIcon name="check" :size="18" /> {{ item }}</li>
    </ul>
    <NuxtLink :to="{ path: '/contact', query: { plan: plan.id } }" class="btn" :class="plan.featured ? 'btn-primary' : 'btn-secondary'">
      اطلب عرض سعر
    </NuxtLink>
  </article>
</template>

<style scoped>
.plan {
  position: relative; display: flex; flex-direction: column; gap: 10px; height: 100%;
  background: var(--surface-raised); border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 28px;
  transition: transform .3s ease, border-color .3s ease;
}
.plan:hover { transform: translateY(-4px); border-color: var(--ink-muted); }
.featured { border: 2px solid var(--brand); }
.featured:hover { border-color: var(--brand); }
.badge { position: absolute; top: -13px; inset-inline-start: 24px; background: var(--brand); color: var(--ink-on-brand); padding: 4px 12px; border-radius: 99px; }
.top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
.ic { width: 52px; height: 52px; display: grid; place-items: center; border-radius: var(--radius-md); background: var(--brand-tint); }
.kind { color: var(--accent); border: 1px solid var(--line); padding: 4px 10px; border-radius: 99px; }
.fit { font-weight: 600; }
.note { font-size: 15px; line-height: 24px; }
ul { list-style: none; margin: 8px 0 20px; padding: 14px 0 0; border-top: 1px solid var(--line); display: flex; flex-direction: column; gap: 8px; font-size: 15px; }
li { display: flex; align-items: center; gap: 8px; }
.btn { margin-top: auto; }
</style>
