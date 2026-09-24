type SectionHeadingProps = {
  /** The heading text (kept exactly as on the old site). */
  title: string;
  /** Heading level. Each page has exactly one h1; sections use h2. */
  as?: "h1" | "h2" | "h3";
  /** id for the heading (pass the same value to <Section labelledBy>). */
  id?: string;
  /**
   * The small line the old site showed ABOVE the heading (e.g. "A Traditional Wellness").
   * The text is kept, but shown as a quiet line UNDER the heading, never as a label above it.
   */
  note?: string;
  /** Intro paragraphs under the heading. */
  intro?: string[];
  className?: string;
};

const sizeFor = {
  h1: "text-display",
  h2: "text-title",
  h3: "text-subtitle",
};

/**
 * Heading block used at the top of most sections: heading, then note, then intro,
 * stacked in one column and left-aligned.
 */
export default function SectionHeading({ title, as: Tag = "h2", id, note, intro = [], className = "" }: SectionHeadingProps) {
  return (
    <div data-motion="rise" className={`flex flex-col gap-3 ${className}`}>
      <Tag id={id} className={`${sizeFor[Tag]} max-w-[20ch] text-ink`}>
        {title}
      </Tag>
      {note && <p className="text-lead text-stone">{note}</p>}
      {intro.length > 0 && (
        <div className="mt-3 max-w-[62ch] space-y-4 text-lead text-stone">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}
