/**
 * TIRTA — a frangipani (kamboja) flower in thin gold line art: five petals turning like a
 * pinwheel, the flower you see on every offering and temple step in Bali. Decoration only.
 */
export function FrangipaniMark({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round" aria-hidden="true" focusable="false" className={className}>
      {[0, 72, 144, 216, 288].map((angle) => (
        <path key={angle} transform={`rotate(${angle} 24 24)`} d="M24 23.5C19.2 18.4 18.6 9.6 23.2 4.6c5.6 2 6.6 11.4.8 18.9Z" />
      ))}
      <circle cx="24" cy="24" r="2.2" />
    </svg>
  );
}

/** Gold rule · frangipani · gold rule, used above section headings. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center gap-3 text-gold ${className}`}>
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/70 sm:w-14" />
      <FrangipaniMark className="size-6" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/70 sm:w-14" />
    </div>
  );
}
