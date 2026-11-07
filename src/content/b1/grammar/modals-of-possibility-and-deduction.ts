import type { RuleTopic } from "../../schema";

export const modalsOfPossibilityAndDeduction: RuleTopic = {
  slug: "modals-of-possibility-and-deduction",
  family: "modal-deduction",
  title: "Must, can't and might: She must be tired",
  summary: "You've been working all day, so you must be tired. That can't be Tom: he's in Spain. Guess about now with must, can't, might, may and could.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 11,

  explanation: [
    "We often guess about a situation now from what we know or can see. A guess like this is called a <b>deduction</b>. We use modal verbs to show how sure we are. Remember: a modal verb is a small verb that goes before the base form of another verb and adds a meaning to it.",
    "Use <b>must</b> when you are <b>sure that something is true</b>, because there is a good reason: You've been travelling all day. You <b>must be</b> tired. The lights are on, so they <b>must be</b> at home.",
    "Use <b>can't</b> when you are <b>sure that something is not true</b>: That <b>can't be</b> Tom. He's in Spain this week. You've only just had lunch, so you <b>can't be</b> hungry. <b>Couldn't</b> is also possible: That <b>couldn't be</b> Tom.",
    "The opposite of must here is can't, <b>not mustn't</b>. Mustn't means that something is not allowed, or that it is very important not to do it (A2): You mustn't park here. So we say He <b>can't be</b> at home, not He mustn't be at home. In American English, must not is sometimes used for this meaning, but can't is the form to learn.",
    "Use <b>might</b>, <b>may</b> or <b>could</b> when you think that something is <b>possible</b>, but you are not sure: Where's Sara? She <b>might be</b> in the library. She <b>may be</b> at home. She <b>could be</b> at the gym. In positive sentences, the three have almost the same meaning. May is a little more formal. They are also used for the future: We <b>might go</b> to the beach tomorrow.",
    "To say that it is possible that something is <b>not</b> true, use <b>might not</b> or <b>may not</b>: He <b>might not be</b> at work today. I <b>may not have</b> time to call you. You may also hear mightn't, especially in British English. Do not use couldn't for this: couldn't means that you are sure, like can't.",
    "After these modal verbs, use the base form: She must <b>be</b>, not She must is or She must to be. For something in progress now, use <b>be</b> and the -ing form: He isn't answering his phone. He <b>must be driving</b>. They <b>might be sleeping</b>.",
    "We use <b>can</b> for something that is sometimes true in general: It <b>can be</b> very cold here in winter. But for a guess about one situation now, we don't usually use can: She <b>could be</b> at home, not She can be at home.",
    "In this topic, the deduction is about now or the future. To make a deduction about the past (He must have forgotten), we use must have and a past participle. That is for a later level.",
  ].join("\n\n"),

  form: [
    "must + base form → sure it's true: She must be tired.",
    "can't (or couldn't) + base form → sure it's not true: That can't be Tom. · not: mustn't",
    "might / may / could + base form → possible: She might be at home.",
    "might not / may not + base form → possible that it's not true · not usually: couldn't",
    "modal + be + -ing → in progress now: He must be driving.",
  ].join("\n"),

  examples: [
    {
      sentence: "You've been travelling all day. You <b>must be</b> tired.",
      why: "There is a good reason to be sure, so we use <b>must</b> and the base form, be.",
    },
    {
      sentence: "That <b>can't be</b> Tom. He's in Spain this week.",
      why: "We are sure that it is not true, so we use <b>can't</b>, not mustn't.",
    },
    {
      sentence: "Where's Sara? She <b>might be</b> in the library, or she <b>could be</b> at home.",
      why: "We are not sure, so we use <b>might</b> or <b>could</b>. May is also possible: She may be in the library.",
    },
    {
      sentence: "The phone is ringing, but nobody is answering. They <b>must be</b> out.",
      why: "Nobody answers, so we are almost sure: <b>must be</b>.",
    },
    {
      sentence: "He isn't answering his messages. He <b>might be driving</b>.",
      why: "For something that is possibly in progress now, we use the modal, <b>be</b> and the -ing form.",
    },
    {
      sentence: "I <b>may not</b> finish the report today.",
      why: "It is possible that I won't finish it, so we use <b>may not</b>. Might not is also correct here.",
    },
  ],

  pitfall: {
    wrong: "He mustn't be at home. His car isn't here.",
    right: "He <b>can't</b> be at home. His car isn't here.",
    why: "When you are sure that something is not true, use <b>can't</b>. Mustn't means that something is not allowed.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Anna has just run twenty kilometres in the heat. She ___ be very tired.",
      options: ["can't", "mustn't", "must"],
      answer: 2,
      feedback:
        "There is a very good reason to be sure, so we use must: She must be very tired. Can't means that we are sure it is not true, and mustn't means that something is not allowed.",
    },
    {
      kind: "choice",
      stem: "Ben ___ be at work. I can see him in the garden right now.",
      options: ["can't", "mustn't", "might", "must"],
      answer: 0,
      feedback:
        "I can see Ben in the garden, so I'm sure that he isn't at work: Ben can't be at work. We don't use mustn't for this, because mustn't means that something is not allowed. Might and must don't fit, because we know where he is.",
    },
    {
      kind: "gap",
      stem: "Take an umbrella. It ___ rain later. (it's possible, but I'm not sure)",
      answers: ["might", "may", "could"],
      feedback:
        "For something that is possible, but not sure, we use might, may or could. In positive sentences, they have almost the same meaning: It might rain later. It may rain later. It could rain later.",
    },
    {
      kind: "gap",
      stem: "I'm not sure that Sara is coming tonight. She ___ come, because she's very busy. (it's possible that she won't)",
      answers: ["might not", "may not", "mightn't"],
      feedback:
        "To say that it's possible that something won't happen, we use might not or may not: She might not come. Mightn't is also correct, especially in British English. Couldn't and can't mean that we are sure, and won't means that we are sure about the future.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order. The office lights are still on, so …",
      words: ["working", "be", "She", "late.", "must"],
      answer: "She must be working late.",
      feedback:
        "The subject comes first, then must, then be and the -ing form, for something that is in progress now: She must be working late.",
    },
    {
      kind: "mistake",
      tokens: ["That", "mustn't", "be", "Maria", "at", "the", "door.", "She's", "in", "Japan", "this", "week."],
      wrongIndex: 1,
      correction: "can't",
      feedback:
        "Maria is in Japan, so we are sure that it isn't her at the door: That can't be Maria. Couldn't is also possible. Mustn't means that something is not allowed, so we don't use it for this.",
    },
  ],

  levelRationale:
    "English Grammar Profile: must for being sure that something is true, might, may and could for present and future possibility, and can't for being sure that something is not true are B1 points. The spec (section 8) places modals of possibility and deduction at B1 and makes this the family's first topic. It builds on A2 should and must, which defined the modal verb and taught mustn't for things that are not allowed, so the contrast with mustn't is taught directly. Might, may and could are taught as almost the same in positive sentences, and the gap accepts all three; the negative gap accepts might not, may not and mightn't, and couldn't is taught as sure, like can't, following Swan. Past deduction (must have, can't have) is left to B2, the family's next level.",

  sourceNotes:
    "english_grammar.txt, # Modal verb, ## Modal verbs 2: could for possibility, may for possibility, might for weaker possibility and must for strong certainty agree with Swan. The note says that might is weaker than may; Swan says that the difference is small and that many speakers use them in the same way, so this topic teaches them as almost the same. The note does not give the negative; can't (not mustn't) as the opposite of must, might not and may not, can for general possibility, and the base form and be + -ing after the modal are authored from Swan, Practical English Usage. ## Modal verb 3 and ## Modal verb 4 are about past deduction (must have, may have) and other uses of modals; past deduction is B2 and left out. ## Modal verb 5 (have got, should and must, can and can't) is not about deduction and is taught elsewhere.",
};
