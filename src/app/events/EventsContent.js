"use client";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import EventsSection from "@/components/EventsSection";
import CTASection from "@/components/CTASection";
import { useLang } from "@/i18n/LanguageProvider";

function EventGrid({ events }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.slug} event={event} />
      ))}
    </div>
  );
}

export default function EventsContent({ upcoming, past }) {
  const { t } = useLang();
  const none = upcoming.length === 0 && past.length === 0;

  return (
    <>
      <PageHeader title={t("events.pageTitle")} subtitle={t("events.pageSubtitle")} />

      {none ? (
        <>
          <p className="container-px pt-10 text-center text-slate-500">{t("events.none")}</p>
          <EventsSection />
        </>
      ) : (
        <>
          {upcoming.length > 0 && (
            <section className="section">
              <div className="container-px">
                <SectionHeading title={t("events.upcoming")} />
                <EventGrid events={upcoming} />
              </div>
            </section>
          )}
          {past.length > 0 && (
            <section className={`section ${upcoming.length > 0 ? "bg-slate-50" : ""}`}>
              <div className="container-px">
                <SectionHeading title={t("events.past")} />
                <EventGrid events={past} />
              </div>
            </section>
          )}
        </>
      )}

      <CTASection />
    </>
  );
}
