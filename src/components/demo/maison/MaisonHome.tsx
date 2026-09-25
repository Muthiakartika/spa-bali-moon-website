import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import PackageCards from "@/components/treatments/PackageCards";
import SpaMenuCard from "@/components/treatments/SpaMenuCard";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import { business } from "@/data/business";
import { headerBookingLabel } from "@/data/navigation";
import { getPackageGroup } from "@/data/packages";
import { homePage } from "@/data/pages/home";
import { testimonials } from "@/data/testimonials";
import AboutBadge from "@/components/home/AboutBadge";
import { demoPhotos, featuredCards, homeMenuTabs } from "../demoData";
import QuoteCarousel from "../QuoteCarousel";
import EditorialIndex from "./EditorialIndex";

const SOURCE = "Homepage (demo Maison)";
const displayXL = "font-display text-[clamp(2.4rem,1.6rem+3vw,4.5rem)] font-light leading-[1]";
const displayL = "font-display text-[clamp(2.2rem,1.5rem+2.6vw,4rem)] font-light leading-[1.05]";
const noteClass = "font-display text-[1.3rem] italic text-gold-deep";

/**
 * DEMO A · MAISON — homepage body. Editorial luxury on white and linen, like a resort magazine:
 * very large light serif type, a full-width photo under the title, thin rules instead of boxes.
 * Same content and order as the real homepage (every section, every item).
 */
export default function MaisonHome() {
  const { hero, catalog, about, booking, whyUs, moreToEnjoy, packages, faq, cta } = homePage;
  const sharedLine = homePage.featuredTreatments[0]?.text;

  const indexEntries = featuredCards.map((card) => ({
    name: card.name,
    priceLabel: card.priceLabel,
    href: `/seminyak/${card.treatment.slug}/`,
    image: card.treatment.cardImage,
  }));

  return (
    <>
      {/* 1 · Hero: the title on white, then a full-width photo */}
      <section aria-labelledby="home-title" className="bg-paper">
        <Container className="grid gap-8 pb-12 pt-14 sm:pt-20 lg:grid-cols-12 lg:items-end">
          <h1 id="home-title" className="font-display text-[clamp(3.5rem,1.6rem+7.5vw,9.5rem)] font-light leading-[0.9] tracking-[-0.02em] lg:col-span-8">
            {hero.title}
          </h1>
          <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:items-end lg:text-right">
            <p className="text-small text-stone">
              {business.openingHours.label} · {business.openingHours.display}
              <br />
              {business.address.short}
            </p>
            <BookButton label={headerBookingLabel} size="lg" source={SOURCE} className="rounded-full" />
          </div>
        </Container>
        <div className="relative h-[72dvh] min-h-96 overflow-hidden">
          <SiteImage image={demoPhotos.frangipaniBack} fill priority sizes="100vw" focus="55% 40%" />
        </div>
      </section>

      {/* 1b · Hero text, set as a large editorial statement beside the two hero photos */}
      <section aria-label="Introduction" className="bg-paper py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p data-motion="rise" className="font-display text-[clamp(1.6rem,1.1rem+1.6vw,2.6rem)] font-light leading-[1.25]">
              {hero.text}
            </p>
            <Link href="/seminyak/" className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-ink/40 text-[0.9375rem] hover:border-ink">
              Explore Treatments
              <ArrowRight aria-hidden="true" strokeWidth={1.25} className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 items-start gap-4 lg:col-span-5">
            {hero.images.map((image, i) => (
              <div key={image.src} data-motion="photo" className={`relative aspect-[3/4] overflow-hidden rounded-[2px] ${i === 1 ? "mt-16" : ""}`}>
                <SiteImage image={image} fill sizes="(min-width: 1024px) 20vw, 45vw" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2 · Featured treatments: all 23, as a magazine index (the photo follows the name you point at) */}
      <section aria-labelledby="index-heading" className="bg-linen py-section">
        <Container>
          <h2 id="index-heading" data-motion="rise" className={`max-w-[18ch] ${displayXL}`}>
            {sharedLine}
          </h2>
          <div className="mt-14">
            <EditorialIndex entries={indexEntries} />
          </div>
        </Container>
      </section>

      {/* A quiet full-width photo, no text */}
      <div data-motion="photo" className="relative h-[60dvh] min-h-72 overflow-hidden">
        <SiteImage image={demoPhotos.zenGarden} alt="" fill sizes="100vw" />
      </div>

      {/* 3 · What makes us different */}
      <section aria-labelledby="why-heading" className="bg-paper py-section">
        <Container>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/15 pb-10">
            <h2 id="why-heading" className={`max-w-[20ch] ${displayL}`}>
              {whyUs.heading}
            </h2>
            <p className={noteClass}>{whyUs.eyebrow}</p>
          </div>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.items.map((item) => (
              <li key={item.title} data-motion="rise" className="group relative">
                <h3 className="font-display text-[1.75rem] leading-tight">
                  <Link href={item.href} className="after:absolute after:inset-0 group-hover:italic group-hover:text-gold-deep">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-stone">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4 · About */}
      <section id="about" aria-labelledby="about-heading" className="bg-paper pb-section">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className={noteClass}>{about.eyebrow}</p>
            <h2 id="about-heading" data-motion="rise" className={`mt-3 ${displayL}`}>
              {about.heading}
            </h2>
            <p className="mt-8 max-w-[56ch] text-body leading-relaxed text-stone">{about.text}</p>
            <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {about.items.map((item) => (
                <li key={item} className="border-b border-ink/10 py-3 text-[0.9375rem]">
                  {item}
                </li>
              ))}
            </ul>
            <Link href={about.button.href} className="mt-10 inline-flex min-h-11 items-center gap-2 border-b border-ink/40 text-[0.9375rem] hover:border-ink">
              {about.button.label}
              <ArrowRight aria-hidden="true" strokeWidth={1.25} className="size-4" />
            </Link>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 items-start gap-4">
              {about.images.map((image, i) => (
                <div key={image.src} data-motion="photo" className={`relative aspect-[3/4.4] overflow-hidden rounded-[2px] ${i === 0 ? "mt-20" : ""}`}>
                  <SiteImage image={image} fill sizes="(min-width: 1024px) 24vw, 45vw" />
                </div>
              ))}
            </div>
            <AboutBadge className="mt-8 border-t border-ink/15 pt-6" />
          </div>
        </Container>
      </section>

      {/* 5 · The complete spa menu */}
      <section id="menu" aria-labelledby="menu-heading" className="bg-linen py-section">
        <Container>
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

      {/* 6 · How to book */}
      <section aria-labelledby="booking-heading" className="bg-paper py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-6 lg:col-span-4">
            <p className={noteClass}>{booking.eyebrow}</p>
            <h2 id="booking-heading" data-motion="rise" className={displayL}>
              {booking.heading}
            </h2>
            <BookButton label={booking.eyebrow} size="lg" source={SOURCE} className="rounded-full" />
          </div>
          <ol className="border-t border-ink/15 lg:col-span-8">
            {booking.steps.map((step) => (
              <li key={step.number} data-motion="rise" className="grid grid-cols-[4rem_1fr] gap-4 border-b border-ink/15 py-8 sm:grid-cols-[6rem_1fr]">
                <span aria-hidden="true" className="numeric font-display text-[2.75rem] font-light italic leading-none text-gold-deep">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-[1.75rem] leading-tight">{step.title}</h3>
                  <p className="mt-2 max-w-[56ch] text-body text-stone">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 7 · More to enjoy + spa packages */}
      <section aria-labelledby="packages-heading" className="bg-cream/50 py-section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className={noteClass}>{moreToEnjoy.eyebrow}</p>
              <h2 id="more-heading" className={`mt-3 ${displayL}`}>
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
                <h2 id="packages-heading" className={`mt-3 ${displayL}`}>
                  {packages.heading}
                </h2>
                <p className="mt-5 max-w-[62ch] text-body text-stone">{packages.text}</p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link href="/seminyak/#packages" className="inline-flex min-h-11 items-center gap-2 border-b border-ink/40 text-[0.9375rem] hover:border-ink">
                  {packages.button.label}
                  <ArrowRight aria-hidden="true" strokeWidth={1.25} className="size-4" />
                </Link>
              </div>
            </div>
            <div className="mt-10">
              <PackageCards group={getPackageGroup(packages.packageGroup)} buttonLabel={packages.cardButtonLabel} source={SOURCE} withIcons />
            </div>
          </div>
        </Container>
      </section>

      {/* 8 · Guest reviews: all 23, one large review at a time */}
      <section aria-labelledby="reviews-heading" className="bg-paper py-section">
        <h2 id="reviews-heading" className="sr-only">
          Guest reviews
        </h2>
        <Container>
          <QuoteCarousel reviews={testimonials} />
        </Container>
      </section>

      {/* 9 · Questions */}
      <section aria-labelledby="faq-heading" className="bg-linen py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 id="faq-heading" className={displayL}>
              {faq.heading}
            </h2>
            {faq.subheading && <p className={`mt-3 ${noteClass}`}>{faq.subheading}</p>}
            {faq.image && (
              <div data-motion="photo" className="relative mt-8 aspect-[4/3] w-full max-w-[28rem] overflow-hidden rounded-[2px] lg:mt-10 lg:aspect-[3/4] lg:w-3/4">
                <SiteImage image={faq.image} fill sizes="(min-width: 1024px) 25vw, 448px" />
              </div>
            )}
          </div>
          <div className="lg:col-span-8">
            {faq.eyebrow && <p className="mb-4 text-small text-stone">{faq.eyebrow}</p>}
            <div className="border-t border-ink/15">
              {faq.items.map((item) => (
                <details key={item.question} className="group border-b border-ink/15">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-[1.5rem] leading-snug [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <Plus aria-hidden="true" strokeWidth={1} className="mt-1 size-6 shrink-0 transition-transform duration-(--duration-base) group-open:rotate-45" />
                  </summary>
                  <p className="max-w-[64ch] pb-7 pr-10 text-body leading-relaxed text-stone">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 10 · Closing: a large photo beside the invitation, on white */}
      <section aria-labelledby="cta-heading" className="bg-paper py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div data-motion="photo" className="relative aspect-[4/5] overflow-hidden rounded-[2px] lg:col-span-6">
            <SiteImage image={cta.image ?? demoPhotos.lakePenjor} alt="" fill sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
          <div className="lg:col-span-6">
            <h2 id="cta-heading" data-motion="rise" className="font-display text-[clamp(2.6rem,1.5rem+4vw,6rem)] font-light leading-[0.95]">
              {cta.heading}
            </h2>
            {cta.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 max-w-[52ch] text-body leading-relaxed text-stone">
                {paragraph}
              </p>
            ))}
            <div className="mt-9">
              <BookButton label={cta.buttonLabel} size="lg" source={SOURCE} className="rounded-full" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
