import type { RuleTopic } from "../../schema";

export const presentPerfectContinuous: RuleTopic = {
  slug: "present-perfect-continuous",
  title: "Present perfect continuous: I've been waiting for an hour",
  summary: "I've been waiting for an hour. Why are you so tired? Use have been + -ing for an activity up to now, and know when I've read is better.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 5,

  explanation: [
    "The <b>present perfect continuous</b> has three parts: <b>have</b> or <b>has</b>, then <b>been</b>, then the verb with <b>-ing</b>: I<b>'ve been waiting</b>. She<b>'s been working</b>. To say no, use haven't or hasn't: I <b>haven't been sleeping</b> well. To ask a question, put have or has before the subject: <b>Have</b> you <b>been waiting</b> long?",
    "We use it for an activity that started in the past and is <b>still going on now</b>, often to say how long, with since, for or How long: I<b>'ve been waiting</b> for the bus for twenty minutes. It<b>'s been raining</b> since this morning. <b>How long have</b> you <b>been learning</b> English?",
    "We also use it for an activity that went on for some time and has <b>just stopped</b>, when we can see the result now: I'm hot because I<b>'ve been running</b>. Your eyes are red. <b>Have</b> you <b>been crying</b>? The ground is wet. It<b>'s been raining</b>.",
    "Compare the present perfect simple, have or has and the past participle. The <b>continuous</b> is about the activity, and the activity may not be finished: I<b>'ve been reading</b> your book. (I haven't finished it.) The <b>simple</b> is about the result, something that is finished: I<b>'ve read</b> your book. (I've finished it.)",
    "When we say how many or how much, use the simple: I<b>'ve read</b> three books this month, not I've been reading three books. She<b>'s written</b> six emails this morning. Use the continuous for how long: She<b>'s been writing</b> emails all morning.",
    "With some verbs, like live, work, study and learn, both are often correct with how long, and the meaning is almost the same: I<b>'ve lived</b> here for five years. I<b>'ve been living</b> here for five years.",
    "State verbs, like know, like, want and belong, are not usually in a continuous form, so we use the present perfect simple with them: I<b>'ve known</b> her for ten years, not I've been knowing her for ten years.",
  ].join("\n\n"),

  form: [
    "have / has + been + -ing",
    "I/you/we/they have ('ve) been waiting · he/she/it has ('s) been waiting",
    "I haven't been sleeping · she hasn't been sleeping",
    "Have you been waiting …? · How long has she been working …?",
    "how long → continuous: I've been reading for an hour.",
    "how many, finished → simple: I've read three books.",
    "state verbs → simple: I've known her for years.",
  ].join("\n"),

  examples: [
    {
      sentence: "We<b>'ve been waiting</b> here since nine o'clock.",
      why: "The waiting started at nine and it is still going on, so we use <b>'ve been</b> and the -ing form.",
    },
    {
      sentence: "Sorry about my hands. I<b>'ve been painting</b> the kitchen.",
      why: "The painting has just stopped and we can see the result, so we use the present perfect continuous.",
    },
    {
      sentence: "He<b>'s been learning</b> Japanese for two years.",
      why: "The learning started two years ago and is still going on. With he, we use <b>has</b> ('s) been and the -ing form.",
    },
    {
      sentence: "I<b>'ve drunk</b> four glasses of water today.",
      why: "We say how many, so we use the present perfect simple, <b>'ve drunk</b>, not 've been drinking.",
    },
    {
      sentence: "They<b>'ve known</b> each other since they were children.",
      why: "Know is a state verb, so we use the present perfect simple, <b>'ve known</b>, even with since.",
    },
  ],

  pitfall: {
    wrong: "I've been reading three books this month.",
    right: "I<b>'ve read</b> three books this month.",
    why: "When we say how many, use the present perfect <b>simple</b>. The continuous is for how long.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Sorry about the mess. We ___ the living room, and we haven't finished yet.",
      options: ["have painted", "have been painting", "painted", "paint"],
      answer: 1,
      feedback:
        "The painting started in the past, it is still going on, and it isn't finished, so we use the present perfect continuous: We have been painting the living room. Have painted would mean that it is finished, and painted is for a finished time in the past.",
    },
    {
      kind: "gap",
      stem: "I ___ six emails so far today. (write)",
      answers: ["have written", "'ve written"],
      feedback:
        "We say how many, six, so we use the present perfect simple: I have written, or I've written, six emails so far today. Write is irregular: write → wrote → written. We don't use the continuous to say how many.",
    },
    {
      kind: "gap",
      stem: "It ___ since this morning. Take an umbrella. (rain, present perfect continuous)",
      answers: ["has been raining", "'s been raining"],
      feedback:
        "It is it, so we use has, then been, then the -ing form: It has been raining, or It's been raining, since this morning.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "I've been knowing Sam for years.",
        "I know Sam for years.",
        "I've known Sam for years.",
        "I'm knowing Sam for years.",
      ],
      answer: 2,
      feedback:
        "Know is a state verb, so it is not usually continuous, and with for years we need the present perfect: I've known Sam for years. We don't say I've been knowing, I know or I'm knowing for this meaning.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["learning", "you", "English?", "How", "been", "have", "long"],
      answer: "How long have you been learning English?",
      feedback:
        "How long comes first, then have, then the subject, you, then been and the -ing form: How long have you been learning English?",
    },
    {
      kind: "mistake",
      tokens: ["We've", "been", "live", "in", "this", "town", "since", "2020."],
      wrongIndex: 2,
      correction: "living",
      feedback:
        "After have been, we need the -ing form: We've been living in this town since 2020. We've lived in this town since 2020 is also correct.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the present perfect continuous, for an activity that is still going on with for and since and for a recent activity with a result now, is a B1 point. This topic comes after the present perfect simple (order 1), since and for (order 2) and state verbs (order 4), because it builds on all three. The contrast with the simple is given for finished results and for how many, as Swan does; with live, work, study and learn the explanation says both are often correct, because Swan says there is little difference with these verbs. The passive form (has been being done) is above B1 and left out.",

  sourceNotes:
    "english_grammar.txt, # Present perfect simple and continuous, ## Present perfect continuous: an activity that began in the past and still continues, one that has recently finished, and the focus on the activity or its length agree with Swan. The note's ## Present perfect simple says the simple is for the result, which agrees with Swan, and this topic uses that for the contrast. The form, questions and negatives, the rule for how many, live and work with both forms, and no continuous with state verbs are authored from Swan, Practical English Usage.",
};
