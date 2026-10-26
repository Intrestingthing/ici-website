// Fire a Google Analytics 4 event. Safe no-op when GA isn't configured/loaded,
// so it never breaks the page. Usage: track("whatsapp_click", { source: "hero" })
export function track(event, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
