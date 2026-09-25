import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PackageCards from "@/components/treatments/PackageCards";
import SpaMenuCard from "@/components/treatments/SpaMenuCard";
import Accordion from "@/components/ui/Accordion";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { business } from "@/data/business";
import { headerBookingLabel } from "@/data/navigation";
import { getPackageGroup } from "@/data/packages";
import { homePage } from "@/data/pages/home";
import { testimonials } from "@/data/testimonials";
import type { SiteImage as SiteImageData } from "@/data/types";
import AboutBadge from "@/components/home/AboutBadge";
import { demoPhotos, featuredCards, homeMenuTabs } from "../demoData";
import QuoteCarousel from "../QuoteCarousel";

const SOURCE = "Homepage (demo Botanica)";
const displayL = "font-display text-[clamp(2.2rem,1.5rem+2.6vw,4rem)] leading-[1.05]";
const noteClass = "font-display text-[1.35rem] italic text-gold-deep";
const textLink =
  "group inline-flex min-h-11 items-center gap-2 font-medium underline decoration-gold underline-offset-[0.35em] hover:decoration-ink";

// Photo shapes used in turn in the treatment gallery, so the grid never looks like a template.
const galleryShapes = ["arch aspect-[3/4]", "rounded-[1.5rem] aspect-square", "rounded-full aspect-square", "rounded-[1.5rem] aspect-[3/4]"];

// One photo per "why us" reason (same order as whyUs.items).
const whyPhotos: SiteImageData[] = [demoPhotos.therapists, demoPhotos.villaPool, demoPhotos.scrubWarm, demoPhotos.frangipaniPool];

/** "Our Seminyak Day Spa" → the last two words in italic (styling only, the text is unchanged). */
function SplitTitle({ text }: { text: string }) {
  const words = text.split(" ");
  const head = words.slice(0, -2).join(" ");
  const tail = words.slice(-2).join(" ");
  return (
    <>
      {head} <em className="font-normal italic text-gold-deep">{tail}</em>
    </>
  );
}

/**
 * DEMO C · BOTANICA — homepage body. Soft fashion-luxury: warm cream, a high-contrast serif
 * with italics, photos in arches and circles, botanical details, one large review at a time.
 * Same content and order as the real homepage (every section, every item), light backgrounds only.
 */
export default function BotanicaHome() {
  const { hero, catalog, about, booking, whyUs, moreToEnjoy, packages, faq, cta } = homePage;
  const sharedLine = homePage.featuredTreatments[0]?.text;

  return (
    <div className="bg-cream text-ink">
      {/* 1 · Split hero: title on cream, a tall arched photo on the right */}
      <section aria-labelledby="home-title" className="relative overflow-hidden">
        <Container className="grid min-h-[calc(100dvh-5rem)] items-center gap-10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-10">
          <div className="lg:col-span-6">
            <p className="text-small text-stone">
              {business.openingHours.label} · {business.openingHours.display}
            </p>
            <h1 id="home-title" className="mt-6 font-display text-[clamp(3.25rem,1.6rem+6.4vw,8rem)] leading-[0.95]">
              <SplitTitle text={hero.title} />
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <BookButton label={headerBookingLabel} size="lg" source={SOURCE} className="rounded-full !bg-ink hover:!bg-gold-deep" />
              <Link href="/seminyak/" className={textLink}>
                Explore Treatments
                <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[36rem] overflow-hidden rounded-t-full">
              <SiteImage image={demoPhotos.frangipaniMassage} fill priority sizes="(min-width: 1024px) 45vw, 90vw" focus="62% center" />
            </div>
            <div className="absolute -bottom-4 -left-2 size-32 overflow-hidden rounded-full border-[6px] border-cream sm:size-40 lg:-left-8">
              <SiteImage image={demoPhotos.coconuts} alt="" fill sizes="160px" />
            </div>
          </div>
        </Container>
      </section>

      {/* 1b · The hero text beside the two hero photos (an arch and a circle) */}
      <section aria-label="Introduction" className="bg-paper py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative pb-12 lg:col-span-5">
            {hero.images[0] && (
              <div data-motion="photo" className="arch relative aspect-[3/4] w-[72%] overflow-hidden">
                <SiteImage image={hero.images[0]} fill sizes="(min-width: 1024px) 28vw, 70vw" />
              </div>
            )}
            {hero.images[1] && (
              <div data-motion="photo" className="absolute bottom-0 right-0 aspect-square w-[46%] overflow-hidden rounded-full border-8 border-paper">
                <SiteImage image={hero.images[1]} fill sizes="(min-width: 1024px) 18vw, 45vw" />
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            <p data-motion="rise" className="font-display text-[clamp(1.4rem,1.1rem+1.1vw,2.1rem)] leading-[1.4]">
              {hero.text}
            </p>
            <div className="mt-8 flex -space-x-4">
              {[demoPhotos.greenLeaves, demoPhotos.arganNuts, demoPhotos.frangipaniPool, demoPhotos.hotStones].map((image) => (
                <div key={image.src} aria-hidden="true" className="relative size-14 shrink-0 overflow-hidden rounded-full border-4 border-paper sm:size-16">
                  <SiteImage image={image} alt="" fill sizes="64px" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 2 · Treatment gallery in mixed shapes: all featured treatments */}
      <section aria-labelledby="gallery-heading" className="relative overflow-hidden py-section">
        <TropicalLeaf className="absolute -right-16 top-0 w-72 rotate-[200deg] text-gold/25 sm:w-96" />
        <Container className="relative">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="gallery-heading" data-motion="rise" className="max-w-[16ch] font-display text-[clamp(2.4rem,1.6rem+3vw,4.5rem)] italic leading-[1]">
              {sharedLine}
            </h2>
            <Link href="/seminyak/" className={textLink}>
              Explore Treatments
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
            </Link>
          </div>
          <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {featuredCards.map((card, i) => (
              <li key={card.treatment.slug + card.name} data-motion="rise" className={`group relative ${i % 2 === 1 ? "lg:mt-16" : ""}`}>
                <div className={`relative overflow-hidden ${galleryShapes[i % galleryShapes.length]}`}>
                  <SiteImage image={card.treatment.cardImage} alt="" fill sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 45vw" className="transition-transform duration-(--duration-drift) ease-(--ease-calm) group-hover:scale-[1.05]" />
                </div>
                <h3 className="mt-5 font-display text-[1.5rem] italic leading-tight">
                  <Link href={`/seminyak/${card.treatment.slug}/`} className="after:absolute after:inset-0 group-hover:text-gold-deep">
                    {card.name}
                  </Link>
                </h3>
                <p className="numeric mt-1 text-small text-stone">{card.priceLabel}</p>
              </li>
            ))}
            {/* Closing tile: fills the last grid cell with the link to all treatments */}
            <li data-motion="rise" className={featuredCards.length % 2 === 1 ? "lg:mt-16" : ""}>
              <Link
                href="/seminyak/"
                className="arch group flex aspect-[3/4] flex-col items-center justify-center gap-3 border border-gold/50 bg-paper/50 p-6 text-center transition-colors hover:bg-paper"
              >
                <span className="font-display text-[1.75rem] italic leading-tight">Explore Treatments</span>
                <ArrowRight aria-hidden="true" strokeWidth={1.25} className="size-6 text-gold-deep transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      {/* 3 · What makes us different: four arched photos */}
      <section aria-labelledby="why-heading" className="bg-paper py-section">
        <Container>
          <div className="flex flex-col items-center text-center">
            <p className={noteClass}>{whyUs.eyebrow}</p>
            <h2 id="why-heading" data-motion="rise" className={`mt-3 max-w-[20ch] ${displayL}`}>
              {whyUs.heading}
            </h2>
          </div>
          <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.items.map((item, i) => (
              <li key={item.title} data-motion="rise" className="group relative text-center">
                <div className="arch relative mx-auto aspect-[3/4] w-full max-w-[18rem] overflow-hidden">
                  <SiteImage image={whyPhotos[i % whyPhotos.length]} alt="" fill sizes="(min-width: 1024px) 22vw, 45vw" className="transition-transform duration-(--duration-drift) ease-(--ease-calm) group-hover:scale-[1.05]" />
                </div>
                <h3 className="mt-6 font-display text-[1.6rem] italic">
                  <Link href={item.href} className="after:absolute after:inset-0 group-hover:text-gold-deep">
                    {item.title}
                  </Link>
                </h3>
                <p className="mx-auto mt-2 max-w-[30ch] text-small text-stone">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4 · About */}
      <section id="about" aria-labelledby="about-heading" className="py-section">
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative pb-10 lg:col-span-5">
            {about.images[0] && (
              <div data-motion="photo" className="arch relative aspect-[3/4] w-[80%] overflow-hidden">
                <SiteImage image={about.images[0]} fill sizes="(min-width: 1024px) 32vw, 80vw" />
              </div>
            )}
            {about.images[1] && (
              <div data-motion="photo" className="absolute bottom-0 right-0 aspect-square w-[42%] overflow-hidden rounded-full border-8 border-cream">
                <SiteImage image={about.images[1]} fill sizes="(min-width: 1024px) 18vw, 40vw" />
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            <p className={noteClass}>{about.eyebrow}</p>
            <h2 id="about-heading" data-motion="rise" className={`mt-3 ${displayL}`}>
              {about.heading}
            </h2>
            <p className="mt-6 max-w-[58ch] text-body leading-relaxed text-stone">{about.text}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {about.items.map((item) => (
                <li key={item} className="rounded-full border border-ink/15 bg-paper/60 px-4 py-2 text-small">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
              <Link href={about.button.href} className={textLink}>
                {about.button.label}
                <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
              </Link>
              <AboutBadge />
            </div>
          </div>
        </Container>
      </section>

      {/* 5 · The complete spa menu */}
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

      {/* 6 · How to book, with large italic numbers in arched frames */}
      <section aria-labelledby="booking-heading" className="bg-paper py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-6 lg:col-span-4">
            <p className={noteClass}>{booking.eyebrow}</p>
            <h2 id="booking-heading" data-motion="rise" className={displayL}>
              {booking.heading}
            </h2>
            <BookButton label={booking.eyebrow} size="lg" source={SOURCE} className="rounded-full !bg-ink hover:!bg-gold-deep" />
          </div>
          <ol className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
            {booking.steps.map((step) => (
              <li key={step.number} data-motion="rise" className="rounded-t-full bg-linen px-6 pb-8 pt-14 text-center">
                <span aria-hidden="true" className="numeric font-display text-[4rem] italic leading-none text-gold-deep">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-[1.5rem] leading-tight">{step.title}</h3>
                <p className="mt-2 text-small text-stone">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 7 · More to enjoy + spa packages */}
      <section id="packages" aria-labelledby="packages-heading" className="py-section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className={noteClass}>{moreToEnjoy.eyebrow}</p>
              <h2 id="more-heading" data-motion="rise" className={`mt-3 ${displayL}`}>
                {moreToEnjoy.heading}
              </h2>
            </div>
            <div className="space-y-4 text-body leading-relaxed text-stone lg:col-span-6 lg:col-start-7">
              {moreToEnjoy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-section border-t border-ink/15 pt-12">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className={noteClass}>{packages.eyebrow}</p>
                <h2 id="packages-heading" data-motion="rise" className={`mt-3 ${displayL}`}>
                  {packages.heading}
                </h2>
                <p className="mt-5 max-w-[62ch] text-body text-stone">{packages.text}</p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link href="/seminyak/#packages" className={textLink}>
                  {packages.button.label}
                  <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
                </Link>
              </div>
            </div>
            <div className="mt-10">
              <PackageCards group={getPackageGroup(packages.packageGroup)} buttonLabel={packages.cardButtonLabel} source={SOURCE} withIcons />
            </div>
          </div>
        </Container>
      </section>

      {/* 8 · Guest reviews: all of them, one large review at a time */}
      <section aria-labelledby="reviews-heading" className="bg-paper py-section">
        <h2 id="reviews-heading" className="sr-only">
          Guest reviews
        </h2>
        <Container>
          <QuoteCarousel reviews={testimonials} />
        </Container>
      </section>

      {/* 9 · Questions */}
      <section aria-labelledby="faq-heading" className="py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 id="faq-heading" className={displayL}>
              {faq.heading}
            </h2>
            {faq.subheading && <p className={`mt-3 ${noteClass}`}>{faq.subheading}</p>}
            {faq.image && (
              <div data-motion="photo" className="arch relative mt-8 aspect-[4/3] w-full max-w-[28rem] overflow-hidden lg:mt-10 lg:aspect-[3/4] lg:w-3/4">
                <SiteImage image={faq.image} fill sizes="(min-width: 1024px) 25vw, 448px" />
              </div>
            )}
          </div>
          <div className="lg:col-span-8">
            {faq.eyebrow && <p className="mb-4 text-small text-stone">{faq.eyebrow}</p>}
            <Accordion items={faq.items} />
          </div>
        </Container>
      </section>

      {/* 10 · Closing: an arched photo beside the invitation */}
      <section aria-labelledby="cta-heading" className="bg-paper py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div data-motion="photo" className="arch relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <SiteImage image={cta.image ?? demoPhotos.beach} alt="" fill sizes="(min-width: 1024px) 38vw, 100vw" />
          </div>
          <div className="lg:col-span-7">
            <h2 id="cta-heading" data-motion="rise" className="font-display text-[clamp(2.6rem,1.6rem+4vw,6rem)] italic leading-[0.98]">
              {cta.heading}
            </h2>
            {cta.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 max-w-[56ch] text-body leading-relaxed text-stone">
                {paragraph}
              </p>
            ))}
            <div className="mt-9">
              <BookButton label={cta.buttonLabel} size="lg" source={SOURCE} className="rounded-full !bg-ink hover:!bg-gold-deep" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
