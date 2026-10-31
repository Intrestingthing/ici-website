import { notFound } from "next/navigation";
import CourseDetailContent from "./CourseDetailContent";
import { getCourses, getSite } from "@/lib/cms";
import { courseBySlug, relatedCourses } from "@/lib/courses";

// Courses added later in the portal are rendered on their first visit.
export async function generateStaticParams() {
  const { courses } = await getCourses();
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = courseBySlug((await getCourses()).courses, slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: course.title,
    description: course.short,
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const [{ courses, categories }, site] = await Promise.all([getCourses(), getSite()]);
  const course = courseBySlug(courses, slug);
  if (!course) notFound();

  const related = relatedCourses(courses, course);

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.short,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      address: `${site.address.line1}, ${site.address.line2}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <CourseDetailContent course={course} related={related} categories={categories} />
    </>
  );
}
