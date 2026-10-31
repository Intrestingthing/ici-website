import Image from "next/image";
import TranslatedPageHeader from "@/components/TranslatedPageHeader";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { getGallery, getTestimonials } from "@/lib/cms";

export const metadata = {
  title: "Gallery",
  description:
    "A glimpse of life at Indian Computer Institute — our computer labs, classrooms, training sessions and student achievements.",
};

/*
  Real institute photos. Once the ICI Portal is connected, photos are managed
  there (Staff › Website › Gallery) and this list is only the backup.
  To change the backup, drop photos in public/images/photos/ and update the
  `src` + `caption` below.
*/
const photos = [
  { src: "/images/photos/computer-lab.jpg", caption: "Our Computer Lab" },
  { src: "/images/photos/training-session.jpg", caption: "Training in Progress" },
  { src: "/images/photos/lab-session.jpg", caption: "Practical Lab Session" },
  { src: "/images/photos/library.jpg", caption: "Our Library" },
  { src: "/images/photos/office.jpg", caption: "Reception & Achievements" },
  { src: "/images/photos/reception.jpg", caption: "Trainer & Staff Office" },
];

// Photos grouped by album, in order of first appearance.
function byAlbum(list) {
  const groups = new Map();
  for (const photo of list) {
    const album = photo.album || "";
    groups.set(album, [...(groups.get(album) ?? []), photo]);
  }
  return [...groups.entries()];
}

export default async function GalleryPage() {
  const [cmsPhotos, testimonials] = await Promise.all([getGallery(), getTestimonials()]);
  const albums = byAlbum(cmsPhotos ?? photos);

  return (
    <>
      <TranslatedPageHeader titleKey="gallery.title" subtitleKey="gallery.subtitle" />

      {/* Photo grid */}
      <section className="section">
        <div className="container-px space-y-12">
          {albums.map(([album, list]) => (
            <div key={album || "photos"}>
              {albums.length > 1 && album && (
                <h2 className="mb-6 font-display text-2xl font-bold text-slate-900">{album}</h2>
              )}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((photo) => (
                  <figure
                    key={photo.src}
                    className="group relative overflow-hidden rounded-2xl shadow-sm"
                  >
                    <Image
                      src={photo.src}
                      alt={`${photo.caption || "Photo"} — ICI Group, Jhunjhunu`}
                      width={600}
                      height={450}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {photo.caption && (
                      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 font-display font-semibold text-white">
                        {photo.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center text-sm text-slate-400">
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
          <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-12 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
            {testimonials.map((t) => (
              <div key={t.name} className="w-[82%] shrink-0 snap-start sm:w-auto sm:shrink">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
