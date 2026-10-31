import { notFound } from "next/navigation";
import EventDetailContent from "./EventDetailContent";
import { getEvent, getEvents } from "@/lib/cms";

// Events added later in the portal are rendered on their first visit.
export async function generateStaticParams() {
  return (await getEvents()).map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: event.title,
    description: event.description?.slice(0, 160) || `${event.title} — ICI Group, Jhunjhunu`,
    openGraph: event.cover?.startsWith("http") ? { images: [event.cover] } : undefined,
  };
}

export default async function EventDetailPage({ params }) {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) notFound();
  return <EventDetailContent event={event} />;
}
