import type { RuleTopic } from "../../schema";

export const wasWere: RuleTopic = {
  slug: "was-were",
  title: "Was and were: the past of be",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 18,

  explanation: [
    "<b>Was</b> and <b>were</b> are the past of be. We use them to talk about before now, for example yesterday, last night, last week or in 2015: I am at home now. I <b>was</b> at work yesterday.",
    "Use <b>was</b> with I, he, she and it, and with one person or thing: I was tired. My mother was a teacher. The film was very good.",
    "Use <b>were</b> with we and they, and with two or more people or things: We were at the cinema. My friends were here last night.",
    "With you, always use <b>were</b>, for one person or for many: You were right, Tom. We do not say you was. It is the same as now: you are, and in the past, you were.",
    "To say no, put <b>not</b> after was or were. The short forms are <b>wasn't</b> (was not) and <b>weren't</b> (were not): It wasn't cold. They weren't at home.",
    "To ask a question, put was or were before the subject: She was at home. → <b>Was</b> she at home? <b>Were</b> you at school yesterday? In short answers, use was or were: Yes, I was. No, I wasn't. Yes, they were. No, they weren't.",
    "To say when or where your life started, use <b>was born</b> or <b>were born</b>: I was born in 1995. Where were you born? It is in the past, so we do not say I am born in 1995.",
  ].join("\n\n"),

  form: [
    "I/he/she/it was · you/we/they were",
    "I/he/she/it wasn't · you/we/they weren't",
    "Was I/he/she/it …? · Were you/we/they …?",
    "Yes, I was. · No, I wasn't. · Yes, they were. · No, they weren't.",
    "I was born in … · Where were you born?",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>was</b> at home yesterday.",
      why: "Yesterday is before now, so we use the past of be. With I, the past is <b>was</b>.",
    },
    {
      sentence: "My grandparents <b>were</b> farmers.",
      why: "We use <b>were</b> because the subject, my grandparents, is two or more people (they).",
    },
    {
      sentence: "You <b>were</b> late this morning, Sam.",
      why: "The subject is you, so we use <b>were</b>. With you, it is always were, also for one person.",
    },
    {
      sentence: "The film <b>wasn't</b> very good.",
      why: "The film is one thing, so we use <b>was</b>, and we add not to say no. <b>Wasn't</b> is the short form of was not.",
    },
    {
      sentence: "<b>Were</b> they at school last week?",
      why: "In a question, <b>were</b> comes before the subject. It is were because the subject is they.",
    },
    {
      sentence: "Was it cold? Yes, it <b>was</b>.",
      why: "The question starts with was, so the short answer uses <b>was</b>, with the pronoun it.",
    },
    {
      sentence: "She <b>was born</b> in 2001.",
      why: "Her life started in 2001, before now, so we use <b>was born</b>. It is was because she is one person.",
    },
  ],

  pitfall: {
    wrong: "They was at the party.",
    right: "They <b>were</b> at the party.",
    why: "With we, you and they, and with two or more people or things, the past of be is <b>were</b>. Was is for I, he, she and it.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "We ___ at the beach yesterday. It was very hot.",
      options: ["was", "are", "be", "were"],
      answer: 3,
      feedback:
        "Yesterday is before now, so we use the past of be. With we, that is were: We were at the beach yesterday. Was is for I, he, she and it. Are is for now, not for yesterday.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["I am born in 1998.", "I was born in 1998.", "I born in 1998.", "I were born in 1998."],
      answer: 1,
      feedback:
        "1998 is in the past, so we use was born: I was born in 1998. We do not say I am born. We cannot leave out the verb, and with I, the past of be is was, not were.",
    },
    {
      kind: "gap",
      stem: "My keys ___ on the table this morning, but they aren't there now. (be, past)",
      answers: ["were"],
      feedback:
        "This morning is before now, so we use the past of be. My keys are two or more things (they), so it is were: My keys were on the table this morning.",
    },
    {
      kind: "gap",
      stem: "Tom, you ___ very quiet in class today. Are you OK? (be, past)",
      answers: ["were"],
      feedback:
        "The subject is you, so the past of be is were: You were very quiet. With you, it is always were, even when we talk to one person, like Tom. We do not say you was.",
    },
    {
      kind: "gap",
      stem: "Were you at work yesterday? No, I ___. I was ill.",
      answers: ["wasn't", "was not"],
      feedback:
        "The answer is about me, so the subject is I, and the past of be with I is was. It is a no answer, so we add not: No, I wasn't, or No, I was not. Weren't is for you, we and they.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["you", "Where", "born?", "were"],
      answer: "Where were you born?",
      feedback:
        "The question word comes first, then were, then the subject, then born: Where were you born? It is were because the subject is you.",
    },
    {
      kind: "mistake",
      tokens: ["My", "parents", "was", "both", "at", "work", "yesterday."],
      wrongIndex: 2,
      correction: "were",
      feedback:
        "My parents are two people (they), so the past of be is were: My parents were both at work yesterday. Was is for one person or thing.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: was and were, the past of be, in statements, and was born for when and where a life started, are early A1 points. The negatives wasn't and weren't and questions with was and were are kept short here because they follow the same pattern as am, is and are, which learners already know. The past of other verbs (worked, went), there was and there were, and were after if (If I were you) are left to later levels. This topic comes after yes/no questions, so its questions and short answers can use the same pattern.",

  sourceNotes:
    "New topic: english_grammar.txt has no section on was and were. # Tense, ## Past simple says only that it is for something that 'happed at specific in the past' (happened at a specific time in the past). That agrees with Swan, and it is used here for be only. The note's ## Past continuous (was/were + -ing) is above A1 and left out. Forms, you were for one person, wasn't and weren't, questions, short answers and was born are checked against Swan, Practical English Usage. Swan's were after if (If I were you) is correct English but above A1, so it is not taught or used.",
};
