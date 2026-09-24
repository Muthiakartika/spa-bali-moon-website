type SectionHeadingProps = {
  /** The heading text (kept exactly as on the old site). */
  title: string;
  /** Heading level. Each page has exactly one h1; sections use h2. */
  as?: "h1" | "h2" | "h3";
  /** id for the heading (pass the same value to <Section labelledBy>). */
  id?: string;
  /**
   * The small line the old site showed ABOVE the heading (e.g. "A Traditional Wellness").
   * The text is kept, but it is shown as a side note: to the left of the heading on
   * large screens and under the heading on phones — never as a label above it.
   */
  note?: string;
  /** Intro paragraphs under the heading. */
  intro?: string[];
  /**
   * "rail"    = the note sits in a left margin column (full-width sections).
   * "stacked" = heading, then note, then intro (narrow columns, e.g. beside a photo).
   */
  layout?: "rail" | "stacked";
  className?: string;
};

const sizeFor = {
  h1: "text-display",
  h2: "text-title",
  h3: "text-subtitle",
};

/** Heading block used at the top of most sections. */
export default function SectionHeading({
  title,
  as: Tag = "h2",
  id,
  note,
  intro = [],
  layout = "rail",
  className = "",
}: SectionHeadingProps) {
  const heading = (
    <Tag id={id} className={`${sizeFor[Tag]} max-w-[20ch] text-olive`}>
      {title}
    </Tag>
  );

  const noteEl = note ? (
    <p className="font-serif text-[1.25rem] italic leading-snug text-brown-ink lg:text-[1.35rem]">{note}</p>
  ) : null;

  const introEl =
    intro.length > 0 ? (
      <div className="max-w-[62ch] space-y-4 text-lead text-brown-ink">
        {intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    ) : null;

  if (layout === "stacked" || !note) {
    return (
      <div className={`flex flex-col gap-4 ${className}`}>
        {heading}
        {noteEl}
        {introEl && <div className="mt-2">{introEl}</div>}
      </div>
    );
  }

  // "rail": 12-column grid on large screens. The note sits in the left 3 columns beside
  // the heading; on phones everything stacks as heading -> note -> intro.
  return (
    <div className={`grid gap-4 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-6 ${className}`}>
      <div className="lg:col-span-9 lg:col-start-4 lg:row-start-1">{heading}</div>
      <div className="lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:pt-4">
        <div className="flex items-start gap-3">
          <span aria-hidden="true" className="mt-[0.55em] hidden size-2.5 shrink-0 rounded-full bg-sage lg:block" />
          {noteEl}
        </div>
      </div>
      {introEl && <div className="mt-2 lg:col-span-9 lg:col-start-4 lg:row-start-2 lg:mt-0">{introEl}</div>}
    </div>
  );
}
