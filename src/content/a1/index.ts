import type { Topic } from "../schema";
import { adjectivesBeforeTheNoun } from "./grammar/adjectives-before-the-noun";
import { articlesAAn } from "./grammar/articles-a-an";
import { canForAbility } from "./grammar/can-for-ability";
import { haveGot } from "./grammar/have-got";
import { imperatives } from "./grammar/imperatives";
import { nounsSingularAndPlural } from "./grammar/nouns-singular-and-plural";
import { personalPronouns } from "./grammar/personal-pronouns";
import { possessiveAdjectivesAndS } from "./grammar/possessive-adjectives-and-s";
import { prepositionsOfPlace } from "./grammar/prepositions-of-place";
import { prepositionsOfTime } from "./grammar/prepositions-of-time";
import { presentContinuous } from "./grammar/present-continuous";
import { presentSimple } from "./grammar/present-simple";
import { thereIsThereAre } from "./grammar/there-is-there-are";
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
  presentContinuous,
  thereIsThereAre,
  canForAbility,
  imperatives,
  adjectivesBeforeTheNoun,
  prepositionsOfPlace,
  prepositionsOfTime,
];
