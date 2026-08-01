import Link from "next/link";
import { Clock, BarChart3, Wifi, Monitor, ArrowRight, Building2 } from "lucide-react";
import { getCategoryLabel } from "@/data/courses";
import { getInstitute } from "@/data/site";

// Each course category gets its own colour so the catalog reads at a glance.
const categoryStyles = {
  ug: "bg-blue-100 text-blue-700",
  pg: "bg-violet-100 text-violet-700",
  diploma: "bg-emerald-100 text-emerald-700",
  accounting: "bg-amber-100 text-amber-700",
  design: "bg-pink-100 text-pink-700",
  programming: "bg-sky-100 text-sky-700",
  govt: "bg-rose-100 text-rose-700",
};

export default function CourseCard({ course }) {
  const institute = getInstitute(course.institute);
  const badge = categoryStyles[course.category] ?? "bg-brand-100 text-brand-700";

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="card group flex flex-col p-6 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badge}`}>
          {getCategoryLabel(course.category)}
        </span>
        <span className="flex flex-wrap justify-end gap-2">
          {course.online && (
            <span className="flex items-center gap-1 text-xs font-medium text-brand-600">
              <Monitor size={14} /> Online
            </span>
          )}
          {course.distance && (
            <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
              <Wifi size={14} /> Distance
            </span>
          )}
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-slate-900 group-hover:text-brand-700">
        {course.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{course.short}</p>

      <div className="mt-5 flex items-center gap-4 text-xs font-medium text-slate-500">
        <span className="flex items-center gap-1.5">
          <Clock size={14} /> {course.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <BarChart3 size={14} /> {course.level}
        </span>
      </div>

      {institute && (
        <span className="mt-3 flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <Building2 size={13} /> {institute.name}
        </span>
      )}

      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
        View details
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
