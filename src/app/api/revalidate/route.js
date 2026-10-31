import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { CMS_TAGS } from "@/lib/cms";

// Called by the portal right after an edit in Staff › Website, so the change
// shows on the next page load instead of within the hour.
// POST { tags: ["cms:announcements", …] } with "Authorization: Bearer REVALIDATE_SECRET".

const json = (body, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

function bearerMatches(header, secret) {
  const given = Buffer.from((header ?? "").replace(/^Bearer\s+/i, ""));
  const expected = Buffer.from(secret);
  return given.length === expected.length && timingSafeEqual(given, expected);
}

export async function POST(request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || secret.startsWith("change-me")) return json({ ok: false, error: "not_configured" }, 503);
  if (!bearerMatches(request.headers.get("authorization"), secret)) return json({ ok: false, error: "unauthorized" }, 401);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }
  const tags = Array.isArray(body?.tags) ? body.tags.filter((t) => CMS_TAGS.includes(t)) : [];
  if (!tags.length) return json({ ok: false, error: "no_tags" }, 400);

  // Expire now (not stale-while-revalidate): the next visitor gets the new content.
  for (const tag of tags) revalidateTag(tag, { expire: 0 });
  return json({ ok: true, revalidated: tags });
}
