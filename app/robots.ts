import type { MetadataRoute } from "next";

const SITE_URL = "https://focus15.co.uk";

// Next.js auto-serves this at /robots.txt. Every page on this site is
// public marketing/informational content, so there's nothing to disallow
// besides the API routes themselves.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
