import Link from "next/link";
import { notFound } from "next/navigation";
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
import { courses, getCourseBySlug, getCategoryLabel } from "@/data/courses";
import { site, getInstitute } from "@/data/site";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.title,
    description: course.short,
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const related = courses
    .filter((c) => c.category === course.category && c.slug !== course.slug)
    .slice(0, 3);

  const mode = course.counsellingOnly
    ? "Regular & Distance (via university)"
    : ["Classroom", course.online && "Online", course.distance && "Distance"]
        .filter(Boolean)
        .join(" · ");

  const meta = [
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: BarChart3, label: "Level", value: course.level },
    { icon: Wifi, label: "Mode", value: mode },
    { icon: GraduationCap, label: "Category", value: getCategoryLabel(course.category) },
  ];

  const institute = getInstitute(course.institute);
  const shortTitle = course.title.split(" (")[0];

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.short,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      address: `${site.address.line1}, ${site.address.line2}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <PageHeader
        title={course.title}
        subtitle={course.short}
        trail={[{ label: "Courses", href: "/courses" }, { label: shortTitle }]}
      />

      {/* Mobile key facts — sidebar drops below the description on phones */}
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
          {/* Main content */}
          <div className="lg:col-span-2">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700"
            >
              <ArrowLeft size={16} /> Back to all courses
            </Link>

            {institute && (
              <p className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
                <Building2 size={16} className="text-brand-600" /> Offered by {institute.name}
              </p>
            )}

            <h2 className="mt-8 font-display text-2xl font-bold text-slate-900">
              About this course
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-slate-600">{course.description}</p>

            <h2 className="mt-10 font-display text-2xl font-bold text-slate-900">
              What you will learn
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
              <h3 className="font-display text-lg font-semibold text-slate-900">Eligibility</h3>
              <p className="mt-2 text-slate-600">{course.eligibility}</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="card sticky top-24 p-6">
              <h3 className="font-display text-lg font-semibold text-slate-900">Course details</h3>
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
                {course.counsellingOnly
                  ? "🎓 Free counselling — contact us for guidance"
                  : "💬 Affordable fees — contact us for details"}
              </p>
              <Link href="/admissions" className="btn-primary mt-4 w-full">
                {course.counsellingOnly ? "Get Counselling" : "Enquire / Apply"}{" "}
                <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="btn-outline mt-3 w-full"
              >
                Call {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Related courses */}
      {related.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-px">
            <h2 className="font-display text-2xl font-bold text-slate-900">Related courses</h2>
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
