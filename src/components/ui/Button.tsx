import Link from "next/link";

/**
 * Buttons and button-looking links.
 *
 *   <ButtonLink href="/seminyak/">Explore Treatments</ButtonLink>
 *   <ButtonLink href="/seminyak/" variant="secondary">…</ButtonLink>
 *   <Button type="submit">Send message</Button>
 *
 * variant:
 *   primary   — filled gold button, the main action on a screen (booking)
 *   secondary — outlined button, for the second action next to a primary one
 *   light     — white button, for use on dark panels or on photos
 *   text      — a quiet underlined link with an arrow
 */
type Variant = "primary" | "secondary" | "light" | "text";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium " +
  "transition-[background-color,color,border-color,box-shadow,opacity,transform] duration-(--duration-press) ease-(--ease-calm) " +
  "disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98] active:opacity-90";

const variants: Record<Variant, string> = {
  primary: "rounded-control bg-gold-deep text-paper shadow-(--shadow-button) hover:bg-ink",
  secondary:
    "rounded-control border border-ink/40 bg-transparent text-ink hover:border-ink hover:bg-ink/[0.04]",
  light: "rounded-control bg-paper text-ink shadow-(--shadow-button) hover:bg-linen",
  text:
    "text-ink underline decoration-gold decoration-1 underline-offset-[0.35em] hover:decoration-ink " +
    "[&>svg]:transition-transform [&>svg]:duration-(--duration-quick) hover:[&>svg]:translate-x-0.5",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-4 text-[0.9375rem]",
  lg: "min-h-12 px-6 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", extra = "") {
  const sizeClass = variant === "text" ? "min-h-11 text-[0.9375rem]" : sizes[size];
  return `${base} ${variants[variant]} ${sizeClass} ${extra}`;
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Opens in a new tab (used for WhatsApp and Google Maps). */
  external?: boolean;
  "aria-label"?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  ...rest
}: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);
  if (external || href.startsWith("http")) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({ variant = "primary", size = "md", className = "", type = "button", ...rest }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, size, className)} {...rest} />;
}
