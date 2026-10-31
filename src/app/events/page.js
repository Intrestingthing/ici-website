import EventsContent from "./EventsContent";
import { getEvents } from "@/lib/cms";

export const metadata = {
  title: "Events",
  description:
    "Events at ICI Group, Jhunjhunu — seminars, workshops, competitions and celebrations, with photos from past events.",
};

export default async function EventsPage() {
  const events = await getEvents(); // newest first
  return (
    <EventsContent
      upcoming={events.filter((e) => e.upcoming).reverse()}
      past={events.filter((e) => !e.upcoming)}
    />
  );
}
