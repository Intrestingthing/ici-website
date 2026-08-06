"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { navLinks, footerExtraLinks } from "@/data/nav";
import { getFeaturedCourses } from "@/data/courses";
import FooterSection from "@/components/FooterSection";
import { useLang } from "@/i18n/LanguageProvider";

/* Inline brand SVGs (lucide removed brand icons). 18x18, currentColor. */
const iconProps = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true };
const socialIcons = {
  facebook: (
    <svg {...iconProps}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  ),
  instagram: (
    <svg {...iconProps}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.5-2.79a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48Z" />
    </svg>
  ),
  youtube: (
    <svg {...iconProps}>
      <path d="M23.5 6.5a3 3 0 0 0-2.12-2.12C19.5 3.86 12 3.86 12 3.86s-7.5 0-9.38.52A3 3 0 0 0 .5 6.5C0 8.38 0 12 0 12s0 3.62.5 5.5a3 3 0 0 0 2.12 2.12c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3 3 0 0 0 2.12-2.12C24 15.62 24 12 24 12s0-3.62-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  ),
  linkedin: (
    <svg {...iconProps}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  ),
};

export default function Footer() {
  const { t } = useLang();
  const year = 2026;
  const topCourses = getFeaturedCourses().slice(0, 5);

  return (
    <footer className="mt-auto bg-brand-950 text-slate-300">
      <div className="container-px grid gap-x-10 gap-y-2 py-10 sm:grid-cols-2 sm:gap-y-10 sm:py-12 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="font-display text-2xl font-extrabold">
            <span className="text-white">ICI</span>
            <span className="text-accent-400"> Group</span>
          </div>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
            {t("topbar.institutes")}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{site.description}</p>
          <div className="mt-5 flex gap-3">
            {Object.entries(site.social).map(([key, url]) => {
              const icon = socialIcons[key];
              if (!url || !icon) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key}
                  className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-accent-500 hover:text-slate-900"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <FooterSection title={t("footer.quickLinks")}>
          <ul className="space-y-2 text-sm">
            {[...navLinks, ...footerExtraLinks].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-block py-1 transition-colors hover:text-accent-400">
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </FooterSection>

        {/* Popular courses */}
        <FooterSection title={t("footer.popularCourses")}>
          <ul className="space-y-2 text-sm">
            {topCourses.map((course) => (
              <li key={course.slug}>
                <Link
                  href={`/courses/${course.slug}`}
                  className="inline-block py-1 transition-colors hover:text-accent-400"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </FooterSection>

        {/* Contact */}
        <FooterSection title={t("footer.getInTouch")}>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent-400" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-accent-400" />
              {/* Stacked so the two numbers are separate tap targets */}
              <span className="flex flex-col gap-1">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="py-0.5 hover:text-accent-400">
                  {site.phone}
                </a>
                {site.phoneAlt && (
                  <a
                    href={`tel:${site.phoneAlt.replace(/\s/g, "")}`}
                    className="py-0.5 hover:text-accent-400"
                  >
                    {site.phoneAlt}
                  </a>
                )}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-accent-400" />
              <a href={`mailto:${site.email}`} className="hover:text-accent-400">
                {site.email}
              </a>
            </li>
          </ul>
        </FooterSection>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-400 sm:flex-row">
          <p>
            © {year} {site.name}. {t("footer.rights")}
          </p>
          <p>{site.hours}</p>
        </div>
      </div>
    </footer>
  );
}
