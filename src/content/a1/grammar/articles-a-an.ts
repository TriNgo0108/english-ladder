import type { RuleTopic } from "../../schema";

export const articlesAAn: RuleTopic = {
  slug: "articles-a-an",
  title: "Articles: a and an",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 5,

  explanation: [
    "<b>A</b> and <b>an</b> are small words that come before a singular noun: a book, an apple. They are called articles. Remember: singular means one. We use a or an to talk about one person or thing: I've got a car. She has got an apple.",
    "We also use a or an to say what a person or thing is, for example for a job: She is a nurse. He is an actor. Rome is a big city. Do not leave it out: She is a nurse, not She is nurse.",
    "Do not use a or an with a plural noun. Remember: plural means two or more. A car, but cars, not a cars: They are students.",
    "A or an? Listen to the first sound of the next word. Use <b>an</b> before a vowel sound. A vowel is one of the letters a, e, i, o and u, and a vowel sound is the sound they usually make at the start of a word: an apple, an egg, an orange, an umbrella. Use <b>a</b> before all other sounds: a book, a car, a house.",
    "Listen to the sound, not the letter. In hour, we do not say the h, so the first sound is a vowel sound: <b>an</b> hour. In university, the u sounds like the word you, so it is not a vowel sound: <b>a</b> university.",
    "Sometimes another word comes between a or an and the noun, for example a word like big, old or new. Then that word tells you which one to use: an apple, but a big apple. A car, but an old car.",
  ].join("\n\n"),

  form: [
    "a + other sounds · a book · a car · a house · a big apple",
    "an + vowel sounds · an apple · an egg · an orange · an umbrella · an old car",
    "the sound, not the letter · an hour · a university",
    "no a/an with plurals · books, not a books",
  ].join("\n"),

  examples: [
    {
      sentence: "I'm <b>a</b> student.",
      why: "Student starts with an s sound, not a vowel sound, so we use <b>a</b>. With a job or role, we need a: not I'm student.",
    },
    {
      sentence: "My brother is <b>an</b> actor.",
      why: "Actor starts with a vowel sound, so we use <b>an</b>, not a.",
    },
    {
      sentence: "It's <b>an</b> old house.",
      why: "The word after an is old, and old starts with a vowel sound. So we use <b>an</b>. The word just after a or an decides.",
    },
    {
      sentence: "It's <b>a</b> big apple.",
      why: "Apple starts with a vowel, but the word just after a is big, and big starts with a b sound. So we use <b>a</b>.",
    },
    {
      sentence: "The film is <b>an</b> hour long.",
      why: "Hour starts with the letter h, but we do not say the h. The first sound is a vowel sound, so we use <b>an</b>.",
    },
    {
      sentence: "My sister is a student at <b>a</b> university in Rome.",
      why: "University starts with the letter u, but it sounds like you. That is not a vowel sound, so we use <b>a</b>.",
    },
    {
      sentence: "They are <b>doctors</b>.",
      why: "Doctors is plural, so there is no a or an: not They are a doctors.",
    },
  ],

  pitfall: {
    wrong: "It's a orange.",
    right: "It's <b>an</b> orange.",
    why: "Orange starts with a vowel sound, so we use <b>an</b>, not a. It is the same with an apple, an egg and an umbrella.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "My mother is ___ engineer.",
      options: ["an", "a", "(no word)"],
      answer: 0,
      feedback:
        "Engineer starts with a vowel sound, so we use an: My mother is an engineer. For a job we need a or an, so we cannot leave it out.",
    },
    {
      kind: "choice",
      stem: "The lesson is ___ hour long.",
      options: ["an", "a"],
      answer: 0,
      feedback:
        "Hour starts with the letter h, but we do not say the h. The first sound is a vowel sound, so we use an: an hour. Listen to the sound, not the letter.",
    },
    {
      kind: "gap",
      stem: "I've got ___ umbrella in my bag. (a or an)",
      answers: ["an"],
      feedback:
        "Umbrella starts with a vowel sound, so we use an: an umbrella.",
    },
    {
      kind: "gap",
      stem: "She is ___ university teacher. (a or an)",
      answers: ["a"],
      feedback:
        "University starts with the letter u, but it sounds like you. That is not a vowel sound, so we use a: a university teacher.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["They are students.", "They are a students.", "They are student."],
      answer: 0,
      feedback:
        "Students is plural, and we do not use a or an with a plural noun: They are students. They is two or more people, so we need the plural students, not student.",
    },
    {
      kind: "mistake",
      tokens: ["He", "is", "a", "old", "friend."],
      wrongIndex: 2,
      correction: "an",
      feedback:
        "The word just after the article is old, and old starts with a vowel sound. So we use an: He is an old friend. It is the next word that decides, not the noun friend.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: a and an with singular nouns, including a or an before a job (She is a nurse), are A1 points. The choice between a and an is part of the same point. The, and nouns with no article, are left to the A2 articles topic in this site's mapping. This topic comes after nouns, because it needs the words singular and plural.",

  sourceNotes:
    "english_grammar.txt, # Article, ## A/An: 'A and An are used when [we] don't know which person or thing is being referred to' and 'to describe someone or something or to say what type of thing it is (Training is a vital part of this project)'. The second agrees with Swan and is taught here simply (She is a nurse, Rome is a big city). The first is about knowing which one, which belongs with the, so here it is put simply as 'one person or thing'. The notes do not give the a/an rule; it is authored from Swan, Practical English Usage (a and an: the sound decides, not the letter: an hour, a university, an old car). The rest of # Article (the general and specific examples about appendices and tumours, ## The, ## Zero article) is above A1 and left to later levels.",
};
