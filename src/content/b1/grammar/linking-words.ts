import type { RuleTopic } from "../../schema";

export const linkingWords: RuleTopic = {
  slug: "linking-words",
  family: "linking-words",
  title: "Linking words: however, although, despite, because of",
  summary: "Go beyond and, but, so and because with however, although, despite, because of, as a result, in addition and such as, and learn what follows each one.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 25,

  explanation: [
    "At A2 you learned <b>and</b>, <b>but</b>, <b>so</b> and <b>because</b>. This topic adds more linking words. They show how two ideas go together: a <b>contrast</b> (a different or unexpected idea), a <b>reason</b>, a <b>result</b>, one more idea, or an <b>example</b>. Some join two clauses in one sentence, and some usually start a new sentence. Some go before a noun, not a clause. Remember: a clause is a group of words with a subject and a verb.",
    "<b>However</b> means the same as but, but we usually use it at the start of a new sentence: The town is small. <b>However,</b> it has a great cinema. But usually joins two ideas in one sentence: The town is small, but it has a great cinema. However is more common in writing.",
    "<b>Although</b> goes before a clause. It can come first or in the middle of the sentence: <b>Although</b> he's rich, he lives in a small flat. He lives in a small flat <b>although</b> he's rich. <b>Though</b> means the same and is more informal, and <b>even though</b> is a bit stronger. Don't use but in the same sentence as although: Although he's rich, he lives in a small flat, not Although he's rich, but he lives in a small flat.",
    "<b>Despite</b> and <b>in spite of</b> have the same meaning as although, but they go before a noun or an -ing form, not before a clause: <b>Despite</b> the cold, the children played outside. <b>In spite of</b> feeling ill, she went to work. Say despite, not despite of. Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.",
    "For a reason, <b>because</b> goes before a clause (A2). <b>Because of</b> and <b>due to</b> go before a noun: The flight was delayed <b>because of</b> the fog. The game was cancelled <b>due to</b> the snow. Due to is more formal. Compare: because it was foggy · because of the fog.",
    "For a result, <b>therefore</b> and <b>as a result</b> are like so. We usually put them at the start of a new sentence: The roads were icy. <b>As a result,</b> many people stayed at home. Therefore is more formal and is common in writing.",
    "To add one more idea, <b>in addition</b> is like and. It usually starts a new sentence, and it is more formal: The flat has a big kitchen. <b>In addition,</b> it has a garden. <b>Also</b> usually goes before the main verb, or after be: She plays the piano. She <b>also</b> sings in a choir. He's <b>also</b> a good cook.",
    "To give an example, use <b>for example</b> or <b>such as</b>. For example can start a new sentence: I love sports. <b>For example,</b> I play tennis and basketball. Such as usually goes before a noun, in the middle of the sentence: We sell many kinds of fruit, <b>such as</b> mangoes and pineapples.",
  ].join("\n\n"),

  form: [
    "contrast: but · however (usually a new sentence) · although / though / even though + clause · despite / in spite of + noun or -ing",
    "reason: because + clause · because of / due to + noun",
    "result: so · therefore / as a result (usually a new sentence)",
    "addition: and · also (before the main verb, after be) · in addition (usually a new sentence)",
    "example: for example · such as + noun",
  ].join("\n"),

  examples: [
    {
      sentence: "The town is small. <b>However,</b> it has a great cinema.",
      why: "The second idea is unexpected after the first. <b>However</b> starts a new sentence.",
    },
    {
      sentence: "<b>Although</b> he's rich, he lives in a small flat.",
      why: "<b>Although</b> goes before a clause with a subject (he) and a verb ('s). There is no but in the sentence.",
    },
    {
      sentence: "<b>Despite</b> the cold, the children played outside.",
      why: "<b>Despite</b> goes before a noun (the cold), not a clause.",
    },
    {
      sentence: "The flight was delayed <b>because of</b> the fog.",
      why: "The fog is the reason. It is a noun, so we use <b>because of</b>, not because.",
    },
    {
      sentence: "The roads were icy. <b>As a result,</b> many people stayed at home.",
      why: "Staying at home is the result of the ice. <b>As a result</b> starts a new sentence.",
    },
    {
      sentence: "She plays the piano. She <b>also</b> sings in a choir.",
      why: "<b>Also</b> adds one more idea. It goes before the main verb, sings.",
    },
    {
      sentence: "We sell many kinds of fruit, <b>such as</b> mangoes and pineapples.",
      why: "<b>Such as</b> gives examples, and nouns come after it.",
    },
  ],

  pitfall: {
    wrong: "Despite of the rain, we went out.",
    right: "<b>Despite</b> the rain, we went out. · <b>In spite of</b> the rain, we went out.",
    why: "Despite has no of after it. In spite of has three words, with of at the end.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "___ the heavy traffic, we arrived on time.",
      options: ["Although", "Despite", "However"],
      answer: 1,
      feedback:
        "The heavy traffic is a noun, not a clause, so we use despite: Despite the heavy traffic, we arrived on time. Although needs a subject and a verb after it (although the traffic was heavy), and however usually starts a new sentence.",
    },
    {
      kind: "choice",
      stem: "I love Italian dishes ___ pizza and pasta.",
      options: ["however", "although", "such as"],
      answer: 2,
      feedback:
        "Pizza and pasta are examples of Italian dishes, and they are nouns, so we use such as: I love Italian dishes such as pizza and pasta. However and although are for a contrast.",
    },
    {
      kind: "gap",
      stem: "We enjoyed the holiday ___ the hotel was noisy. (Use although, despite or however.)",
      answers: ["although", "though", "even though"],
      feedback:
        "After the gap there is a clause, with a subject (the hotel) and a verb (was), so we use although: We enjoyed the holiday although the hotel was noisy. Though and even though are also correct. Despite goes before a noun or an -ing form.",
    },
    {
      kind: "gap",
      stem: "The shoes were very comfortable. ___, they were too expensive, so I didn't buy them. (Use however or therefore.)",
      answers: ["However"],
      feedback:
        "Being too expensive is a contrast with being comfortable, not a result, so we use however at the start of the new sentence: However, they were too expensive. Therefore is for a result.",
    },
    {
      kind: "gap",
      stem: "We couldn't play tennis ___ the rain. (Use because or because of.)",
      answers: ["because of", "due to"],
      feedback:
        "The rain is a noun, not a clause, so we use because of: We couldn't play tennis because of the rain. Because goes before a subject and a verb: because it was raining.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a sentence.",
      words: ["the", "also", "My", "plays", "brother", "guitar."],
      answer: "My brother also plays the guitar.",
      feedback: "Also usually goes before the main verb: My brother also plays the guitar.",
    },
    {
      kind: "mistake",
      tokens: ["Despite", "I", "was", "very", "tired,", "I", "still", "finished", "the", "report."],
      wrongIndex: 0,
      correction: "Although",
      feedback:
        "After the first word there is a clause, with a subject (I) and a verb (was), so we use although (or though, or even though): Although I was very tired, I still finished the report. Despite goes before a noun or an -ing form: Despite being very tired, …",
    },
  ],

  levelRationale:
    "English Grammar Profile: however, although, because of, also and for example are B1 points, and despite, in spite of, due to, therefore, as a result, in addition and such as are B1 to B2. This topic follows A2 and, but, so and because in the linking-words family and doesn't change them: because still goes before a reason clause, and so before a result. The comma after However and the other sentence linkers is shown in the examples but not taught, because commas are taught later at B1 (order 41), and no quiz item tests a comma. Every gap names the words to choose from, and the although gap also accepts though and even though. Whereas, nevertheless and owing to are left to B2.",

  sourceNotes:
    "english_grammar.txt, # Linking words: however for contrast, although with a subject and a verb, despite and in spite of before a noun, and because of and due to agree with Swan. The note says despite and in spite of take a noun or pronoun; they also take an -ing form, as its own example shows (Despite having e-reader, which needs an e-reader). 'Her husband vote' should be voted, and 'we'll have to the postpone' should be we'll have to postpone. Whereas, nevertheless, owing to, as for a reason, thus and consequently are above B1. # Adverb, ## Connection ideas between by adverb: in addition at the start and also after the subject agree with Swan. Its contrast list ends with ye, which should be yet. The position of also, although with but, and such as are authored from Swan, Practical English Usage.",
};
