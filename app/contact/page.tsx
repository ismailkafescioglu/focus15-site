import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Focus15 about a local authority partnership, 4W1N, Stratups, Growth Match, or anything else.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Focus15",
    description:
      "Get in touch with Focus15 about a local authority partnership, 4W1N, Stratups, Growth Match, or anything else.",
    url: "/contact",
  },
  twitter: {
    title: "Contact Focus15",
    description:
      "Get in touch with Focus15 about a local authority partnership, 4W1N, Stratups, Growth Match, or anything else.",
  },
};

export default function Contact() {
  return (
    <main>
      <section style={{ padding: "72px 24px 24px" }}>
        <div className="container" style={{ maxWidth: 620 }}>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", letterSpacing: "-0.03em" }}>
            Contact
          </h1>
          <p style={{ marginTop: 16, fontSize: "1.05rem" }}>
            Questions about a local authority programme, a product, or
            anything else — reach us directly at{" "}
            <a
              href="mailto:contact@focus15.co.uk"
              style={{ fontWeight: 600 }}
            >
              contact@focus15.co.uk
            </a>
            , or send a message below.
          </p>
        </div>
      </section>

      <section style={{ padding: "24px 24px 96px" }}>
        <div className="container" style={{ maxWidth: 620 }}>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
