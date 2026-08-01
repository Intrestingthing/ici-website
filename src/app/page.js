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

const whyChoose = [
  {
    icon: Award,
    title: "Certified Courses",
    text: "Industry-recognised certificates that add real value to your résumé.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    text: "Friendly, experienced trainers who teach with patience and real examples.",
    color: "bg-sky-100 text-sky-600",
  },
  {
    icon: Laptop,
    title: "100% Practical",
    text: "Hands-on lab sessions on every topic — learn by actually doing.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Wifi,
    title: "Distance & Online",
    text: "Can't attend in person? Learn from home with our flexible online programs.",
    color: "bg-violet-100 text-violet-600",
  },
];

export default function Home() {
  const featured = getFeaturedCourses();

  return (
    <>
      {/* Hero — with the ICI building as the background */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden lg:min-h-[700px]">
        <div className="absolute inset-0">
          <Image
            src="/images/photos/building.jpg"
            alt="Indian Computer Institute (ICI Group) building, 1/147 Housing Board, Jhunjhunu"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_45%]"
          />
          {/* Dark overlay — heavier on the left so the text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/85 to-brand-900/50" />
        </div>

        <div className="container-px relative py-16 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/25">
              Admissions &amp; Counselling Open 2026
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Build your future with the right{" "}
              <span className="text-accent-400">courses &amp; guidance</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-50">
              {site.name} is home to two institutes in Jhunjhunu —{" "}
              <strong className="font-semibold text-white">Innovative Career Institute</strong> for
              UG &amp; PG admission counselling, and{" "}
              <strong className="font-semibold text-white">Indian Computer Institute</strong> for
              job-oriented computer courses. Since {site.foundedYear}, we've helped students choose
              the right path and build real skills.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/admissions" className="btn-accent">
                Enquire Now <ArrowRight size={18} />
              </Link>
              <Link
                href="/courses"
                className="btn border border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                Explore Courses
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-brand-50">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent-400" /> Practical training
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent-400" /> Certified courses
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-accent-400" /> Placement support
              </span>
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
            eyebrow="One Group, Two Institutes"
            title="Whatever your goal, we have a path for you"
            subtitle="ICI Group brings together higher-education counselling and hands-on computer training under one trusted roof."
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
              eyebrow="Popular Courses"
              title="Courses that build real skills"
              subtitle="A few of our most popular programs. Browse the full list to find the right fit for you."
            />
            <Link
              href="/courses"
              className="hidden items-center gap-1 text-sm font-semibold text-brand-700 hover:gap-2 sm:flex"
            >
              View all courses <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link href="/courses" className="btn-outline w-full">
              View all courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Why Choose ICI"
            title="A place where beginners become professionals"
            subtitle="We focus on practical, job-ready skills in a friendly and encouraging environment."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <item.icon size={26} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distance learning teaser */}
      <section className="section">
        <div className="container-px">
          <div className="grid items-center gap-10 rounded-3xl bg-brand-700 p-8 text-white sm:p-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <Wifi size={14} /> Learn from anywhere
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Online &amp; Distance Learning
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-100">
                Can't visit the institute every day? Learn from home your way — join{" "}
                <strong>live online classes</strong> with our teachers, or study at your own pace
                with <strong>distance learning</strong>. Same teaching, same certificate.
              </p>
              <Link href="/online-learning" className="btn-accent mt-6">
                Explore Online Learning <ArrowRight size={18} />
              </Link>
            </div>
            <ul className="grid gap-4">
              {[
                { icon: Clock, text: "Flexible timings that fit around your schedule" },
                { icon: Laptop, text: "Live online classes plus recorded lessons" },
                { icon: BadgeCheck, text: "Same certificate as classroom students" },
                { icon: GraduationCap, text: "Personal guidance from dedicated mentors" },
              ].map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-4"
                >
                  <item.icon size={22} className="shrink-0 text-accent-400" />
                  <span className="text-sm font-medium">{item.text}</span>
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
              <span className="eyebrow">Study Library</span>
              <h2 className="mt-3 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                A calm, air-conditioned study space — open {site.library.timing}
              </h2>
              <p className="mt-3 text-slate-600">
                Comfortable chairs, RO drinking water and a peaceful environment. Half-day and
                full-day memberships available for students and outside learners.
              </p>
            </div>
            <Link href="/library" className="btn-primary shrink-0">
              <BookOpen size={18} /> Explore the Library
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Student Stories"
            title="Loved by our students"
            subtitle="Real feedback from learners who started their journey with us."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
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
