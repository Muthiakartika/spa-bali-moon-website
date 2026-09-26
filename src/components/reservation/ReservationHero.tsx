import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ArchHero from "@/components/home/ArchHero";
import { pillLink } from "@/components/home/shared";
import VisitFacts from "@/components/home/VisitFacts";
import BookButton from "@/components/ui/BookButton";
import { reservationPage } from "@/data/pages/reservation";
import type { SiteImage as SiteImageData } from "@/data/types";
import { SOURCE } from "./shared";

/**
 * Reservation hero (the shared ArchHero, on warm cream): "Your Spa Experience is One Click Away",
 * "Book Your Treatment" with "Your Treatment" in gold italic, the text, the booking button and the
 * homepage's "Explore Treatments" link; a spa photo in a tall arch with a small round photo.
 * The heading stays an h2 (the live page has no H1, migration-audit SEO-02).
 * Below it, the homepage's facts card (hours, address, home service fee, phone).
 * Texts: src/data/pages/reservation.ts.
 */

// Existing site photos: a head massage (arch) and frangipani by a villa pool (circle).
const archPhoto: SiteImageData = { src: "/images/home/homepage-5.webp", alt: "", width: 1920, height: 898 };
const circlePhoto: SiteImageData = { src: "/images/gallery/home-service/outcall-5.webp", alt: "", width: 1920, height: 898 };

export default function ReservationHero() {
  const page = reservationPage;

  return (
    <>
      <ArchHero
        eyebrow={page.eyebrow}
        title={page.heading}
        titleAs="h2"
        titleId="reservation-heading"
        text={page.text}
        image={archPhoto}
        imageFocus="42% center"
        circleImage={circlePhoto}
        circleFocus="55% center"
        withFactsCard
        actions={
          <>
            <BookButton label={page.buttonLabel} size="lg" source={SOURCE} className="rounded-full px-5 sm:px-7" />
            <Link href="/seminyak/" className={`${pillLink} max-sm:px-5`}>
              Explore Treatments
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </>
        }
      />
      <VisitFacts source={SOURCE} />
    </>
  );
}
