import { Clock, Flower2, HandHeart, MessageCircle, Package, Sparkles } from "lucide-react";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { reservationPage } from "@/data/pages/reservation";
import type { SiteImage as SiteImageData } from "@/data/types";
import { buildMetadata } from "@/lib/seo";

/**
 * RESERVATION (/reservation/) — text in src/data/pages/reservation.ts
 * Booking happens on WhatsApp (as on the old site).
 * Note: the old page had no H1 (migration-audit SEO-02); its main heading stays an H2 until approved,
 * even though it is shown large over the photo.
 *
 * Layout: photo banner with the heading and booking button → the two ways to book
 * (home service / day spa) as photo cards → booking button again with the fee note.
 */
export const metadata = buildMetadata({
  title: reservationPage.seo.title,
  description: reservationPage.seo.description,
  path: reservationPage.path,
});

const SOURCE = "Reservation page";

// Existing site photos: the banner, and one photo per way to book (same order as reservationPage.options).
const bannerPhoto: SiteImageData = { src: "/images/home/homepage-5.webp", alt: "", width: 1920, height: 898 };
const optionPhotos: SiteImageData[] = [
  { src: "/images/gallery/villa-hotel-massage/massagehotelvilla-8.webp", alt: "A villa pool in Bali", width: 1920, height: 898 },
  { src: "/images/treatments/day-spa/dayspa-8.webp", alt: "The garden path to a day spa in Seminyak", width: 1920, height: 898 },
];
const optionIcons = [
  [Package, Sparkles, Clock, MessageCircle],
  [Clock, Flower2, HandHeart, MessageCircle],
];

export default function ReservationPage() {
  const page = reservationPage;
  return (
    <>
      {/* Banner: the page heading over a photo */}
      <section aria-labelledby="reservation-heading" className="relative isolate overflow-hidden bg-ink">
        <SiteImage image={bannerPhoto} fill priority sizes="100vw" focus="60% center" className="-z-10" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10" />
        <Container className="flex min-h-[min(64dvh,32rem)] flex-col justify-end py-16 sm:py-20">
          <div className="max-w-[40rem]">
            <h2 id="reservation-heading" className="text-display text-paper">
              {page.heading}
            </h2>
            <p className="mt-4 text-lead text-linen/90">{page.eyebrow}</p>
            <p className="mt-4 max-w-[52ch] text-body text-linen/85">{page.text}</p>
            <div className="mt-8">
              <BookButton label={page.buttonLabel} source={SOURCE} size="lg" />
            </div>
          </div>
        </Container>
      </section>

      {/* The two ways to book */}
      <section aria-label="Ways to book" className="relative overflow-hidden bg-linen py-section">
        <TropicalLeaf className="absolute -left-20 top-10 w-72 text-gold/20 sm:w-96" />
        <TropicalLeaf className="absolute -bottom-10 -right-20 w-72 -scale-x-100 text-gold/20 sm:w-96" />
        <Container className="relative">
          <div className="grid gap-6 lg:grid-cols-2">
            {page.options.map((option, i) => {
              const photo = optionPhotos[i];
              const icons = optionIcons[i] ?? optionIcons[0];
              return (
                <section
                  key={option.title}
                  aria-labelledby={`option-${i}`}
                  data-motion="rise"
                  className="flex flex-col overflow-hidden rounded-board border border-line bg-paper shadow-(--shadow-board)"
                >
                  {photo && (
                    <div className="relative aspect-[16/7] overflow-hidden">
                      <SiteImage image={photo} fill sizes="(min-width: 1024px) 45vw, 100vw" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-7 sm:p-10">
                    <h3 id={`option-${i}`} className="text-title">
                      {option.title}
                    </h3>
                    <p className="mt-3 text-lead text-stone">{option.text}</p>
                    <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                      {option.items.map((item, k) => {
                        const Icon = icons[k % icons.length];
                        return (
                          <div key={item.title} className="flex gap-4">
                            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-cream">
                              <Icon aria-hidden="true" strokeWidth={1.5} className="size-5 text-gold-deep" />
                            </span>
                            <div>
                              <dt className="font-semibold">{item.title}</dt>
                              <dd className="mt-1 text-small text-stone">{item.text}</dd>
                            </div>
                          </div>
                        );
                      })}
                    </dl>
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <BookButton label={page.buttonLabel} source={SOURCE} size="lg" />
            <p className="text-small text-stone">{page.note}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
