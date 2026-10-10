# Rawaj website (رواج)

Nuxt 4 + Vue 3 marketing site for Rawaj, built on the Rawaj design system. Arabic first (RTL), light and dark themes.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static site in .output/public — upload to any static host
```

## Before launch: fill the placeholders

Everything in `[square brackets]` is a placeholder. Most live in **`app/data/site.ts`**:

- `contact.whatsapp` — the WhatsApp number (e.g. `9627XXXXXXXX`). The contact form stays disabled until it is set.
- `contact.phone`, `contact.email`, `contact.location`.
- `work` — real case studies with real results. Never publish invented numbers or testimonials.
- `prices` — starting prices in JOD; adjust after testing them with real clients.

## Project layout

| Path | What |
|---|---|
| `design-system/` | The Rawaj design system: brand guide (`README.md`), `tokens.json`, logos, icons (light, dark, and theme-aware `rawaj-icons.json`), component previews |
| `scripts/build-tokens.mjs` | Turns `design-system/tokens.json` into `app/assets/css/tokens.css` (`npm run tokens`) |
| `app/assets/css/` | `tokens.css` (generated) and `main.css` (site styles, tokens only) |
| `app/assets/brand/` | Logo and icon data used inline so they follow the theme |
| `app/data/site.ts` | All copy, services, prices, contact details |
| `app/components/` | `AppHeader`, `AppFooter`, `RLogo`, `RIcon`, `ThemeToggle`, `ServiceCard`, `PriceCard`, `SectionHead`, `CtaBand` |
| `app/pages/` | `/`, `/services`, `/pricing`, `/work`, `/contact` |
| `public/` | Favicon and downloadable logo files |
| `SPEC.md` | What v1 must do |

## Design-system rules the code follows

- Colours, spacing, radii and fonts only from tokens (`var(--…)`); no raw hex in components.
- Text on orange is `--ink-on-brand` (never white). Links and orange text use `--brand-strong`.
- Theme: `data-theme="light|dark"` on `<html>`, set before paint from the saved choice or the system setting.
- Icons: `<RIcon name="…" />` from the Rawaj set. In Arabic pages "next" is `arrow-left`.

## Updating the design system

Replace the files in `design-system/` with a newer copy, then run `npm run tokens`. If the logo changed, copy `design-system/assets/Logos/rawaj-logo.svg` to `app/assets/brand/` and the logo files to `public/brand/`.

## Next steps

- English version with `@nuxtjs/i18n` (copy is already centralised in `app/data/site.ts`).
- Host the two fonts locally instead of Google Fonts, for speed and privacy.
- Analytics (GA4 + Meta Pixel) once the domain is live.
