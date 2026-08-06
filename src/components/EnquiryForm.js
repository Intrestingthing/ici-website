"use client";

import { useState } from "react";
import { Send, MessageCircle, CheckCircle2, AlertCircle, Loader2, PhoneCall } from "lucide-react";
import { site } from "@/data/site";
import { courses } from "@/data/courses";

const initialState = {
  name: "",
  phone: "",
  email: "",
  course: "",
  mode: "Classroom",
  message: "",
};

const MODES = ["Classroom", "Online", "Distance"];

export default function EnquiryForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!form.course) next.course = "Please choose a course.";
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

    // If an email backend is configured, send there too (fire-and-forget).
    if (site.formspreeEndpoint) {
      setStatus("loading");
      try {
        const res = await fetch(site.formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setStatus(res.ok ? "success" : "error");
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    // WhatsApp-first: show the thank-you state. We DON'T auto-open WhatsApp
    // (that can be blocked / navigate away and lose the details on mobile).
    // The user taps the button below to send — reliable, no data loss.
    setStatus("success");
  };

  // ---- Success / thank-you state ----
  if (status === "success") {
    return (
      <div className="card flex flex-col items-center p-8 text-center">
        <CheckCircle2 className="text-emerald-500" size={56} />
        <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">
          Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}!
        </h3>
        <p className="mt-2 max-w-md text-slate-600">
          Your enquiry has been noted. <strong>Our counsellor will call you within 24 hours</strong>{" "}
          (Mon–Sat). To reach us faster, tap below to send your details on WhatsApp.
        </p>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn mt-6 w-full bg-emerald-600 text-white hover:bg-emerald-700 sm:w-auto"
        >
          <MessageCircle size={18} /> Send my details on WhatsApp
        </a>
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="mt-3 flex items-center gap-2 text-sm font-semibold text-brand-700"
        >
          <PhoneCall size={16} /> or call {site.phone}
        </a>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setStatus("idle");
          }}
          className="mt-5 text-sm font-medium text-slate-400 underline hover:text-slate-600"
        >
          Submit another enquiry
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
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={update}
            className={inputClass}
            placeholder="e.g. Rahul Sharma"
          />
          {errors.name && <p className={errClass}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number *
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
            placeholder="e.g. 98765 43210"
          />
          {errors.phone && <p className={errClass}>{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email (optional)
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
            placeholder="you@example.com"
          />
          {errors.email && <p className={errClass}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="course" className={labelClass}>
            Course of Interest *
          </label>
          <select
            id="course"
            name="course"
            value={form.course}
            onChange={update}
            className={inputClass}
          >
            <option value="">Select a course…</option>
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
        <legend className={labelClass}>Preferred Mode</legend>
        <div className="grid grid-cols-3 gap-2">
          {MODES.map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setForm({ ...form, mode })}
              aria-pressed={form.mode === mode}
              className={`min-h-12 rounded-xl border px-2 py-3 text-sm font-semibold transition ${
                form.mode === mode
                  ? "border-brand-500 bg-brand-50 text-brand-700 ring-2 ring-brand-100"
                  : "border-slate-200 text-slate-600 hover:border-brand-200"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={update}
          className={inputClass}
          placeholder="Any questions about timings, fees, or the course?"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle size={16} /> Something went wrong. Please try the WhatsApp button below.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-6 w-full py-4 text-base"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send size={18} /> Submit Enquiry
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-slate-400">
        Our counsellor will call you back within 24 hours (Mon–Sat).
      </p>
    </form>
  );
}
