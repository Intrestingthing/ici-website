import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import EnquiryForm from "@/components/EnquiryForm";
import Faq from "@/components/Faq";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";

export const metadata = {
  title: "Admissions & Enquiry",
  description:
    "Apply or enquire about computer courses & UG/PG programs at ICI Group, Jhunjhunu. Fill the form and our counsellors will call you back quickly.",
};

const points = [
  "Admissions open for all classroom, online & distance courses",
  "Flexible batch timings — morning, afternoon & evening",
  "Easy installment options available",
  "Free career counselling before you join",
];

const faqs = [
  {
    q: "What are the course fees and do you offer installments?",
    a: "Fees vary by course and are kept affordable. We offer easy installment options — please call us or fill the form for the exact fee of your chosen course.",
  },
  {
    q: "What are the batch timings?",
    a: "We run morning, afternoon and evening batches (Mon–Sat), so you can choose a time that fits your school, college or job.",
  },
  {
    q: "Are the certificates valid / recognised?",
    a: "Yes. We are an authorised centre for RKCL (Govt. of Rajasthan, e.g. RS-CIT), AISECT and Geduconnect, and offer NIELIT 'O' Level — all widely recognised for jobs.",
  },
  {
    q: "Do I need my own computer or laptop for online classes?",
    a: "For classroom courses, no — you practise on our lab computers. For online/distance learning, a computer or smartphone with internet is recommended so you can practise at home.",
  },
  {
    q: "Is RS-CIT enough for a government job?",
    a: "RS-CIT is the Government of Rajasthan's recognised computer certificate and is required or preferred for many state government posts. Our counsellor can guide you on which courses suit your goal.",
  },
  {
    q: "Do you help with placement?",
    a: "We provide placement support and guidance, and many of our students work as computer operators, accountants and data-entry operators across the region.",
  },
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

      {/* FAQ */}
      <section className="section bg-slate-50 pt-0">
        <div className="container-px">
          <SectionHeading
            center
            eyebrow="FAQ"
            title="Questions students & parents often ask"
            subtitle="Can't find your answer? Call us or send an enquiry — we're happy to help."
          />
          <div className="mt-10">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
