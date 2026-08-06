"use client";

import { Languages } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

// Shows the language you can switch TO (English ⇄ हिंदी).
export default function LanguageToggle({ className = "" }) {
  const { lang, toggle } = useLang();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "en" ? "हिंदी में बदलें" : "Switch to English"}
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/15 ${className}`}
    >
      <Languages size={14} />
      {lang === "en" ? "हिंदी" : "English"}
    </button>
  );
}
