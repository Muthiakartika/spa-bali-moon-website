import { ArrowRight, ArrowUpRight, Check, Clock, HandHeart, House, ListChecks, MapPin, Quote, Sparkles, type LucideIcon } from "lucide-react";
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
import LotusMark from "@/components/layout/LotusMark";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { business } from "@/data/business";
import { footerContent } from "@/data/footer";
import { headerBookingLabel } from "@/data/navigation";
import { getPackageGroup } from "@/data/packages";
import { homePage } from "@/data/pages/home";
import { testimonials } from "@/data/testimonials";
import { liveTreatmentIconSize, liveTreatmentIcons } from "@/data/treatmentIcons";
import { whatsappLink } from "@/lib/whatsapp";
import AboutBadge from "@/components/home/AboutBadge";
import { demoPhotos, featuredCards, homeMenuTabs } from "../demoData";
import { Ornament } from "@/components/ui/Ornament";
import SnapSlider from "@/components/ui/SnapSlider";

const SOURCE = "Homepage (demo Tirta)";
const eyebrowClass = "text-[0.8125rem] font-bold uppercase tracking-[0.2em] text-gold-deep";
const titleClass = "font-display text-[clamp(2rem,1.45rem+2.2vw,3.25rem)] leading-[1.12]";
const pillLink =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/25 px-7 font-semibold text-ink transition-colors hover:border-gold-deep hover:bg-gold-deep hover:text-paper";

type LineIcon = (props: { className?: string }) => React.ReactElement;

/** A lucide icon drawn with the thin 1.5 line used across this demo (same props as the WhatsApp icon and the lotus). */
function line(Icon: LucideIcon): LineIcon {
  const ThinIcon = ({ className }: { className?: string }) => <Icon aria-hidden="true" strokeWidth={1.5} className={className} />;
  return ThinIcon;
}

// Icons for the four "why us" reasons (same order as whyUs.items) and the three booking steps.
const whyIcons: LineIcon[] = [line(HandHeart), line(House), line(Sparkles), WhatsAppIcon];
/** The lotus is wider than tall, so it is drawn a little larger to look the same size as the other icons. */
const StepLotus = ({ className = "" }: { className?: string }) => <LotusMark className={`${className} scale-[1.35]`} />;
const stepIcons: LineIcon[] = [line(ListChecks), WhatsAppIcon, StepLotus];
const ClockIcon = line(Clock);
const PinIcon = line(MapPin);
const HouseIcon = line(House);

/**
 * DEMO D · TIRTA — homepage body. A calm Bali day spa on white and linen:
 * an elegant serif (Gilda Display) with a soft, very readable text face (Mulish), bright garden
 * and villa photos, the live site's gold treatment icons and the Spa Bali Moon lotus as ornament. Light backgrounds only.
 * Same content and order as the real homepage (every section, every item); the spa menu card is unchanged.
 */
export default function TirtaHome() {
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
      {/* 1 · Hero: a sunlit frangipani garden fading into linen, the title on the left */}
      <section aria-labelledby="home-title" className="relative isolate overflow-hidden bg-linen">
        <div className="relative h-[40vh] min-h-64 sm:h-[50vh] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[66%]">
          <SiteImage image={demoPhotos.gardenFrangipani} fill priority sizes="(min-width: 1024px) 66vw, 100vw" focus="45% center" />
          <div aria-hidden="true" className="absolute inset-y-0 -left-px right-0 hidden bg-[linear-gradient(90deg,var(--color-linen)_0%,rgb(245_242_236/0.75)_22%,rgb(245_242_236/0)_55%)] lg:block" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-linen to-transparent lg:hidden" />
        </div>
        <Container className="relative lg:flex lg:min-h-[min(80dvh,48rem)] lg:items-center">
          <div className="-mt-16 pb-24 sm:-mt-20 lg:mt-0 lg:max-w-[38rem] lg:py-28">
            <p className={`inline-flex items-center gap-2.5 ${eyebrowClass}`}>
              <LotusMark className="h-5 w-auto text-gold" />
              {about.badge.line}
            </p>
            <h1 id="home-title" className="mt-5 font-display text-[clamp(2.9rem,1.8rem+4.6vw,5.5rem)] leading-[1.02]">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-[48ch] text-[1.0625rem] leading-[1.75] text-stone">{hero.text}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <BookButton label={headerBookingLabel} size="lg" source={SOURCE} className="rounded-full px-7" />
              <Link href="/seminyak/" className={pillLink}>
                Explore Treatments
                <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 1b · The practical facts, on a white card that overlaps the hero */}
      <div className="relative z-10 -mt-14">
        <Container>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-board border border-line bg-line shadow-(--shadow-board) lg:grid-cols-4">
            {facts.map(({ icon: Icon, label, value, href, note }) => (
              <li key={label} className="flex flex-col gap-3 bg-paper p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-6">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-linen text-gold-deep">
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

      {/* 2 · Featured treatments: all of them in a row you can swipe, each with its icon from the live site */}
      <section aria-labelledby="featured-heading" className="pb-section pt-[calc(var(--spacing-section)*0.8)]">
        <Container>
          <div className="flex flex-col items-center text-center">
            <Ornament />
            <h2 id="featured-heading" data-motion="rise" className={`mt-5 max-w-[22ch] ${titleClass}`}>
              {sharedLine}
            </h2>
          </div>
          <div className="mt-12">
            <SnapSlider label="Featured treatments">
              {featuredCards.map((card) => {
                const iconSrc = liveTreatmentIcons[card.name];
                const FallbackIcon = treatmentIcon(card.name);
                return (
                  <li key={card.treatment.slug + card.name} className="group relative w-[72vw] max-w-[19rem] shrink-0 snap-start sm:w-[16.5rem] lg:w-[calc((100%-3.75rem)/4)] xl:w-[calc((100%-5rem)/5)] xl:max-w-none">
                    <div className="h-full overflow-hidden rounded-card border border-line bg-paper transition-shadow duration-(--duration-base) group-hover:shadow-(--shadow-board)">
                      <div className="relative aspect-[4/3.3] overflow-hidden">
                        <SiteImage image={card.treatment.cardImage} alt="" fill sizes="(min-width: 1280px) 19vw, (min-width: 1024px) 24vw, 72vw" className="transition-transform duration-(--duration-drift) ease-(--ease-calm) group-hover:scale-[1.05]" />
                      </div>
                      <div className="relative px-5 pb-5 pt-11">
                        <span className="absolute -top-8 left-5 inline-flex size-16 items-center justify-center rounded-full border-4 border-paper bg-linen text-gold-deep">
                          {iconSrc ? (
                            <Image src={iconSrc} alt="" {...liveTreatmentIconSize} unoptimized className="h-9 w-auto" />
                          ) : (
                            <FallbackIcon aria-hidden="true" strokeWidth={1.5} className="size-6" />
                          )}
                        </span>
                        <h3 className="font-display text-[1.375rem] leading-tight">
                          <Link href={`/seminyak/${card.treatment.slug}/`} className="after:absolute after:inset-0">
                            {card.name}
                          </Link>
                        </h3>
                        <div className="mt-2 flex items-center justify-between gap-3">
                          <p className="numeric text-small font-semibold text-gold-deep">{card.priceLabel}</p>
                          <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="size-5 shrink-0 text-stone transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-deep" />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </SnapSlider>
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/seminyak/" className={pillLink}>
              Explore Treatments
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 3 · What makes us different: the two hero photos beside four reasons */}
      <section aria-labelledby="why-heading" className="relative overflow-hidden bg-linen py-section">
        <TropicalLeaf className="absolute -left-24 -top-10 hidden w-80 text-gold/20 lg:block" />
        <Container className="relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative pb-10 lg:col-span-5">
            {hero.images[0] && (
              <div data-motion="photo" className="arch relative aspect-[3/4] w-[74%] overflow-hidden">
                <SiteImage image={hero.images[0]} fill sizes="(min-width: 1024px) 30vw, 72vw" />
              </div>
            )}
            {hero.images[1] && (
              <div data-motion="photo" className="absolute bottom-0 right-0 aspect-[3/4] w-[46%] overflow-hidden rounded-board border-8 border-linen">
                <SiteImage image={hero.images[1]} fill sizes="(min-width: 1024px) 18vw, 45vw" />
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            <p className={eyebrowClass}>{whyUs.eyebrow}</p>
            <h2 id="why-heading" data-motion="rise" className={`mt-4 max-w-[20ch] ${titleClass}`}>
              {whyUs.heading}
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {whyUs.items.map((item, i) => {
                const Icon = whyIcons[i % whyIcons.length];
                return (
                  <li key={item.title} data-motion="rise" className="group relative rounded-card border border-transparent bg-paper p-6 transition-colors hover:border-gold/40">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-linen text-gold-deep">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 font-display text-[1.375rem] leading-tight">
                      <Link href={item.href} className="after:absolute after:inset-0">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-small leading-relaxed text-stone">{item.text}</p>
                    <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="absolute right-5 top-6 size-5 text-stone transition-colors group-hover:text-gold-deep" />
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>

      {/* 4 · About: text and checklist on the left, the two about photos on the right */}
      <section id="about" aria-labelledby="about-heading" className="py-section">
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <p className={eyebrowClass}>{about.eyebrow}</p>
            <h2 id="about-heading" data-motion="rise" className={`mt-4 ${titleClass}`}>
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
          <div className="order-1 grid grid-cols-5 items-start gap-4 lg:order-2 lg:col-span-6">
            {about.images[0] && (
              <div data-motion="photo" className="relative col-span-3 aspect-[3/4.6] overflow-hidden rounded-board">
                <SiteImage image={about.images[0]} fill sizes="(min-width: 1024px) 28vw, 58vw" />
              </div>
            )}
            {about.images[1] && (
              <div className="col-span-2 mt-16 flex flex-col gap-4 sm:mt-24">
                <div data-motion="photo" className="relative aspect-[3/4.6] overflow-hidden rounded-board">
                  <SiteImage image={about.images[1]} fill sizes="(min-width: 1024px) 19vw, 38vw" />
                </div>
                <div aria-hidden="true" className="flex aspect-square items-center justify-center rounded-board bg-cream text-gold">
                  <LotusMark className="w-3/5" />
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 5 · The complete spa menu (the client's approved design, unchanged) */}
      <section id="menu" aria-labelledby="menu-heading" className="relative overflow-hidden bg-linen py-section">
        <TropicalLeaf className="absolute -right-24 top-16 hidden w-80 -scale-x-100 text-gold/20 lg:block" />
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

      {/* 6 · How to book: a soft cream panel with the villa photo and three steps */}
      <section aria-labelledby="booking-heading" className="py-section">
        <Container>
          <div className="grid overflow-hidden rounded-board bg-cream/70 lg:grid-cols-12">
            <div data-motion="photo" className="relative min-h-64 sm:min-h-80 lg:col-span-4 lg:min-h-0">
              <SiteImage image={demoPhotos.villaCurtains} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" focus="40% center" />
            </div>
            <div className="p-6 py-10 sm:p-10 lg:col-span-8 lg:p-14">
              <p className={eyebrowClass}>{booking.eyebrow}</p>
              <h2 id="booking-heading" data-motion="rise" className={`mt-4 max-w-[20ch] ${titleClass}`}>
                {booking.heading}
              </h2>
              <ol className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-0">
                {booking.steps.map((step, i) => {
                  const Icon = stepIcons[i % stepIcons.length];
                  return (
                    <li key={step.number} data-motion="rise" className="sm:border-l sm:border-gold/30 sm:px-6 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex size-12 items-center justify-center rounded-full bg-paper text-gold-deep">
                          <Icon className="size-5" />
                        </span>
                        <span className="numeric font-display text-[1.5rem] text-gold-deep">{step.number}</span>
                      </div>
                      <h3 className="mt-4 font-display text-[1.375rem] leading-tight">{step.title}</h3>
                      <p className="mt-2 text-small leading-relaxed text-stone">{step.text}</p>
                    </li>
                  );
                })}
              </ol>
              <div className="mt-10">
                <BookButton label={booking.eyebrow} size="lg" source={SOURCE} className="rounded-full px-7" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7 · More to enjoy + spa packages */}
      <section id="packages" aria-labelledby="packages-heading" className="bg-linen py-section">
        <Container>
          <div className="mx-auto flex max-w-[50rem] flex-col items-center text-center">
            <Ornament />
            <p className={`mt-5 ${eyebrowClass}`}>{moreToEnjoy.eyebrow}</p>
            <h2 id="more-heading" data-motion="rise" className={`mt-4 ${titleClass}`}>
              {moreToEnjoy.heading}
            </h2>
            <div className="mt-6 space-y-4 text-body leading-[1.75] text-stone">
              {moreToEnjoy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-16 grid gap-6 border-t border-gold/25 pt-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className={eyebrowClass}>{packages.eyebrow}</p>
              <h2 id="packages-heading" data-motion="rise" className={`mt-4 ${titleClass}`}>
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

      {/* 8 · Guest reviews: all of them as cards in a row you can swipe (no star ratings until SEO-03 is decided) */}
      <section aria-labelledby="reviews-heading" className="py-section">
        <h2 id="reviews-heading" className="sr-only">
          Guest reviews
        </h2>
        <Container>
          <div className="flex justify-center">
            <Ornament />
          </div>
          <div className="mt-10">
            <SnapSlider label="Guest reviews">
              {testimonials.map((review) => (
                <li key={review.name} className="flex w-[82vw] max-w-[24rem] shrink-0 snap-start sm:w-[22rem] lg:w-[calc((100%-2.5rem)/3)] lg:max-w-none">
                  <figure className="flex w-full flex-col rounded-card border border-line bg-paper p-7">
                    <Quote aria-hidden="true" strokeWidth={1.25} className="size-8 fill-cream text-gold" />
                    <blockquote className="mt-4 flex-1 font-display text-[1.3rem] leading-[1.5]">
                      <p>{review.text}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                      <span aria-hidden="true" className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-cream font-display text-[1.2rem] text-gold-deep">
                        {review.name.charAt(0).toUpperCase()}
                      </span>
                      <span>
                        <span className="block font-bold">{review.name}</span>
                        <span className="text-small text-stone">Customer review</span>
                      </span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </SnapSlider>
          </div>
        </Container>
      </section>

      {/* 9 · Questions */}
      <section aria-labelledby="faq-heading" className="bg-linen py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            {faq.eyebrow && <p className={eyebrowClass}>{faq.eyebrow}</p>}
            <h2 id="faq-heading" className={`mt-4 ${titleClass}`}>
              {faq.heading}
            </h2>
            {faq.subheading && <p className="mt-3 text-lead text-stone">{faq.subheading}</p>}
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

      {/* 10 · Closing: a cream band, the invitation on the left and the photo fading in on the right */}
      <section aria-labelledby="cta-heading" className="py-section">
        <Container>
          <div className="relative isolate overflow-hidden rounded-board bg-cream">
            <div className="relative h-60 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[56%]">
              <SiteImage image={cta.image ?? demoPhotos.villaCurtains} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" focus="60% center" />
              <div aria-hidden="true" className="absolute inset-y-0 -left-px right-0 hidden bg-[linear-gradient(90deg,var(--color-cream)_0%,rgb(242_230_221/0.6)_22%,rgb(242_230_221/0)_50%)] lg:block" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cream to-transparent lg:hidden" />
            </div>
            <div className="relative px-6 pb-10 sm:px-10 lg:max-w-[40rem] lg:px-14 lg:py-20">
              <Ornament />
              <h2 id="cta-heading" data-motion="rise" className="mt-6 font-display text-[clamp(2.1rem,1.5rem+2.4vw,3.5rem)] leading-[1.1]">
                {cta.heading}
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
