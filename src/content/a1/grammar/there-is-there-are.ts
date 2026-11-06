import type { RuleTopic } from "../../schema";

export const thereIsThereAre: RuleTopic = {
  slug: "there-is-there-are",
  title: "There is and there are",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 10,

  explanation: [
    "We use <b>there is</b> and <b>there are</b> to say that a person or thing is in a place: There is a bank in my street. There are two cafés near the station. We often use them to talk about a place for the first time, for example your town or your home.",
    "Use <b>there is</b> with a singular noun: There is a park. Use <b>there are</b> with a plural noun: There are three parks. Remember: singular means one, and plural means two or more.",
    "The short form of there is is <b>there's</b>: There's a park near my house. We usually write there are in full, with no short form.",
    "With a plural noun, we often use a number or <b>some</b>: There are two cafés. There are some shops near my house.",
    "When you say two or more things together, look at the first noun: There is a table and four chairs in the kitchen. (The first noun, a table, is singular.) There are four chairs and a table.",
    "To say no, use <b>there isn't</b> (there is not) and <b>there aren't</b> (there are not): There isn't a lift in this building. With a plural noun, we usually use <b>any</b> after there aren't: There aren't any shops in my village.",
    "To ask a question, put is or are before there: <b>Is there</b> a bank near here? <b>Are there</b> any shops? With a plural noun, we usually use any in a question. In short answers, say: Yes, there is. No, there isn't. Yes, there are. No, there aren't. In yes answers, do not use a short form at the end: Yes, there is, not Yes, there's.",
    "Do not use have or it has for this. In some languages, the verb for have does this job, but not in English: There is a book on the table, not It has a book on the table, and not Have a book on the table.",
    "After we say there is, we often talk about the same thing again with it: There's a new café in my street. It's very nice.",
  ].join("\n\n"),

  form: [
    "there is (there's) + singular · There's a bank.",
    "there are + plural · There are two banks. · There are some shops.",
    "There isn't a … · There aren't any …",
    "Is there a …? · Are there any …?",
    "Yes, there is. · No, there isn't. · Yes, there are. · No, there aren't.",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>There's</b> a cat in the garden.",
      why: "We use <b>there is</b> because cat is singular: one cat. <b>There's</b> is the short form.",
    },
    {
      sentence: "<b>There are</b> three bedrooms in our flat.",
      why: "We use <b>there are</b> because bedrooms is plural: three bedrooms.",
    },
    {
      sentence: "<b>There isn't</b> a lift in this building.",
      why: "Lift is singular, so we use <b>is</b>, and we add not to say no. <b>Isn't</b> is the short form of is not.",
    },
    {
      sentence: "<b>There aren't any</b> shops in my village.",
      why: "Shops is plural, so we use <b>are</b>, with not to say no. After there aren't, we usually use <b>any</b> with a plural noun.",
    },
    {
      sentence: "<b>Is there</b> a bank near here?",
      why: "In a question, <b>is</b> comes before there. We use is because a bank is singular.",
    },
    {
      sentence: "<b>Are there</b> any eggs in the fridge?",
      why: "In a question, <b>are</b> comes before there, because eggs is plural. With a plural noun in a question, we usually use <b>any</b>.",
    },
    {
      sentence: "<b>There's</b> a table and four chairs in the kitchen.",
      why: "The first noun after there is, a table, is singular, so we use <b>there is</b>. The four chairs come after it.",
    },
  ],

  pitfall: {
    wrong: "It has a park near my house.",
    right: "<b>There is</b> a park near my house.",
    why: "To say that something is in a place, English uses <b>there is</b> or <b>there are</b>, not have or it has: There's a park near my house.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "___ two banks in my street.",
      options: ["It has", "There is", "Have", "There are"],
      answer: 3,
      feedback:
        "Banks is plural (two banks), so we use there are: There are two banks in my street. There is is for one thing. English does not use it has or have to say that something is in a place.",
    },
    {
      kind: "gap",
      stem: "___ a big supermarket near my house. It is open every day. (there + be)",
      answers: ["There is", "There's"],
      feedback:
        "Supermarket is singular (a big supermarket), so we use there is: There is a big supermarket near my house. There's, the short form, is also right. There are is for two or more.",
    },
    {
      kind: "gap",
      stem: "There ___ any chairs in the room, so we sit on the floor. (be + not)",
      answers: ["aren't", "are not"],
      feedback:
        "Chairs is plural, so we use are, and we add not because we sit on the floor: There aren't any chairs, or There are not any chairs. Isn't is for one thing.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["a", "near", "there", "here?", "Is", "bank"],
      answer: "Is there a bank near here?",
      feedback:
        "In a question, is comes before there: Is there a bank near here? When it is not a question, there comes first: There is a bank near here.",
    },
    {
      kind: "mistake",
      tokens: ["There", "is", "three", "books", "on", "the", "table."],
      wrongIndex: 1,
      correction: "are",
      feedback:
        "Books is plural (three books), so we need are: There are three books on the table. There is is for one thing: There is a book on the table.",
    },
    {
      kind: "choice",
      stem: "There's a new café in my street. ___ very nice.",
      options: ["There's", "It's", "Is"],
      answer: 1,
      feedback:
        "We use there's the first time we talk about the café. After that, we talk about the same café with it: It's very nice. We cannot leave out the subject, so Is very nice is wrong.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: there is and there are in statements, negatives and questions are A1 points. Learners need them from the start to talk about their home and their town. Any in questions and negatives is used here only with plural nouns, in fixed patterns (Are there any …? There aren't any …). This topic comes after the topics on singular and plural nouns and on be, because the choice between is and are follows the noun.",

  sourceNotes:
    "english_grammar.txt, # There is / There are: 'to describe, place or exist' agrees with Swan. Its examples have errors, which this topic does not copy: 'next to house' needs my or the; 'some shop' should be some shops (plural after there are); 'dinning room' should be dining room; 'dish washer' is one word, dishwasher; 'any picture' should be any pictures; and 'Is there a dish washer in your home.' is a question, so it needs a question mark. 'How many bedrooms are there?' is correct, but question words are a later A1 topic, so it is left out. Claims checked against Swan, Practical English Usage: there's as the short form, with there are usually written in full; agreement with the first noun (There's a table and four chairs); no short form in short answers; it after a first mention with there. Swan notes that people often say there's with a plural noun in informal speech (There's three books); this topic teaches the written form, There are three books.",
};
