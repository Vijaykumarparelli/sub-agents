"use client";

import { useState } from "react";

type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  form?: string;
};

const SUCCESS_MESSAGE =
  "Thanks for reaching out! An agent will contact you within one business day.";
const GENERIC_ERROR =
  "Something went wrong on our end. Please try again in a moment.";

const fields = [
  {
    name: "name" as const,
    label: "Full name",
    placeholder: "Jane Doe",
    type: "text",
    required: true,
    autoComplete: "name",
  },
  {
    name: "email" as const,
    label: "Email address",
    placeholder: "jane@example.com",
    type: "email",
    required: true,
    autoComplete: "email",
  },
  {
    name: "phone" as const,
    label: "Phone (optional)",
    placeholder: "(608) 555-0123",
    type: "tel",
    required: false,
    autoComplete: "tel",
  },
];

export default function LeadForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined, form: undefined }));
  };

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim()) next.email = "Email is required";
    if (!values.message.trim()) next.message = "Message is required";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const clientErrors = validate();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setStatus("loading");
    setErrors({});

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus("success");
        setValues({ name: "", email: "", phone: "", message: "" });
        return;
      }

      const data = await res.json().catch(() => null);
      if (data && data.errors) {
        setErrors(data.errors as FieldErrors);
      } else {
        setErrors({ form: GENERIC_ERROR });
      }
      setStatus("idle");
    } catch {
      setErrors({ form: GENERIC_ERROR });
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div
            role="status"
            className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-12"
          >
            <p className="text-lg font-medium text-emerald-800">
              {SUCCESS_MESSAGE}
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s Find Your Next Home
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us a little about what you&apos;re looking for and an agent will
            reach out within one business day.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-6">
          {fields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-slate-700"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={values[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                aria-invalid={errors[field.name] ? true : undefined}
                aria-describedby={
                  errors[field.name] ? `${field.name}-error` : undefined
                }
                className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
              />
              {errors[field.name] && (
                <p
                  id={`${field.name}-error`}
                  className="mt-1.5 text-sm text-red-600"
                >
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700"
            >
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              placeholder="I'm looking for a 3-bedroom home near downtown..."
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="mt-2 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-sm text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          {errors.form && (
            <p role="alert" className="text-sm text-red-600">
              {errors.form}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full bg-emerald-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
