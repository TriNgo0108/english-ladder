import type { RuleTopic } from "../../schema";

export const questionTags: RuleTopic = {
  slug: "question-tags",
  family: "question-forms",
  title: "Question tags: It's cold, isn't it?",
  summary: "It's cold, isn't it? You don't eat meat, do you? Add a short question to the end of a sentence to check something or to ask someone to agree.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 19,

  explanation: [
    "A <b>question tag</b> is a short question at the end of a sentence: It's cold, <b>isn't it</b>? You live near here, <b>don't you</b>? We use question tags a lot when we speak, to check that something is true or to ask the other person to agree.",
    "An <b>auxiliary</b> is a small verb that goes with another verb, like be in She is working, have in They have finished, do in Do you like it?, and can or will. A question tag is made with be or the auxiliary from the sentence, and a pronoun for the subject: She can swim, <b>can't she</b>? Tom will be late, <b>won't he</b>? Your parents have left, <b>haven't they</b>? Remember: a pronoun is a short word that we use in place of a noun.",
    "When the sentence is <b>positive</b>, the tag is usually <b>negative</b>: You're tired, <b>aren't you</b>? When the sentence is <b>negative</b>, the tag is <b>positive</b>: You aren't tired, <b>are you</b>? Words like never make a sentence negative, so the tag is positive: You never call me, <b>do you</b>?",
    "When the sentence has no auxiliary and the verb is not be, use <b>do</b>, <b>does</b> or <b>did</b> in the tag, in the same tense: You live here, <b>don't you</b>? She works in a bank, <b>doesn't she</b>? They left early, <b>didn't they</b>?",
    "Negative tags use the short form: isn't it?, not is not it? After there is or there are, the tag uses there: There's a meeting tomorrow, <b>isn't there</b>?",
    "Two tags are special. After I'm, the negative tag is <b>aren't I</b>: I'm late, <b>aren't I</b>?, not amn't I. After Let's, the tag is <b>shall we</b>: Let's go out tonight, <b>shall we</b>?",
  ].join("\n\n"),

  form: [
    "positive sentence → negative tag · You're tired, aren't you?",
    "negative sentence → positive tag · You aren't tired, are you?",
    "be or the auxiliary + pronoun · She can swim, can't she? · Tom will be late, won't he?",
    "no auxiliary → do / does / did · She works here, doesn't she? · They left, didn't they?",
    "I'm …, aren't I? · Let's …, shall we? · There's …, isn't there?",
  ].join("\n"),

  examples: [
    {
      sentence: "It's a lovely day, <b>isn't it</b>?",
      why: "The sentence is positive and uses be (is), so the tag is negative: <b>isn't it</b>.",
    },
    {
      sentence: "You haven't seen my keys, <b>have you</b>?",
      why: "The sentence is negative, so the tag is positive. The auxiliary, have, is repeated.",
    },
    {
      sentence: "Your brother can drive, <b>can't he</b>?",
      why: "The tag repeats the auxiliary, can, and uses a pronoun, he, for your brother.",
    },
    {
      sentence: "She works in a hospital, <b>doesn't she</b>?",
      why: "There is no auxiliary, and works is the present simple with -s, so the tag uses <b>doesn't</b>.",
    },
    {
      sentence: "We met at Tom's party, <b>didn't we</b>?",
      why: "Met is the past simple, so the tag uses <b>didn't</b>.",
    },
    {
      sentence: "I'm in the right room, <b>aren't I</b>?",
      why: "After I'm, the negative tag is <b>aren't I</b>.",
    },
  ],

  pitfall: {
    wrong: "You like coffee, isn't it?",
    right: "You like coffee, <b>don't you</b>?",
    why: "The tag must match the sentence. Like has no auxiliary, so we use do, and the subject is you: <b>don't you</b>.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "You're from Brazil, ___?",
      options: ["aren't you", "isn't it", "don't you", "aren't they"],
      answer: 0,
      feedback:
        "The sentence is positive and uses be (are), and the subject is you, so the tag is aren't you. Don't you would need a sentence with no auxiliary, like You live in Brazil.",
    },
    {
      kind: "gap",
      stem: "She doesn't eat meat, ___? (Write two words.)",
      answers: ["does she"],
      feedback:
        "The sentence is negative, with doesn't, so the tag is positive and repeats does: She doesn't eat meat, does she?",
    },
    {
      kind: "gap",
      stem: "I'm next in the queue, ___? (Write a negative tag in two words.)",
      answers: ["aren't I"],
      feedback:
        "After I'm, the negative tag is aren't I, not amn't I or isn't I: I'm next in the queue, aren't I?",
    },
    {
      kind: "choice",
      stem: "Your parents moved to Spain last year, ___?",
      options: ["haven't they", "don't they", "weren't they", "didn't they"],
      answer: 3,
      feedback:
        "Moved is the past simple and there is no auxiliary, so the tag uses did. The sentence is positive, so the tag is negative: didn't they?",
    },
    {
      kind: "gap",
      stem: "Let's take a taxi, ___? (Write two words.)",
      answers: ["shall we"],
      feedback: "After Let's, the tag is shall we: Let's take a taxi, shall we?",
    },
    {
      kind: "gap",
      stem: "There isn't any milk left, ___? (Write two words.)",
      answers: ["is there"],
      feedback:
        "The sentence is negative, so the tag is positive. After there isn't, the tag uses there: There isn't any milk left, is there?",
    },
    {
      kind: "mistake",
      tokens: ["Tom", "will", "be", "at", "the", "party,", "doesn't", "he?"],
      wrongIndex: 6,
      correction: "won't",
      feedback:
        "The sentence has the auxiliary will, so the tag repeats will in the negative: Tom will be at the party, won't he?",
    },
  ],

  levelRationale:
    "English Grammar Profile: question tags with be, do and auxiliaries, positive with negative and negative with positive, are a B1 point, and aren't I and Let's …, shall we? are B1 too. The spec (section 8) places question tags at B1 in the question-forms family, after A1 question words. The term auxiliary is defined here for the first time on this site. Swan notes that a positive sentence can sometimes have a positive tag, to show interest or surprise (So you're leaving, are you?), so the rule says usually, no gap has a positive sentence without naming the tag in the cue, and no choice offers a same-polarity tag. The tag with have as a main verb (You have a car, don't you / haven't you?) varies, so it is not tested. What the voice does in a tag is taught in order 44, so this topic states no rule about it.",

  sourceNotes:
    "english_grammar.txt, ## Question tags and # Question tags: tags made with the same verb or the auxiliary and a subject pronoun, and a negative tag after a positive sentence, agree with Swan. The examples There is a meeting tomorrow, isn't there? and We aren't late, are we? are correct; this topic writes its own. Do, does and did with no auxiliary, never, aren't I, and shall we after Let's are authored from Swan, Practical English Usage.",
};
