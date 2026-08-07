"use client";

import Link from "next/link";
import {
  Clock,
  BarChart3,
  Wifi,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  Building2,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CourseCard from "@/components/CourseCard";
import { categories } from "@/data/courses";
import { site, getInstitute } from "@/data/site";
import { useLang } from "@/i18n/LanguageProvider";

export default function CourseDetailContent({ course, related }) {
  const { t, pick } = useLang();
  const institute = getInstitute(course.institute);
  const cat = categories.find((c) => c.id === course.category);

  const mode = course.counsellingOnly
    ? t("course.regDist")
    : [
        t("course.classroom"),
        course.online && t("course.onlineMode"),
        course.distance && t("course.distanceMode"),
      ]
        .filter(Boolean)
        .join(" · ");

  const meta = [
    { icon: Clock, label: t("course.duration"), value: course.duration },
    { icon: BarChart3, label: t("course.level"), value: course.level },
    { icon: Wifi, label: t("course.mode"), value: mode },
    { icon: GraduationCap, label: t("course.category"), value: pick(cat, "label") },
  ];

  const title = pick(course, "title");
  const shortTitle = (title || course.title).split(" (")[0];

  return (
    <>
      <PageHeader
        title={title}
        subtitle={pick(course, "short")}
        trail={[{ label: t("nav.courses"), href: "/courses" }, { label: shortTitle }]}
      />

      {/* Mobile key facts */}
      <div className="container-px lg:hidden">
        <div className="flex flex-wrap gap-2 pt-6">
          {meta.slice(0, 3).map((m) => (
            <span
              key={m.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
            >
              <m.icon size={13} className="text-brand-600" /> {m.value}
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container-px grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700"
            >
              <ArrowLeft size={16} /> {t("course.back")}
            </Link>

            {institute && (
              <p className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
                <Building2 size={16} className="text-brand-600" /> {t("course.offeredBy")}{" "}
                {pick(institute, "name")}
              </p>
            )}

            <h2 className="mt-8 font-display text-2xl font-bold text-slate-900">
              {t("course.about")}
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-slate-600">{course.description}</p>

            <h2 className="mt-10 font-display text-2xl font-bold text-slate-900">
              {t("course.learn")}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {course.highlights.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl bg-brand-50 p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">
                {t("course.eligibility")}
              </h3>
              <p className="mt-2 text-slate-600">{course.eligibility}</p>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="card sticky top-24 p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">
                {t("course.details")}
              </h3>
              <ul className="mt-4 space-y-4">
                {meta.map((m) => (
                  <li key={m.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <m.icon size={18} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">{m.label}</span>
                      <span className="block text-sm font-semibold text-slate-800">{m.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-accent-50 px-4 py-3 text-center text-sm font-medium text-accent-700">
                {course.counsellingOnly ? t("course.counsellingNote") : t("course.feesNote")}
              </p>
              <Link href="/admissions" className="btn-primary mt-4 w-full">
                {course.counsellingOnly ? t("cta.getCounselling") : t("cta.applyEnquire")}{" "}
                <ArrowRight size={16} />
              </Link>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn-outline mt-3 w-full">
                {t("cta.call")} {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-px">
            <h2 className="font-display text-2xl font-bold text-slate-900">{t("course.related")}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
