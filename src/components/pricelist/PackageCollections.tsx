import Image from "next/image";
import LotusMark from "@/components/layout/LotusMark";
import { noteClass, titleClass } from "@/components/home/shared";
import PackageCards from "@/components/treatments/PackageCards";
import Container from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { getPackageGroup } from "@/data/packages";
import { pricelistPage } from "@/data/pages/pricelist";
import { getTreatment } from "@/data/treatments";
import type { PackageGroup, SiteImage as SiteImageData } from "@/data/types";
import { packageAnchor } from "./shared";

/**
 * "All Spa Packages — Available In-Spa & with Day Spa at Home", then every package collection
 * as its own section, one after another (as on the live price list page):
 *   intro (warm cream): the text and a row of links to each collection, with the live site's gold icons;
 *   each collection: an arched photo (left or right, alternating), its gold italic note, heading, text
 *   and the four package cards (the homepage's package card, with a small icon per treatment).
 *   Backgrounds alternate white / linen. On phones the photo is small beside the heading and
 *   the cards sit in a row you can swipe.
 * Texts: src/data/pages/pricelist.ts → allPackages. Packages and their texts: src/data/packages.ts.
 * The "Spa Packages" links elsewhere on the site go to #packages.
 */

// The photo shown with each collection: its own photo here, or else the matching treatment page's card photo.
const packagePhoto: Record<string, SiteImageData> = {
  // Not the Balinese card photo, which the "Massage" card at the top of the page already uses.
  "balinese-massage": { src: "/images/treatments/balinese-massage/balinesemassage-2.webp", alt: "", width: 578, height: 601 },
};
const packagePhotoSlug: Record<string, string> = {
  "body-scrub": "body-scrub",
  couples: "couple-spa",
  "cream-bath": "creambath",
  "bali-moon-facial": "facial",
  "hot-stone": "hot-stone-massage",
  "mani-pedi": "manicure-pedicure",
  "thai-massage": "thai-massage",
};

// Phones: the cards become a row you swipe sideways (each card 86% wide, the next one peeking in). Tablet and up: two columns.
const swipeRow =
  "max-sm:-mx-gutter max-sm:grid-flow-col max-sm:auto-cols-[86%] max-sm:snap-x max-sm:snap-mandatory max-sm:overflow-x-auto " +
  "max-sm:scroll-px-gutter max-sm:px-gutter max-sm:pb-2 max-sm:[scrollbar-width:none] max-sm:[&::-webkit-scrollbar]:hidden " +
  "[&>li]:snap-start sm:grid-cols-2";

function GroupIcon({ group, className }: { group: PackageGroup; className: string }) {
  return group.icon ? (
    <Image src={group.icon.src} alt="" width={64} height={66} className={`object-contain ${className}`} />
  ) : (
    <LotusMark className={`text-gold ${className}`} />
  );
}

function CollectionSection({
  group,
  photo,
  tone,
  flip,
  buttonLabel,
  buttonHref,
}: {
  group: PackageGroup;
  photo?: SiteImageData;
  tone: "paper" | "linen";
  /** Photo on the right (every second collection). */
  flip: boolean;
  buttonLabel: string;
  buttonHref?: string;
}) {
  const id = packageAnchor(group.id);
  const headingId = `${id}-heading`;
  // The icon badge has a ring in the band's colour, so it looks cut out of the photo.
  const ring = tone === "linen" ? "border-linen" : "border-paper";

  return (
    <section id={id} aria-labelledby={headingId} className={`py-section ${tone === "linen" ? "bg-linen" : "bg-paper"}`}>
      <Container className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
        {/* Large arched photo (desktop), staying in view while the cards scroll past */}
        {photo && (
          <div className={`hidden lg:sticky lg:top-28 lg:col-span-4 lg:block ${flip ? "lg:order-last" : ""}`}>
            <div className="relative mx-auto max-w-[26rem] pb-8">
              <div data-motion="photo" className="arch relative aspect-[3/4] overflow-hidden">
                <SiteImage image={photo} alt="" fill sizes="(min-width: 1024px) 30vw, 1px" />
              </div>
              <span className={`absolute bottom-0 left-1/2 inline-flex size-16 -translate-x-1/2 items-center justify-center rounded-full border-4 bg-paper ${ring}`}>
                <GroupIcon group={group} className="size-9" />
              </span>
            </div>
          </div>
        )}

        {/* min-w-0: lets the swipe row scroll inside the column instead of widening it */}
        <div className="min-w-0 lg:col-span-8">
          <div className="flex items-center gap-5 sm:gap-7">
            {/* Small arched photo beside the heading (phones and tablets) */}
            {photo && (
              <div className="relative w-[5.5rem] shrink-0 pb-4 sm:w-28 lg:hidden">
                <div className="arch relative aspect-[3/4] overflow-hidden">
                  <SiteImage image={photo} alt="" fill sizes="112px" />
                </div>
                <span className={`absolute bottom-0 left-1/2 inline-flex size-10 -translate-x-1/2 items-center justify-center rounded-full border-[3px] bg-paper sm:size-12 ${ring}`}>
                  <GroupIcon group={group} className="size-6 sm:size-7" />
                </span>
              </div>
            )}
            <div className="min-w-0">
              {group.eyebrow && <p className={noteClass}>{group.eyebrow}</p>}
              <h3 id={headingId} data-motion="rise" className="mt-1.5 font-display text-[clamp(1.9rem,1.35rem+2.2vw,3.25rem)] leading-[1.06]">
                {group.heading ?? group.title}
              </h3>
            </div>
          </div>
          {group.description && <p className="mt-7 max-w-[62ch] text-body leading-[1.75] text-stone">{group.description}</p>}

          <div className="mt-10">
            <PackageCards group={group} headingLevel="h4" buttonLabel={buttonLabel} buttonHref={buttonHref} gridClassName={swipeRow} withIcons dense pricelistWording />
            <p aria-hidden="true" className="mt-5 flex items-center gap-3 text-small text-stone sm:hidden">
              <span className="h-px w-8 bg-gold" />
              Swipe to see all {group.packages.length} packages
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function PackageCollections() {
  const { allPackages } = pricelistPage;
  const groups = allPackages.packageGroups.map(getPackageGroup);

  return (
    <>
      <section id="packages" aria-labelledby="packages-heading" className="relative overflow-hidden bg-cream py-section">
        <TropicalLeaf className="absolute -left-16 top-10 hidden w-64 text-gold/25 md:block" />
        <TropicalLeaf className="absolute -right-16 top-10 hidden w-64 -scale-x-100 text-gold/25 md:block" />
        <Container className="relative flex flex-col items-center text-center">
          <Ornament />
          <p className={`mt-5 ${noteClass}`}>{allPackages.eyebrow}</p>
          <h2 id="packages-heading" data-motion="rise" className={`mt-2 max-w-[22ch] ${titleClass}`}>
            {allPackages.heading}
          </h2>
          <div className="mt-6 max-w-[62ch] space-y-4 text-body leading-[1.75] text-stone">
            {allPackages.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* A link to each collection below */}
          <nav aria-label="Spa package collections" className="mt-10 w-full">
            {/* max width: the eight links wrap as two even rows on large screens */}
            <ul className="mx-auto flex max-w-[48rem] flex-wrap justify-center gap-2 sm:gap-2.5">
              {groups.map((group) => (
                <li key={group.id}>
                  <a
                    href={`#${packageAnchor(group.id)}`}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-gold/30 bg-paper py-1.5 pl-1.5 pr-4 text-[0.875rem] font-semibold text-ink transition-colors duration-(--duration-quick) hover:border-gold-deep hover:text-gold-deep sm:gap-2.5 sm:pl-2 sm:pr-5 sm:text-[0.9375rem]"
                  >
                    <span className="inline-flex size-9 items-center justify-center rounded-full bg-cream">
                      <GroupIcon group={group} className="size-6" />
                    </span>
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {groups.map((group, i) => (
        <CollectionSection
          key={group.id}
          group={group}
          photo={packagePhoto[group.id] ?? getTreatment(packagePhotoSlug[group.id] ?? "")?.cardImage}
          tone={i % 2 === 0 ? "paper" : "linen"}
          flip={i % 2 === 1}
          buttonLabel={allPackages.cardButton.label}
          buttonHref={allPackages.cardButton.href}
        />
      ))}
    </>
  );
}
