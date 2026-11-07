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
 *   modal-obligation       A2 should and must (Task 7); later obligation forms reuse this key
 *   modal-deduction        B1 modals of possibility and deduction; B2 must have / can't have / needn't have
 *   present-simple         A1 present-simple -> A2 present simple for future
 *   present-continuous     A1 present-continuous -> A2 present continuous for future
 *   past-simple            A1 was-were -> A2 past simple; B1 present perfect vs past simple
 *   adjective-order        A1 adjectives-before-the-noun -> B1 adjective order
 *   prepositions-of-place  A1 prepositions-of-place -> B1 prepositions of movement
 *   prepositions-of-time   A1 prepositions-of-time -> B1 in time vs on time
 *   question-forms         A1 question-words -> B1 question tags; B2 declarative and rhetorical questions
 *   polite-requests        A1 would-you-like -> A2 asking for things politely; B1 indirect and polite questions
 *   introductions          A1 greetings-and-introducing-yourself -> B1 introducing yourself at work
 *   conditionals           A2 first conditional -> B1 second conditional -> B2 third and mixed conditionals
 *   gerunds-and-infinitives A2 verb + gerund / verb + infinitive (introductory) -> B1 gerunds vs infinitives
 *   linking-words          A2 conjunctions and, but, so, because -> B1 linking words -> B2 advanced linkers
 *   comparison             A2 comparatives and superlatives -> C1 advanced comparison structures
 *   future-forms           A2 will -> B1 future continuous and future perfect -> B2 future in the past
 *   emails                 A2 an informal email -> B1 a professional email -> B2 follow-up emails
 *   punctuation            A1 capital-letters-and-full-stops -> B1 commas; C1 punctuation for rhetorical effect
 *   used-to                A2 used-to-and-would -> B1 be used to and get used to
 *   wish                   B1 wish and if only -> B2 wish for past regrets
 *   passive                B1 the passive -> B2 advanced passive
 *   reported-speech        B1 reported speech -> B2 reported commands
 *   relative-clauses       B1 defining relative clauses -> B2 non-defining
 *   collocations           B1 collocations -> B2 workplace collocations -> C1 collocational precision
 *   idioms                 B1 idioms -> C1 advanced idioms
 *   register               B1 formal and informal register -> C1 register and formality shifts
 *   agreeing-and-disagreeing B1 agreeing and disagreeing -> C1 handling pushback
 *   intonation             B1 question intonation -> C1 stress and intonation for emphasis
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
  "conditionals",
  "gerunds-and-infinitives",
  "linking-words",
  "comparison",
  "future-forms",
  "emails",
  "used-to",
  "wish",
  "passive",
  "reported-speech",
  "relative-clauses",
  "collocations",
  "idioms",
  "register",
  "agreeing-and-disagreeing",
  "intonation",
] as const;
