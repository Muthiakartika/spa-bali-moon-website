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
export default function NewsletterForm({ tone = "dark" }: { /** "dark" = on a dark footer, "light" = on a light one. */ tone?: "dark" | "light" }) {
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
          className={
            "min-h-12 w-full min-w-0 flex-1 rounded-control border px-4 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 " +
            (tone === "dark"
              ? "border-linen/35 bg-paper/5 text-paper placeholder:text-linen/70 focus:border-gold-soft focus-visible:outline-gold-soft"
              : "border-stone/45 bg-paper text-ink placeholder:text-stone focus:border-ink focus-visible:outline-gold-deep")
          }
        />
        <button
          type="submit"
          className={
            "min-h-12 shrink-0 rounded-control px-6 font-medium shadow-(--shadow-button) transition-[background-color,transform] duration-(--duration-press) ease-(--ease-calm) active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 " +
            (tone === "dark" ? "bg-paper text-ink hover:bg-cream focus-visible:outline-gold-soft" : "bg-gold-deep text-paper hover:bg-ink focus-visible:outline-gold-deep")
          }
        >
          {newsletter.button}
        </button>
      </div>
      {error && (
        <p id={`${inputId}-error`} role="alert" className={`mt-2 text-small ${tone === "dark" ? "text-gold-soft" : "text-gold-deep"}`}>
          {error}
        </p>
      )}
    </form>
  );
}
