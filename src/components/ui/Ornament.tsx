import LotusMark from "@/components/layout/LotusMark";

/** Gold rule · Spa Bali Moon lotus (from the logo) · gold rule, used above section headings. Decoration only. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center gap-3 text-gold ${className}`}>
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/70 sm:w-14" />
      <LotusMark className="h-6 w-auto" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/70 sm:w-14" />
    </div>
  );
}
