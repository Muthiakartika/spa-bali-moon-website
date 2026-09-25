import { ArrowRight, Check, Clock, HandHeart, House, ListChecks, MapPin, Sparkles, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PackageCards from "@/components/treatments/PackageCards";
import SpaMenuCard from "@/components/treatments/SpaMenuCard";
import { treatmentIcon } from "@/components/treatments/treatmentIcon";
import Accordion from "@/components/ui/Accordion";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import LotusMark from "@/components/layout/LotusMark";
import { business } from "@/data/business";
import { footerContent } from "@/data/footer";
import { headerBookingLabel } from "@/data/navigation";
import { getPackageGroup } from "@/data/packages";
import { homePage } from "@/data/pages/home";
import { testimonials } from "@/data/testimonials";
import { liveTreatmentIconSize, liveTreatmentIcons } from "@/data/treatmentIcons";
import type { SiteImage as SiteImageData } from "@/data/types";
import { whatsappLink } from "@/lib/whatsapp";
import AboutBadge from "../AboutBadge";
import { demoPhotos, featuredCards, homeMenuTabs } from "../demoData";
import { Ornament } from "../tirta/Ornament";
import SnapSlider from "../tirta/SnapSlider";
import QuoteSpotlight from "./QuoteSpotlight";

const SOURCE = "Homepage (demo Taman)";
const noteClass = "font-display text-[1.3rem] italic text-gold-deep";
const titleClass = "font-display text-[clamp(2.2rem,1.5rem+2.6vw,3.75rem)] leading-[1.06]";
const pillLink =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/25 px-7 font-semibold text-ink transition-colors hover:border-gold-deep hover:bg-gold-deep hover:text-paper";
const textLink =
  "group inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-gold underline-offset-[0.35em] hover:decoration-ink";

type LineIcon = (props: { className?: string }) => React.ReactElement;

/** A lucide icon drawn with a thin 1.5 line (same props as the WhatsApp icon and the lotus). */
function line(Icon: LucideIcon): LineIcon {
  const ThinIcon = ({ className }: { className?: string }) => <Icon aria-hidden="true" strokeWidth={1.5} className={className} />;
  return ThinIcon;
}
/** The lotus is wider than tall, so it is drawn a little larger to look the same size as the other icons. */
const StepLotus = ({ className = "" }: { className?: string }) => <LotusMark className={`${className} scale-[1.35]`} />;

// Icons for the four "why us" reasons and the three booking steps (same order as the data).
const whyIcons: LineIcon[] = [line(HandHeart), line(House), line(Sparkles), WhatsAppIcon];
const stepIcons: LineIcon[] = [line(ListChecks), WhatsAppIcon, StepLotus];
const ClockIcon = line(Clock);
const PinIcon = line(MapPin);
const HouseIcon = line(House);

// One photo per "why us" reason (same order as whyUs.items), as in Botanica.
const whyPhotos: SiteImageData[] = [demoPhotos.therapists, demoPhotos.villaPool, demoPhotos.scrubWarm, demoPhotos.frangipaniPool];

/** "Our Seminyak Day Spa" → the last two words in gold italic (styling only, the text is unchanged). */
function SplitTitle({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.slice(0, -2).join(" ")} <em className="font-normal italic text-gold-deep">{words.slice(-2).join(" ")}</em>
    </>
  );
}

/**
 * DEMO E · TAMAN — homepage body: Botanica and Tirta combined, like a Balinese water garden.
 * From Botanica: the Bodoni serif with gold italics, arched and round photos, palm fronds, one large review at a time.
 * From Tirta: the easy-to-read Mulish text, the facts card, the live treatment icons, sliders and the lotus ornament.
 * Same content and order as the real homepage (every section, every item); light backgrounds only; spa menu card unchanged.
 */
export default function TamanHome() {
  const { hero, catalog, about, booking, whyUs, moreToEnjoy, packages, faq, cta } = homePage;
  const sharedLine = homePage.featuredTreatments[0]?.text;
  const { contact, daySpa, homeServices } = footerContent;

  // The practical facts under the hero, with the live footer's labels.
  const facts: { icon: LineIcon; label: string; value: string; href?: string; note?: string }[] = [
    { icon: ClockIcon, label: daySpa.openDailyLabel, value: business.openingHours.display },
    { icon: PinIcon, label: daySpa.addressLabel, value: business.address.short, href: business.mapsUrl, note: " (opens Google Maps in a new tab)" },
    { icon: HouseIcon, label: homeServices.feeLabel, value: business.homeService.feeDisplay },
    { icon: WhatsAppIcon, label: contact.phoneLabel, value: business.phoneDisplay, href: whatsappLink({ source: SOURCE }), note: " (WhatsApp, opens in a new tab)" },
  ];

  return (
    <div className="bg-paper text-ink">
      {/* 1 · Hero on cream: the title with a gold italic accent, a garden arch, a round coconut photo and the lotus seal */}
      <section aria-labelledby="home-title" className="relative overflow-hidden bg-cream">
        <TropicalLeaf className="absolute -left-24 top-6 hidden w-80 text-gold/20 lg:block" />
        <Container className="relative grid items-center gap-12 pb-28 pt-10 lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-14">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2.5 text-[0.8125rem] font-bold uppercase tracking-[0.2em] text-gold-deep">
              <LotusMark className="h-5 w-auto text-gold" />
              {about.badge.line}
            </p>
            <h1 id="home-title" className="mt-6 font-display text-[clamp(3.1rem,1.6rem+6vw,7rem)] leading-[0.96]">
              <SplitTitle text={hero.title} />
            </h1>
            <p className="mt-7 max-w-[50ch] text-[1.0625rem] leading-[1.75] text-stone">{hero.text}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <BookButton label={headerBookingLabel} size="lg" source={SOURCE} className="rounded-full px-7" />
              <Link href="/seminyak/" className={pillLink}>
                Explore Treatments
                <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[34rem] lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-full">
              <SiteImage image={demoPhotos.gardenFrangipani} fill priority sizes="(min-width: 1024px) 40vw, 90vw" focus="45% center" />
            </div>
            <div className="absolute -bottom-6 -left-3 size-32 overflow-hidden rounded-full border-[6px] border-cream sm:size-44 lg:-left-10">
              <SiteImage image={demoPhotos.coconuts} alt="" fill sizes="176px" />
            </div>
            <div aria-hidden="true" className="absolute -right-2 top-8 hidden size-24 items-center justify-center rounded-full bg-paper text-gold shadow-(--shadow-board) sm:flex lg:-right-6">
              <LotusMark className="w-3/5" />
            </div>
          </div>
        </Container>
      </section>

      {/* 1b · The practical facts, on a white card that overlaps the hero */}
      <div className="relative z-10 -mt-16">
        <Container>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-board border border-line bg-line shadow-(--shadow-board) lg:grid-cols-4">
            {facts.map(({ icon: Icon, label, value, href, note }) => (
              <li key={label} className="flex flex-col gap-3 bg-paper p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-6">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-cream text-gold-deep">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.8125rem] font-bold text-ink">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="numeric inline-block py-0.5 text-small text-stone underline decoration-gold/40 underline-offset-[0.3em] hover:text-ink hover:decoration-gold-deep">
                      {value}
                      <span className="sr-only">{note}</span>
                    </a>
                  ) : (
                    <p className="numeric text-small text-stone">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* 2 · Featured treatments: arched photos with the live gold icons, in a row you can swipe */}
      <section aria-labelledby="featured-heading" className="relative overflow-hidden pb-section pt-[calc(var(--spacing-section)*0.8)]">
        <TropicalLeaf className="absolute -right-20 top-10 hidden w-80 rotate-[200deg] text-gold/20 lg:block" />
        <Container className="relative">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Ornament className="justify-start" />
              <h2 id="featured-heading" data-motion="rise" className="mt-5 max-w-[16ch] font-display text-[clamp(2.4rem,1.6rem+3vw,4.5rem)] italic leading-[1]">
                {sharedLine}
              </h2>
            </div>
            <Link href="/seminyak/" className={textLink}>
              Explore Treatments
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="mt-12">
            <SnapSlider label="Featured treatments">
              {featuredCards.map((card) => {
                const iconSrc = liveTreatmentIcons[card.name];
                const FallbackIcon = treatmentIcon(card.name);
                return (
                  <li key={card.treatment.slug + card.name} className="group relative w-[68vw] max-w-[18rem] shrink-0 snap-start sm:w-[16rem] lg:w-[calc((100%-3.75rem)/4)] xl:w-[calc((100%-5rem)/5)] xl:max-w-none">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
                      <SiteImage image={card.treatment.cardImage} alt="" fill sizes="(min-width: 1280px) 19vw, (min-width: 1024px) 24vw, 68vw" className="transition-transform duration-(--duration-drift) ease-(--ease-calm) group-hover:scale-[1.05]" />
                    </div>
                    <div className="relative -mt-8 flex flex-col items-center px-2 text-center">
                      <span className="inline-flex size-16 items-center justify-center rounded-full border-4 border-paper bg-cream text-gold-deep">
                        {iconSrc ? (
                          <Image src={iconSrc} alt="" {...liveTreatmentIconSize} unoptimized className="h-9 w-auto" />
                        ) : (
                          <FallbackIcon aria-hidden="true" strokeWidth={1.5} className="size-6" />
                        )}
                      </span>
                      <h3 className="mt-3 font-display text-[1.45rem] italic leading-tight">
                        <Link href={`/seminyak/${card.treatment.slug}/`} className="after:absolute after:inset-0 group-hover:text-gold-deep">
                          {card.name}
                        </Link>
                      </h3>
                      <p className="numeric mt-1 text-small font-semibold text-gold-deep">{card.priceLabel}</p>
                    </div>
                  </li>
                );
              })}
            </SnapSlider>
          </div>
        </Container>
      </section>

      {/* 3 · What makes us different: four arched photos, each with its icon */}
      <section aria-labelledby="why-heading" className="bg-linen py-section">
        <Container>
          <div className="flex flex-col items-center text-center">
            <Ornament />
            <p className={`mt-5 ${noteClass}`}>{whyUs.eyebrow}</p>
            <h2 id="why-heading" data-motion="rise" className={`mt-2 max-w-[20ch] ${titleClass}`}>
              {whyUs.heading}
            </h2>
          </div>
          <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
            {whyUs.items.map((item, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <li key={item.title} data-motion="rise" className="group relative flex flex-col items-center text-center">
                  <div className="arch relative aspect-[3/4] w-full max-w-[18rem] overflow-hidden">
                    <SiteImage image={whyPhotos[i % whyPhotos.length]} alt="" fill sizes="(min-width: 1024px) 22vw, 45vw" className="transition-transform duration-(--duration-drift) ease-(--ease-calm) group-hover:scale-[1.05]" />
                  </div>
                  <span className="relative z-10 -mt-6 inline-flex size-12 items-center justify-center rounded-full border-4 border-linen bg-paper text-gold-deep sm:-mt-7 sm:size-14">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-3 font-display text-[1.2rem] italic leading-tight sm:text-[1.6rem]">
                    <Link href={item.href} className="after:absolute after:inset-0 group-hover:text-gold-deep">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-[30ch] text-[0.8125rem] leading-relaxed text-stone sm:text-small">{item.text}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* 4 · About: arch and circle photos, text with a checked list */}
      <section id="about" aria-labelledby="about-heading" className="py-section">
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative pb-10 lg:col-span-5">
            {about.images[0] && (
              <div data-motion="photo" className="arch relative aspect-[3/4] w-[80%] overflow-hidden">
                <SiteImage image={about.images[0]} fill sizes="(min-width: 1024px) 32vw, 80vw" />
              </div>
            )}
            {about.images[1] && (
              <div data-motion="photo" className="absolute bottom-0 right-0 aspect-square w-[44%] overflow-hidden rounded-full border-8 border-paper">
                <SiteImage image={about.images[1]} fill sizes="(min-width: 1024px) 18vw, 40vw" />
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            <p className={noteClass}>{about.eyebrow}</p>
            <h2 id="about-heading" data-motion="rise" className={`mt-2 ${titleClass}`}>
              {about.heading}
            </h2>
            <p className="mt-6 max-w-[60ch] text-body leading-[1.75] text-stone">{about.text}</p>
            <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {about.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.9375rem]">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-cream text-gold-deep">
                    <Check aria-hidden="true" strokeWidth={2} className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
              <Link href={about.button.href} className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-gold-deep px-7 font-semibold text-paper shadow-(--shadow-button) transition-colors hover:bg-ink">
                {about.button.label}
                <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <AboutBadge />
            </div>
          </div>
        </Container>
      </section>

      {/* 5 · The complete spa menu (the client's approved design, unchanged) */}
      <section id="menu" aria-labelledby="menu-heading" className="relative overflow-hidden bg-linen py-section">
        <TropicalLeaf className="absolute -left-20 bottom-0 hidden w-80 text-gold/20 lg:block" />
        <Container className="relative">
          <SpaMenuCard
            headingId="menu-heading"
            heading={catalog.heading}
            note={catalog.eyebrow}
            feeNote={`${catalog.feeLabel}: ${catalog.feeText}`}
            tabs={homeMenuTabs}
            source={SOURCE}
          />
        </Container>
      </section>

      {/* 6 · How to book: three arched steps, each with its icon */}
      <section aria-labelledby="booking-heading" className="py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-6 lg:col-span-4">
            <p className={noteClass}>{booking.eyebrow}</p>
            <h2 id="booking-heading" data-motion="rise" className={titleClass}>
              {booking.heading}
            </h2>
            <BookButton label={booking.eyebrow} size="lg" source={SOURCE} className="rounded-full px-7" />
          </div>
          <ol className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
            {booking.steps.map((step, i) => {
              const Icon = stepIcons[i % stepIcons.length];
              return (
                <li key={step.number} data-motion="rise" className="flex flex-col items-center rounded-t-full bg-cream/70 px-6 pb-8 pt-12 text-center">
                  <span className="inline-flex size-14 items-center justify-center rounded-full bg-paper text-gold-deep">
                    <Icon className="size-5" />
                  </span>
                  <span aria-hidden="true" className="numeric mt-4 font-display text-[2.75rem] italic leading-none text-gold-deep">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-display text-[1.45rem] leading-tight">{step.title}</h3>
                  <p className="mt-2 text-small leading-relaxed text-stone">{step.text}</p>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* 7 · More to enjoy (between the two hero photos) + spa packages */}
      <section id="packages" aria-labelledby="packages-heading" className="relative overflow-hidden bg-cream py-section">
        <Container>
          {/* On phones: the text first, then the two photos side by side */}
          <div className="grid grid-cols-2 items-center gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-10">
            {hero.images[0] && (
              <div data-motion="photo" className="arch relative order-2 aspect-[3/4] overflow-hidden lg:order-none lg:col-span-3">
                <SiteImage image={hero.images[0]} fill sizes="(min-width: 1024px) 22vw, 45vw" />
              </div>
            )}
            <div className="order-1 col-span-2 mb-6 flex flex-col items-center text-center lg:order-none lg:col-span-6 lg:mb-0">
              <Ornament />
              <p className={`mt-5 ${noteClass}`}>{moreToEnjoy.eyebrow}</p>
              <h2 id="more-heading" data-motion="rise" className={`mt-2 ${titleClass}`}>
                {moreToEnjoy.heading}
              </h2>
              <div className="mt-6 space-y-4 text-body leading-[1.75] text-stone">
                {moreToEnjoy.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            {hero.images[1] && (
              <div data-motion="photo" className="relative order-3 aspect-square overflow-hidden rounded-full lg:order-none lg:col-span-3">
                <SiteImage image={hero.images[1]} fill sizes="(min-width: 1024px) 22vw, 45vw" />
              </div>
            )}
          </div>

          <div className="mt-section grid gap-6 border-t border-gold/25 pt-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className={noteClass}>{packages.eyebrow}</p>
              <h2 id="packages-heading" data-motion="rise" className={`mt-2 ${titleClass}`}>
                {packages.heading}
              </h2>
              <p className="mt-5 max-w-[64ch] text-body leading-[1.75] text-stone">{packages.text}</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/seminyak/#packages" className={pillLink}>
                {packages.button.label}
                <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <PackageCards group={getPackageGroup(packages.packageGroup)} buttonLabel={packages.cardButtonLabel} source={SOURCE} withIcons />
          </div>
        </Container>
      </section>

      {/* 8 · Guest reviews: one large review at a time, all of them */}
      <section aria-labelledby="reviews-heading" className="py-section">
        <h2 id="reviews-heading" className="sr-only">
          Guest reviews
        </h2>
        <Container>
          <QuoteSpotlight reviews={testimonials} />
        </Container>
      </section>

      {/* 9 · Questions */}
      <section aria-labelledby="faq-heading" className="bg-linen py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            {faq.eyebrow && <p className="text-[0.8125rem] font-bold uppercase tracking-[0.2em] text-gold-deep">{faq.eyebrow}</p>}
            <h2 id="faq-heading" className={`mt-4 ${titleClass}`}>
              {faq.heading}
            </h2>
            {faq.subheading && <p className={`mt-2 ${noteClass}`}>{faq.subheading}</p>}
            {faq.image && (
              <div data-motion="photo" className="arch relative mt-10 aspect-[4/3] w-full max-w-[28rem] overflow-hidden lg:aspect-[4/5] lg:w-4/5">
                <SiteImage image={faq.image} fill sizes="(min-width: 1024px) 30vw, 448px" />
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            <Accordion items={faq.items} />
          </div>
        </Container>
      </section>

      {/* 10 · Closing: a cream band, the invitation (gold italic accent) and the photo fading in on the right */}
      <section aria-labelledby="cta-heading" className="py-section">
        <Container>
          <div className="relative isolate overflow-hidden rounded-board bg-cream">
            <div className="relative h-60 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[56%]">
              <SiteImage image={cta.image ?? demoPhotos.villaCurtains} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" focus="60% center" />
              <div aria-hidden="true" className="absolute inset-y-0 -left-px right-0 hidden bg-[linear-gradient(90deg,var(--color-cream)_0%,rgb(242_230_221/0.6)_22%,rgb(242_230_221/0)_50%)] lg:block" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cream to-transparent lg:hidden" />
            </div>
            <TropicalLeaf className="absolute -bottom-16 -left-16 hidden w-64 text-gold/20 lg:block" />
            <div className="relative px-6 pb-10 sm:px-10 lg:max-w-[42rem] lg:px-14 lg:py-20">
              <Ornament className="justify-start" />
              <h2 id="cta-heading" data-motion="rise" className="mt-6 font-display text-[clamp(2.3rem,1.5rem+3vw,4.25rem)] leading-[1.04]">
                <SplitTitle text={cta.heading} />
              </h2>
              {cta.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-body leading-[1.75] text-stone">
                  {paragraph}
                </p>
              ))}
              <div className="mt-9">
                <BookButton label={cta.buttonLabel} size="lg" source={SOURCE} className="rounded-full px-8" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
