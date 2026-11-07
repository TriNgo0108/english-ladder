import type { RuleTopic } from "../../schema";

export const futureContinuousAndFuturePerfect: RuleTopic = {
  slug: "future-continuous-and-future-perfect",
  family: "future-forms",
  title: "Future continuous and future perfect: I'll be working, I'll have finished",
  summary: "This time tomorrow I'll be flying to Rome. By Friday I'll have finished. Say what will be in progress, or done, at a time in the future.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 8,

  explanation: [
    "The <b>future continuous</b> is <b>will be</b> and the verb with <b>-ing</b>. We use it for an action that will be <b>in progress</b> at a time in the future: it will start before that time and it won't be finished at that time. This time tomorrow, I<b>'ll be flying</b> to Rome. Don't call me at eight. I<b>'ll be having</b> dinner.",
    "Will is the same for every subject, and we often use the short form <b>'ll</b>: I'll be working, she'll be working, they'll be working. To say no, use <b>won't be</b>: I <b>won't be using</b> the car tonight. To ask a question, put will before the subject: <b>Will</b> you <b>be using</b> the car tonight? This question is also a polite way to ask about someone's plans before you ask for something.",
    "We also use the future continuous for something that will happen as a normal part of our plans or our day: I<b>'ll be seeing</b> Ana at work tomorrow, so I can give her the book.",
    "The <b>future perfect</b> is <b>will have</b> and the <b>past participle</b>. Remember: the past participle is the form of a verb that comes after have: seen, gone, finished. We use the future perfect for something that will be <b>finished before</b> a time in the future: <b>By</b> Friday, I<b>'ll have finished</b> the report. By means not later than: maybe I'll finish on Wednesday, maybe on Friday, but not after Friday.",
    "The future perfect often goes with <b>by</b> and a time, or <b>by the time</b> and a clause: By the time you get home, I<b>'ll have cooked</b> dinner. Remember: in a time clause about the future, use a present tense, usually the present simple, not will (order 7): by the time you get home. To say no, use <b>won't have</b>: I <b>won't have finished</b> by six. To ask a question, put will before the subject: <b>Will</b> you <b>have finished</b> by six?",
    "Compare: At six o'clock, I<b>'ll be cooking</b>. (I'll be in the middle of cooking.) By six o'clock, I<b>'ll have cooked</b> dinner. (The cooking will be finished.)",
    "State verbs, like know, like and want, are not usually in a continuous form (order 4), so we use will and the base form with them: This time next year, I<b>'ll know</b> a lot more English, not I'll be knowing.",
  ].join("\n\n"),

  form: [
    "future continuous: will ('ll) be + -ing · won't be + -ing",
    "Will you be using …?",
    "future perfect: will ('ll) have + past participle · won't have + past participle",
    "Will you have finished …?",
    "at six → in progress: I'll be cooking. · by six → finished: I'll have cooked dinner.",
  ].join("\n"),

  examples: [
    {
      sentence: "This time next week, we<b>'ll be lying</b> on a beach in Greece.",
      why: "Lying on the beach will be in progress at that time, so we use <b>'ll be</b> and the -ing form. Lie → lying.",
    },
    {
      sentence: "Don't phone at eight. I<b>'ll be watching</b> the match.",
      why: "At eight, the match will be in progress, so we use the future continuous, <b>'ll be watching</b>.",
    },
    {
      sentence: "<b>Will</b> you <b>be using</b> your laptop this afternoon? I need to send an email.",
      why: "This is a polite way to ask about someone's plans before asking to borrow something. <b>Will</b> comes before the subject, you.",
    },
    {
      sentence: "<b>By</b> Friday, I<b>'ll have finished</b> the report.",
      why: "The report will be finished at some time before Friday, so we use <b>'ll have</b> and the past participle, finished.",
    },
    {
      sentence: "By the time you get home, the children <b>will have gone</b> to bed.",
      why: "The children go to bed before you get home, so we use the future perfect, <b>will have gone</b>. The time clause, by the time you get home, uses the present simple.",
    },
    {
      sentence: "I <b>won't have finished</b> my work by six, so let's meet at seven.",
      why: "To say no, use <b>won't have</b> and the past participle. The work will still not be finished at six.",
    },
  ],

  pitfall: {
    wrong: "By six o'clock, I'll have finish the report.",
    right: "By six o'clock, I'll have <b>finished</b> the report.",
    why: "After will have, use the <b>past participle</b>, not the base form.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Please don't call me at eight tonight. ___ the football match.",
      options: ["I'll have watched", "I watching", "I'll be watching", "I'll watched"],
      answer: 2,
      feedback:
        "At eight o'clock, the match will be in progress, so we use the future continuous, will be and the -ing verb: I'll be watching the football match. I'll have watched means that the watching will be finished. I watching has no be, and I'll watched is not a correct form.",
    },
    {
      kind: "gap",
      stem: "By Friday, I ___ all my exams, so we can celebrate at the weekend. (finish, future perfect)",
      answers: ["will have finished", "'ll have finished", "shall have finished"],
      feedback:
        "The exams will be done before Friday, so we use the future perfect, will have and the past participle: By Friday, I will have finished, or I'll have finished, all my exams. With I and we, shall have finished is also correct in British English.",
    },
    {
      kind: "gap",
      stem: "This time next week, we ___ on a beach in Greece. (lie, future continuous)",
      answers: ["will be lying", "'ll be lying", "shall be lying"],
      feedback:
        "The future continuous is will be and the -ing verb: This time next week, we'll be lying on a beach in Greece. Lie ends in -ie, so the -ing form is lying. With I and we, shall be lying is also correct in British English.",
    },
    {
      kind: "choice",
      stem: "Which sentence means that the work will be finished before 5 pm?",
      options: [
        "At 5 pm, I'll be working.",
        "By 5 pm, I'll have finished the work.",
        "At 5 pm, I'll start the work.",
      ],
      answer: 1,
      feedback:
        "By 5 pm, I'll have finished the work: the future perfect, with by, says that the work will be finished before that time. At 5 pm, I'll be working means that the work will still be in progress, and I'll start the work means that it will begin at 5 pm.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["using", "the", "you", "Will", "car", "be", "tonight?"],
      answer: "Will you be using the car tonight?",
      feedback:
        "In a future continuous question, will comes before the subject, you, and then be and the -ing verb: Will you be using the car tonight?",
    },
    {
      kind: "mistake",
      tokens: ["By", "next", "June,", "I", "will", "have", "live", "here", "for", "ten", "years."],
      wrongIndex: 6,
      correction: "lived",
      feedback:
        "After will have, we need the past participle: By next June, I will have lived here for ten years. Live is regular, so the past participle is lived.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the future continuous for an action in progress at a future time is a B1 point, and the future perfect with by and a time appears from B1 and grows at B2. The spec (section 8) places both at B1, so the future perfect is kept to its basic use, finished before a future time, with by and by the time. This topic builds on A2 will, the family's A2 topic, and on state verbs (order 4) and time clauses (order 7). The gaps name the tense, because with by the time, the future continuous (By the time you read this, I'll be flying home) is also possible, and the gap must have one meaning.",

  sourceNotes:
    "english_grammar.txt, # Future tense, ## Future continuous and ## Future perfect: in progress at a time in the future, something normal or routine, finished at a time in the future, and by with a time agree with Swan. The note also gives the future continuous for two actions at the same time; it is correct, but it is left out to keep the topic short. The note's ## Future simple is taught at A2 in will. The forms, negatives and questions, the polite question Will you be using …?, the at and by contrast, and state verbs with will are authored from Swan, Practical English Usage.",
};
