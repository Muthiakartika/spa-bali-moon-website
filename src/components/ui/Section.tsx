import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  /** Background: "ivory" (default page colour), "sand" or "sage" (soft bands to separate content). */
  tone?: "ivory" | "sand" | "sage";
  /** Remove the top or bottom space when two sections should sit close together. */
  spacing?: "both" | "top" | "bottom" | "none";
  id?: string;
  /** id of the heading inside, so screen readers can name the section. */
  labelledBy?: string;
  className?: string;
};

/**
 * One horizontal band of a page with the standard section spacing.
 * The same spacing everywhere keeps the page rhythm calm and consistent.
 */
export default function Section({
  children,
  tone = "ivory",
  spacing = "both",
  id,
  labelledBy,
  className = "",
}: SectionProps) {
  const toneClass = { ivory: "bg-ivory", sand: "bg-sand", sage: "bg-sage-mist" }[tone];
  const spacingClass = {
    both: "py-section",
    top: "pt-section",
    bottom: "pb-section",
    none: "",
  }[spacing];

  return (
    <section id={id} aria-labelledby={labelledBy} className={`${toneClass} ${spacingClass} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
