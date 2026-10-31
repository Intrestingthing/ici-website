"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDays, MapPin, Images } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { eventDates } from "@/lib/events";

// One event from the portal: cover photo, title, dates and place.
export default function EventCard({ event }) {
  const { lang, t, pick } = useLang();
  return (
    <Link href={`/events/${event.slug}`} className="card group flex h-full flex-col overflow-hidden">
      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
        {event.cover ? (
          <Image
            src={event.cover}
            alt={event.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="flex h-full items-center justify-center text-slate-300">
            <CalendarDays size={40} />
          </span>
        )}
        {event.upcoming && (
          <span className="absolute left-3 top-3 rounded-full bg-accent-400 px-3 py-1 text-xs font-bold text-slate-900">
            {t("events.upcomingBadge")}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-slate-900">{pick(event, "title")}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
          <CalendarDays size={15} className="shrink-0 text-brand-600" /> {eventDates(event, lang)}
          {event.time ? ` · ${event.time}` : ""}
        </p>
        {event.place && (
          <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
            <MapPin size={15} className="shrink-0 text-brand-600" /> {pick(event, "place")}
          </p>
        )}
        {event.photos?.length > 0 && (
          <p className="mt-auto flex items-center gap-2 pt-3 text-xs font-semibold text-brand-700">
            <Images size={14} /> {event.photos.length} {t("events.photos")}
          </p>
        )}
      </div>
    </Link>
  );
}
