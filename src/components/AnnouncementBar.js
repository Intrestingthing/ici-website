"use client";

import Link from "next/link";
import { Megaphone } from "lucide-react";
import { useSite } from "@/components/CmsProvider";
import { useLang } from "@/i18n/LanguageProvider";

export default function AnnouncementBar() {
  const site = useSite();
  const { lang, t, pick } = useLang();
  // From the portal: [{ text, textHi, link }]. Built-in: plain text lists.
  const source = site.announcementItems?.length
    ? site.announcementItems.map((a) => ({ text: pick(a, "text"), link: a.link }))
    : (lang === "hi" && site.announcementsHi ? site.announcementsHi : site.announcements ?? []).map((text) => ({ text }));
  if (!source.length) return null;

  // Duplicate the list so the marquee loops seamlessly.
  const items = [...source, ...source];

  return (
    <div className="flex w-full items-stretch overflow-hidden border-b border-slate-200 bg-accent-50 text-sm text-slate-800">
      <div className="flex shrink-0 items-center gap-2 bg-brand-700 px-4 py-2 font-semibold text-white">
        <Megaphone size={16} />
        <span className="hidden sm:inline">{t("announce.label")}</span>
      </div>
      <div className="marquee-pause relative min-w-0 flex-1 overflow-hidden">
        <div className="animate-marquee flex w-max items-center whitespace-nowrap py-2">
          {items.map((item, i) => {
            const content = (
              <>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                {item.text}
              </>
            );
            const className = "mx-6 flex items-center gap-2";
            if (!item.link) {
              return (
                <span key={i} className={className}>
                  {content}
                </span>
              );
            }
            return item.link.startsWith("/") ? (
              <Link key={i} href={item.link} className={`${className} underline-offset-2 hover:underline`}>
                {content}
              </Link>
            ) : (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} underline-offset-2 hover:underline`}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
