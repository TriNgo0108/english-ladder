import type { RuleTopic } from "../../schema";

export const adjectivesBeforeTheNoun: RuleTopic = {
  slug: "adjectives-before-the-noun",
  title: "Adjectives: a big house, red cars",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 13,

  explanation: [
    "An <b>adjective</b> is a word that tells us more about a noun: what the person or thing is like. Big, small, old, new, red, happy and nice are adjectives. Remember: a noun is a word for a person, a thing, an animal or a place.",
    "An adjective can go just before a noun: a <b>big</b> house, an <b>old</b> car, <b>red</b> shoes. In English, the adjective comes before the noun, not after it: a big house, not a house big.",
    "Words like a, an, the, my and your come first, then the adjective, then the noun: a new phone, the old man, my new phone. Remember: the word just after a or an decides which one to use: an old car, but a big apple.",
    "An adjective can also go after be, with no noun after it: The house is big. My shoes are red. Here there is no a or an: The house is big, not The house is a big. If you want a or an, you need the noun too: It is a big house.",
    "Adjectives do not change. They are the same for one and for two or more, and for men and women. They never add -s: a red car, two red cars, not two reds cars. A tall man, a tall woman. My shoes are red, not My shoes are reds.",
    "<b>Very</b> goes before the adjective: a very big house. The house is very big.",
  ].join("\n\n"),

  form: [
    "a/an/the/my + adjective + noun · a big house · an old car · my new phone",
    "no -s on the adjective · two red cars, not two reds cars",
    "be + adjective · The house is big. · My shoes are red.",
    "very + adjective · a very old car · It is very old.",
  ].join("\n"),

  examples: [
    {
      sentence: "She's got a <b>new</b> car.",
      why: "The adjective, <b>new</b>, comes before the noun, car. A comes before the adjective.",
    },
    {
      sentence: "I've got two <b>black</b> cats.",
      why: "<b>Black</b> has no -s, also with a plural noun. Only the noun, cats, has -s.",
    },
    {
      sentence: "Paris is a <b>beautiful</b> city.",
      why: "The adjective, <b>beautiful</b>, comes before the noun, city: not a city beautiful.",
    },
    {
      sentence: "My <b>new</b> phone is very fast.",
      why: "My comes first, then the adjective, <b>new</b>, then the noun, phone.",
    },
    {
      sentence: "My parents are <b>happy</b>.",
      why: "After be, the adjective can be alone, with no noun. <b>Happy</b> has no -s, also when the subject is plural.",
    },
    {
      sentence: "This is a <b>very good</b> book.",
      why: "<b>Very</b> comes before the adjective, good, and very good comes before the noun, book.",
    },
  ],

  pitfall: {
    wrong: "I've got a car red.",
    right: "I've got a <b>red</b> car.",
    why: "In some languages, the adjective comes after the noun. In English, it comes before the noun: a <b>red</b> car.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "There are three ___ in the street.",
      options: ["bigs cars", "cars big", "big cars", "big car"],
      answer: 2,
      feedback:
        "The adjective comes before the noun, and it has no -s: three big cars. Only the noun has -s for the plural. Big car is wrong here, because three is more than one, so the noun must be plural: cars.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a sentence.",
      words: ["old", "They", "a", "house.", "live", "very", "in"],
      answer: "They live in a very old house.",
      feedback:
        "A comes first, then very, then the adjective, old, then the noun, house: a very old house. The adjective always comes before the noun.",
    },
    {
      kind: "gap",
      stem: "I've got two ___ dogs. (black)",
      answers: ["black"],
      feedback:
        "Adjectives never add -s, also with a plural noun: two black dogs, not two blacks dogs. Only the noun, dogs, has -s.",
    },
    {
      kind: "mistake",
      tokens: ["They", "are", "very", "nices", "people."],
      wrongIndex: 3,
      correction: "nice",
      feedback:
        "Adjectives do not change for two or more, so nice has no -s: They are very nice people. People is plural, but the adjective stays the same.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["It's a car very fast.", "It's a very fast car.", "It's a fast very car."],
      answer: 1,
      feedback:
        "Very comes before the adjective, and the adjective comes before the noun: a very fast car. The noun, car, comes last.",
    },
    {
      kind: "choice",
      stem: "My flat is ___.",
      options: ["a small", "small", "smalls"],
      answer: 1,
      feedback:
        "After be, the adjective can be alone, with no a: My flat is small. With a, we need the noun too: It is a small flat. Adjectives never add -s, so smalls is wrong.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: adjectives before a noun and after be, and very before an adjective, are A1 points. This topic uses one adjective at a time. The order of two or more adjectives before a noun (a big red apple, a beautiful old house) is left to a later level. It comes after the topic on a and an, because it builds on the rule that the word just after a or an decides which one to use.",

  sourceNotes:
    "english_grammar.txt, # Adjectives, ## Before the noun and ## After a linking verb agree with Swan and with this topic (a beautiful house, the old man, The house is big). 'Three big red apples' uses two adjectives, which this topic leaves out. Linking verbs other than be (seem, look, feel and the others) are left to a later level. ## Order of adjective is above A1. Its 'Option' should be Opinion. ## After words something, someone (something cold), ## -ed and -ing adjectives and ## Gradable and non-gradable adjectives are also above A1. No -s on adjectives, no a with an adjective alone after be, and very before the adjective are authored from Swan, Practical English Usage.",
};
