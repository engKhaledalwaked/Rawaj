<script setup lang="ts">
import { contact, services } from '~/data/site'
useHead({ title: 'تواصل معنا — رواج' })

const form = reactive({ name: '', business: '', service: '', message: '' })
const ready = computed(() => contact.whatsapp.length > 0)

// No backend: the form opens WhatsApp with the message filled in.
function send() {
  if (!ready.value) return
  const text = [
    `مرحباً رواج، أنا ${form.name}`,
    form.business && `النشاط: ${form.business}`,
    form.service && `الخدمة: ${form.service}`,
    form.message,
  ].filter(Boolean).join('\n')
  window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
}
</script>

<template>
  <section class="section container wrap">
    <div>
      <SectionHead level="h1" eyebrow="تواصل معنا" title="احكِ لنا عن مشروعك" lead="نرد خلال يوم عمل. المكالمة الأولى مجانية، ومدتها 20 دقيقة." />
      <ul class="ways">
        <li><RIcon name="chat" /><div><strong>واتساب</strong><span class="muted" :class="{ placeholder: !ready }">{{ ready ? '+' + contact.whatsapp : '[رقم واتساب]' }}</span></div></li>
        <li><RIcon name="phone" /><div><strong>هاتف</strong><span class="muted" dir="ltr">{{ contact.phone }}</span></div></li>
        <li><RIcon name="mail" /><div><strong>بريد</strong><span class="muted">{{ contact.email }}</span></div></li>
        <li><RIcon name="location" /><div><strong>الموقع</strong><span class="muted">{{ contact.location }}</span></div></li>
        <li><RIcon name="calendar" /><div><strong>أوقات العمل</strong><span class="muted">{{ contact.hours }}</span></div></li>
      </ul>
    </div>

    <form class="card form" @submit.prevent="send">
      <h2 class="t-h3">أرسل رسالة عبر واتساب</h2>
      <div class="field">
        <label for="f-name">اسمك</label>
        <input id="f-name" v-model="form.name" required autocomplete="name">
      </div>
      <div class="field">
        <label for="f-biz">اسم نشاطك أو شركتك</label>
        <input id="f-biz" v-model="form.business" autocomplete="organization">
      </div>
      <div class="field">
        <label for="f-svc">ما الذي تحتاجه؟</label>
        <select id="f-svc" v-model="form.service">
          <option value="">لست متأكداً بعد</option>
          <option v-for="s in services" :key="s.id" :value="s.title">{{ s.title }}</option>
        </select>
      </div>
      <div class="field">
        <label for="f-msg">تفاصيل</label>
        <textarea id="f-msg" v-model="form.message" placeholder="ما هدفك؟ ومتى تريد الإطلاق؟" />
      </div>
      <button type="submit" class="btn btn-primary" :disabled="!ready">
        <RIcon name="chat" :size="20" /> أرسل عبر واتساب
      </button>
      <p v-if="!ready" class="t-small placeholder">[أضف رقم واتساب في app/data/site.ts لتفعيل الإرسال]</p>
    </form>
  </section>
</template>

<style scoped>
.wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
.ways { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
.ways li { display: flex; align-items: flex-start; gap: 14px; }
.ways div { display: flex; flex-direction: column; line-height: 24px; }
.form { display: flex; flex-direction: column; gap: 16px; }
@media (max-width: 860px) { .wrap { grid-template-columns: 1fr; } }
</style>
