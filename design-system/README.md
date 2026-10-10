# Rawaj

**رواج** — شركة برمجة وإعلانات رقمية من الأردن، تخدم الأردن والخليج. الاسم يعني الطلب والانتشار في السوق: نحن نبني المنتج، ثم نصنع له الطلب.

Rawaj is a software and digital-advertising studio from Jordan serving Jordan and the Gulf. The identity is Arabic-first, bilingual, warm, and built to read as "results", not "decoration".

## The idea behind the logo

The logo is the word **Rawaj**, and its one idea lives in the dot of the **j**.

- The dot is Rawaj orange, a little larger and higher than a normal tittle.
- Two smaller orange dots trail up to it, each bigger than the last, rising at an angle: a tiny chart going up. That is the promise in one glance: Rawaj makes your business rise, your reach spread and your sales climb.
- The capital **R** gives the word a firm start; the rest is lowercase, friendly and approachable.

The **j with its rising dots** is the brand mark on its own: app icon, browser tab, social avatar.

The Arabic wordmark **رواج** uses the same idea in a form Arabic allows: the dot of the **ج** becomes a round orange dot in its correct place (in Arabic the dot is part of the letter and cannot move or multiply, so it carries no trail).

## Why these colours (for this category)

Most tech agencies in the region use blue, or a blue–purple gradient. Rawaj avoids both so it stands apart in a feed of competitors.

- **Orange `brand`** is the colour of action and attention. It suits advertising, it makes call-to-action buttons stand out, and it is warm, which suits the Jordanian and Gulf market.
- **Ink `ink`** (near-black) carries the trust and seriousness a software company needs. Most of every page is ink on sand.
- **Teal `accent`** is the software side: code, data and charts. It is the complement of orange, so the two never blur together.
- **Sand `surface`** is a warm off-white ground. It feels regional and premium, and is softer than pure white.

Proportion on a page: about 70% surface and ink, 20% brand orange, 10% teal. Orange is the hero, not the wallpaper.

## Content fundamentals

- **Arabic first**, English second. Arabic is clear Modern Standard Arabic that a Jordanian and a Saudi reader both find natural. English is plain and short.
- **Lead with results and numbers**: "+38% طلبات خلال 60 يوماً", not "حلول مبتكرة ومتكاملة".
- **Direct, no hype.** No "الأفضل في الشرق الأوسط". Show proof instead: case studies, client logos, real figures.
- **Prices are shown.** Like WebFX, Rawaj publishes starting prices. Transparency is part of the brand.
- Buttons are verbs: "احجز مكالمة", "اطلب عرض سعر", "شاهد أعمالنا".

## Visual foundations

- **Type.** Headings in Readex Pro (`display` family, styles `display` → `h3`); text in IBM Plex Sans Arabic (`sans`, styles `body`, `small`, `label`). Both are free on Google Fonts and carry Arabic and Latin.
- **Colour.** Text is `ink` on `surface`. Links and orange text use `brand-strong`, never `brand` (too light for small text). Buttons: `brand` fill with `ink-on-brand` text. White on orange fails contrast, so it is not used.
- **Shapes.** Corners from the radius scale: `radius-sm` for inputs, `radius-md` for cards and buttons, `radius-lg` for hero panels and the app icon. The rising dots from the logo may be used, large and few, as a decorative motif in heroes; never as icons or bullets.
- **Space.** Sections are separated by `space-24`; card padding is `space-6` on desktop, `space-4` on mobile.
- **Depth.** Borders (`line`) instead of shadows. Surfaces stay flat.
- **Direction.** Arabic pages are right-to-left; the mark stays on the side where reading begins.

## Logo usage

Files are in the **Logos** asset group:

- `rawaj-logo.svg` — the main logo, ink letters, for light backgrounds.
- `rawaj-logo-on-dark.svg` — sand letters, for dark backgrounds.
- `rawaj-logo-arabic.svg` / `rawaj-logo-arabic-on-dark.svg` — the Arabic wordmark for Arabic-only pages, signage and print.
- `rawaj-app-icon.svg` — the j mark on ink, `radius-lg` corners: app icon, social avatar, browser tab.
- `rawaj-app-icon-light.svg` — the same on sand.
- `rawaj-mark.svg` — the j mark alone on transparent, for favicons on light pages.

Rules: the dots are always `brand` orange and always three, rising to the upper right; never animate them apart, recolour them, or add more. Clear space around the logo: at least the height of the R's bowl. Do not stretch, rotate, outline, add shadows, or place the logo on busy photos. Below 24px use the app icon, not the full word.

## Light and dark themes

Every Rawaj surface ships in both themes, and both are first-class: the colour tokens carry a `light` and a `dark` value, and nothing in the system is hard-coded to one of them.

- **Light** is sand (`surface` #F4EFE6) with ink text. It is the default for the website and print.
- **Dark** is near-black (`surface` #121316) with sand text. The orange lifts slightly (#FF7A2E) and the teal brightens (#3FBFB5) so both keep their contrast.
- The website switches with `data-theme="dark"` on `<html>` (follow the visitor's system setting by default, with a toggle in the header). Components read tokens only, so they switch with no extra code: see the Button, ServiceCard and SiteHeader previews and flip the theme.
- The logo and icons switch too when inlined (classes `rj-t`, `rj-m`, `rj-i`, `rj-a`, `rj-f` bound to tokens). As image files they cannot switch, so each comes in two versions: `rawaj-logo.svg` / `rawaj-logo-on-dark.svg`, and **Icons** / **Icons-Dark**.

## Iconography

Rawaj has its own 25 icons: ink lines with one orange brand element (the Rawaj dot, a small quarter shape, or an accent stroke), echoing the orange dot of the logo. Services (`web`, `mobile-app`, `code`, `ads`, `social-media`, `seo`, `branding`, `ecommerce`, `analytics`, `maintenance`, `ui-ux`), process (`strategy`, `launch`, `growth`), contact (`phone`, `mail`, `location`, `chat`, `calendar`) and interface (`arrow-left`, `arrow-right`, `check`, `menu`, `close`, `plus`; ink only).

On the website inline them from `assets/Icons/rawaj-icons.json` so they follow the theme; in design tools use **Icons** on light grounds and **Icons-Dark** on dark ones. In service cards the icon sits in a `brand-tint` square with `radius-md`. In Arabic pages "next" is `arrow-left`. No emoji in the interface. A missing icon is drawn in the same style (24px grid, 2px rounded stroke, one orange element), not taken from another set.
