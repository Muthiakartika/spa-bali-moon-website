import GuestReviews from "@/components/home/GuestReviews";
import HowBookingWorks from "@/components/home/HowBookingWorks";
import BookingOptions from "@/components/reservation/BookingOptions";
import ReservationClosing from "@/components/reservation/ReservationClosing";
import ReservationHero from "@/components/reservation/ReservationHero";
import { SOURCE } from "@/components/reservation/shared";
import { reservationPage } from "@/data/pages/reservation";
import { buildMetadata } from "@/lib/seo";

/**
 * RESERVATION (/reservation/) — the homepage's "Taman" design with the live page's content.
 * The page's own blocks are in src/components/reservation/; booking steps and reviews come from the homepage.
 * Texts: src/data/pages/reservation.ts. Booking happens on WhatsApp (as on the live site).
 * Note: the live page has no H1 (migration-audit SEO-02); its main heading stays an H2 until approved.
 *
 * Layout: hero (heading, text, Book Now) + facts card → the two ways to book, one section each →
 * "How Do You Book" (homepage) → guest reviews (homepage) → Book Now with the home service note.
 */
export const metadata = buildMetadata({
  title: reservationPage.seo.title,
  description: reservationPage.seo.description,
  path: reservationPage.path,
});

export default function ReservationPage() {
  return (
    <>
      <ReservationHero />
      <BookingOptions />
      <HowBookingWorks source={SOURCE} />
      <GuestReviews tone="linen" />
      <ReservationClosing />
    </>
  );
}
