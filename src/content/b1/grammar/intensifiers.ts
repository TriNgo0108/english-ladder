import type { RuleTopic } from "../../schema";

export const intensifiers: RuleTopic = {
  slug: "intensifiers",
  title: "Intensifiers: a bit, quite, very, really, extremely",
  summary: "A bit cold, very cold, extremely cold. Make an adjective or adverb weaker or stronger with a bit, quite, rather, very, really, so and extremely.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 23,

  explanation: [
    "Words like <b>very</b> are called <b>intensifiers</b>. An intensifier goes before an adjective or an adverb and makes it stronger or weaker: <b>very</b> cold, <b>extremely</b> fast, <b>a bit</b> late. Remember: an adjective is a word that tells us more about a noun: what the person or thing is like.",
    "From weaker to stronger: <b>a bit</b> → <b>quite</b> → <b>rather</b> → <b>very</b>, <b>really</b>, <b>so</b> → <b>extremely</b>. So a bit cold is not very cold, and extremely cold is colder than very cold.",
    "<b>Very</b> and <b>really</b> make a word stronger. Really is more common in speech. <b>Extremely</b> is stronger than very: The exam was <b>extremely</b> difficult. Don't use very or extremely with extreme adjectives, like freezing or exhausted (order 22), but really goes with all adjectives: really cold, really freezing.",
    "<b>So</b> is like very, and it is common in speech, especially for feelings: I'm <b>so</b> happy! It goes before an adjective or an adverb, and there is no noun after the adjective: The day was <b>so</b> nice. Don't put so between a and an adjective and a noun: a very nice day, not a so nice day.",
    "<b>A bit</b> makes a word weaker. We usually use it for things we don't like, and it is common in speech: It's <b>a bit</b> cold. I'm <b>a bit</b> tired. We don't usually say a bit nice or a bit good.",
    "<b>Quite</b> is not easy. In British English, quite with most adjectives means fairly, less than very: The film was <b>quite</b> good. (Good, but not great.) With all-or-nothing adjectives, it means completely: You're <b>quite</b> right. The meaning can also change with how you say it, and in American English quite often means very. <b>Rather</b> is a bit stronger than quite. We often use it for things we don't like, or that surprise us: It's <b>rather</b> cold today.",
    "Intensifiers also go before adverbs: She drives <b>really</b> carefully. When there is an adjective and a noun, the intensifier goes before the adjective: an <b>extremely</b> long journey, a <b>really</b> nice day. Remember: the word just after a or an decides which one to use: a very old car, but an extremely old car.",
  ].join("\n\n"),

  form: [
    "weaker → stronger: a bit → quite → rather → very / really / so → extremely",
    "intensifier + adjective: very cold · extremely difficult · a bit late",
    "intensifier + adverb: really carefully · extremely well",
    "a / an + intensifier + adjective + noun: an extremely long journey",
    "so + adjective, no noun after it: I'm so happy! · not a so nice day",
    "really goes with all adjectives · not very or extremely with extreme adjectives",
  ].join("\n"),

  examples: [
    {
      sentence: "It's <b>a bit</b> cold in here. Can I close the window?",
      why: "<b>A bit</b> makes cold weaker. We often use it for things we don't like.",
    },
    {
      sentence: "The restaurant was <b>quite</b> good, but not great.",
      why: "Here <b>quite</b> means fairly: good, but less than very good.",
    },
    {
      sentence: "Your English is <b>really</b> good!",
      why: "<b>Really</b> makes good stronger. It is very common in speech.",
    },
    {
      sentence: "I'm <b>so</b> happy for you!",
      why: "<b>So</b> is like very. It is common for feelings, and there is no noun after the adjective.",
    },
    {
      sentence: "The exam was <b>extremely</b> difficult. Nobody finished it.",
      why: "<b>Extremely</b> is stronger than very.",
    },
    {
      sentence: "We had a <b>rather</b> long wait at the airport.",
      why: "<b>Rather</b> is a bit stronger than quite. Here it is for something we didn't like. It goes after a and before the adjective.",
    },
  ],

  pitfall: {
    wrong: "The water in the lake was extremely freezing.",
    right: "The water in the lake was <b>absolutely</b> freezing.",
    why: "Freezing already means very cold, so it is an extreme adjective. Use <b>absolutely</b> or <b>really</b>, not extremely or very.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "This is ___ good idea.",
      options: ["an extremely", "a extremely", "extremely a"],
      answer: 0,
      feedback:
        "The intensifier goes after a or an and before the adjective. Extremely starts with a vowel sound, so we use an: This is an extremely good idea.",
    },
    {
      kind: "choice",
      stem: "It's minus fifteen outside. It's ___ freezing.",
      options: ["extremely", "really", "very"],
      answer: 1,
      feedback:
        "Freezing is an extreme adjective: it already means very cold. Really goes with all adjectives, so It's really freezing is correct. We don't use very or extremely with extreme adjectives.",
    },
    {
      kind: "choice",
      stem: "Which is the strongest?",
      options: ["a bit cold", "very cold", "extremely cold"],
      answer: 2,
      feedback:
        "Extremely is stronger than very, and a bit makes cold weaker. So extremely cold is the strongest.",
    },
    {
      kind: "gap",
      stem: "He plays the piano ___ well. Everyone stops to listen. (extreme)",
      answers: ["extremely"],
      feedback:
        "Before the adverb well, we need an intensifier, so we add -ly to extreme: He plays the piano extremely well.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a sentence.",
      words: ["old", "They", "house.", "an", "live", "extremely", "in"],
      answer: "They live in an extremely old house.",
      feedback:
        "The intensifier goes before the adjective, after an: an extremely old house. We use an because extremely starts with a vowel sound.",
    },
    {
      kind: "mistake",
      tokens: ["We", "had", "a", "so", "nice", "day", "at", "the", "beach."],
      wrongIndex: 3,
      correction: "very",
      feedback:
        "So doesn't go between a and an adjective and a noun. Use very, really or extremely: We had a very nice day at the beach.",
    },
  ],

  levelRationale:
    "English Grammar Profile: very and really before adjectives are A1 points, so, quite, a bit and extremely are A2 points, and rather and intensifiers before adverbs are B1. This topic puts them on one scale and adds the B1 points: really goes with extreme adjectives but very and extremely don't, so is not used between a and an adjective, and a bit is usually for things we don't like. Swan says the meaning of quite depends on the adjective, on how you say it and on British or American English, so the topic explains this and no quiz item tests quite. Really is never a wrong option.",

  sourceNotes:
    "english_grammar.txt, # Intensifiers: extremely (very), absolutely (completely), a bit, a little, quite, very and really agree with Swan. Particularly, exceptionally, remarkably, utterly, virtually and desperately are above B1 and are left out. Virtually means almost, so it is not an intensifier in the usual sense. Too is not an intensifier: it says there is a problem (A2 too and enough). Big and most are not taught as intensifiers here. # Very, really, So: a before very or really (a very old man) agrees with Swan, and its mans should be man. Its point that so does not go with an adjective and a noun is taught here. The scale, a bit for things we don't like, and quite are authored from Swan, Practical English Usage.",
};
