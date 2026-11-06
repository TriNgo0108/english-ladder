import type { RuleTopic } from "../../schema";

export const pastContinuous: RuleTopic = {
  slug: "past-continuous",
  title: "Past continuous: I was working",
  summary: "Say what was in progress at a time in the past: I was cooking at eight. Use was or were + -ing, and use it with when and while.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 2,

  explanation: [
    "We use the <b>past continuous</b> for an action that was in progress at a time in the past. In progress means that it started before that time and it was not finished at that time: At eight o'clock last night, I <b>was watching</b> TV. (I started before eight, and at eight I was still watching.)",
    "The past continuous has two parts: <b>was</b> or <b>were</b>, and then the verb with <b>-ing</b>. Use was and were as in the past of be: I was working, he was working, you were working, we were working, they were working. The -ing spelling is the same as in the present continuous: make → making, sit → sitting.",
    "To say no, put <b>not</b> after was or were: I <b>wasn't sleeping</b>. They <b>weren't listening</b>. To ask a question, put was or were before the subject. Remember: the subject is the person or thing that the sentence is about. <b>Were</b> you <b>sleeping</b>? What <b>was</b> she <b>doing</b>? In short answers, use was or were with no -ing verb: Yes, I was. No, they weren't.",
    "We often use the past continuous and the past simple together. The past continuous is the longer action, the background. The past simple is a short action that happened in the middle of it: I <b>was having</b> a shower when the phone <b>rang</b>.",
    "We often use <b>when</b> before the short action, in the past simple, and <b>while</b> before the longer action, in the past continuous: I was cooking <b>when</b> Tom arrived. <b>While</b> I was cooking, Tom arrived. While means during the time that something was happening.",
    "Be careful: the two tenses tell different stories. When Tom arrived, I <b>was cooking</b> means that I started cooking before he arrived. When Tom arrived, I <b>cooked</b> means that first Tom arrived, and then I started cooking.",
    "Two longer actions can also happen at the same time. Then both are in the past continuous: While I was cooking, my brother was watching TV.",
    "Remember: some verbs, like know, like, love and want, are not usually in a continuous form. This is true in the past too: I knew the answer, not I was knowing the answer.",
  ].join("\n\n"),

  form: [
    "I/he/she/it was working · you/we/they were working",
    "I/he/she/it wasn't working · you/we/they weren't working",
    "Was I/he/she/it …ing? · Were you/we/they …ing?",
    "Yes, I was. · No, they weren't.",
    "longer action: was/were …ing · short action: past simple",
    "I was cooking when Tom arrived. · While I was cooking, Tom arrived.",
  ].join("\n"),

  examples: [
    {
      sentence: "At seven o'clock this morning, I <b>was having</b> breakfast.",
      why: "Breakfast was in progress at seven: it started before seven and was not finished. So we use <b>was</b> and the -ing verb.",
    },
    {
      sentence: "The children <b>were playing</b> in the garden.",
      why: "The children are two or more people (they), so we use <b>were</b>, then the -ing verb: playing.",
    },
    {
      sentence: "I <b>was walking</b> home when I <b>saw</b> Maria.",
      why: "Walking home is the longer action, so it is in the past continuous. Seeing Maria is a short action in the middle of it, so it is in the past simple: <b>saw</b>.",
    },
    {
      sentence: "<b>While</b> we <b>were driving</b> to the airport, it started to snow.",
      why: "<b>While</b> goes with the longer action, in the past continuous: were driving. It started to snow is the short action, so it is in the past simple.",
    },
    {
      sentence: "Sorry, what did you say? I <b>wasn't listening</b>.",
      why: "To say no, put not after was: <b>wasn't</b> is the short form of was not. Not listening was in progress while the other person was speaking.",
    },
    {
      sentence: "What <b>were</b> you <b>doing</b> at ten o'clock last night?",
      why: "In a question, <b>were</b> comes before the subject, you, and the -ing verb comes after it. We ask about one moment in the past, so we use the past continuous.",
    },
    {
      sentence: "When the film ended, we <b>went</b> home.",
      why: "First the film ended, and then we went home. These are two short actions, one after the other, so both are in the past simple: <b>went</b>, not were going.",
    },
  ],

  pitfall: {
    wrong: "I was cook dinner when you called.",
    right: "I <b>was cooking</b> dinner when you called.",
    why: "The past continuous needs two parts: was or were, and the verb with <b>-ing</b>. Do not leave out the -ing.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "What were you doing at nine o'clock last night? I ___ a book.",
      options: ["were reading", "was read", "was reading", "am reading"],
      answer: 2,
      feedback:
        "The question asks what was in progress at nine o'clock, so we use the past continuous. With I, that is was and the -ing verb: I was reading a book. Were is for you, we and they. Was read has no -ing, and am reading is about now, not last night.",
    },
    {
      kind: "gap",
      stem: "The children ___ in the garden when it started to rain. (play, past continuous)",
      answers: ["were playing"],
      feedback:
        "The children are two or more people (they), so we use were and the -ing verb: The children were playing in the garden. Playing was the longer action. It started to rain was the short action in the middle of it.",
    },
    {
      kind: "gap",
      stem: "We ___ TV, so we turned it off. (watch + not, past continuous)",
      answers: ["weren't watching", "were not watching"],
      feedback:
        "With we, the past continuous uses were. To say no, put not after were: We weren't watching TV, or We were not watching TV. Wasn't is for I, he, she and it.",
    },
    {
      kind: "choice",
      stem: "First Tom arrived. Then I started to make dinner. Which sentence says this?",
      options: [
        "When Tom arrived, I was making dinner.",
        "When Tom arrived, I made dinner.",
        "While Tom arrived, I was making dinner.",
      ],
      answer: 1,
      feedback:
        "When Tom arrived, I made dinner: both verbs are in the past simple, so the actions happen one after the other. When Tom arrived, I was making dinner means that I started before he arrived. While goes with a longer action, not a short one like arrived.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["your", "doing?", "What", "brother", "was"],
      answer: "What was your brother doing?",
      feedback:
        "The question word comes first, then was, then the subject, then the -ing verb: What was your brother doing? It is was because your brother is one person (he).",
    },
    {
      kind: "mistake",
      tokens: ["While", "I", "was", "walk", "home,", "I", "saw", "an", "old", "friend."],
      wrongIndex: 3,
      correction: "walking",
      feedback:
        "The past continuous needs was or were and the verb with -ing: While I was walking home, I saw an old friend. Walking home was the longer action, and saw was the short action in the middle of it.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A2: the past continuous in statements, negatives and questions, for an action in progress at a time in the past and as a longer action that a past simple action happens in the middle of, is an A2 point. It comes after the past simple, because it is taught side by side with it. While is used here only in this most common way, with the past continuous. Time clauses with while, as soon as and until are a B1 topic on this site.",

  sourceNotes:
    "english_grammar.txt, # Tense, ## Past continuous: 'talk about in progress at a particular time in the past' agrees with Swan, and it is the first use taught here. The note says nothing about forms, about using it with the past simple, or about when and while. These, the different stories in When Tom arrived, I was cooking and When Tom arrived, I cooked, and no continuous form for know, like, love and want are authored from Swan, Practical English Usage. Swan also allows when with the longer action (When I was walking home, I saw Ana), so the explanation says we often, not always, use when before the short action.",
};
