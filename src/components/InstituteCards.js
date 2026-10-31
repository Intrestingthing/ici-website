"use client";

import Link from "next/link";
import { GraduationCap, Laptop, ArrowRight } from "lucide-react";
import { useSite } from "@/components/CmsProvider";
import { useLang } from "@/i18n/LanguageProvider";

// Maps the icon name stored in site.js → an actual icon component.
const iconMap = {
  GraduationCap,
  Laptop,
};

const cardStyles = [
  { tile: "bg-violet-100 text-violet-600", bar: "bg-violet-500" },
  { tile: "bg-sky-100 text-sky-600", bar: "bg-sky-500" },
];

export default function InstituteCards() {
  const site = useSite();
  const { t, pick } = useLang();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {site.institutes.map((institute, i) => {
        const Icon = iconMap[institute.icon] ?? GraduationCap;
        const style = cardStyles[i % cardStyles.length];
        return (
          <div key={institute.id} className="card flex flex-col overflow-hidden p-8">
            <span className={`-mx-8 -mt-8 mb-6 block h-1.5 ${style.bar}`} />
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.tile}`}
            >
              <Icon size={28} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
              {pick(institute, "name")}
            </h3>
            <p className="mt-1 text-sm font-semibold text-brand-700">{pick(institute, "short")}</p>
            <p className="mt-3 flex-1 text-slate-600">{pick(institute, "focus")}</p>
            <Link
              href="/courses"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:gap-2"
            >
              {t("cta.viewCourses")} <ArrowRight size={16} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
