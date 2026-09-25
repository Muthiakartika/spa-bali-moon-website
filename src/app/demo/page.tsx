import Link from "next/link";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import Logo from "@/components/layout/Logo";
import { demoPhotos } from "@/components/demo/demoData";
import { buildMetadata } from "@/lib/seo";

/** DESIGN DEMOS (/demo/) — overview of the four homepage demos. Not indexed. */
export const metadata = buildMetadata({
  title: "Homepage design demos — Spa Bali Moon",
  description: "Four homepage design directions for Spa Bali Moon.",
  path: "/demo/",
  index: false,
});

const demos = [
  {
    href: "/demo/maison/",
    name: "A · Maison",
    text: "Editorial luxury, like a resort magazine. Full-screen photo, very large light serif type, a treatment index where the photo follows your pointer, a full-screen menu.",
    photo: demoPhotos.frangipaniBack,
    tone: "bg-linen",
  },
  {
    href: "/demo/temple/",
    name: "B · Temple",
    text: "Cinematic Bali. A slowly settling hero photo of a canang offering, carved-stone capitals, half photo / half text panels on light stone colours, one slowly moving line of reviews.",
    photo: demoPhotos.canangOffering,
    tone: "bg-cream",
  },
  {
    href: "/demo/botanica/",
    name: "C · Botanica",
    text: "Soft fashion-luxury. Warm cream, a high-contrast italic serif, photos in arches and circles, botanical details, one large review at a time.",
    photo: demoPhotos.greenLeaves,
    tone: "bg-cream/50",
  },
  {
    href: "/demo/tirta/",
    name: "D · Tirta",
    text: "A calm Bali day spa. A sunlit frangipani garden, an elegant serif with a soft, easy-to-read text face, thin gold icons, treatment and review cards you can swipe.",
    photo: demoPhotos.gardenFrangipani,
    tone: "bg-linen",
  },
];

export default function DemoIndexPage() {
  return (
    <main id="main-content" className="min-h-dvh bg-paper py-16">
      <Container>
        <Logo className="h-9" />
        <h1 className="mt-10 text-title">Homepage design demos</h1>
        <p className="mt-3 max-w-[60ch] text-lead text-stone">
          Four directions with the complete homepage content and the live colours, all on light backgrounds. Each has its own fonts, header and footer.
        </p>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {demos.map((demo) => (
            <li key={demo.href} className={`group relative overflow-hidden rounded-board ${demo.tone}`}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <SiteImage image={demo.photo} fill sizes="(min-width: 1024px) 30vw, 100vw" className="transition-transform duration-(--duration-drift) group-hover:scale-[1.04]" />
              </div>
              <div className="p-7">
                <h2 className="text-subtitle">
                  <Link href={demo.href} className="after:absolute after:inset-0">
                    {demo.name}
                  </Link>
                </h2>
                <p className="mt-2 text-small opacity-80">{demo.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10">
          <Link href="/" className="inline-block py-1 text-small underline decoration-gold underline-offset-[0.3em]">
            Back to the current site
          </Link>
        </p>
      </Container>
    </main>
  );
}
