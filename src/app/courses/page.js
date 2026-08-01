import PageHeader from "@/components/PageHeader";
import CoursesBrowser from "@/components/CoursesBrowser";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Courses",
  description:
    "Explore job-oriented computer courses at Indian Computer Institute — diplomas, accounting, programming, design and IT skills, available in classroom and distance learning modes.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="Our Courses"
        subtitle="From foundation diplomas to programming, accounting and design — pick a course that matches your goals. Most courses are available in both classroom and distance learning modes."
      />
      <section className="section">
        <div className="container-px">
          <CoursesBrowser />
        </div>
      </section>
      <CTASection title="Not sure which course is right for you?" subtitle="Our counsellors will help you choose the perfect course based on your goals and background." />
    </>
  );
}
