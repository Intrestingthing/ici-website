"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  GraduationCap,
  Laptop,
  Award,
  Users,
  Wifi,
  CheckCircle2,
  BadgeCheck,
  Clock,
  BookOpen,
  Keyboard,
  PhoneCall,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import ApprovalsStrip from "@/components/ApprovalsStrip";
import InstituteCards from "@/components/InstituteCards";
import EventsSection from "@/components/EventsSection";
import { getFeaturedCourses } from "@/data/courses";
import { testimonials } from "@/data/testimonials";
import { site } from "@/data/site";
import { useLang } from "@/i18n/LanguageProvider";

const whyChoose = [
  { icon: Award, k: "1", color: "bg-amber-100 text-amber-600" },
  { icon: Users, k: "2", color: "bg-sky-100 text-sky-600" },
  { icon: Laptop, k: "3", color: "bg-emerald-100 text-emerald-600" },
  { icon: Wifi, k: "4", color: "bg-violet-100 text-violet-600" },
];

export default function Home() {
  const { t } = useLang();
  const featured = getFeaturedCourses();

  return (
    <>
      {/* Hero — with the ICI building as the background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/photos/building.jpg"
            alt="Indian Computer Institute (ICI Group) building, 1/147 Housing Board, Jhunjhunu"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_38%]"
          />
          {/* Dark overlay — heavier on the left so the text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/85 to-brand-900/55" />
        </div>

        <div className="container-px relative py-16 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/25">
              {t("hero.badge")}
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.3rem]">
              {t("hero.titleA")}{" "}
              <span className="text-accent-400">{t("hero.titleAccent")}</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-50">{t("hero.desc")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/admissions" className="btn-accent">
                {t("cta.enquireNow")} <ArrowRight size={18} />
              </Link>
              <Link
                href="/courses"
                className="btn border border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                {t("cta.exploreCourses")}
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-brand-50">
              {["hero.feat1", "hero.feat2", "hero.feat3"].map((k) => (
                <span key={k} className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-accent-400" /> {t(k)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-brand-700 via-brand-800 to-brand-900 py-12">
        <div className="container-px">
          <Stats dark />
        </div>
      </section>

      {/* Approvals strip */}
      <ApprovalsStrip />

      {/* Two institutes */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow={t("home.institutes.eyebrow")}
            title={t("home.institutes.title")}
            subtitle={t("home.institutes.subtitle")}
          />
          <div className="mt-12">
            <InstituteCards />
          </div>
        </div>
      </section>

      {/* Featured courses */}
      <section className="section">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow={t("home.courses.eyebrow")}
              title={t("home.courses.title")}
              subtitle={t("home.courses.subtitle")}
            />
            <Link
              href="/courses"
              className="hidden items-center gap-1 text-sm font-semibold text-brand-700 hover:gap-2 sm:flex"
            >
              {t("cta.viewAllCourses")} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link href="/courses" className="btn-outline w-full">
              {t("cta.viewAllCourses")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* LDC typing highlight */}
      <section className="section pt-0">
        <div className="container-px">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-accent-400 to-accent-600 p-8 text-slate-900 sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  <Keyboard size={14} /> {t("home.ldc.badge")}
                </span>
                <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
                  {t("home.ldc.title")}
                </h2>
                <p className="mt-3 text-lg font-medium text-slate-800">{t("home.ldc.desc")}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="/courses/typing" className="btn bg-slate-900 text-white hover:bg-slate-800">
                    {t("home.ldc.viewCourse")} <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/admissions"
                    className="btn border border-slate-900/25 bg-white/50 text-slate-900 hover:bg-white/70"
                  >
                    {t("cta.enquireNow")}
                  </Link>
                </div>
              </div>
              <ul className="grid gap-3">
                {["home.ldc.b1", "home.ldc.b2", "home.ldc.b3", "home.ldc.b4"].map((k) => (
                  <li
                    key={k}
                    className="flex items-center gap-3 rounded-2xl bg-white/40 px-4 py-3 font-medium"
                  >
                    <CheckCircle2 size={20} className="shrink-0 text-slate-900" /> {t(k)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow={t("home.why.eyebrow")}
            title={t("home.why.title")}
            subtitle={t("home.why.subtitle")}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <div key={item.k} className="card p-6 text-center">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <item.icon size={26} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                  {t(`home.why.${item.k}t`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t(`home.why.${item.k}d`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page enquiry CTA */}
      <section className="pb-4">
        <div className="container-px">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand-700 px-6 py-6 text-center sm:flex-row sm:text-left">
            <p className="font-display text-lg font-bold text-white sm:text-xl">{t("home.midcta")}</p>
            <div className="flex shrink-0 gap-3">
              <Link href="/admissions" className="btn-accent">
                {t("cta.enquireNow")} <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                <PhoneCall size={16} /> {t("cta.callUs")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Distance / online learning teaser */}
      <section className="section">
        <div className="container-px">
          <div className="grid items-center gap-10 rounded-3xl bg-brand-700 p-8 text-white sm:p-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <Wifi size={14} /> {t("home.distance.badge")}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                {t("home.distance.title")}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-100">{t("home.distance.desc")}</p>
              <Link href="/online-learning" className="btn-accent mt-6">
                {t("cta.learnMore")} <ArrowRight size={18} />
              </Link>
            </div>
            <ul className="grid gap-4">
              {[
                { icon: Clock, k: "home.distance.b1" },
                { icon: Laptop, k: "home.distance.b2" },
                { icon: BadgeCheck, k: "home.distance.b3" },
                { icon: GraduationCap, k: "home.distance.b4" },
              ].map((item) => (
                <li key={item.k} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                  <item.icon size={22} className="shrink-0 text-accent-400" />
                  <span className="text-sm font-medium">{t(item.k)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Library teaser */}
      <section className="section">
        <div className="container-px">
          <div className="flex flex-col items-start gap-8 rounded-3xl border border-slate-100 bg-slate-50 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="eyebrow">{t("home.library.badge")}</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                {t("home.library.title")} · {site.library.timing}
              </h2>
              <p className="mt-3 text-slate-600">{t("home.library.desc")}</p>
            </div>
            <Link href="/library" className="btn-primary shrink-0">
              <BookOpen size={18} /> {t("home.library.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow={t("home.testi.eyebrow")}
            title={t("home.testi.title")}
            subtitle={t("home.testi.subtitle")}
          />
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-12 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
            {testimonials.slice(0, 3).map((tm) => (
              <div key={tm.name} className="w-[82%] shrink-0 snap-start sm:w-auto sm:shrink">
                <TestimonialCard testimonial={tm} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Festivals */}
      <EventsSection />

      <CTASection />
    </>
  );
}
