import Image from "next/image";
import Link from "next/link";

/**
 * The Spa Bali Moon logo (lotus + wordmark), linking to the homepage.
 * The logo files are SVG, so they stay sharp at any size (no optimisation needed).
 * `className` sets the logo HEIGHT, e.g. "h-8"; the width follows automatically.
 */
export default function Logo({ variant = "header", className = "h-8" }: { variant?: "header" | "footer"; className?: string }) {
  const file =
    variant === "header"
      ? { src: "/images/branding/smbtitle.svg", width: 435, height: 80 }
      : { src: "/images/branding/smbtitle-footer.svg", width: 476, height: 95 };

  return (
    <Link href="/" aria-label="Spa Bali Moon, home" className="inline-flex shrink-0 items-center">
      <Image
        src={file.src}
        width={file.width}
        height={file.height}
        alt="Spa Bali Moon"
        unoptimized
        className={`w-auto max-w-none ${className}`}
      />
    </Link>
  );
}
