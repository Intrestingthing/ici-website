"use client";

import Link from "next/link";
import { Route, PartyPopper, Trophy, Presentation, CalendarHeart, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import { useSite } from "@/components/CmsProvider";
import { useLang } from "@/i18n/LanguageProvider";

const iconMap = { Route, PartyPopper, Trophy, Presentation };
const tileColors = [
  "bg-sky-100 text-sky-600",
  "bg-pink-100 text-pink-600",
  "bg-amber-100 text-amber-600",
  "bg-emerald-100 text-emerald-600",
];

// Events added in the portal (marked "show on home") when there are any;
// otherwise the general tiles about the kinds of events ICI holds.
export default function EventsSection({ bg = false, events = [] }) {
  const site = useSite();
  const { t, pick } = useLang();
  const heading = (
    <SectionHeading center eyebrow={t("events.eyebrow")} title={t("events.title")} subtitle={t("events.subtitle")} />
  );

  if (events.length > 0) {
    return (
      <section className={`section ${bg ? "bg-slate-50" : ""}`}>
        <div className="container-px">
          {heading}
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-12 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
            {events.map((event) => (
              <div key={event.slug} className="w-[78%] shrink-0 snap-start sm:w-auto sm:shrink">
                <EventCard event={event} />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/events" className="btn-outline">
              {t("events.all")} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`section ${bg ? "bg-slate-50" : ""}`}>
      <div className="container-px">
        {heading}
        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-12 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {site.events.map((event, i) => {
            const Icon = iconMap[event.icon] ?? CalendarHeart;
            return (
              <div key={event.title} className="card w-[78%] shrink-0 snap-start p-6 sm:w-auto sm:shrink">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    tileColors[i % tileColors.length]
                  }`}
                >
                  <Icon size={26} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                  {pick(event, "title")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{pick(event, "text")}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
