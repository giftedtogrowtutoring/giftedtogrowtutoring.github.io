# Gifted to Grow Tutoring — Design System

> **Aesthetic North Star:** A handcrafted children's book come to life as a website. Warm, joyful, faith-rooted, and unmistakably *not* AI-generated. Every detail should feel intentionally made by someone who cares.

---

## 1. Brand Voice & Principles

**Voice attributes:** Warm, knowledgeable, faith-rooted (not preachy), encouraging, never anxious. Jennifer speaks *with* parents, not down to them. She is the calm in the storm of standardized testing.

**Three things every page must do:**
1. Make an anxious parent exhale.
2. Make Jennifer feel like a real, trustworthy human (not a faceless service).
3. Make the next step (contact form) feel like the natural, easy choice.

**Things this site is NOT:**
- Not a corporate tutoring chain (Sylvan, Kumon)
- Not a tech-y EdTech app (Outschool, Khan Academy)
- Not preachy or evangelical in tone — faith is woven in, never wielded
- Not generic "education website" with stock photos of smiling kids

---

## 2. Color Palette

The palette is built around the existing logo's purple and the lemon/orange characters, extended into a full garden ecosystem.

### Primary (use everywhere)
- **Deep Plum** `#3D1E6D` — Primary text, headlines, primary buttons. From the logo wordmark.
- **Cream** `#FFF8EC` — Page background. Warmer than white, evokes paper/sunlight.

### Secondary (use for accents and personality)
- **Lemon Yellow** `#F9D548` — The lemon character. CTAs, highlights, "ah-ha" moments.
- **Orange Glow** `#F08D3C` — The orange character. Secondary CTAs, warm highlights.
- **Garden Green** `#5B8C3E` — Growth, the leaves in the logo. Success states, growth metrics.
- **Soft Lavender** `#E8DCFF` — The accent splashes in the logo. Section dividers, soft backgrounds.

### Functional
- **Ink** `#1A0F33` — Body text on cream (better than pure black with this palette)
- **Whisper** `#FAF1DD` — Subtle card backgrounds, hover states
- **Sage** `#A8C49A` — Borders, dividers, subtle accents

### Don't use:
- Pure white (`#FFFFFF`) — too sterile against this palette
- Pure black — use Ink instead
- Any blue — would clash with the warm palette

---

## 3. Typography

Two fonts, paired with intention. Both free via Google Fonts.

### Display: **Sansita Swashed**
- Used for: H1, H2, hero headlines, section titles, garden-metaphor section names ("Plant the Seed," etc.)
- Weights: 700 (bold), 900 (black) — primarily use 900 for hero, 700 for subsections
- Google Fonts link: https://fonts.google.com/specimen/Sansita+Swashed
- Why: Chunky display serif with built-in swashes and curls that echo the bouncy, calligraphic character of the existing logo. Designed for friendly-confident branding. Coexists with the logo without trying to imitate it.
- ⚠️ Use only at large sizes (≥24px). At small sizes the swashes become visual noise — never use for body copy or UI labels.

### Body: **Nunito**
- Used for: All body copy, navigation, buttons, captions, form labels
- Weights: 400 (regular), 600 (semibold), 700 (bold)
- Google Fonts link: https://fonts.google.com/specimen/Nunito
- Why: Rounded terminals make it feel friendly and approachable. Pairs beautifully with the warmth of Sansita Swashed without competing. Excellent readability for parents skimming on phones.

### Accent: **Caveat** (use sparingly!)
- Used for: Handwritten-feel quotes, "Jennifer's notes," signature accents (max 2-3 per page)
- Weight: 500
- Google Fonts link: https://fonts.google.com/specimen/Caveat
- Why: Adds the handmade, personal touch. Like Jennifer wrote in the margin.

### Font Loading (for Claude Code reference)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@700;900&family=Nunito:wght@400;600;700&family=Caveat:wght@500&display=swap">
```

### Type Scale (mobile-first, scales up on desktop)
```
Display XL  72px / 80px   (hero only)
Display L   56px / 64px   (H1 on inner pages)
H1          40px / 48px   (mobile H1, desktop H2)
H2          32px / 40px
H3          24px / 32px
H4          20px / 28px
Body L      18px / 28px   (lead paragraphs)
Body        16px / 26px   (default)
Small       14px / 22px
Caption     13px / 18px   (labels, micro)
```

---

## 4. Spatial System

8px base grid. All spacing is a multiple of 8 (with one exception: 4px for tight icon gaps).

```
4   xs    — icon-to-text
8   sm    — tight stacking
16  md    — default gap
24  lg    — section internal spacing
32  xl    — between related groups
48  2xl   — between subsections
64  3xl   — between major sections (mobile)
96  4xl   — between major sections (desktop)
128 5xl   — hero breathing room (desktop)
```

**Page max-width:** 1280px (content) with 1440px (hero/full-bleed allowed)
**Reading column max-width:** 680px (body copy never wider than this)

---

## 5. The Garden Metaphor (Structural)

Every page section is named for a stage of growing something. This is not decoration — it's the navigational and emotional architecture of the site.

| Section | Purpose | Page(s) |
|---------|---------|---------|
| **Plant the Seed** | Philosophy, approach, who Jennifer is | Home, About |
| **Tend the Roots** | Services, what's offered, how it works | Home, Services |
| **Bear Fruit** | Results, testimonials, transformations | Home, Testimonials |
| **Join the Garden** | Contact, get started, intake form | Every page CTA, Contact |

These names appear as section headers throughout the site, creating a cohesive narrative.

---

## 6. Component Patterns

### Buttons
- **Primary:** Deep Plum background, Cream text, 12px border-radius, generous 16px×32px padding. Subtle 2px shadow that lifts on hover.
- **Secondary:** Cream background, Deep Plum border (2px), Deep Plum text. Same dimensions.
- **Tertiary:** Text-only with animated underline that grows from left on hover.
- **Hover:** Buttons lift 2px and gain a soft Lemon Yellow glow underneath.

### Cards
- Cream background with Whisper hover state
- 2px Sage border that becomes Deep Plum on hover
- 16px border-radius (consistent with buttons)
- Generous internal padding: 32px desktop, 24px mobile
- Optional decorative "sprout" SVG accent in top-right corner

### Decorative Illustrations
Custom hand-drawn (SVG) elements scattered throughout, never repeating identically:
- Sprouts, leaves, vines as section dividers
- The lemon and orange characters reappear in different poses
- Small fruits/berries as bullet points
- A subtle "garden row" pattern as page footer

### Forms (critical — this is the primary CTA)
- Cream input backgrounds with Sage 2px borders
- Labels above inputs in Body weight 600, Deep Plum
- Generous 48px input height on mobile (thumb-friendly)
- Helpful, conversational microcopy under fields
- Submit button is full-width on mobile, with a sprout SVG that animates when hovered

---

## 7. Motion Principles

**Restraint over flash.** Animations should feel like natural growth, not interface acrobatics.

- **Page load:** Hero elements stagger in from below (translateY 16px → 0, opacity 0 → 1, 80ms apart, 600ms total)
- **Scroll:** Sections fade in on scroll, but only once and quickly (250ms)
- **Hover:** Buttons lift, cards gain border color, links grow underlines
- **Lemon/Orange characters:** Subtle 4-second "breathing" idle animation — they slowly scale 1.0 → 1.02 → 1.0
- **NO:** Parallax scrolling, autoplay videos, animated gradients, particle effects, scroll-jacking

---

## 8. Accessibility Floor

This is non-negotiable. Parents include people with disabilities, ESL families, and tired-after-work humans.

- WCAG 2.1 AA minimum, AAA where possible
- All color combinations tested for 4.5:1 contrast minimum
- Every form input has a visible label (placeholders are not labels)
- Focus states are highly visible (Lemon Yellow 3px outline)
- All images have meaningful alt text
- Keyboard navigation works everywhere
- Reduced-motion media query disables all animation
- Font sizes use rem, not px, so users can zoom

---

## 9. The Three Audience Paths

Per your direction: site convinces all three audiences (anxious parents, homeschool, faith-aligned) equally. Three paths surface on the home page after the hero:

1. **"My child is struggling"** → leads to test prep / confidence-building content
2. **"I'm homeschooling"** → leads to homeschool partnership content
3. **"We want a Christian educator"** → leads to faith-rooted philosophy content

Each path uses one of the three palette accent colors (Lemon, Orange, Green) so they're visually distinct but harmonious.

---

## 10. The "Don't List"

Things this site will never have, no matter what:

- ❌ Stock photos of generic smiling children
- ❌ A chatbot popup
- ❌ A "limited time offer" countdown
- ❌ Pure white backgrounds
- ❌ Blue anywhere
- ❌ Inter, Roboto, or any system font
- ❌ Trust badges floating in space ("As seen on...")
- ❌ Auto-playing background music
- ❌ Cookie popup that blocks content
- ❌ A spinning carousel that nobody reads past slide 1
