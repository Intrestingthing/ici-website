import CoursesContent from "./CoursesContent";
import { getCourses } from "@/lib/cms";

export const metadata = {
  title: "Courses",
  description:
    "Explore job-oriented computer courses & UG/PG programs at ICI Group, Jhunjhunu — RS-CIT, DCA, MDCA, Tally, programming, design and more, in classroom, online and distance modes.",
};

export default async function CoursesPage() {
  const { courses, categories } = await getCourses();
  return <CoursesContent courses={courses} categories={categories} />;
}
