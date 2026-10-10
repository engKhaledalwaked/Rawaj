// Builds app/assets/css/tokens.css from design-system/tokens.json (the Rawaj design system).
// Run after updating the design system: npm run tokens
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'

const t = JSON.parse(readFileSync('design-system/tokens.json', 'utf8'))
const themes = t.color.themes.map((x) => x.id)
const first = themes[0]
const val = (tok, th) => (typeof tok.value === 'string' ? tok.value : tok.value[th] ?? tok.value[first])

let css = '/* Generated from design-system/tokens.json — do not edit by hand. Run `npm run tokens`. */\n'
css += `:root, [data-theme="${first}"] {\n`
for (const tok of t.color.tokens) css += `  --${tok.name}: ${val(tok, first)};\n`
css += `  color-scheme: ${first};\n}\n`
for (const th of themes.slice(1)) {
  css += `[data-theme="${th}"] {\n`
  for (const tok of t.color.tokens) css += `  --${tok.name}: ${val(tok, th)};\n`
  css += `  color-scheme: ${th};\n}\n`
}
css += ':root {\n'
for (const fam of ['spacing', 'radius']) for (const tok of t[fam].tokens) css += `  --${tok.name}: ${tok.value};\n`
for (const [k, v] of Object.entries(t.type.families)) css += `  --font-${k}: ${v};\n`
css += '}\n'
for (const g of t.type.groups)
  for (const s of g.styles)
    css += `.t-${s.name} { font-family: var(--font-${s.family ?? g.family}); font-size: ${s.fontSize}; line-height: ${s.lineHeight}; font-weight: ${s.fontWeight}; }\n`

mkdirSync('app/assets/css', { recursive: true })
writeFileSync('app/assets/css/tokens.css', css)
console.log('tokens.css written')
