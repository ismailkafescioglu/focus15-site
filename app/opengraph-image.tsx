import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default share-preview image for every route that doesn't set its own —
// same brand colors as globals.css (--navy, --red, --paper, --ink-faint),
// hardcoded here since this renders outside the app's own CSS.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span style={{ fontSize: 108, fontWeight: 700, color: "#1b2a6b" }}>focus</span>
          <span style={{ fontSize: 108, fontWeight: 700, color: "#c8102e" }}>15</span>
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 34,
            fontWeight: 600,
            color: "#8a879e",
            letterSpacing: 4,
          }}
        >
          CLARITY · SPEED · IMPACT
        </div>
        <div style={{ marginTop: 40, fontSize: 30, color: "#1a1a2e", maxWidth: 900, textAlign: "center" }}>
          Structured growth support for founders
        </div>
      </div>
    ),
    { ...size }
  );
}
