/**
 * BULAN — decorations that bring back the live site's look, drawn fresh as SVG
 * (the live theme's own decoration images were not migrated, see migration/image-inventory.md).
 * All of them are decoration only: hidden from screen readers.
 */

/* ---------- Torn paper edge ---------- */

// A fixed pseudo-random series, so the edge is the same on every visit (no hydration differences).
function roughPoints(seed: number, count: number, base: number, spread: number) {
  let value = seed;
  const next = () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
  return Array.from({ length: count + 1 }, () => base + next() * spread + (next() > 0.86 ? next() * spread : 0));
}

function edgePath(points: number[], width: number, height: number) {
  const step = width / (points.length - 1);
  const line = points.map((y, i) => `L${(i * step).toFixed(1)} ${y.toFixed(1)}`).join(" ");
  return `M0 ${height} ${line} L${width} ${height} Z`;
}

const EDGE_W = 1440;
const EDGE_H = 30;
const backEdge = edgePath(roughPoints(7, 180, 4, 7), EDGE_W, EDGE_H);
const frontEdge = edgePath(roughPoints(19, 240, 11, 6), EDGE_W, EDGE_H);

/**
 * The rough, torn-paper edge of a coloured band (as on the live site).
 * Place it right above a band ("top") or right below it ("bottom"); `className` sets the band colour, e.g. "text-linen".
 */
export function TornEdge({ side = "top", className = "text-linen" }: { side?: "top" | "bottom"; className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${EDGE_W} ${EDGE_H}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none relative z-[1] block h-5 w-full sm:h-7 ${side === "bottom" ? "-scale-y-100 -mt-px" : "-mb-px"} ${className}`}
    >
      <path d={backEdge} fill="currentColor" opacity="0.45" />
      <path d={frontEdge} fill="currentColor" />
    </svg>
  );
}

/* ---------- Floating frangipani ---------- */

const PETAL = "M50 50C38 41 33 20 45 9c11-9 25 1 21 17-2 10-8 17-16 24Z";

/**
 * A soft frangipani flower (white petals warming to gold at the heart), like the floating flowers
 * in the live hero. `id` must be unique on the page (it names the colour gradients).
 */
export function FloatingFrangipani({ id, className = "size-24" }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" className={`drop-shadow-[0_12px_18px_rgb(94_72_20/0.18)] ${className}`}>
      <defs>
        <linearGradient id={`${id}-petal`} gradientUnits="userSpaceOnUse" x1="50" y1="50" x2="50" y2="6">
          <stop offset="0" stopColor="#c9a94d" />
          <stop offset="0.38" stopColor="#f2e6dd" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <radialGradient id={`${id}-heart`}>
          <stop offset="0" stopColor="#a78627" />
          <stop offset="1" stopColor="#c9a94d" stopOpacity="0" />
        </radialGradient>
      </defs>
      {[0, 72, 144, 216, 288].map((angle) => (
        <path key={angle} d={PETAL} transform={`rotate(${angle} 50 50)`} fill={`url(#${id}-petal)`} stroke="#a78627" strokeOpacity="0.14" strokeWidth="0.6" />
      ))}
      <circle cx="50" cy="50" r="9" fill={`url(#${id}-heart)`} />
    </svg>
  );
}

/* ---------- Organic blob behind an icon ---------- */

const BLOBS = [
  "M62 6c19 1 36 12 45 29s9 38-1 54-29 27-48 27S19 106 10 89 1 50 10 33 43 5 62 6Z",
  "M58 5c20-2 41 8 50 26s6 41-6 57-33 26-53 24S12 97 6 79 4 40 16 24 38 7 58 5Z",
];

/** A soft organic blob shape (like the live site's step and "why" icons sit on). */
export function Blob({ variant = 0, className = "text-cream" }: { variant?: 0 | 1; className?: string }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false" className={`absolute inset-0 size-full ${className}`}>
      <path d={BLOBS[variant]} fill="currentColor" />
    </svg>
  );
}

/* ---------- Dashed wave between the booking steps ---------- */

/** A thin dashed wave, like the dotted path joining the live site's three booking steps. */
export function DashedWave({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true" focusable="false" className={`pointer-events-none ${className}`}>
      <path d="M0 40C120 5 230 5 330 30s210 30 340 0 240-25 330 5" fill="none" stroke="#a78627" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="6 7" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
