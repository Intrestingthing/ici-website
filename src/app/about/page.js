import Image from "next/image";
import { Target, Eye, Heart, Award, Users, Laptop, ShieldCheck, GraduationCap, Landmark } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import InstituteCards from "@/components/InstituteCards";
import { site } from "@/data/site";

export const metadata = {
  title: "About Us",
  description:
    "Learn about ICI Group, Jhunjhunu — our two institutes, our mission and values, and our approvals (Geduconnect Pvt. Ltd. authorized center, AISECT SKP Knowledge Provider).",
};

const values = [
  {
    icon: Heart,
    title: "Student First",
    text: "Every decision we make starts with what's best for our students' success.",
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Laptop,
    title: "Practical Learning",
    text: "We believe skills are built by doing, not just listening — every topic is hands-on.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Award,
    title: "Quality Education",
    text: "Up-to-date curriculum and experienced trainers ensure you learn what matters.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: Users,
    title: "Friendly Support",
    text: "A warm, encouraging environment where no question is too small.",
    color: "bg-sky-100 text-sky-600",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`About ${site.name}`}
        subtitle={`Since ${site.foundedYear}, ${site.name} has helped students in Jhunjhunu choose the right career path and build real skills — through our two institutes.`}
      />

      {/* Story */}
      <section className="section">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Guidance and skills, all under one roof
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                Established in {site.foundedYear} in Jhunjhunu, Rajasthan, {site.name} was founded
                with a simple goal: to make quality education and career guidance accessible to
                everyone. What started as a small centre has grown, over more than 27 years, into a
                trusted name serving students across the region.
              </p>
              <p>
                Today ICI Group runs two institutes — <strong>Innovative Career Institute</strong>,
                which counsels students towards the right UG &amp; PG programs through our university
                partners, and <strong>Indian Computer Institute</strong>, which teaches job-oriented
                computer courses directly, in classroom and distance modes.
              </p>
              <p>
                Under the guidance of our founders, <strong>B. L. Choudhary</strong> and{" "}
                <strong>Aditi Choudhary</strong>, we continue to help students become graduates,
                computer operators, accountants, designers, programmers and entrepreneurs. Their
                success is our proudest achievement.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-sm">
            <Image
              src="/images/photos/training-session.jpg"
              alt="Students during a training session at ICI Group, Jhunjhunu"
              width={1400}
              height={1050}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-800 py-14">
        <div className="container-px">
          <Stats dark />
        </div>
      </section>

      {/* Two institutes */}
      <section className="section">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="One Group, Two Institutes"
            title="Two institutes, one trusted name"
            subtitle="Each institute focuses on what it does best — together they cover your whole journey from higher education to job-ready skills."
          />
          <div className="mt-12">
            <InstituteCards />
          </div>
        </div>
      </section>

      {/* Approvals & affiliations */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Approvals & Affiliations"
            title="Recognised and authorised"
            subtitle="We work within established networks so your certificates and university programs are credible."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="card p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <ShieldCheck size={28} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                {site.approvals.geduconnect.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{site.approvals.geduconnect.note}</p>
            </div>
            <div className="card p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
                <Award size={28} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                {site.approvals.aisect.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{site.approvals.aisect.note}</p>
            </div>
            <div className="card p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Landmark size={28} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                {site.approvals.rkcl.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{site.approvals.rkcl.note}</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-400">
              Also associated with
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {[...site.approvals.partners, ...site.approvals.universities].map((p) => (
                <span
                  key={p.name}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  <GraduationCap size={16} className="text-brand-600" /> {p.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          <div className="card p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
              <Target size={28} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="mt-3 text-lg leading-relaxed text-slate-600">
              To help every student choose the right path — whether higher education or job-ready
              computer skills — with honest guidance, practical training and affordable support.
            </p>
          </div>
          <div className="card p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
              <Eye size={28} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="mt-3 text-lg leading-relaxed text-slate-600">
              To be the region's most trusted name for career guidance and computer education, known
              for quality teaching, caring mentorship and the real-world success of our students.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Our Values"
            title="What we stand for"
            subtitle="The principles that guide how we teach and support every student."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="card p-6 text-center">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${value.color}`}
                >
                  <value.icon size={26} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
