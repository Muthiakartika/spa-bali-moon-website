import {
  Activity,
  Droplets,
  Ear,
  Feather,
  Flame,
  Flower2,
  Footprints,
  Hand,
  HandFist,
  HandHeart,
  HeartHandshake,
  Leaf,
  Paintbrush,
  Palmtree,
  PersonStanding,
  Ribbon,
  Sparkle,
  Sparkles,
  Stone,
  Sun,
  UserRound,
  Waves,
  type LucideIcon,
} from "lucide-react";

/**
 * A small icon for a treatment name, e.g. "Cream Bath" → water drops.
 * Rules are checked from top to bottom; the first word found in the name wins.
 * Names without a match get a flower.
 */
const rules: [keyword: string, icon: LucideIcon][] = [
  ["mani & pedi", Paintbrush],
  ["manicure pedicure", Paintbrush],
  ["nail", Paintbrush],
  ["manicure", Hand],
  ["pedicure", Footprints],
  ["reflexology", Footprints],
  ["foot", Footprints],
  ["ear candle", Ear],
  ["candle", Flame],
  ["hot stone", Stone],
  ["facial", Sparkles],
  ["cream bath", Droplets],
  ["scrub", Leaf],
  ["coconut", Palmtree],
  ["sunburn", Sun],
  ["waxing", Feather],
  ["hair", Ribbon],
  ["couple", HeartHandshake],
  ["lymphatic", Waves],
  ["cellulite", Sparkle],
  ["sport", Activity],
  ["deep tissue", HandFist],
  ["thai", PersonStanding],
  ["shiatsu", Hand],
  ["traditional", Flower2],
  ["head", UserRound],
  ["massage", HandHeart],
];

export function treatmentIcon(name: string): LucideIcon {
  const lower = name.toLowerCase();
  return rules.find(([keyword]) => lower.includes(keyword))?.[1] ?? Flower2;
}
