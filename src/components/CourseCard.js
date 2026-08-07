"use client";

import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

// Thin top-accent colour by category (a subtle cue — the filter handles category text).
const categoryBar = {
  ug: "bg-blue-500",
  pg: "bg-violet-500",
  diploma: "bg-emerald-500",
  accounting: "bg-amber-500",
  design: "bg-pink-500",
  programming: "bg-sky-500",
  govt: "bg-rose-500",
};

// One visual cue for the institute (colour + short-label dict key).
const instituteCue = {
  "innovative-career-institute": { dot: "bg-violet-500", key: "cue.career" },
  "indian-computer-institute": { dot: "bg-sky-500", key: "cue.computer" },
};

export default function CourseCard({ course }) {
  const { t, pick } = useLang();
  const cue = instituteCue[course.institute];

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
    >
      <span className={`block h-1.5 w-full ${categoryBar[course.category] ?? "bg-brand-500"}`} />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold leading-snug text-slate-900 group-hover:text-brand-700">
          {pick(course, "title")}
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">
          {pick(course, "short")}
        </p>

        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
            <Clock size={13} /> {course.duration}
          </span>
          {cue && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
              <span className={`h-2 w-2 rounded-full ${cue.dot}`} />
              {t(cue.key)}
            </span>
          )}
        </div>

        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
          {t("cta.viewDetails")}
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
