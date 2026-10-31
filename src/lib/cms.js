/*
  Content from the ICI Portal (portal.iciedu.org → Staff › Website).

  The portal's /api/public/* feed uses the same shapes as src/data/*.js.
  Each loader lays the portal's values over the built-in data, so:
  - if NEXT_PUBLIC_PORTAL_URL isn't set, or the portal can't be reached,
    the site simply shows the built-in content from src/data;
  - pages are cached for an hour, and the portal asks /api/revalidate to
    refresh the matching tag right after every edit.
*/
import { cache } from "react";
import { site as builtInSite } from "@/data/site";
import { courses as builtInCourses, categories as builtInCategories } from "@/data/courses";
import { testimonials as builtInTestimonials } from "@/data/testimonials";

export const PORTAL_URL = (process.env.NEXT_PUBLIC_PORTAL_URL || "").replace(/\/$/, "");

// Cache tags shared with the portal (src/lib/website/tags.ts there).
export const CMS_TAGS = [
  "cms:site",
  "cms:announcements",
  "cms:offers",
  "cms:courses",
  "cms:events",
  "cms:gallery",
  "cms:testimonials",
];

async function load(path, tags) {
  if (!PORTAL_URL) return null;
  try {
    const res = await fetch(`${PORTAL_URL}/api/public/${path}`, {
      next: { revalidate: 3600, tags },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(`[cms] ${path} unavailable, using built-in content:`, err?.message ?? err);
    return null;
  }
}

// Drop empty values so a blank field in the portal never wipes built-in text.
const filled = (obj) =>
  Object.fromEntries(Object.entries(obj ?? {}).filter(([, v]) => v !== undefined && v !== null && v !== ""));

export const getSite = cache(async () => {
  const feed = await load("site-content", ["cms:site", "cms:announcements", "cms:offers"]);
  if (!feed?.site) return builtInSite;
  const { library, womenOffer, ...rest } = feed.site;
  return {
    ...builtInSite,
    ...filled(rest),
    // Announcements always follow the portal: removing them all hides the bar.
    announcements: rest.announcements ?? [],
    announcementsHi: rest.announcementsHi ?? [],
    announcementItems: rest.announcementItems ?? [],
    library: { ...builtInSite.library, ...filled(library) },
    // { active: false } from the portal hides the banner and the home section.
    womenOffer: womenOffer ?? { active: false },
  };
});

export const getCourses = cache(async () => {
  const feed = await load("courses", ["cms:courses"]);
  if (!feed?.courses?.length) return { courses: builtInCourses, categories: builtInCategories };
  return {
    courses: feed.courses,
    categories: feed.categories?.length ? feed.categories : builtInCategories,
  };
});

export const getTestimonials = cache(async () => {
  const feed = await load("testimonials", ["cms:testimonials"]);
  return feed?.testimonials?.length ? feed.testimonials : builtInTestimonials;
});

/** Gallery photos from the portal, or null to use the page's built-in photos. */
export const getGallery = cache(async () => {
  const feed = await load("gallery", ["cms:gallery"]);
  return feed?.photos?.length ? feed.photos : null;
});

/** Dated events with photo albums (newest first). Empty when there are none. */
export const getEvents = cache(async () => {
  const feed = await load("events", ["cms:events"]);
  return feed?.events ?? [];
});

export async function getEvent(slug) {
  return (await getEvents()).find((e) => e.slug === slug) ?? null;
}
