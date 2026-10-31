// The offer banner + home section (e.g. FREE for Women), set in the portal.

// Colour presets — same names as the portal's "Banner colour" choice.
// Full class names are written out so Tailwind keeps them.
export const OFFER_THEMES = {
  festive: {
    banner: "from-rose-600 via-fuchsia-600 to-violet-600",
    section: "from-rose-500 via-fuchsia-600 to-violet-700",
    cta: "text-fuchsia-700",
  },
  brand: {
    banner: "from-brand-700 via-brand-600 to-violet-600",
    section: "from-brand-700 via-brand-600 to-violet-700",
    cta: "text-brand-700",
  },
  sunset: {
    banner: "from-amber-500 via-orange-500 to-rose-500",
    section: "from-amber-500 via-orange-500 to-rose-600",
    cta: "text-orange-700",
  },
  success: {
    banner: "from-emerald-600 via-teal-600 to-cyan-600",
    section: "from-emerald-600 via-teal-600 to-cyan-700",
    cta: "text-emerald-700",
  },
};

export const offerTheme = (offer) => OFFER_THEMES[offer?.theme] ?? OFFER_THEMES.festive;

// An offer without a deadline runs until it is switched off in the portal.
export function offerIsLive(offer, now = new Date()) {
  if (!offer?.active) return false;
  if (!offer.deadline) return true;
  return now <= new Date(`${offer.deadline}T23:59:59`);
}

export const offerLink = (offer) => offer?.ctaLink || "/admissions";
