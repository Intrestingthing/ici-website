import { getCourses, getEvents } from "@/lib/cms";

const siteUrl = "https://iciedu.org";

export default async function sitemap() {
  const staticPaths = [
    "",
    "/courses",
    "/library",
    "/distance-learning",
    "/online-learning",
    "/about",
    "/gallery",
    "/events",
    "/contact",
    "/admissions",
  ];

  const lastModified = new Date();
  const [{ courses }, events] = await Promise.all([getCourses(), getEvents()]);

  const staticRoutes = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const courseRoutes = courses.map((course) => ({
    url: `${siteUrl}/courses/${course.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const eventRoutes = events.map((event) => ({
    url: `${siteUrl}/events/${event.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...courseRoutes, ...eventRoutes];
}
