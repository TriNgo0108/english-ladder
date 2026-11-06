/*
 * Family vocabulary. A topic's `family` links it to counterparts at other levels
 * even when their slugs differ (the key defaults to the slug). Later levels must
 * reuse these keys; at most one topic per level may use a key.
 *
 *   articles                 articles-a-an  -> A2 the / zero article, B2 articles with abstract and general nouns
 *   nouns                    nouns-singular-and-plural -> A2 countable and uncountable nouns
 *   determiners              this-that-these-those -> B1 determiners
 *   modal-verbs              can-for-ability -> A2 should/must, have to; B1 possibility and deduction; B2 must have / can't have
 *   present-simple           present-simple -> A2 present simple for future
 *   present-continuous       present-continuous -> A2 present continuous for future
 *   past-simple              was-were -> A2 past simple; B1 present perfect vs past simple
 *   adjective-order          adjectives-before-the-noun -> B1 adjective order
 *   prepositions-of-place    prepositions-of-place -> B1 prepositions of movement
 *   prepositions-of-time     prepositions-of-time -> B1 in time vs on time
 *   question-forms           question-words -> B1 question tags, indirect questions; B2 declarative and rhetorical questions
 *   polite-requests          would-you-like -> A2 asking for things politely; B1 indirect and polite questions
 *   introductions            greetings-and-introducing-yourself -> B1 introducing yourself at work
 *   punctuation              capital-letters-and-full-stops -> B1 commas, colons; C1 punctuation for effect
 */
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
