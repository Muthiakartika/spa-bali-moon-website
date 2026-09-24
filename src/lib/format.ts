/**
 * Price formatting used across the site.
 * The old website wrote prices in thousands of Rupiah: 159000 -> "159K".
 */

/** 159000 -> "159K" */
export function formatPrice(price: number): string {
  return `${Math.round(price / 1000)}K`;
}

/** 159000 -> "IDR 159K" */
export function formatPriceIdr(price: number): string {
  return `IDR ${formatPrice(price)}`;
}
