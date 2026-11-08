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
import { advancedIdioms } from "./phrases/advanced-idioms";
import { collocationalPrecisionAndNearSynonyms } from "./phrases/collocational-precision-and-near-synonyms";
import { figurativeLanguage } from "./phrases/figurative-language";
import { chairingAMeeting } from "./speaking/chairing-a-meeting";
import { diplomaticLanguageAndNegotiating } from "./speaking/diplomatic-language-and-negotiating";
import { handlingPushback } from "./speaking/handling-pushback";
import { rhetoricalDevices } from "./speaking/rhetorical-devices";
import { discursiveAndArgumentativeWriting } from "./writing/discursive-and-argumentative-writing";
import { formalReportsAndExecutiveSummaries } from "./writing/formal-reports-and-executive-summaries";

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
  advancedIdioms,
  figurativeLanguage,
  collocationalPrecisionAndNearSynonyms,
  discursiveAndArgumentativeWriting,
  formalReportsAndExecutiveSummaries,
  chairingAMeeting,
  diplomaticLanguageAndNegotiating,
  handlingPushback,
  rhetoricalDevices,
];
