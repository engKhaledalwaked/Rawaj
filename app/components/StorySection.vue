<script setup lang="ts">
// "From store to order" told on scroll: the section pins on desktop and OrderScene advances one stage per step.
// Phones and tablets get the whole scene at once and a plain list.
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { story } from '~/data/site'

const stage = ref(story.length)
const root = ref<HTMLElement>()
const panel = ref<HTMLElement>()
let mm: gsap.MatchMedia | undefined

onMounted(() => {
  mm = gsap.matchMedia()
  mm.add('(min-width: 961px)', () => {
    stage.value = 1
    ScrollTrigger.create({
      trigger: root.value, pin: panel.value, start: 'top 72px', end: `+=${story.length * 60}%`,
      onUpdate: (self) => { stage.value = Math.min(story.length, Math.floor(self.progress * story.length) + 1) },
    })
    return () => { stage.value = story.length }
  })
})
onBeforeUnmount(() => mm?.revert())
</script>

<template>
  <section ref="root" class="story">
    <div ref="panel" class="panel container">
      <div class="steps">
        <h2 class="t-h1">من المتجر إلى الطلب</h2>
        <ol>
          <li v-for="(s, i) in story" :key="s.title" :class="{ on: i + 1 <= stage, now: i + 1 === stage }">
            <span class="n">{{ i + 1 }}</span>
            <div>
              <h3 class="t-h3">{{ s.title }}</h3>
              <p class="muted">{{ s.body }}</p>
            </div>
          </li>
        </ol>
      </div>
      <OrderScene :stage="stage" />
    </div>
  </section>
</template>

<style scoped>
.panel { min-height: calc(100vh - 72px); display: grid; grid-template-columns: .9fr 1.1fr; gap: 56px; align-items: center; padding-block: 48px; }
.steps h2 { margin-bottom: 32px; }
ol { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }
li { display: flex; gap: 16px; padding: 14px 16px; border-radius: var(--radius-md); opacity: .38; transition: opacity .4s ease, background-color .4s ease; }
li.on { opacity: 1; }
li.now { background: var(--surface-raised); }
.n { width: 36px; height: 36px; flex: none; border-radius: 50%; display: grid; place-items: center; font: 700 16px/1 var(--font-display); border: 2px solid var(--ink); }
li.now .n { background: var(--brand); border-color: var(--brand); color: var(--ink-on-brand); }
li p { font-size: 15px; line-height: 24px; }
@media (max-width: 960px) {
  .panel { grid-template-columns: 1fr; min-height: 0; gap: 32px; padding-block: 64px; }
  li { opacity: 1; }
}
</style>
