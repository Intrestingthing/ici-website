import Link from "next/link";
import {
  Monitor,
  Wifi,
  Video,
  Clock,
  Headphones,
  BadgeCheck,
  CalendarClock,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import CTASection from "@/components/CTASection";
import { getOnlineCourses } from "@/data/courses";

export const metadata = {
  title: "Online Learning",
  description:
    "Learn computer courses from home with ICI — live online classes with teachers, or self-paced distance learning. Browse all courses you can join online.",
};

const modes = [
  {
    icon: Video,
    title: "Live Online Classes",
    tag: "Real-time · Teacher-led",
    text: "Join scheduled, interactive classes over video with our teachers. Ask questions live, get instant feedback, and learn together with your batch — just like the classroom, from home.",
    points: [
      "Fixed batch timings",
      "Live doubt-solving with a teacher",
      "Class recordings to revise",
    ],
    href: "/admissions",
    cta: "Join a live batch",
  },
  {
    icon: Wifi,
    title: "Self-Paced Distance Learning",
    tag: "Flexible · Learn anytime",
    text: "Prefer to study on your own schedule? Get study material, assignments and mentor support, and learn at your own pace — perfect for working people and busy students.",
    points: [
      "Study anytime, anywhere",
      "Digital notes & assignments",
      "Mentor support when you need it",
    ],
    href: "/distance-learning",
    cta: "Explore distance learning",
  },
];

const benefits = [
  { icon: Clock, title: "Save Time & Travel", text: "No daily commute — learn from the comfort of home." },
  { icon: Headphones, title: "Real Teacher Support", text: "Guidance from experienced faculty, not just videos." },
  { icon: CalendarClock, title: "Flexible Options", text: "Pick live classes or self-paced study to suit you." },
  { icon: BadgeCheck, title: "Same Certificate", text: "Earn the same recognised certificate as classroom students." },
];

export default function OnlineLearningPage() {
  const onlineCourses = getOnlineCourses();

  return (
    <>
      <PageHeader
        title="Online Learning"
        subtitle="Study our computer courses from anywhere. Choose live online classes with a teacher, or flexible self-paced distance learning — whichever fits your life."
      />

      {/* Two ways to learn online */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Learn From Home"
            title="Two ways to learn online"
            subtitle="Everything you'd get in the classroom — the teaching, the support and the certificate — now available from home."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {modes.map((mode) => (
              <div key={mode.title} className="card flex flex-col p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <mode.icon size={28} />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-600">
                  {mode.tag}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold text-slate-900">{mode.title}</h3>
                <p className="mt-3 text-slate-600">{mode.text}</p>
                <ul className="mt-5 space-y-2">
                  {mode.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-slate-700">
                      <BadgeCheck size={18} className="shrink-0 text-emerald-500" /> {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={mode.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:gap-2"
                >
                  {mode.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <SectionHeading center eyebrow="Why Learn Online" title="The classroom experience, at home" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="card p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <b.icon size={24} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course catalog */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            eyebrow="Available Online"
            title="Courses you can join from home"
            subtitle="These computer courses are available as live online classes and/or self-paced distance learning."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {onlineCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
            <MessageSquare size={16} className="text-brand-600" />
            Not sure which mode suits you? <Link href="/admissions" className="font-semibold text-brand-700">Ask our counsellors</Link>.
          </p>
        </div>
      </section>

      <CTASection
        title="Start learning online today"
        subtitle="Tell us which course and mode you prefer — live online or self-paced — and we'll help you get started."
      />
    </>
  );
}
