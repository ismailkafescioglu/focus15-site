import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "./nav-links";

// Home is in the header nav but not repeated in the footer's sitemap
// column, so filter it out rather than keeping a second, easily
// drifting copy of the link list (which is what used to live here).
const COMPANY_LINKS = NAV_LINKS.filter((l) => l.href !== "/");

// Same real brand marks used on the homepage's product sections, at
// footer scale. Kept local to this file rather than shared, since these
// are the only two places they're used and the sizes differ enough that a
// shared component would need as many size props as it saves lines.
const PRODUCT_LOGOS = [
  {
    url: "https://stratups.com",
    label: "Stratups",
    // Same badge as the homepage's Stratups section, scaled down to match
    // Growth Match's icon+wordmark footer sizing (24px icon, 1.1rem text).
    node: (
      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span
          style={{
            width: 24,
            height: 24,
            borderRadius: 6,
            background: "#2563eb",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 2,
            padding: 4,
          }}
        >
          <span style={{ background: "#ffffff", borderRadius: 1 }} />
          <span style={{ background: "#ffffff", borderRadius: 1, opacity: 0.8 }} />
          <span style={{ background: "#ffffff", borderRadius: 1, opacity: 0.8 }} />
          <span style={{ background: "#ffffff", borderRadius: 1 }} />
        </span>
        <span style={{ fontSize: "1.1rem", fontWeight: 800 }}>
          <span style={{ color: "#2563eb" }}>Strat</span>
          <span style={{ color: "var(--ink)" }}>ups</span>
        </span>
      </span>
    ),
  },
  {
    url: "https://4win.co.uk",
    label: "4W1N",
    node: (
      <Image
        src="/4win-logo.png"
        alt="4W1N"
        width={220}
        height={104}
        unoptimized
        style={{ width: "auto", height: 28 }}
      />
    ),
  },
  {
    url: "https://growth-match.com",
    label: "Growth Match",
    // Same seal as the homepage's Growth Match section, scaled to footer
    // size (24px, matching Stratups' footer icon). Distinct gradient id
    // (gmSealFooter, not gmSeal) since both this and the homepage section
    // render in the same document — reusing an id would make the browser
    // resolve both <use>s against whichever def it finds first.
    node: (
      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="24" height="24" viewBox="0 0 92 92" fill="none">
          <defs>
            <linearGradient id="gmSealFooter" x1="0" y1="0" x2="92" y2="92" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#1fae7a" />
              <stop offset="1" stopColor="#0b5c3d" />
            </linearGradient>
          </defs>
          <circle cx="46" cy="46" r="46" fill="url(#gmSealFooter)" />
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
        <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0e7c5f" }}>Growth Match</span>
      </span>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: 96 }}>
      <div className="container" style={{ padding: "56px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 32 }} className="footer-grid">
          <div>
            <Image
              src="/focus15-logo.svg"
              alt="focus15 — Clarity, Speed, Impact"
              width={300}
              height={122}
              unoptimized
              style={{ width: 160, height: "auto" }}
            />
          </div>

          <div>
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--ink-faint)",
                marginBottom: 12,
              }}
            >
              Company
            </div>
            <ul style={{ listStyle: "none", display: "grid", gap: 8 }}>
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{ fontSize: "0.92rem", fontWeight: 500, color: "var(--ink-soft)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--ink-faint)",
                marginBottom: 12,
              }}
            >
              The Platforms
            </div>
            <ul style={{ listStyle: "none", display: "grid", gap: 14 }}>
              {PRODUCT_LOGOS.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${p.label}`}
                    style={{ display: "inline-block" }}
                  >
                    {p.node}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            marginTop: 40,
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: "0.85rem",
            color: "var(--ink-faint)",
          }}
        >
          <span>© {year} Focus15. All rights reserved.</span>
          <span style={{ display: "flex", gap: 20 }}>
            <Link href="/terms" style={{ color: "var(--ink-faint)" }}>
              Terms
            </Link>
            <Link href="/privacy" style={{ color: "var(--ink-faint)" }}>
              Privacy
            </Link>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
