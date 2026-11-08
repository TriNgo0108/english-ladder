// Family keys used by these topics live in ../families.ts (the shared vocabulary).
import type { Topic } from "../schema";
import { advancedComparisonStructures } from "./grammar/advanced-comparison-structures";
import { advancedModality } from "./grammar/advanced-modality";
import { impersonalAndPassiveConstructions } from "./grammar/impersonal-and-passive-constructions";
import { theSubjunctiveAndUnrealPast } from "./grammar/the-subjunctive-and-unreal-past";

export const c1Topics: Topic[] = [
  advancedModality,
  theSubjunctiveAndUnrealPast,
  impersonalAndPassiveConstructions,
  advancedComparisonStructures,
];
