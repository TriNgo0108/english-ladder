import type { RuleTopic } from "../../schema";

export const thisThatTheseThose: RuleTopic = {
  slug: "this-that-these-those",
  title: "This, that, these, those",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 6,

  explanation: [
    "We use <b>this</b>, <b>that</b>, <b>these</b> and <b>those</b> to show which person or thing we mean.",
    "<b>This</b> and <b>these</b> are for people and things near you: here, or in your hand. <b>That</b> and <b>those</b> are for people and things that are not near you: over there.",
    "<b>This</b> and <b>that</b> are for one person or thing, with a singular noun: this book, that car. <b>These</b> and <b>those</b> are for two or more, with a plural noun: these books, those cars. Do not use this or that with a plural noun: these books, not this books.",
    "They can come before a noun: This bag is heavy. They can also be alone, with no noun after them: This is my bag. Is that your phone? Use <b>is</b> after this and that, and <b>are</b> after these and those: This is …, These are ….",
    "We use this and these to introduce people, to say their names to someone: This is my friend, Sam. These are my parents.",
    "That is has a short form, <b>that's</b>: That's my car. This is has no short form in writing. We do not write this's.",
    "In an answer, we often use it or they: What's this? It's a pen. What are those? They're birds.",
  ].join("\n\n"),

  form: [
    "near: this book (one) · these books (two or more)",
    "not near: that book (one) · those books (two or more)",
    "this/that is … · these/those are …",
    "that's = that is",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>This</b> bag is very heavy.",
      why: "We use <b>this</b> because it is one bag, and it is near me, in my hand.",
    },
    {
      sentence: "<b>These</b> shoes are new.",
      why: "We use <b>these</b> because shoes is plural, and the shoes are near me.",
    },
    {
      sentence: "Is <b>that</b> your car, over there?",
      why: "We use <b>that</b> because it is one car, and it is not near: it is over there.",
    },
    {
      sentence: "<b>Those</b> people are from Japan.",
      why: "We use <b>those</b> because people is plural, and the people are not near.",
    },
    {
      sentence: "<b>This is</b> my sister, Kate.",
      why: "To introduce one person, we use <b>this is</b>. For two or more people, it is these are.",
    },
    {
      sentence: "<b>That's</b> my house, over there.",
      why: "<b>That's</b> is the short form of that is. We use that because it is one house, and it is not near.",
    },
  ],

  pitfall: {
    wrong: "This shoes are nice.",
    right: "<b>These</b> shoes are nice.",
    why: "Shoes is plural, so we need <b>these</b> (near) or <b>those</b> (not near). This is only for one: this shoe.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "___ books are very old. (The books are here, in my hands.)",
      options: ["These", "This", "Those", "That"],
      answer: 0,
      feedback:
        "Books is plural, and the books are near me, so we use these: These books are very old. This is only for one thing, and we do not say this books. Those and that are for things that are not near.",
    },
    {
      kind: "choice",
      stem: "Look at ___ bird in the tree over there!",
      options: ["that", "this", "those", "these"],
      answer: 0,
      feedback:
        "It is one bird, and it is not near: it is over there. So we use that: that bird. This is for one thing near you. Those and these are for two or more.",
    },
    {
      kind: "gap",
      stem: "___ are my parents, Tom and Lisa. (Use this, that, these or those. My parents are here with me.)",
      answers: ["These"],
      feedback:
        "My parents are two people, and they are here with me, so we use these: These are my parents. To introduce one person, we say This is.",
    },
    {
      kind: "gap",
      stem: "Is ___ your phone, over there on the table? (Use this, that, these or those.)",
      answers: ["that"],
      feedback:
        "It is one phone, and it is not near: it is over there. So we use that: Is that your phone? This is for one thing near you.",
    },
    {
      kind: "mistake",
      tokens: ["These", "is", "my", "brother,", "Sam."],
      wrongIndex: 0,
      correction: "This",
      feedback:
        "We are introducing one person, my brother, so we use this: This is my brother, Sam. These is for two or more, and it needs are: These are my brothers.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: this, that, these and those before a noun (this book) and alone (This is my brother) are A1 points. They come after nouns, because the choice depends on singular and plural, and after a/an, which also comes before a noun.",

  sourceNotes:
    "english_grammar.txt, # This, these these and those: the four rules (this: one thing close to you; that: one thing not close; these: plural, close; those: plural, not close) agree with Swan. Two errors in the note: the heading says these twice and leaves out that, and the last line says those is for 'plurals things to close to you'. It should say not close to you. The note does not cover is/are after them, use with no noun, introducing people, or that's. Those are authored from Swan, Practical English Usage (this, that, these, those). Swan's other uses (this week, That's a good idea for something just said) are left out as more than this first topic needs.",
};
