// Family keys used by these topics live in ../families.ts (the shared vocabulary).
import type { Topic } from "../schema";
import { alreadyYetAndJust } from "./grammar/already-yet-and-just";
import { presentPerfectAndPastSimple } from "./grammar/present-perfect-and-past-simple";
import { presentPerfectContinuous } from "./grammar/present-perfect-continuous";
import { sinceAndFor } from "./grammar/since-and-for";
import { stativeVerbs } from "./grammar/stative-verbs";

export const b1Topics: Topic[] = [
  presentPerfectAndPastSimple,
  sinceAndFor,
  alreadyYetAndJust,
  stativeVerbs,
  presentPerfectContinuous,
];
