# Rawaj website — spec (v1)

## Goal
Marketing site for **Rawaj (رواج)**, a software + digital-advertising studio from Jordan serving Jordan and the Gulf. One job: turn a visitor into a booked call or a WhatsApp message.

## Stack
- Nuxt 4.5.2 + Vue 3, static output (`nuxt generate`), no backend.
- Styling: plain CSS on the Rawaj design-system tokens (`design-system/tokens.json` → `app/assets/css/tokens.css`). No UI framework.
- Fonts: Readex Pro (headings), IBM Plex Sans Arabic (text), Google Fonts.

## Language and direction
Arabic first, `dir="rtl"`, `lang="ar"`. English later via `@nuxtjs/i18n` (not in v1; copy is kept in `app/data/site.ts` to make that easy).

## Themes
Light (default) and dark, from the tokens. Follows the visitor's system setting on first visit; a toggle in the header saves the choice (`localStorage: rawaj-theme`). An inline head script sets `data-theme` before paint to avoid a flash.

## Pages
| Route | Content |
|---|---|
| `/` | Hero illustration, platforms, build + grow (all 11 services), ad-to-order funnel, how we work (3 steps), price chart + monthly prices, final CTA |
| `/services` | All 11 services in build / grow panels with what is included, funnel |
| `/pricing` | Price charts, full price table in JOD, what changes a price, Gulf quotes |
| `/work` | Case-study slots (placeholders until real projects are added) |
| `/contact` | WhatsApp, phone, email, location, booking; a form that opens WhatsApp with the message filled in, with a live phone preview of that message |

## Content rules (from the design system README)
- Results and numbers, no hype. **No invented stats, clients or testimonials**: missing facts stay as visible placeholders like `[رقم واتساب]`.
- Prices are shown, as "يبدأ من".
- Buttons are verbs.

## Components
`AppHeader`, `AppFooter`, `RLogo`, `RIcon`, `ThemeToggle`, `SectionHead`, `CtaBand`, `HeroScene`, `DemandFunnel`, `PriceChart`, `ChatPreview`.

## Done when
- `npm run generate` succeeds with no warnings that matter.
- Every page renders correctly in light and dark, at 1280px and 390px.
- Text contrast follows the tokens (all ≥ 4.5:1).
