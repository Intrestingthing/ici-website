"use client";

import PageHeader from "@/components/PageHeader";
import CoursesBrowser from "@/components/CoursesBrowser";
import CTASection from "@/components/CTASection";
import { useLang } from "@/i18n/LanguageProvider";

export default function CoursesContent({ courses, categories }) {
  const { t } = useLang();
  return (
    <>
      <PageHeader title={t("courses.pageTitle")} subtitle={t("courses.pageSubtitle")} />
      <section className="section">
        <div className="container-px">
          <CoursesBrowser courses={courses} categories={categories} />
        </div>
      </section>
      <CTASection title={t("courses.ctaTitle")} subtitle={t("courses.ctaSubtitle")} />
    </>
  );
}
