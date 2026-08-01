import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Indian Computer Institute — call, email, visit us, or send an enquiry. We're happy to help.",
};

export default function ContactPage() {
  const waText = encodeURIComponent(`Hello ${site.name}, I have a question.`);

  const cards = [
    {
      icon: Phone,
      title: "Call Us",
      lines: [site.phone, site.phoneAlt].filter(Boolean),
      href: `tel:${site.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: [site.email],
      href: `mailto:${site.email}`,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      lines: ["Chat with us"],
      href: `https://wa.me/${site.whatsapp}?text=${waText}`,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      lines: [site.address.line1, site.address.line2],
    },
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a question about courses, fees or admissions? Reach out — we'd love to hear from you."
      />

      {/* Contact cards */}
      <section className="section pb-0">
        <div className="container-px grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const inner = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <card.icon size={24} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                  {card.title}
                </h3>
                {card.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-slate-600">
                    {line}
                  </p>
                ))}
              </>
            );
            return card.href ? (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                {inner}
              </a>
            ) : (
              <div key={card.title} className="card p-6">
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + map */}
      <section className="section">
        <div className="container-px grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">Send us a message</h2>
            <p className="mt-2 text-slate-600">
              Fill the form below and we'll get back to you as soon as possible.
            </p>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">Find us here</h2>
            <p className="mt-2 flex items-center gap-2 text-slate-600">
              <Clock size={18} className="text-brand-700" /> {site.hours}
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
              <iframe
                title={`${site.name} location map`}
                src={site.mapEmbedSrc}
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-2xl bg-brand-50 p-5">
              <MapPin size={20} className="mt-0.5 shrink-0 text-brand-700" />
              <span className="text-slate-700">
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
