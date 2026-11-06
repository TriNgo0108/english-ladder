import type { RuleTopic } from "../../schema";

export const yesNoQuestionsAndShortAnswers: RuleTopic = {
  slug: "yes-no-questions-and-short-answers",
  title: "Yes/no questions and short answers",
  summary: "Ask questions you can answer with yes or no, and give short answers like Yes, I do and No, she isn't.",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 17,

  explanation: [
    "A yes/no question is a question that we can answer with yes or no: Are you tired? Yes, I am. Do you like tea? No, I don't. You know these questions from earlier topics. This topic puts them together, so you can choose the right way to start a question.",
    "When the sentence has <b>am</b>, <b>is</b>, <b>are</b> or <b>can</b>, put that word before the subject. Remember: the subject is the person or thing that the sentence is about. She is at home. → <b>Is</b> she at home? She is working. → <b>Is</b> she working? You can swim. → <b>Can</b> you swim?",
    "With <b>have got</b>, put have or has before the subject. Got comes after the subject: They have got a car. → <b>Have</b> they <b>got</b> a car?",
    "With other verbs in the present simple, put <b>do</b> or <b>does</b> before the subject. After it, use the base form of the verb: You live here. → <b>Do</b> you live here? He likes tea. → <b>Does</b> he like tea? Have without got works in this way too: Do you have a car?",
    "Do not use do or does with am, is, are or can: Are you tired?, not Do you are tired? Can you swim?, not Do you can swim? And do not start with are when the verb is not be: Do you like coffee?, not Are you like coffee?",
    "We often answer a yes/no question with a short answer. Say yes or no, then a pronoun, then the same verb as in the question: be, do, can or have. Use the right form for the pronoun. With I, are becomes am: Are you a student? Yes, I <b>am</b>, not Yes, I are. Does she work here? No, she <b>doesn't</b>. Can he drive? Yes, he <b>can</b>. Has she got a dog? No, she <b>hasn't</b>. The short answer stops there. In a short answer for have got, do not use got: Yes, I have.",
    "In the short answer, use a pronoun, not the noun: Is your brother at home? Yes, he is. When the question has you, the answer is about you, so it usually has I: Are you hungry? Yes, I am.",
    "In yes answers, do not use a short form at the end: Yes, I am, not Yes, I'm. Yes, she is, not Yes, she's. In no answers, we usually use a short form: No, I'm not. No, he isn't. No, they don't. No, she can't.",
  ].join("\n\n"),

  form: [
    "Am I …? · Is he/she/it …? · Are you/we/they …?",
    "Can I/you/he/she/it/we/they …?",
    "Have I/you/we/they got …? · Has he/she/it got …?",
    "Do I/you/we/they + base form …? · Does he/she/it + base form …?",
    "Yes, I am. · No, I'm not. · Yes, she is. · No, she isn't.",
    "Yes, they do. · No, they don't. · Yes, he does. · No, he doesn't.",
    "Yes, I can. · No, I can't. · Yes, we have. · No, she hasn't.",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>Is</b> your sister a teacher? Yes, she <b>is</b>.",
      why: "The sentence has is, so <b>is</b> comes before the subject. The short answer uses the pronoun she and is, in full, because it is a yes answer.",
    },
    {
      sentence: "<b>Are</b> you hungry? No, I<b>'m not</b>.",
      why: "The question has you, and the answer is about me, so it uses <b>I am</b>. In no answers, we usually use the short form: I'm not.",
    },
    {
      sentence: "<b>Do</b> you speak English? Yes, I <b>do</b>.",
      why: "Speak is not be or can, so the question starts with <b>do</b>. The short answer uses do too.",
    },
    {
      sentence: "<b>Does</b> he live near here? No, he <b>doesn't</b>.",
      why: "We use <b>does</b> because the subject, he, is one person, and live has no -s after does. The short answer uses <b>doesn't</b>.",
    },
    {
      sentence: "<b>Can</b> your dad cook? Yes, he <b>can</b>.",
      why: "The sentence has can, so <b>can</b> comes before the subject, with no do. The short answer uses can and the pronoun he, not your dad.",
    },
    {
      sentence: "<b>Has</b> she <b>got</b> a bike? No, she <b>hasn't</b>.",
      why: "With have got, <b>has</b> comes before the subject and <b>got</b> after it. In the short answer, we do not use got.",
    },
    {
      sentence: "<b>Do</b> you <b>have</b> a car? Yes, I <b>do</b>.",
      why: "Here have has no got, so it works like other verbs: <b>do</b> in the question and in the short answer.",
    },
  ],

  pitfall: {
    wrong: "Are you like coffee?",
    right: "<b>Do</b> you like coffee?",
    why: "Like is not be, so the question cannot start with are. With verbs like like, live and work, start with <b>do</b> or <b>does</b>.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Do you like football? Yes, ___",
      options: ["I like.", "I am.", "I do."],
      answer: 2,
      feedback:
        "The question starts with do, so the short answer uses do: Yes, I do. Am is for questions with are, like Are you a student? We do not answer with the verb like alone.",
    },
    {
      kind: "choice",
      stem: "Is your brother at home? No, ___",
      options: ["he isn't.", "it isn't.", "he doesn't.", "he not."],
      answer: 0,
      feedback:
        "The question starts with is, so the short answer uses is, with not: No, he isn't. Your brother is a man, so the pronoun is he, not it. Doesn't is for questions with does, and we cannot leave out the verb.",
    },
    {
      kind: "gap",
      stem: "___ your parents speak English? Yes, they do.",
      answers: ["Do"],
      feedback:
        "Speak is not be or can, so the question starts with do. Your parents are two people (they), so it is do, not does. The answer, Yes, they do, uses do too.",
    },
    {
      kind: "gap",
      stem: "Has your brother got a car? No, he ___.",
      answers: ["hasn't", "has not"],
      feedback:
        "The question starts with has, so the short answer uses has, with not: No, he hasn't, or No, he has not. We do not use got in a short answer, and doesn't is for questions with does.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["drive?", "your", "Can", "mother"],
      answer: "Can your mother drive?",
      feedback:
        "The sentence has can, so can comes before the subject, and the verb comes after it: Can your mother drive? We do not use do or does with can.",
    },
    {
      kind: "mistake",
      tokens: ["Are", "you", "a", "teacher?", "Yes,", "I", "do."],
      wrongIndex: 6,
      correction: "am.",
      feedback:
        "The question starts with are, so the short answer uses be. With I, that is am: Yes, I am. Do is for questions that start with do, like Do you teach?",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: yes/no questions and short answers with be, do and does, can and have got are A1 points. Each one is first taught in its own topic (be, order 1; have got, 4; present simple, 8; present continuous, 9; there is, 10; can, 11). This topic puts them side by side and teaches the choice between them, so it comes after all of them. Questions with was and were come in the next topic; past questions with did, and questions with modal verbs other than can, are left to later levels.",

  sourceNotes:
    "New topic: english_grammar.txt has no section on yes/no questions and short answers. # Intonation for question in the past says 'Voice up for asking a yes/no question'. Swan says yes/no questions often go up, but not always; intonation is a B1 topic in this site's plan, so it is left out here. # Indirect and direct questions calls yes/no questions 'closed' questions; indirect questions are above A1. Word order, do and does with other verbs, no do with be and can, short answers with a pronoun, no got in short answers, and no short form at the end of a yes answer are checked against Swan, Practical English Usage, and agree word for word with the topics on be, have got, the present simple, the present continuous, there is and can.",
};
