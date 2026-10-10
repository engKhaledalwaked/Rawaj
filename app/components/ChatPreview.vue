<script setup lang="ts">
// A phone showing the WhatsApp message a visitor is about to send to Rawaj.
defineProps<{ text: string }>()
</script>

<template>
  <div class="phone">
    <div class="notch" aria-hidden="true" />
    <div class="head">
      <span class="avatar" aria-hidden="true"><RIcon name="chat" :size="18" /></span>
      <div>
        <strong>رواج</strong>
        <span class="muted">واتساب</span>
      </div>
    </div>
    <div class="chat">
      <p class="hint muted">معاينة رسالتك</p>
      <p class="bubble" aria-live="polite">{{ text }}</p>
    </div>
  </div>
</template>

<style scoped>
.phone {
  width: 100%; max-width: 300px; min-height: 420px; margin-inline: auto;
  display: flex; flex-direction: column;
  background: var(--surface); border: 8px solid var(--ink); border-radius: 40px; overflow: hidden;
}
.notch { width: 90px; height: 14px; margin: 8px auto 0; border-radius: 99px; background: var(--ink); }
.head { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-bottom: 1px solid var(--line); }
.head div { display: flex; flex-direction: column; line-height: 20px; }
.head .muted { font-size: 12px; }
.avatar { width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; background: var(--brand); }
.avatar :deep(.rj-i), .avatar :deep(.rj-a) { stroke: var(--ink-on-brand); }
.avatar :deep(.rj-f) { fill: var(--ink-on-brand); }
.chat { flex: 1; display: flex; flex-direction: column; justify-content: flex-end; gap: 10px; padding: 16px; }
.hint { text-align: center; font-size: 12px; }
.bubble {
  align-self: flex-end; max-width: 90%; white-space: pre-line;
  background: var(--accent-tint); color: var(--ink);
  padding: 10px 14px; border-radius: 16px; border-start-end-radius: 4px;
  font-size: 14px; line-height: 22px;
}
</style>
