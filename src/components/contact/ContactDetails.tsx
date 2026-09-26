import { Clock, MapPin } from "lucide-react";
import LotusMark from "@/components/layout/LotusMark";
import { line, type LineIcon } from "@/components/home/shared";
import Container from "@/components/ui/Container";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { contactPage } from "@/data/pages/contact";
import { whatsappLink } from "@/lib/whatsapp";
import ContactForm from "./ContactForm";
import { capsLabel, cardTitle, SOURCE } from "./shared";

/**
 * "Questions or Bookings — Let’s Arrange Your Visit" beside "Get in Touch — How Can We Help?",
 * as one card (as on the live page): on the left a linen panel with the text and the three contact
 * details (WhatsApp, address, opening times), on the right the form. A thin gold frame and a faint
 * lotus give it the look of the homepage's menu card. On phones the panels stack.
 * Texts: src/data/pages/contact.ts → details, form (opening hours kept as on this page, HOURS-01).
 */

// One icon per contact detail, in the same order as details.items.
const icons: LineIcon[] = [WhatsAppIcon, line(MapPin), line(Clock)];

export default function ContactDetails() {
  const { details, form } = contactPage;

  return (
    <section aria-labelledby="details-heading" className="py-section">
      <Container>
        <div className="relative grid overflow-hidden rounded-board bg-paper shadow-(--shadow-board) lg:grid-cols-12">
          {/* thin gold frame, like the price-menu card */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-2.5 z-10 rounded-[12px] border border-gold/30 sm:inset-4" />

          <div className="relative overflow-hidden bg-linen px-6 py-10 sm:p-12 lg:col-span-5 lg:p-14">
            <LotusMark className="pointer-events-none absolute -bottom-10 -right-10 h-auto w-56 text-gold/10" />
            <p className={capsLabel}>{details.eyebrow}</p>
            <h2 id="details-heading" data-motion="rise" className={`mt-4 ${cardTitle}`}>
              {details.heading}
            </h2>
            <p className="mt-5 max-w-[46ch] text-body leading-[1.75] text-stone">{details.text}</p>
            <ul className="relative mt-9 divide-y divide-gold/20 border-y border-gold/20">
              {details.items.map((item, i) => {
                const Icon = icons[i % icons.length];
                const isWhatsApp = i === 0;
                return (
                  <li key={item.title} className="flex gap-4 py-5">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-paper text-gold-deep">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-gold-deep">{item.title}</p>
                      {isWhatsApp ? (
                        <a
                          href={whatsappLink({ source: SOURCE })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="numeric mt-0.5 inline-block whitespace-nowrap py-0.5 text-[1.0625rem] text-ink underline decoration-gold/50 underline-offset-[0.3em] hover:decoration-gold-deep"
                        >
                          {item.text}
                          <span className="sr-only"> (WhatsApp, opens in a new tab)</span>
                        </a>
                      ) : (
                        <p className="numeric mt-1 text-body text-ink">{item.text}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative px-6 py-10 sm:p-12 lg:col-span-7 lg:p-14">
            <p className={capsLabel}>{form.eyebrow}</p>
            <h2 className={`mt-4 ${cardTitle}`}>{form.heading}</h2>
            <div className="mt-8">
              <ContactForm fields={form.fields} submitLabel={form.submitLabel} resetLabel={form.resetLabel} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
