import type { RuleTopic } from "../../schema";

export const articlesTheAndZeroArticle: RuleTopic = {
  slug: "articles-the-and-zero-article",
  family: "articles",
  title: "Articles: the, and no article",
  summary: "Use the when we know which one (the sun, the jacket I bought), and no article for things in general (I like dogs), meals, sports and languages.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 17,

  explanation: [
    "In A1, you learned the articles <b>a</b> and <b>an</b>. We use them before a singular noun, and the sound of the next word decides: a book, an apple, an hour. Remember: singular means one: one book. This topic is about the third article, <b>the</b>, and about times when we use no article at all.",
    "We use <b>the</b> when the listener knows which person or thing we mean. Often we said it before: I bought a shirt and a jacket. <b>The</b> jacket was very cheap. (The jacket that I bought.) Or it is clear which one, because there is only one in the place where we are: Can you close <b>the</b> door, please? We also use the when other words say which one: <b>the</b> man in the blue coat, <b>the</b> book on the table.",
    "We use the for things that there is only one of: <b>the</b> sun, <b>the</b> moon, <b>the</b> sky, <b>the</b> world.",
    "The is the same for singular and plural nouns, and for countable and uncountable nouns: the book, the books, the water. Before a vowel sound, many people say the with a long ee sound, like in see: the apple, the egg. Listen to the sound, not the letter, as with a and an. But we always write the.",
    "We use <b>no article</b> when we talk about things in general, with plural nouns and uncountable nouns: I like <b>dogs</b>. (All dogs, dogs in general.) <b>Water</b> is important. <b>Children</b> love music. When we mean all dogs, we do not say the dogs. Compare: I like dogs. (Dogs in general.) <b>The</b> dogs next door are very noisy. (We know which dogs.)",
    "We usually use no article with meals, sports, languages, days and months: I have <b>breakfast</b> at seven. She plays <b>tennis</b>. He speaks <b>French</b>. See you on <b>Monday</b>. But we usually say play <b>the</b> piano and play <b>the</b> guitar: with musical instruments, we often use the.",
    "Most countries and cities have no article: <b>France</b>, <b>Japan</b>, <b>London</b>. But some countries have the, often because their name has a word like States or Kingdom in it, or because the name is plural: <b>the USA</b>, <b>the UK</b>, <b>the Netherlands</b>, <b>the Philippines</b>.",
    "We usually say go to <b>school</b>, go to <b>work</b> and go to <b>bed</b> with no article, when we go there for the usual reason: to study, to work or to sleep. We also say go <b>home</b> and be at <b>home</b>, with no article and no to before home: go home, not go to home.",
  ].join("\n\n"),

  form: [
    "the + a thing the listener knows: the jacket I bought · the door",
    "the + only one: the sun · the moon · the world",
    "no article + plural or uncountable nouns in general: I like dogs. Water is important.",
    "no article: meals · sports · languages · days · most countries and cities",
    "the: the UK · the USA · the Netherlands · play the piano",
    "go to school · go to work · go to bed · go home",
  ].join("\n"),

  examples: [
    {
      sentence: "I bought a shirt and a jacket. <b>The</b> jacket was very cheap.",
      why: "The first time, we say a jacket. After that, the listener knows which jacket, so we say <b>the</b> jacket.",
    },
    {
      sentence: "<b>The</b> sun is very hot today.",
      why: "There is only one sun, so we use <b>the</b>.",
    },
    {
      sentence: "<b>Cats</b> are clean animals.",
      why: "This is about all cats, cats in general. Cats is a plural noun, so we use no article.",
    },
    {
      sentence: "We have <b>lunch</b> at one o'clock.",
      why: "We usually use no article with meals: have lunch, not have the lunch.",
    },
    {
      sentence: "My cousin lives in <b>the</b> USA, but she was born in <b>Brazil</b>.",
      why: "The USA has the, because of the word States. Most countries, like <b>Brazil</b>, have no article.",
    },
    {
      sentence: "She plays <b>the</b> guitar, and her brother plays <b>football</b>.",
      why: "With musical instruments we often use <b>the</b>, but with sports we use no article.",
    },
  ],

  pitfall: {
    wrong: "The life is beautiful.",
    right: "<b>Life</b> is beautiful.",
    why: "This is about life in general, and life here is an uncountable noun, so we use no article.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I don't eat ___ meat. I'm a vegetarian.",
      options: ["the", "a", "(no word)"],
      answer: 2,
      feedback:
        "A vegetarian does not eat any meat, so this is about meat in general. Meat is uncountable, so we use no article: I don't eat meat. We do not use a with an uncountable noun.",
    },
    {
      kind: "choice",
      stem: "Look at ___ moon! It's so big tonight.",
      options: ["the", "a", "(no word)"],
      answer: 0,
      feedback:
        "There is only one moon, so we use the: Look at the moon! We say the sun and the sky in the same way.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "She speaks the French very well.",
        "She speaks French very well.",
        "She speaks a French very well.",
      ],
      answer: 1,
      feedback:
        "We use no article with languages: She speaks French very well. We do not say the French or a French for the language.",
    },
    {
      kind: "gap",
      stem: "I've got a dog and a cat. ___ dog is called Max. (a, an or the)",
      answers: ["the"],
      feedback:
        "The first time, we say a dog. After that, the listener knows which dog, so we use the: The dog is called Max.",
    },
    {
      kind: "gap",
      stem: "My sister lives in ___ UK, in a small town near Leeds. (a, an or the)",
      answers: ["the"],
      feedback:
        "Most countries have no article, but the UK has the, because its name has the word Kingdom in it: the United Kingdom.",
    },
    {
      kind: "mistake",
      tokens: ["I", "saw", "a", "film", "last", "night.", "A", "film", "was", "great."],
      wrongIndex: 6,
      correction: "The",
      feedback:
        "The first time, we say a film. In the second sentence, the listener knows which film, so we use the: The film was great.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the for things the listener knows and for things there is only one of, and no article with plural and uncountable nouns in general, are A1 to A2 points. No article with meals, sports, languages and most countries is A2. This topic builds on the A1 topic about a and an, and keeps its rule that the sound decides. Go to school and go to bed are shown, but the difference with the school as a building is subtle, so it is left out and not tested. The with rivers, seas and groups of islands, and the with general singular nouns (The tiger is a big cat), are left to later levels.",

  sourceNotes:
    "english_grammar.txt, # Article, ## The ('when we know which person or thing is being referred to') and ## Zero article ('before some places, home, work, college, school', 'when we talk about something in general', 'plural nouns', 'before most countries') agree with Swan, and this topic follows them. The note's examples about appendices and tumours are above A2 and not used. The note's 'if it is too general, we don't need to use the article' is true for plural and uncountable nouns, but not for singular countable nouns (we say a dog, not dog), so this topic gives the rule only for plural and uncountable nouns. The only-one use (the sun), meals, sports, languages, musical instruments, the USA and the UK, go home with no to, and the ee sound of the before a vowel sound are authored from Swan, Practical English Usage. The quiz tests no article only in choice items, with a (no word) option as in the A1 articles topic.",
};
