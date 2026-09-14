import type { Metadata } from "next";

const DESCRIPTION = "Privacy policy for the Focus15 website.";

export const metadata: Metadata = {
  title: "Privacy",
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Focus15 Privacy Policy", description: DESCRIPTION, url: "/privacy" },
  twitter: { title: "Focus15 Privacy Policy", description: DESCRIPTION },
};

export default function Privacy() {
  return (
    <main>
      <section style={{ padding: "72px 24px 96px" }}>
        <div className="container" style={{ maxWidth: 680, display: "grid", gap: 20 }}>
          <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", letterSpacing: "-0.03em" }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: "0.85rem", color: "var(--ink-faint)" }}>
            Last updated September 2026.
          </p>

          <p>
            This policy covers focus15.co.uk only. 4W1N, Stratups, and
            Growth Match are separate platforms with their own privacy
            policies, shown at sign-up on each.
          </p>

          <h2 style={{ fontSize: "1.15rem" }}>What we collect</h2>
          <p>
            If you use the contact form, we collect the name, email address,
            and message you submit, so we can reply to you. We don&apos;t
            use that information for marketing without your separate
            consent. The legal basis for this is your consent in submitting
            the form, and our legitimate interest in being able to respond
            to your enquiry.
          </p>
          <p>
            We only keep contact-form messages for as long as it takes to
            resolve your enquiry, then delete them.
          </p>

          <h2 style={{ fontSize: "1.15rem" }}>Cookies &amp; analytics</h2>
          <p>
            We use Google Analytics to understand overall site traffic —
            which pages are visited, and roughly how people find the site.
            Google Analytics sets cookies to do this, so on your first
            visit you&apos;ll be asked to accept or decline them. If you
            decline, no analytics cookies are set and no data is sent to
            Google.
          </p>
          <p>
            Google&apos;s own policy on what it collects and how it&apos;s
            used is at{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 600 }}
            >
              policies.google.com/privacy
            </a>
            . You can change your choice at any time by clearing this
            site&apos;s cookies in your browser.
          </p>

          <h2 style={{ fontSize: "1.15rem" }}>Sharing</h2>
          <p>
            We don&apos;t sell your data. We use Resend, a third-party
            email provider, to deliver messages sent through our contact
            form to us — Resend may process that data outside the UK.
            Beyond that, we use your information only to respond to you
            and to run this site.
          </p>

          <h2 style={{ fontSize: "1.15rem" }}>Your rights</h2>
          <p>
            You can ask us what we hold about you, or ask us to delete it,
            at any time. If you&apos;re unhappy with how we&apos;ve handled
            your data, you also have the right to complain to the UK&apos;s
            data protection regulator, the Information Commissioner&apos;s
            Office —{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 600 }}
            >
              ico.org.uk
            </a>{" "}
            or 0303 123 1113.
          </p>

          <h2 style={{ fontSize: "1.15rem" }}>Contact</h2>
          <p>
            Questions about this policy:{" "}
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
