import type { RuleTopic } from "../../schema";

export const countableAndUncountableNouns: RuleTopic = {
  slug: "countable-and-uncountable-nouns",
  family: "nouns",
  title: "Countable and uncountable nouns: an apple, some rice",
  summary: "Learn which nouns you can count: an apple, two apples, but rice, water and money. Use a glass of, a piece of, and ask how much or how many.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 11,

  explanation: [
    "Remember: a noun is a word for a person, a thing, an animal or a place. Plural means two or more. A <b>countable</b> noun is a thing that we can count: one apple, two apples, three chairs. It has a singular and a plural. With one, use a or an: <b>an</b> apple, <b>a</b> chair. We cannot use a singular countable noun alone: I've got a car, not I've got car.",
    "An <b>uncountable</b> noun is a thing that we cannot count as one, two, three. Many of them are liquids, like water, milk and oil, or food that we do not count, like rice, sugar and bread. Money, music, weather and homework are uncountable too.",
    "Uncountable nouns have <b>no a or an</b> and <b>no plural</b>: some bread, not a bread or breads. They take a singular verb, like is: The water <b>is</b> cold. Your homework <b>is</b> on the table.",
    "Some nouns are uncountable in English, but countable in other languages. <b>Information</b>, <b>advice</b> and <b>furniture</b> are examples: some information, not an information or informations. Learn these as new words.",
    "To count an uncountable thing, put a countable word before it, with of: <b>a glass of</b> water, <b>a bottle of</b> milk, <b>a cup of</b> tea, <b>a kilo of</b> rice, <b>a loaf of</b> bread, <b>a piece of</b> advice, <b>a piece of</b> furniture. The first word can be plural: two glasses of water, three bottles of milk. The uncountable noun does not change.",
    "To ask about a number, use <b>How many</b> with a plural noun: How many eggs do we need? To ask about an amount, use <b>How much</b> with an uncountable noun: How much milk do we need? The topic before this one shows some, any, much, many and a lot of.",
    "Some nouns can be both. Coffee and tea are uncountable when we talk about the drink: I like coffee. But in a café, a coffee means a cup of coffee: Two coffees, please.",
  ].join("\n\n"),

  form: [
    "countable: an apple · two apples · a chair · three chairs",
    "uncountable: water · rice · bread · money · information · advice · furniture (no a/an, no plural)",
    "a glass of water · a bottle of milk · a cup of tea · a loaf of bread · a piece of advice",
    "How many + plural: How many eggs? · How much + uncountable: How much milk?",
    "uncountable + is: The water is cold.",
  ].join("\n"),

  examples: [
    {
      sentence: "I'd like <b>an apple</b> and <b>two bananas</b>, please.",
      why: "Apple and banana are countable. We use <b>an</b> for one apple, and a plural with -s for two bananas.",
    },
    {
      sentence: "Can you give me <b>some information</b> about the trains?",
      why: "<b>Information</b> is uncountable, so it has no an and no -s. We use some.",
    },
    {
      sentence: "My teacher gave me <b>a piece of advice</b>.",
      why: "Advice is uncountable, so we do not say an advice. To talk about one, we say <b>a piece of</b> advice.",
    },
    {
      sentence: "We need <b>two bottles of</b> water for the trip.",
      why: "Bottle is countable, so it can be plural: <b>two bottles</b>. Water is uncountable, so it does not change.",
    },
    {
      sentence: "<b>How much</b> rice do we need for dinner?",
      why: "Rice is uncountable, so we ask <b>how much</b>, not how many.",
    },
    {
      sentence: "The furniture in this room <b>is</b> new.",
      why: "Furniture is uncountable, so it takes a singular verb: <b>is</b>, not are.",
    },
  ],

  pitfall: {
    wrong: "Can you give me an advice?",
    right: "Can you give me <b>some advice</b>? · Can you give me <b>a piece of advice</b>?",
    why: "Advice is uncountable in English, so it has no a or an and no plural. Use some advice, or a piece of advice for one.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Which noun is uncountable?",
      options: ["car", "chair", "table", "information"],
      answer: 3,
      feedback:
        "Information is uncountable: some information, not an information or informations. Car, chair and table are countable: a car, two cars.",
    },
    {
      kind: "gap",
      stem: "I need ___ information about the English course. (some or an)",
      answers: ["some"],
      feedback:
        "Information is uncountable, so we cannot use an with it: I need some information about the course.",
    },
    {
      kind: "gap",
      stem: "Can I have two ___ of water, please? (glass)",
      answers: ["glasses"],
      feedback:
        "Glass is countable, so for two we need the plural. Glass ends in -s, so we add -es: two glasses of water. Water is uncountable, so it does not change.",
    },
    {
      kind: "mistake",
      tokens: ["We", "bought", "some", "new", "furnitures", "for", "the", "living", "room."],
      wrongIndex: 4,
      correction: "furniture",
      feedback:
        "Furniture is uncountable, so it has no plural: We bought some new furniture. To count it, say a piece of furniture, or name the things: two chairs and a table.",
    },
    {
      kind: "choice",
      stem: "How ___ milk do we need for the cake?",
      options: ["many", "much"],
      answer: 1,
      feedback:
        "Milk is uncountable, so we ask how much: How much milk do we need? How many is for plural nouns, like How many eggs?",
    },
    {
      kind: "choice",
      stem: "You are in a shop. Which sentence is correct?",
      options: ["I'd like a bread, please.", "I'd like two breads, please.", "I'd like a loaf of bread, please."],
      answer: 2,
      feedback:
        "Bread is uncountable, so it has no a and no plural. To count it, we say a loaf of bread: I'd like a loaf of bread, please.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A2: the difference between countable and uncountable nouns, no a or an and no plural with uncountable nouns, how much and how many, and containers and pieces (a glass of, a piece of) are A2 points. This site's A1 noun topic teaches plurals, and its food and ordering topics say that bread, rice, meat and cheese usually have no plural. This topic gives the full rule. It comes after the topic on some, any, much and many, which it points back to, so that each idea is taught in only one place.",

  sourceNotes:
    "english_grammar.txt, # Countable nouns: countable nouns can be one or more, and uncountable nouns take no a, no an, no number and no -s or -es. This agrees with Swan, and the note's examples are used only as models, not copied. The note has typos ('Countable nous', 'uncounted nouns' for uncountable nouns). It says to use 'nothing or some' before uncountable nouns; this topic points to the topic before it for any, much and a lot of. Information, advice and furniture, a singular verb, containers and a piece of, how much and how many, and coffee as a drink and a coffee are authored from Swan, Practical English Usage. Nouns that are often both, like chocolate, paper, time and hair, are left out of the quiz, and only coffee and tea are explained.",
};
