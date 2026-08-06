"use client";

import { Route, PartyPopper, Trophy, Presentation, CalendarHeart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { useLang } from "@/i18n/LanguageProvider";

const iconMap = { Route, PartyPopper, Trophy, Presentation };
const tileColors = [
  "bg-sky-100 text-sky-600",
  "bg-pink-100 text-pink-600",
  "bg-amber-100 text-amber-600",
  "bg-emerald-100 text-emerald-600",
];

export default function EventsSection({ bg = false }) {
  const { t, pick } = useLang();
  return (
    <section className={`section ${bg ? "bg-slate-50" : ""}`}>
      <div className="container-px">
        <SectionHeading
          center
          eyebrow={t("events.eyebrow")}
          title={t("events.title")}
          subtitle={t("events.subtitle")}
        />
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
