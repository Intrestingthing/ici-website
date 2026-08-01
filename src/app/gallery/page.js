import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { testimonials } from "@/data/testimonials";

export const metadata = {
  title: "Gallery",
  description:
    "A glimpse of life at Indian Computer Institute — our computer labs, classrooms, training sessions and student achievements.",
};

/*
  Real institute photos. To add or change photos, drop them in
  public/images/photos/ and update the `src` + `caption` below.
*/
const photos = [
  { src: "/images/photos/computer-lab.jpg", caption: "Our Computer Lab" },
  { src: "/images/photos/training-session.jpg", caption: "Training in Progress" },
  { src: "/images/photos/lab-session.jpg", caption: "Practical Lab Session" },
  { src: "/images/photos/library.jpg", caption: "Our Library" },
  { src: "/images/photos/office.jpg", caption: "Reception & Achievements" },
  { src: "/images/photos/reception.jpg", caption: "Trainer & Staff Office" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Take a look at our learning environment, training sessions and the moments that make ICI special."
      />

      {/* Photo grid */}
      <section className="section">
        <div className="container-px">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <figure
                key={photo.src}
                className="group relative overflow-hidden rounded-2xl shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  width={600}
                  height={450}
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 font-display font-semibold text-white">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-400">
            A glimpse of our institute, computer labs and training sessions in Jhunjhunu.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="Student Stories"
            title="What our students say"
            subtitle="Hear from learners who transformed their careers with us."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
