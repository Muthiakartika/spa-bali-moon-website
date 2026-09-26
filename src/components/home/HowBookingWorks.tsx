import { ListChecks } from "lucide-react";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { homePage } from "@/data/pages/home";
import { line, LotusIcon, noteClass, SOURCE, titleClass, type LineIcon } from "./shared";

/**
 * "Book via WhatsApp — How Do You Book Your Spa Experience?" ("Taman" design):
 * the title and booking button on the left, the three steps in arched cream frames,
 * each with an icon and a large gold italic number. Texts: src/data/pages/home.ts → booking.
 * Also shown on the Pricelist page (pass that page's `source` for the WhatsApp message).
 */

// One icon per step, in the same order as booking.steps.
const icons: LineIcon[] = [line(ListChecks), WhatsAppIcon, LotusIcon];

export default function HowBookingWorks({ source = SOURCE }: { source?: string }) {
  const { booking } = homePage;

  return (
    <section aria-labelledby="booking-heading" className="py-section">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col items-start gap-6 lg:col-span-4">
          <p className={noteClass}>{booking.eyebrow}</p>
          <h2 id="booking-heading" data-motion="rise" className={titleClass}>
            {booking.heading}
          </h2>
          <BookButton label={booking.eyebrow} size="lg" source={source} className="rounded-full px-7" />
        </div>
        <ol className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
          {booking.steps.map((step, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={step.number} data-motion="rise" className="flex flex-col items-center rounded-t-full bg-cream/70 px-6 pb-8 pt-12 text-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-paper text-gold-deep">
                  <Icon className="size-5" />
                </span>
                <span aria-hidden="true" className="numeric mt-4 font-display text-[2.75rem] italic leading-none text-gold-deep">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-[1.45rem] leading-tight">{step.title}</h3>
                <p className="mt-2 text-small leading-relaxed text-stone">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
