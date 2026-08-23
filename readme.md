# PRNG Design System

The brand and UI system for **PRNG Bookkeeping Services, LLC** — and the wider *punkrocknerdgirl* universe it lives inside.

> **Clean books. Clear systems. No BS.**

PRNG is a one-person bookkeeping, tax, and systems-consulting practice run by **Ernie** out of rural Texas. The brand voice is punk-meets-spreadsheet: tattooed, pink-haired, Gen‑X, allergic to corporate jargon, genuinely in love with untangling operational chaos. "Bookkeeper. Systems Architect. Professional Chaos Untangler."

This design system captures the public PRNG marketing and Workshop surfaces so any agent can produce on-brand pages, build-log/zine content, decks, and one-off mocks.

---

## The public surfaces

| Surface | Voice | Where it lives |
|---|---|---|
| **PRNG Bookkeeping (marketing)** | Buttoned-up, confident, client-facing. Roboto Black headlines, emoji service icons, plum/pink. | `ui_kits/prngbooks/` |
| **The Workshop (zine)** | Editorial, personal, honest. Playfair Display italic, graph-paper grid, `// mono` eyebrows. Build logs, field notes, concept pages. | `ui_kits/workshop/` |

Use the **plum/pink** treatment for branded internal build notes, workflow sheets, and concept pages. Use the **working palette** (teal/purple/amber/green) for data, categories, and financial reads in reports and graphics.

---

## Source materials

These were the inputs. You may not have access, but they're recorded so a reader who does can dig deeper and build more faithfully:

- **GitHub — `github.com/punkrocknerdgirl/prngbooks`** — the official PRNG Bookkeeping marketing site (HTML + CSS). Primary source of truth for the marketing surface, colors, and type.
- **GitHub — `github.com/punkrocknerdgirl/diane`** — Project Diane (trucking ticketing/invoicing). Currently a stub repo.
- Other repos in the org worth exploring: `punkrocknerdgirl/ed` (personal AI wrangler), `punkrocknerdgirl/kwisatz` (QBO receipt search utility).
- `uploads/punkrocknerdgirl claude.html` — the Workshop / build-log zine site. Source for the editorial surface.
- `uploads/PRNG Banner 1.png`, `prng_logo_transparent.png`, `ernie_cartoon*.jpg/png` — brand imagery (copied into `assets/`).

> Explore the GitHub repositories above to build more accurately against the real product over time.

---

## CONTENT FUNDAMENTALS — how PRNG writes

**Voice:** First person, direct, and warm. Ernie talks *to* you ("you're wearing too many hats", "you get your brain back"), and *as* herself ("I build tools to fix the exact problems I've already lived through"). Confident without being slick. Funny in an understated, dry way. Shenanigans implied, never performed.

**Tone:** Anti-corporate and anti-hype. The enemy is jargon, mystery pricing, "guru nonsense", and "startup bro energy". Plain words beat fancy ones. Honesty about messiness is a feature ("spreadsheets that made me question humanity").

**Casing:**
- Marketing headlines: sentence case, heavy weight, often with a single pink accent word. ("More than a bookkeeper.")
- Eyebrows / labels / metadata: UPPERCASE Roboto Mono, wide tracking. Marketing uses plain caps ("WHAT I DO"); the Workshop prefixes a `// ` ("// field notes").
- Body: sentence case, contractions everywhere.

**Signature lines / motifs:**
- "Clean books. Clear systems. No BS." (primary tagline — three short clauses, periods as punches)
- "Professional Chaos Untangler"
- "Built with intention and zero Squarespace."
- "Paper and code."
- Triads with hard stops are the house rhythm: *Real work. Real systems. No guru nonsense.*

**Emoji:** Yes — but disciplined. Used as **service-card icons only** (📒 💸 👥 ⚙️ 📊 🚚) and as a check glyph (✓) on credentials. Never in body copy, never decoratively in the zine or reports.

**Do:** short clauses, real numbers, named projects (Ed, Diane, Kwisatz), industry specifics (trucking, construction, QBO).
**Don't:** buzzwords, vague benefit-speak, exclamation-point hype, fake urgency, stock-photo positivity.

---

## VISUAL FOUNDATIONS

**Color.** A deep **plum** (`#5C1F3B`) and near-black **ink** (`#1A0A12`) ground everything; **pink** (`#C9538C`) is the single accent that does all the pointing (borders, links, accent bars, one highlighted word). **Blush** tints (`#FAEAF3` / `#F0D0E4`) are the light surfaces. A separate **working palette** (teal, purple, amber, green, blue, neutral grey) handles data, categories, and charts — kept out of the brand identity so the two never muddy each other. Financial semantics: green = positive, red (`#C0392B`, added) = loss, amber = caution. See `tokens/colors.css`.

**Type.** Three families. **Roboto** for everything functional — Black (900) for marketing headlines, 300/400/700 for body. **Roboto Mono** for eyebrows, labels, metadata, data figures, and code. **Playfair Display italic (700)** is the Workshop/zine voice *only* — never on the marketing site or in reports. Helvetica/Arial are the sans fallback; Georgia the display fallback. See `tokens/typography.css`.

**Spacing & layout.** 4px base step. Generous vertical section rhythm (~80px), tight chip/label gaps. Centered containers max ~1100px. Content is clean and scannable: short headings, grouped sections, strong hierarchy.

**Backgrounds.** Mostly flat color — white, blush wash, plum, ink. The one texture is a **graph-paper / zine grid** (faint pink 1px lines on a 40px grid) over dark plum panels (heroes, report covers). One subtle directional gradient appears: the plum wash over the hero photo. No noisy gradients, no glassmorphism for its own sake.

**Borders & corners.** Sharp is the signature: **2px** radius on buttons and labels, **4px** on cards, **1px** "xs" on note tags. The lone rounded shape is the **pill** (20px) for badges. The recurring structural motif is the **pink accent bar** — a 3px pink border on the **top** of cards (services, stats) or the **left** of info rows and pull-quotes/footnotes.

**Shadows.** Soft and plum-tinted, never grey or harsh: `sm` (0 2px 8px), `md`, `lg` (0 6px 22px) on hover. Elevation is gentle; the brand leans on borders more than shadows.

**Motion.** Restrained. 0.15–0.2s transitions on color and border. Cards and buttons **lift** ~2px on hover (`translateY(-2px)`) with a shadow bump. Easing is a gentle ease-out. No bounces, no infinite loops, respects `prefers-reduced-motion`.

**Hover / press states.** Buttons: primary pink darkens to `#B0437A` and lifts; ghost buttons swap their border/text to pink. Links: muted → pink. Cards: shadow deepens + lift. Nothing scales dramatically; nothing flashes.

**Imagery.** Warm, illustrated, a little punk: the brand's portrait of Ernie is a comic-style illustration (pink hair, tattoos, glasses, laughing at a laptop in a blizzard of receipts) on a coral/pink ground. Photography (the real hero shot) is treated dark — dropped into plum/ink gradients so it reads as a moody backdrop, not a stock headshot. Framed images get an offset 2px pink outline behind them.

**Transparency / blur.** Used sparingly and functionally: the fixed nav is `rgba(26,10,18,0.97)` with an 8px backdrop blur; dark panels use low-opacity white fills (`rgba(255,255,255,0.03–0.06)`) for inset cards. Not a decorative glass aesthetic.

---

## ICONOGRAPHY

PRNG has **no custom icon font or SVG icon set** in its source. Its icon language is deliberately low-tech and human:

- **Emoji as service icons.** The marketing site uses system emoji for the six service cards (📒 bookkeeping, 💸 A/R & A/P, 👥 payroll, ⚙️ systems, 📊 ops consulting, 🚚 trucking/construction). This is intentional and on-brand — keep emoji *only* in this role.
- **The ✓ check glyph** prefixes credential chips ("✓ QBO ProAdvisor Level 2").
- **Unicode marks** stand in for decorative icons: the `→` arrow on links/CTAs and the `⌁` (wave) on the Workshop's "you are here" panel.
- **The PRNG seal logo** (circular "Punk Rock Nerd Girl · Bookkeeping Services" badge, plum on blush) is the one true mark. In `assets/`.

**If you need a real icon set** (e.g. for a dashboard/app surface that doesn't exist yet), substitute **Lucide** (https://lucide.dev) via CDN — clean 2px-stroke line icons that match the sharp, no-nonsense aesthetic — and **flag the substitution to the user**, since it isn't part of the original brand. Never hand-roll decorative SVG illustrations; use the real brand imagery in `assets/` or ask for more.

---

## What's in here (index)

**Foundations**
- `styles.css` — root entry point (imports only). Consumers link this.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css`
- `guidelines/*.html` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**Components** (`window.PRNGDesignSystem_4a3ea3`)
- `components/core/` — `Button`, `Badge`, `Pill`, `Eyebrow`, `Card`
- `components/forms/` — `Input`, `Select`
- `components/data/` — `StatCallout`, `StatusTag`, `DataTable`

**UI kits**
- `ui_kits/prngbooks/` — marketing site (`index.html` + screens)
- `ui_kits/workshop/` — Workshop zine site

**Brand assets** (`assets/`)
- `prng_logo_transparent.png` · `PRNG Text.png` · `logo_gbs.png` · `ernie-ritz.png` (photo)
- The Ernie cartoon is **not** kept here. Its canonical copy is
  `prngbooks/ernie_cartoon.png`, referenced by that repo's `index.html`.
  Compressed duplicates (`ernie_cartoon_small.jpg`, `ernie_cartoon_under_1mb.jpg`)
  lived in this repo, were referenced by nothing, and were removed 2026-08-23.
  Link to the prngbooks copy rather than adding another.

**Other**
- `SKILL.md` — Agent Skill manifest for using this system in Claude Code.

---

## Notes & substitutions

- **Fonts** are loaded from **Google Fonts** (Roboto, Roboto Mono, Playfair Display) via `tokens/fonts.css` rather than self-hosted binaries — all three are the brand's real typefaces and are reliably available there. If you need self-hosted `@font-face` files, ask and they can be added.
- **`#C0392B` (loss red)** was added for financial-negative semantics; it is not in the original working palette but is needed for report figures.
- **Lucide** is suggested only as a fallback icon set; the brand ships none.
