import type { Level } from "@/content/schema";

export type LevelMeta = {
  slug: Level;
  label: string;
  blurb: string;
  /** Badge background; deepens from A1 to C1. */
  ramp: string;
  /** Badge text colour, chosen for at least 4.5:1 against `ramp`. */
  fg: string;
};

const DARK = "#1B1F2A";
const WHITE = "#FFFFFF";

export const LEVELS: LevelMeta[] = [
  {
    slug: "a1",
    label: "A1",
    blurb: "You can introduce yourself, ask simple questions and understand everyday words.",
    ramp: "#DBEAFE",
    fg: DARK,
  },
  {
    slug: "a2",
    label: "A2",
    blurb: "You can talk about your past and make simple plans.",
    ramp: "#BFDBFE",
    fg: DARK,
  },
  {
    slug: "b1",
    label: "B1",
    blurb: "You can handle most travel situations and explain your opinions and experiences.",
    ramp: "#93C5FD",
    fg: DARK,
  },
  {
    slug: "b2",
    label: "B2",
    blurb: "You can follow detailed conversations and write clear, structured text on many topics.",
    ramp: "#60A5FA",
    fg: DARK,
  },
  {
    slug: "c1",
    label: "C1",
    blurb: "You can use English flexibly for work and study, and express subtle shades of meaning.",
    ramp: "#2563EB",
    fg: WHITE,
  },
];

export function levelMeta(slug: Level): LevelMeta {
  const meta = LEVELS.find((l) => l.slug === slug);
  if (!meta) throw new Error(`Unknown level: ${slug}`);
  return meta;
}
