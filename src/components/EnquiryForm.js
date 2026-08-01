"use client";

import { useState } from "react";
import { Send, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
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
    if (!form.course) next.course = "Please select a course.";
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

    // No Formspree configured → use WhatsApp as the delivery method.
    if (!site.formspreeEndpoint) {
      window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
      setStatus("success");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center p-8 text-center">
        <CheckCircle2 className="text-emerald-500" size={56} />
        <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">Thank you!</h3>
        <p className="mt-2 max-w-sm text-slate-600">
          {site.formspreeEndpoint
            ? "Your enquiry has been received. Our team will contact you very soon."
            : "We've opened WhatsApp with your details. Send the message and our team will reply shortly."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-6"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100";
  const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";
  const errClass = "mt-1 text-xs font-medium text-red-500";

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      {!site.formspreeEndpoint && (
        <p className="mb-6 flex items-start gap-2 rounded-xl bg-accent-50 px-4 py-3 text-xs text-accent-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>
            <strong>Setup note (visible to site owner):</strong> add your free Formspree endpoint in{" "}
            <code className="rounded bg-white px-1">src/data/site.js</code> to receive enquiries by
            email. Until then, this form sends details via WhatsApp.
          </span>
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
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
        <div className="flex flex-wrap gap-3">
          {["Classroom", "Online", "Distance Learning"].map((mode) => (
            <label
              key={mode}
              className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                form.mode === mode
                  ? "border-brand-500 bg-brand-50 text-brand-700"
                  : "border-slate-200 text-slate-600 hover:border-brand-200"
              }`}
            >
              <input
                type="radio"
                name="mode"
                value={mode}
                checked={form.mode === mode}
                onChange={update}
                className="accent-brand-600"
              />
              {mode}
            </label>
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
          rows={4}
          value={form.message}
          onChange={update}
          className={inputClass}
          placeholder="Any questions about timings, fees, or the course?"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle size={16} /> Something went wrong. Please try again or use WhatsApp below.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="submit" disabled={status === "loading"} className="btn-primary flex-1">
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
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </form>
  );
}
