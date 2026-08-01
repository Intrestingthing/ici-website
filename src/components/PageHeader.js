import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeader({ title, subtitle, crumb }) {
  return (
    <section className="border-b border-slate-100 bg-gradient-to-br from-brand-50 via-sky-50 to-accent-50">
      <div className="container-px py-12 sm:py-16">
        <nav className="flex items-center gap-1 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand-700">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="font-medium text-slate-700">{crumb || title}</span>
        </nav>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
