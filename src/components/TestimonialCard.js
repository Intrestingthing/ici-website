import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
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
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 font-display text-sm font-bold text-brand-700">
          {testimonial.initials}
        </span>
        <span>
          <span className="block font-semibold text-slate-900">{testimonial.name}</span>
          <span className="block text-xs text-slate-500">{testimonial.course} Graduate</span>
        </span>
      </figcaption>
    </figure>
  );
}
