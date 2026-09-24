/**
 * Decorative tropical leaf (line drawing), in the spirit of a Balinese spa garden.
 * Sparse on purpose: a single palm frond or a small sprig, never a dense bush.
 * The drawing was generated from curves (scratch script), not traced from an image.
 *
 *   <TropicalLeaf variant="frond" className="w-72 text-gold/40" />
 *
 * Colour comes from `currentColor`, so set it with a text colour class.
 * It is decoration only: hidden from screen readers.
 */
const drawings = {
  frond: { viewBox: "0 0 400 400", d: "M55 395C110 275 195 160 345 85M83.8 337.9Q159.2 363.3 233.8 335.7Q159 350.3 83.8 337.9M83.8 337.9Q159 348.8 233.8 335.7M83.8 337.9Q39.7 276.9 6.9 209.2Q28.6 283.6 83.8 337.9M83.8 337.9Q38.6 277.6 6.9 209.2M109.8 295Q179.2 324 251.5 302.9Q179.9 311.7 109.8 295M109.8 295Q180 310.3 251.5 302.9M109.8 295Q73 234.1 45.7 168.3Q62 239.6 109.8 295M109.8 295Q71.6 234.8 45.7 168.3M139.3 253.4Q200.8 284.9 268.4 270.9Q202.3 273.7 139.3 253.4M139.3 253.4Q202.5 272.4 268.4 270.9M139.3 253.4Q110.9 194.7 90 132.9Q100.5 199 139.3 253.4M139.3 253.4Q109.3 195.4 90 132.9M172.9 213.6Q225.3 246.2 286.6 239.2Q227.5 236.4 172.9 213.6M172.9 213.6Q227.8 235.3 286.6 239.2M172.9 213.6Q153 158.8 138.2 102.4Q143.4 161.8 172.9 213.6M172.9 213.6Q151.1 159.4 138.2 102.4M211 176Q253.8 208.1 307.4 207.1Q256.5 199.8 211 176M211 176Q256.8 199 307.4 207.1M211 176Q198.9 126.7 189.8 76.9Q190.3 128.6 211 176M211 176Q196.9 127.2 189.8 76.9M253.8 140.8Q287.1 170.9 331.8 174.6Q290 164.1 253.8 140.8M253.8 140.8Q290.3 163.6 331.8 174.6M253.8 140.8Q248.5 98.7 244.1 56.5Q241.2 99.6 253.8 140.8M253.8 140.8Q246.5 99 244.1 56.5M301.9 108.7Q326.1 134.7 361 141.4Q328.9 129.6 301.9 108.7M301.9 108.7Q329.1 129.3 361 141.4M301.9 108.7Q301.5 74.9 300.7 41.2Q295.7 75 301.9 108.7M301.9 108.7Q299.7 74.9 300.7 41.2" },
  sprig: { viewBox: "0 0 200 200", d: "M30 185Q79.3 126.3 100.4 52.6Q56.7 114.3 30 185M30 185L100.4 52.6M30 185Q106.8 150.8 165.2 90.4Q92.1 129.8 30 185M30 185L165.2 90.4M30 185Q96.6 191.8 158.7 166.9Q93 166.4 30 185M30 185L158.7 166.9" },
};

export default function TropicalLeaf({
  variant = "frond",
  className = "",
}: {
  variant?: keyof typeof drawings;
  className?: string;
}) {
  const drawing = drawings[variant];
  return (
    <svg
      viewBox={drawing.viewBox}
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={drawing.d} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
