# Focus15 site

The Focus15 parent-company marketing site — **live at [focus15.co.uk](https://focus15.co.uk)**,
replacing the previous WordPress site (cutover: 2026-09-14). Next.js 16 App
Router, React 19, TypeScript, Tailwind v4. Sibling project to
[`bizplan-app`](../bizplan-app) (4W1N); do not edit that repo from here.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) (note: port 3001, not
the Next.js default — see `package.json`).

## Pages

Home, About, Local Authorities, Contact, plus Terms/Privacy in the footer
only. See `app/components/nav-links.ts` for the single source of truth on
nav structure. Video Library exists in code but is currently hidden (see
`app/video-library/page.tsx`).

## Deployment

- **Hosting**: Vercel, project `focus15-site` under the `ismailkafescioglu`
  account. Connected to GitHub — every push to `main` auto-deploys.
- **Repo**: `github.com/ismailkafescioglu/focus15-site`
- **Domain**: `focus15.co.uk`, registered and DNS-managed at **Siteground**
  (Site Tools → Domain → DNS Zone Editor) — not GoDaddy, despite the domain
  originally having been bought there.
- Full operational detail (env vars, DNS records, third-party accounts,
  troubleshooting) is written up in a separate reference document — ask
  Ismail for the link if it's needed.
