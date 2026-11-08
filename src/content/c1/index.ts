// Family keys used by these topics live in ../families.ts (the shared vocabulary).
import type { Topic } from "../schema";
import { advancedComparisonStructures } from "./grammar/advanced-comparison-structures";
import { advancedInversionAndFronting } from "./grammar/advanced-inversion-and-fronting";
import { advancedModality } from "./grammar/advanced-modality";
import { complexNounPhrases } from "./grammar/complex-noun-phrases";
import { concessiveClauses } from "./grammar/concessive-clauses";
import { discourseMarkersAndCohesion } from "./grammar/discourse-markers-and-cohesion";
import { ellipsisAndSubstitution } from "./grammar/ellipsis-and-substitution";
import { impersonalAndPassiveConstructions } from "./grammar/impersonal-and-passive-constructions";
import { nominalisation } from "./grammar/nominalisation";
import { registerAndFormalityShifts } from "./grammar/register-and-formality-shifts";
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
  concessiveClauses,
  discourseMarkersAndCohesion,
  registerAndFormalityShifts,
];
