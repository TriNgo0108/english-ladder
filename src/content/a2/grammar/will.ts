import type { RuleTopic } from "../../schema";

export const will: RuleTopic = {
  slug: "will",
  family: "future-forms",
  title: "Will: decisions, offers, promises and predictions",
  summary: "Use will for decisions you make as you speak, offers, promises and what you think will happen: I'll help you. Learn when going to is better.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 5,

  explanation: [
    "We use <b>will</b> and the base form of a verb to talk about the future. Will is the same for every subject: I will help, she will help, they will help. There is no -s: she will, not she wills. And there is no to after will: I will help, not I will to help. Remember: the base form is the verb as you see it in a dictionary, with nothing added. The subject is the person or thing that the sentence is about.",
    "We often use the short form <b>'ll</b>: I'll, you'll, he'll, she'll, it'll, we'll, they'll. To say no, use <b>won't</b>, the short form of will not: I won't tell anyone.",
    "To ask a question, put will before the subject: <b>Will</b> you <b>be</b> at home tonight? In short answers, use will or won't: Yes, I will. No, I won't. In yes answers, do not use a short form at the end: Yes, I will, not Yes, I'll.",
    "We use will for a <b>decision</b> that we make at the moment we speak, not before. A: There's no milk. B: Oh, I<b>'ll buy</b> some. A: It's cold in here. B: I<b>'ll close</b> the window.",
    "We also use will to <b>offer</b> help and to <b>promise</b>: That bag looks heavy. I<b>'ll carry</b> it for you. I<b>'ll call</b> you tonight, I promise. I <b>won't</b> be late.",
    "We use will to say what we <b>think</b> will happen. This is a prediction. We often use will with I think, I'm sure and probably: I think it<b>'ll be</b> sunny tomorrow. You<b>'ll love</b> this film. She<b>'ll probably</b> be late.",
    "Will or going to? Sometimes both are correct, but there are differences. For a plan that we made before now, we usually use <b>going to</b>: I'm going to visit Rome in May. (I bought the tickets last month.) For a decision at the moment we speak, we usually use <b>will</b>: Oh, the phone's ringing. I'll answer it.",
    "For predictions, we usually use <b>going to</b> when we can see now that something is coming: Look at that dark sky! It's going to rain. When we only give our opinion, both are often correct: I think it'll rain tomorrow, and I think it's going to rain tomorrow.",
  ].join("\n\n"),

  form: [
    "I/you/he/she/it/we/they will ('ll) + base form",
    "I/you/he/she/it/we/they won't (will not) + base form",
    "Will you …? · What will you …?",
    "Yes, I will. · No, I won't.",
    "decision now · offer · promise · prediction (I think …)",
  ].join("\n"),

  examples: [
    {
      sentence: "A: I'm hungry. B: I<b>'ll make</b> you a sandwich.",
      why: "B decides at the moment of speaking, so we use <b>'ll</b> (will). Make is in the base form.",
    },
    {
      sentence: "I<b>'ll help</b> you with your bags.",
      why: "This is an offer, so we use will. After <b>'ll</b>, the verb has no to: help, not to help.",
    },
    {
      sentence: "I <b>won't forget</b> your birthday again. I promise.",
      why: "This is a promise. To say no, we use <b>won't</b>, the short form of will not.",
    },
    {
      sentence: "I think Ana <b>will get</b> the job.",
      why: "This is what the speaker thinks will happen, a prediction. With I think, we often use <b>will</b>. It is will for Ana too, with no -s.",
    },
    {
      sentence: "<b>Will</b> you <b>be</b> at home this evening?",
      why: "In a question, <b>will</b> comes before the subject, you. Be is in the base form.",
    },
    {
      sentence: "We<b>'re going to move</b> to Italy next year. We decided in January.",
      why: "This is a plan made before now, so we usually use <b>going to</b> here, not will.",
    },
  ],

  pitfall: {
    wrong: "She wills call you tomorrow.",
    right: "She <b>will</b> call you tomorrow.",
    why: "Will is the same for every subject. It never takes -s, and the verb after it is in the base form.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "A: This bag is very heavy. B: Wait, ___ you.",
      options: ["I help", "I'll to help", "I'll help", "I helping"],
      answer: 2,
      feedback:
        "B offers help and decides at the moment of speaking, so we use will: I'll help you. There is no to after will. I help is the present simple, for things that are true or that happen again and again, and I helping is not correct.",
    },
    {
      kind: "gap",
      stem: "I promise I ___ anyone your secret. (tell + not, will)",
      answers: ["won't tell", "will not tell", "'ll not tell"],
      feedback:
        "This is a promise, so we use will. To say no, use won't, the short form of will not, and the base form: I won't tell anyone your secret.",
    },
    {
      kind: "gap",
      stem: "I'm sure you ___ your exam. You worked very hard. (pass, will)",
      answers: ["will pass", "'ll pass"],
      feedback:
        "This is what the speaker thinks will happen, so we use will and the base form: I'm sure you will pass, or you'll pass. There is no to after will.",
    },
    {
      kind: "choice",
      stem: "A: It's cold in here. B: I'll close the window. Why does B use will?",
      options: [
        "B decides now, at the moment of speaking.",
        "B made this plan yesterday.",
        "B can see that the window is closing now.",
      ],
      answer: 0,
      feedback:
        "B hears that it is cold and decides at the moment of speaking, so B uses will: I'll close the window. For a plan made before now, we usually use going to, and the window is not closing now.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["be", "When", "home?", "will", "you"],
      answer: "When will you be home?",
      feedback:
        "The question word comes first, then will, then the subject, then the base form: When will you be home?",
    },
    {
      kind: "mistake",
      tokens: ["I", "think", "it", "will", "rains", "tomorrow."],
      wrongIndex: 4,
      correction: "rain",
      feedback:
        "After will, the verb is in the base form, with no -s: I think it will rain tomorrow. Will is the same for every subject, and so is the verb after it.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A2: will and won't with the base form, for decisions at the moment of speaking, offers, promises and predictions, often after I think, are A2 points. This topic comes after going to, so that the two can be compared. The contrast is given with usually and often, because both forms are often possible for predictions. Shall for offers (Shall I help you?), will in first conditional sentences, and the future continuous and future perfect are left to other topics and levels.",

  sourceNotes:
    "english_grammar.txt, # Will and going to and # Future tense, ## Future simple. Will for offers, promises and decisions at the moment of speaking ('spontaneous decision'), and will for 'a simple prediction', agree with Swan. The note's opening line, that will and going to are both used for things 'happening soon', is not used: Swan does not limit will to the near future. The note says will is for a spontaneous decision and going to for something already decided. Swan agrees, but notes that both forms are often possible for predictions, so this topic uses usually and often and does not give a hard rule. Forms, won't, questions, no to and no -s, and short answers are authored from Swan, Practical English Usage. ## Future continuous and ## Future perfect are above A2 and left out.",
};
