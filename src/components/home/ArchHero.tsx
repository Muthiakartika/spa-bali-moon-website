import LotusMark from "@/components/layout/LotusMark";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import type { SiteImage as SiteImageData } from "@/data/types";
import { SplitTitle } from "./shared";

/**
 * The hero of the inner pages, in the homepage's "Taman" style, on warm cream:
 * the small gold caps line with the lotus, the big title with its last two words in gold italic,
 * an optional text, the buttons (`actions`), an optional small line (`meta`), and on the right
 * a tall arched photo with a small round photo. On phones the photos are smaller and follow the text.
 *
 * `withFactsCard`: leaves room at the bottom for the white facts card that overlaps the hero
 * (FactsCard / VisitFacts placed right after it).
 */
export default function ArchHero({
  eyebrow,
  title,
  titleAs: Title = "h1",
  titleId = "page-title",
  titleSize = "text-[clamp(3.1rem,1.6rem+6vw,7rem)] leading-[0.96]",
  text,
  actions,
  meta,
  image,
  imageFocus = "center",
  circleImage,
  circleFocus = "center",
  withFactsCard = false,
}: {
  eyebrow?: string;
  title: string;
  /** The Reservation page keeps its heading an h2 (migration-audit SEO-02). */
  titleAs?: "h1" | "h2";
  titleId?: string;
  /** Font size classes of the title (longer titles use a smaller size). */
  titleSize?: string;
  text?: string;
  actions?: React.ReactNode;
  meta?: React.ReactNode;
  image: SiteImageData;
  imageFocus?: string;
  circleImage?: SiteImageData;
  circleFocus?: string;
  withFactsCard?: boolean;
}) {
  return (
    <section aria-labelledby={titleId} className="relative overflow-hidden bg-cream">
      <TropicalLeaf className="absolute -left-24 top-6 hidden w-80 text-gold/20 lg:block" />
      <TropicalLeaf className="absolute -right-24 bottom-10 w-56 -scale-x-100 text-gold/15 lg:hidden" />
      <Container
        className={`relative grid items-center gap-12 pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-14 ${withFactsCard ? "pb-28 lg:pb-32" : "pb-16 lg:pb-20"}`}
      >
        <div className="lg:col-span-6">
          {eyebrow && (
            <p className="inline-flex items-center gap-2.5 text-[0.8125rem] font-bold uppercase tracking-[0.2em] text-gold-deep">
              <LotusMark className="h-5 w-auto shrink-0 text-gold" />
              {eyebrow}
            </p>
          )}
          <Title id={titleId} className={`mt-6 font-display ${titleSize}`}>
            <SplitTitle text={title} />
          </Title>
          {text && <p className="mt-7 max-w-[50ch] text-[1.0625rem] leading-[1.75] text-stone">{text}</p>}
          {actions && <div className={`flex flex-wrap gap-3 ${text ? "mt-9" : "mt-10"}`}>{actions}</div>}
          {meta && <div className="mt-8">{meta}</div>}
        </div>
        {/* Smaller on phones, so the content below comes sooner */}
        <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-[28rem] lg:col-span-6 lg:max-w-[34rem]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full">
            <SiteImage image={image} fill priority sizes="(min-width: 1024px) 40vw, (min-width: 640px) 448px, 304px" focus={imageFocus} />
          </div>
          {circleImage && (
            <div className="absolute -bottom-6 -left-6 size-28 overflow-hidden rounded-full border-[6px] border-cream sm:-left-3 sm:size-44 lg:-left-10">
              <SiteImage image={circleImage} fill sizes="176px" focus={circleFocus} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
