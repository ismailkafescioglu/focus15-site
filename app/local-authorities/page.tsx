import type { Metadata } from "next";

const DESCRIPTION =
  "Focus15 partners with local authorities to deliver a fully managed founder support programme — expert-led workshops and 1-to-1 support, commissioned through public-sector procurement.";

export const metadata: Metadata = {
  title: "Local Authorities",
  description: DESCRIPTION,
  alternates: { canonical: "/local-authorities" },
  openGraph: {
    title: "Focus15 for Local Authorities",
    description: DESCRIPTION,
    url: "/local-authorities",
  },
  twitter: { title: "Focus15 for Local Authorities", description: DESCRIPTION },
};

const STATS = [
  { value: "20", label: "Workshop topics to draw from" },
  { value: "1-to-1", label: "Personalised founder support alongside workshops" },
  { value: "100%", label: "Content, delivery & materials handled by us" },
  { value: "Measurable", label: "Outcomes tracked — businesses, jobs, investment" },
];

const DELIVERABLES = [
  {
    title: "A scheduled series of expert-led workshops",
    body: "Sessions led personally by Focus15's own directors, delivered according to a schedule agreed with you in advance. Practical and built around real business decisions, not generic theory.",
  },
  {
    title: "Criteria-based 1-to-1 founder support",
    body: "For founders who meet agreed criteria, we provide dedicated 1-to-1 sessions — the same personal support Focus15 was built on. Targeted at those most likely to build a viable, lasting business, so every hour counts.",
  },
  {
    title: "Practical, ready-to-use templates",
    body: "Every workshop comes with a working template participants can apply to their own business straight away.",
  },
  {
    title: "Clear, regular impact reporting",
    body: "Aggregate reporting on programme activity and outcomes — engagements, workshops attended, 1-to-1 sessions delivered — with founder data kept confidential.",
  },
];

// Real topic titles, chosen by Ismail (2026-09-14) from Focus15's own
// workshop bank. Grouped into four categories purely for scannability —
// the grouping itself is a design choice, not something the source
// material specifies — so a flat 20-item list stays readable rather than
// one undifferentiated block.
const WORKSHOP_CATEGORIES = [
  {
    name: "Foundations",
    topics: [
      "Building a Business Plan",
      "Building Your Financial Plan",
      "Company Formation",
      "Raising Finance",
      "Legal Basics",
    ],
  },
  {
    name: "Brand & Marketing",
    topics: [
      "Marketing Strategy",
      "Social Media",
      "Branding",
      "Routes to Market",
      "The Art of Selling",
      // Customer-facing, like the rest of this group — not really a
      // "scaling" concern, which is why it moved out of that category.
      "A Winning Front End Website",
    ],
  },
  {
    name: "Operations & Team",
    topics: [
      "Operations",
      "Why Supply Chain Matters",
      "The Art of Procurement",
      "Building the Right Team",
      "Leadership and Culture",
    ],
  },
  {
    name: "Scaling & Resilience",
    topics: [
      "Building Scalable Tech",
      "Scaling Your Business",
      "Cybersecurity Essentials",
      "Net Zero Transition for Small Firms",
    ],
  },
];

export default function LocalAuthorities() {
  return (
    <main>
      <section style={{ padding: "72px 24px 24px" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--ink-faint)", letterSpacing: "0.04em" }}>
            FOR LOCAL AUTHORITIES
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", letterSpacing: "-0.03em", marginTop: 8 }}>
            Founder support for your business community
          </h1>
          <p style={{ marginTop: 16, fontSize: "1.05rem" }}>
            A fully managed programme — expert-led workshops alongside
            criteria-based 1-to-1 founder support — delivered end-to-end by
            Focus15 and commissioned through your own procurement process.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 24, flexWrap: "wrap" }}>
            <a
              href="/contact"
              className="la-btn la-btn-primary"
              style={{
                background: "var(--navy)",
                color: "var(--paper)",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "14px 30px",
                borderRadius: 6,
              }}
            >
              Discuss a partnership →
            </a>
            <a
              href="#workshops"
              className="la-btn la-btn-secondary"
              style={{
                background: "transparent",
                color: "var(--ink)",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "14px 30px",
                borderRadius: 6,
                border: "1px solid var(--border)",
              }}
            >
              See workshop topics
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "24px 24px 64px" }}>
        <div
          className="container stats-grid"
          style={{ maxWidth: 760, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--navy)" }}>{s.value}</div>
              <div style={{ fontSize: "1rem", color: "var(--ink-faint)", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "24px 24px 64px", background: "var(--paper-tint)" }}>
        <div className="container" style={{ maxWidth: 760, display: "grid", gap: 24 }}>
          <h2 style={{ fontSize: "1.4rem" }}>What we deliver</h2>
          <div className="deliverables-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {DELIVERABLES.map((d) => (
              <div key={d.title}>
                <div style={{ fontWeight: 700 }}>{d.title}</div>
                <p style={{ marginTop: 6, fontSize: "0.95rem" }}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workshops" style={{ padding: "24px 24px 64px" }}>
        <div className="container" style={{ maxWidth: 760, display: "grid", gap: 20 }}>
          <h2 style={{ fontSize: "1.4rem" }}>The workshop bank</h2>
          <p>
            A library of 20 workshop topics, covering every stage of
            building a business — from marketing, branding, and operations
            through to funding, legal, and team. Together we agree which
            topics fit your programme, and the schedule is set in advance —
            founders get a clear calendar, not something improvised on the
            day.
          </p>
          <div
            className="workshop-categories-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}
          >
            {WORKSHOP_CATEGORIES.map((cat) => (
              <div key={cat.name}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--ink-faint)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  {cat.name}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 9 }}>
                  {cat.topics.map((topic) => (
                    <li key={topic} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: "var(--navy)", fontWeight: 800, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: "0.9rem" }}>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "24px 24px 96px", background: "var(--paper-tint)" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 20 }}>
            Interested in bringing this programme to your community?
          </h2>
          <a
            href="/contact"
            className="la-btn la-btn-primary"
            style={{
              display: "inline-block",
              background: "var(--navy)",
              color: "var(--paper)",
              fontWeight: 700,
              fontSize: "1rem",
              padding: "14px 30px",
              borderRadius: 6,
            }}
          >
            Discuss a partnership →
          </a>
        </div>
      </section>

      <style>{`
        .la-btn { transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease; }
        .la-btn-primary:hover {
          text-decoration: none;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(27, 42, 107, 0.3);
          filter: brightness(1.1);
        }
        .la-btn-secondary:hover {
          text-decoration: none;
          transform: translateY(-2px);
          background: var(--paper-tint) !important;
        }
        @media (max-width: 760px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .deliverables-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          .workshop-categories-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 460px) {
          .workshop-categories-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
