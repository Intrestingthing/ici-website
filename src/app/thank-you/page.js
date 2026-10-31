import Link from "next/link";
import { CheckCircle2, PhoneCall, MessageCircle, Home } from "lucide-react";
import { getSite } from "@/lib/cms";

export const metadata = {
  title: "Thank You",
  description: "Thank you for your enquiry — our counsellor will contact you shortly.",
};

export default async function ThankYouPage() {
  const site = await getSite();
  const waText = encodeURIComponent(`Hello ${site.name}, I just submitted an enquiry on your website.`);

  return (
    <section className="section">
      <div className="container-px mx-auto max-w-2xl text-center">
        <CheckCircle2 className="mx-auto text-emerald-500" size={72} />
        <h1 className="mt-6 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          Thank you for your enquiry!
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
          We&apos;ve received your details. <strong>Our counsellor will call you within 24 hours</strong>{" "}
          (Monday to Saturday). If it&apos;s urgent, reach us right away:
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn-primary">
            <PhoneCall size={18} /> Call {site.phone}
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <MessageCircle size={18} /> WhatsApp us
          </a>
        </div>
        <Link href="/" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
          <Home size={16} /> Back to home
        </Link>
      </div>
    </section>
  );
}
