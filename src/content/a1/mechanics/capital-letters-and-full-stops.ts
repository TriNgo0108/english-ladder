import type { RuleTopic } from "../../schema";

export const capitalLettersAndFullStops: RuleTopic = {
  slug: "capital-letters-and-full-stops",
  title: "Capital letters and full stops",
  level: "a1",
  category: "mechanics",
  shape: "rule",
  order: 26,

  explanation: [
    "A <b>capital letter</b> is a big letter: A, B, C. A small letter is a, b, c. A <b>full stop</b> is the small dot (.) at the end of a sentence. In American English, it is called a period.",
    "Start every sentence with a capital letter: <b>M</b>y name is Sara. <b>W</b>e are students.",
    "The word <b>I</b> is always a capital letter, also in the middle of a sentence: My friend and I play tennis. Not i.",
    "Names of people and places start with a capital letter: Anna, Carlos, London, Japan, Oxford Street.",
    "Days and months start with a capital letter: Monday, Friday, May, December. But the seasons usually have a small letter: spring, summer, autumn, winter.",
    "Languages and nationality words also start with a capital letter. A nationality word says which country a person or thing is from: She is Italian. I speak English and French. Many languages write these words with a small letter, so be careful: in English, it is English, not english.",
    "Other words in the middle of a sentence have a small letter: I play tennis on Sundays, not I play Tennis.",
    "Put a full stop at the end of a sentence that tells something: I live in Rome. A question ends with a question mark (?): Where do you live? An exclamation mark (!) shows strong feeling: Great! You will learn more about these later.",
  ].join("\n\n"),

  form: [
    "capital letter · the first word of a sentence · My name is Sara.",
    "capital letter · I, in every place · My friend and I …",
    "capital letter · names of people and places · Anna · Paris · Brazil",
    "capital letter · days and months · Monday · May · but spring, summer, autumn, winter",
    "capital letter · languages and nationalities · English · French · She's Italian.",
    "end · . after a sentence that tells something · ? after a question",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>M</b>y sister lives in <b>R</b>ome.",
      why: "My is the first word of the sentence, so it starts with a capital <b>M</b>. Rome is the name of a place, so it has a capital <b>R</b> too.",
    },
    {
      sentence: "On Saturday, my brother and <b>I</b> play football.",
      why: "<b>I</b> is always a capital letter, also in the middle of a sentence. Saturday is a day, so it has a capital S.",
    },
    {
      sentence: "My birthday is in <b>J</b>une.",
      why: "June is a month, so it starts with a capital <b>J</b>.",
    },
    {
      sentence: "We go to the beach in <b>s</b>ummer.",
      why: "Summer is a season. Seasons usually have a small letter, so we write <b>s</b>ummer, not Summer.",
    },
    {
      sentence: "Carlos speaks <b>S</b>panish and <b>E</b>nglish.",
      why: "Spanish and English are languages, so they start with a capital letter. Carlos is a name, so it has one too.",
    },
    {
      sentence: "Our teacher is <b>J</b>apanese.",
      why: "Japanese is a nationality word: it says which country she is from. In English, it starts with a capital <b>J</b>.",
    },
    {
      sentence: "I work in a bank<b>.</b> Where do you work<b>?</b>",
      why: "The first sentence tells something, so it ends with a full stop (<b>.</b>). The second is a question, so it ends with a question mark (<b>?</b>).",
    },
  ],

  pitfall: {
    wrong: "i am from spain and i speak spanish.",
    right: "<b>I</b> am from <b>S</b>pain and <b>I</b> speak <b>S</b>panish.",
    why: "The word <b>I</b> is always a capital letter. Spain is the name of a country, and Spanish is a language, so they start with a capital letter too.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence is written correctly?",
      options: ["Where do you live.", "Where do you live?", "where do you live?"],
      answer: 1,
      feedback:
        "This is a question, so it ends with a question mark (?), not a full stop. It also starts with a capital letter, because Where is the first word.",
    },
    {
      kind: "choice",
      stem: "Which sentence is written correctly?",
      options: [
        "On monday I play tennis.",
        "On Monday i play tennis.",
        "On Monday I play Tennis.",
        "On Monday I play tennis.",
      ],
      answer: 3,
      feedback:
        "Monday is a day, so it has a capital M. I is always a capital letter. Tennis is not a name, a day or a language, so in the middle of a sentence it has a small t.",
    },
    {
      kind: "mistake",
      tokens: ["I", "live", "in", "paris."],
      wrongIndex: 3,
      correction: "Paris.",
      feedback: "Paris is the name of a place, so it starts with a capital letter: I live in Paris.",
    },
    {
      kind: "mistake",
      tokens: ["My", "teacher", "speaks", "english", "and", "French."],
      wrongIndex: 3,
      correction: "English",
      feedback:
        "English is a language, so it starts with a capital letter, the same as French: She speaks English and French. Many languages use a small letter here, but English does not.",
    },
    {
      kind: "gap",
      stem: "One word in this sentence needs a capital letter. Write that word. — We go swimming in summer and on sundays.",
      answers: ["Sundays"],
      feedback:
        "Sundays needs a capital S, because it is a day of the week. Summer is a season, and seasons usually have a small letter, so summer is correct. We is the first word, and it already has a capital letter.",
    },
  ],

  levelRationale:
    "The CEFR's A1 writing descriptors say a learner can write simple phrases and sentences, and fill in a form with their name, nationality and address. For this, they need capital letters and full stops from the start. The English Grammar Profile does not cover writing marks, so the level follows the CEFR descriptors. Days, months and I have already come up in earlier A1 topics.",

  sourceNotes:
    "New topic: english_grammar.txt has a section # Punctuation: commas, colons and semicolons, but it is about those marks, at a higher level, and it does not cover capital letters or the full stop. Every rule here (sentence start, I, names, days and months, languages and nationalities, small letters for seasons, full stop and question mark) checked against Swan, Practical English Usage.",
};
