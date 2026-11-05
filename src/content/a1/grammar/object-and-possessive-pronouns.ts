import type { RuleTopic } from "../../schema";

export const objectAndPossessivePronouns: RuleTopic = {
  slug: "object-and-possessive-pronouns",
  title: "Object and possessive pronouns: me, him, mine, his",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 19,

  explanation: [
    "Remember: a pronoun is a short word that we use in place of a noun. I, you, he, she, it, we and they are used for the subject, the person or thing that the sentence is about. The subject usually comes before the verb: <b>She</b> likes Tom.",
    "The object is the person or thing that the action goes to. It usually comes after the verb. In She likes Tom, she is the subject and Tom is the object: Tom is the person she likes. When a pronoun is the object, it has a different form: Tom likes <b>her</b>.",
    "These are the object pronouns: I → <b>me</b>, you → <b>you</b>, he → <b>him</b>, she → <b>her</b>, it → <b>it</b>, we → <b>us</b>, they → <b>them</b>. You and it do not change.",
    "Also use these forms after a preposition. Remember: a preposition is a small word that goes before a noun, like with, for, to and at. Come with <b>me</b>. This present is for <b>you</b>. Look at <b>them</b>!",
    "Do not use I, he, she, we or they as the object, or after a preposition: I like him, not I like he. Give it to me, not Give it to I.",
    "You know my, your, his, her, our and their from the topic on possessives. They go before a noun: This is my bag. <b>Mine</b>, <b>yours</b>, <b>his</b>, <b>hers</b>, <b>ours</b> and <b>theirs</b> are possessive pronouns. They also say who has something, but they are used in place of a noun, so no noun comes after them: This bag is <b>mine</b>. (= This bag is my bag.)",
    "Each one goes with a word you know: my → mine, your → yours, his → his, her → hers, our → ours, their → theirs. His is the same word in both places: It's his bag. The bag is his. We do not usually use its in this way.",
    "Do not leave out the noun after my, your and the others: This book is mine, not This book is my. And do not put a noun after mine, yours and the others: This is my book, not This is mine book. Do not write ' in yours, hers, ours or theirs: yours, not your's.",
    "Careful with <b>her</b>. It can be an object pronoun (I know her) or it can go before a noun (her car). <b>Hers</b> never has a noun after it: The car is hers.",
  ].join("\n\n"),

  form: [
    "subject: I · you · he · she · it · we · they",
    "object: me · you · him · her · it · us · them",
    "before a noun: my · your · his · her · our · their",
    "with no noun: mine · yours · his · hers · ours · theirs",
  ].join("\n"),

  examples: [
    {
      sentence: "Can you help <b>me</b>?",
      why: "In help me, <b>me</b> is the object of help: the person that the helping goes to. The object form of I is <b>me</b>.",
    },
    {
      sentence: "I love my grandmother. I visit <b>her</b> every Sunday.",
      why: "My grandmother is a woman, and she is the object of visit, so we use <b>her</b>, not she.",
    },
    {
      sentence: "Where are my keys? I can't find <b>them</b>.",
      why: "My keys are two or more things (they), and they are the object of find: the things I cannot find. So we use <b>them</b>.",
    },
    {
      sentence: "Sit with <b>us</b>!",
      why: "The pronoun comes after the preposition with, so we use the object form of we, <b>us</b>.",
    },
    {
      sentence: "Is this your coat? No, it isn't <b>mine</b>.",
      why: "No noun comes after it, so we use <b>mine</b>, not my. Mine means my coat here.",
    },
    {
      sentence: "Our car is old, but <b>theirs</b> is new.",
      why: "<b>Theirs</b> is used in place of their car, so no noun comes after it.",
    },
    {
      sentence: "That isn't Tom's phone. <b>His</b> is black.",
      why: "<b>His</b> means his phone here. With no noun after it, his is still his: it is the same word.",
    },
  ],

  pitfall: {
    wrong: "This book is my.",
    right: "This book is <b>mine</b>.",
    why: "My must have a noun after it: my book. With no noun after it, use <b>mine</b>: This book is mine.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Where's Anna? I can't see ___.",
      options: ["she", "hers", "her", "his"],
      answer: 2,
      feedback:
        "Anna is a woman, and she is the object of see, so we use her: I can't see her. She is only for the subject. Hers means her thing, like her bag, and his is for a man.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["Give it to I.", "Give it to me.", "Give it to my.", "Give it to he."],
      answer: 1,
      feedback:
        "After a preposition, like to, we use the object form: Give it to me. I and he are forms for the subject, so they cannot go after to. My needs a noun after it.",
    },
    {
      kind: "choice",
      stem: "Is this your umbrella? Yes, it's ___.",
      options: ["mine", "my", "me", "I"],
      answer: 0,
      feedback:
        "No noun comes after the gap, so we use mine (= my umbrella): Yes, it's mine. My must have a noun after it. Me and I are for a person, not for something that a person has.",
    },
    {
      kind: "gap",
      stem: "Ben and Lisa are at the station. Can you meet ___ there? (Use me, you, him, her, it, us or them.)",
      answers: ["them"],
      feedback:
        "Ben and Lisa are two people (they), and they are the object of meet, so we use them: Can you meet them there? They is only for the subject.",
    },
    {
      kind: "gap",
      stem: "Is this Maria's coat? Yes, it's ___. She wears it every day. (Use mine, yours, his, hers, ours or theirs.)",
      answers: ["hers"],
      feedback:
        "The coat is Maria's, and Maria is a woman, so we use hers (= her coat): Yes, it's hers. No noun comes after it, so it is hers, not her.",
    },
    {
      kind: "mistake",
      tokens: ["I", "like", "Sam,", "but", "he", "doesn't", "like", "I."],
      wrongIndex: 7,
      correction: "me.",
      feedback:
        "The last pronoun is the object of like: it is the person he does not like. The object form of I is me: but he doesn't like me.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: the object pronouns me, you, him, her, it, us and them, as the object of a verb and after a preposition, are A1 points. Possessive pronouns are placed at A1 by this site's plan (spec, A1 mapping), not by a checked EGP entry: the EGP may list their wider use at A2. So this topic keeps them to simple sentences with be (It's mine, This bag is mine, Mine is black). It comes after personal pronouns and possessives, because it adds the object form to the first and the no-noun form to the second. Whose and of mine (a friend of mine) are left to later levels.",

  sourceNotes:
    "english_grammar.txt, # Possessive pronouns: 'That's his book = That book is his', 'This is our house / This is ours' and 'That's their car = That car's theirs' agree with Swan. The line 'He/she - his/her - his/hers' is unclear: it should be he → his → his and she → her → hers, as this topic gives it. The note has no lines for I, you or it, and none on object pronouns; my → mine, your → yours, the object forms me, him, her, us and them, and no ' in yours and theirs are authored from Swan, Practical English Usage. Swan notes that its is not normally used as a possessive pronoun; the topic says so.",
};
