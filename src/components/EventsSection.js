import { Route, PartyPopper, Trophy, Presentation, CalendarHeart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

const iconMap = { Route, PartyPopper, Trophy, Presentation };
const tileColors = [
  "bg-sky-100 text-sky-600",
  "bg-pink-100 text-pink-600",
  "bg-amber-100 text-amber-600",
  "bg-emerald-100 text-emerald-600",
];

export default function EventsSection({ bg = false }) {
  return (
    <section className={`section ${bg ? "bg-slate-50" : ""}`}>
      <div className="container-px">
        <SectionHeading
          center
          eyebrow="Life at ICI"
          title="Events & Festivals"
          subtitle="Learning at ICI is more than classes. We celebrate festivals, run competitions and reach out to the community through events all year round."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.events.map((event, i) => {
            const Icon = iconMap[event.icon] ?? CalendarHeart;
            return (
              <div key={event.title} className="card p-6">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    tileColors[i % tileColors.length]
                  }`}
                >
                  <Icon size={26} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{event.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
