import type { SetTopic } from "../../schema";

export const idioms: SetTopic = {
  slug: "idioms",
  family: "idioms",
  title: "Everyday idioms: a piece of cake, change your mind",
  summary: "The test was a piece of cake, so I took it easy. Learn common phrases whose meaning you can't get from the single words, and when to use them.",
  level: "b1",
  category: "phrases",
  shape: "set",
  order: 30,

  explanation: [
    "An <b>idiom</b> is a group of words with its own meaning, different from the meaning of each word alone. A piece of cake can be food, but in The exam was a piece of cake, it means very easy. You often can't guess an idiom from its words, so learn it with an example, like the ones in the table.",
    "The words in an idiom are fixed. We can't usually change them or their order: a piece of cake, not a piece of pie, and give someone a hand, not give someone an arm. But the verb changes in the usual way: I changed my mind. She's making up her mind. And the word for the person changes: give me a hand, give him a hand. In the table, someone and your show where this word goes.",
    "Most of these idioms are friendly and informal. They are very common when we speak, and in emails and messages to friends, but we use them less in formal writing, like a letter to a company. Make yourself at home and it's up to you are polite enough for most situations.",
  ].join("\n\n"),

  entries: [
    { headword: "change your mind", gloss: "decide something different from what you decided before", inUse: "I wanted the red one, but I've <b>changed my mind</b>. Can I have the blue one?" },
    { headword: "make up your mind", gloss: "decide, often after thinking about it for some time", inUse: "I can't <b>make up my mind</b> which film to watch." },
    { headword: "give someone a hand", gloss: "help someone, often with something you carry or do with your hands", inUse: "Can you <b>give me a hand</b> with the dinner? I need someone to cut the onions." },
    { headword: "keep an eye on", gloss: "watch someone or something, to check that they are safe", inUse: "Could you <b>keep an eye on</b> my bag while I buy a ticket?" },
    { headword: "take it easy", gloss: "relax and don't work too hard", inUse: "The doctor told me to <b>take it easy</b> for a few days." },
    { headword: "by heart", gloss: "so well that you can say it without looking", inUse: "At school, we had to learn the poem <b>by heart</b>." },
    { headword: "a piece of cake", gloss: "very easy", inUse: "The test was <b>a piece of cake</b>. I finished in twenty minutes." },
    { headword: "it's up to you", gloss: "you can decide. I'm happy with what you choose.", inUse: "Pizza or pasta? <b>It's up to you</b>." },
    { headword: "no wonder", gloss: "it isn't surprising, because now I know the reason", inUse: "You only slept three hours? <b>No wonder</b> you're tired." },
    { headword: "make yourself at home", gloss: "a friendly thing to say to a guest: relax and act as if this is your home", inUse: "Come in and <b>make yourself at home</b>. Would you like a cup of tea?" },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Your friend asks, \"Was the driving test difficult?\" You say, \"No, it was ___. I passed easily.\"",
      options: ["a piece of bread", "a piece of cake", "a piece of pie"],
      answer: 1,
      feedback:
        "The idiom is a piece of cake, and it means very easy. The words of an idiom are fixed, so we can't change cake to another food.",
    },
    {
      kind: "gap",
      stem: "I was going to stay at home, but then I ___ my mind and went to the party.",
      answers: ["changed"],
      feedback:
        "Change your mind means decide something different. The story is in the past, so we use changed: I changed my mind.",
    },
    {
      kind: "choice",
      stem: "Your friend asks, \"Shall we eat Italian or Chinese tonight?\" You're happy with both. What do you say?",
      options: ["It's up to you.", "Keep an eye on it.", "Take it easy."],
      answer: 0,
      feedback:
        "It's up to you means you can decide, and I'm happy with what you choose. Keep an eye on it means watch it, and take it easy means relax.",
    },
    {
      kind: "gap",
      stem: "These boxes are really heavy. Could you give me a ___ to carry them upstairs?",
      answers: ["hand"],
      feedback:
        "Give someone a hand means help them, often with something you carry. The idiom is fixed, so it is a hand, not a help or an arm.",
    },
    {
      kind: "choice",
      stem: "You arrive at a friend's flat, and she says, \"Make yourself at home.\" What does she mean?",
      options: ["Please go home now.", "Please clean the flat.", "Relax and feel comfortable here."],
      answer: 2,
      feedback:
        "Make yourself at home is a friendly thing to say to a guest. It means relax and act as if this is your home. It doesn't mean go home.",
    },
    {
      kind: "mistake",
      tokens: ["She", "knows", "all", "the", "words", "of", "the", "song", "by", "head."],
      wrongIndex: 9,
      correction: "heart.",
      feedback:
        "The idiom is by heart: She knows all the words of the song by heart. It means so well that she can sing it without looking. We remember with our head, but the idiom uses heart.",
    },
  ],

  levelRationale:
    "English Vocabulary Profile: phrases like change your mind, make up your mind, give someone a hand, take it easy, learn by heart, it's up to you and make yourself at home are usually given as B1, and keep an eye on and no wonder as B1 or B2. A piece of cake may be listed a little higher, but it is very common and its example makes it clear. These levels are my best reading of the profile, not a checked list. Each idiom is high-frequency, and its example sentence lets a B1 learner work out the meaning. The idioms family goes on at C1.",

  sourceNotes:
    "english_grammar.txt, # Idiom: of the note's four items, only no wonder is used here, as a headword. Hold on is a phrasal verb, not an idiom, and back and forth is a common phrase that B1 learners rarely need. Barking up the wrong tree is above B1 and is left for the C1 topic in this family. The other headwords were chosen from common B1 idioms, and every gloss is new. That idioms are fixed, and mostly informal, is from Swan, Practical English Usage.",
};
