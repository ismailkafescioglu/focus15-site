import type { Metadata } from "next";
import Image from "next/image";

const DESCRIPTION =
  "Focus15's mission, origin story, and the founders behind 4W1N, Stratups, and Growth Match.";

export const metadata: Metadata = {
  title: "About",
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { title: "About Focus15", description: DESCRIPTION, url: "/about" },
  twitter: { title: "About Focus15", description: DESCRIPTION },
};

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  );
}

export default function About() {
  return (
    <main>
      <section style={{ padding: "72px 24px 24px" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", letterSpacing: "-0.03em" }}>
            About Focus15
          </h1>
        </div>
      </section>

      <section style={{ padding: "24px 24px 64px" }}>
        <div className="container" style={{ maxWidth: 760, display: "grid", gap: 20 }}>
          <h2 style={{ fontSize: "1.4rem" }}>Mission</h2>
          <p style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0 }}>
            To give every founder the structure it takes to build a business
            that actually survives.
          </p>
          <p style={{ margin: 0 }}>
            We&apos;ve experienced firsthand how difficult it is to build a
            new business — and we believe there is a better approach,
            grounded in structured, data-driven methods.
          </p>
        </div>
      </section>

      <section style={{ padding: "24px 24px 64px", background: "var(--paper-tint)" }}>
        <div className="container" style={{ maxWidth: 760, display: "grid", gap: 20 }}>
          <h2 style={{ fontSize: "1.4rem" }}>Where it started</h2>
          <p>
            Focus15 began as a consultancy, working directly, one-to-one,
            with early-stage founders. Sitting across the table from them,
            the same pattern kept showing up: it was almost never the idea
            that held a business back. It was scattered priorities, unclear
            thinking, and a lack of real structure at exactly the moment it
            mattered most.
          </p>
          <p>
            That observation, repeated often enough, became the whole point
            of Focus15: build the structured process worth putting on top of
            the idea. Over time, that same process led us to build a series
            of online platforms — 4W1N, Stratups, and Growth Match — designed
            to bring that same discipline to more founders than two people&apos;s
            calendars could ever reach alone.
          </p>
          <p>
            Today, we&apos;re working to reach as many founders as possible,
            giving them the support they deserve to succeed.
          </p>
        </div>
      </section>

      <section style={{ padding: "24px 24px 80px" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 24 }}>Directors</h2>
          <div style={{ display: "grid", gap: 28 }}>
            <div style={{ display: "flex", gap: 20 }}>
              <Image
                src="/ian-mccartney.jpg"
                alt="Ian McCartney"
                width={88}
                height={88}
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>Ian McCartney</div>
                <div style={{ fontSize: "0.8rem", color: "var(--ink-faint)", marginTop: 2 }}>
                  30+ years experience
                </div>
                <p style={{ fontSize: "0.95rem", marginTop: 8 }}>
                  Startup ecosystems, FMCG and EdTech ventures, board-level
                  roles in global corporations. Deep experience in early-stage
                  growth, commercial strategy, and multinational supply chain.
                  Works directly with founders through Focus15&apos;s local
                  authority programmes, and is listed on Growth Match as a
                  Growth Partner, on the same terms as any other provider.
                </p>
                <a
                  href="https://www.linkedin.com/in/iansmccartney/"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    marginTop: 10,
                  }}
                >
                  <LinkedInIcon />
                  View on LinkedIn
                </a>
              </div>
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              <Image
                src="/ismail-kafescioglu.jpg"
                alt="Ismail Kafescioglu"
                width={88}
                height={88}
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                  Ismail Kafescioglu
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--ink-faint)", marginTop: 2 }}>
                  30+ years experience
                </div>
                <p style={{ fontSize: "0.95rem", marginTop: 8 }}>
                  Strategy leadership at top-tier multinational consumer goods
                  firms, including taking a concept to a multi-million-pound
                  business in five years — building its commercial and
                  manufacturing infrastructure from the ground up. Also engages
                  directly with founders through Focus15&apos;s local authority
                  programmes, and appears on Growth Match as a Growth Partner,
                  listed on the same footing as any other provider.
                </p>
                <a
                  href="https://www.linkedin.com/in/kafescioglu/"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    marginTop: 10,
                  }}
                >
                  <LinkedInIcon />
                  View on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
