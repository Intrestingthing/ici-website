"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { navLinks } from "@/data/nav";
import { useLang } from "@/i18n/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";
import { track } from "@/lib/analytics";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLang();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar — full form + contact */}
      <div className="bg-brand-950 text-white">
        <div className="container-px flex h-9 items-center justify-between gap-3 text-xs sm:text-[13px]">
          {/* Full institute names — sm and up only */}
          <span className="hidden truncate font-medium tracking-wide text-brand-100 sm:block">
            {t("topbar.institutes")}
          </span>
          {/* Mobile: a single compact call link only */}
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            onClick={() => track("call_click", { source: "topbar_mobile" })}
            className="flex items-center gap-1.5 font-medium text-brand-100 hover:text-accent-400 sm:hidden"
          >
            <Phone size={13} /> {t("cta.call")} {site.phone}
          </a>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-5 sm:flex">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                onClick={() => track("call_click", { source: "topbar" })}
                className="flex items-center gap-1.5 hover:text-accent-400"
              >
                <Phone size={13} /> {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-1.5 hover:text-accent-400"
              >
                <Mail size={13} /> {site.email}
              </a>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-px flex h-16 items-center justify-between lg:h-20">
          {/* Text logo — big "ICI Group" + 3-line descriptor beside it (no icon) */}
          <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
            <span className="font-display text-2xl font-extrabold leading-none tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-brand-700">ICI</span>
              <span className="text-accent-500"> Group</span>
            </span>
            <span className="flex flex-col border-l-2 border-slate-200 pl-2 text-[9px] font-bold uppercase leading-[1.25] tracking-wide text-slate-500 sm:pl-3 sm:text-[11px] lg:text-xs">
              <span>Computer</span>
              <span>Institute</span>
              <span>Jhunjhunu</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-base font-semibold transition-colors ${
                  isActive(link.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:text-brand-700"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <Link href="/admissions" className="btn-primary">
              {t("cta.enquireNow")} <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 xl:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <>
            {/* Backdrop — tap outside to close */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 h-screen w-screen cursor-default bg-slate-900/25 xl:hidden"
            />
            <div className="relative z-50 border-t border-slate-100 bg-white xl:hidden">
            <div className="container-px flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-base font-medium ${
                    isActive(link.href)
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <Link
                href="/admissions"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                {t("cta.enquireNow")} <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                onClick={() => track("call_click", { source: "mobile_menu" })}
                className="mt-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-brand-700"
              >
                <Phone size={16} /> {site.phone}
              </a>
            </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
