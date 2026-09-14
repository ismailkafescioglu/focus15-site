import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import CookieConsent from "@/app/components/CookieConsent";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

// Display serif reserved for h1s — gives the big moments (the homepage
// hero especially) real typographic presence instead of a scaled-up
// version of the body sans.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const SITE_URL = "https://focus15.co.uk";
const SITE_DESCRIPTION =
  "Focus15 improves founders' success rates through three founder-support platforms — 4W1N, Stratups, and Growth Match — and the same 1-to-1 support the company was built on, now reached through local authority and university partners.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Focus15 | Build & Connect",
    template: "%s | Focus15",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Focus15",
    title: "Focus15 | Build & Connect",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus15 | Build & Connect",
    description: SITE_DESCRIPTION,
  },
};

// Minimal, true-only structured data — no invented ratings or review counts.
const ORGANIZATION_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Focus15",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  sameAs: ["https://4win.co.uk", "https://stratups.com", "https://growth-match.com"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_DATA) }}
        />
        <Nav />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
