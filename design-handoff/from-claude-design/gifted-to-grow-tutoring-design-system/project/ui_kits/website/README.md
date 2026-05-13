# Gifted to Grow Tutoring — Marketing Site UI Kit

A single hi-fi recreation of the **giftedtogrowtutoring.com** marketing site, built from the brand brief. The page is one long scroll through the four "garden" sections, with a contact-form modal that opens from any **Send Jennifer a note** CTA.

## What's in here

| File | Purpose |
|---|---|
| `index.html` | Entry point. Loads React + Babel and the components below. |
| `App.jsx` | Page composition — order of sections, modal state. |
| `Nav.jsx` | Sticky cream nav with the four section anchors + primary CTA. |
| `Hero.jsx` | Full-bleed cream hero with display type, lemon+orange characters, primary CTA. |
| `AudiencePicker.jsx` | Three audience-path chips that let the parent self-select. |
| `PlantTheSeed.jsx` | Philosophy section (lavender band). |
| `TendTheRoots.jsx` | Services / what a session looks like. |
| `AboutJennifer.jsx` | Photo placeholder + credentials. |
| `BearFruit.jsx` | Testimonials. |
| `FaithSection.jsx` | Ephesians 3:20 reference, gently. |
| `JoinTheGarden.jsx` | Contact CTA section. |
| `ContactModal.jsx` | The form. Validates lightly; "submits" with a thank-you state. |
| `Footer.jsx` | Address line, credentials, FL Step Up badge. |
| `Decorations.jsx` | Reusable hand-drawn SVG marginalia (sprouts, leaves, etc) — wraps the `assets/deco-*.svg` files. |

## Interactions

- **Audience picker** at the top of the hero highlights one of the three paths; the relevant section card below picks up a stronger accent stripe.
- **Send Jennifer a note** anywhere → opens `ContactModal` (escapes on Esc, click-outside, or Send).
- Form submit → thank-you state inside the modal with Jennifer's signature in Caveat.
- All characters and key SVGs **breathe** (1.0 → 1.02, 4s) per the brand brief.
- Hover state: 2px lift + warm glow on every CTA.

## What's intentionally NOT here

- No real photographs (placeholder blocks flagged with `data-placeholder`).
- No back-end. The form just opens a thank-you state.
- No tracking, analytics, chatbot, or cookie popup.
- No second page — the marketing site is single-scroll by design.
