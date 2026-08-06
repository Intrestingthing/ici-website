"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dict } from "./dict";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
  t: (k) => k,
  pick: (obj, field) => obj?.[field],
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  // Restore saved preference on mount.
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("ici-lang") : null;
    if (saved === "hi" || saved === "en") setLang(saved);
  }, []);

  // Persist + reflect on <html lang>.
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
    if (typeof window !== "undefined") localStorage.setItem("ici-lang", lang);
  }, [lang]);

  const t = (key) => dict[lang]?.[key] ?? dict.en[key] ?? key;

  // Data helper: returns obj.<field>Hi in Hindi (falling back to obj.<field>).
  const pick = (obj, field) => {
    if (!obj) return "";
    if (lang === "hi") return obj[`${field}Hi`] ?? obj[field];
    return obj[field];
  };

  const toggle = () => setLang((l) => (l === "en" ? "hi" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
