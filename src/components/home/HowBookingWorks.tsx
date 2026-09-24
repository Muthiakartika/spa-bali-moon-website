import BookButton from "@/components/ui/BookButton";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { homePage } from "@/data/pages/home";

/** "How Do You Book Your Spa Experience?" — the three booking steps from the old homepage. */
export default function HowBookingWorks() {
  const { booking } = homePage;
  return (
    <Section tone="sand" labelledBy="booking-heading">
      <SectionHeading id="booking-heading" title={booking.heading} note={booking.eyebrow} />
      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {booking.steps.map((step, i) => (
          <li key={step.number} className="flex flex-col gap-4 rounded-card bg-ivory p-7 sm:p-8">
            <span
              aria-hidden="true"
              className={`numeric inline-flex size-16 items-center justify-center rounded-full font-serif text-[1.9rem] leading-none text-olive ${
                ["bg-taupe/60", "bg-sage/50", "bg-sand"][i % 3]
              }`}
            >
              {step.number}
            </span>
            <h3 className="text-subtitle">{step.title}</h3>
            <p className="text-body text-brown-ink">{step.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <BookButton label={booking.eyebrow} size="lg" />
      </div>
    </Section>
  );
}
