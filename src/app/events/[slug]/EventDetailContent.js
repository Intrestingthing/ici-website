"use client";

import Image from "next/image";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { useLang } from "@/i18n/LanguageProvider";
import { eventDates } from "@/lib/events";

export default function EventDetailContent({ event }) {
  const { lang, t, pick } = useLang();
  const title = pick(event, "title");

  return (
    <>
      <PageHeader title={title} trail={[{ label: t("nav.events"), href: "/events" }, { label: title }]} />

      <section className="section">
        <div className="container-px grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div>
            {event.cover && (
              <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-slate-100">
                <Image src={event.cover} alt={event.title} fill priority sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" />
              </div>
            )}
            {pick(event, "description") && (
              <p className="whitespace-pre-line text-lg leading-relaxed text-slate-700">{pick(event, "description")}</p>
            )}
          </div>

          <aside className="card h-fit space-y-3 p-6 text-sm text-slate-700">
            <p className="flex items-center gap-3">
              <CalendarDays size={18} className="shrink-0 text-brand-600" /> {eventDates(event, lang)}
            </p>
            {event.time && (
              <p className="flex items-center gap-3">
                <Clock size={18} className="shrink-0 text-brand-600" /> {event.time}
              </p>
            )}
            {event.place && (
              <p className="flex items-center gap-3">
                <MapPin size={18} className="shrink-0 text-brand-600" /> {pick(event, "place")}
              </p>
            )}
          </aside>
        </div>
      </section>

      {event.photos?.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-px">
            <h2 className="font-display text-2xl font-bold text-slate-900">{t("events.photosTitle")}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {event.photos.map((photo) => (
                <figure key={photo.src} className="group relative overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src={photo.src}
                    alt={photo.caption || event.title}
                    width={600}
                    height={450}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {pick(photo, "caption") && (
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm font-semibold text-white">
                      {pick(photo, "caption")}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
