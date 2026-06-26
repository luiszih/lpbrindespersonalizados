
## Goal

Use the uploaded `lp-brindes-eliza.html` as a visual + structural reference and rebuild it as the homepage of this TanStack Start project. Same composition, same copy (pt-BR), same warm brown palette, same Sora typography — but as proper React components on top of the project's Tailwind v4 token system in `src/styles.css`.

## Design system (added to `src/styles.css`)

Light theme tokens overridden to match the reference:

- `--background`: cream `oklch(0.965 0.012 75)` (~#f9f3ec)
- `--foreground`: deep espresso `oklch(0.22 0.03 50)` (~#2a1d12)
- `--primary`: copper brown `oklch(0.52 0.09 55)` (~#8b5a3c) / `--primary-foreground`: cream
- `--accent`: warm peach `oklch(0.88 0.07 65)` (~#ffd9b3) / `--accent-foreground`: espresso
- `--secondary`: soft sand `oklch(0.93 0.02 70)`
- `--muted` / `--muted-foreground`, `--border`, `--card` retuned to the warm palette
- New tokens: `--surface-dark` (espresso section bg), `--surface-cream` (FAQ bg), `--gradient-hero` (copper → darker copper), `--shadow-card`
- Type: load Sora via `<link>` in `__root.tsx` head; add `--font-display: "Sora", sans-serif` and apply on `body`

No hardcoded color utilities in components — only tokens.

## Routes

- `src/routes/index.tsx` — replace placeholder with the landing page. Set `head()`:
  - title: "Brindes Corporativos Personalizados | Eliza Acessórios & Design"
  - description, og:title, og:description, og:type=website, twitter:card=summary_large_image
  - lang stays `en` on the html shell (existing) — acceptable; copy is pt-BR inside body

## Component structure (`src/components/landing/`)

One file per section, composed in `index.tsx`:

1. `SiteHeader.tsx` — sticky header on copper bg: monogram "e." + ELIZA / ACESSÓRIOS & DESIGN wordmark, nav (Produtos, Diferenciais, Processo, FAQ, Orçamento) → hash anchors to in-page sections, "Solicitar orçamento" pill button.
2. `Hero.tsx` — copper background, left column: badge "🏭 FÁBRICA PRÓPRIA · DESDE 1995", H1 with mixed weights ("O brinde que a sua marca merece — " bold + "fabricado com 30 anos de precisão." in lighter accent tone), supporting paragraph, two CTAs (primary "Solicitar orçamento →", ghost "Ver produtos"). Right column: image placeholder card (camera icon + caption "Flat lay de brindes metálicos dourados"). Bottom trust strip with 4 bullets.
3. `Products.tsx` — eyebrow "NOSSOS PRODUTOS", H2 "Brindes que viram **símbolo da sua marca**", 4-card grid (Pins de Lapela, Chaveiros Personalizados, Charms e Medalhas, Acessórios com Logo) on cream cards with copper icon glyph. Stats strip below: 250 un. / 45 dias / 30 anos with vertical dividers, on a soft peach band.
4. `WhyEliza.tsx` — full-bleed espresso section, eyebrow "POR QUE ELIZA", H2 "Tradição certificada, **precisão industrial.**", 3 dark cards (FAMA Disney, ABVTEX Ouro, 30 Anos).
5. `Personas.tsx` — eyebrow "PARA QUE É:", H2 "Feito para quem **não negocia a imagem da marca.**", 2×2 grid of persona cards, each with icon + title and two labeled blocks: "DOR" (copper accent label) and "SOLUÇÃO".
6. `Process.tsx` — eyebrow "COMO FUNCIONA", H2 "Um processo **enxuto,** do conceito à entrega.", horizontal 5-step timeline (numbered copper circles connected by a peach line) with labels: Briefing, Ficha Técnica, Aprovação, Produção, Entrega. Stacks vertically on mobile.
7. `Portfolio.tsx` — eyebrow "PORTFÓLIO", H2 "Conheça nosso **portfólio**", "@elizaacessoriodesign" subhead, 3×2 image-placeholder grid with captions, centered "⬇ Baixar catálogo completo" button. Use placeholder tiles (camera glyph) — no image generation in this pass; the user is the source of real product photos.
8. `Faq.tsx` — cream section, eyebrow "PERGUNTAS FREQUENTES", H2 "Tudo o que **você precisa saber.**", 5 items using shadcn `Accordion` (already in project): pedido mínimo, acabamentos, desenvolvimento personalizado, prazo, certificação FAMA. Real answer copy drafted from reference context (mín. 250 un./modelo, ~45 dias, etc.).
9. `FinalCta.tsx` — peach band, H2 "Seu próximo brinde começa com um briefing.", subhead, two buttons (WhatsApp primary, email outline), phone line.
10. `SiteFooter.tsx` — espresso bg, monogram + wordmark, tagline, instagram + site, address, copyright.
11. `WhatsAppFab.tsx` — fixed bottom-right green circular button, `aria-label`, opens `https://wa.me/5519995411832?text=...`.

All hrefs use `<a href="#produtos">` style for in-page nav; CTA buttons link to `#orcamento` and `wa.me`. No new routes needed.

## Copy

Verbatim from the reference (pt-BR), including section eyebrows, H1/H2 with mixed-weight emphasis, stats, persona DOR/SOLUÇÃO lines, FAQ questions, footer address `R. Cedro, 229 A, Vila Queiroz, Limeira/SP — CEP 13485-053`, phone `+55 19 99541-1832`, email `contato@elizadesign.com.br`, social `@elizaacessoriodesign`, site `www.elizadesign.com.br`.

## Out of scope

- No real product photography generation (placeholder tiles ship; user supplies images later).
- No form / no backend / no Lovable Cloud — CTAs are WhatsApp + mailto.
- No i18n framework — single pt-BR copy.
- No dark mode tweaks beyond what's already in the file; this page is light-only by design.

## Technical notes

- Tailwind v4 + tokens only. Replace all token values in `:root`; leave `.dark` untouched.
- Add Sora `<link rel="stylesheet" ...>` via `__root.tsx` `head().links` (do NOT @import remote URL in `src/styles.css` per project rules).
- Use existing shadcn `Accordion`, `Button` components; add `variant` overrides via className/tokens, not hardcoded colors.
- Replace `src/routes/index.tsx` `Index` (removing the `data-lovable-blank-page-placeholder` element).
- Responsive: single-column on mobile, 2-col personas → 1-col, 4-col products → 2 → 1, 5-step process → vertical.

## Deliverables

- Updated `src/styles.css` (tokens + base font)
- Updated `src/routes/__root.tsx` (Sora link, page title/meta updated for the brand)
- New `src/components/landing/*.tsx` (11 files above)
- Updated `src/routes/index.tsx` composing the sections
