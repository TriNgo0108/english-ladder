import type { RuleTopic } from "../../schema";

export const usedToAndWould: RuleTopic = {
  slug: "used-to-and-would",
  title: "Used to and would: past habits",
  summary: "Talk about past habits and states that are not true now: I used to live in Paris. We would play outside. Learn didn't use to, and when would is wrong.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 12,

  explanation: [
    "We use <b>used to</b> and the base form of a verb for things that happened again and again in the past, or were true for a long time in the past, but are <b>not true now</b>: I <b>used to play</b> football. (I don't play now.) She <b>used to live</b> in Rome. (She lives in a different place now.) Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    "Used to is the same for every subject: I used to, she used to, they used to. There is no -s, and the verb after it is in the base form: She used to work, not She used to works or She used to worked.",
    "Used to is only for the past. For things that we do again and again now, use the present simple, often with usually: I usually walk to work, not I use to walk to work.",
    "To say no, use <b>didn't use to</b> and the base form: I <b>didn't use to</b> like fish. To ask a question, use <b>did</b>: <b>Did</b> you <b>use to</b> walk to school? Yes, I did. No, I didn't. After did and didn't, we write use, with no -d, because the past is already in did. You will also see didn't used to. Many people write it, but didn't use to is the form most grammar books teach.",
    "We can also use <b>would</b> and the base form for actions that happened again and again in the past: When I was a child, we <b>would go</b> to the beach every summer. The short form is 'd: We<b>'d play</b> outside after school.",
    "But we do not use would for <b>states</b>. A state is not an action. It is how something is, like be, have (for things you own), live, like, love and know. For these, use used to: I <b>used to have</b> a dog, not I would have a dog. We <b>used to live</b> in a flat, not We would live in a flat. Used to is good for actions and for states, so if you are not sure, use used to.",
    "For one action at one time in the past, use the past simple, not used to: I went to Paris last year, not I used to go to Paris last year.",
  ].join("\n\n"),

  form: [
    "I/you/he/she/it/we/they used to + base form: I used to swim every day.",
    "didn't use to + base form: I didn't use to like fish.",
    "Did you use to …? · Yes, I did. · No, I didn't.",
    "would ('d) + base form: actions again and again in the past",
    "states (be, have, live, like, know) → used to, not would",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>used to play</b> the piano, but I stopped when I was twelve.",
      why: "I played the piano again and again in the past, but I do not play now. After <b>used to</b>, play is in the base form.",
    },
    {
      sentence: "My grandparents <b>used to live</b> in a small village.",
      why: "Living in a place is a state, not an action, so we use <b>used to</b>. We cannot say would live here.",
    },
    {
      sentence: "I <b>didn't use to</b> like vegetables. Now I love them.",
      why: "To say no, we use <b>didn't use to</b>: use, not used, because the past is in didn't.",
    },
    {
      sentence: "<b>Did</b> you <b>use to</b> walk to school?",
      why: "In a question, <b>did</b> comes before the subject, you, and we write use to, with no -d.",
    },
    {
      sentence: "Every Sunday, my dad <b>would make</b> pancakes for us.",
      why: "Making pancakes is an action that happened again and again, so we can use <b>would</b>. We can also say used to make.",
    },
    {
      sentence: "We <b>used to have</b> a big dog called Max.",
      why: "Have here is for something we owned, which is a state, so we use <b>used to</b>, not would.",
    },
  ],

  pitfall: {
    wrong: "I would have long hair when I was a student.",
    right: "I <b>used to have</b> long hair when I was a student.",
    why: "Having long hair is a state, not an action. We do not use would for states, so we use <b>used to</b>.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "When I was a child, I ___ in a small flat.",
      options: ["would live", "use to live", "used to live", "was used to live"],
      answer: 2,
      feedback:
        "Living in a place is a state, so we use used to, not would: I used to live in a small flat. Used to has a -d in positive sentences, and we do not put was before it.",
    },
    {
      kind: "gap",
      stem: "I ___ coffee, but now I drink three cups a day. (like + not, used to)",
      answers: ["didn't use to like", "did not use to like", "didn't used to like", "used not to like"],
      feedback:
        "To say no, use didn't use to and the base form: I didn't use to like coffee. After didn't, use has no -d, because the past is already in didn't. Many people also write didn't used to.",
    },
    {
      kind: "gap",
      stem: "My grandmother ___ a farmer, but she stopped work in 1990. (be, used to)",
      answers: ["used to be"],
      feedback:
        "Be is a state, so we use used to, not would: My grandmother used to be a farmer. After used to, be is in the base form.",
    },
    {
      kind: "choice",
      stem: "In which sentence is would correct?",
      options: [
        "We would have a cat when I was small.",
        "Every summer we would swim in the lake.",
        "I would be very shy when I was young.",
      ],
      answer: 1,
      feedback:
        "Swimming in the lake is an action that happened again and again, so would is correct. Having a cat and being shy are states, so for them we use used to: We used to have a cat. I used to be very shy.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["play", "use", "you", "to", "Did", "football?"],
      answer: "Did you use to play football?",
      feedback:
        "Did comes first, then the subject, you, then use to and the base form: Did you use to play football? We write use, not used, after did.",
    },
    {
      kind: "mistake",
      tokens: ["I", "used", "to", "went", "to", "the", "park", "every", "day."],
      wrongIndex: 3,
      correction: "go",
      feedback:
        "After used to, the verb is in the base form: I used to go to the park every day. The past is already in used, so we do not say used to went.",
    },
  ],

  levelRationale:
    "English Grammar Profile: used to for past habits and states is an A2 point, and would for past habits is placed later, at B1. This site's spec puts the two together at A2, so would is taught here only for the main rule, actions and not states, and the quiz tests it only by choice, never by asking learners to produce it. The topic comes last in this part of A2, after the past simple, because it contrasts with it (I went to Paris last year, not I used to go).",

  sourceNotes:
    "english_grammar.txt, # Used to and would: two patterns for past habits that are not true now, used to for a long-lasting action or a state, and would for a habit, agree with Swan. The note's wording that would is for 'a habit rather than a definite repeated action' is not clear, so this topic gives Swan's rule instead: would for repeated actions, not for states. The note says 'infinitive'; this topic says the base form, as A1 does. Didn't use to and Did you use to …? are authored from Swan, Practical English Usage. Swan notes that didn't used to is also common, and some dictionaries accept it, so the negative gap accepts it, and used not to (formal, British) too; the explanation teaches didn't use to. # Be used to (be used to + -ing, get used to) is a different structure, above A2, and left out.",
};
