import Link from "next/link";
import {
  Wifi,
  Clock,
  Laptop,
  BadgeCheck,
  Headphones,
  Wallet,
  UserPlus,
  BookOpen,
  Video,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CourseCard from "@/components/CourseCard";
import CTASection from "@/components/CTASection";
import { getDistanceCourses } from "@/data/courses";

export const metadata = {
  title: "Distance Learning",
  description:
    "Study computer courses from home with Indian Computer Institute's distance learning programs — flexible timings, live online classes and full support.",
};

const benefits = [
  { icon: Clock, title: "Flexible Timings", text: "Learn at your own pace, around your job or studies." },
  { icon: Laptop, title: "Live Online Classes", text: "Interactive sessions plus recordings to revisit anytime." },
  { icon: BadgeCheck, title: "Same Certificate", text: "Earn the same recognised certificate as classroom students." },
  { icon: Headphones, title: "Full Support", text: "Dedicated mentors to answer your doubts whenever you need." },
  { icon: Wallet, title: "Affordable Fees", text: "Save on travel and time with cost-effective online learning." },
  { icon: BookOpen, title: "Study Material", text: "Get digital notes, assignments and practice resources." },
];

const steps = [
  { icon: UserPlus, title: "Enrol Online", text: "Fill the enquiry form or call us to register for your course." },
  { icon: Video, title: "Attend Live Classes", text: "Join scheduled online classes and access recordings anytime." },
  { icon: BookOpen, title: "Practice & Submit", text: "Complete hands-on assignments with mentor guidance." },
  { icon: GraduationCap, title: "Get Certified", text: "Clear your assessment and receive your certificate." },
];

export default function DistanceLearningPage() {
  // Only computer courses taught directly (not the UG/PG counselling programs).
  const distanceCourses = getDistanceCourses().filter(
    (course) => course.institute === "indian-computer-institute"
  );

  return (
    <>
      <PageHeader
        title="Distance Learning"
        subtitle="Can't attend classes in person? Learn computer skills from the comfort of your home with flexible, fully-supported online programs."
      />

      {/* Intro */}
      <section className="section">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Learn From Anywhere</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Quality computer education, wherever you are
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Our distance learning programs bring the classroom to you. Whether you're a working
              professional, a homemaker, or a student in a remote area, you can build valuable
              computer skills without ever leaving home — with the same teaching quality and
              certification as our in-person courses.
            </p>
            <Link href="/admissions" className="btn-primary mt-7">
              Enrol for Distance Learning <ArrowRight size={18} />
            </Link>
          </div>
          <div className="rounded-3xl bg-brand-700 p-8 text-white">
            <Wifi size={40} className="text-accent-400" />
            <h3 className="mt-4 font-display text-2xl font-bold">Why distance learning?</h3>
            <ul className="mt-5 space-y-3">
              {[
                "No need to relocate or commute daily",
                "Perfect for working people & homemakers",
                "Study material accessible 24/7",
                "One-on-one mentor support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-50">
                  <BadgeCheck size={20} className="shrink-0 text-accent-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Benefits"
            title="Everything you need to succeed from home"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* How it works */}
      <section className="section">
        <div className="container-px">
          <SectionHeading center eyebrow="How It Works" title="Get started in 4 simple steps" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="relative card p-6">
                <span className="absolute right-5 top-5 font-display text-4xl font-extrabold text-brand-50">
                  {i + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700 text-white">
                  <step.icon size={24} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available courses */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <SectionHeading
            eyebrow="Available Online"
            title="Courses you can take by distance learning"
            subtitle="These courses are fully available through our distance learning program."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {distanceCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start learning from home today"
        subtitle="Enrol in our distance learning program and gain in-demand computer skills at your own pace."
      />
    </>
  );
}
