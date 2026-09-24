import { CalendarClock, Check, Clock, HandHeart, House, MessageCircle, Package, Sparkles } from "lucide-react";
import Link from "next/link";
import PhotoHero from "@/components/treatments/PhotoHero";
import SpaMenuCard from "@/components/treatments/SpaMenuCard";
import type { BoardRow, BoardTab } from "@/components/treatments/TreatmentBoard";
import BookButton from "@/components/ui/BookButton";
import BookingCTA from "@/components/ui/BookingCTA";
import Container from "@/components/ui/Container";
import FaqSection from "@/components/ui/FaqSection";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { getPackageGroup } from "@/data/packages";
import { homeServicePage } from "@/data/pages/home-service";
import type { SiteImage as SiteImageData } from "@/data/types";
import { rowsForItems } from "@/lib/board";
import { buildMetadata } from "@/lib/seo";

/**
 * HOME SERVICE (/outcall-home-service-massage/)
 * Texts: src/data/pages/home-service.ts · Prices: src/data/pricelist.ts
 *
 * Layout: photo hero → intro with photos → four facts band → treatments you can book at home →
 * booking band over a villa photo → price list (spa menu card) → what is included → FAQ → booking.
 */
export const metadata = buildMetadata({
  title: homeServicePage.seo.title,
  description: homeServicePage.seo.description,
  path: homeServicePage.path,
  image: homeServicePage.hero.image,
});

const SOURCE = "Home Service page";

// Existing site photo (a villa pool) behind the "Get Your Massage Service at Home" band.
const villaPhoto: SiteImageData = { src: "/images/gallery/villa-hotel-massage/massagehotelvilla-8.webp", alt: "", width: 1920, height: 898 };

// One icon per fact / info item, in the same order as the data.
const statIcons = [MessageCircle, House, Package, Clock];
const infoIcons = [HandHeart, Sparkles, Package, Clock, CalendarClock, MessageCircle];

/** Turns the page's list of ids into price rows (including the couple group and couple packages). */
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

/** "Couple Massage — Relax side by side…" → name and text (the old site wrote them in one line). */
function splitItem(item: string): { name: string; text: string } {
  const [name, ...rest] = item.split(" — ");
  return rest.length ? { name, text: rest.join(" — ") } : { name: "", text: item };
}

export default function HomeServicePage() {
  const { hero, intro, stats, treatmentsList, bookingList, prices, info, faq, cta } = homeServicePage;
  const [firstHighlight, secondHighlight] = intro.highlights;
  const [introPhotoA, introPhotoB] = intro.images;

  const tabs: BoardTab[] = prices.tabs.map((tab, i) => ({ id: `hs-tab-${i}`, label: tab.label, rows: rowsFor(tab.itemIds) }));

  return (
    <>
      <PhotoHero
        title={hero.title}
        note={hero.eyebrow}
        text={hero.text}
        meta={hero.openingTimes}
        image={hero.image}
        buttonLabel={hero.buttonLabel}
        source={SOURCE}
        focus="70% center"
      />

      {/* Intro: photos + text + the two highlights */}
      <section aria-labelledby="intro-heading" className="relative overflow-hidden bg-paper py-section">
        <TropicalLeaf className="absolute -bottom-16 -right-16 w-72 -scale-x-100 text-gold/20 sm:w-96" />
        <Container className="relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative pb-12 lg:col-span-5">
            {introPhotoA && (
              <div data-motion="photo" className="arch relative aspect-[4/5] w-[82%] overflow-hidden">
                <SiteImage image={introPhotoA} fill sizes="(min-width: 1024px) 34vw, 80vw" />
              </div>
            )}
            {introPhotoB && (
              <div data-motion="photo" className="absolute bottom-0 right-0 aspect-square w-[46%] overflow-hidden rounded-full border-[6px] border-paper shadow-(--shadow-board)">
                <SiteImage image={introPhotoB} fill sizes="(min-width: 1024px) 20vw, 45vw" />
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            <SectionHeading id="intro-heading" title={intro.heading} note={intro.eyebrow} intro={intro.paragraphs} />
            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              <div data-motion="rise" className="rounded-card border border-line bg-paper p-6">
                <MessageCircle aria-hidden="true" strokeWidth={1.5} className="size-7 text-gold" />
                <dt className="mt-4 text-subtitle">{firstHighlight.title}</dt>
                <dd className="mt-2 text-body text-stone">
                  {"textBefore" in firstHighlight && firstHighlight.textBefore}
                  {"linkHref" in firstHighlight && firstHighlight.linkHref && (
                    <Link href={firstHighlight.linkHref} className="text-ink underline decoration-gold underline-offset-[0.3em] hover:decoration-ink">
                      {firstHighlight.linkLabel}
                    </Link>
                  )}
                  {"textAfter" in firstHighlight && firstHighlight.textAfter}
                </dd>
              </div>
              <div data-motion="rise" className="rounded-card border border-line bg-paper p-6">
                <House aria-hidden="true" strokeWidth={1.5} className="size-7 text-gold" />
                <dt className="mt-4 text-subtitle">{secondHighlight.title}</dt>
                <dd className="mt-2 text-body text-stone">{"text" in secondHighlight && secondHighlight.text}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {/* Four short facts on a dark gold band */}
      <div className="bg-gold-night text-linen">
        <Container>
          <ul className="grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4 lg:py-12">
            {stats.map((stat, i) => {
              const Icon = statIcons[i % statIcons.length];
              return (
                <li key={stat.title + stat.text} className="flex items-center gap-4">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-gold-soft/40">
                    <Icon aria-hidden="true" strokeWidth={1.5} className="size-5 text-gold-soft" />
                  </span>
                  <span>
                    <span className="block text-[1.125rem] font-semibold text-paper">{stat.title}</span>
                    <span className="block text-small text-linen/80">{stat.text}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>

      {/* Treatments you can book at home */}
      <Section tone="linen" labelledBy="treatments-list">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              {treatmentsList.image && (
                <div data-motion="photo" className="arch relative aspect-[4/5] overflow-hidden">
                  <SiteImage image={treatmentsList.image} fill sizes="(min-width: 1024px) 30vw, 100vw" />
                </div>
              )}
              {treatmentsList.imageBadge && (
                <p className="mt-5 flex items-baseline gap-3">
                  <span className="font-display text-[2rem] font-semibold leading-none tracking-[-0.02em] text-gold-deep">{treatmentsList.imageBadge[0]}</span>
                  <span className="text-small text-stone">{treatmentsList.imageBadge.slice(1).join(" ")}</span>
                </p>
              )}
            </div>
          </div>
          <div className="lg:col-span-8">
            <SectionHeading id="treatments-list" title={treatmentsList.heading} note={treatmentsList.eyebrow} intro={treatmentsList.paragraphs} />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {treatmentsList.items.map((item) => {
                const { name, text } = splitItem(item);
                return (
                  <li key={item} data-motion="rise" className="rounded-card border border-line bg-paper p-5">
                    {name && <p className="text-[1.0625rem] font-semibold">{name}</p>}
                    <p className="mt-1 text-small text-stone">{text}</p>
                  </li>
                );
              })}
            </ul>
            <div className="mt-10">
              <BookButton label={treatmentsList.buttonLabel} source={SOURCE} size="lg" />
            </div>
          </div>
        </div>
      </Section>

      {/* "Get Your Massage Service at Home" over a villa photo */}
      <section aria-labelledby="booking-list" className="relative isolate overflow-hidden bg-ink">
        <SiteImage image={villaPhoto} fill sizes="100vw" className="-z-10" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/40" />
        <Container className="grid gap-12 py-section lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 id="booking-list" data-motion="rise" className="max-w-[18ch] text-title text-paper">
              {bookingList.heading}
            </h2>
            <p className="mt-3 text-lead text-linen/85">{bookingList.eyebrow}</p>
            {bookingList.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 max-w-[60ch] text-body text-linen/85">
                {paragraph}
              </p>
            ))}
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {bookingList.items.map((item) => (
                <li key={item} className="flex gap-3 text-paper">
                  <Check aria-hidden="true" strokeWidth={1.75} className="mt-1 size-4 shrink-0 text-gold-soft" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <BookButton label={bookingList.buttonLabel} source={SOURCE} size="lg" variant="light" />
            </div>
          </div>
          {bookingList.image && (
            <figure className="hidden lg:col-span-4 lg:col-start-9 lg:block">
              <div data-motion="photo" className="relative aspect-[570/496] overflow-hidden rounded-board border-8 border-paper/10">
                <SiteImage image={bookingList.image} fill sizes="30vw" />
              </div>
              {bookingList.imageCaption && <figcaption className="mt-4 text-lead font-semibold text-paper">{bookingList.imageCaption.join(" ")}</figcaption>}
            </figure>
          )}
        </Container>
      </section>

      {/* Prices, styled like a printed spa menu */}
      <section id="prices" aria-labelledby="prices-heading" className="relative overflow-hidden bg-linen py-section">
        <TropicalLeaf className="absolute -right-20 top-0 w-72 rotate-[200deg] text-gold/25 sm:w-96" />
        <Container className="relative">
          <SpaMenuCard headingId="prices-heading" heading={prices.heading} note={prices.eyebrow} tabs={tabs} source={SOURCE} />
        </Container>
      </section>

      {/* What is included */}
      <Section labelledBy="info-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading id="info-heading" title={info.heading} note={info.eyebrow} />
            <p className="mt-8 rounded-card bg-gold-night px-6 py-5 text-lead text-linen">
              {info.feeNote.before}
              <span className="font-semibold text-gold-soft">{info.feeNote.highlight}</span>
              {info.feeNote.after}
            </p>
            {introPhotoB && (
              <div data-motion="photo" className="relative mt-8 hidden aspect-[4/5] overflow-hidden rounded-board lg:block">
                <SiteImage image={introPhotoB} fill sizes="30vw" alt="" />
              </div>
            )}
          </div>
          <ul className="grid content-start gap-4 sm:grid-cols-2 lg:col-span-8">
            {info.items.map((item, i) => {
              const Icon = infoIcons[i % infoIcons.length];
              return (
                <li key={item.title} data-motion="rise" className="rounded-card border border-line bg-paper p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-cream">
                    <Icon aria-hidden="true" strokeWidth={1.5} className="size-5 text-gold-deep" />
                  </span>
                  <h3 className="mt-4 text-subtitle">{item.title}</h3>
                  <p className="mt-2 text-body text-stone">{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      <FaqSection faq={faq} tone="linen" />
      <BookingCTA cta={cta} source={SOURCE} />
    </>
  );
}
