// Family keys used by these topics live in ../families.ts (the shared vocabulary).
import type { Topic } from "../schema";
import { adjectiveAndVerbPhrases } from "./grammar/adjective-and-verb-phrases";
import { advancedLinkers } from "./grammar/advanced-linkers";
import { advancedPassiveAndReportingVerbs } from "./grammar/advanced-passive-and-reporting-verbs";
import { articlesWithAbstractAndGeneralNouns } from "./grammar/articles-with-abstract-and-general-nouns";
import { cleftSentences } from "./grammar/cleft-sentences";
import { couldWasAbleToAndCouldHave } from "./grammar/could-was-able-to-and-could-have";
import { declarativeAndRhetoricalQuestions } from "./grammar/declarative-and-rhetorical-questions";
import { describingCertaintyInThePast } from "./grammar/describing-certainty-in-the-past";
import { futureInThePast } from "./grammar/future-in-the-past";
import { hedgingAndDegreesOfCertainty } from "./grammar/hedging-and-degrees-of-certainty";
import { inversionAfterNegativeAdverbials } from "./grammar/inversion-after-negative-adverbials";
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
import { advancedPhrasalVerbs } from "./phrases/advanced-phrasal-verbs";
import { easilyConfusedWords } from "./phrases/easily-confused-words";
import { workplaceCollocations } from "./phrases/workplace-collocations";
import { aCoverLetter } from "./writing/a-cover-letter";
import { followUpEmails } from "./writing/follow-up-emails";
import { lettersOfComplaint } from "./writing/letters-of-complaint";
import { summarisingAndAddingPoints } from "./writing/summarising-and-adding-points";

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
  articlesWithAbstractAndGeneralNouns,
  advancedLinkers,
  declarativeAndRhetoricalQuestions,
  cleftSentences,
  inversionAfterNegativeAdverbials,
  hedgingAndDegreesOfCertainty,
  advancedPhrasalVerbs,
  workplaceCollocations,
  easilyConfusedWords,
  lettersOfComplaint,
  aCoverLetter,
  followUpEmails,
  summarisingAndAddingPoints,
];
