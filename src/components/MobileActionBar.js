"use client";

import Link from "next/link";
import { Phone, MessageCircle, Send } from "lucide-react";
import { useSite } from "@/components/CmsProvider";
import { useLang } from "@/i18n/LanguageProvider";
import { track } from "@/lib/analytics";

// Fixed Call / WhatsApp / Enquire bar shown on mobile & tablet only.
export default function MobileActionBar() {
  const site = useSite();
  const { t } = useLang();
  const waText = encodeURIComponent(
    `Hello ${site.name}, I would like to enquire about your courses.`
  );

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 shadow-[0_-2px_12px_rgba(0,0,0,0.06)] backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3">
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          onClick={() => track("call_click", { source: "mobile_bar" })}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-brand-700"
        >
          <Phone size={20} /> {t("cta.call")}
        </a>
        <a
          href={`https://wa.me/${site.whatsapp}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { source: "mobile_bar" })}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 border-x border-slate-100 text-xs font-semibold text-emerald-600"
        >
          <MessageCircle size={20} /> {t("cta.whatsapp")}
        </a>
        <Link
          href="/admissions"
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 bg-accent-500 text-xs font-bold text-slate-900"
        >
          <Send size={20} /> {t("cta.enquire")}
        </Link>
      </div>
    </div>
  );
}
