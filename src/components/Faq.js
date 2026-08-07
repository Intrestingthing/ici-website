"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

export default function Faq({ items }) {
  const { pick } = useLang();
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-slate-900">{pick(item, "q")}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-brand-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-sm leading-relaxed text-slate-600">{pick(item, "a")}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
