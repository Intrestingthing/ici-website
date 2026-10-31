// Event dates ("2026-11-14") shown as "14 Nov 2026" / "14 नवंबर 2026".
// Written by hand (not Intl) so the server and the browser print the same text.

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  hi: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
};

export function formatDay(day, lang = "en") {
  const [y, m, d] = (day ?? "").split("-").map(Number);
  if (!y || !m || !d) return "";
  return `${d} ${(MONTHS[lang] ?? MONTHS.en)[m - 1]} ${y}`;
}

export function eventDates(event, lang = "en") {
  if (!event.endsOn || event.endsOn === event.startsOn) return formatDay(event.startsOn, lang);
  return `${formatDay(event.startsOn, lang)} – ${formatDay(event.endsOn, lang)}`;
}
