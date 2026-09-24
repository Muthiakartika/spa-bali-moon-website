import { ButtonLink } from "@/components/ui/Button";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import TreatmentBoard from "@/components/treatments/TreatmentBoard";
import { headerBookingLabel } from "@/data/navigation";
import { homePage } from "@/data/pages/home";
import { getPriceItem } from "@/data/pricelist";

/**
 * Homepage hero: the H1 and intro from the old homepage, the two original hero photos,
 * and a small treatment board showing real prices straight away.
 * Text: src/data/pages/home.ts (hero). Board rows: the first price of each item below.
 */
const heroBoardItems = ["balinese-massage", "hot-stone-massage", "couple-balinese-massage"];

export default function Hero() {
  const { hero } = homePage;
  const [photoA, photoB] = hero.images;

  const rows = heroBoardItems.map((id) => {
    const item = getPriceItem(id);
    const first = item.options[0];
    return {
      name: item.homeName ?? item.pricelistName ?? id,
      showName: true,
      option: first.homeLabel ?? first.label,
      price: first.price,
      href: item.pageSlug ? `/seminyak/${item.pageSlug}/` : undefined,
    };
  });

  return (
    <section aria-labelledby="home-title" className="overflow-hidden bg-ivory">
      <Container className="grid gap-12 pb-section pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20">
        <div className="flex flex-col justify-center lg:col-span-5">
          <h1 id="home-title" className="text-display text-olive">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[44ch] text-lead text-brown-ink">{hero.text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <BookButton label={headerBookingLabel} size="lg" />
            <ButtonLink href="/seminyak/" variant="secondary" size="lg">
              Explore Treatments
            </ButtonLink>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          {/* Soft brand shapes behind the photos: a Taupe moon and a Sage leaf */}
          <div aria-hidden="true" className="absolute -right-24 -top-12 size-80 rounded-full bg-taupe/40 sm:size-[28rem]" />
          <div aria-hidden="true" className="absolute -left-10 top-1/3 size-44 rounded-[60%_40%_55%_45%] bg-sage/45 sm:size-56" />
          <div className="relative grid grid-cols-[1.15fr_1fr] items-start gap-4 sm:gap-5">
            {photoA && (
              <div className="arch relative aspect-[388/561] overflow-hidden">
                <SiteImage image={photoA} fill priority sizes="(min-width: 1024px) 30vw, 52vw" />
              </div>
            )}
            {photoB && (
              <div className="relative mt-16 aspect-[337/452] overflow-hidden rounded-card sm:mt-24">
                <SiteImage image={photoB} fill priority sizes="(min-width: 1024px) 26vw, 45vw" />
              </div>
            )}
          </div>
          <TreatmentBoard
            tabs={[{ id: "hero", label: "Treatments", rows }]}
            hideTabs
            caption="A few of our treatment prices"
            source="Homepage"
            className="relative -mt-20 ml-auto w-full sm:-mt-28 sm:w-[88%] lg:w-[94%]"
          />
        </div>
      </Container>
    </section>
  );
}
