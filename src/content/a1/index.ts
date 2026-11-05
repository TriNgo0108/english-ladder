import type { Topic } from "../schema";
import { articlesAAn } from "./grammar/articles-a-an";
import { haveGot } from "./grammar/have-got";
import { nounsSingularAndPlural } from "./grammar/nouns-singular-and-plural";
import { personalPronouns } from "./grammar/personal-pronouns";
import { possessiveAdjectivesAndS } from "./grammar/possessive-adjectives-and-s";
import { presentSimple } from "./grammar/present-simple";
import { thisThatTheseThose } from "./grammar/this-that-these-those";
import { verbToBe } from "./grammar/verb-to-be";

export const a1Topics: Topic[] = [
  verbToBe,
  nounsSingularAndPlural,
  personalPronouns,
  haveGot,
  articlesAAn,
  thisThatTheseThose,
  possessiveAdjectivesAndS,
  presentSimple,
];
