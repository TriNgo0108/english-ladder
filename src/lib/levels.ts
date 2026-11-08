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

const DARK = "#2A2520";
const WHITE = "#FFFFFF";

export const LEVELS: LevelMeta[] = [
  {
    slug: "a1",
    label: "A1",
    blurb: "You can introduce yourself, ask simple questions and understand everyday words.",
    ramp: "#FBE7D3",
    fg: DARK,
  },
  {
    slug: "a2",
    label: "A2",
    blurb: "You can talk about your past and make simple plans.",
    ramp: "#F6CDA4",
    fg: DARK,
  },
  {
    slug: "b1",
    label: "B1",
    blurb: "You can handle most travel situations and explain your opinions and experiences.",
    ramp: "#EEA86E",
    fg: DARK,
  },
  {
    slug: "b2",
    label: "B2",
    blurb: "You can follow detailed conversations and write clear, structured text on many topics.",
    ramp: "#D9773A",
    fg: DARK,
  },
  {
    slug: "c1",
    label: "C1",
    blurb: "You can use English flexibly for work and study, and express subtle shades of meaning.",
    ramp: "#9A3412",
    fg: WHITE,
  },
];

export function levelMeta(slug: Level): LevelMeta {
  const meta = LEVELS.find((l) => l.slug === slug);
  if (!meta) throw new Error(`Unknown level: ${slug}`);
  return meta;
}
