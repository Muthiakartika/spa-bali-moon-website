import Link from "next/link";
import IntroBlock from "@/components/treatments/IntroBlock";
import ListBlock from "@/components/treatments/ListBlock";
import PageHero from "@/components/treatments/PageHero";
import StatsStrip from "@/components/treatments/StatsStrip";
import TreatmentBoard, { type BoardRow, type BoardTab } from "@/components/treatments/TreatmentBoard";
import BookingCTA from "@/components/ui/BookingCTA";
import FaqSection from "@/components/ui/FaqSection";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import { getPackageGroup } from "@/data/packages";
import { homeServicePage } from "@/data/pages/home-service";
import { rowsForItems } from "@/lib/board";
import { buildMetadata } from "@/lib/seo";

/**
 * HOME SERVICE (/outcall-home-service-massage/)
 * Texts: src/data/pages/home-service.ts · Prices: src/data/pricelist.ts
 */
export const metadata = buildMetadata({
  title: homeServicePage.seo.title,
  description: homeServicePage.seo.description,
  path: homeServicePage.path,
  image: homeServicePage.hero.image,
});

const SOURCE = "Home Service page";

/** Turns the page's list of ids into board rows (including the couple group and couple packages). */
function rowsFor(ids: string[]): BoardRow[] {
  const { prices } = homeServicePage;
  const rows: BoardRow[] = [];
  for (const id of ids) {
    if (id === "group:couple-massage") {
      const groupRows = rowsForItems(prices.coupleMassageGroup.itemIds, "homeService");
      if (groupRows[0]) groupRows[0].details = [`${prices.coupleMassageGroup.name}: ${prices.coupleMassageGroup.description}`];
      rows.push(...groupRows);
    } else if (id === "packages:couples") {
      const group = getPackageGroup("couples");
      group.packages.forEach((pkg, index) => {
        const label = prices.packageLabels[pkg.name as keyof typeof prices.packageLabels];
        rows.push({
          name: label?.heading ?? pkg.name,
          showName: true,
          option: label?.label ?? pkg.name,
          price: pkg.price,
          href: "/seminyak/couple-spa/",
          description: index === 0 ? prices.coupleMassageGroup.packagesDescription : undefined,
        });
      });
    } else {
      rows.push(...rowsForItems([id], "homeService"));
    }
  }
  return rows;
}

export default function HomeServicePage() {
  const { hero, intro, stats, treatmentsList, bookingList, prices, info, faq, cta } = homeServicePage;
  const [firstHighlight, secondHighlight] = intro.highlights;

  const tabs: BoardTab[] = prices.tabs.map((tab, i) => ({ id: `hs-tab-${i}`, label: tab.label, rows: rowsFor(tab.itemIds) }));

  return (
    <>
      <PageHero
        title={hero.title}
        note={hero.eyebrow}
        text={hero.text}
        meta={hero.openingTimes}
        image={hero.image}
        buttonLabel={hero.buttonLabel}
        source={SOURCE}
      />

      <IntroBlock
        id="intro-heading"
        section={{ type: "intro", eyebrow: intro.eyebrow, heading: intro.heading, paragraphs: intro.paragraphs, images: intro.images }}
      />
      {/* The two highlights (one contains a link, so they are written out here) */}
      <Section spacing="bottom">
        <dl className="grid gap-6 border-t border-taupe/60 pt-8 sm:grid-cols-2 lg:ml-[41.66%] lg:pl-16">
          <div>
            <dt className="font-serif text-subtitle">{firstHighlight.title}</dt>
            <dd className="mt-2 text-body text-brown-ink">
              {"textBefore" in firstHighlight && firstHighlight.textBefore}
              {"linkHref" in firstHighlight && firstHighlight.linkHref && (
                <Link href={firstHighlight.linkHref} className="text-olive underline decoration-taupe underline-offset-[0.3em] hover:decoration-olive">
                  {firstHighlight.linkLabel}
                </Link>
              )}
              {"textAfter" in firstHighlight && firstHighlight.textAfter}
            </dd>
          </div>
          <div>
            <dt className="font-serif text-subtitle">{secondHighlight.title}</dt>
            <dd className="mt-2 text-body text-brown-ink">{"text" in secondHighlight && secondHighlight.text}</dd>
          </div>
        </dl>
      </Section>

      <StatsStrip section={{ type: "stats", items: stats }} />

      <ListBlock
        id="treatments-list"
        source={SOURCE}
        section={{
          type: "list",
          eyebrow: treatmentsList.eyebrow,
          heading: treatmentsList.heading,
          paragraphs: treatmentsList.paragraphs,
          items: treatmentsList.items,
          button: { label: treatmentsList.buttonLabel },
          image: treatmentsList.image,
          imageBadge: treatmentsList.imageBadge,
        }}
      />
      <ListBlock
        id="booking-list"
        flip
        source={SOURCE}
        section={{
          type: "list",
          eyebrow: bookingList.eyebrow,
          heading: bookingList.heading,
          paragraphs: bookingList.paragraphs,
          items: bookingList.items,
          button: { label: bookingList.buttonLabel },
          image: bookingList.image,
          imageCaption: bookingList.imageCaption,
        }}
      />

      <Section tone="sand" labelledBy="prices-heading" id="prices">
        <SectionHeading id="prices-heading" title={prices.heading} note={prices.eyebrow} />
        <TreatmentBoard className="mt-12" tabs={tabs} caption="Home service price list" source={SOURCE} collapsedHeight="44rem" />
      </Section>

      <Section labelledBy="info-heading">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="info-heading" title={info.heading} note={info.eyebrow} layout="stacked" />
            <p className="mt-8 rounded-cell bg-olive px-6 py-5 text-lead text-sand">
              {info.feeNote.before}
              <span className="font-semibold text-ivory">{info.feeNote.highlight}</span>
              {info.feeNote.after}
            </p>
            <div className="relative mt-8 hidden aspect-[4/5] overflow-hidden rounded-cell lg:block">
              <SiteImage image={intro.images[1]} fill sizes="30vw" alt="" />
            </div>
          </div>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
            {info.items.map((item) => (
              <li key={item.title} className="border-t border-taupe/60 pt-5">
                <h3 className="font-serif text-subtitle">{item.title}</h3>
                <p className="mt-2 text-body text-brown-ink">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <FaqSection faq={faq} tone="sand" />
      <BookingCTA cta={cta} source={SOURCE} />
    </>
  );
}
