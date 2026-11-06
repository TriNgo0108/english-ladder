import type { Topic } from "../schema";
import { adjectivesBeforeTheNoun } from "./grammar/adjectives-before-the-noun";
import { articlesAAn } from "./grammar/articles-a-an";
import { canForAbility } from "./grammar/can-for-ability";
import { haveGot } from "./grammar/have-got";
import { imperatives } from "./grammar/imperatives";
import { nounsSingularAndPlural } from "./grammar/nouns-singular-and-plural";
import { objectAndPossessivePronouns } from "./grammar/object-and-possessive-pronouns";
import { personalPronouns } from "./grammar/personal-pronouns";
import { possessiveAdjectivesAndS } from "./grammar/possessive-adjectives-and-s";
import { prepositionsOfPlace } from "./grammar/prepositions-of-place";
import { prepositionsOfTime } from "./grammar/prepositions-of-time";
import { presentContinuous } from "./grammar/present-continuous";
import { presentSimple } from "./grammar/present-simple";
import { questionWords } from "./grammar/question-words";
import { thereIsThereAre } from "./grammar/there-is-there-are";
import { thisThatTheseThose } from "./grammar/this-that-these-those";
import { verbToBe } from "./grammar/verb-to-be";
import { wasWere } from "./grammar/was-were";
import { yesNoQuestionsAndShortAnswers } from "./grammar/yes-no-questions-and-short-answers";
import { capitalLettersAndFullStops } from "./mechanics/capital-letters-and-full-stops";
import { greetingsAndIntroducingYourself } from "./speaking/greetings-and-introducing-yourself";
import { orderingFood } from "./speaking/ordering-food";
import { wouldYouLike } from "./speaking/would-you-like";
import { daysMonthsFamilyFoodAndColours } from "./vocabulary/days-months-family-food-and-colours";
import { numbers } from "./vocabulary/numbers";
import { tellingTheTime } from "./vocabulary/telling-the-time";

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
  questionWords,
  yesNoQuestionsAndShortAnswers,
  wasWere,
  objectAndPossessivePronouns,
  numbers,
  tellingTheTime,
  daysMonthsFamilyFoodAndColours,
  greetingsAndIntroducingYourself,
  wouldYouLike,
  orderingFood,
  capitalLettersAndFullStops,
];
