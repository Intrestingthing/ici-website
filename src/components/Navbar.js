"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { navLinks } from "@/data/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar — full form + contact */}
      <div className="bg-brand-950 text-white">
        <div className="container-px flex h-9 items-center justify-between gap-3 text-[11px] sm:text-xs">
          <span className="truncate font-medium tracking-wide text-brand-100">
            Innovative Career Institute &amp; Indian Computer Institute
          </span>
          <div className="hidden items-center gap-5 sm:flex">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
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
          <span className="whitespace-nowrap text-brand-200 sm:hidden">Since 1998</span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-px flex h-16 items-center justify-between lg:h-20">
          {/* Text logo — big "ICI Group" + 3-line descriptor beside it (no icon) */}
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="font-display text-4xl font-extrabold leading-none tracking-tight lg:text-5xl">
              <span className="text-brand-700">ICI</span>
              <span className="text-accent-500"> Group</span>
            </span>
            <span className="flex flex-col border-l-2 border-slate-200 pl-3 text-[11px] font-bold uppercase leading-[1.25] tracking-wide text-slate-500 lg:text-xs">
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
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:text-brand-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <Link href="/admissions" className="btn-primary">
              Enquire Now <ArrowRight size={16} />
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
          <div className="border-t border-slate-100 bg-white xl:hidden">
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
                  {link.label}
                </Link>
              ))}
              <Link
                href="/admissions"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 w-full"
              >
                Enquire Now <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold text-brand-700"
              >
                <Phone size={16} /> {site.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
