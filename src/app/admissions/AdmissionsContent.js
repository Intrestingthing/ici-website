"use client";

import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import EnquiryForm from "@/components/EnquiryForm";
import Faq from "@/components/Faq";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { useLang } from "@/i18n/LanguageProvider";

const faqs = [
  {
    q: "What are the course fees and do you offer installments?",
    qHi: "कोर्स की फीस कितनी है और क्या किस्त की सुविधा है?",
    a: "Fees vary by course and are kept affordable. We offer easy installment options — please call us or fill the form for the exact fee of your chosen course.",
    aHi: "फीस कोर्स के अनुसार अलग-अलग होती है और किफ़ायती रखी जाती है। हम आसान किस्त विकल्प देते हैं — अपने कोर्स की सटीक फीस के लिए कृपया हमें कॉल करें या फ़ॉर्म भरें।",
  },
  {
    q: "What are the batch timings?",
    qHi: "बैच का समय क्या है?",
    a: "We run morning, afternoon and evening batches (Mon–Sat), so you can choose a time that fits your school, college or job.",
    aHi: "हम सुबह, दोपहर और शाम के बैच चलाते हैं (सोम–शनि), ताकि आप अपने स्कूल, कॉलेज या नौकरी के अनुसार समय चुन सकें।",
  },
  {
    q: "Are the certificates valid / recognised?",
    qHi: "क्या प्रमाणपत्र मान्य / मान्यता-प्राप्त हैं?",
    a: "Yes. We are an authorised centre for RKCL (Govt. of Rajasthan, e.g. RS-CIT), AISECT and Geduconnect, and offer NIELIT 'O' Level — all widely recognised for jobs.",
    aHi: "हाँ। हम RKCL (राजस्थान सरकार, जैसे RS-CIT), AISECT और Geduconnect के अधिकृत केंद्र हैं, और NIELIT 'O' Level भी कराते हैं — सभी नौकरियों के लिए व्यापक रूप से मान्य हैं।",
  },
  {
    q: "Do I need my own computer or laptop for online classes?",
    qHi: "क्या ऑनलाइन क्लास के लिए अपना कंप्यूटर/लैपटॉप चाहिए?",
    a: "For classroom courses, no — you practise on our lab computers. For online/distance learning, a computer or smartphone with internet is recommended so you can practise at home.",
    aHi: "कक्षा कोर्स के लिए नहीं — आप हमारे लैब कंप्यूटर पर अभ्यास करते हैं। ऑनलाइन/डिस्टेंस के लिए इंटरनेट वाला कंप्यूटर या स्मार्टफ़ोन बेहतर है ताकि आप घर पर अभ्यास कर सकें।",
  },
  {
    q: "Is RS-CIT enough for a government job?",
    qHi: "क्या सरकारी नौकरी के लिए RS-CIT पर्याप्त है?",
    a: "RS-CIT is the Government of Rajasthan's recognised computer certificate and is required or preferred for many state government posts. Our counsellor can guide you on which courses suit your goal.",
    aHi: "RS-CIT राजस्थान सरकार का मान्यता-प्राप्त कंप्यूटर प्रमाणपत्र है और कई राज्य सरकार के पदों के लिए आवश्यक या वरीयता-प्राप्त है। हमारे काउंसलर आपको सही कोर्स के बारे में मार्गदर्शन दे सकते हैं।",
  },
  {
    q: "Do you help with placement?",
    qHi: "क्या आप प्लेसमेंट में मदद करते हैं?",
    a: "We provide placement support and guidance, and many of our students work as computer operators, accountants and data-entry operators across the region.",
    aHi: "हम प्लेसमेंट सहायता व मार्गदर्शन देते हैं, और हमारे कई विद्यार्थी क्षेत्र भर में कंप्यूटर ऑपरेटर, अकाउंटेंट और डेटा-एंट्री ऑपरेटर के रूप में कार्यरत हैं।",
  },
];

export default function AdmissionsContent() {
  const { t } = useLang();
  const points = ["adm.p1", "adm.p2", "adm.p3", "adm.p4"];

  return (
    <>
      <PageHeader title={t("adm.title")} subtitle={t("adm.subtitle")} />

      <section className="section">
        <div className="container-px grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="eyebrow">{t("adm.why")}</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-slate-900">{t("adm.whyTitle")}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{t("adm.whyText")}</p>

            <ul className="mt-7 space-y-3">
              {points.map((k) => (
                <li key={k} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span className="text-slate-700">{t(k)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3 rounded-2xl bg-brand-50 p-6">
              <p className="font-display font-semibold text-slate-900">{t("adm.talk")}</p>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-brand-700">
                <Phone size={18} /> <span className="font-medium">{site.phone}</span>
              </a>
              {site.phoneAlt && (
                <a href={`tel:${site.phoneAlt.replace(/\s/g, "")}`} className="flex items-center gap-3 text-brand-700">
                  <Phone size={18} /> <span className="font-medium">{site.phoneAlt}</span>
                </a>
              )}
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-brand-700">
                <Mail size={18} /> <span className="font-medium">{site.email}</span>
              </a>
              <p className="flex items-center gap-3 text-slate-600">
                <Clock size={18} /> {site.hours}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="section bg-slate-50 pt-0">
        <div className="container-px">
          <SectionHeading center eyebrow={t("faq.eyebrow")} title={t("faq.title")} subtitle={t("faq.subtitle")} />
          <div className="mt-10">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
