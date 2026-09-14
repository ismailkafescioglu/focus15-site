# Focus15 site

The Focus15 parent-company marketing site (focus15.co.uk) — Next.js 16 App
Router, React 19, TypeScript, Tailwind v4. Sibling project to
[`bizplan-app`](../bizplan-app) (4W1N); do not edit that repo from here.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

Home, About, What We Do, Local Authorities & Partners, Video Library,
Contact, plus Terms/Privacy in the footer only. See `app/components/nav-links.ts`
for the single source of truth on nav structure.

## Known follow-ups

- **Contact form** needs `RESEND_API_KEY` and `CONTACT_TO_EMAIL` set (see
  `app/api/contact/route.ts`) before it can actually send — until then it
  responds 503 and the page's mailto link is the working fallback.
- **Video Library** carries over the existing category/title structure from
  the current WordPress site, but the videos themselves still need
  re-hosting (YouTube/Vimeo) and linking up — nothing there plays yet.
- **Brand**: uses the original focus15.co.uk red (`#c8102e`) / navy
  (`#1b2a6b`) palette and the real focus15 logo (`app/icon.svg` for the
  favicon, `public/focus15-logo.svg` for the footer) — both copied in as
  vector files from `~/Desktop/Focus15/Logo/`, so they're full quality at
  any size.
- **Terms/Privacy** are newly written, generic pages reflecting current
  reality (no leftover 1-to-1 pricing or Equity Promise session terms) —
  they haven't had legal review.
- **Pricing/facts** in copy (Stratups, 4W1N, Growth Match fee %) are as
  given in the Sept 2026 project brief — worth reconfirming before launch
  in case anything has moved since.

## Deploying

Same target as bizplan-app: Vercel. `focus15.co.uk` currently points at an
existing WordPress site — DNS/domain cutover is a manual step once this
site is ready, done via Vercel's custom domain settings.
