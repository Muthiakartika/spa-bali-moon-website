"use client";

import Image from "next/image";
import { useState } from "react";
import type { SiteImage as SiteImageData } from "@/data/types";

type SiteImageProps = {
  image: SiteImageData;
  /**
   * How wide the image is on screen, so the browser downloads the right size.
   * e.g. "(min-width: 1024px) 50vw, 100vw"
   */
  sizes: string;
  /** Fill the parent box (the parent needs a size and `position: relative`). */
  fill?: boolean;
  /**
   * Load this image first (use only for the big image at the top of a page).
   * Next.js 16 replaced the old `priority` option with loading="eager" + fetchPriority="high".
   */
  priority?: boolean;
  /** Which part of the photo to keep when it is cropped, e.g. "50% 30%". */
  focus?: string;
  className?: string;
  /** Override the alt text from the data (e.g. "" when the image is decorative here). */
  alt?: string;
};

/**
 * Every photo on the site goes through this component (it uses next/image).
 * If a file is missing, a calm sand-coloured block is shown instead of a broken icon.
 */
export default function SiteImage({ image, sizes, fill = false, priority = false, focus, className = "", alt }: SiteImageProps) {
  const [failed, setFailed] = useState(false);
  const altText = alt ?? image.alt;

  if (failed) {
    return (
      <span
        role={altText ? "img" : undefined}
        aria-label={altText || undefined}
        className={`block bg-linen ${fill ? "absolute inset-0" : ""} ${className}`}
        style={fill ? undefined : { aspectRatio: `${image.width} / ${image.height}` }}
      />
    );
  }

  const common = {
    src: image.src,
    sizes,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    fetchPriority: priority ? ("high" as const) : undefined,
    onError: () => setFailed(true),
    className: `${fill ? "object-cover" : "h-auto w-full"} ${className}`,
    style: focus ? { objectPosition: focus } : undefined,
  };

  return fill ? (
    <Image {...common} alt={altText} fill />
  ) : (
    <Image {...common} alt={altText} width={image.width} height={image.height} />
  );
}
