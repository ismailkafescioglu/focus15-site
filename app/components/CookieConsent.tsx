"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

// Read at build time from NEXT_PUBLIC_GA_MEASUREMENT_ID. Until that's set
// (it isn't yet — see /privacy's Cookies section), this component renders
// nothing at all: no banner, no script, no cookies. Nothing about cookie
// consent should be visible on a site that isn't actually setting any.
// Once a real "G-XXXXXXXXXX" id is added to the environment, the banner
// and analytics switch on together automatically — no code change needed.
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type Consent = "accepted" | "declined" | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  // Deliberately client-only: localStorage isn't available during SSR, and
  // reading it up front here (rather than in the lazy useState initializer)
  // means the server render and the client's first render both come back
  // with nothing shown, so hydration always matches — the real banner/script
  // state only appears once this effect runs, right after mount.
  useEffect(() => {
    const stored = window.localStorage.getItem("cookie-consent");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from a browser-only API (localStorage), not derivable during render
    if (stored === "accepted" || stored === "declined") setConsent(stored);
    setMounted(true);
  }, []);

  if (!GA_ID || !mounted) return null;

  function choose(value: "accepted" | "declined") {
    window.localStorage.setItem("cookie-consent", value);
    setConsent(value);
  }

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {consent === null && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            background: "var(--navy)",
            color: "var(--paper)",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: "0.9rem", margin: 0, maxWidth: 560 }}>
            We use Google Analytics to understand overall site traffic. See
            our{" "}
            <a href="/privacy" style={{ color: "var(--paper)", textDecoration: "underline" }}>
              Privacy Policy
            </a>
            .
          </p>
          <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <button
              onClick={() => choose("declined")}
              style={{
                background: "transparent",
                color: "var(--paper)",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: 6,
                padding: "8px 18px",
                fontWeight: 600,
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              Decline
            </button>
            <button
              onClick={() => choose("accepted")}
              style={{
                background: "var(--paper)",
                color: "var(--navy)",
                border: "none",
                borderRadius: 6,
                padding: "8px 18px",
                fontWeight: 700,
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
