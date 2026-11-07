import type { RuleTopic } from "../../schema";

export const shouldAndMust: RuleTopic = {
  slug: "should-and-must",
  family: "modal-obligation",
  title: "Should and must: advice and strong obligation",
  summary: "Give advice with should and say what is very important with must: You should rest. I must go. Learn mustn't for things that are not allowed.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 13,

  explanation: [
    "<b>Should</b> and <b>must</b> are modal verbs, like can. A modal verb is a small verb that goes before the base form of another verb and adds a meaning to it. Remember: the base form is the verb as you see it in a dictionary, with nothing added. Like can, should and must are the same for every subject. There is no -s, and there is no to after them: She should go, not She shoulds go or She should to go.",
    "We use <b>should</b> to give advice: to say that something is a good idea. You look tired. You <b>should go</b> to bed. To say that something is not a good idea, use <b>shouldn't</b>, the short form of should not: You <b>shouldn't eat</b> so much sugar. We often use I think with should: I think you should see a doctor.",
    "We use <b>must</b> to say that something is very important or necessary. It is stronger than should. With should, there is a choice. With must, it is not really a choice: I <b>must call</b> my mum tonight. It's her birthday. You <b>must wear</b> a seat belt in the car.",
    "<b>Mustn't</b>, the short form of must not, means that something is not allowed, or that it is very important not to do it: You <b>mustn't smoke</b> here. You <b>mustn't tell</b> anyone. When we say mustn't, we do not say the first t.",
    "To ask for advice, put should before the subject: <b>Should</b> I <b>take</b> an umbrella? What <b>should</b> I <b>do</b>? In short answers, use should or shouldn't: Yes, you should. No, you shouldn't. Questions with must (Must I …?) are possible, but they are not common and sound formal. We usually ask Do I have to …? The next topic shows have to.",
    "Must has no past form. To talk about the past, use <b>had to</b>: I <b>had to work</b> late yesterday, not I musted work and not I must worked.",
  ].join("\n\n"),

  form: [
    "I/you/he/she/it/we/they should / shouldn't + base form: advice",
    "I/you/he/she/it/we/they must / mustn't + base form",
    "Should I …? · Yes, you should. · No, you shouldn't.",
    "must = very important or necessary · mustn't = not allowed",
    "past of must → had to",
  ].join("\n"),

  examples: [
    {
      sentence: "You look tired. You <b>should go</b> to bed early.",
      why: "This is advice, a good idea, so we use <b>should</b>. After should, go is in the base form, with no to.",
    },
    {
      sentence: "I think you <b>should talk</b> to your teacher.",
      why: "We often give advice with I think and <b>should</b>. It sounds kind, not too strong.",
    },
    {
      sentence: "You <b>shouldn't drink</b> so much coffee.",
      why: "<b>Shouldn't</b> says that something is not a good idea. It is the short form of should not.",
    },
    {
      sentence: "I <b>must remember</b> her birthday this year.",
      why: "The speaker feels that this is very important, so we use <b>must</b>. It is stronger than should.",
    },
    {
      sentence: "You <b>mustn't use</b> your phone in the exam.",
      why: "Using your phone is not allowed, so we use <b>mustn't</b>.",
    },
    {
      sentence: "<b>Should</b> I <b>bring</b> some food to the party?",
      why: "To ask for advice, <b>should</b> comes before the subject, I. Bring is in the base form.",
    },
    {
      sentence: "There were no buses, so I <b>had to walk</b> home.",
      why: "Must has no past form, so for the past we use <b>had to</b>.",
    },
  ],

  pitfall: {
    wrong: "You should to see a doctor.",
    right: "You <b>should see</b> a doctor.",
    why: "Should is a modal verb, like can. After it, use the base form with no to: should see, not should to see.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "You have a bad cold. You ___ stay in bed today.",
      options: ["should", "should to", "shoulds", "must to"],
      answer: 0,
      feedback:
        "This is advice, so we use should, and the base form comes straight after it: You should stay in bed. There is no to after should or must, and should never has -s.",
    },
    {
      kind: "gap",
      stem: "This is a hospital. You ___ here. (smoke + not, must)",
      answers: ["mustn't smoke", "must not smoke"],
      feedback:
        "Smoking is not allowed here, so we use mustn't, the short form of must not, and the base form: You mustn't smoke here.",
    },
    {
      kind: "choice",
      stem: "Which sentence gives advice?",
      options: [
        "You mustn't park here.",
        "You must stop at a red light.",
        "You should try the fish here. It's very good.",
      ],
      answer: 2,
      feedback:
        "Should gives advice: trying the fish is a good idea, but you can choose. Mustn't says that parking here is not allowed, and must says that stopping at a red light is necessary.",
    },
    {
      kind: "gap",
      stem: "My tooth hurt a lot, so I ___ to the dentist yesterday. (go, must: past)",
      answers: ["had to go"],
      feedback:
        "Must has no past form. For the past, we use had to and the base form: I had to go to the dentist yesterday.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["bring", "I", "present?", "Should", "a"],
      answer: "Should I bring a present?",
      feedback:
        "To ask for advice, should comes first, then the subject, I, then the base form: Should I bring a present?",
    },
    {
      kind: "mistake",
      tokens: ["She", "musts", "finish", "her", "homework", "tonight."],
      wrongIndex: 1,
      correction: "must",
      feedback:
        "Must is a modal verb, so it is the same for every subject and never has -s: She must finish her homework tonight.",
    },
  ],

  levelRationale:
    "English Grammar Profile: should for advice, and must and mustn't for obligation and for things that are not allowed, are early modal points, in place by A2. Questions with should and the past had to are A2 points too. This topic comes before have to, so that the next topic can compare mustn't with don't have to. Should have and must for deduction (He must be at home) are left to later levels.",

  sourceNotes:
    "english_grammar.txt, # Modal verb, ## Modal verb (obligation 1) and ## Should and Must. Should for advice, must for strong obligation that often comes from the speaker, and mustn't for something you must not do, agree with Swan. The note's line 'Must is for expressing opinions' is not used, because it is not clear; this topic says the speaker feels it is very important. Ought to and needn't, also in the note, are above A2 and left out. The note's ## Modal verbs 2 'Must: strong certainty' is deduction, above A2, and left to the modal-deduction family. The modal verb definition, no -s and no to, Must I …? being rare and formal, the silent first t in mustn't, and had to as the past of must are authored from Swan, Practical English Usage.",
};
