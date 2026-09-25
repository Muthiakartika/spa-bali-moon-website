import Image from "next/image";
import { homePage } from "@/data/pages/home";

/** The brand note from the old homepage About section (logo mark, name, "Seminyak · Since 2009", text). */
export default function AboutBadge({ className = "" }: { className?: string }) {
  const { badge } = homePage.about;
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Image src="/images/branding/sbm.webp" alt="" width={56} height={44} className="h-10 w-auto shrink-0" />
      <div>
        <p className="leading-tight">
          <span className="font-semibold">{badge.name}</span> <span className="text-stone">{badge.line}</span>
        </p>
        <p className="mt-1 text-small text-stone">{badge.text}</p>
      </div>
    </div>
  );
}
