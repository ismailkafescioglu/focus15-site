import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/app/components/Reveal";
import CleanHashOnLoad from "@/app/components/CleanHashOnLoad";

// Layout.tsx's default metadata already covers this (same title/description),
// but an explicit export here adds the canonical URL and per-page Open
// Graph/Twitter fields that only a page's own metadata export can set —
// the root layout's openGraph/twitter blocks apply site-wide as a fallback,
// not per-route.
const SITE_DESCRIPTION =
  "Focus15 improves founders' success rates through three founder-support platforms — 4W1N, Stratups, and Growth Match — and the same 1-to-1 support the company was built on, now reached through local authority and university partners.";

const SITE_TITLE = "Focus15 | Business Plans, Strategy & Funding Support for Founders";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
  },
  twitter: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

type Product = {
  id: string;
  name: string;
  logo: ReactNode;
  headline: string;
  description?: string;
  points: string[];
  visual: ReactNode;
  domain: string;
  url: string;
  sectionBg?: string;
  // For the one section that isn't an external product (Workshops &
  // Focus15 Sessions — a Focus15 service, not a separate site): a
  // same-site link instead of "Visit {domain}" to an external URL.
  ctaLabel?: string;
  external?: boolean;
};

// Each logo reproduces that product's own real brand mark where one exists
// — the 4W1N mark is their actual logo file (public/4win-logo.png, pulled
// from 4win.co.uk), and both product wordmark colors (Stratups' #2563eb,
// Growth Match's #2563a8) are sourced from their own sites. Two exceptions,
// both deliberate redesigns rather than reproductions, in both cases
// keeping the real sourced brand color and changing only the icon:
//
// Stratups' badge — their real site has no icon at all, just a plain text
// wordmark, reading as unfinished next to three sections with real graphic
// marks. Ismail asked for a designed mark rather than leaving that gap
// (2026-09-11). Not a generic monogram: the 2x2 grid of squares is a
// literal echo of Stratups' actual structure — four separate modules
// (Commercial, Operations, People, Financial) you can buy separately or
// bundled.
//
// Growth Match's mark — their real site does have an icon (a plain "G"
// monogram in a rounded-square badge), but Ismail called it out as too
// weak for what he considers the most ambitious of the three products, one
// that depends on trust across multiple different groups (founders,
// investors, fractional specialists) to work at all — asked for something
// more significant, creative brief, no holding back (2026-09-11). Went
// through two revisions before landing here: first pass kept the "G"
// badge's rounded-square container and just swapped the icon inside —
// too incremental. Second pass was a full redesign (a circular seal
// stacked above the wordmark) but stacking had no real reason behind it
// beyond looking different, and directly worked against needing a compact
// variant for tight spaces (footer, nav) later — so it's back to a row,
// like the other three. Landed here: a circular seal (still not the same
// flat rounded-square shape as Stratups' or the old badge, so this
// section still reads as its own kind of mark) containing three
// equal-size nodes — deliberately not sized as a hierarchy, since this is
// peer trust between founder/funder/specialist, not one party above
// another — fully connected to each other (a real network, not a one-way
// line), arranged so the shape itself reads as ascent. Grounded in their
// own real copy: the Marketplace pillar is literally "Investors,
// Fractional Executives, and Suppliers" — three connected groups. The
// wordmark is deliberately plain: a node-and-line connector was tried
// between "Growth" and "Match" (echoing the seal's own language instead
// of copying Stratups' two-tone text split), but Ismail felt it was
// trying too hard — one idea too many stacked on top of the seal itself.
// Pulled back out; the seal alone carries the concept. Multi-coloring the
// three nodes was considered and rejected (2026-09-11) — differently
// colored connected nodes is the actual convention for molecular
// diagrams, so it risked reading more clinical, not less.
//
// A rounded typeface (Nunito) was tried for the wordmark, scoped to just
// this element, specifically to counter the "science lab" read the seal's
// precise geometry was giving the section. Reverted (2026-09-11) — Ismail
// felt it tipped from professional into too-warm/friendly once paired
// with the green. The color change alone already did the real work of
// countering the clinical read; stacking a second warming device (the
// font) on top overcorrected. Back to the site's own Manrope, so this
// wordmark no longer needs its own font exception at all.
//
// The color is a deliberate exception to "only real sourced colors" —
// the one other place that rule bent even slightly. Ismail asked directly
// for a genuinely new, invented color for Growth Match specifically
// (2026-09-11, "surprise me"), not a shade of anything already on the
// page. Picked emerald green: it's the one hue that ties directly to the
// literal word "Growth," reads warmer/more alive than blue (further
// countering the clinical problem), and incidentally fixes a real
// differentiation gap — Stratups' blue (#2563eb) and Growth Match's old
// blue (#2563a8) were nearly identical. Deliberately a deep, muted
// emerald rather than a bright one, to avoid reading as a generic
// SaaS/checkmark green, and picked to sit clearly apart from the pale
// green (#1a7f37) already used for form-success states on /contact, so
// the two don't get confused for the same signal.
const STRATUPS_LOGO = (
  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 15,
        background: "#2563eb",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: 5,
        padding: 12,
      }}
    >
      <div style={{ background: "#ffffff", borderRadius: 3 }} />
      <div style={{ background: "#ffffff", borderRadius: 3, opacity: 0.8 }} />
      <div style={{ background: "#ffffff", borderRadius: 3, opacity: 0.8 }} />
      <div style={{ background: "#ffffff", borderRadius: 3 }} />
    </div>
    <div style={{ fontSize: "2.8rem", fontWeight: 800, letterSpacing: "-0.01em" }}>
      <span style={{ color: "#2563eb" }}>Strat</span>
      <span style={{ color: "var(--ink)" }}>ups</span>
    </div>
  </div>
);

const FOUR_W1N_LOGO = (
  <Image
    src="/4win-logo.png"
    alt="4W1N"
    width={280}
    height={132}
    unoptimized
    style={{ width: "auto", height: 96 }}
  />
);

const GROWTH_MATCH_LOGO = (
  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
    <svg width="64" height="64" viewBox="0 0 92 92" fill="none">
      <defs>
        <linearGradient id="gmSeal" x1="0" y1="0" x2="92" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1fae7a" />
          <stop offset="1" stopColor="#0b5c3d" />
        </linearGradient>
      </defs>
      <circle cx="46" cy="46" r="46" fill="url(#gmSeal)" />
      {/* Tilted ~12° off upright — a perfectly level triangle centered in
          a perfect circle read as too precise, too close to a lab/network
          diagram. The rotation is purely visual (about the circle's own
          center, 46 46) — doesn't change the node positions relative to
          each other, still an equal, fully-connected triangle. */}
      <g transform="rotate(12 46 46)">
        <path
          d="M46 22 L22 63 L70 63 Z"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <circle cx="46" cy="22" r="5.5" fill="#ffffff" />
        <circle cx="22" cy="63" r="5.5" fill="#ffffff" />
        <circle cx="70" cy="63" r="5.5" fill="#ffffff" />
      </g>
    </svg>
    <span
      style={{
        fontSize: "2.8rem",
        fontWeight: 800,
        color: "#0e7c5f",
        letterSpacing: "-0.01em",
      }}
    >
      Growth Match
    </span>
  </div>
);

// Workshops & Focus15 Sessions isn't a branded product with its own
// site — it's Focus15 itself, delivered in person. It originally showed
// the actual Focus15 logo here, but that's the exact same mark already
// shown in the nav (sticky, at the very top of the page) and about to
// repeat again in the footer seconds later — Ismail flagged that by the
// time a visitor reaches this section, the logo isn't a fresh signal
// anymore, it reads as a sign-off ("end of page"), not a fourth section
// standing alongside the other three (2026-09-12).
//
// Redesigned as its own mark, the same way Stratups and Growth Match
// got one, keeping this honest — no fake sub-brand invented, still
// Focus15's own real red (#C8102E, the same red used across the whole
// site and the favicon) — just not a repeat of the nav/footer logo file.
// The icon: two overlapping circles, not a multi-node network like
// Growth Match's mark (deliberately) — this is the one section that's a
// direct, personal, one-to-one relationship (a founder and a Focus15
// director), not a many-party marketplace, so the shape should read
// differently. Grounded in the real checklist point right below it:
// "Delivered personally by Focus15's own directors."
const WORKSHOPS_LOGO = (
  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 15,
        background: "#C8102E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40">
        <circle cx="15" cy="20" r="13" fill="#ffffff" />
        <circle cx="25" cy="20" r="13" fill="#ffffff" opacity="0.75" />
      </svg>
    </div>
    <span style={{ fontSize: "2.8rem", fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.01em" }}>
      Workshops&amp;Sessions
    </span>
  </div>
);

// Small "product is real software" flourishes. Stratups has no live-UI
// visual to borrow, so its module tags stand in instead.

// 4W1N's output cards, scaled down but otherwise pixel-matched (border,
// radius, layout, red top accent) to 4win.co.uk's own outputs section.
// One card (Pitch Deck) is called out with a light red tint — red being
// the one color this site reserves for emphasis, so a "this one's
// special" card is exactly what it's for. Solid navy was tried first, but
// collided with the CTA button right below using the same color, making
// the card read as a second clickable action — the tint avoids that
// without falling back to a solid fill (avoids reading as an alarm, same
// reasoning 4win.co.uk's own code comments give for not doing that).
function OutputCard({
  name,
  tag,
  highlight = false,
}: {
  name: string;
  tag: string;
  highlight?: boolean;
}) {
  return (
    <div
      className="hover-card"
      style={{
        background: highlight ? "var(--red-tint)" : "#ffffff",
        borderLeft: `1px solid ${highlight ? "#f3c9cf" : "#e5e8f5"}`,
        borderRight: `1px solid ${highlight ? "#f3c9cf" : "#e5e8f5"}`,
        borderBottom: `1px solid ${highlight ? "#f3c9cf" : "#e5e8f5"}`,
        borderTop: "4px solid #c8102e",
        borderRadius: 10,
        padding: "1.4rem 1rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
      }}
    >
      <div
        style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#12194a",
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontSize: "0.95rem",
          fontWeight: 700,
          color: "#c8102e",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          marginTop: "auto",
          paddingTop: 4,
        }}
      >
        {tag}
      </div>
    </div>
  );
}

// Shared small-info-card shape used by both Stratups' modules and Growth
// Match's pillars below: icon, name, one short line.
function InfoCard({
  icon,
  name,
  description,
  background = "#ffffff",
  accentColor,
}: {
  icon?: string;
  name: string;
  description: string;
  background?: string;
  // A colored top accent, same device as 4W1N's OutputCard and the
  // Workshops cards — each product's own real color, not shared.
  accentColor?: string;
}) {
  return (
    <div
      className="hover-card"
      style={{
        background,
        borderLeft: "1px solid var(--border)",
        borderRight: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        borderTop: accentColor ? `4px solid ${accentColor}` : "1px solid var(--border)",
        borderRadius: 12,
        padding: "1.5rem 1.3rem",
        textAlign: "left",
      }}
    >
      {icon && <div style={{ fontSize: "1.7rem", marginBottom: 10 }}>{icon}</div>}
      <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "1.1rem", marginBottom: 6 }}>
        {name}
      </div>
      <div style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--ink-soft)", lineHeight: 1.5 }}>
        {description}
      </div>
    </div>
  );
}

// One-line description per module — copied from stratups.com's own module
// cards, not written from scratch.
const STRATUPS_MODULES = [
  {
    name: "Commercial",
    description: "Marketing and sales together — who you're for, how you win them, and an ongoing plan to act on it.",
  },
  {
    name: "Operations",
    description: "Plan how the business actually runs — delivery, capability, and process.",
  },
  {
    name: "People",
    description: "Build the culture, hiring, and leadership approach behind your team.",
  },
  {
    name: "Financial",
    description: "Model revenue, costs and cashflow, see exactly when you break even, and track how reality compares as you go.",
  },
];

const STRATUPS_VISUAL = (
  <div
    className="modules-grid"
    style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}
  >
    {STRATUPS_MODULES.map((m) => (
      <InfoCard
        key={m.name}
        name={m.name}
        description={m.description}
        background="var(--blue-tint)"
        accentColor="#2563eb"
      />
    ))}
  </div>
);

const GROWTH_MATCH_PILLARS = [
  {
    name: "Marketplace",
    description: "Founders, investors, Growth Partners, specialists, and service providers — one connected ecosystem.",
  },
  {
    name: "Due Diligence Badge",
    description: "Checked by your Growth Partner — proof to funders your data isn't just self-reported.",
  },
  {
    name: "Gaps & Priorities",
    description: "See what's strong, what needs work, and exactly what to fix next.",
  },
];

const GROWTH_MATCH_VISUAL = (
  <div
    className="pillars-grid"
    style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}
  >
    {GROWTH_MATCH_PILLARS.map((p) => (
      <InfoCard key={p.name} name={p.name} description={p.description} accentColor="#0e7c5f" />
    ))}
  </div>
);

// Cards named after the workshops themselves, per Ismail — these five are
// a starting subset (Operations and Routes to Market added 2026-09-12,
// both real topics from Focus15's own 25-topic list, not invented). The
// old site claimed 25 in total; Ismail's trimming that down to 20 for
// this build, so this list is expected to keep growing toward 20, not 25.
const WORKSHOPS = [
  {
    name: "Marketing Strategy",
    description: "Planning what to prioritise first, from a standing start.",
  },
  {
    name: "Social Media",
    description: "Building a presence that reaches real customers, not just followers.",
  },
  {
    name: "Branding",
    description: "Naming, positioning, and a visual identity customers recognize.",
  },
  {
    name: "Operations",
    description: "Making sure delivery, process, and capacity can keep up as you grow.",
  },
  {
    name: "Routes to Market",
    description: "Which channels actually get your product in front of customers.",
  },
];

// Same card shell as 4W1N's OutputCard (red top accent, centered,
// rounded, hover-lift) — but keeps a full description rather than
// OutputCard's short uppercase tag, since a workshop topic needs
// explaining, unlike a named deliverable.
const WORKSHOPS_VISUAL = (
  <div
    className="workshops-grid"
    style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}
  >
    {WORKSHOPS.map((w) => (
      <div
        key={w.name}
        className="hover-card"
        style={{
          background: "#ffffff",
          borderLeft: "1px solid #e5e8f5",
          borderRight: "1px solid #e5e8f5",
          borderBottom: "1px solid #e5e8f5",
          borderTop: "4px solid #c8102e",
          borderRadius: 10,
          padding: "1.4rem 1rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#12194a" }}>{w.name}</div>
        <div style={{ fontSize: "0.9rem", color: "var(--ink-soft)", lineHeight: 1.5 }}>
          {w.description}
        </div>
      </div>
    ))}
  </div>
);

// The real live headline is "One strategy. Six purpose-built outputs." —
// Same one-card-called-out pattern (Pitch Deck stands out, the rest stay
// white) as 4win.co.uk — see OutputCard above for why it's solid navy here
// rather than their tint. Funding Readiness Pack is left off this
// homepage summary (still five real outputs, just not all six) to keep
// this section from running long — the full six are on 4win.co.uk itself.
const FOUR_W1N_OUTPUTS = [
  { name: "Business Plan", tag: "Traditional Format" },
  { name: "Marketing Strategy", tag: "Strategy & Plan" },
  { name: "Investor Teaser", tag: "One-Page Summary" },
  { name: "Startup Launch Plan", tag: "Getting Set Up" },
  { name: "Pitch Deck", tag: "Downloadable Slides", highlight: true },
];

const FOUR_W1N_VISUAL = (
  <div style={{ width: "100%" }}>
    <div
      className="outputs-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 14,
      }}
    >
      {FOUR_W1N_OUTPUTS.map((o) => (
        <OutputCard key={o.name} name={o.name} tag={o.tag} highlight={o.highlight} />
      ))}
    </div>
  </div>
);

// Order: 4W1N, Stratups, Growth Match. 4W1N's headline is their own real
// hero line, pulled from 4win.co.uk — not rewritten. Stratups' and Growth
// Match's headlines are both deliberate rewrites, not verbatim copy from
// their live sites, though every fact behind each is still real:
//
// Stratups' real line ("Every founder needs a strategy. Most never get
// round to building one properly.") tested weak with Ismail — generic,
// and its hook rested on an unproven claim about founder behaviour rather
// than anything about the product. Rewritten 2026-09-11 to "Strategy,
// your way." instead, built around modularity (pick your questions, start
// with one module), sourced from Stratups' own Product & Company
// Reference doc.
//
// Growth Match's real line ("Stop wasting time and money on growth.")
// had a genuine ambiguity problem Ismail caught: "wasting X on Y"
// normally means Y itself is the wasteful thing ("wasting money on
// cigarettes"), so it read as "growth is a waste, stop pursuing it" —
// the opposite of the intended meaning. It also didn't reflect any of
// what Ismail considers the three real pillars of the product (the
// marketplace/ecosystem where every party benefits, the Due Diligence
// Verified trust layer, and the data-driven Growth Map/gaps/priorities
// system) or the product's own name. Rewritten 2026-09-11 to "Grow faster
// with the right connections." — unambiguous (growth is clearly the
// positive goal), reflects both halves of "Growth Match" literally, and
// keeps the real efficiency claim from the original line (backed by the
// actual mechanic: no pitch deck required, funders matched against your
// data) without inheriting its flaw.
//
// Points for all three are still the comprehensive differentiator lists
// from each product's own Product & Company Reference doc.
const PRODUCTS: Product[] = [
  {
    id: "4w1n",
    name: "4W1N",
    logo: FOUR_W1N_LOGO,
    headline: "Turn your idea into a business.",
    points: [
      "Five self-paced guided workshops turn your answers into a real business plan.",
      "Your ideas, not AI's — AI only polishes your writing, never invents facts.",
      "Marketing, operations, funding, and legal — all built into your plan.",
      "Live market research — no separate search, no extra tab.",
      "No subscription, ever — come back later for less.",
    ],
    visual: FOUR_W1N_VISUAL,
    domain: "4win.co.uk",
    url: "https://4win.co.uk",
  },
  {
    id: "stratups",
    name: "Stratups",
    logo: STRATUPS_LOGO,
    headline: "Strategy, your way.",
    points: [
      "Pick which questions apply to your business — skip everything that doesn't.",
      "Start with one module — upgrade to the full plan later without paying for it twice.",
      "Commercial Strategy becomes a Marketing Action Plan — dated, budgeted, tracked.",
      "Financial Plan tracks real actuals against forecast, automatically.",
      "AI helps every step of the way — polishing your writing, never inventing facts.",
    ],
    visual: STRATUPS_VISUAL,
    domain: "stratups.com",
    url: "https://stratups.com",
    sectionBg: "var(--paper)",
  },
  {
    id: "growth-match",
    name: "Growth Match",
    logo: GROWTH_MATCH_LOGO,
    headline: "Grow faster with the right connections.",
    points: [
      "Free to join — no card, no commitment",
      "One Growth Map scores your business, matches funders, and guides your support",
      "No pitch deck required — funders match against your data, ranked by fit percentage",
      "Choose your support — a Growth Partner, specialists, or one-off help, as you need it",
    ],
    visual: GROWTH_MATCH_VISUAL,
    domain: "growth-match.com",
    url: "https://growth-match.com",
  },
  {
    // Not a branded product — this is Focus15 itself, delivering the same
    // founder support it was originally built on, now reached through
    // local authority partners (Durham, Telford) rather than sold direct.
    id: "workshops",
    name: "Workshops & Focus15 Sessions",
    logo: WORKSHOPS_LOGO,
    headline: "Hands-on workshops and Focus15 Sessions.",
    points: [
      "Delivered personally by Focus15's own directors.",
      "A library of 20 workshop topics, covering every stage of building a business",
      "Most sessions delivered online, so distance or timing is never a barrier",
      "Every workshop is backed by one-to-one follow-up support",
      "Personalised one-to-one sessions, focused entirely on your own business",
    ],
    visual: WORKSHOPS_VISUAL,
    domain: "focus15.co.uk/local-authorities",
    url: "/local-authorities",
    ctaLabel: "See our local authority work",
    external: false,
    sectionBg: "var(--paper)",
  },
];

function ProductSection({ product, isFirst }: { product: Product; isFirst: boolean }) {
  // Defaults to the light-blue tint so white cards (output cards, the
  // score badge) have something to contrast against. Stratups overrides
  // this to white — its module cards are given a blue-tint fill instead
  // (see STRATUPS_VISUAL) precisely so that swap doesn't make them vanish
  // into the section the way it did before that card fill existed. A thin
  // top border on every section but the first marks where one product
  // ends and the next begins, now that the fill isn't a reliable signal.
  return (
    <section
      id={product.id}
      style={{
        background: product.sectionBg ?? "var(--blue-tint)",
        borderTop: isFirst ? "none" : "1px solid var(--border)",
        padding: "96px 24px",
        // Anchor-jump target for the hero's linked lines — lands just
        // below the sticky nav instead of flush under it.
        scrollMarginTop: 88,
      }}
    >
      <Reveal>
        <div
          className="container"
          style={{
            // No maxWidth override here (the .container class already caps
            // at 1120px) — the headline/paragraph/checklist each carry
            // their own narrower maxWidth below so they stay readable,
            // while product.visual (no maxWidth of its own) is free to use
            // the full 1120px, so its card row can be real-size instead of
            // squeezed into a 700px column.
            display: "grid",
            justifyItems: "center",
            gap: 24,
            textAlign: "center",
          }}
        >
          {product.logo}

          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", maxWidth: 800 }}>
            {product.headline}
          </h2>

          {product.description && (
            <p style={{ fontSize: "1.15rem", maxWidth: 720 }}>{product.description}</p>
          )}

          <ul
            style={{
              listStyle: "none",
              display: "grid",
              gap: 20,
              textAlign: "left",
              width: "100%",
              maxWidth: 680,
            }}
          >
            {product.points.map((pt) => (
              <li key={pt} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "var(--navy)", fontWeight: 800, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--ink)" }}>{pt}</span>
              </li>
            ))}
          </ul>

          {/* Extra margin here (beyond the grid's own 24px gap) — a
              deliberate break between "why trust this" (the checklist
              above) and "what you get" (the visual below), so the two
              don't read as one continuous block. */}
          <div style={{ width: "100%", marginTop: 20 }}>{product.visual}</div>

          {product.external === false ? (
            <Link
              href={product.url}
              className="product-cta"
              style={{
                marginTop: 8,
                background: "var(--navy)",
                color: "var(--paper)",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "15px 34px",
                borderRadius: 6,
                transition: "transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease",
              }}
            >
              {product.ctaLabel}
            </Link>
          ) : (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="product-cta"
              style={{
                marginTop: 8,
                background: "var(--navy)",
                color: "var(--paper)",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "15px 34px",
                borderRadius: 6,
                transition: "transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease",
              }}
            >
              {product.ctaLabel ?? `Visit ${product.domain}`}
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <CleanHashOnLoad />
      {/* Hero — headline, subline, and the four stacked lines are specified
          exactly (size ordering, weights, pairing). Red is reserved for the
          ampersand and "grow" — a single emphasis word in the subline —
          everywhere else (including the four lines) uses navy, per Ismail's
          call to keep red rare enough that it still reads as emphasis. No
          watermark (dropped per Ismail's call), plain white background.
          The four lines link to their section below (Ismail's original
          "no CTA" call was never a firm decision — just no CTA copy ready
          at the time) — plain navy links, the site's normal link style,
          not button-ified, so the hero keeps its restraint. A scroll cue
          at the bottom nudges the undecided visitor toward the payoff. */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--paper)",
          padding: "112px 24px 64px",
        }}
      >
        <div
          className="container"
          style={{
            position: "relative",
            textAlign: "center",
            display: "grid",
            gap: 28,
          }}
        >
          <h1
            className="hero-fade"
            style={{
              fontSize: "clamp(2.85rem, 8vw, 6.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.03,
              textShadow: "0 6px 32px rgba(27,42,107,0.16)",
              animationDelay: "0s",
            }}
          >
            Build{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 600,
                color: "var(--red)",
                fontSize: "1.15em",
                display: "inline-block",
                transform: "translateY(0.06em)",
              }}
            >
              &amp;
            </span>{" "}
            Connect
          </h1>

          <p
            className="hero-fade"
            style={{
              fontSize: "clamp(1.15rem, 2.4vw, 1.6rem)",
              fontWeight: 500,
              color: "var(--ink-soft)",
              margin: "0 auto",
              maxWidth: 640,
              animationDelay: "0.15s",
            }}
          >
            Everything you need to{" "}
            <span style={{ color: "var(--red)", fontWeight: 700 }}>grow</span> your
            business.
          </p>

          <div style={{ display: "grid", gap: 22, marginTop: 12 }}>
            <div
              className="hero-fade"
              style={{ display: "grid", gap: 4, animationDelay: "0.3s" }}
            >
              <a
                href="#stratups"
                className="hero-line"
                style={{
                  fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
                  fontWeight: 700,
                  color: "var(--navy)",
                }}
              >
                Create a strategy.
              </a>
              <a
                href="#4w1n"
                className="hero-line"
                style={{
                  fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
                  fontWeight: 700,
                  color: "var(--navy)",
                }}
              >
                Build your business plan.
              </a>
            </div>

            <div
              className="hero-fade"
              style={{ display: "grid", gap: 4, animationDelay: "0.45s" }}
            >
              <a
                href="#growth-match"
                className="hero-line"
                style={{
                  fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
                  fontWeight: 700,
                  color: "var(--navy)",
                }}
              >
                Get hands-on support.
              </a>
              <a
                href="#growth-match"
                className="hero-line"
                style={{
                  fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
                  fontWeight: 700,
                  color: "var(--navy)",
                }}
              >
                Meet with your investor.
              </a>
            </div>
          </div>

          <a
            href="#4w1n"
            aria-label="Scroll to see what we offer"
            className="scroll-cue"
            style={{
              justifySelf: "center",
              marginTop: 4,
              color: "var(--ink-faint)",
              fontSize: "1.5rem",
              lineHeight: 1,
            }}
          >
            ⌄
          </a>
        </div>
      </section>

      {/* Straight into the three products, plus Workshops & Focus15
          Sessions (a Focus15 service, not a branded product) — no "who
          we are" preamble. White/light-blue alternation continues from
          the hero (white) through each section, to mark each one out. */}
      {PRODUCTS.map((product, index) => (
        <ProductSection key={product.name} product={product} isFirst={index === 0} />
      ))}

      <style>{`
        .product-cta:hover {
          text-decoration: none;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(27, 42, 107, 0.3);
          filter: brightness(1.1);
        }
        .hero-line {
          display: block;
        }
        .scroll-cue {
          display: block;
          opacity: 0;
          animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards,
            scrollCueBounce 2.2s ease-in-out 1.6s infinite;
        }
        .scroll-cue:hover {
          text-decoration: none;
          color: var(--navy);
        }
        @keyframes scrollCueBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .scroll-cue { animation: none; opacity: 1; }
        }
        @media (max-width: 900px) {
          .outputs-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .workshops-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 460px) {
          .outputs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 620px) {
          .modules-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .workshops-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
          .workshops-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
