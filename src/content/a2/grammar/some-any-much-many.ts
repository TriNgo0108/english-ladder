import type { RuleTopic } from "../../schema";

export const someAnyMuchMany: RuleTopic = {
  slug: "some-any-much-many",
  title: "Some, any, much, many and a lot of",
  summary: "Choose some, any, much, many or a lot of: some in positive sentences, any in negatives and questions, many with plurals, much with uncountable nouns.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 10,

  explanation: [
    "These words tell us about a number or an amount of something. The word you choose depends on two things: the noun, and the kind of sentence. Remember: a noun is a word for a person, a thing, an animal or a place. Plural means two or more.",
    "Some nouns are <b>countable</b>: we can count them, and they have a plural: one apple, two apples. Other nouns are <b>uncountable</b>: we cannot count them, and they have no plural: water, rice, money, bread. The next topic tells you more about these two kinds of noun.",
    "Use <b>some</b> in positive sentences, with plural nouns and with uncountable nouns: I've got <b>some</b> friends in Rome. There's <b>some</b> milk in the fridge.",
    "Use <b>any</b> in negative sentences and in questions: I haven't got <b>any</b> money. Are there <b>any</b> eggs? Is there <b>any</b> bread? But when we offer something or ask for something, we usually use <b>some</b> in the question: Would you like <b>some</b> tea? Can I have <b>some</b> water, please?",
    "Use <b>many</b> with plural nouns and <b>much</b> with uncountable nouns. We use them most in negative sentences and in questions: There aren't <b>many</b> shops in my village. I don't have <b>much</b> time. Are there <b>many</b> people at the party? Do you have <b>much</b> homework? The next topic also shows how many and how much in questions.",
    "Use <b>a lot of</b> with plural nouns and with uncountable nouns. It is the usual choice in positive sentences: She's got <b>a lot of</b> friends. We drink <b>a lot of</b> water. Much and many are less common in positive sentences, especially when we speak. We often say a lot of money, not much money, in a positive sentence.",
  ].join("\n\n"),

  form: [
    "some + plural or uncountable · positive: I've got some apples. · There's some milk.",
    "any · negatives and questions: I haven't got any money. · Are there any eggs?",
    "some in offers and requests: Would you like some tea? · Can I have some water?",
    "many + plural · much + uncountable · most in negatives and questions",
    "a lot of + plural or uncountable · usual in positive sentences",
  ].join("\n"),

  examples: [
    {
      sentence: "There are <b>some</b> apples on the table.",
      why: "This is a positive sentence, and apples is plural, so we use <b>some</b>.",
    },
    {
      sentence: "We haven't got <b>any</b> bread.",
      why: "This is a negative sentence, with haven't, so we use <b>any</b>. Bread is uncountable, and any is good for that too.",
    },
    {
      sentence: "Would you like <b>some</b> water?",
      why: "This is a question, but it is an offer, so we use <b>some</b>, not any.",
    },
    {
      sentence: "There aren't <b>many</b> students in my class.",
      why: "Students is plural, and the sentence is negative, so <b>many</b> is a good choice.",
    },
    {
      sentence: "I don't have <b>much</b> money this month.",
      why: "Money is uncountable, so we use <b>much</b>, not many.",
    },
    {
      sentence: "My grandmother has got <b>a lot of</b> books.",
      why: "This is a positive sentence, so <b>a lot of</b> is the usual choice. It goes with plural and uncountable nouns.",
    },
  ],

  pitfall: {
    wrong: "She's got many money.",
    right: "She's got <b>a lot of</b> money.",
    why: "Money is uncountable, so we cannot use many with it. In a positive sentence, <b>a lot of</b> is the usual choice, for plural and uncountable nouns.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "There isn't ___ milk in the fridge. Can you buy some?",
      options: ["any", "some", "many", "a"],
      answer: 0,
      feedback:
        "This is a negative sentence, so we use any: There isn't any milk. Some is for positive sentences. Milk is uncountable, so many and a are not possible.",
    },
    {
      kind: "choice",
      stem: "The roads are quiet, and there isn't ___ traffic this morning.",
      options: ["many", "some", "much"],
      answer: 2,
      feedback:
        "Traffic is uncountable, and the sentence is negative, so we use much: there isn't much traffic. Many is only for plural nouns, and some is for positive sentences.",
    },
    {
      kind: "gap",
      stem: "There aren't ___ shops in my village, only a baker's and a café. (much or many)",
      answers: ["many"],
      feedback:
        "Shops is plural, so we use many: There aren't many shops in my village. Much is for uncountable nouns, like money or time.",
    },
    {
      kind: "gap",
      stem: "Excuse me. Can I have ___ water, please? (some or any)",
      answers: ["some"],
      feedback:
        "This is a question, but it is a request: you are asking for something. In a request, we usually use some: Can I have some water, please? Any is for other questions and negatives.",
    },
    {
      kind: "mistake",
      tokens: ["I", "can't", "buy", "it.", "I", "haven't", "got", "some", "money."],
      wrongIndex: 7,
      correction: "any",
      feedback:
        "Haven't makes the sentence negative, so we use any, not some: I haven't got any money.",
    },
    {
      kind: "choice",
      stem: "There are ___ people at the party. It's very busy.",
      options: ["a lot of", "much", "any"],
      answer: 0,
      feedback:
        "This is a positive sentence, so a lot of is the usual choice, and it goes with a plural noun like people. Much is for uncountable nouns, and any is for negatives and questions.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A2: some and any with plural and uncountable nouns, some in offers and requests, much and many in negatives and questions, and a lot of are A2 points. This site's A1 uses some and any only with plural nouns in fixed patterns with there is and there are, and some in Would you like some …? This topic gives the full rule. Countable and uncountable nouns come in the next topic; this one introduces the two words only as far as the choice of quantifier needs them.",

  sourceNotes:
    "english_grammar.txt has no section on some, any, much and many. # Quantities is about numbers in reports (over two-thirds, just under half, the majority of them), which is above A2 and is not used. Its line 'a lot of = a number of' is true only for plural nouns: a number of does not go with uncountable nouns (a lot of money, not a number of money). # Countable nouns says to use 'nothing or some' before uncountable nouns; this topic adds any, much and a lot of. The rules are authored from Swan, Practical English Usage. Swan notes that any is possible in an offer (Would you like any tea?), so the request gap is a request, Can I have ___ water, please?, where any is not natural. Much and many in positive sentences are taught as less common, not wrong, because they are correct in formal English. Choice items do not offer much or many where a lot of or any would also be correct.",
};
