"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { useSite } from "@/components/CmsProvider";
import { useLang } from "@/i18n/LanguageProvider";
import { offerIsLive, offerLink, offerTheme } from "@/lib/offer";

// Bright, dismissible top banner for the current offer (e.g. FREE for women),
// set in the portal. Auto-hides after its deadline; remembers dismissal per offer.
export default function OfferBanner() {
  const site = useSite();
  const { t, pick } = useLang();
  const offer = site.womenOffer;
  const dismissKey = offer?.deadline ?? offer?.bannerTitle ?? "";
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (!offer?.active) return;
    let dismissed = false;
    try {
      dismissed = localStorage.getItem("ici-offer-dismissed") === dismissKey;
    } catch {}
    setHidden(!offerIsLive(offer) || dismissed);
  }, [offer, dismissKey]);

  if (!offer?.active || hidden) return null;

  const theme = offerTheme(offer);
  const dismiss = () => {
    setHidden(true);
    try {
      localStorage.setItem("ici-offer-dismissed", dismissKey);
    } catch {}
  };

  return (
    <div className={`relative bg-gradient-to-r ${theme.banner} text-white`}>
      <Link
        href={offerLink(offer)}
        className="container-px flex items-center justify-center gap-x-2 gap-y-0.5 py-2 pr-9 text-center text-xs font-semibold sm:text-sm"
      >
        <Sparkles size={16} className="hidden shrink-0 text-yellow-200 sm:block" />
        <span>
          <span className="font-extrabold uppercase tracking-wide">🎉 {pick(offer, "bannerTitle")}</span>{" "}
          — {pick(offer, "bannerText")}
        </span>
        <span className={`ml-1 hidden items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-bold ${theme.cta} sm:inline-flex`}>
          {pick(offer, "cta") || t("cta.enquireNow")} <ArrowRight size={13} />
        </span>
      </Link>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss offer"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/90 hover:bg-white/20"
      >
        <X size={16} />
      </button>
    </div>
  );
}
