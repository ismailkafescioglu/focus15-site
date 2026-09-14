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
- **Logo**: `app/icon.svg` (magnifying-glass mark only, used as the site
  favicon) and `public/focus15-logo.svg` (full lockup with the "CLARITY ·
  SPEED · IMPACT" tagline, used in the footer) are both real vector files
  copied from `~/Desktop/Focus15/Logo/` — don't regenerate or upscale them,
  they're already full-resolution vectors.
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

## Keeping this file useful

If you establish a new house rule while working, add it above rather than
leaving it only in chat.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
