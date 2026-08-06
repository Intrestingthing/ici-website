"use client";

import { ShieldCheck, Award, Landmark } from "lucide-react";
import { site } from "@/data/site";
import { useLang } from "@/i18n/LanguageProvider";

export default function ApprovalsStrip() {
  const { pick } = useLang();
  const items = [
    { icon: ShieldCheck, text: pick(site.approvals.geduconnect, "title") },
    { icon: Award, text: pick(site.approvals.aisect, "title") },
    { icon: Landmark, text: pick(site.approvals.rkcl, "title") },
  ];

  return (
    <section className="border-y border-brand-100 bg-brand-50">
      <div className="container-px flex flex-col items-center justify-center gap-x-10 gap-y-3 py-5 sm:flex-row sm:flex-wrap">
        {items.map((item) => (
          <span
            key={item.text}
            className="flex max-w-full items-center justify-center gap-2 text-center text-sm font-semibold text-brand-800"
          >
            <item.icon size={18} className="shrink-0 text-brand-600" />
            {item.text}
          </span>
        ))}
      </div>
    </section>
  );
}
