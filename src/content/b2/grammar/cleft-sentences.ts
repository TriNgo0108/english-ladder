import type { RuleTopic } from "../../schema";

export const cleftSentences: RuleTopic = {
  slug: "cleft-sentences",
  title: "Cleft sentences: It was Maria who…, What I need is…",
  summary: "It was Maria who called, not Tom. What I need is a holiday. Split a sentence in two to make its most important part stand out.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 19,

  explanation: [
    "Sometimes one part of a sentence is more important than the rest, because it is new or because we want to correct someone. <b>Emphasis</b> means making one part of what you say stand out, so that the listener notices it. In speech, we can do this with the voice: <b>Maria</b> called you. In writing, and in speech too, we can also change the sentence: <b>It was Maria who</b> called you. A sentence like this is called a <b>cleft sentence</b>: one sentence split into two parts, to give emphasis to one part. Cleft means split.",
    "The first kind starts with <b>it</b>: It + be + the important part + who or that + the rest. The important part can be a person, a thing, a time or a place: It was <b>Maria</b> who called. It's <b>the noise</b> that I can't stand. It was <b>in 2015</b> that we met. It was <b>in Rome</b> that I lost my bag. For a person, use <b>who</b> or <b>that</b>. For a thing, a time or a place, use <b>that</b>. Which is also possible after a thing, but that is more usual.",
    "Be shows the time: It <b>is</b> … for now and It <b>was</b> … for the past. It stays singular, even when the important part is plural: It was <b>my parents</b> who paid for the wedding, not It were my parents who paid. The verb after who agrees with the important part: It's my parents who <b>are</b> worried.",
    "We often use an it-cleft to <b>correct</b> someone: It wasn't Anna who lost the keys. It was <b>Sam</b>. Or to say why something happened: It was <b>the cost</b> that worried us, not the distance.",
    "The second kind starts with <b>what</b>: What + subject + verb + be + the important part. <b>What I need is</b> a holiday. (= I need a holiday.) <b>What I love about Rome is</b> the food. The important part comes at the end, after is. Start with what, not which or that: What I need is …, not Which I need is …. Remember: the subject is the person or thing that the sentence is about.",
    "In a what-cleft, be is usually is or was, even before a plural noun: What we need <b>is</b> more chairs. We often use what-clefts to introduce something important, or to say how we feel: <b>What surprised me was</b> his age. <b>What you should do is</b> talk to her. After do is, we usually use the base form: talk, not talks. Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    "Some other phrases work like what: <b>The thing that</b> worries me <b>is</b> the cost. <b>The person who</b> helped me most <b>was</b> my teacher. <b>All I want is</b> a cup of tea. (= I only want a cup of tea.) Cleft sentences are used in speech and in writing, and they are very common in presentations and arguments.",
  ].join("\n\n"),

  form: [
    "It + is / was + the important part + who / that + the rest: It was Maria who called.",
    "who or that for people · that for things, times and places (which is possible after a thing)",
    "it stays singular: It was my parents who paid. · not: It were my parents",
    "What + subject + verb + is / was + the important part: What I need is a holiday.",
    "what, not which or that · What you should do is + base form: What you should do is talk to her.",
    "The thing that … is … · The person who … is … · All I want is …",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>It was</b> my sister <b>who</b> found the keys, not me.",
      why: "The it-cleft puts my sister in focus, to correct a wrong idea. Who is for a person; that is also correct.",
    },
    {
      sentence: "<b>It was</b> in 1969 <b>that</b> people first walked on the moon.",
      why: "The important part is a time, in 1969, so we use <b>that</b>.",
    },
    {
      sentence: "<b>What</b> I really like about this job <b>is</b> the people.",
      why: "The what-cleft puts the people at the end, in focus. It means: I really like the people.",
    },
    {
      sentence: "<b>What</b> you should do <b>is</b> ask your manager.",
      why: "After What you should do is, we use the base form: ask.",
    },
    {
      sentence: "<b>The thing that</b> worries me <b>is</b> the cost.",
      why: "<b>The thing that</b> works like what: the cost is in focus at the end.",
    },
  ],

  pitfall: {
    wrong: "Which I don't understand is why she left.",
    right: "<b>What</b> I don't understand <b>is</b> why she left.",
    why: "A cleft sentence like this starts with <b>what</b>, not which. What means the thing that.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Someone says that Tom broke the window, but it was Ben. Which sentence corrects them?",
      options: [
        "It was Ben which broke the window.",
        "It was Ben who broke the window.",
        "It were Ben who broke the window.",
      ],
      answer: 1,
      feedback:
        "Ben is a person, so we use who (or that): It was Ben who broke the window. It stays singular, so the verb is was, not were.",
    },
    {
      kind: "choice",
      stem: "\"I love the food in Italy.\" Which sentence puts the food in focus?",
      options: [
        "What I love about Italy is the food.",
        "Which I love about Italy is the food.",
        "What I love about Italy the food is.",
      ],
      answer: 0,
      feedback:
        "A what-cleft starts with what, then be, then the important part at the end: What I love about Italy is the food. We don't start it with which, and is goes before the food.",
    },
    {
      kind: "gap",
      stem: "___ I need right now is a long holiday. (Write one word to start a cleft sentence.)",
      answers: ["What", "All"],
      feedback:
        "This is a what-cleft: What I need right now is a long holiday. All is also correct: All I need right now is a long holiday means that a long holiday is the only thing I need.",
    },
    {
      kind: "gap",
      stem: "It was my mother ___ taught me to cook, not my father. (Write one word.)",
      answers: ["who", "that"],
      feedback:
        "My mother is a person, so we use who or that: It was my mother who taught me to cook. We don't use which for a person.",
    },
    {
      kind: "gap",
      stem: "What we need ___ more time, not more money. (be, present simple)",
      answers: ["is"],
      feedback:
        "In a what-cleft, be comes before the important part, and it is usually is: What we need is more time.",
    },
    {
      kind: "mistake",
      tokens: ["Which", "I", "really", "want", "is", "a", "good", "night's", "sleep."],
      wrongIndex: 0,
      correction: "What",
      feedback:
        "A cleft sentence like this starts with what, not which: What I really want is a good night's sleep. All is also correct: All I really want is a good night's sleep.",
    },
    {
      kind: "mistake",
      tokens: ["It", "was", "Maria", "which", "told", "me", "the", "news."],
      wrongIndex: 3,
      correction: "who",
      feedback:
        "Maria is a person, so we use who (or that), not which: It was Maria who told me the news.",
    },
  ],

  levelRationale:
    "The spec (section 8) places cleft sentences at B2, as a new point, and english_grammar.txt has no section on them, so the level follows the spec. The topic keeps to the two basic kinds in Swan, it-clefts and what-clefts, and the phrases the thing that, the person who and all. The words emphasis and cleft sentence are defined here, and subject and base form reuse their earlier wording. Following Review Focus 4, there is no wordbank: the chips of a cleft can always also form the plain sentence, and the grader accepts one order. Each gap accepts every word that fits: who and that for a person, and all as well as what at the start. A thing in an it-cleft would admit that, which and no word, so no gap has one. The what-cleft gap gives the verb in the cue, and the it-cleft choice avoids that as an option, so only one option is correct. Clefts with a whole clause in focus (It was because he was ill that …) and reversed what-clefts (A holiday is what I need) are left to C1.",

  sourceNotes:
    "english_grammar.txt has no section on cleft sentences (a new point in spec section 8), so this topic is authored from Swan, Practical English Usage: it-clefts with who or that, that for times and places, it is with a plural, what-clefts with is or was, do is + base form, and the thing that and all.",
};
