// Family keys used by these topics live in ../families.ts (the shared vocabulary).
import type { Topic } from "../schema";
import { adjectiveOrder } from "./grammar/adjective-order";
import { alreadyYetAndJust } from "./grammar/already-yet-and-just";
import { beUsedToAndGetUsedTo } from "./grammar/be-used-to-and-get-used-to";
import { definingRelativeClauses } from "./grammar/defining-relative-clauses";
import { determiners } from "./grammar/determiners";
import { futureContinuousAndFuturePerfect } from "./grammar/future-continuous-and-future-perfect";
import { gerundsVsInfinitives } from "./grammar/gerunds-vs-infinitives";
import { gradableAndNonGradableAdjectives } from "./grammar/gradable-and-non-gradable-adjectives";
import { intensifiers } from "./grammar/intensifiers";
import { linkingWords } from "./grammar/linking-words";
import { modalsOfPossibilityAndDeduction } from "./grammar/modals-of-possibility-and-deduction";
import { pastPerfectAndNarrativeTenses } from "./grammar/past-perfect-and-narrative-tenses";
import { presentPerfectAndPastSimple } from "./grammar/present-perfect-and-past-simple";
import { presentPerfectContinuous } from "./grammar/present-perfect-continuous";
import { questionTags } from "./grammar/question-tags";
import { reportedSpeech } from "./grammar/reported-speech";
import { sayAndTell } from "./grammar/say-and-tell";
import { secondConditional } from "./grammar/second-conditional";
import { sinceAndFor } from "./grammar/since-and-for";
import { soAndSuch } from "./grammar/so-and-such";
import { stativeVerbs } from "./grammar/stative-verbs";
import { thePassive } from "./grammar/the-passive";
import { timeClauses } from "./grammar/time-clauses";
import { transitiveAndIntransitiveVerbs } from "./grammar/transitive-and-intransitive-verbs";
import { wishAndIfOnly } from "./grammar/wish-and-if-only";
import { wordBuildingSuffixes } from "./grammar/word-building-suffixes";

export const b1Topics: Topic[] = [
  presentPerfectAndPastSimple,
  sinceAndFor,
  alreadyYetAndJust,
  stativeVerbs,
  presentPerfectContinuous,
  pastPerfectAndNarrativeTenses,
  timeClauses,
  futureContinuousAndFuturePerfect,
  secondConditional,
  wishAndIfOnly,
  modalsOfPossibilityAndDeduction,
  beUsedToAndGetUsedTo,
  gerundsVsInfinitives,
  transitiveAndIntransitiveVerbs,
  thePassive,
  reportedSpeech,
  sayAndTell,
  definingRelativeClauses,
  questionTags,
  determiners,
  adjectiveOrder,
  gradableAndNonGradableAdjectives,
  intensifiers,
  soAndSuch,
  linkingWords,
  wordBuildingSuffixes,
];
