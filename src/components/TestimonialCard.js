import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  const meta = [testimonial.course, testimonial.year].filter(Boolean).join(" · ");

  return (
    <figure className="card flex h-full flex-col p-6">
      <Quote className="text-brand-200" size={28} />
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
        “{testimonial.quote}”
      </blockquote>
      <div className="mt-5 flex items-center gap-1 text-accent-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? "fill-current" : "text-slate-200"}
          />
        ))}
      </div>
      <figcaption className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
        {testimonial.photo ? (
          <Image
            src={testimonial.photo}
            alt={testimonial.name}
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 font-display text-sm font-bold text-brand-700">
            {testimonial.initials}
          </span>
        )}
        <span className="min-w-0">
          <span className="block font-semibold text-slate-900">{testimonial.name}</span>
          <span className="block text-xs text-slate-500">{meta}</span>
          {testimonial.role && (
            <span className="block text-xs text-brand-600">{testimonial.role}</span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}
