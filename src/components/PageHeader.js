import Link from "next/link";
import { ChevronRight } from "lucide-react";

/*
  Breadcrumb: "Home" is always first; pass `trail` as the rest of the path
  (the last item = current page, no href). Every item except the last is a link.
  e.g. <PageHeader title="RS-CIT…" trail={[{label:"Courses", href:"/courses"}, {label:"RS-CIT"}]} />
*/
export default function PageHeader({ title, subtitle, trail }) {
  const crumbs = [{ label: "Home", href: "/" }, ...(trail ?? [{ label: title }])];

  return (
    <section className="border-b border-slate-100 bg-gradient-to-br from-brand-50 via-sky-50 to-accent-50">
      <div className="container-px py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1;
            return (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={14} className="text-slate-400" />}
                {c.href && !last ? (
                  <Link href={c.href} className="hover:text-brand-700">
                    {c.label}
                  </Link>
                ) : (
                  <span className={last ? "font-medium text-slate-700" : ""}>{c.label}</span>
                )}
              </span>
            );
          })}
        </nav>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
