// Family keys used by these topics live in ../families.ts (the shared vocabulary).
import type { Topic } from "../schema";
import { alreadyYetAndJust } from "./grammar/already-yet-and-just";
import { futureContinuousAndFuturePerfect } from "./grammar/future-continuous-and-future-perfect";
import { pastPerfectAndNarrativeTenses } from "./grammar/past-perfect-and-narrative-tenses";
import { presentPerfectAndPastSimple } from "./grammar/present-perfect-and-past-simple";
import { presentPerfectContinuous } from "./grammar/present-perfect-continuous";
import { secondConditional } from "./grammar/second-conditional";
import { sinceAndFor } from "./grammar/since-and-for";
import { stativeVerbs } from "./grammar/stative-verbs";
import { timeClauses } from "./grammar/time-clauses";
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
];
