"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { useLang } from "@/i18n/LanguageProvider";

// Bright, dismissible top banner for the FREE-for-women scheme.
// Auto-hides after site.womenOffer.deadline; remembers dismissal per deadline.
export default function OfferBanner() {
  const { pick } = useLang();
  const offer = site.womenOffer;
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (!offer?.active) return;
    const past = new Date() > new Date(`${offer.deadline}T23:59:59`);
    const dismissed = localStorage.getItem("ici-offer-dismissed") === offer.deadline;
    setHidden(past || dismissed);
  }, [offer]);

  if (!offer?.active || hidden) return null;

  const dismiss = () => {
    setHidden(true);
    try {
      localStorage.setItem("ici-offer-dismissed", offer.deadline);
    } catch {}
  };

  return (
    <div className="relative bg-gradient-to-r from-rose-600 via-fuchsia-600 to-violet-600 text-white">
      <Link
        href="/admissions"
        className="container-px flex items-center justify-center gap-x-2 gap-y-0.5 py-2 pr-9 text-center text-xs font-semibold sm:text-sm"
      >
        <Sparkles size={16} className="hidden shrink-0 text-yellow-200 sm:block" />
        <span>
          <span className="font-extrabold uppercase tracking-wide">🎉 {pick(offer, "bannerTitle")}</span>{" "}
          — {pick(offer, "bannerText")}
        </span>
        <span className="ml-1 hidden items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-bold text-fuchsia-700 sm:inline-flex">
          {pick(offer, "cta")} <ArrowRight size={13} />
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
