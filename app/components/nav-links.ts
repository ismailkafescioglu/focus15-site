// Single source of truth for primary nav — used by both the header and the
// footer's sitemap column, so a page never goes missing from one but not
// the other.
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/local-authorities", label: "Local Authorities" },
  { href: "/video-library", label: "Video Library" },
  { href: "/contact", label: "Contact" },
] as const;
