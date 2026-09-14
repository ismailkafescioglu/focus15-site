import type { Metadata } from "next";

const DESCRIPTION =
  "Free videos for founders — writing a business plan, pricing, marketing strategy, company formation, SEIS/EIS, procurement, and more.";

export const metadata: Metadata = {
  title: "Video Library",
  description: DESCRIPTION,
  alternates: { canonical: "/video-library" },
  openGraph: { title: "Focus15 Video Library", description: DESCRIPTION, url: "/video-library" },
  twitter: { title: "Focus15 Video Library", description: DESCRIPTION },
};

type Video = { title: string; id: string; description: string };
type Category = { name: string; videos: Video[] };

// Sourced from focus15.co.uk's live video library — same videos, same
// YouTube ids. Thumbnails are the standard YouTube-hosted image for each
// id (img.youtube.com/vi/<id>/hqdefault.jpg), so nothing needs uploading.
const CATEGORIES: Category[] = [
  {
    name: "Founder Questions",
    videos: [
      { title: "Do I need AI to get investment?", id: "H8LP1XRdERo", description: "" },
      { title: "Can I get investment without traction?", id: "eA-JM40zJ5g", description: "" },
      { title: "Are advisors really worth it?", id: "vkAwF_mU-l8", description: "" },
      { title: "How do you know if you're really cut out to be a founder?", id: "Lm2MWQIE1mE", description: "" },
    ],
  },
  {
    name: "Founder Perspectives",
    videos: [
      {
        title: "Why founders approach investors too early",
        id: "WaR0OiFpJdw",
        description:
          "Ian breaks down the psychology behind early fundraising, the harsh reality of VC odds, and why focusing on getting the right foundations in place first can dramatically improve your chances of success.",
      },
      {
        title: "The 5 foundations of success",
        id: "tXPaHpYc5Ok",
        description:
          "Every year hundreds of thousands of people take the leap into entrepreneurship — but 70% of startups fail within three years. What separates the 30% that make it? Ian shares the 5 essential ingredients every startup needs to succeed.",
      },
      {
        title: "Why startups fail",
        id: "XgQJiuAyvb0",
        description:
          "Why do most startups fail even when the idea seems great? Ismail breaks down the real reasons startups collapse — and it's probably not what you think.",
      },
    ],
  },
  {
    name: "Business Planning",
    videos: [
      {
        title: "Why you need a business plan",
        id: "bj6YgyE6wY8",
        description:
          "Most founders believe they need a business plan to impress investors. But that's not why you write one. Ismail explains why your business plan isn't just paperwork, but your most powerful decision-making tool.",
      },
      {
        title: "The “What”",
        id: "cO5rhl80xSo",
        description:
          "Every startup begins with an idea — but turning that idea into a real business starts with understanding your What. Ismail breaks down the first and most important step in creating your business plan.",
      },
      {
        title: "The “Who” & “Where”",
        id: "eDoJazMBjHs",
        description:
          "You've got your idea. You know what you're selling. But do you really know who's going to buy it — or where you'll reach them? Ismail explains the next two pillars of your business plan.",
      },
      {
        title: "The “Why”",
        id: "2JAenljhoMM",
        description:
          "Every great business starts with a purpose — a clear Why. Ismail explains how to define the most powerful question in your business plan: why does your business exist, and why should anyone care?",
      },
      {
        title: "A winning vision",
        id: "7nU84znA9O0",
        description:
          "Companies with a clear vision are up to 70% more likely to scale and attract investment — but too many founders skip it. Ian explains why your business vision is your startup's destination, decision compass, and investor magnet.",
      },
      {
        title: "The right founding team",
        id: "Rpf6iJgSD8Q",
        description:
          "Your founding team is the engine of your startup, and you're not going to win the race without a great engine. Ian breaks down how your founding team shapes your business and how others see it.",
      },
      {
        title: "Understand your competition",
        id: "Yj15OSCmKjE",
        description:
          "You can't explain why customers should buy from you if you don't know what else they could be buying. Ian shares what understanding your competition means — and how those insights can improve your own business.",
      },
      {
        title: "Building scalable tech",
        id: "rfWoRNXHnNY",
        description:
          "60% of startups face major tech scalability issues within their first three years, and for many it's the difference between success and failure. Ian explains the importance of your tech stack and how to build cost-effective, scalable foundations.",
      },
    ],
  },
  {
    name: "Set Up",
    videos: [
      {
        title: "Your guide to company formation",
        id: "jeF2OT4Z85o",
        description:
          "What's the right company formation for you? Ian breaks down the main company formation options in the UK, from sole trader to CIC, and how each one affects your taxes, liability, and long-term growth.",
      },
      {
        title: "A winning front end website",
        id: "5BLpN56mHQk",
        description:
          "Your website has just a few seconds to make an impact. Ian breaks down the essential elements every startup website needs to convert visitors into customers.",
      },
      {
        title: "Intellectual property (IP)",
        id: "Pe2NpxMzCKk",
        description:
          "Whether you're building a product, launching a brand, or writing code, you're creating value — and IP is how you protect it. Ismail breaks down the essentials of IP for startups: what it is, why it matters, and how to protect your ideas from day one.",
      },
      {
        title: "Registrations, licences, permits",
        id: "6zqIdrkX85Q",
        description:
          "Starting a business comes with enough challenges — figuring out what registrations, licences, and permits you actually need shouldn't be one of them. Ismail walks you through the essential legal and regulatory steps every founder should understand.",
      },
      {
        title: "Your startup insurance guide",
        id: "iNLppVGm25A",
        description:
          "74% of startups are underinsured and exposed to risk. Ian breaks down the essential types of insurance every startup should consider — from legal must-haves like employer's liability to smart protections like cyber and key person cover.",
      },
      {
        title: "Why SEIS and EIS are no-brainers for founders",
        id: "wal8thHCtbw",
        description:
          "Looking to raise investment for your UK startup? Ian breaks down everything you need to know about Enterprise Investment Schemes (EIS and SEIS) and why they're essential for any startup looking to raise investment.",
      },
    ],
  },
  {
    name: "Sales & Marketing",
    videos: [
      {
        title: "A winning marketing strategy",
        id: "tryNm1ukYLc",
        description:
          "Businesses with a documented marketing strategy are 313% more likely to achieve their goals (HubSpot) — yet most early-stage founders skip this step entirely. Ian breaks down what actually makes a great marketing strategy, in a simple, practical way any founder can apply.",
      },
      {
        title: "The right pricing model",
        id: "H5Sv5-vzZOk",
        description:
          "Nearly 20% of startups fail because they get their pricing model wrong. Ian breaks down why pricing is about positioning and perception — one of the most powerful and misunderstood levers in your business.",
      },
      {
        title: "Proving product-market fit",
        id: "IJ8Qt2dUlGc",
        description:
          "Over 40% of startup failures come down to poor product-market fit — building something people don't actually want. Ian breaks down what product-market fit really means and how to make it work for you.",
      },
      {
        title: "Viable routes to market",
        id: "92jc6GOuPFM",
        description:
          "In a world where attention spans are measured in seconds, the real challenge is cutting through the noise to reach your target audience. Ian breaks down how to build viable routes to market, and why focusing on just 2 or 3 is the key to succeeding.",
      },
      {
        title: "The power of your brand",
        id: "L4OvV0bDUCA",
        description:
          "75% of consumers recognise a brand from only its logo and consistent messaging — which means branding isn't cosmetic, it's critical. Ian explains the real value of branding and why it's a core driver of business success.",
      },
      {
        title: "The art of selling",
        id: "rQmUEHkDvZ8",
        description:
          "With no shortage of “get rich quick” sales gurus shouting for attention, it's no wonder founders feel overwhelmed. Ian breaks down the art of selling — there's no magic formula or room for pushy tactics, it's about helping customers move one step at a time.",
      },
      {
        title: "Why customer service matters",
        id: "t4y7NXO4bwY",
        description:
          "Acquiring a new customer costs several times more than keeping an existing one — so why do so many businesses focus on acquisition over retention? Ian breaks down why customer service is one of the smartest financial decisions you can make.",
      },
      {
        title: "How influencer marketing can work for you",
        id: "NK3Gyv2aqSc",
        description:
          "Influencer marketing is exploding — growing over 35% every year — and it's becoming impossible for businesses to ignore. Ian breaks down what's really driving it, how it works, what it actually costs, and whether it's worth it for early-stage companies.",
      },
    ],
  },
  {
    name: "Raising Finance",
    videos: [
      {
        title: "Loan options",
        id: "W46HaUBWnMs",
        description:
          "Over 80% of small businesses fail because of cash flow — but loans can help you grow without giving up equity. Ian breaks down the two main types of loans: secured and unsecured.",
      },
      {
        title: "Attracting equity investment",
        id: "rycNbrYJ1Rw",
        description:
          "Every year, over a million founders try to raise equity investment — and very few succeed. Ian breaks down your main options for raising equity, what they mean for your business, and how to maximise your chances of success.",
      },
      {
        title: "How factoring works",
        id: "GjI51qi8_OM",
        description:
          "Waiting weeks to get paid can destroy cash flow for growing businesses. Ian walks you through two common solutions: invoice discounting and invoice factoring.",
      },
    ],
  },
  {
    name: "Operations",
    videos: [
      {
        title: "Why supply chains matter",
        id: "9yN9oa0FD8E",
        description:
          "For years, supply chain was seen as the unglamorous side of business — but today, the smartest companies know it can be a powerful source of competitive advantage. Ian explains how companies like Zara, Apple, and McDonald's used it as a strategic weapon.",
      },
      {
        title: "The art of procurement",
        id: "ihPJqqmqgHU",
        description:
          "50–70% of a company's total costs are tied to procurement — yet fewer than 5% of founders have real experience in it. Ian breaks down what good procurement really looks like — and why it's about far more than just getting the cheapest price.",
      },
    ],
  },
];

// VideoObject structured data for the 34 real videos above, so Google can
// show them as video rich results. Only fields we actually know are true
// are included — no invented uploadDate or duration.
const VIDEO_JSONLD = CATEGORIES.flatMap((cat) =>
  cat.videos.map((v) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.title,
    description: v.description || v.title,
    thumbnailUrl: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
    contentUrl: `https://youtu.be/${v.id}`,
    embedUrl: `https://www.youtube.com/embed/${v.id}`,
  }))
);

function VideoCard({ video }: { video: Video }) {
  return (
    <a
      href={`https://youtu.be/${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="video-card"
      style={{ display: "block", color: "inherit" }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "16 / 9",
          borderRadius: 8,
          overflow: "hidden",
          background: "var(--paper-tint)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- external YouTube-hosted thumbnail, not a local asset */}
        <img
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                width: 0,
                height: 0,
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderLeft: "13px solid #ffffff",
                marginLeft: 3,
              }}
            />
          </span>
        </span>
      </div>
      <div style={{ fontWeight: 700, fontSize: "0.95rem", marginTop: 10 }}>{video.title}</div>
      {video.description && (
        <p style={{ fontSize: "0.85rem", color: "var(--ink-soft)", marginTop: 4 }}>
          {video.description}
        </p>
      )}
    </a>
  );
}

export default function VideoLibrary() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(VIDEO_JSONLD) }}
      />
      <section style={{ padding: "72px 24px 24px" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", letterSpacing: "-0.03em" }}>
            Video Library
          </h1>
          <p style={{ marginTop: 16, fontSize: "1.05rem" }}>
            Short videos for founders, organized by topic — from setting up a
            company through to raising finance.
          </p>
        </div>
      </section>

      <section style={{ padding: "24px 24px 96px" }}>
        <div className="container" style={{ maxWidth: 900, display: "grid", gap: 48 }}>
          {CATEGORIES.map((cat) => (
            <div key={cat.name}>
              <h2 style={{ fontSize: "1.15rem", marginBottom: 18 }}>{cat.name}</h2>
              <div className="video-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                {cat.videos.map((v) => (
                  <VideoCard key={v.id} video={v} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .video-card:hover { text-decoration: none; }
        .video-card:hover div:first-child { opacity: 0.9; }
        @media (max-width: 760px) {
          .video-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .video-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
