// Family keys used by these topics live in ../families.ts (the shared vocabulary).
import type { Topic } from "../schema";
import { comparativesAndSuperlatives } from "./grammar/comparatives-and-superlatives";
import { goingTo } from "./grammar/going-to";
import { pastContinuous } from "./grammar/past-continuous";
import { pastSimpleRegularAndIrregular } from "./grammar/past-simple-regular-and-irregular";
import { presentContinuousForFuture } from "./grammar/present-continuous-for-future";
import { will } from "./grammar/will";

export const a2Topics: Topic[] = [
  pastSimpleRegularAndIrregular,
  pastContinuous,
  comparativesAndSuperlatives,
  goingTo,
  will,
  presentContinuousForFuture,
];
