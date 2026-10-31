// Shared navigation links used by both the Navbar and Footer.
// `key` maps to a translation string in src/i18n/dict.js (falls back to `label`).
export const navLinks = [
  { href: "/", label: "Home", key: "nav.home" },
  { href: "/courses", label: "Courses", key: "nav.courses" },
  { href: "/online-learning", label: "Online Learning", key: "nav.online" },
  { href: "/library", label: "Library", key: "nav.library" },
  { href: "/about", label: "About", key: "nav.about" },
  { href: "/gallery", label: "Gallery", key: "nav.gallery" },
  { href: "/contact", label: "Contact", key: "nav.contact" },
];

// Extra links (not in the top nav, but shown in the footer).
export const footerExtraLinks = [
  { href: "/distance-learning", label: "Distance Learning", key: "nav.online" },
  { href: "/admissions", label: "Admissions", key: "nav.admissions" },
  { href: "/events", label: "Events", key: "nav.events" },
];

export default navLinks;
