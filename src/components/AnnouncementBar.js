import { Megaphone } from "lucide-react";
import { site } from "@/data/site";

export default function AnnouncementBar() {
  if (!site.announcements?.length) return null;

  // Duplicate the list so the marquee loops seamlessly.
  const items = [...site.announcements, ...site.announcements];

  return (
    <div className="flex items-stretch border-b border-slate-200 bg-accent-50 text-sm text-slate-800">
      <div className="flex shrink-0 items-center gap-2 bg-brand-700 px-4 py-2 font-semibold text-white">
        <Megaphone size={16} />
        <span className="hidden sm:inline">Latest Updates</span>
      </div>
      <div className="marquee-pause relative flex-1 overflow-hidden">
        <div className="animate-marquee flex w-max items-center whitespace-nowrap py-2">
          {items.map((text, i) => (
            <span key={i} className="mx-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
