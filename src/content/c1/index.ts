// Family keys used by these topics live in ../families.ts (the shared vocabulary).
import type { Topic } from "../schema";
import { advancedComparisonStructures } from "./grammar/advanced-comparison-structures";
import { advancedInversionAndFronting } from "./grammar/advanced-inversion-and-fronting";
import { advancedModality } from "./grammar/advanced-modality";
import { complexNounPhrases } from "./grammar/complex-noun-phrases";
import { ellipsisAndSubstitution } from "./grammar/ellipsis-and-substitution";
import { impersonalAndPassiveConstructions } from "./grammar/impersonal-and-passive-constructions";
import { nominalisation } from "./grammar/nominalisation";
import { theSubjunctiveAndUnrealPast } from "./grammar/the-subjunctive-and-unreal-past";

export const c1Topics: Topic[] = [
  advancedModality,
  theSubjunctiveAndUnrealPast,
  impersonalAndPassiveConstructions,
  advancedComparisonStructures,
  advancedInversionAndFronting,
  ellipsisAndSubstitution,
  nominalisation,
  complexNounPhrases,
];
