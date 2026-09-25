import { ArrowRight, Flower2, HandHeart, House, MessageCircle, Plus } from "lucide-react";
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
import AboutBadge from "../AboutBadge";
import { demoPhotos, featuredCards, homeMenuTabs } from "../demoData";

const SOURCE = "Homepage (demo Temple)";
const whyIcons = [HandHeart, House, Flower2, MessageCircle];
const titleL = "font-display text-[clamp(2rem,1.4rem+2.2vw,3.25rem)] leading-[1.1]";
const kicker = "text-small uppercase tracking-[0.18em] text-gold-deep";

/** A small carved-looking ornament: gold rule, flower, gold rule. */
function Ornament({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center gap-3 text-gold ${className}`}>
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70" />
      <Flower2 strokeWidth={1.25} className="size-5" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}

/**
 * DEMO B · TEMPLE — homepage body, light version. Cinematic Bali on white, linen and cream:
 * carved-stone capitals (Marcellus), large Balinese photos, half photo / half text panels.
 * Same content and order as the real homepage (every section, every item).
 */
export default function TempleHome() {
  const { hero, catalog, about, booking, whyUs, moreToEnjoy, packages, faq, cta } = homePage;
  const sharedLine = homePage.featuredTreatments[0]?.text;

  return (
    <div className="bg-paper text-ink">
      {/* 1 · Hero: the canang offering slowly settling, the title on a light stone-like panel */}
      <section aria-labelledby="home-title" className="relative isolate flex min-h-[88dvh] items-center justify-center overflow-hidden px-gutter py-20">
        <div className="demo-slow-zoom absolute inset-0 -z-10">
          <SiteImage image={demoPhotos.canangOffering} fill priority sizes="100vw" focus="35% center" />
        </div>
        <div className="w-full max-w-[46rem] bg-paper/92 px-6 py-12 text-center shadow-(--shadow-board) backdrop-blur-sm sm:px-14 sm:py-16">
          <Ornament className="justify-center" />
          <h1 id="home-title" className="mt-7 font-display text-[clamp(2.6rem,1.4rem+4.6vw,5.5rem)] uppercase leading-[0.98] tracking-[0.04em]">
            {hero.title}
          </h1>
          <p className={`mt-6 ${kicker}`}>
            {business.openingHours.label} · {business.openingHours.display}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <BookButton label={headerBookingLabel} size="lg" source={SOURCE} />
            <Link href="/seminyak/" className="group inline-flex min-h-12 items-center gap-2 underline decoration-gold underline-offset-[0.35em] hover:decoration-ink">
              Explore Treatments
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 1b · Hero text, centred between the two hero photos */}
      <section aria-label="Introduction" className="py-section">
        {/* On phones: the text first, then the two photos side by side */}
        <Container className="grid grid-cols-2 items-center gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-10">
          {hero.images[0] && (
            <div data-motion="photo" className="arch relative order-2 aspect-[3/4] overflow-hidden lg:order-none lg:col-span-3">
              <SiteImage image={hero.images[0]} fill sizes="(min-width: 1024px) 22vw, 45vw" />
            </div>
          )}
          <div className="order-1 col-span-2 mb-6 flex flex-col items-center text-center lg:order-none lg:col-span-6 lg:mb-0">
            <Ornament />
            <p data-motion="rise" className="mt-7 font-display text-[clamp(1.35rem,1.1rem+0.9vw,1.9rem)] leading-[1.5]">
              {hero.text}
            </p>
          </div>
          {hero.images[1] && (
            <div data-motion="photo" className="arch relative order-3 aspect-[3/4] overflow-hidden lg:order-none lg:col-span-3">
              <SiteImage image={hero.images[1]} fill sizes="(min-width: 1024px) 22vw, 45vw" />
            </div>
          )}
        </Container>
      </section>

      {/* 2 · Featured treatments: all 23, tall photo cards you can swipe */}
      <section aria-labelledby="reel-heading" className="bg-linen py-section">
        <Container className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="reel-heading" data-motion="rise" className={`max-w-[20ch] ${titleL}`}>
            {sharedLine}
          </h2>
          <Link href="/seminyak/" className="inline-flex min-h-11 items-center gap-2 text-gold-deep underline decoration-gold/50 underline-offset-[0.35em] hover:decoration-gold-deep">
            Explore Treatments
            <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
          </Link>
        </Container>
        <div role="region" tabIndex={0} aria-label="Treatments (scroll sideways)" className="scrollbar-thin mt-12 snap-x snap-mandatory overflow-x-auto scroll-px-gutter px-gutter pb-6">
          <ul className="flex gap-4">
            {featuredCards.map((card) => (
              <li key={card.treatment.slug + card.name} className="group relative w-[70vw] max-w-[20rem] shrink-0 snap-start sm:w-[20rem]">
                <div className="relative aspect-[3/4.2] overflow-hidden">
                  <SiteImage image={card.treatment.cardImage} alt="" fill sizes="320px" className="transition-transform duration-(--duration-drift) ease-(--ease-calm) group-hover:scale-[1.06]" />
                </div>
                <div className="border-x border-b border-gold/30 bg-paper px-5 py-4">
                  <h3 className="font-display text-[1.4rem] leading-tight">
                    <Link href={`/seminyak/${card.treatment.slug}/`} className="after:absolute after:inset-0">
                      {card.name}
                    </Link>
                  </h3>
                  <p className="numeric mt-1 text-small text-gold-deep">{card.priceLabel}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · What makes us different: text on cream, photo on the right */}
      <section aria-labelledby="why-heading" className="grid lg:grid-cols-2">
        <div className="order-2 flex items-center bg-cream/70 px-gutter py-section lg:order-1 lg:px-16 xl:px-24">
          <div className="max-w-[36rem]">
            <p className={kicker}>{whyUs.eyebrow}</p>
            <h2 id="why-heading" data-motion="rise" className={`mt-5 ${titleL}`}>
              {whyUs.heading}
            </h2>
            <ul className="mt-10 space-y-7">
              {whyUs.items.map((item, i) => {
                const Icon = whyIcons[i % whyIcons.length];
                return (
                  <li key={item.title} className="group relative flex gap-5">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-paper">
                      <Icon aria-hidden="true" strokeWidth={1.25} className="size-5 text-gold-deep" />
                    </span>
                    <div>
                      <h3 className="font-display text-[1.35rem]">
                        <Link href={item.href} className="after:absolute after:inset-0 group-hover:text-gold-deep">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-small text-stone">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div data-motion="photo" className="relative order-1 min-h-[60vh] overflow-hidden lg:order-2 lg:min-h-[46rem]">
          <SiteImage image={demoPhotos.frangipaniPool} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </section>

      {/* 4 · About: the lake and penjor on the left, text on white */}
      <section id="about" aria-labelledby="about-heading" className="grid lg:grid-cols-2">
        {/* The text side is tall, so on large screens the photo stays in view (sticky) instead of being stretched */}
        <div className="relative">
          <div data-motion="photo" className="relative h-[60vh] overflow-hidden lg:sticky lg:top-20 lg:h-[calc(100dvh-5rem)] lg:max-h-[52rem]">
            <SiteImage image={demoPhotos.lakePenjor} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" focus="30% center" />
          </div>
        </div>
        <div className="flex items-center bg-paper px-gutter py-section lg:px-16 xl:px-24">
          <div className="max-w-[36rem]">
            <p className={kicker}>{about.eyebrow}</p>
            <h2 id="about-heading" data-motion="rise" className={`mt-5 ${titleL}`}>
              {about.heading}
            </h2>
            <p className="mt-6 text-body leading-relaxed text-stone">{about.text}</p>
            <ul className="mt-8 grid gap-x-6 gap-y-2 text-small sm:grid-cols-2">
              {about.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[0.6em] h-px w-3 shrink-0 bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {about.images.map((image) => (
                <div key={image.src} className="relative aspect-[4/3] overflow-hidden">
                  <SiteImage image={image} fill sizes="(min-width: 1024px) 16vw, 45vw" />
                </div>
              ))}
            </div>
            <AboutBadge className="mt-8 border-t border-gold/30 pt-6" />
            <Link href={about.button.href} className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/60 px-6 transition-colors hover:bg-gold-deep hover:text-paper">
              {about.button.label}
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
            </Link>
          </div>
        </div>
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

      {/* 6 · How to book: steps on white, a villa massage photo on the right */}
      <section aria-labelledby="booking-heading" className="grid lg:grid-cols-2">
        <div className="flex items-center bg-paper px-gutter py-section lg:px-16 xl:px-24">
          <div className="max-w-[36rem]">
            <p className={kicker}>{booking.eyebrow}</p>
            <h2 id="booking-heading" data-motion="rise" className={`mt-5 ${titleL}`}>
              {booking.heading}
            </h2>
            <ol className="mt-10 space-y-8">
              {booking.steps.map((step) => (
                <li key={step.number} data-motion="rise" className="grid grid-cols-[4rem_1fr] gap-4 border-t border-gold/30 pt-6">
                  <span aria-hidden="true" className="numeric font-display text-[2.25rem] leading-none text-gold-deep">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.4rem]">{step.title}</h3>
                    <p className="mt-1 text-small text-stone">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <BookButton label={booking.eyebrow} size="lg" source={SOURCE} />
            </div>
          </div>
        </div>
        <div data-motion="photo" className="relative min-h-[50vh] overflow-hidden lg:min-h-[44rem]">
          <SiteImage image={demoPhotos.villaPool} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </section>

      {/* 7 · More to enjoy + spa packages */}
      <section aria-labelledby="packages-heading" className="bg-cream/60 py-section">
        <Container>
          <div className="flex flex-col items-center text-center">
            <Ornament />
            <p className={`mt-6 ${kicker}`}>{moreToEnjoy.eyebrow}</p>
            <h2 id="more-heading" className={`mt-4 max-w-[24ch] ${titleL}`}>
              {moreToEnjoy.heading}
            </h2>
            <div className="mt-5 max-w-[64ch] space-y-3 text-body text-stone">
              {moreToEnjoy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-section grid gap-6 border-t border-gold/30 pt-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className={kicker}>{packages.eyebrow}</p>
              <h2 id="packages-heading" className={`mt-4 ${titleL}`}>
                {packages.heading}
              </h2>
              <p className="mt-5 max-w-[62ch] text-body text-stone">{packages.text}</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href="/seminyak/#packages" className="inline-flex min-h-11 items-center gap-2 text-gold-deep underline decoration-gold/50 underline-offset-[0.35em] hover:decoration-gold-deep">
                {packages.button.label}
                <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <PackageCards group={getPackageGroup(packages.packageGroup)} buttonLabel={packages.cardButtonLabel} source={SOURCE} withIcons />
          </div>
        </Container>
      </section>

      {/* 8 · Guest reviews: all 23 in one slowly moving line (stands still with "reduce motion") */}
      <section aria-labelledby="reviews-heading" className="demo-marquee-wrap overflow-hidden border-y border-gold/30 bg-paper py-16">
        <h2 id="reviews-heading" className="sr-only">
          Guest reviews
        </h2>
        <div className="demo-marquee flex w-max items-center gap-12">
          {[...testimonials, ...testimonials].map((review, i) => (
            <figure key={`${review.name}-${i}`} aria-hidden={i >= testimonials.length ? true : undefined} className="flex max-w-[28rem] shrink-0 items-baseline gap-4">
              <blockquote className="font-display text-[1.5rem] leading-snug">&ldquo;{review.text}&rdquo;</blockquote>
              <figcaption className="shrink-0 text-small text-gold-deep">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 9 · Questions */}
      <section aria-labelledby="faq-heading" className="bg-linen py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 id="faq-heading" className={titleL}>
              {faq.heading}
            </h2>
            {faq.subheading && <p className={`mt-3 ${kicker}`}>{faq.subheading}</p>}
            {faq.image && (
              <div data-motion="photo" className="arch relative mt-8 aspect-[4/3] w-full max-w-[28rem] overflow-hidden lg:mt-10 lg:aspect-[3/4] lg:w-3/4">
                <SiteImage image={faq.image} fill sizes="(min-width: 1024px) 25vw, 448px" />
              </div>
            )}
          </div>
          <div className="lg:col-span-8">
            {faq.eyebrow && <p className="mb-4 text-small text-stone">{faq.eyebrow}</p>}
            <div className="border-t border-gold/30">
              {faq.items.map((item) => (
                <details key={item.question} className="group border-b border-gold/30">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-[1.3rem] leading-snug [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <Plus aria-hidden="true" strokeWidth={1.25} className="mt-1 size-5 shrink-0 text-gold-deep transition-transform duration-(--duration-base) group-open:rotate-45" />
                  </summary>
                  <p className="max-w-[64ch] pb-7 pr-10 text-body leading-relaxed text-stone">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 10 · Closing: photo on the left, the invitation on cream */}
      <section aria-labelledby="cta-heading" className="grid lg:grid-cols-2">
        <div data-motion="photo" className="relative min-h-[50vh] overflow-hidden lg:min-h-[40rem]">
          <SiteImage image={cta.image ?? demoPhotos.beachCouple} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="flex items-center bg-cream/70 px-gutter py-section lg:px-16 xl:px-24">
          <div className="max-w-[36rem]">
            <Ornament />
            <h2 id="cta-heading" data-motion="rise" className="mt-6 font-display text-[clamp(2.2rem,1.4rem+3vw,4rem)] uppercase leading-[1.02] tracking-[0.03em]">
              {cta.heading}
            </h2>
            {cta.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-body leading-relaxed text-stone">
                {paragraph}
              </p>
            ))}
            <div className="mt-9">
              <BookButton label={cta.buttonLabel} size="lg" source={SOURCE} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
