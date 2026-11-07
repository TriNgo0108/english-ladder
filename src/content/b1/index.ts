// Family keys used by these topics live in ../families.ts (the shared vocabulary).
import type { Topic } from "../schema";
import { alreadyYetAndJust } from "./grammar/already-yet-and-just";
import { beUsedToAndGetUsedTo } from "./grammar/be-used-to-and-get-used-to";
import { futureContinuousAndFuturePerfect } from "./grammar/future-continuous-and-future-perfect";
import { gerundsVsInfinitives } from "./grammar/gerunds-vs-infinitives";
import { modalsOfPossibilityAndDeduction } from "./grammar/modals-of-possibility-and-deduction";
import { pastPerfectAndNarrativeTenses } from "./grammar/past-perfect-and-narrative-tenses";
import { presentPerfectAndPastSimple } from "./grammar/present-perfect-and-past-simple";
import { presentPerfectContinuous } from "./grammar/present-perfect-continuous";
import { secondConditional } from "./grammar/second-conditional";
import { sinceAndFor } from "./grammar/since-and-for";
import { stativeVerbs } from "./grammar/stative-verbs";
import { thePassive } from "./grammar/the-passive";
import { timeClauses } from "./grammar/time-clauses";
import { transitiveAndIntransitiveVerbs } from "./grammar/transitive-and-intransitive-verbs";
import { wishAndIfOnly } from "./grammar/wish-and-if-only";

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
];
