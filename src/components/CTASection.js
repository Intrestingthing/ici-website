import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export default function CTASection({
  title = "Ready to start your computer career?",
  subtitle = "Join thousands of students who built their future with us. Talk to our counsellors today — admissions are open.",
}) {
  const waText = encodeURIComponent(
    `Hello ${site.name}, I would like to know more about your courses.`
  );

  return (
    <section className="section">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl bg-brand-800 px-6 py-14 text-center sm:px-12 lg:py-16">
          {/* Faint ICI building watermark */}
          <Image
            src="/images/photos/building.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-[50%_35%] opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 to-brand-800/70" />
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-accent-500/10" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg text-brand-100">{subtitle}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/admissions" className="btn-accent">
                Apply / Enquire Now <ArrowRight size={18} />
              </Link>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
