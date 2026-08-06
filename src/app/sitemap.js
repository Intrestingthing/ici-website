import { courses } from "@/data/courses";

const siteUrl = "https://iciedu.org";

export default function sitemap() {
  const staticPaths = [
    "",
    "/courses",
    "/library",
    "/distance-learning",
    "/online-learning",
    "/about",
    "/gallery",
    "/contact",
    "/admissions",
  ];

  const lastModified = new Date();

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

  return [...staticRoutes, ...courseRoutes];
}
