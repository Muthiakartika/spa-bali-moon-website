import Link from "next/link";

/**
 * Buttons and button-looking links.
 *
 *   <ButtonLink href="/seminyak/">Explore Treatments</ButtonLink>
 *   <ButtonLink href="/seminyak/" variant="secondary">…</ButtonLink>
 *   <Button type="submit">Send message</Button>
 *
 * variant:
 *   primary   — Warm Brown pill, the main action on a screen (booking)
 *   secondary — outlined pill, for the second action next to a primary one
 *   light     — Ivory pill, for use on dark panels or on photos
 *   text      — a quiet underlined link with an arrow
 */
type Variant = "primary" | "secondary" | "light" | "text";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-sans font-semibold tracking-[0.01em] " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-(--duration-quick) ease-out-expo " +
  "disabled:cursor-not-allowed disabled:opacity-50 active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "rounded-control bg-brown-deep text-ivory hover:bg-olive hover:shadow-lift",
  secondary:
    "rounded-control border border-brown/60 bg-transparent text-olive hover:border-brown-deep hover:bg-brown-deep hover:text-ivory",
  light: "rounded-control bg-ivory text-olive hover:bg-taupe",
  text:
    "text-olive underline decoration-taupe decoration-1 underline-offset-[0.35em] hover:decoration-olive " +
    "[&>svg]:transition-transform [&>svg]:duration-(--duration-quick) hover:[&>svg]:translate-x-0.5",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-[0.9375rem]",
  lg: "min-h-13 px-7 text-base",
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
