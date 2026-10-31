"use client";

import { useSite } from "@/components/CmsProvider";
import { useLang } from "@/i18n/LanguageProvider";

export default function Stats({ dark = false }) {
  const site = useSite();
  const { pick } = useLang();

  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {site.stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div
            className={`font-display text-3xl font-extrabold sm:text-4xl ${
              dark ? "text-white" : "text-brand-700"
            }`}
          >
            {stat.value}
          </div>
          <div className={`mt-1 text-sm ${dark ? "text-brand-100" : "text-slate-500"}`}>
            {pick(stat, "label")}
          </div>
        </div>
      ))}
    </div>
  );
}
