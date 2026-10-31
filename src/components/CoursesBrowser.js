"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { useSite } from "@/components/CmsProvider";
import { useLang } from "@/i18n/LanguageProvider";

export default function CoursesBrowser({ courses, categories }) {
  const site = useSite();
  const { t, pick } = useLang();
  const [category, setCategory] = useState("all");
  const [institute, setInstitute] = useState("all");

  const filtered = courses.filter(
    (c) =>
      (category === "all" || c.category === category) &&
      (institute === "all" || c.institute === institute)
  );

  const categoryFilters = [
    { id: "all", label: t("courses.allCategories") },
    ...categories.map((c) => ({ id: c.id, label: pick(c, "label") })),
  ];
  const instituteFilters = [
    { id: "all", label: t("courses.allInstitutes") },
    ...site.institutes.map((i) => ({ id: i.id, label: pick(i, "name") })),
  ];

  return (
    <div>
      {/* Institute filter */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
          {t("courses.filterInstitute")}
        </span>
        {instituteFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setInstitute(f.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              institute === f.id
                ? "bg-brand-800 text-white shadow-sm"
                : "border border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-brand-700"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Category filter */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
          {t("courses.filterCategory")}
        </span>
        {categoryFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setCategory(f.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              category === f.id
                ? "bg-brand-700 text-white shadow-sm"
                : "border border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-brand-700"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-slate-500">{t("courses.none")}</p>
      )}
    </div>
  );
}
