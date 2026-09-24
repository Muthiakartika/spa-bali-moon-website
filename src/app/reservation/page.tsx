import BookButton from "@/components/ui/BookButton";
import Section from "@/components/ui/Section";
import { reservationPage } from "@/data/pages/reservation";
import { buildMetadata } from "@/lib/seo";

/**
 * RESERVATION (/reservation/) — text in src/data/pages/reservation.ts
 * Booking happens on WhatsApp (as on the old site).
 * Note: the old page had no H1 (migration-audit SEO-02); its main heading stays an H2 until approved.
 */
export const metadata = buildMetadata({
  title: reservationPage.seo.title,
  description: reservationPage.seo.description,
  path: reservationPage.path,
});

export default function ReservationPage() {
  const page = reservationPage;
  return (
    <Section labelledBy="reservation-heading">
      <div className="mx-auto max-w-[52rem] text-center">
        <h2 id="reservation-heading" className="text-display">
          {page.heading}
        </h2>
        <p className="mt-4 font-serif text-[1.4rem] italic text-brown-ink">{page.eyebrow}</p>
        <p className="mx-auto mt-6 max-w-[60ch] text-lead text-brown-ink">{page.text}</p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-board bg-taupe/60 lg:grid-cols-2">
        {page.options.map((option, i) => (
          <section
            key={option.title}
            aria-labelledby={`option-${i}`}
            className={`flex flex-col gap-6 p-8 sm:p-10 ${i === 0 ? "bg-olive text-ivory" : "bg-sand text-olive"}`}
          >
            <h3 id={`option-${i}`} className="text-title">
              {option.title}
            </h3>
            <p className={`text-lead ${i === 0 ? "text-sand" : "text-brown-ink"}`}>{option.text}</p>
            <dl className="grid gap-5 sm:grid-cols-2">
              {option.items.map((item) => (
                <div key={item.title} className={`border-t pt-4 ${i === 0 ? "border-olive-line" : "border-taupe/60"}`}>
                  <dt className="font-semibold">{item.title}</dt>
                  <dd className={`mt-1 text-small ${i === 0 ? "text-sand" : "text-brown-ink"}`}>{item.text}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 text-center">
        <BookButton label={page.buttonLabel} source="Reservation page" size="lg" />
        <p className="text-small text-brown-ink">{page.note}</p>
      </div>
    </Section>
  );
}
