import type { RuleTopic } from "../../schema";

export const haveGot: RuleTopic = {
  slug: "have-got",
  title: "Have got: I've got, she's got",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 4,

  explanation: [
    "We use <b>have got</b> to say what things a person has: I have got a car. We also use it for family, and to say what a person looks like: She has got two sisters. He has got blue eyes.",
    "Use <b>have got</b> with I, you, we and they, and with two or more people or things: my parents have got. Use <b>has got</b> with he, she and it, and with one person or thing: my brother has got. Like be, the subject decides: he is, he has got.",
    "We often use short forms: I've got, you've got, we've got, they've got, he's got, she's got, it's got. Remember: the sign ' shows that letters are not there. Careful: he's can be he is or he has. He's got a dog = he has got a dog. He's a doctor = he is a doctor.",
    "To say no, put <b>not</b> after have or has: I have not got a car. She has not got a car. The short forms are <b>haven't got</b> and <b>hasn't got</b>: I haven't got a car. She hasn't got a car.",
    "To ask a question, put have or has before the subject. Got comes after the subject. You have got a pen. → <b>Have</b> you <b>got</b> a pen? She has got a car. → <b>Has</b> she <b>got</b> a car?",
    "In a short answer, do not use got: Yes, I have. No, I haven't. Yes, she has. No, she hasn't. We do not say Yes, I have got, and we do not say Yes, I've.",
    "You can also say <b>have</b> or <b>has</b> without got: I have a car. She has two sisters. This is also correct, and it means the same. Have got is very common in British English, most of all when we speak. Without got, questions and negatives are different: Do you have a car? You will learn them in the topic on the present simple.",
  ].join("\n\n"),

  form: [
    "I/you/we/they have got ('ve got) · he/she/it has got ('s got)",
    "I/you/we/they haven't got · he/she/it hasn't got",
    "Have I/you/we/they got …? · Has he/she/it got …?",
    "Yes, I have. · No, I haven't. · Yes, she has. · No, she hasn't.",
  ].join("\n"),

  examples: [
    {
      sentence: "I<b>'ve got</b> a new phone.",
      why: "With I, we use <b>have got</b>. Here it is in its short form, <b>'ve got</b>.",
    },
    {
      sentence: "My brother <b>has got</b> a big dog.",
      why: "We use <b>has got</b> because the subject, my brother, is one person (he).",
    },
    {
      sentence: "They<b>'ve got</b> three children.",
      why: "With they, we use <b>have got</b>. <b>'ve got</b> is the short form.",
    },
    {
      sentence: "She <b>hasn't got</b> a car.",
      why: "We use <b>has</b> because the subject is she, and we add not to say no. <b>Hasn't</b> is the short form of has not.",
    },
    {
      sentence: "<b>Have</b> you <b>got</b> a pen?",
      why: "<b>Have</b> comes before the subject because this is a question. <b>Got</b> comes after the subject.",
    },
    {
      sentence: "Has he got a bike? Yes, he <b>has</b>.",
      why: "In a short answer, we use only <b>has</b> or <b>have</b>, without got.",
    },
    {
      sentence: "We <b>have</b> a small house.",
      why: "<b>Have</b> without got is also correct. It means the same as We have got a small house.",
    },
  ],

  pitfall: {
    wrong: "He have got a sister.",
    right: "He <b>has got</b> a sister.",
    why: "With he, she and it, and with one person or thing, use <b>has got</b>. Have got is for I, you, we and they.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "My sister ___ long hair.",
      options: ["have got", "is got", "has got"],
      answer: 2,
      feedback:
        "My sister is one person (she), so we use has got: My sister has got long hair. Have got is for I, you, we and they. We do not say is got. My sister has long hair, without got, is also right.",
    },
    {
      kind: "choice",
      stem: "Have you got a pen? Yes, ___",
      options: ["I have got.", "I've.", "I got.", "I have."],
      answer: 3,
      feedback:
        "In a short answer, we use only have or has, without got: Yes, I have. We cannot use the short form 've at the end, so Yes, I've is wrong. I got is not a short answer to Have you got.",
    },
    {
      kind: "gap",
      stem: "Tom ___ got blue eyes. (have)",
      answers: ["has", "'s"],
      feedback:
        "Tom is one person (he), so we use has: Tom has got blue eyes. The short form Tom's got is also right. Have is for I, you, we and they.",
    },
    {
      kind: "gap",
      stem: "I ___ got a car, but I have got a bike. (have + not)",
      answers: ["haven't", "have not", "'ve not"],
      feedback:
        "With I, we use have, and we add not to say no: I haven't got a car. I have not got and I've not got are also right. Hasn't is only for he, she and it.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["got", "she", "a", "Has", "car?"],
      answer: "Has she got a car?",
      feedback:
        "In a question, has comes before the subject, and got comes after it: Has she got a car? When it is not a question, the subject comes first: She has got a car.",
    },
    {
      kind: "mistake",
      tokens: ["I", "has", "got", "two", "brothers."],
      wrongIndex: 1,
      correction: "have",
      feedback:
        "With I, we use have got, not has got: I have got two brothers, or I've got two brothers. Has got is for he, she and it.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: have got and has got for things we own, family and how people look is an A1 point. The Profile may place some negative and question forms at A2. They are taught here too, because the British Council and EAQUALS Core Inventory puts have got at A1, and learners need to say no and ask questions from the start. It comes after pronouns because the choice between have and has depends on the subject pronoun, in the same way as be.",

  sourceNotes:
    "english_grammar.txt, # Have got: 'We use have got and has got [to] talk about things we own and talk about family or appearance' agrees with Swan. Its first example, 'I have got two brother and a sister', has an error: it should be two brothers. Its example 'Have you got any change...' uses any, which this topic does not teach yet, so it is not used here. # Modal verb 5, ### Have got (possessions and descriptions; contracted forms common) also agrees. From Swan, Practical English Usage (have got): have got is informal and more common in British English; have without got means the same and is correct; short answers use have/has without got; 've cannot end a sentence, so Yes, I've is wrong. The note does not say that he's can mean he is or he has; added.",
};
