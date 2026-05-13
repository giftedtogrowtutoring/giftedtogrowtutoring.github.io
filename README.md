# Gifted to Grow Tutoring — Website

Astro-built marketing site for **Gifted to Grow Tutoring** (Jennifer Pollard, K-6 reading/writing/math tutoring in Sarasota & Bradenton, FL).

## Stack
- **Astro** (static, zero-JS by default) — hand-rolled CSS, no Tailwind.
- **Google Fonts** (Sansita Swashed, Nunito, Caveat) loaded with `display=swap`.
- **Web3Forms** for the contact form (no backend).
- **GitHub Pages** target, custom domain via `public/CNAME`.

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:4321>.

## Build

```bash
npm run build      # writes /dist
npm run preview    # serves /dist locally
```

## File layout

```
public/
  assets/              ← logo + hand-drawn decorative SVGs (copied from design handoff)
  robots.txt           ← allow-all + sitemap reference
  CNAME                ← custom-domain pointer for GitHub Pages

src/
  data/
    business.ts        ← single source of truth for phone, email, hours, credentials
    testimonials.ts    ← REAL testimonials only (see CLAUDE.md §6)
  styles/
    tokens.css         ← design tokens (colors, type, spacing, radii, shadows, motion)
    site.css           ← page-level layout & component CSS
  components/
    Nav.astro          ← sticky header w/ scroll-blur + mobile menu
    Footer.astro       ← FL Step Up callout + contact info
    Deco.astro         ← hand-drawn SVG decoration wrapper
    Character.astro    ← lemon / orange mascots with breathing animation
    Hero.astro         ← home hero with character stage
    PlantTheSeed.astro ← philosophy intro section
    TendTheRoots.astro ← services overview (reading / writing / math)
    AboutTeaser.astro  ← short About blurb on home
    BearFruit.astro    ← testimonials section (home)
    FaithSection.astro ← Ephesians 3:20 + welcoming language
    JoinTheGarden.astro← repeat CTA block
    AudiencePicker.astro ← 3-path chip selector (uses sessionStorage)
  layouts/
    BaseLayout.astro   ← HTML shell + OG/meta/LocalBusiness JSON-LD
  pages/
    index.astro
    about.astro
    services.astro
    approach.astro
    testimonials.astro
    contact.astro
    thanks.astro       ← post-submit confirmation
    404.astro

design-handoff/        ← reference exports from Claude Design (do not edit; informational)
```

## Things still to wire up

Search the codebase for `NEEDS REVIEW` to find these in context.

1. **Web3Forms access key** — register at <https://web3forms.com> and replace the placeholder in `src/pages/contact.astro` so the form actually delivers email.
2. **Real photos of Jennifer** — replace placeholders in `src/components/AboutTeaser.astro` and `src/pages/about.astro` (look for `data-placeholder`).
3. **Exact pricing** — confirm `$60–$75 / $45–$55 / $35–$45` ranges in `src/pages/services.astro` are correct.
4. **More testimonials** — drop new ones into `src/data/testimonials.ts` as families send them.
5. **GA4 / Plausible** — analytics is intentionally not wired up; confirm preference and add to `BaseLayout.astro`.
6. **OG image** — currently falls back to the logo PNG. A purpose-made share image would be better.

## Design system

Authoritative tokens live in `src/styles/tokens.css`. They were ported from the Claude Design handoff at:

```
design-handoff/from-claude-design/gifted-to-grow-tutoring-design-system/project/colors_and_type.css
```

The full brand brief — voice rules, the "don't list", iconography guidance — is in:

```
design-handoff/from-claude-design/gifted-to-grow-tutoring-design-system/project/README.md
```

Project-level rules (voice, claims you can / can't make, testimonial integrity) are in the repo root [`CLAUDE.md`](./CLAUDE.md).

## Deploying to GitHub Pages

A GitHub Action publishing `dist/` on every push to `main` is the smallest setup. (Not added yet — add when ready.) For now: `npm run build` then deploy `dist/` however suits.
