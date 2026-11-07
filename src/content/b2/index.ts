// Family keys used by these topics live in ../families.ts (the shared vocabulary).
import type { Topic } from "../schema";
import { adjectiveAndVerbPhrases } from "./grammar/adjective-and-verb-phrases";
import { advancedPassiveAndReportingVerbs } from "./grammar/advanced-passive-and-reporting-verbs";
import { couldWasAbleToAndCouldHave } from "./grammar/could-was-able-to-and-could-have";
import { describingCertaintyInThePast } from "./grammar/describing-certainty-in-the-past";
import { futureInThePast } from "./grammar/future-in-the-past";
import { mixedConditionals } from "./grammar/mixed-conditionals";
import { needntHaveAndDidntNeedTo } from "./grammar/neednt-have-and-didnt-need-to";
import { nonDefiningRelativeClauses } from "./grammar/non-defining-relative-clauses";
import { participleClauses } from "./grammar/participle-clauses";
import { reducedRelativeClauses } from "./grammar/reduced-relative-clauses";
import { reportedCommandsAdviceAndRequests } from "./grammar/reported-commands-advice-and-requests";
import { theCausative } from "./grammar/the-causative";
import { thirdConditional } from "./grammar/third-conditional";
import { verbObjectInfinitiveAndGerundPatterns } from "./grammar/verb-object-infinitive-and-gerund-patterns";
import { wishForPastRegrets } from "./grammar/wish-for-past-regrets";

export const b2Topics: Topic[] = [
  thirdConditional,
  mixedConditionals,
  wishForPastRegrets,
  describingCertaintyInThePast,
  needntHaveAndDidntNeedTo,
  couldWasAbleToAndCouldHave,
  futureInThePast,
  advancedPassiveAndReportingVerbs,
  theCausative,
  reportedCommandsAdviceAndRequests,
  nonDefiningRelativeClauses,
  reducedRelativeClauses,
  participleClauses,
  verbObjectInfinitiveAndGerundPatterns,
  adjectiveAndVerbPhrases,
];
