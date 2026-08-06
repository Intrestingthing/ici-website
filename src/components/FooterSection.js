"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Footer column: an accordion on mobile, always-expanded on sm+.
export default function FooterSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 sm:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3 sm:pointer-events-none sm:py-0"
      >
        <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
          {title}
        </h3>
        <ChevronDown
          size={18}
          className={`text-slate-400 transition-transform sm:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`${open ? "block" : "hidden"} pb-4 sm:mt-4 sm:block sm:pb-0`}>{children}</div>
    </div>
  );
}
