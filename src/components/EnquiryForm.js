"use client";

import { useState } from "react";
import { Send, MessageCircle, CheckCircle2, AlertCircle, Loader2, PhoneCall } from "lucide-react";
import { site } from "@/data/site";
import { courses } from "@/data/courses";
import { useLang } from "@/i18n/LanguageProvider";
import { track } from "@/lib/analytics";

const initialState = {
  name: "",
  phone: "",
  email: "",
  course: "",
  mode: "Classroom",
  message: "",
};

const MODES = [
  { value: "Classroom", key: "form.classroom" },
  { value: "Online", key: "form.online" },
  { value: "Distance", key: "form.distance" },
];

export default function EnquiryForm() {
  const { t } = useLang();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = t("form.errName");
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) next.phone = t("form.errPhone");
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = t("form.errEmail");
    if (!form.course) next.course = t("form.errCourse");
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello ${site.name}, I would like to enquire about admission.\n\n` +
        `Name: ${form.name}\n` +
        `Phone: ${form.phone}\n` +
        (form.email ? `Email: ${form.email}\n` : "") +
        `Course: ${form.course || "Not selected"}\n` +
        `Mode: ${form.mode}\n` +
        (form.message ? `Message: ${form.message}` : "")
    );
    return `https://wa.me/${site.whatsapp}?text=${text}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (site.formspreeEndpoint) {
      setStatus("loading");
      try {
        const res = await fetch(site.formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (res.ok) {
          track("generate_lead", { method: "form", course: form.course });
          setStatus("success");
        } else {
          setStatus("error");
        }
        return;
      } catch {
        setStatus("error");
        return;
      }
    }
    track("generate_lead", { method: "whatsapp", course: form.course });
    setStatus("success");
  };

  // ---- Success / thank-you state ----
  if (status === "success") {
    return (
      <div className="card flex flex-col items-center p-8 text-center">
        <CheckCircle2 className="text-emerald-500" size={56} />
        <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">
          {t("form.thanks")}
          {form.name ? `, ${form.name.split(" ")[0]}` : ""}!
        </h3>
        <p className="mt-2 max-w-md text-slate-600">{t("form.thanksBody")}</p>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { source: "form" })}
          className="btn mt-6 w-full bg-emerald-600 text-white hover:bg-emerald-700 sm:w-auto"
        >
          <MessageCircle size={18} /> {t("form.sendWa")}
        </a>
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          onClick={() => track("call_click", { source: "form_success" })}
          className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-700"
        >
          <PhoneCall size={16} /> {t("form.orCall")} {site.phone}
        </a>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setStatus("idle");
          }}
          className="mt-5 text-sm font-medium text-slate-400 underline hover:text-slate-600"
        >
          {t("form.another")}
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100";
  const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";
  const errClass = "mt-1 text-xs font-medium text-red-500";

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {t("form.name")} *
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={update}
            className={inputClass}
            placeholder={t("form.namePh")}
          />
          {errors.name && <p className={errClass}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            {t("form.phone")} *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update}
            className={inputClass}
            placeholder={t("form.phonePh")}
          />
          {errors.phone && <p className={errClass}>{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            {t("form.email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={form.email}
            onChange={update}
            className={inputClass}
            placeholder={t("form.emailPh")}
          />
          {errors.email && <p className={errClass}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="course" className={labelClass}>
            {t("form.course")} *
          </label>
          <select
            id="course"
            name="course"
            value={form.course}
            onChange={update}
            className={inputClass}
          >
            <option value="">{t("form.selectCourse")}</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
          {errors.course && <p className={errClass}>{errors.course}</p>}
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className={labelClass}>{t("form.mode")}</legend>
        <div className="grid grid-cols-3 gap-2">
          {MODES.map((mode) => (
            <button
              key={mode.value}
              type="button"
              onClick={() => setForm({ ...form, mode: mode.value })}
              aria-pressed={form.mode === mode.value}
              className={`min-h-12 rounded-xl border px-2 py-3 text-sm font-semibold transition ${
                form.mode === mode.value
                  ? "border-brand-500 bg-brand-50 text-brand-700 ring-2 ring-brand-100"
                  : "border-slate-200 text-slate-600 hover:border-brand-200"
              }`}
            >
              {t(mode.key)}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          {t("form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={update}
          className={inputClass}
          placeholder={t("form.messagePh")}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle size={16} /> {t("form.errGeneric")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-6 w-full py-4 text-base"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> {t("form.sending")}
          </>
        ) : (
          <>
            <Send size={18} /> {t("form.submit")}
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-slate-400">{t("form.callback")}</p>
    </form>
  );
}
