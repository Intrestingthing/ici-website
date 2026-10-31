"use client";

import { createContext, useContext } from "react";

// Site details (from the portal, merged over src/data/site.js) and a short
// course list, loaded once in the root layout for the client components.
const CmsContext = createContext({ site: null, courseOptions: [] });

export function CmsProvider({ site, courseOptions, children }) {
  return <CmsContext.Provider value={{ site, courseOptions }}>{children}</CmsContext.Provider>;
}

export const useSite = () => useContext(CmsContext).site;

/** [{ slug, title, titleHi, featured }] — for the footer and the enquiry form. */
export const useCourseOptions = () => useContext(CmsContext).courseOptions;

// The portal (student/staff login, certificate check). Empty until it is live.
export const PORTAL_URL = (process.env.NEXT_PUBLIC_PORTAL_URL || "").replace(/\/$/, "");
