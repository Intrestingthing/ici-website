// Course list helpers. They work on whichever list is in use — the one from
// the portal or the built-in one in src/data/courses.js.

export const courseBySlug = (courses, slug) => courses.find((course) => course.slug === slug);

export const featuredCourses = (courses) => courses.filter((course) => course.featured);

export const distanceCourses = (courses) => courses.filter((course) => course.distance);

// Courses you can study from home (live online or self-paced), taught by
// Indian Computer Institute — used on the Online Learning hub page.
export const onlineCourses = (courses) =>
  courses.filter(
    (course) => (course.online || course.distance) && course.institute === "indian-computer-institute"
  );

export const relatedCourses = (courses, course, limit = 3) =>
  courses.filter((c) => c.category === course.category && c.slug !== course.slug).slice(0, limit);
