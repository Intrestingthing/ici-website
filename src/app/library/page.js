import Image from "next/image";
import { Clock, Sun, CalendarDays, Snowflake, Droplets, Armchair, Leaf, Users, BookOpen, Trophy } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { site } from "@/data/site";

export const metadata = {
  title: "Library",
  description:
    "A calm, air-conditioned study library at ICI Group, Jhunjhunu — RO water, comfortable seating, half-day & full-day options, open 7 AM to 9 PM.",
};

// Maps the icon names stored in site.js → actual icon components.
const iconMap = { Snowflake, Droplets, Armchair, Leaf };
const facilityColors = [
  "bg-sky-100 text-sky-600",
  "bg-blue-100 text-blue-600",
  "bg-amber-100 text-amber-600",
  "bg-emerald-100 text-emerald-600",
];

export default function LibraryPage() {
  const { library } = site;

  return (
    <>
      <PageHeader
        title="Our Library"
        subtitle="A quiet, comfortable place to study, prepare for exams and focus — right here at ICI Group, Jhunjhunu."
      />

      {/* Intro with photo */}
      <section className="section">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-sm">
            <Image
              src="/images/photos/library.jpg"
              alt="Study library at ICI Group, Jhunjhunu"
              width={1050}
              height={1400}
              className="h-80 w-full object-cover lg:h-[26rem]"
            />
          </div>
          <div>
            <span className="eyebrow">A Quiet Place to Study</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Your dedicated study space in Jhunjhunu
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Studying at home can be full of distractions. Our library gives students a calm,
              comfortable and disciplined environment to prepare for exams, complete assignments and
              focus — with a helpful reference collection close at hand.
            </p>
            <p className="mt-3 text-slate-600">
              Choose a <strong>half-day</strong> or <strong>full-day</strong> seat, open from{" "}
              <strong>{site.library.timing}</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section pt-0">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Study Facilities"
            title="Everything you need to study with focus"
            subtitle="A peaceful environment designed to help students concentrate and do their best."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {library.facilities.map((facility, i) => {
              const Icon = iconMap[facility.icon] ?? BookOpen;
              return (
                <div key={facility.title} className="card p-6 text-center">
                  <div
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${
                      facilityColors[i % facilityColors.length]
                    }`}
                  >
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                    {facility.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timing & options */}
      <section className="section bg-slate-50">
        <div className="container-px grid gap-6 lg:grid-cols-3">
          <div className="card p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
              <Clock size={28} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-slate-900">Opening Hours</h3>
            <p className="mt-2 text-2xl font-bold text-brand-700">{library.timing}</p>
            <p className="mt-1 text-slate-600">Monday to Saturday</p>
          </div>

          <div className="card p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
              <Sun size={28} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-slate-900">Flexible Slots</h3>
            <ul className="mt-3 space-y-2">
              {library.options.map((opt) => (
                <li key={opt} className="flex items-center gap-2 text-slate-700">
                  <CalendarDays size={18} className="text-brand-600" /> {opt} seating available
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
              <Users size={28} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-slate-900">Who Can Join</h3>
            <p className="mt-2 text-slate-600">{library.openTo}.</p>
            <p className="mt-3 text-sm font-medium text-accent-700">
              Membership available — contact us for fees & details.
            </p>
          </div>
        </div>
      </section>

      {/* Government-placement highlight */}
      <section className="section pt-0">
        <div className="container-px">
          <div className="flex flex-col items-center gap-4 rounded-3xl bg-brand-800 px-6 py-12 text-center text-white sm:px-12">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-accent-400">
              <Trophy size={32} />
            </span>
            <h2 className="max-w-3xl font-display text-2xl font-bold sm:text-3xl">
              {site.library.highlight}
            </h2>
            <p className="max-w-2xl text-brand-100">
              A focused, disciplined place to prepare for competitive and government exams — the kind
              of environment that turns hard work into results.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Reserve your seat in our library"
        subtitle="Half-day and full-day memberships are available. Contact us to check seat availability and fees."
      />
    </>
  );
}
