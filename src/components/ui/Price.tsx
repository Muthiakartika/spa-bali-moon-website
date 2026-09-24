import { formatPrice } from "@/lib/format";

/**
 * Shows a price the way the old site wrote it: 159000 -> "159K" (or "IDR 159K").
 * Numbers use tabular figures so prices line up in columns.
 */
export default function Price({
  value,
  withCurrency = false,
  className = "",
}: {
  /** Price in Rupiah, e.g. 159000 */
  value: number;
  /** true -> "IDR 159K" */
  withCurrency?: boolean;
  className?: string;
}) {
  return (
    <span className={`numeric ${className}`}>
      {withCurrency && <span className="mr-1 text-[0.72em] tracking-[0.08em]">IDR</span>}
      {formatPrice(value)}
    </span>
  );
}
