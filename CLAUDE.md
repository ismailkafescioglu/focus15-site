# Focus15 site — project rules for AI sessions

Focus15's parent-company marketing site (Next.js 16 App Router, React 19,
TypeScript, Tailwind v4). Sibling project to `bizplan-app` (4W1N) — never
open or edit anything under `../bizplan-app` from this project.

## House rules

- **Brand palette matches the original focus15.co.uk and the focus15 logo**:
  navy (`--navy`, `#1b2a6b`) for headings and default link color, red
  (`--red`, `#c8102e`) as the single accent/hover color used everywhere —
  including the hero's four lines and the Build/Connect sections on What We
  Do. There is deliberately no separate violet/blue meaning-system anymore
  (that was an earlier draft direction, superseded by Ismail's call to reuse
  the original site's colors) — don't reintroduce one.
- **Logo**: `app/icon.png` / `app/apple-icon.png` (favicon) are the real
  favicon-round PNGs pulled directly from the live WordPress install before
  cutover — not redrawn. `public/focus15-logo.svg` (full lockup with the
  "CLARITY · SPEED · IMPACT" tagline, used in header/footer) is the real
  vector file copied from `~/Desktop/Focus15/Logo/`. `app/opengraph-image.tsx`
  embeds this same SVG (don't hand-draw a text approximation of it again —
  that was tried once and looked wrong, see git history 2026-09-14).
- **Local authority work is not a separate service.** It's the same founder
  support, reached through a council instead of sold direct. Don't write or
  restructure copy that implies Focus15 is two different businesses.
- **The homepage hero is a fixed spec**, not a template to restyle:
  headline > subline > four stacked lines in two color pairs, no CTAs
  anywhere on the page. If that changes, it's a deliberate product
  decision — confirm before touching `app/page.tsx`'s hero section.
- **Don't invent facts** — pricing, partner names, director credentials,
  or company history not stated in the project brief or already in this
  repo. Flag what needs confirming instead of guessing.
- Nav/footer page list lives in one place: `app/components/nav-links.ts`.
  Adding or removing a page should update that file, not just a `<Link>`
  somewhere.
- **Sibling products' logos on this site (Stratups' square, Growth Match's
  seal) are original designs commissioned by Ismail, not reproductions.**
  Stratups' and Growth Match's own live sites are the ones behind, not the
  source of truth — don't "fix" these to match stratups.com/growth-match.com
  if they look different; that was tried once and reverted (2026-09-14).
  4W1N's logo (`public/4win-logo.png`) is a real asset from 4win.co.uk and
  *is* meant to match exactly.
- **Video Library is hidden, not deleted** (`app/video-library/page.tsx`
  starts with an unconditional `notFound()`, removed from `nav-links.ts`
  and `sitemap.ts`) — the videos weren't good enough yet per Ismail
  (2026-09-14). To bring it back: delete the `notFound()` call and add the
  entries back in those two files. All video data/layout code is untouched.
- A stray `#hash` from the homepage's jump-to-section links (`#stratups`,
  `#4w1n`, `#growth-match`) used to stick in the address bar and make
  refresh land back on that section — fixed by
  `app/components/CleanHashOnLoad.tsx`, which strips it shortly after it
  appears without touching scroll position. Don't remove it.

## Keeping this file useful

If you establish a new house rule while working, add it above rather than
leaving it only in chat.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
