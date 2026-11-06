import type { RuleTopic } from "../../schema";

export const questionWords: RuleTopic = {
  slug: "question-words",
  family: "question-forms",
  title: "Question words: what, where, who, how…",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 16,

  explanation: [
    "A question word is a word like <b>what</b>, <b>where</b> or <b>who</b> at the start of a question. We use it to ask for information. The answer is not yes or no: Where do you live? In Rome. What is your name? Ana.",
    "Each question word asks about a different thing. Use <b>what</b> for things: What is this? It's a pen. Use <b>where</b> for places: Where is the station? Use <b>when</b> for time: When is your birthday? In May. Use <b>who</b> for people: Who is that man? He's my teacher. Use <b>why</b> to ask for the reason. The answer often starts with because: Why are you tired? Because I work at night.",
    "Use <b>how</b> to ask about the way we do something, or how a person is: How do you go to work? By bus. How are you? I'm fine, thanks.",
    "Some questions start with two words. Use <b>how old</b> for age: How old is your sister? She's twelve. Use <b>how many</b> with a plural noun, to ask about a number: How many brothers have you got? Remember: plural means two or more. To ask about the time on the clock, we often say <b>what time</b>: What time is the film? At eight o'clock.",
    "The question word comes first. After it, make the question in the same way as a question with no question word: Is she at home? → <b>Where</b> is she? Can you see the sea? → <b>What</b> can you see? Have you got any brothers? → <b>How many</b> brothers have you got?",
    "With am, is and are, put the verb after the question word and before the subject: Where <b>is</b> my phone? Where <b>are</b> you from? We often use short forms: what's = what is, where's = where is, who's = who is.",
    "With other verbs in the present simple, put <b>do</b> or <b>does</b> after the question word, then the subject, then the base form: Where <b>do</b> you live? What <b>does</b> she want? Do not leave out do: Where do you live?, not Where you live? After does, the verb has no -s: Where does he work?, not Where does he works?",
    "Who can also ask about the person who does something: Who lives here? This question has no do. You will learn more about questions like this at a later level.",
  ].join("\n\n"),

  form: [
    "what (things) · where (places) · when (time) · who (people) · why (the reason) · how (the way, how a person is)",
    "how old (age) · how many + plural noun (a number) · what time (the clock)",
    "question word + am/is/are + subject · Where is she?",
    "question word + do/does + subject + base form · Where do you live?",
    "question word + can/have + subject … · What can you see? · How many cats have you got?",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>Where</b> do you live?",
      why: "We use <b>where</b> because we ask about a place. Live is not be, so we put <b>do</b> after the question word.",
    },
    {
      sentence: "<b>What's</b> your name?",
      why: "A name is a thing, so we use <b>what</b>. <b>What's</b> is the short form of what is.",
    },
    {
      sentence: "<b>When</b> is your birthday? It's in June.",
      why: "We use <b>when</b> because we ask about time. With be, is comes after the question word.",
    },
    {
      sentence: "<b>Who</b> is that woman? She's my aunt.",
      why: "We use <b>who</b> because we ask about a person.",
    },
    {
      sentence: "<b>How old</b> is your brother? He's ten.",
      why: "For age, we use <b>how old</b> with be, in the same way as the answer: He is ten.",
    },
    {
      sentence: "<b>How many</b> bedrooms are there in your flat?",
      why: "We use <b>how many</b> because bedrooms is a plural noun and we ask about a number. Then the order is the same as in Are there any bedrooms?",
    },
    {
      sentence: "Where <b>does</b> he <b>work</b>?",
      why: "We use <b>does</b> because the subject, he, is one person. After does, work has no -s.",
    },
    {
      sentence: "<b>Why</b> are you sad? Because my cat is ill.",
      why: "We use <b>why</b> because we ask for the reason. The answer starts with because.",
    },
  ],

  pitfall: {
    wrong: "Where you live?",
    right: "Where <b>do</b> you live?",
    why: "Live is not be, so the question needs <b>do</b> or <b>does</b> after the question word: Where do you live? Where does she live?",
  },

  quiz: [
    {
      kind: "choice",
      stem: "___ is your birthday? It's on 12 May.",
      options: ["Where", "How", "Who", "When"],
      answer: 3,
      feedback:
        "The answer, on 12 May, is a time, so the question uses when: When is your birthday? Where is for places, who is for people, and how is for the way we do something.",
    },
    {
      kind: "choice",
      stem: "Which question is correct?",
      options: ["Where you live?", "Where do you live?", "Where you do live?", "Where does you live?"],
      answer: 1,
      feedback:
        "Live is not be, so we need do after the question word, and then the subject: Where do you live? We cannot leave out do, and do comes before you, not after it. Does is for he, she and it.",
    },
    {
      kind: "gap",
      stem: "___ old is your daughter? She's six.",
      answers: ["How"],
      feedback:
        "For age, we use how old: How old is your daughter? The answer, She's six, gives her age.",
    },
    {
      kind: "gap",
      stem: "___ is that girl? She's my cousin, Emma.",
      answers: ["Who"],
      feedback:
        "The answer tells us who the girl is, so we use who, the question word for people: Who is that girl?",
    },
    {
      kind: "gap",
      stem: "___ brothers and sisters have you got? I've got two sisters and a brother. (Write two words.)",
      answers: ["How many"],
      feedback:
        "We ask about a number, and brothers and sisters is plural, so we use how many: How many brothers and sisters have you got?",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["live?", "does", "Where", "sister", "your"],
      answer: "Where does your sister live?",
      feedback:
        "The question word comes first, then does, then the subject, then the verb: Where does your sister live? Your sister is one person, so it is does, and live has no -s.",
    },
    {
      kind: "mistake",
      tokens: ["What", "does", "she", "wants", "for", "her", "birthday?"],
      wrongIndex: 3,
      correction: "want",
      feedback:
        "After does, the verb has no -s, because the -s is already in does: What does she want for her birthday?",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: questions with a question word and be (Where is …? What is …? How old is …?), and with do and does in the present simple (Where do you live?), are A1 points. When, why, what time and how many with a plural noun are used here only in these same simple patterns. This topic comes after the topics on be, have got, the present simple, there is and can, because it builds each question from the yes/no questions taught there. Who as the subject of another verb (Who lives here?), whose, which and how much are left to later topics; who lives here is named in one line only, so that the rule about do is not stated more strongly than Swan states it.",

  sourceNotes:
    "english_grammar.txt, # Making wh- questions: what for things, why for the reason, when for time, where for the place (the note says 'to task the location'; it means ask) and who for people all agree with Swan. 'How to ask about the method of something' is correct but not complete; this topic adds how for how a person is (How are you?) and how old and how many. The note's example 'What are Barton & Craig like to work for' uses what … like, which is above A1, so it is left out. # There is / There are, ## Question: 'How many bedrooms are there?' is correct and is used here. # Question is mostly B1 and B2 work talk; two of its lines have errors, which this topic does not copy: 'What trail shoes are?' should be What are trail shoes?, and 'What do you think how well am i doing?' should be How well do you think I'm doing? Word order after the question word, do and does with other verbs, no -s after does, and subject questions with who having no do are checked against Swan, Practical English Usage.",
};
