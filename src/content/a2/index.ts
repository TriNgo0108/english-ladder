// Family keys used by these topics live in ../families.ts (the shared vocabulary).
import type { Topic } from "../schema";
import { adverbsOfFrequency } from "./grammar/adverbs-of-frequency";
import { adverbsOfManner } from "./grammar/adverbs-of-manner";
import { comparativesAndSuperlatives } from "./grammar/comparatives-and-superlatives";
import { countableAndUncountableNouns } from "./grammar/countable-and-uncountable-nouns";
import { goingTo } from "./grammar/going-to";
import { pastContinuous } from "./grammar/past-continuous";
import { pastSimpleRegularAndIrregular } from "./grammar/past-simple-regular-and-irregular";
import { presentContinuousForFuture } from "./grammar/present-continuous-for-future";
import { presentSimpleForFuture } from "./grammar/present-simple-for-future";
import { someAnyMuchMany } from "./grammar/some-any-much-many";
import { usedToAndWould } from "./grammar/used-to-and-would";
import { will } from "./grammar/will";

export const a2Topics: Topic[] = [
  pastSimpleRegularAndIrregular,
  pastContinuous,
  comparativesAndSuperlatives,
  goingTo,
  will,
  presentContinuousForFuture,
  presentSimpleForFuture,
  adverbsOfManner,
  adverbsOfFrequency,
  someAnyMuchMany,
  countableAndUncountableNouns,
  usedToAndWould,
];
