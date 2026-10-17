# Rawaj website — spec (v2)

## Goal
Marketing site for **Rawaj (رواج)**, a software + digital-advertising studio based in Jordan, serving clients worldwide. One job: turn a visitor into a booked call or a WhatsApp message.

## Stack
- Nuxt 4.5.2 + Vue 3, static output (`nuxt generate`), no backend. Deployed as a Cloudflare static-assets Worker.
- Styling: plain CSS on the Rawaj design-system tokens (`design-system/tokens.json` → `app/assets/css/tokens.css`). No UI framework.
- Motion: three.js for the hero 3D scene (loaded after the page), GSAP + ScrollTrigger for scroll motion.
- Fonts: Readex Pro (headings), IBM Plex Sans Arabic (text), Google Fonts.

## Language and direction
Arabic first, `dir="rtl"`, `lang="ar"`. English later via `@nuxtjs/i18n` (not in v2; copy is kept in `app/data/site.ts` to make that easy).

## Themes
Light (default) and dark, from the tokens. Follows the visitor's system setting on first visit; a toggle in the header saves the choice (`localStorage: rawaj-theme`). An inline head script sets `data-theme` before paint to avoid a flash. The 3D scene recolours live when the theme changes.

## Pages
| Route | Content |
|---|---|
| `/` | 3D hero (columns rising to the logo's dots), true facts strip with live Jordan time, moving services/platforms strips, word-by-word statement, build + grow (all 11 services), pinned scroll story (store → ad → WhatsApp order → growth), ad-to-order funnel, 3 steps, one-time plans, final CTA |
| `/services` | All 11 services in build / grow panels with what is included, funnel |
| `/plans` | All 8 plans (4 one-time, 4 monthly) with what each includes, **no prices**; each links to `/contact?plan=<id>`. What changes a quote, clients outside Jordan. `/pricing` redirects here |
| `/work` | Maskan and Chaty (real: screenshot, what was built, live link when public) + case-study slots still awaiting real projects |
| `/contact` | WhatsApp, phone, email, location, hours; a form that opens WhatsApp with the message filled in, a live phone preview of that message, plan pre-selected from `?plan=` |

## Content rules
- Results and numbers, no hype. **No invented stats, clients or testimonials**: missing facts stay as visible placeholders like `[رقم واتساب]`.
- **No prices on the site.** Plans show what is included; the price comes as a written quote. Prices are never stored in `site.ts`.
- Buttons are verbs.

## Motion
- One memorable moment per page at most; the home page's are the 3D hero and the pinned story.
- Animation runs for everyone; `prefers-reduced-motion` is deliberately ignored (owner's decision, 2026-10-12).
- 3D never blocks first paint; without WebGL the hero still works.

## Components
`AppHeader`, `AppFooter`, `RLogo`, `RIcon`, `ThemeToggle`, `SectionHead`, `CtaBand`, `HeroMarket`, `WordReveal`, `StorySection`, `OrderScene`, `DemandFunnel`, `PlanCard`, `ChatPreview`.

## Done when
- `npm run generate` succeeds with no warnings that matter.
- Every page renders correctly in light and dark, at 1280px and 390px.
- Text contrast follows the tokens (all ≥ 4.5:1).
- No price appears in any page or JS file.
