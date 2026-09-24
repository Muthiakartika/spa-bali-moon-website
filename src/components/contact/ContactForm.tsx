"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { business } from "@/data/business";

type Field = { label: string; placeholder: string };

/**
 * Contact form (fields and labels from the old /contact/ page).
 *
 * TEMPORARY BEHAVIOUR (migration-audit FUNC-01): the old site sent the form through its
 * own server, which does not exist any more. Until an email service is chosen, pressing
 * "Send message" opens WhatsApp with the message already written, so no message is lost.
 */
export default function ContactForm({ fields, submitLabel, resetLabel }: { fields: Field[]; submitLabel: string; resetLabel: string }) {
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setError("Please fill in the fields marked with *.");
      return;
    }
    setError(null);
    const data = new FormData(form);
    const lines = [
      "Hi Spa Bali Moon,",
      "",
      `${data.get("message")}`,
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      data.get("phone") ? `Phone / WhatsApp: ${data.get("phone")}` : "",
      `Subject: ${data.get("subject")}`,
      "",
      "(Website: Contact form)",
    ].filter((line, i, all) => line !== "" || all[i - 1] !== "");
    const url = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  // Map the old field labels to form field names and types.
  const config = [
    { name: "name", type: "text", autoComplete: "name" },
    { name: "email", type: "email", autoComplete: "email" },
    { name: "subject", type: "text", autoComplete: "off" },
    { name: "phone", type: "tel", autoComplete: "tel" },
    { name: "message", type: "textarea", autoComplete: "off" },
  ];

  const inputClass =
    "mt-2 w-full rounded-control border border-stone/45 bg-linen/40 px-4 py-3 text-body text-ink placeholder:text-stone " +
    "transition-colors focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-deep";

  return (
    <form onSubmit={onSubmit} onReset={() => setError(null)} noValidate className="grid gap-5 sm:grid-cols-2">
      {fields.map((field, i) => {
        const cfg = config[i];
        const required = field.label.includes("*");
        const id = `contact-${cfg.name}`;
        const wide = cfg.type === "textarea" || cfg.name === "subject";
        return (
          <div key={field.label} className={wide ? "sm:col-span-2" : ""}>
            <label htmlFor={id} className="text-small font-semibold text-ink">
              {field.label}
            </label>
            {cfg.type === "textarea" ? (
              <textarea id={id} name={cfg.name} rows={5} required={required} placeholder={field.placeholder} className={inputClass} />
            ) : (
              <input
                id={id}
                name={cfg.name}
                type={cfg.type}
                required={required}
                autoComplete={cfg.autoComplete}
                placeholder={field.placeholder}
                className={inputClass}
              />
            )}
          </div>
        );
      })}
      <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
        <Button type="submit" size="lg">
          {submitLabel}
        </Button>
        <Button type="reset" variant="secondary" size="lg">
          {resetLabel}
        </Button>
      </div>
      <p className="text-small text-stone sm:col-span-2">Your message opens in WhatsApp, ready to send.</p>
      {error && (
        <p role="alert" className="text-small font-semibold text-ink sm:col-span-2">
          {error}
        </p>
      )}
    </form>
  );
}
