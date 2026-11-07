import type { RuleTopic } from "../../schema";

export const describingCertaintyInThePast: RuleTopic = {
  slug: "describing-certainty-in-the-past",
  family: "modal-deduction",
  title: "Must have, might have, can't have: guessing about the past",
  summary: "The ground is wet, so it must have rained. She can't have seen us. Show how sure you are about the past with must have, might have and can't have.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 4,

  explanation: [
    "In B1, we used must, might, may, could and can't to guess about now: She must be tired. Remember: a guess like this is called a <b>deduction</b>. To make a deduction about the <b>past</b>, we use a <b>past modal</b>: a modal verb, then <b>have</b>, then the past participle. Remember: a modal verb is a small verb that goes before the base form of another verb and adds a meaning to it, and the past participle is the form of a verb that comes after have: seen, gone, finished. The modal and have don't change with the subject: she must have, they must have.",
    "Use <b>must have</b> when you are <b>sure that something was true</b>, because there is a good reason: The streets are wet. It <b>must have rained</b> in the night. You <b>must have been</b> very tired after the flight.",
    "Use <b>may have</b>, <b>might have</b> or <b>could have</b> when you think that something was <b>possible</b>, but you are not sure: Tom is late. He <b>may have missed</b> the bus. He <b>might have missed</b> it. He <b>could have missed</b> it. The three have almost the same meaning here. Some speakers feel that might have is a little less sure than may have, but the difference is small.",
    "Use <b>can't have</b> or <b>couldn't have</b> when you are <b>sure that something was not true</b>: She <b>can't have seen</b> us. She didn't even look up. They <b>couldn't have</b> walked here: it's twenty kilometres. Both mean the same. As in B1, the opposite of must is can't, so say can't have, <b>not mustn't have</b>.",
    "To say that it is possible that something did <b>not</b> happen, use <b>might not have</b> or <b>may not have</b>: She <b>might not have got</b> my message. You may also hear mightn't have. Don't use couldn't have for this, because couldn't have means that you are sure, like can't have.",
    "In speaking, have is usually short: <b>must've</b>, <b>might've</b>, <b>could've</b>. It can sound like must of, but we never write of: write must have or must've. For something that was in progress, use <b>have been</b> and the -ing form: The lights were on all night. She <b>must have been working</b> late.",
    "Could have has another use too: for something that was possible but did not happen. You <b>could have</b> hurt yourself! (You didn't hurt yourself.) The situation shows which meaning is meant.",
  ].join("\n\n"),

  form: [
    "must have + past participle → sure it was true: It must have rained.",
    "may / might / could have + past participle → possible: He might have missed the bus.",
    "can't / couldn't have + past participle → sure it was not true: She can't have seen us. · not: mustn't have",
    "might not / may not have + past participle → possible that it didn't happen · not: couldn't have",
    "modal + have been + -ing → in progress: She must have been working.",
    "must have → must've · might have → might've · never: must of",
  ].join("\n"),

  examples: [
    {
      sentence: "The streets are wet. It <b>must have rained</b> in the night.",
      why: "The wet streets are a good reason to be sure, so we use <b>must have</b> and the past participle.",
    },
    {
      sentence: "Tom is late. He <b>might have missed</b> the bus.",
      why: "It's possible, but we are not sure, so we use <b>might have</b>. May have and could have are also correct here.",
    },
    {
      sentence: "She <b>can't have seen</b> us. She didn't even look up.",
      why: "We are sure that it is not true, so we use <b>can't have</b>. Couldn't have is also correct, but mustn't have is not.",
    },
    {
      sentence: "I'm not sure Ana knows about the party. She <b>may not have got</b> my message.",
      why: "It's possible that she didn't get it, so we use <b>may not have</b>. Might not have is also correct.",
    },
    {
      sentence: "His eyes were red. He <b>must have been crying</b>.",
      why: "The crying was in progress before we saw him, so we use <b>must have been</b> and the -ing form.",
    },
  ],

  pitfall: {
    wrong: "He mustn't have heard the phone. He was asleep.",
    right: "He <b>can't have</b> heard the phone. He was asleep.",
    why: "When you are sure that something was not true, use <b>can't have</b> or <b>couldn't have</b>, not mustn't have.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "The grass is wet and there are puddles everywhere. It ___ rained in the night.",
      options: ["must have", "can't have", "mustn't have", "must"],
      answer: 0,
      feedback:
        "The wet grass and the puddles are a good reason to be sure, so we use must have and the past participle: It must have rained in the night. Can't have means that we are sure it didn't happen, mustn't have is not used for deductions, and must needs have before a past participle.",
    },
    {
      kind: "choice",
      stem: "Sara ___ the message. Her phone was switched off all day.",
      options: ["must have read", "mustn't have read", "can't have read"],
      answer: 2,
      feedback:
        "Her phone was off all day, so we are sure that she didn't read it: Sara can't have read the message. Couldn't have read is also correct. We don't use mustn't have for this, and must have read means that we are sure she did.",
    },
    {
      kind: "gap",
      stem: "I don't know why Tom is late. He ___ the bus. (miss: it's possible, but I'm not sure)",
      answers: ["might have missed", "may have missed", "could have missed", "might've missed", "may've missed", "could've missed"],
      feedback:
        "For something that was possible, but we are not sure, we use might have, may have or could have and the past participle: He might have missed the bus. The three have almost the same meaning here. In speaking, we often say might've or could've.",
    },
    {
      kind: "gap",
      stem: "I'm not sure that Ana got my message. She ___ it. (read + not: it's possible that she didn't)",
      answers: ["might not have read", "may not have read", "mightn't have read"],
      feedback:
        "To say that it is possible that something didn't happen, we use might not have or may not have and the past participle: She might not have read it. Couldn't have and can't have mean that we are sure, so they don't fit.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order. The office lights were on until midnight, so …",
      words: ["been", "She", "have", "working", "must", "late."],
      answer: "She must have been working late.",
      feedback:
        "The subject comes first, then must have, then been and the -ing form, for something that was in progress: She must have been working late.",
    },
    {
      kind: "mistake",
      tokens: ["He", "mustn't", "have", "seen", "us.", "He", "didn't", "even", "say", "hello."],
      wrongIndex: 1,
      correction: "can't",
      feedback:
        "He didn't even say hello, so we are fairly sure that he didn't see us: He can't have seen us. Couldn't have is also correct, and might not have is correct if you are less sure. Mustn't have is not used for deductions.",
    },
    {
      kind: "mistake",
      tokens: ["The", "lights", "are", "off.", "They", "must", "have", "went", "to", "bed."],
      wrongIndex: 7,
      correction: "gone",
      feedback:
        "After must have, we need the past participle, not the past simple: They must have gone to bed. Go is irregular: go → went → gone.",
    },
  ],

  levelRationale:
    "English Grammar Profile: must have, might have, may have and could have for deductions about the past, and can't have and couldn't have for being sure something was not true, are B2 points. This is the modal-deduction family's B2 topic after B1 modals-of-possibility-and-deduction, and it keeps B1's scale and its rule that the opposite of must is can't, not mustn't. May have, might have and could have are taught as almost the same, and every possibility gap accepts all three and their short forms; can't have and couldn't have are taught as the same, and the mistake items name both. The possibility choice offers no may, might or could option where must is the answer, so only one option is correct. Could have for a chance that did not happen is named, because the next topics use it.",

  sourceNotes:
    "english_grammar.txt, # Describing certainty in the past: must have for fairly sure, could have and may have for a definite possibility, and can't have and couldn't have for impossible agree with Swan. The note says might have is for a possibility that is unlikely; Swan says might have is at most a little less sure than may have, and that the difference is small, so this topic says that some speakers feel might have is a little less sure, and treats the three as almost the same. ## Modal verb 3 and # Can't have and needn't have agree. The first half of # Describing certainty in the past is about ability (could, was able to, could have done) and is taught in the could-was-able-to-and-could-have topic (order 6). Might not have and may not have, mustn't have as a mistake, the short forms and must of, have been + -ing, and could have for a chance that did not happen are authored from Swan, Practical English Usage.",
};
