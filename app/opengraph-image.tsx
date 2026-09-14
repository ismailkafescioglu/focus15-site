import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default share-preview image for every route that doesn't set its own.
// Uses the real logo file (public/focus15-logo.svg) rather than a hand-drawn
// approximation, so what people see when a link is shared actually matches
// the brand mark used everywhere else on the site (header, footer).
const logoSvg = readFileSync(join(process.cwd(), "public", "focus15-logo.svg"), "utf-8");
const logoDataUri = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`;

// Real logo's own aspect ratio (603.36 x 246.24 viewBox), scaled up for a
// 1200x630 canvas while keeping its proportions exact.
const LOGO_WIDTH = 640;
const LOGO_HEIGHT = Math.round((246.24 / 603.36) * LOGO_WIDTH);

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
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og requires a plain <img>, not next/image */}
        <img src={logoDataUri} width={LOGO_WIDTH} height={LOGO_HEIGHT} alt="" />
        <div style={{ marginTop: 40, fontSize: 30, color: "#1a1a2e", maxWidth: 900, textAlign: "center", display: "flex" }}>
          Structured growth support for founders
        </div>
      </div>
    ),
    { ...size }
  );
}
