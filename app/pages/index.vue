<script setup lang="ts">
import { gsap } from 'gsap'
import { facts, plans, platforms, services, steps } from '~/data/site'

useHead({ title: 'رواج — برمجة وإعلانات تصنع الطلب' })
const headline = 'نبني مشروعك الرقمي، ثم نصنع له الطلب.'.split(' ')
const build = services.filter((s) => s.group === 'build')
const grow = services.filter((s) => s.group === 'grow')
const oncePlans = plans.filter((p) => p.kind === 'once')

// live local time, a small true fact (filled after mount to keep SSR and client identical)
const time = ref('')
let timer: ReturnType<typeof setInterval> | undefined
const fmt = new Intl.DateTimeFormat('ar-JO-u-nu-latn', { timeZone: 'Asia/Amman', hour: 'numeric', minute: '2-digit' })

const hero = ref<HTMLElement>()
let ctx: gsap.Context | undefined
onMounted(() => {
  const tick = () => { time.value = fmt.format(new Date()) }
  tick()
  timer = setInterval(tick, 30_000)
  ctx = gsap.context(() => {
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .to('.hw', { opacity: 1, y: 0, duration: 0.9, stagger: 0.07 })
      .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, '-=0.5')
  }, hero.value)
})
onBeforeUnmount(() => { clearInterval(timer); ctx?.revert() })
</script>

<template>
  <div>
    <!-- hero: the headline, and the 3D market rising to the logo's dots -->
    <section ref="hero" class="hero">
      <div class="container hero-grid">
        <div class="hero-text">
          <h1 class="hero-title">
            <template v-for="(w, i) in headline" :key="i"><span class="hw">{{ w }}</span>{{ ' ' }}</template>
          </h1>
          <p class="lead muted hero-sub">مواقع وتطبيقات وإعلانات للشركات في الأردن والخليج. فريق واحد يبني ويسوّق ويقيس النتيجة.</p>
          <div class="ctas hero-sub">
            <NuxtLink to="/contact" class="btn btn-primary">احجز مكالمة مجانية</NuxtLink>
            <NuxtLink to="/plans" class="btn btn-secondary">تصفّح الخطط</NuxtLink>
          </div>
        </div>
        <HeroMarket class="hero-3d" />
      </div>
    </section>

    <!-- facts: things that are true today -->
    <div class="facts">
      <div class="container facts-row">
        <div class="fact">
          <span class="muted t-small">الوقت الآن في الأردن</span>
          <strong><i class="live" aria-hidden="true" />{{ time || '—' }}</strong>
        </div>
        <div v-for="f in facts" :key="f.label" class="fact">
          <span class="muted t-small">{{ f.label }}</span>
          <strong>{{ f.value }}</strong>
        </div>
      </div>
    </div>

    <!-- what we make, and where it runs -->
    <div class="marquee" aria-label="خدماتنا والمنصات التي نعمل عليها">
      <div class="track">
        <ul v-for="n in 2" :key="n" :aria-hidden="n === 2">
          <li v-for="s in services" :key="s.id"><RIcon :name="s.icon" :size="26" /> {{ s.title }}</li>
        </ul>
      </div>
      <div class="track reverse">
        <ul v-for="n in 2" :key="n" :aria-hidden="n === 2">
          <li v-for="p in platforms" :key="p"><bdi>{{ p }}</bdi></li>
        </ul>
      </div>
    </div>

    <!-- the problem, in one sentence that lights up as you read -->
    <section class="section container">
      <WordReveal text="أغلب الشركات تدفع لجهة تبني الموقع، ولجهة أخرى تجلب العملاء، ولا أحد يسأل: كم طلباً جاء؟ نحن نبني، ونسوّق، ونقيس، في فريق واحد." />
    </section>

    <!-- build + grow -->
    <section class="section container">
      <SectionHead title="نصف عملنا بناء، ونصفه جلب العملاء" lead="فريق واحد يفهم الكود والإعلان معاً، فلا يضيع مشروعك بين شركتين." />
      <div class="halves">
        <div v-for="g in [{ id: 'build', t: 'نبني', s: 'الأساس الرقمي', items: build }, { id: 'grow', t: 'ننمّي', s: 'العملاء والمبيعات', items: grow }]" :key="g.id" class="half" :class="g.id">
          <h3 class="half-title">{{ g.t }} <span>{{ g.s }}</span></h3>
          <ul v-reveal="'stagger'">
            <li v-for="s in g.items" :key="s.id">
              <RIcon :name="s.icon" :size="26" />
              <div><strong>{{ s.title }}</strong><p class="muted">{{ s.summary }}</p></div>
            </li>
          </ul>
        </div>
      </div>
      <NuxtLink to="/services" class="btn btn-link more">تفاصيل كل خدمة</NuxtLink>
    </section>

    <!-- store → ad → order → growth, told on scroll -->
    <StorySection />

    <!-- funnel -->
    <section class="section container">
      <SectionHead title="أين يضيع العميل، وكيف نمسكه" lead="العميل يمر بأربع مراحل قبل أن يشتري، وفي كل مرحلة قد تخسره. هذه الخدمات التي تعمل في كل مرحلة." />
      <DemandFunnel v-reveal="'stagger'" />
    </section>

    <!-- process -->
    <section class="section container">
      <SectionHead title="ثلاث خطوات، وأرقام في كل خطوة" />
      <ol v-reveal="'stagger'" class="timeline">
        <li v-for="(s, i) in steps" :key="s.title">
          <span class="node">{{ i + 1 }}</span>
          <h3 class="t-h3">{{ s.title }}</h3>
          <p class="muted">{{ s.body }}</p>
        </li>
      </ol>
    </section>

    <!-- plans, no prices -->
    <section class="section container">
      <div class="plans-head">
        <SectionHead title="خطط واضحة، وعرض سعر مكتوب" lead="اختر الأقرب لمشروعك، ونرسل لك عرضاً خلال يوم عمل." />
        <NuxtLink to="/plans" class="btn btn-link">كل الخطط، والخدمات الشهرية</NuxtLink>
      </div>
      <div v-reveal="'stagger'" class="plans">
        <PlanCard v-for="p in oncePlans" :key="p.id" :plan="p" />
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<style scoped>
/* hero */
.hero { overflow: hidden; }
.hero-grid { display: grid; grid-template-columns: 1fr 1.15fr; align-items: center; gap: 24px; min-height: calc(100vh - 72px); max-height: 860px; padding-block: 32px; }
.hero-title { font: 700 clamp(42px, 5.6vw, 76px)/1.15 var(--font-display); letter-spacing: -.01em; }
.hero-text { display: flex; flex-direction: column; gap: 26px; position: relative; z-index: 1; }
.lead { font-size: 19px; line-height: 33px; max-width: 30em; }
.ctas { display: flex; flex-wrap: wrap; gap: 12px; }
/* the 3D canvas bleeds past the container edge for a wider stage */
.hero-3d { height: min(72vh, 640px); margin-inline-end: -12vw; }
.hw { display: inline-block; }

/* facts */
.facts { border-block: 1px solid var(--line); }
.facts-row { display: grid; grid-template-columns: repeat(4, 1fr); }
.fact { display: flex; flex-direction: column; gap: 4px; padding: 20px 0; padding-inline-end: 20px; }
.fact + .fact { border-inline-start: 1px solid var(--line); padding-inline-start: 24px; }
.fact strong { font: 600 18px/26px var(--font-display); display: inline-flex; align-items: center; gap: 8px; }
.live { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); animation: pulse 2s ease-in-out infinite; }
@keyframes pulse { 50% { opacity: .3; } }

/* marquee: two rows moving in opposite directions, paused on hover */
.marquee { padding-block: 40px; display: flex; flex-direction: column; gap: 14px; overflow: hidden; }
.track { display: flex; width: max-content; animation: slide 48s linear infinite; }
.track.reverse { animation-direction: reverse; animation-duration: 40s; }
.marquee:hover .track { animation-play-state: paused; }
.track ul { list-style: none; margin: 0; padding: 0; display: flex; }
.track li { display: inline-flex; align-items: center; gap: 12px; white-space: nowrap; padding-inline: 28px; font: 700 clamp(24px, 3vw, 38px)/1.3 var(--font-display); }
.track li::after { content: ''; width: 10px; height: 10px; border-radius: 50%; background: var(--brand); margin-inline-start: 44px; }
.reverse li { font-weight: 600; color: var(--ink-muted); font-size: clamp(18px, 2vw, 24px); }
.reverse li::after { background: var(--line); width: 7px; height: 7px; }
/* RTL: the second copy sits to the left, so moving right by half loops seamlessly */
@keyframes slide { to { transform: translateX(50%); } }

/* build + grow */
.halves { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.half { border-radius: var(--radius-lg); padding: 32px; }
.build { background: var(--accent-tint); }
.grow { background: var(--brand-tint); }
.half-title { font: 700 44px/1.1 var(--font-display); display: flex; align-items: baseline; gap: 12px; margin-bottom: 20px; }
.half-title span { font: 600 15px/1 var(--font-sans); color: var(--ink-muted); }
.build .half-title { color: var(--accent); }
.grow .half-title { color: var(--brand-strong); }
.half ul { list-style: none; margin: 0; padding: 0; }
.half li { display: flex; gap: 14px; padding-block: 14px; border-top: 1px solid color-mix(in srgb, var(--ink) 12%, transparent); }
.half li > div { display: flex; flex-direction: column; gap: 2px; }
.half li p { font-size: 15px; line-height: 24px; }
.more { margin-top: 16px; }

/* process */
.timeline { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; position: relative; }
.timeline::before { content: ''; position: absolute; top: 27px; inset-inline: 28px; height: 2px; background: var(--line); }
.timeline li { position: relative; display: flex; flex-direction: column; gap: 10px; }
.node { width: 56px; height: 56px; border-radius: 50%; display: grid; place-items: center; font: 700 22px/1 var(--font-display); background: var(--surface); border: 2px solid var(--ink); margin-bottom: 6px; }
.timeline li:last-child .node { background: var(--brand); border-color: var(--brand); color: var(--ink-on-brand); }

/* plans */
.plans-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.plans-head .btn-link { margin-bottom: var(--space-12); }
.plans { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }

@media (max-width: 1100px) { .plans { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 960px) {
  .hero-grid { grid-template-columns: 1fr; min-height: 0; max-height: none; padding-block: 40px 0; }
  .hero-3d { height: 380px; margin-inline: -20px; }
  .facts-row { grid-template-columns: repeat(2, 1fr); }
  .fact:nth-child(3) { border-inline-start: 0; padding-inline-start: 0; }
  .fact:nth-child(n + 3) { border-top: 1px solid var(--line); }
}
@media (max-width: 760px) {
  .halves, .plans { grid-template-columns: 1fr; }
  .half { padding: 24px 20px; }
  .half-title { font-size: 34px; }
  .timeline { grid-template-columns: 1fr; gap: 24px; }
  .timeline::before { top: 28px; bottom: 28px; inset-inline-start: 27px; inset-inline-end: auto; width: 2px; height: auto; }
  .timeline li { padding-inline-start: 76px; }
  .node { position: absolute; inset-inline-start: 0; top: 0; }
}
</style>

<style>
/* Unscoped on purpose: scoped `:global(html.js) .hw` compiles to plain `html.js` and hid the whole page.
   The hero intro starts hidden only when JS can play it; the fallback animation shows it anyway after 2.5s. */
html.js .hero .hw, html.js .hero .hero-sub { opacity: 0; transform: translateY(24px); animation: hero-show 0s 2.5s forwards; }
@keyframes hero-show { to { opacity: 1; transform: none; } }
</style>
