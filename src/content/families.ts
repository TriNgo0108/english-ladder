/*
 * Family vocabulary. A topic's `family` links it to counterparts at other levels
 * even when their slugs differ (the key defaults to the slug). Later levels must
 * reuse these keys, and at most one topic per level may use a key.
 * A topic with no `family` whose slug equals one of these keys is rejected:
 * set `family` explicitly.
 *
 *   articles               A1 articles-a-an -> A2 the / zero article; B2 articles with abstract and general nouns
 *   nouns                  A1 nouns-singular-and-plural -> A2 countable and uncountable nouns
 *   determiners            A1 this-that-these-those -> B1 determiners
 *   modal-ability          A1 can-for-ability -> later ability / permission forms
 *   modal-obligation       (reserved) A2 should and must
 *   modal-deduction        (reserved) B1 possibility and deduction; B2 must have / can't have / needn't have
 *   present-simple         A1 present-simple -> A2 present simple for future
 *   present-continuous     A1 present-continuous -> A2 present continuous for future
 *   past-simple            A1 was-were -> A2 past simple; B1 present perfect vs past simple
 *   adjective-order        A1 adjectives-before-the-noun -> B1 adjective order
 *   prepositions-of-place  A1 prepositions-of-place -> B1 prepositions of movement
 *   prepositions-of-time   A1 prepositions-of-time -> B1 in time vs on time
 *   question-forms         A1 question-words -> B1 question tags; B2 declarative and rhetorical questions
 *   polite-requests        A1 would-you-like -> A2 asking for things politely; B1 indirect and polite questions
 *   introductions          A1 greetings-and-introducing-yourself -> B1 introducing yourself at work
 *   punctuation            A1 capital-letters-and-full-stops -> B1 commas; C1 punctuation for rhetorical effect
 */
export const FAMILY_KEYS = [
  "articles",
  "nouns",
  "determiners",
  "modal-ability",
  "modal-obligation",
  "modal-deduction",
  "present-simple",
  "present-continuous",
  "past-simple",
  "adjective-order",
  "prepositions-of-place",
  "prepositions-of-time",
  "question-forms",
  "polite-requests",
  "introductions",
  "punctuation",
] as const;
