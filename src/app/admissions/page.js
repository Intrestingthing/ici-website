import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import EnquiryForm from "@/components/EnquiryForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Admissions & Enquiry",
  description:
    "Apply or enquire about computer courses at Indian Computer Institute. Fill the form and our counsellors will get back to you quickly.",
};

const points = [
  "Admissions open for all classroom & distance learning courses",
  "Flexible batch timings — morning, afternoon & evening",
  "Easy installment options available",
  "Free career counselling before you join",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        title="Admissions & Enquiry"
        subtitle="Ready to start, or have a question? Fill in the form and our friendly counsellors will get in touch with you shortly."
      />

      <section className="section">
        <div className="container-px grid items-start gap-12 lg:grid-cols-5">
          {/* Info */}
          <div className="lg:col-span-2">
            <span className="eyebrow">Why Apply Now</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-slate-900">
              Take the first step towards your new career
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Whether you know exactly which course you want or need help deciding, we're here to
              guide you. There's no obligation — just fill the form and we'll reach out.
            </p>

            <ul className="mt-7 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3 rounded-2xl bg-brand-50 p-6">
              <p className="font-display font-semibold text-slate-900">Prefer to talk directly?</p>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-brand-700"
              >
                <Phone size={18} /> <span className="font-medium">{site.phone}</span>
              </a>
              {site.phoneAlt && (
                <a
                  href={`tel:${site.phoneAlt.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-brand-700"
                >
                  <Phone size={18} /> <span className="font-medium">{site.phoneAlt}</span>
                </a>
              )}
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-brand-700"
              >
                <Mail size={18} /> <span className="font-medium">{site.email}</span>
              </a>
              <p className="flex items-center gap-3 text-slate-600">
                <Clock size={18} /> {site.hours}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
