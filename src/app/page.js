import HomeContent from "./HomeContent";
import { getCourses, getEvents, getTestimonials } from "@/lib/cms";
import { featuredCourses } from "@/lib/courses";

export default async function Home() {
  const [{ courses }, testimonials, events] = await Promise.all([getCourses(), getTestimonials(), getEvents()]);
  // Testimonials marked "show on home" in the portal come first.
  const homeTestimonials = [...testimonials.filter((t) => t.showOnHome), ...testimonials.filter((t) => !t.showOnHome)];
  return (
    <HomeContent
      featured={featuredCourses(courses)}
      testimonials={homeTestimonials.slice(0, 3)}
      events={events.filter((e) => e.showOnHome).slice(0, 4)}
    />
  );
}
