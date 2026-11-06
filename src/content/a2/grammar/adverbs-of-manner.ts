import type { RuleTopic } from "../../schema";

export const adverbsOfManner: RuleTopic = {
  slug: "adverbs-of-manner",
  title: "Adverbs of manner: slowly, carefully, well",
  summary: "Say how someone does something: She drives carefully. He speaks slowly. Make adverbs with -ly, learn good → well, fast and hard, and where they go.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 8,

  explanation: [
    "Remember: an adjective is a word that tells us more about a noun: a <b>careful</b> driver, a <b>slow</b> bus. An <b>adverb of manner</b> tells us more about a verb. It says how someone does something: She drives <b>carefully</b>. The bus moves <b>slowly</b>. Remember: a verb is a word like go, eat or have.",
    "To make most adverbs of manner, add <b>-ly</b> to the adjective: slow → slowly, quick → quickly, quiet → quietly, bad → badly, careful → carefully. When the adjective ends in an e, we usually keep the e: nice → nicely, polite → politely, safe → safely. But true → truly.",
    "When the adjective ends in a consonant and then -y, we usually change the y to <b>-ily</b>: happy → happily, easy → easily, angry → angrily. When it ends in -le, change the e to y: gentle → gently, terrible → terribly. Remember: a vowel is one of the letters a, e, i, o and u. A consonant is any other letter, like b, t or m.",
    "Some adverbs are different. The adverb from good is <b>well</b>: She is a good singer. She sings well. Fast, hard, late and early do not change: He drives <b>fast</b>, not fastly. She works <b>hard</b>. The train arrived <b>late</b>. Hardly and lately are words too, but they have a different meaning. I hardly slept means I almost did not sleep. So do not use hardly for hard or lately for late.",
    "An adverb of manner usually goes after the verb: He speaks quietly. When the verb has an object, the adverb usually goes after the object, not between the verb and the object: She speaks English <b>well</b>, not She speaks well English. He drives his car <b>carefully</b>. Remember: the object is the person or thing that the action goes to.",
    "After be, we use an adjective, not an adverb, because we are talking about the person or thing: She is quiet, not She is quietly. It is the same with look when it means how someone seems: You look tired.",
  ].join("\n\n"),

  form: [
    "adjective + -ly: slow → slowly · quiet → quietly · careful → carefully · polite → politely",
    "consonant + -y → -ily: happy → happily · easy → easily",
    "-le → -ly: gentle → gently · terrible → terribly",
    "good → well · fast → fast · hard → hard · late → late · early → early",
    "verb + adverb: He speaks quietly. · verb + object + adverb: She speaks English well.",
  ].join("\n"),

  examples: [
    {
      sentence: "Please speak <b>slowly</b>. My English isn't very good.",
      why: "<b>Slowly</b> tells us how to speak. It is the adjective slow with -ly, and it goes after the verb, speak.",
    },
    {
      sentence: "He always drives his car very <b>carefully</b>.",
      why: "Careful ends in l, and we just add -ly: <b>carefully</b>. The adverb goes after the object, his car.",
    },
    {
      sentence: "The children played <b>happily</b> in the garden.",
      why: "Happy ends in p and then -y, so the y changes to <b>-ily</b>: happily.",
    },
    {
      sentence: "Maria speaks French really <b>well</b>.",
      why: "The adverb from good is <b>well</b>. It comes after the object, French, not between speaks and French.",
    },
    {
      sentence: "I ran <b>fast</b>, but I missed the bus.",
      why: "<b>Fast</b> is the same as an adjective and as an adverb. We do not say fastly.",
    },
    {
      sentence: "She closed the door <b>quietly</b>.",
      why: "Quiet + -ly makes <b>quietly</b>. It tells us how she closed the door, and it comes after the object, the door.",
    },
  ],

  pitfall: {
    wrong: "She sings very good.",
    right: "She sings very <b>well</b>.",
    why: "Good is an adjective, for a noun: a good singer. To say how someone does something, use the adverb <b>well</b>.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "My brother is a good swimmer. He swims ___.",
      options: ["good", "goodly", "well"],
      answer: 2,
      feedback:
        "We need an adverb, because the word tells us how he swims. The adverb from good is well: He swims well. Good is an adjective, for a noun (a good swimmer), and goodly is not the adverb from good.",
    },
    {
      kind: "gap",
      stem: "Please drive very ___. The road is wet. (careful)",
      answers: ["carefully"],
      feedback:
        "The word tells us how to drive, so we need the adverb. Careful ends in l, and we just add -ly: carefully, with two l's. Careful is the adjective, for a noun: a careful driver.",
    },
    {
      kind: "gap",
      stem: "It was a simple test, and I answered all the questions very ___. (easy)",
      answers: ["easily"],
      feedback:
        "We need an adverb to say how I answered. Easy ends in s and then -y, so the y changes to -ily: easily, not easyly.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order.",
      words: ["English", "very", "speaks", "Tom", "well."],
      answer: "Tom speaks English very well.",
      feedback:
        "The adverb comes after the object, English, not between the verb and the object: Tom speaks English very well, not Tom speaks very well English.",
    },
    {
      kind: "mistake",
      tokens: ["He", "asked", "the", "waiter", "very", "polite", "for", "the", "bill."],
      wrongIndex: 5,
      correction: "politely",
      feedback:
        "The word tells us how he asked, so we need the adverb, not the adjective. Polite ends in e, and we keep the e and add -ly: He asked the waiter very politely for the bill.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["She works hardly every day.", "She works hard every day.", "She hard works every day."],
      answer: 1,
      feedback:
        "Hard is the same as an adjective and as an adverb, and it goes after the verb: She works hard every day. Hardly is a different word. It means almost not, so it does not mean the same as hard.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A2: common adverbs of manner, made with -ly, with well and the irregular fast and hard, after the verb or after its object, are A2 points. This topic comes after the A1 topic on adjectives, because every adverb here is made from an adjective that learners know. Adverbs of frequency come next, because they go in a different place.",

  sourceNotes:
    "english_grammar.txt, # Adverb and ## Manner adverb (how). The note's definition (an adverb tells us more about a verb, an adjective or an adverb) agrees with Swan; this topic uses only the verb part, because that is what adverbs of manner do. The usual position 'after the verb or after the object' agrees with Swan, and the note's examples are used only as models, not copied. The note's sentence adverbs (Unfortunately, Frankly, Presumably) and the order manner, place, time are above A2 and left out. The -ly, -ily and -le spelling, true → truly, well, fast, hard, late and early, hardly and lately as different words, and an adjective after be and look are authored from Swan, Practical English Usage. Adverbs before the verb (He carefully opened the box) are correct but less usual, so the wordbank uses well, which cannot go there, and position is tested only with well. Adjectives that already end in -ly (friendly, lovely) and well as an adjective (I'm well) are left out.",
};
