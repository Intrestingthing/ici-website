// The enquiry form posts here; we pass it on to the portal's enquiry inbox
// (Staff › Enquiries). The secret stays on the server. If the portal isn't
// set up or can't be reached, the form falls back to WhatsApp.

const json = (body, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

const text = (v, max) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : undefined);

export async function POST(request) {
  const portal = (process.env.NEXT_PUBLIC_PORTAL_URL || "").replace(/\/$/, "");
  const secret = process.env.ENQUIRY_SECRET;
  if (!portal || !secret || secret.startsWith("change-me")) return json({ ok: false, error: "not_configured" }, 503);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  const ip =
    (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    undefined;
  const enquiry = {
    name: text(body?.name, 80),
    phone: text(body?.phone, 20),
    email: text(body?.email, 120),
    course: text(body?.course, 160),
    mode: text(body?.mode, 30),
    message: text(body?.message, 1500),
    sourcePage: text(body?.sourcePage, 300),
    lang: body?.lang === "hi" ? "hi" : "en",
    company: text(body?.company, 200), // honeypot
    ip: text(ip, 64),
  };

  try {
    const res = await fetch(`${portal}/api/public/enquiries`, {
      method: "POST",
      headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
      body: JSON.stringify(enquiry),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });
    const data = await res.json().catch(() => ({}));
    return json({ ok: res.ok, error: data.error, fields: data.fields }, res.status);
  } catch {
    return json({ ok: false, error: "unavailable" }, 503);
  }
}
