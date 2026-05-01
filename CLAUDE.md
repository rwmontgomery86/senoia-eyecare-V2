# Senoia Eyecare — Website

Boutique optometry marketing site for **Senoia Eyecare** (Senoia, Georgia). Single-page editorial homepage that drives appointment bookings via the external Eyefinity scheduler.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript** (strict)
- **Tailwind 3.4** with project tokens (no Tailwind 4)
- **`motion@^12`** — import from `motion/react`, **never** `framer-motion`
- **Fonts via `next/font/google`**: Cormorant Garamond (display), Inter (body), JetBrains Mono (mono/eyebrow)

## Project layout

```
app/
  layout.tsx              ← fonts, metadata, JSON-LD, mounts <Nav /> + <Footer />
  globals.css             ← tailwind + reduced-motion + marquee/draw helpers
  page.tsx                ← homepage composition
  book/                   ← /book → server-redirect to bookingUrl
  contacts/, eye-exams/, frames/, insurance/, visit/   ← stub pages (ComingSoon)
  services/[slug]/        ← per-service pages (SSG from data/services.ts)
  visit-variants/         ← sandbox: 4 layout explorations + grid view + click-through

components/
  Nav.tsx                 ← dark, absolute over hero, hamburger on mobile
  ui/                     ← primitives (WordReveal, GoldRule, EyebrowLabel, Eyebrow, Button, FadeUp, StripedPlaceholder, GlassesMotif)
  sections/               ← homepage blocks (Hero, Services, Frames, Testimonials, Insurance, Visit, BookingCTA, Footer, ComingSoon)
  sections/visit-variants/ ← 4 visit layouts + index registry

data/
  site.ts                 ← single source of truth: phone, email, address, hours, bookingUrl, mapEmbedUrl, social
  services.ts             ← 4 services (slug, number, title, summary)
  brands.ts               ← 10 frame brands + featured flag
  insurances.ts           ← carrier list
  testimonials.ts         ← real Google reviews
  images.ts               ← homepage image-path config (drop file → flip null to path)
  types.ts                ← shared TS types

public/
  logo.png                ← transparent wordmark, drop into <Image> with brightness/invert filter on dark
  images/                 ← all homepage photography
```

## Design tokens (Tailwind classes)

| Token | Hex | Usage |
|---|---|---|
| `bg-ink` / `text-ink` | `#2c2724` | Dark surfaces (Hero, Insurance, BookingCTA, Footer), primary text on light |
| `bg-paper` / `text-paper` | `#fbf8f2` | Page background, light text on dark |
| `bg-cream` | `#f6f1e8` | Section alt bg (Services, Testimonials) |
| `bg-rule` / `border-rule` | `#e6dec9` | 1px borders, dividers |
| `text-muted` | `#7a6f63` | Body copy on light, captions |
| `bg-accent` / `text-accent` | `#a8893f` | Antique gold — italic emphasis, CTAs, accent rules |
| `bg-accent-deep` | `#8a6f30` | Hover state for `accent` |
| `text-inverted-text` | `#fbf8f2` | Text on dark surfaces |
| `text-inverted-muted` | `#cabea7` | Muted text on dark surfaces |
| `border-inverted-rule` | `#4a423d` | 1px borders on dark surfaces |

Other:
- `font-display` → Cormorant; `font-body` → Inter; `font-mono` → JetBrains Mono
- `tracking-eyebrow` (0.22em) for `§` eyebrows; `tracking-wide2` (0.18em) for nav/CTAs
- `ease-expo` is the only easing curve — `cubic-bezier(0.16, 1, 0.3, 1)`
- **No border-radius** anywhere — sharp corners throughout
- **No drop shadows**

## Animation vocabulary

Every section follows the same recipe — don't reinvent.

- **Headlines**: `<WordReveal>` for stagger word-by-word; pass `segments` for italic-accent emphasis; `inView={false}` for hero (animate on mount), default `true` for below-fold
- **Bodies / lists / CTAs**: `<FadeUp>` (opacity 0→1, y 20–24→0, 1.0–1.1s ease-expo, `viewport={{ once: true, amount: 0.3 }}`)
- **Hero / BookingCTA**: parallax via `useScroll` + `useTransform` (image y-offset, content y-offset)
- **Hover micros**: 200–300ms transitions on color/border; arrows slide right via `group-hover:translate-x-1`; image zoom via `group-hover:scale-[1.04]` (1200ms)
- Reduced-motion is enforced globally in `globals.css` — collapses durations to 0.01ms

## Data flow

- **Phone, email, address, hours, bookingUrl** → always read from `data/site.ts`. Never hardcode in a page.
- **Services** → `data/services.ts`. Homepage shows `summary`; deep page is `/services/[slug]`.
- **Brands** → `data/brands.ts`. Featured frame on homepage hard-codes the Reid story copy in [components/sections/Frames.tsx](components/sections/Frames.tsx).
- **Insurance carriers** → `data/insurances.ts`. Homepage shows first 7 + `+ more` link.
- **Testimonials** → `data/testimonials.ts` (real Google reviews).
- **Images** → `data/images.ts` controls homepage image paths. To enable a section's photo, drop the file into `public/images/` with the listed name, then change `null` to the path string in `images.ts`. Until set, sections show striped placeholders.

## Don't

- Don't import from `framer-motion`; use `motion/react`.
- Don't hardcode colors or fonts — go through Tailwind tokens.
- Don't introduce a new easing curve; use `ease-expo`.
- Don't add new CSS frameworks, component libraries, or state-management libs.
- Don't add a CMS, auth, or in-site booking form without planning.
- Don't hardcode phone, email, address, hours, booking URL anywhere except `data/site.ts`.
- Don't mount `<Nav />` or `<Footer />` on a page — they're in the root layout.
- Don't add border-radius or drop shadows — the editorial style is sharp + flat.
- Don't widen Tailwind to v4 without a plan — v3 is intentional.

## Workflow

When the user approves finished work and says **"ship it"** (or `/ship`), the flow is:

1. Commit pending changes on the current branch with a descriptive message and the standard `Co-Authored-By` trailer. Stage specific files — never `git add -A`.
2. Verify the branch is a fast-forward of `origin/main`. If `git log HEAD..origin/main` is non-empty, the branch has diverged — stop and rebase (`git rebase origin/main`); never force-push.
3. `git push -u origin <branch>` — push the feature branch to GitHub.
4. If working on a non-main branch: `git push origin <branch>:main` — fast-forward `origin/main` via refspec push. GitHub rejects non-fast-forwards, which is the safety net. **Never** add `--force` or `--force-with-lease`.
5. Update local `main`: `git fetch origin && git checkout main && git merge --ff-only origin/main` (or, from a worktree: `git -C <parent-repo> fetch origin && git -C <parent-repo> merge --ff-only origin/main`).
6. Offer to delete the remote feature branch (`git push origin --delete <branch>`) — requires explicit user approval.

**Hard rules:** never force-push, never amend a pushed commit, never bypass hooks (`--no-verify`), never blanket-allow `git push`. Linear history only — no merge commits on `main`.
