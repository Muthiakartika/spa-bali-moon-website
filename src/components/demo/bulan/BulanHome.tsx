import { ArrowRight, Check, Clock, HandHeart, House, ListChecks, MapPin, Plus, Sparkles, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PackageCards from "@/components/treatments/PackageCards";
import SpaMenuCard from "@/components/treatments/SpaMenuCard";
import { treatmentIcon } from "@/components/treatments/treatmentIcon";
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
import { whatsappLink } from "@/lib/whatsapp";
import { demoPhotos, featuredCards, homeMenuTabs } from "../demoData";
import QuoteSpotlight from "../taman/QuoteSpotlight";
import { Ornament } from "../tirta/Ornament";
import SnapSlider from "../tirta/SnapSlider";
import { goldOutline } from "./BulanHeader";
import { Blob, DashedWave, FloatingFrangipani, TornEdge } from "./Decor";

const SOURCE = "Homepage (demo Bulan)";
// Live site: a small serif sub-title above each section title; Taman: in gold italic.
const subClass = "font-display text-[1.2rem] italic text-gold-deep";
const titleClass = "font-display text-[clamp(2.2rem,1.5rem+2.6vw,3.6rem)] leading-[1.1]";
const outlinePill = `group inline-flex min-h-12 items-center justify-center gap-2 border px-7 font-semibold transition-colors ${goldOutline}`;

type LineIcon = (props: { className?: string }) => React.ReactElement;

/** A lucide icon drawn with a thin 1.5 line (same props as the WhatsApp icon and the lotus). */
function line(Icon: LucideIcon): LineIcon {
  const ThinIcon = ({ className }: { className?: string }) => <Icon aria-hidden="true" strokeWidth={1.5} className={className} />;
  return ThinIcon;
}
/** The lotus is wider than tall, so it is drawn a little larger to look the same size as the other icons. */
const StepLotus = ({ className = "" }: { className?: string }) => <LotusMark className={`${className} scale-[1.3]`} />;

const stepIcons: LineIcon[] = [line(ListChecks), WhatsAppIcon, StepLotus];
const whyIcons: LineIcon[] = [line(HandHeart), line(House), line(Sparkles), WhatsAppIcon];
const ClockIcon = line(Clock);
const PinIcon = line(MapPin);
const HouseIcon = line(House);

/** "Our Seminyak Day Spa" → the last two words in gold italic (styling only, the text is unchanged). */
function SplitTitle({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.slice(0, -2).join(" ")} <em className="font-normal italic text-gold-deep">{words.slice(-2).join(" ")}</em>
    </>
  );
}

/** A linen band with torn-paper edges above and below, as on the live site. */
function LinenBand({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <TornEdge side="top" className="text-linen" />
      <div className="bg-linen">{children}</div>
      <TornEdge side="bottom" className="text-linen" />
    </div>
  );
}

/**
 * DEMO F · BULAN — homepage body: Taman mixed with the live site (spabalimoon.com).
 * From the live site: its fonts (Literata + Mulish), its section order, torn-paper linen bands, floating frangipani,
 * icons on soft blobs joined by a dashed path, the brand badge card, the lotus behind the reviews, the line-style FAQ,
 * the double-framed closing and gold outline buttons.
 * From Taman: gold italic accents, arched and round photos, palm fronds, the facts card, the live treatment icons and sliders.
 * Same content as the real homepage (every item); light backgrounds only; spa menu card unchanged.
 */
export default function BulanHome() {
  const { hero, catalog, about, booking, whyUs, moreToEnjoy, packages, faq, cta } = homePage;
  const { contact, daySpa, homeServices } = footerContent;
  const cardText = new Map(homePage.featuredTreatments.map((item) => [item.slug + item.name, item.text]));

  // The practical facts under the hero, with the live footer's labels.
  const facts: { icon: LineIcon; label: string; value: string; href?: string; note?: string }[] = [
    { icon: ClockIcon, label: daySpa.openDailyLabel, value: business.openingHours.display },
    { icon: PinIcon, label: daySpa.addressLabel, value: business.address.short, href: business.mapsUrl, note: " (opens Google Maps in a new tab)" },
    { icon: HouseIcon, label: homeServices.feeLabel, value: business.homeService.feeDisplay },
    { icon: WhatsAppIcon, label: contact.phoneLabel, value: business.phoneDisplay, href: whatsappLink({ source: SOURCE }), note: " (WhatsApp, opens in a new tab)" },
  ];

  return (
    <div className="bg-paper text-ink">
      {/* 1 · Hero (live layout): soft linen light, floating frangipani, photos on the left, the title in the middle */}
      <section
        aria-labelledby="home-title"
        className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_80%_18%,rgb(201_169_77/0.2),transparent_50%),linear-gradient(256deg,rgb(244_241_235/0.5),var(--color-linen))]"
      >
        <TropicalLeaf className="absolute -left-24 bottom-16 hidden w-80 text-gold/25 lg:block" />
        <div aria-hidden="true" className="bulan-float absolute right-[7%] top-[8%] hidden sm:block">
          <FloatingFrangipani id="hero-flower-1" className="size-16 lg:size-24" />
        </div>
        <div aria-hidden="true" className="bulan-float absolute -right-5 top-3 [animation-delay:-3s] lg:right-[2%] lg:top-[30%]">
          <FloatingFrangipani id="hero-flower-2" className="size-20 lg:size-40" />
        </div>
        <div aria-hidden="true" className="bulan-float absolute bottom-[22%] right-[14%] hidden [animation-delay:-5s] lg:block">
          <FloatingFrangipani id="hero-flower-3" className="size-12" />
        </div>

        <Container className="relative grid items-center gap-14 pb-28 pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-36 lg:pt-20">
          <div className="relative order-2 mx-auto w-full max-w-[28rem] pb-10 lg:order-1 lg:col-span-4 lg:mx-0">
            {hero.images[0] && (
              <div className="arch relative aspect-[3/4] w-[78%] overflow-hidden">
                <SiteImage image={hero.images[0]} fill priority sizes="(min-width: 1024px) 26vw, 70vw" />
              </div>
            )}
            {hero.images[1] && (
              <div className="absolute bottom-0 right-0 aspect-square w-[50%] overflow-hidden rounded-full border-8 border-linen">
                <SiteImage image={hero.images[1]} fill sizes="(min-width: 1024px) 16vw, 45vw" />
              </div>
            )}
          </div>
          <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:col-span-7 lg:col-start-6">
            <Ornament />
            <p className="mt-5 text-[0.8125rem] font-bold uppercase tracking-[0.2em] text-gold-deep">{about.badge.line}</p>
            <h1 id="home-title" className="mt-4 font-display text-[clamp(3rem,1.6rem+5.6vw,6.5rem)] leading-[1]">
              <SplitTitle text={hero.title} />
            </h1>
            <p className="mt-7 max-w-[52ch] text-[1.0625rem] leading-[1.75] text-stone">{hero.text}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <BookButton label={headerBookingLabel} size="lg" source={SOURCE} className="rounded-full px-7" />
              <Link href="/seminyak/" className={outlinePill}>
                Explore Treatments
                <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
        <div className="absolute inset-x-0 bottom-0">
          <TornEdge side="top" className="text-paper" />
        </div>
      </section>

      {/* 1b · The practical facts (from Taman), on a white card over the torn edge */}
      <div className="relative z-10 -mt-12">
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

      {/* 2 · How to book (live): icons on soft blobs, joined by a dashed path */}
      <section aria-labelledby="booking-heading" className="relative overflow-hidden py-section">
        <div aria-hidden="true" className="bulan-float absolute right-[5%] top-16 hidden [animation-delay:-2s] md:block">
          <FloatingFrangipani id="step-flower" className="size-14" />
        </div>
        <Container>
          <div className="flex flex-col items-center text-center">
            <p className={subClass}>{booking.eyebrow}</p>
            <h2 id="booking-heading" data-motion="rise" className={`mt-2 max-w-[24ch] ${titleClass}`}>
              {booking.heading}
            </h2>
          </div>
          <div className="relative mt-14">
            <DashedWave className="absolute left-[16%] top-8 hidden h-16 w-[68%] sm:block" />
            <ol className="relative grid gap-12 sm:grid-cols-3 sm:gap-8">
              {booking.steps.map((step, i) => {
                const Icon = stepIcons[i % stepIcons.length];
                const middle = i === 1;
                return (
                  <li key={step.number} data-motion="rise" className="flex flex-col items-center text-center">
                    <div className="relative size-28">
                      <Blob variant={i % 2 === 0 ? 0 : 1} className={middle ? "text-gold" : "text-cream"} />
                      <span className={`relative flex size-full items-center justify-center ${middle ? "text-paper" : "text-gold-deep"}`}>
                        <Icon className="size-9" />
                      </span>
                      <span className={`numeric absolute -left-1 top-0 inline-flex size-9 items-center justify-center rounded-full text-[0.8125rem] font-bold text-paper ${middle ? "bg-ink" : "bg-gold-deep"}`}>
                        {step.number}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-[1.45rem] leading-tight">{step.title}</h3>
                    <p className="mt-2 max-w-[32ch] text-small leading-relaxed text-stone">{step.text}</p>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="mt-12 flex justify-center">
            <BookButton label={booking.eyebrow} size="lg" source={SOURCE} className="rounded-full px-7" />
          </div>
        </Container>
      </section>

      {/* 3 · About (live): linen band, photos with the brand badge card, checked list, gold outline button */}
      <LinenBand>
        <section id="about" aria-labelledby="about-heading" className="relative overflow-hidden py-section">
          <TropicalLeaf className="absolute -right-24 bottom-0 hidden w-80 -scale-x-100 text-gold/20 lg:block" />
          <Container className="relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="relative lg:col-span-6">
              <div className="grid grid-cols-5 items-end gap-4">
                {about.images[0] && (
                  <div data-motion="photo" className="arch relative col-span-3 aspect-[3/4.4] overflow-hidden">
                    <SiteImage image={about.images[0]} fill sizes="(min-width: 1024px) 28vw, 58vw" />
                  </div>
                )}
                {about.images[1] && (
                  <div data-motion="photo" className="relative col-span-2 mb-6 aspect-[3/4.4] overflow-hidden rounded-board">
                    <SiteImage image={about.images[1]} fill sizes="(min-width: 1024px) 19vw, 38vw" />
                  </div>
                )}
              </div>
              {/* The live site's brand card: lotus, name, "Seminyak · Since 2009" and the short line */}
              <div className="mx-auto mt-6 max-w-[20rem] rounded-board bg-paper p-5 text-center shadow-(--shadow-board) lg:absolute lg:right-2 lg:top-0 lg:mt-0 lg:w-[44%]">
                <LotusMark className="mx-auto h-7 w-auto text-gold" />
                <p className="mt-2 font-display text-[1.15rem] font-medium">{about.badge.name}</p>
                <p className="mt-1 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-gold-deep">{about.badge.line}</p>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-stone">{about.badge.text}</p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className={subClass}>{about.eyebrow}</p>
              <h2 id="about-heading" data-motion="rise" className={`mt-2 ${titleClass}`}>
                {about.heading}
              </h2>
              <p className="mt-6 max-w-[60ch] text-body leading-[1.75] text-stone">{about.text}</p>
              <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {about.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.9375rem]">
                    <Check aria-hidden="true" strokeWidth={2.25} className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={about.button.href} className={`mt-10 ${outlinePill}`}>
                {about.button.label}
                <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Container>
        </section>
      </LinenBand>

      {/* 4 · Featured treatments (live cards: photo, live icon, price, name, line) in a row you can swipe */}
      <section aria-label="Featured treatments" className="py-section">
        <Container>
          <SnapSlider label="Featured treatments">
            {featuredCards.map((card) => {
              const iconSrc = liveTreatmentIcons[card.name];
              const FallbackIcon = treatmentIcon(card.name);
              return (
                <li key={card.treatment.slug + card.name} className="w-[86vw] max-w-[30rem] shrink-0 snap-start sm:w-[27rem] lg:w-[calc((100%-1.25rem)/2)] lg:max-w-none xl:w-[calc((100%-2.5rem)/3)]">
                  <div className="group relative grid h-full grid-cols-[42%_1fr] items-center gap-5 rounded-board bg-linen p-3 pr-5">
                    <div className="relative aspect-[4/4.6] overflow-hidden rounded-t-full rounded-b-card">
                      <SiteImage image={card.treatment.cardImage} alt="" fill sizes="(min-width: 1280px) 13vw, (min-width: 1024px) 20vw, 36vw" className="transition-transform duration-(--duration-drift) ease-(--ease-calm) group-hover:scale-[1.05]" />
                    </div>
                    <div className="py-2">
                      {iconSrc ? (
                        <Image src={iconSrc} alt="" {...liveTreatmentIconSize} unoptimized className="h-10 w-auto" />
                      ) : (
                        <FallbackIcon aria-hidden="true" strokeWidth={1.5} className="size-9 text-gold" />
                      )}
                      <p className="numeric mt-4 text-small font-bold text-gold-deep">{card.priceLabel}</p>
                      <h3 className="mt-1 font-display text-[1.35rem] leading-tight">
                        <Link href={`/seminyak/${card.treatment.slug}/`} className="after:absolute after:inset-0 group-hover:text-gold-deep">
                          {card.name}
                        </Link>
                      </h3>
                      <p className="mt-3 border-t border-ink/10 pt-3 text-small text-stone">{cardText.get(card.treatment.slug + card.name)}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </SnapSlider>
        </Container>
      </section>

      {/* 5 · Guest reviews (live): one review at a time over a large faint lotus, with round photos at the sides */}
      <section aria-labelledby="reviews-heading" className="relative overflow-hidden pb-section">
        <h2 id="reviews-heading" className="sr-only">
          Guest reviews
        </h2>
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 text-gold/[0.08]">
          <LotusMark className="w-[34rem] max-w-[92vw]" />
        </div>
        <div aria-hidden="true" className="absolute left-[3%] top-1/2 hidden size-44 -translate-y-1/2 overflow-hidden rounded-full border-8 border-paper shadow-(--shadow-board) xl:block">
          <SiteImage image={demoPhotos.frangipaniPool} alt="" fill sizes="176px" />
        </div>
        <div aria-hidden="true" className="absolute right-[3%] top-[38%] hidden size-36 overflow-hidden rounded-full border-8 border-paper shadow-(--shadow-board) xl:block">
          <SiteImage image={demoPhotos.coconuts} alt="" fill sizes="144px" />
        </div>
        <Container className="relative">
          <QuoteSpotlight reviews={testimonials} mark="quote" />
        </Container>
      </section>

      {/* 6 · The complete spa menu (the client's approved design, unchanged) on a torn-edge linen band */}
      <LinenBand>
        <section id="menu" aria-labelledby="menu-heading" className="relative overflow-hidden py-section">
          <TropicalLeaf className="absolute -left-20 top-10 hidden w-80 text-gold/20 lg:block" />
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
      </LinenBand>

      {/* 7 · More to enjoy (live): centred text with the lotus between the two paragraphs */}
      <section aria-labelledby="more-heading" className="py-section">
        <Container className="flex flex-col items-center text-center">
          <p className={subClass}>{moreToEnjoy.eyebrow}</p>
          <h2 id="more-heading" data-motion="rise" className={`mt-2 max-w-[22ch] ${titleClass}`}>
            {moreToEnjoy.heading}
          </h2>
          {moreToEnjoy.paragraphs.map((paragraph, i) => (
            <div key={paragraph} className="flex flex-col items-center">
              {i > 0 && <Ornament className="mt-7" />}
              <p className="mt-6 max-w-[62ch] text-body leading-[1.75] text-stone">{paragraph}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* 8 + 9 · Spa packages and "why us" (live): one torn-edge linen band */}
      <LinenBand>
        <section id="packages" aria-labelledby="packages-heading" className="relative overflow-hidden pb-[calc(var(--spacing-section)*0.6)] pt-section">
          <Container>
            <div className="flex flex-col items-center text-center">
              <p className={subClass}>{packages.eyebrow}</p>
              <h2 id="packages-heading" data-motion="rise" className={`mt-2 ${titleClass}`}>
                {packages.heading}
              </h2>
              <p className="mt-5 max-w-[72ch] text-body leading-[1.75] text-stone">{packages.text}</p>
              <Link href="/seminyak/#packages" className={`mt-8 ${outlinePill}`}>
                {packages.button.label}
                <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="mt-12">
              <PackageCards group={getPackageGroup(packages.packageGroup)} buttonLabel={packages.cardButtonLabel} source={SOURCE} withIcons />
            </div>
          </Container>
        </section>

        <section aria-labelledby="why-heading" className="relative overflow-hidden pb-section pt-[calc(var(--spacing-section)*0.6)]">
          <TropicalLeaf className="absolute -left-24 bottom-0 hidden w-80 text-gold/20 lg:block" />
          <Container className="relative">
            <div className="flex flex-col items-center text-center">
              <p className={subClass}>{whyUs.eyebrow}</p>
              <h2 id="why-heading" data-motion="rise" className={`mt-2 ${titleClass}`}>
                {whyUs.heading}
              </h2>
            </div>
            <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
              {whyUs.items.map((item, i) => {
                const Icon = whyIcons[i % whyIcons.length];
                return (
                  <li key={item.title} data-motion="rise" className="group relative flex flex-col items-center text-center">
                    <div className="relative size-24 sm:size-28">
                      <Blob variant={i % 2 === 0 ? 1 : 0} className="text-paper" />
                      <span className="relative flex size-full items-center justify-center text-gold-deep transition-transform duration-(--duration-base) group-hover:-translate-y-1">
                        <Icon className="size-8 sm:size-9" />
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-[1.2rem] leading-tight sm:text-[1.4rem]">
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
      </LinenBand>

      {/* 10 · Questions (live): the photo with "Time to Unwind", the questions as lines that open */}
      <section aria-labelledby="faq-heading" className="py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-5">
            {faq.image && (
              <div data-motion="photo" className="arch relative aspect-[4/3] w-full overflow-hidden lg:aspect-[4/5]">
                <SiteImage image={faq.image} fill sizes="(min-width: 1024px) 38vw, 100vw" />
              </div>
            )}
            <div className="relative -mt-12 ml-5 inline-block rounded-board bg-cream px-6 py-4 shadow-(--shadow-board) sm:ml-8">
              <h2 id="faq-heading" className="font-display text-[clamp(1.6rem,1.3rem+1.2vw,2.25rem)] italic leading-tight">
                {faq.heading}
              </h2>
            </div>
          </div>
          <div className="lg:col-span-7">
            {faq.eyebrow && <p className={subClass}>{faq.eyebrow}</p>}
            {faq.subheading && <p className={`mt-2 ${titleClass}`}>{faq.subheading}</p>}
            <div className="mt-8 border-t border-ink/15">
              {faq.items.map((item, i) => (
                <details key={item.question} open={i === 0} className="group border-b border-ink/15">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-display text-[1.15rem] leading-snug [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <Plus aria-hidden="true" strokeWidth={1.25} className="mt-0.5 size-5 shrink-0 text-gold-deep transition-transform duration-(--duration-base) group-open:rotate-45" />
                  </summary>
                  <p className="max-w-[64ch] pb-6 pr-10 text-body leading-relaxed text-stone">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 11 · Closing (live double frame, kept light): a cream band, the photo fading in on the right */}
      <section aria-labelledby="cta-heading" className="pb-section">
        <Container>
          <div className="relative isolate overflow-hidden rounded-board bg-cream">
            <div className="relative h-60 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[56%]">
              <SiteImage image={cta.image ?? demoPhotos.villaCurtains} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" focus="60% center" />
              <div aria-hidden="true" className="absolute inset-y-0 -left-px right-0 hidden bg-[linear-gradient(90deg,var(--color-cream)_0%,rgb(242_230_221/0.6)_22%,rgb(242_230_221/0)_50%)] lg:block" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cream to-transparent lg:hidden" />
            </div>
            {/* The live site's thin hand-drawn double frame */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-3 z-10 rounded-[14px] border border-gold/45 sm:inset-4" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-[18px] z-10 rotate-[0.2deg] rounded-[12px] border border-gold/25 sm:inset-[23px]" />
            <div className="relative px-8 pb-12 sm:px-12 lg:max-w-[42rem] lg:px-16 lg:py-20">
              <Ornament className="justify-start" />
              <h2 id="cta-heading" data-motion="rise" className="mt-6 font-display text-[clamp(2.2rem,1.5rem+2.8vw,3.9rem)] leading-[1.06]">
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
