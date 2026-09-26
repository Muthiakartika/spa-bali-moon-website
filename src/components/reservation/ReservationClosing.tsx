import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { reservationPage } from "@/data/pages/reservation";
import { SOURCE } from "./shared";

/**
 * The live page's closing booking button and home service note, on a warm cream card
 * (the shape of the homepage's closing invitation). Texts: src/data/pages/reservation.ts.
 */
export default function ReservationClosing() {
  const { buttonLabel, note } = reservationPage;

  return (
    <section aria-label="Book your treatment" className="py-section">
      <Container>
        <div className="relative isolate overflow-hidden rounded-board bg-cream px-6 py-14 text-center sm:px-10 sm:py-16">
          {/* Kept small and faint on phones so they stay clear of the text */}
          <TropicalLeaf className="absolute -left-14 -top-14 -z-10 w-36 text-gold/15 sm:-left-16 sm:-top-10 sm:w-72 sm:text-gold/20" />
          <TropicalLeaf className="absolute -bottom-16 -right-14 -z-10 w-36 -scale-x-100 text-gold/15 sm:-bottom-12 sm:-right-16 sm:w-72 sm:text-gold/20" />
          <Ornament />
          <div className="mt-8">
            <BookButton label={buttonLabel} size="lg" source={SOURCE} className="rounded-full px-8" />
          </div>
          <p className="mt-5 text-small font-semibold text-stone">{note}</p>
        </div>
      </Container>
    </section>
  );
}
