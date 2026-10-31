"use client";

import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { useSite } from "@/components/CmsProvider";

// Lightweight by default (no heavy Maps iframe until asked). "Open in Google
// Maps" is one tap → the visitor's Maps app with directions.
export default function LocationMap() {
  const site = useSite();
  const [loaded, setLoaded] = useState(false);
  const query = encodeURIComponent(
    `${site.name}, ${site.address.line1}, ${site.address.line2}`
  );
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${query}`;

  if (loaded) {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
        <iframe
          title={`${site.name} location map`}
          src={site.mapEmbedSrc}
          width="100%"
          height="380"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-brand-50 p-8 text-center shadow-sm">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-700">
        <MapPin size={26} />
      </span>
      <p className="font-semibold text-slate-800">
        {site.address.line1}
        <br />
        {site.address.line2}
      </p>
      <div className="mt-1 flex flex-col gap-2 sm:flex-row">
        <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
          <ExternalLink size={16} /> Open in Google Maps
        </a>
        <button type="button" onClick={() => setLoaded(true)} className="btn-outline">
          Load map here
        </button>
      </div>
    </div>
  );
}
