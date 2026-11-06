import type { RuleTopic } from "../../schema";

export const canForAbility: RuleTopic = {
  slug: "can-for-ability",
  family: "modal-ability",
  title: "Can for ability: I can swim",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 11,

  explanation: [
    "We use <b>can</b> to say that a person knows how to do something: I can swim. She can speak three languages. My little brother can read.",
    "After can, use the base form of the verb. Remember: the base form is the verb as you see it in a dictionary, with nothing added. Do not add to, and do not add -s: She can swim, not She can to swim, and not She can swims.",
    "Can is the same with every subject: I can, you can, he can, she can, it can, we can, they can. Do not add -s to can: he can, not he cans.",
    "To say no, use <b>can't</b> or <b>cannot</b>: I can't drive. He cannot drive. Can't is the short form, and we use it most when we speak. We usually write cannot as one word.",
    "To ask a question, put can before the subject: You can swim. → <b>Can</b> you swim? Can she drive? Do not use do or does with can: Can you swim?, not Do you can swim?",
    "In short answers, use can or can't with no other verb: Yes, I can. No, she can't.",
  ].join("\n\n"),

  form: [
    "I/you/he/she/it/we/they can swim",
    "I/you/he/she/it/we/they can't (cannot) swim",
    "Can I/you/he/she/it/we/they swim?",
    "Yes, I can. · No, I can't. · Yes, she can. · No, she can't.",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>can swim</b>.",
      why: "After <b>can</b>, the verb is in the base form: swim, with no to.",
    },
    {
      sentence: "My sister <b>can speak</b> French.",
      why: "My sister is one person (she), but <b>can</b> has no -s, and speak has no -s after can.",
    },
    {
      sentence: "He <b>can't drive</b>.",
      why: "We use <b>can't</b> to say no. It is the short form of cannot. Drive stays in the base form.",
    },
    {
      sentence: "My little brother <b>cannot</b> read.",
      why: "<b>Cannot</b> is the long form of can't. We usually write it as one word.",
    },
    {
      sentence: "<b>Can</b> you play the guitar?",
      why: "In a question, <b>can</b> comes before the subject, you. We do not use do with can.",
    },
    {
      sentence: "Can your dog swim? Yes, it <b>can</b>.",
      why: "In a short answer, we use only <b>can</b>, with no other verb: Yes, it can.",
    },
  ],

  pitfall: {
    wrong: "He can to play the piano.",
    right: "He <b>can play</b> the piano.",
    why: "After <b>can</b>, use the base form with no to: can play. And can never has -s: he can, not he cans.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "My brother ___ very fast.",
      options: ["can runs", "cans run", "can to run", "can run"],
      answer: 3,
      feedback:
        "After can, we use the base form, with no -s and no to: My brother can run very fast. Can is the same for every subject, so it never has -s: not cans.",
    },
    {
      kind: "gap",
      stem: "My son is only two. He ___ read. (can + not)",
      answers: ["can't", "cannot", "can not"],
      feedback:
        "A child of two does not know how to read, so we use can't or cannot: He can't read. Can't and cannot mean the same. We usually write cannot as one word.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["play", "Can", "the", "you", "guitar?"],
      answer: "Can you play the guitar?",
      feedback:
        "In a question, can comes before the subject, and the verb comes after it: Can you play the guitar? When it is not a question, the subject comes first: You can play the guitar.",
    },
    {
      kind: "mistake",
      tokens: ["She", "cans", "speak", "Spanish."],
      wrongIndex: 1,
      correction: "can",
      feedback:
        "Can is the same with every subject, so it has no -s, even with she: She can speak Spanish.",
    },
    {
      kind: "choice",
      stem: "Can your sister drive? No, ___",
      options: ["she doesn't.", "she not can.", "she can't."],
      answer: 2,
      feedback:
        "The question starts with can, so the short answer uses can't: No, she can't. We use doesn't for questions with does. Not goes after can, not before it: she can't, not she not can.",
    },
    {
      kind: "choice",
      stem: "Which question is correct?",
      options: ["Can you swim?", "Do you can swim?", "Can you to swim?"],
      answer: 0,
      feedback:
        "To make a question, we put can before the subject: Can you swim? We do not use do with can, and there is no to after can.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: can and can't for ability, in statements, negatives and questions with short answers, are A1 points. Can has other uses, for example to ask for something (Can I have a coffee?), but this topic is only about ability. It comes after the present simple, because the main mistakes with can come from present simple patterns: the -s for he and she, and do in questions.",

  sourceNotes:
    "english_grammar.txt, # Modal verb, ## Modal verbs 2 says only 'Can: ability, permission'. The ability use is this topic. Permission is left to a later topic. The rest of # Modal verb (must, have to, should, could and past forms) is above A1. The note gives no forms. The base form after can with no to, no -s, cannot written as one word (Swan: normally one word, so can not is also accepted in the quiz), questions without do and short answers are authored from Swan, Practical English Usage.",
};
