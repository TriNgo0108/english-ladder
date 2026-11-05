import type { RuleTopic } from "../../schema";

export const nounsSingularAndPlural: RuleTopic = {
  slug: "nouns-singular-and-plural",
  title: "Nouns: singular and plural",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 2,

  explanation: [
    "A noun is a word for a person, a thing, an animal or a place: teacher, book, cat, city. A noun can be singular or plural. Singular means one: one book. Plural means two or more: two books.",
    "For most nouns, add <b>-s</b> to make the plural: book → books, car → cars, girl → girls.",
    "Most nouns that end in -s, -sh, -ch or -x add <b>-es</b>: bus → buses, dish → dishes, watch → watches, box → boxes. The -es makes one more sound at the end: watch-es.",
    "Some nouns end in -y. When the letter before the y is a, e, o or u, just add -s: day → days, boy → boys, key → keys. When it is a different letter, change the y to <b>-ies</b>: city → cities, baby → babies, country → countries.",
    "Some common nouns are irregular. Irregular means that they do not follow the rule. They do not add -s. They change: man → men, woman → women, child → children, person → people, foot → feet, tooth → teeth. Learn these as new words. Do not add -s to them: children, not childrens.",
    "A plural noun is two or more, so use <b>are</b> with it: The book is new. The books are new. People is plural too: The people are friendly.",
  ].join("\n\n"),

  form: [
    "book → books · car → cars · girl → girls",
    "bus → buses · dish → dishes · watch → watches · box → boxes",
    "city → cities · baby → babies · but day → days · boy → boys",
    "man → men · woman → women · child → children · person → people · foot → feet · tooth → teeth",
  ].join("\n"),

  examples: [
    {
      sentence: "The <b>cars</b> are very old.",
      why: "Car is a normal noun, so we add <b>-s</b> for two or more: cars.",
    },
    {
      sentence: "The <b>buses</b> are late today.",
      why: "Bus ends in -s, so we add <b>-es</b>, not only -s: buses.",
    },
    {
      sentence: "The <b>boxes</b> are heavy.",
      why: "Box ends in -x, so we add <b>-es</b>: boxes, not boxs.",
    },
    {
      sentence: "London and Paris are big <b>cities</b>.",
      why: "City ends in -y, and the letter before the y is t. So the y changes to <b>-ies</b>: cities.",
    },
    {
      sentence: "The <b>days</b> are long in summer.",
      why: "Day ends in -y, but the letter before the y is a. So we just add <b>-s</b>: days, not daies.",
    },
    {
      sentence: "My <b>children</b> are at school.",
      why: "Child is irregular. Its plural is <b>children</b>. We do not say childs.",
    },
    {
      sentence: "Ten <b>people</b> are at the party.",
      why: "The plural of person is <b>people</b>. People is plural, so we use are after it.",
    },
  ],

  pitfall: {
    wrong: "My two childrens are at school.",
    right: "My two <b>children</b> are at school.",
    why: "<b>Children</b> is already plural, so do not add -s to it. It is the same with men, women, people, feet and teeth.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "My ___ are in the car. (box)",
      options: ["boxes", "boxs", "boxies", "box"],
      answer: 0,
      feedback:
        "Box ends in -x, so the plural adds -es: one box, two boxes. Boxs is a common mistake: after -s, -sh, -ch and -x, we add -es. We need the plural here because the verb is are.",
    },
    {
      kind: "gap",
      stem: "Paris and Rome are beautiful ___. (city)",
      answers: ["cities"],
      feedback:
        "Paris and Rome are two cities, so we need the plural. City ends in -y, and the letter before the y is t, so the y changes to -ies: cities.",
    },
    {
      kind: "gap",
      stem: "Monday and Tuesday are ___ of the week. (day)",
      answers: ["days"],
      feedback:
        "We need the plural, because Monday and Tuesday are two days. Day ends in -y, but the letter before the y is a, so we just add -s: days. We do not write daies.",
    },
    {
      kind: "gap",
      stem: "My son is five and my daughter is three. They are my ___. (child)",
      answers: ["children"],
      feedback:
        "A son and a daughter are two children. Child is irregular: the plural is children. We do not say childs or childrens.",
    },
    {
      kind: "mistake",
      tokens: ["The", "womans", "are", "in", "the", "kitchen."],
      wrongIndex: 1,
      correction: "women",
      feedback:
        "Woman is irregular. The plural is women, not womans: The women are in the kitchen. It is the same with man: one man, two men.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: regular plural nouns with -s and -es, the -y to -ies spelling, and the most common irregular plurals (men, women, children, people) are A1 points. Learners need plurals from their first sentences about family and the things around them, so this comes right after be, and it gives the next topics the word noun.",

  sourceNotes:
    "english_grammar.txt, # Nouns, covers only where nouns go in a sentence (subject, object, after a preposition, after be). That agrees with Swan, but it is not about plurals. The note's last point, two objects with the person first, is above A1 and left out. # Countable nouns says only that we do not add -s or -es to uncountable nouns; uncountable nouns are left to a later topic. Plural spelling and the irregular plurals are authored from Swan, Practical English Usage (spelling of plurals; irregular plurals). Left out as more than A1 needs: plurals in -o (potatoes, but photos), -f/-fe to -ves (knife, knives), quiz → quizzes, and -ch said as k (stomachs). That last one is why the explanation says most nouns ending in -ch add -es, not all.",
};
