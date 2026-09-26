import { Check } from "lucide-react";
import LotusMark from "@/components/layout/LotusMark";
import { noteClass, titleClass } from "@/components/home/shared";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import { homeServicePage } from "@/data/pages/home-service";
import { SOURCE } from "./shared";

/**
 * "Reserve Your Home Service Massage — Get Your Massage Service at Home", in the layout of the
 * homepage's About section (mirrored): an arched photo with the round "Home Spa Booking" badge,
 * then the text, the six things to expect (gold checks, two columns) and the booking button.
 * Texts and photo: src/data/pages/home-service.ts → bookingList.
 */
export default function HomeBookingList() {
  const { bookingList } = homeServicePage;

  return (
    <section aria-labelledby="booking-list-heading" className="py-section">
      <Container className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        {bookingList.image && (
          <div className="relative mx-auto w-full max-w-[22rem] pb-6 sm:max-w-[26rem] lg:col-span-5 lg:max-w-none">
            <div data-motion="photo" className="arch relative ml-auto aspect-[4/5] w-[88%] overflow-hidden">
              <SiteImage image={bookingList.image} fill sizes="(min-width: 1024px) 36vw, 384px" />
            </div>
            {bookingList.imageCaption && (
              <p className="absolute bottom-0 left-0 flex size-32 flex-col items-center justify-center rounded-full border-[6px] border-paper bg-cream text-center sm:size-36">
                <LotusMark className="h-5 w-auto text-gold" />
                <span className="mt-1.5 font-display text-[1.25rem] italic leading-tight text-gold-deep sm:text-[1.4rem]">
                  {bookingList.imageCaption.map((word) => (
                    <span key={word} className="block">
                      {word}
                    </span>
                  ))}
                </span>
              </p>
            )}
          </div>
        )}

        <div className="lg:col-span-7">
          <p className={noteClass}>{bookingList.eyebrow}</p>
          <h2 id="booking-list-heading" data-motion="rise" className={`mt-2 max-w-[18ch] ${titleClass}`}>
            {bookingList.heading}
          </h2>
          {bookingList.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-[60ch] text-body leading-[1.75] text-stone">
              {paragraph}
            </p>
          ))}
          <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {bookingList.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.9375rem]">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-cream text-gold-deep">
                  <Check aria-hidden="true" strokeWidth={2} className="size-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <BookButton label={bookingList.buttonLabel} size="lg" source={SOURCE} className="rounded-full px-7" />
          </div>
        </div>
      </Container>
    </section>
  );
}
