import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import type { SiteImage as SiteImageData } from "@/data/types";

type PageHeroProps = {
  /** The page's H1. */
  title: string;
  /** Small line the old site showed above the H1 (shown under it here). */
  note?: string;
  /** Optional paragraph under the title. */
  text?: string;
  /** Extra small line, e.g. opening times. */
  meta?: string;
  image: SiteImageData;
  buttonLabel?: string;
  /** Treatment named in the WhatsApp message. */
  treatment?: string;
  source?: string;
  /** Extra buttons next to the booking button. */
  children?: React.ReactNode;
};

/**
 * Top of a treatment or service page: title block, then one wide original photo.
 */
export default function PageHero({ title, note, text, meta, image, buttonLabel = "Book Now", treatment, source, children }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="bg-ivory">
      <Container className="grid gap-8 pb-10 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-end lg:pb-14 lg:pt-20">
        <div className="lg:col-span-8">
          <h1 id="page-title" className="text-display text-olive">
            {title}
          </h1>
          {note && <p className="mt-4 font-serif text-[1.35rem] italic text-brown-ink sm:text-[1.6rem]">{note}</p>}
        </div>
        <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:items-end lg:text-right">
          {text && <p className="max-w-[44ch] text-lead text-brown-ink">{text}</p>}
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <BookButton label={buttonLabel} treatment={treatment} source={source} size="lg" />
            {children}
          </div>
          {meta && <p className="label-caps text-brown-ink">{meta}</p>}
        </div>
      </Container>
      <div className="relative mx-auto aspect-[4/3] w-[calc(100%-2*var(--spacing-gutter))] max-w-[90rem] overflow-hidden rounded-board sm:aspect-[16/8] lg:aspect-[1920/760]">
        <SiteImage image={image} fill priority sizes="100vw" />
      </div>
    </section>
  );
}
