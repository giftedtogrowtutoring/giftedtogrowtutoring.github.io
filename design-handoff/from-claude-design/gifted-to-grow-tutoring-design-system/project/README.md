# Gifted to Grow Tutoring — Design System

A handcrafted, faith-rooted design system for **Gifted to Grow Tutoring**, a K-6 reading, writing, and math tutoring practice in Sarasota/Bradenton, Florida run by **Jennifer Pollard** (25 years experience, Certified PreK-6, Reading Endorsed, ESOL Endorsed, FL Step Up for Students Provider).

> The brand is **one teacher, not a chain.** The website is a marketing site whose primary job is to convert anxious parents into filling out a contact form. Every visual decision should make a worried parent exhale.

---

## Aesthetic in one sentence

A handcrafted children's book come to life — warm, joyful, illustrated; never corporate, never clinical.

The visual world is built from cream paper, deep-plum ink, a smiling lemon and orange character pair from the logo, and hand-drawn sprouts, leaves, and vines scattered like marginalia. The garden metaphor is **structural** — every major page section is named after a stage of growth (Plant the Seed → Tend the Roots → Bear Fruit → Join the Garden).

---

## Sources

| Source | Provided | Notes |
|---|---|---|
| Logo (business card) | `uploads/image0.png` → `assets/logo-full.png` | Only visual asset provided. Lemon + orange characters on an open book; a sprout grows up between them; the cross-shaped **t** in *tutoring* carries the faith cue. |
| Brand brief | inline (chat) | Full palette, type system, tone, content rules, design principles. |
| Codebase / Figma | none — built from brand brief | If a codebase exists later, replace components in `ui_kits/website/` with code-faithful ports. |

**No production codebase or Figma file was provided**, so every component in this system is built fresh from the brand brief. The marketing-site UI kit (`ui_kits/website/`) is a complete demonstration of the system in use, not a port of an existing site.

---

## Index — what's in this folder

```
.
├─ README.md                  ← you are here
├─ SKILL.md                   ← Claude Code-compatible skill manifest
├─ colors_and_type.css        ← all design tokens (palette, type, spacing, radii, shadows, motion)
├─ assets/                    ← logo + hand-drawn decorative SVGs (characters, sprouts, leaves, …)
├─ preview/                   ← Design-System-tab cards (one card per concept; consumed via register_assets)
└─ ui_kits/
   └─ website/                ← Marketing-site UI kit — hero, nav, services, testimonials, contact, footer
      ├─ README.md
      └─ index.html
```

> The marketing site is the only product. There is no app, no docs site, no dashboard.

---

## Color palette

| Token | Hex | Role |
|---|---|---|
| `--plum` | `#3D1E6D` | Primary text, headlines, primary plum buttons (from logo) |
| `--cream` | `#FFF8EC` | Page background — **warm paper, never pure white** |
| `--lemon` | `#F9D548` | Primary accent, CTA buttons (lemon character) |
| `--orange` | `#F08D3C` | Secondary accent (orange character) |
| `--green` | `#5B8C3E` | Growth, success, faith accents |
| `--sage` | `#A8C49A` | Subtle borders & accents |
| `--lavender` | `#E8DCFF` | Section dividers, soft backgrounds |
| `--ink` | `#1A0F33` | Body text on cream |

**Audience path color-coding** — three parent journeys, three colors:
- **Anxious parents / struggling student** → `--lemon`
- **Homeschool families** → `--orange`
- **Faith-aligned families** → `--green`

**Never** use blue. **Never** use pure white (`#FFFFFF`). **Never** use pure black (`#000000`). The cream-and-ink combo is calmer and more inviting; that is the whole point.

---

## Typography

| Family | Use | Weights |
|---|---|---|
| **Sansita Swashed** | All headlines and display type — chunky, swashy character that echoes the bouncy feel of the logo | 700, 900 |
| **Nunito** | All body, nav, buttons, labels | 400, 600, 700 |
| **Caveat** | "Jennifer's notes" — handwritten asides and quote signatures (max 2–3 per page) | 500 |

Fonts are loaded from Google Fonts via `@import` in `colors_and_type.css`. **Never** substitute Inter, Roboto, Arial, or any system-ui stack.

---

## CONTENT FUNDAMENTALS — how Gifted to Grow speaks

**Voice in one breath:** warm, calm, knowledgeable, faith-rooted (not preachy), encouraging. Jennifer is one teacher, talking to one parent.

### Person & address
- Address the parent as **you**. Refer to Jennifer as **Jennifer** or **I** when speaking as her (e.g. handwritten asides).
- Never "we" — there is no team. The brand is honest about being one experienced educator.
- Talk about the **child**, not "students" or "learners," and certainly not "clients." Use *your child*, *your reader*, *your first-grader* where you can.

### Tone & register
- **Make the anxious parent exhale.** Short sentences. Plain words. No jargon. No acronyms without explanation.
- **Warm, not chirpy.** Avoid exclamation points stacked together. One per paragraph at most.
- **Specific over abstract.** "She'll learn to track lines of text with her finger and then her eyes" beats "we improve reading fluency."
- **No urgency tactics.** No "limited spots!", no countdowns, no "act now." A worried parent is already worried — adding pressure pushes them away.

### Faith — woven, never wielded
- Faith is **present** in the visual language (the cross-t in the logo, an Ephesians 3:20 reference) and in **one** section labeled for faith-aligned families. It is never a barrier or a litmus test.
- Don't lead with scripture. Earn the parent's trust first; the verse is a quiet *and also this*, never a *first this*.
- Acceptable phrases: *gifted to grow*, *each child is wonderfully made*, *immeasurably more*. Avoid: *blessed*, *anointed*, *prayer warrior*, *biblical worldview* as marketing-deck words.

### Casing
- Headlines: **Title Case** (Sansita Swashed, plum). Example: *Plant the Seed*.
- Section eyebrows: **UPPERCASE, +0.14em tracking**, plum, Nunito 700, 13px.
- Buttons: **Sentence case** ("Send Jennifer a note"), not Title Case, not ALL CAPS.
- Body: sentence case, full punctuation.

### Emoji
- **None.** Emoji are not part of this brand. The lemon and orange characters, hand-drawn sprouts, and Caveat-script asides do all the warmth work emoji would otherwise do.

### Examples (write like this)

| Bad (corporate / scary / generic) | Good (Gifted to Grow) |
|---|---|
| "Unlock your child's full academic potential." | "Reading should feel like a story, not a struggle." |
| "Book a consultation today!" | "Send Jennifer a note — she'll write back the same day." |
| "Our proven methodology drives results." | "Twenty-five years in K–6 classrooms taught me what works for real kids." |
| "Limited slots! Enroll now!" | "Tuesdays and Thursdays at 4pm tend to fill up first." |
| "Christian-based tutoring services." | "Faith is part of who I am. It shows up as patience, not as a curriculum." |

### Primary CTA
Everywhere it can fit: **"Send Jennifer a Note"** → routes to the contact form. Secondary CTAs may say *Call (941) 586-8421* or *Read what parents say*.

### Sample Caveat-script asides ("Jennifer's notes")
Use **sparingly** — 2–3 per page, near the relevant content, always plum or green:
- *"This is my favorite part of the week."*
- *"I'll write back the same day, promise."*
- *"Bring his favorite book to our first session."*

---

## VISUAL FOUNDATIONS

### Color application
- **Background:** always `--cream` (`#FFF8EC`). Soft cream alternates with `--lavender` (`#E8DCFF`) for section banding. Never pure white.
- **Body text:** `--ink` on cream, `--cream` on plum/orange/green surfaces. **Never** light-grey-on-white.
- **CTAs:** primary CTA = lemon button with plum text; secondary = plum button with cream text; tertiary = ghost button with plum border.
- **Color-coding the 3 audience paths:** lemon = anxious parents, orange = homeschoolers, green = faith-aligned. Each path's card uses its color as an accent stripe, icon tint, and CTA hover-glow — never as a whole-card flood (too loud).

### Type behavior
- Display headlines (`h1.display`) use **Sansita Swashed 900** — chunky, swashy strokes that echo the calligraphic feel of the logo. Section heads (`h1`, `h2`) use 900 as well; `h3` uses 700 (the lighter of the two weights).
- Body text is **17px Nunito 400**, line-height 1.6. Lead text is 20px.
- `.eyebrow` is 13px UPPERCASE Nunito 700 with `letter-spacing: 0.14em`, plum.
- `.hand` (Caveat) is 24px+, used **only** as marginalia or signatures — never for headlines.

### Backgrounds & texture
- **Cream paper** is the base — a flat warm fill, not a noise texture. The "paper" feeling comes from the warmth of the color, the generous whitespace, and the hand-drawn marginalia.
- **Section banding** alternates `--cream` and `--lavender`. The `--lavender` band gets a soft 32px top/bottom radius so it reads as a *card-like band*, not a hard color split.
- **No gradients** as section backgrounds. Tiny gradient highlights are allowed *inside* characters (the lemon's highlight) but never as a hero background.
- **Decorative SVGs scattered as marginalia** — sprouts in corners, a vine along a section bottom, a lemon character peeking from the right edge. Never repeat the exact same SVG within one viewport; rotate or mirror, or use a different decoration from `assets/deco-*.svg`.

### Animation
- **Breathing** — characters and key SVGs scale `1.0 → 1.02 → 1.0` over **4s**, infinite, `ease-in-out`. Stagger neighbors with a 1.2s offset so they don't pulse in sync. Class: `.breathe` (plus `.breathe--offset` to desync).
- **Button hover:** translate `-2px` Y, gain a soft yellow glow (`--shadow-glow-lemon`), 220ms, `--ease-soft`.
- **Card hover:** translate `-2px` Y, swap `--shadow` → `--shadow-lift`, 220ms.
- **No parallax. No autoplay video. No particle effects. No marquee.** The site holds still and lets the reader rest.
- **Reduced-motion** is honored — all transitions collapse to 0.01ms.

### Hover & press
- Hover = a small **lift + warm glow**, never a darker grey overlay. Lemon buttons glow lemon; orange buttons glow orange.
- Press = the lift reverses (`translateY(0)`), the shadow shrinks to `--shadow-sm`. No color shift on press for primary buttons (the lift reversal is enough).
- Plum buttons darken to `--plum-deep` on hover with a stronger lift.
- Ghost buttons fill with `--lavender` on hover.

### Borders
- 1.5px solid `--border-soft` (`#E2D9C4`, a dusty paper edge) for cards on cream.
- 2px solid `--plum` for ghost buttons and form inputs (a strong, friendly outline; not a hairline grey).
- 2px dotted `--sage` for soft, decorative dividers — paired with the central lemon dot in `assets/deco-divider-dots.svg`.

### Shadow system
- **`--shadow-sm`** (`0 1px 2px rgba(plum, 0.08)`) — resting state for chips and small UI.
- **`--shadow`** (`0 4px 12px rgba(plum, 0.10)`) — default for cards and buttons.
- **`--shadow-lift`** (`0 8px 20px rgba(plum, 0.14)`) — hover state for cards.
- **`--shadow-glow-lemon`** / **`--shadow-glow-orange`** — colored glows that replace the plain shadow on CTA hover. This is the visual *warmth* of the system.
- All shadows are **plum-tinted**, never grey. There is no inner-shadow press depression style; presses simply remove the lift.

### Corner radii
- **`--r: 16px`** is the brand standard. Buttons, cards, inputs, image frames, badges — all 16.
- **`--r-lg: 24px`** for large content blocks (a hero photo frame, a long quote card).
- **`--r-pill: 999px`** for chip-style audience selectors and the small "FL Step Up Provider" badge.

### Cards
- Cream fill, 1.5px dusty border, 16px radius, `--shadow`. On hover: `--shadow-lift`, lift 2px.
- Variants: `.card--lavender` (soft purple), `.card--lemon` (bright accent), `.card--orange` (warm, cream text), `.card--plum` (deep, cream text).
- Cards may have one decorative SVG (sprout, leaf, sparkle) positioned absolutely in a corner, never centered. Decorations are at 60–70% opacity so text stays primary.

### Layout rules
- **8px base grid.** All spacing is a multiple of 8. (Exceptions only for optical adjustments inside character SVGs.)
- **Generous whitespace.** Sections are vertically padded by `--s-9` (96px) at desktop, `--s-7` (48px) at mobile.
- **Max content width** 1120px, centered. Hero may go to 1280px.
- **Single fixed element:** a top nav that becomes sticky after scroll. No fixed sidebars, no chatbots, no cookie popups blocking content.
- **One-column-first.** Two-column blocks (e.g. image + copy) collapse to a single column under 720px; the image goes on top.

### Transparency & blur
- Used **sparingly.** The sticky nav fades to `rgba(255,248,236,0.86)` with `backdrop-filter: blur(10px)` so cream paper still reads behind it.
- Decorative SVGs may sit at 60–80% opacity to feel like watercolor washes on paper.
- **No frosted-glass cards.** No semi-transparent buttons. The brand wants opaque, confident surfaces.

### Imagery color vibe
- When real photos exist (e.g. Jennifer at her desk), grade them **warm**, with a slight cream wash overlay (`mix-blend-mode: multiply` over `--cream` at 8% opacity). No cool/blue tones. No grayscale photos. No grain texture. No vignette.
- Photos are framed in a **16px-radius cream card with a 1.5px sage border** and a `--shadow-lift`. Never bleed to the edge of the viewport.
- For now, photo placeholders are used in `ui_kits/website/` — flagged with a `data-placeholder` attribute. **Real photos of Jennifer and her workspace should replace these.**

### The "Don't List" — codified
- No stock photos of generic smiling children.
- No blue gradients on white.
- No "limited time" urgency.
- No chatbot popup.
- No trust badges floating in space (the FL Step Up badge sits in a labeled row in the footer and contact section, not as a floating element).
- No cookie popup that blocks content.
- No drop shadows on text. No text-stroke. No gradient text.
- No emoji. No system-ui font fallback as a chosen style.

---

## ICONOGRAPHY

**Two icon systems coexist:**

### 1. Brand decorations — hand-drawn SVGs (in `assets/`)
These are the soul of the brand. They are **not** functional icons; they are marginalia. They live in corners, along section edges, next to headlines, scattered like a child's sticker book.

| File | Use |
|---|---|
| `character-lemon.svg` | The lemon mascot — page hero, section anchors, success states |
| `character-orange.svg` | The orange mascot — homeschool path, contact section |
| `deco-sprout.svg` | "Plant the Seed" section, beginnings |
| `deco-leaf.svg` | Soft section accents — pairs well with sage borders |
| `deco-vine.svg` | Horizontal divider across full-width bands |
| `deco-seed.svg` | Tiny anchor for bullet lists or quote marks |
| `deco-sparkle.svg` | Highlight badges ("New", "Most Loved") |
| `deco-book.svg` | The logo book — used in services/curriculum cards |
| `deco-underline.svg` | Wavy hand-drawn underline beneath key words in headlines |
| `deco-heart.svg` | Testimonial/results sections |
| `deco-sun.svg` | "Bear Fruit" section, optimism |
| `deco-apple.svg` | Teacher-y nod; use sparingly |
| `deco-pencil.svg` | "Send Jennifer a Note" contact CTA accent |
| `deco-divider-dots.svg` | Section divider with one lemon dot at the center |

**Rules for decoration use:**
- Never repeat the exact same SVG within one viewport — rotate, mirror, or substitute.
- Don't center decorations behind text. They live in corners, edges, and gutters.
- Default opacity 90%; reduce to 70% if they sit close to body text.
- Animate the lemon and orange characters with `.breathe` (4s, infinite, `ease-in-out`, ±2% scale). Stagger with `.breathe--offset`.

### 2. Functional icons — Lucide (via CDN)
For UI affordances (phone, mail, menu, arrow, check, close, calendar), use **[Lucide](https://lucide.dev)** — stroke-style, rounded, 2px stroke. Lucide's stroke weight and rounded line-caps match the friendliness of the brand without competing with the hand-drawn marginalia.

Load Lucide from CDN:
```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="phone" stroke-width="2" color="#3D1E6D"></i>
<script>lucide.createIcons()</script>
```

**Default Lucide settings**: `stroke-width: 2`, `color: var(--plum)`, size 20–24px inside text and 28–32px standalone.

**Substitution flag:** Lucide is a substitute. No icon set was provided. If the user prefers a different functional-icon library (Phosphor "duotone" would match the brand even better; Heroicons "outline" is the closest sibling), swap in `ui_kits/website/`.

### Emoji & unicode
- **Emoji: never.**
- **Unicode dingbats** (✓, ★, →) are not used as icons. Use Lucide's `check`, `star`, `arrow-right`.
- The bullet between credentials on the business card (• `Certified PreK-6 • Reading Endorsed • ESOL Endorsed`) **is** allowed — it's a typographic bullet, not an icon.

---

## SUBSTITUTIONS — please flag back to me

| What | Why | Action requested |
|---|---|---|
| **Functional icons → Lucide CDN** | No icon set was provided. | Confirm Lucide is acceptable, or specify a preferred set. |
| **Hand-drawn decorative SVGs** | None were provided; the brand brief required them as a structural element, so I drew them. | Review the set in `assets/deco-*.svg`. They are intentionally simple and "marker-drawn." If you have a children's-book illustrator's work to use instead, swap them in. |
| **Photography placeholders** | No photos of Jennifer were provided. | Provide real photos of Jennifer and her tutoring space; replace `data-placeholder` blocks in the UI kit. |
| **Webfonts loaded via Google Fonts** | The brief specified Sansita Swashed / Nunito / Caveat from Google Fonts, which is what's wired up. No font files are bundled locally. If offline use is needed, download `.woff2` files into `fonts/` and add `@font-face` rules in `colors_and_type.css`. | None unless offline use is required. |

---

## Quick links

- Open the **UI Kit** in your browser: `ui_kits/website/index.html`
- Tokens & resets: `colors_and_type.css`
- Logo and brand decorations: `assets/`
- Skill manifest (for Claude Code): `SKILL.md`
