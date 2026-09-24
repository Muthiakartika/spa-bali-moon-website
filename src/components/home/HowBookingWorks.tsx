import BookButton from "@/components/ui/BookButton";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import { homePage } from "@/data/pages/home";
import type { SiteImage as SiteImageData } from "@/data/types";

/**
 * "How Do You Book Your Spa Experience?" — the three booking steps from the old homepage.
 * Layout: heading, booking button and a calm beach photo on the left; the steps as one
 * numbered list on the right (large step number, then title and text).
 */
const bookingPhoto: SiteImageData = { src: "/images/beauty/creambath/creambath-12.webp", alt: "", width: 1920, height: 898 };

export default function HowBookingWorks() {
  const { booking } = homePage;
  return (
    <Section labelledBy="booking-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col items-start gap-8 lg:col-span-5">
          <SectionHeading id="booking-heading" title={booking.heading} note={booking.eyebrow} />
          <BookButton label={booking.eyebrow} size="lg" />
          <div data-motion="photo" className="relative mt-2 hidden aspect-[4/3] w-full overflow-hidden rounded-board sm:block">
            <SiteImage image={bookingPhoto} fill sizes="(min-width: 1024px) 38vw, 90vw" className="object-[40%_center]" />
          </div>
        </div>
        <ol className="divide-y divide-ink/15 border-y border-ink/15 lg:col-span-7 lg:self-center">
          {booking.steps.map((step) => (
            <li key={step.number} data-motion="rise" className="grid grid-cols-[4rem_1fr] gap-4 py-8 sm:grid-cols-[6rem_1fr] sm:gap-6 lg:py-10">
              <span aria-hidden="true" className="numeric font-display text-[2.5rem] font-semibold leading-none tracking-[-0.03em] text-gold sm:text-[3.25rem]">
                {step.number}
              </span>
              <div>
                <h3 className="text-subtitle">{step.title}</h3>
                <p className="mt-2 max-w-[52ch] text-body text-stone">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
