import type { RuleTopic } from "../../schema";

export const adjectiveOrder: RuleTopic = {
  slug: "adjective-order",
  family: "adjective-order",
  title: "Adjective order: a beautiful old house",
  summary: "A beautiful old house, not an old beautiful house. Put two or three adjectives in the usual order: opinion first, then size, age, colour and more.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 21,

  explanation: [
    "You know that an adjective goes before the noun: a big house. Remember: an adjective is a word that tells us more about a noun: what the person or thing is like. We often use two adjectives together, and sometimes three: a <b>beautiful old</b> house, a <b>big black</b> dog. They usually go in a fixed order.",
    "<b>Opinion</b> adjectives come first. They say what we think, like nice, lovely, beautiful, horrible or interesting. Then come <b>fact</b> adjectives, which say what something is really like: a <b>nice big</b> garden, not a big nice garden. A <b>lovely new</b> car.",
    "Fact adjectives usually go in this order: <b>size</b> (big, small, long) → <b>age</b> (old, new, young) → <b>shape</b> (round, square) → <b>colour</b> (red, black) → <b>origin</b>, where it is from (Italian, Japanese) → <b>material</b>, what it is made of (wooden, leather, plastic) → <b>purpose</b>, what it is for (a sleeping bag, running shoes) → the noun. For example: a <b>small round</b> table, a <b>long black</b> coat, an <b>old Japanese</b> car, a <b>new leather</b> jacket.",
    "The purpose word goes just before the noun, and the two words work almost like one word: a green <b>sleeping bag</b>, new <b>running shoes</b>.",
    "We don't usually put commas between adjectives of different kinds: a big black dog. Using <b>more than three</b> adjectives before one noun is rare. Two is the most common. Remember: the word just after a or an decides which one to use: an old car, but a big old car.",
    "After be, we put and before the last adjective: The room was small <b>and</b> dark. Two colours also take and: a black <b>and</b> white cat.",
  ].join("\n\n"),

  form: [
    "opinion → size → age → shape → colour → origin → material → purpose → noun",
    "a beautiful old house · a big black dog · a small round table",
    "new Italian leather shoes · a green sleeping bag",
    "usually two adjectives, sometimes three · more than three is rare",
    "after be: small and dark · two colours: black and white",
  ].join("\n"),

  examples: [
    {
      sentence: "They live in a <b>beautiful old</b> house.",
      why: "<b>Beautiful</b> is an opinion, so it comes before <b>old</b>, which is a fact (age).",
    },
    {
      sentence: "We've got a <b>big black</b> cat.",
      why: "Size comes before colour: <b>big black</b>, not black big.",
    },
    {
      sentence: "There's a <b>small round</b> table in the kitchen.",
      why: "Size comes before shape: <b>small round</b>.",
    },
    {
      sentence: "He drives an <b>old Japanese</b> car.",
      why: "Age comes before origin: <b>old Japanese</b>. The word after an is old, so it is an, not a.",
    },
    {
      sentence: "I bought a <b>lovely red leather</b> bag.",
      why: "Opinion (<b>lovely</b>) → colour (<b>red</b>) → material (<b>leather</b>) → the noun.",
    },
    {
      sentence: "These are my new <b>running</b> shoes.",
      why: "<b>Running</b> says what the shoes are for, so it goes just before the noun.",
    },
  ],

  pitfall: {
    wrong: "She has a black long coat.",
    right: "She has a <b>long black</b> coat.",
    why: "Size (long) comes before colour (black).",
  },

  quiz: [
    {
      kind: "choice",
      stem: "My grandmother gave me a ___ box.",
      options: ["wooden small", "small wooden", "wooden and small"],
      answer: 1,
      feedback:
        "Size comes before material, so the order is small wooden: a small wooden box. Before a noun, we don't usually use and between adjectives of different kinds.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to finish the sentence: She lives in …",
      words: ["house.", "old", "a", "beautiful"],
      answer: "a beautiful old house.",
      feedback:
        "Opinion (beautiful) comes before age (old), and a comes first: She lives in a beautiful old house.",
    },
    {
      kind: "choice",
      stem: "She was wearing ___ shoes.",
      options: ["leather new Italian", "Italian new leather", "new Italian leather"],
      answer: 2,
      feedback:
        "The usual order is age (new), then origin (Italian), then material (leather): new Italian leather shoes.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a sentence.",
      words: ["black", "He's", "dog.", "a", "big", "got"],
      answer: "He's got a big black dog.",
      feedback: "Size (big) comes before colour (black): He's got a big black dog.",
    },
    {
      kind: "choice",
      stem: "I need a ___ bag for the camping trip.",
      options: ["green sleeping", "sleeping green", "green and sleeping"],
      answer: 0,
      feedback:
        "Sleeping says what the bag is for, so it goes just before the noun, and the colour comes before it: a green sleeping bag.",
    },
  ],

  levelRationale:
    "English Grammar Profile: two adjectives before a noun in the usual order (a beautiful old house, a big black dog) are a B1 point, and three adjectives are B1 to B2. The spec (section 8) places adjective order at B1, after A1 adjectives before the noun, which uses one adjective at a time. Swan says the order of fact adjectives is not always fixed, so the explanation says usually, and every item uses a pair that has one natural order: opinion before fact, size before colour or material, age before origin, and purpose last. No item puts age and shape together, because their order is less fixed. More than three adjectives is called rare, as Swan says.",

  sourceNotes:
    "english_grammar.txt, ## Order of adjective: opinion before fact, size before shape, and material just before the noun agree with Swan. The list's first heading says Option; it should say Opinion. The list puts age before shape, but the note's Summary puts shape before age; this topic follows the list and the usual teaching order, and does not test age with shape. The note writes commas between the fact adjectives (an Indian, wooden box), which is not usual, and dark drown should be dark brown. A five-adjective example (a small, antique, dark brown, Indian, wooden box) is not used, because more than three adjectives is rare. Purpose, and after be, and two colours with and are authored from Swan, Practical English Usage.",
};
