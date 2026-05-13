---
name: gifted-to-grow-design
description: Use this skill to generate well-branded interfaces and assets for Gifted to Grow Tutoring — a K-6, faith-rooted, one-teacher tutoring practice in Sarasota/Bradenton FL run by Jennifer Pollard. Use for marketing pages, social posts, flyers, slide decks, email templates, or throwaway prototypes. Contains the full palette, typography, hand-drawn decorative SVG library, character mascots (lemon + orange), and a complete marketing-site UI kit.
user-invocable: true
---

Read the `README.md` file within this skill first — it contains the brand context, content fundamentals (voice, tone, casing, the don't-list), visual foundations (color application, type behavior, motion, hover/press, shadows, layout rules), and the iconography approach.

Then explore the other files:
- `colors_and_type.css` — drop into any HTML to get every design token (palette CSS vars, font imports, type scale, spacing, radii, shadows, motion, base button/card classes). The brand's defaults are wired up here; don't redefine them.
- `assets/` — the logo, the lemon and orange character mascots, and a library of hand-drawn decorative SVGs (sprouts, leaves, vines, fruits, sparkles, books, pencils). **Copy these out** rather than redrawing; the visual identity depends on them.
- `ui_kits/website/` — a full hi-fi recreation of the marketing site. Use its components as a starting point for any new marketing page or section. See its `README.md` for the component index.
- `preview/` — small one-concept demonstrations of each token / component. Helpful as visual reference.

## Working rules for this brand (non-negotiable)

1. **Never use blue. Never use pure white. Never use pure black.** Page background is `--cream` (#FFF8EC). Text is `--ink` on cream, never grey.
2. **Type:** Sansita Swashed (display, weights 700 + 900 — chunky and swashy, echoes the logo's calligraphic feel) · Nunito (body) · Caveat (handwritten asides, max 2–3 per page). No system-ui, no Inter, no Roboto.
3. **The garden metaphor is structural.** Sections are named *Plant the Seed* → *Tend the Roots* → *Bear Fruit* → *Join the Garden*. Keep this if you build new pages.
4. **One teacher, not a chain.** Address the parent as "you" and the teacher as "Jennifer" or "I". Never "we" or "our team".
5. **No emoji.** The lemon and orange characters + hand-drawn marginalia do the warmth work.
6. **Buttons:** primary = lemon fill, plum text, 16px radius. Hover = 2px lift + lemon glow.
7. **CTA copy:** "Send Jennifer a note" — sentence case. Not "Contact us" or "Book now".
8. **Faith is woven, never wielded.** Ephesians 3:20 is the reference verse; one quiet section, never the lead.
9. **No urgency.** No countdowns, no "limited spots". An anxious parent is already anxious.
10. **The don't-list** in the README is canon — read it before adding any imagery, popups, or trust badges.

## When invoked

If the user invokes this skill without other guidance, ask them what they want to make (a flyer? a homepage section? a social post? a slide for a parent night?), then ask:
- Who's the audience? Anxious parents / homeschoolers / faith-aligned families / all three? (Color-coded with lemon / orange / green respectively.)
- What size or format? (For social, ask which platform.)
- Production code or throwaway prototype? (Output HTML for prototypes; tokens-only changes for production.)

Then act as an expert designer. Output HTML artifacts that **copy from `assets/` into the artifact's folder** and **reference `colors_and_type.css`** so the visual system stays consistent. If you produce production code, document which tokens you used.

## Key facts to include where relevant

- Phone: **(941) 586-8421**
- Email: **jennifer@giftedtogrowtutoring.com**
- Area: Sarasota / Bradenton, FL (in-person + Zoom)
- Credentials: Certified PreK-6 · Reading Endorsed · ESOL Endorsed · FL Step Up for Students Provider · 25 years experience
