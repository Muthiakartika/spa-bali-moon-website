"use client";

import { useId, useState } from "react";
import { footerContent } from "@/data/footer";
import { whatsappNumberLink } from "@/lib/whatsapp";

/**
 * Newsletter sign-up in the footer (same field, button and note as the live website).
 *
 * TEMPORARY BEHAVIOUR (migration-audit FUNC-02): the old site saved the email through its
 * own server (/api/subscribe/), which does not exist any more. Until a mailing-list service
 * is chosen, "Subscribe" opens WhatsApp with the email already written, so no sign-up is lost.
 */
export default function NewsletterForm() {
  const { newsletter } = footerContent;
  const inputId = useId();
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();
    if (!form.checkValidity() || !email) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    const message = ["Hi Spa Bali Moon,", `Please add me to your newsletter: ${email}`, "", "(Website: Footer newsletter)"].join("\n");
    window.open(whatsappNumberLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <label htmlFor={inputId} className="sr-only">
        {newsletter.placeholder}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id={inputId}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={newsletter.placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className="min-h-12 w-full min-w-0 flex-1 rounded-control border border-linen/35 bg-paper/5 px-4 text-paper placeholder:text-linen/70 transition-colors focus:border-gold-soft focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-soft"
        />
        <button
          type="submit"
          className="min-h-12 shrink-0 rounded-control bg-paper px-6 font-medium text-ink shadow-(--shadow-button) transition-[background-color,transform] duration-(--duration-press) ease-(--ease-calm) hover:bg-cream active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-soft"
        >
          {newsletter.button}
        </button>
      </div>
      {error && (
        <p id={`${inputId}-error`} role="alert" className="mt-2 text-small text-gold-soft">
          {error}
        </p>
      )}
    </form>
  );
}
