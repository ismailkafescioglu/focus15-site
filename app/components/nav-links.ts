// Single source of truth for primary nav — used by both the header and the
// footer's sitemap column, so a page never goes missing from one but not
// the other.
//
// /video-library is deliberately left out — hidden for now (the page
// itself returns a real 404, see the notFound() call in its page.tsx),
// not deleted. Add it back here whenever that page is re-enabled.
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/local-authorities", label: "Local Authorities" },
  { href: "/contact", label: "Contact" },
] as const;
