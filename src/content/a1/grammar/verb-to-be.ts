import type { RuleTopic } from "../../schema";

export const verbToBe: RuleTopic = {
  slug: "verb-to-be",
  title: "The verb be: am, is, are",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 1,

  explanation: [
    "A verb is a word like go, eat or have. <b>Be</b> is a very important verb. We use it all the time. To talk about now, it has three forms: <b>am</b>, <b>is</b> and <b>are</b>.",
    "We use be to give a name or a job: I am Ana. She is a doctor. We also use it to say where someone is, how they feel and how old they are: We are at home. I am happy. He is ten.",
    "The subject is the person or thing that the sentence is about. It usually comes before the verb. The subject tells you which form to use. Use <b>am</b> with I. Use <b>is</b> with he, she and it, and with one person or thing: my sister is, the car is. Use <b>are</b> with we and they, and with two or more people or things: my parents are. With you, always use <b>are</b>, for one person or for many.",
    "When we speak, and when we write messages or emails to friends, we often use short forms: I'm, you're, he's, she's, it's, we're, they're. The sign ' shows that a letter is not there: I'm = I am. The short form and the long form mean the same.",
    "To say that something is not true, put <b>not</b> after am, is or are: I am not, she is not, they are not. The short forms are I'm not, she isn't or she's not, and they aren't or they're not. We do not say amn't. Say I'm not.",
    "To ask a question, put am, is or are before the subject. She is at work. → <b>Is</b> she at work? You are a student. → <b>Are</b> you a student?",
  ].join("\n\n"),

  form: [
    "I am · you/we/they are · he/she/it is",
    "I'm · you're · we're · they're · he's · she's · it's",
    "I'm not · you/we/they aren't or 're not · he/she/it isn't or 's not",
    "Am I …? · Are you/we/they …? · Is he/she/it …?",
  ].join("\n"),

  examples: [
    {
      sentence: "I<b>'m</b> a student.",
      why: "With I, we always use <b>am</b>. Here it is in its short form, <b>'m</b>.",
    },
    {
      sentence: "My sister <b>is</b> a nurse.",
      why: "We use <b>is</b> because the subject, my sister, is one person (she).",
    },
    {
      sentence: "My parents <b>are</b> at home.",
      why: "We use <b>are</b> because the subject, my parents, is two people (they).",
    },
    {
      sentence: "You <b>are</b> right.",
      why: "We use <b>are</b> because the subject is you. With you, it is always are, for one person or for many.",
    },
    {
      sentence: "It <b>isn't</b> cold today.",
      why: "We use <b>is</b> because the subject, it, is one thing. We add <b>not</b> to say no. <b>Isn't</b> is the short form of is not.",
    },
    {
      sentence: "He <b>is</b> twenty.",
      why: "We use <b>is</b> because he is one person. For age, English uses be, not have. We do not say He has twenty.",
    },
    {
      sentence: "<b>Are</b> they from Brazil?",
      why: "<b>Are</b> comes before the subject because this is a question. It is are because the subject is they.",
    },
  ],

  pitfall: {
    wrong: "She very tired.",
    right: "She <b>is</b> very tired.",
    why: "Some languages do not need a verb here, but English always does. Put <b>am</b>, <b>is</b> or <b>are</b> after the subject: She is very tired.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "My brother ___ a doctor.",
      options: ["is", "are", "am", "be"],
      answer: 0,
      feedback:
        "The subject, my brother, is one person (he), so we use is: My brother is a doctor. Are is for you, we, they and for two or more. Am is only for I. We do not say My brother be.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["I am 25 years old.", "I have 25 years.", "I 25 years old."],
      answer: 0,
      feedback:
        "For age, English uses be: I am 25, or I am 25 years old. We do not use have for age. We also cannot leave out the verb, so I 25 years old is wrong.",
    },
    {
      kind: "gap",
      stem: "My parents ___ teachers. They teach children at a school.",
      answers: ["are"],
      feedback:
        "The subject, my parents, is two people (they), so we use are: My parents are teachers. Is is only for one person or thing.",
    },
    {
      kind: "gap",
      stem: "It is hot and sunny today. It ___ cold today. (be + not)",
      answers: ["isn't", "is not", "'s not"],
      feedback:
        "The subject is it, so we use is, and we add not because it is hot, not cold. It isn't cold, It is not cold and It's not cold are all right. They mean the same.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["she", "teacher?", "a", "Is"],
      answer: "Is she a teacher?",
      feedback:
        "In a question, is comes before the subject: Is she a teacher? When it is not a question, the subject comes first: She is a teacher.",
    },
    {
      kind: "mistake",
      tokens: ["He", "are", "my", "best", "friend."],
      wrongIndex: 1,
      correction: "is",
      feedback:
        "He is one person, so we use is: He is my best friend. Are is for you, we and they.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: the present forms of be (am, is, are), in statements, negatives and questions and with short forms, are among its first A1 points. Learners need be in their very first sentences (name, job, age, where they are from), so it comes first in A1.",

  sourceNotes:
    "New topic: english_grammar.txt has no section on be. Its only mention is under # Adjectives, 'After a linking verb', which lists be as a linking verb with the example 'The house is big'. That agrees with this topic. Grammar claims (forms, short forms, no 'amn't', be for age, no dropped verb) checked against Swan, Practical English Usage.",
};
