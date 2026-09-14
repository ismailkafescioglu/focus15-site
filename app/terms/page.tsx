import type { Metadata } from "next";

const DESCRIPTION = "Terms of use for the Focus15 website.";

export const metadata: Metadata = {
  title: "Terms",
  description: DESCRIPTION,
  alternates: { canonical: "/terms" },
  openGraph: { title: "Focus15 Terms of Use", description: DESCRIPTION, url: "/terms" },
  twitter: { title: "Focus15 Terms of Use", description: DESCRIPTION },
};

export default function Terms() {
  return (
    <main>
      <section style={{ padding: "72px 24px 96px" }}>
        <div className="container" style={{ maxWidth: 680, display: "grid", gap: 20 }}>
          <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", letterSpacing: "-0.03em" }}>
            Terms of Use
          </h1>
          <p style={{ fontSize: "0.85rem", color: "var(--ink-faint)" }}>
            Last updated September 2026.
          </p>

          <p>
            This site (focus15.co.uk) is operated by Focus15 and is
            informational: it describes the company, its products, and its
            local authority partnership work. It does not itself process
            payments or take on customers directly.
          </p>

          <h2 style={{ fontSize: "1.15rem" }}>Our products</h2>
          <p>
            4W1N (4win.co.uk), Stratups (stratups.com), and Growth Match
            (growth-match.com) are separate platforms, each with its own
            terms of service and pricing, agreed at the point of sign-up on
            that platform. Nothing on this site amends or overrides those
            terms.
          </p>

          <h2 style={{ fontSize: "1.15rem" }}>Local authority programmes</h2>
          <p>
            Work delivered through local authority and other institutional
            partners is governed by the commissioning agreement between
            Focus15 and that partner, not by this site.
          </p>

          <h2 style={{ fontSize: "1.15rem" }}>Content</h2>
          <p>
            Content on this site — including copy, video titles, and
            branding — belongs to Focus15 unless otherwise noted, and is
            provided for information rather than as a guarantee of results.
          </p>

          <h2 style={{ fontSize: "1.15rem" }}>Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href="mailto:contact@focus15.co.uk" style={{ fontWeight: 600 }}>
              contact@focus15.co.uk
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
