import type { RuleTopic } from "../../schema";

export const tooAndEnough: RuleTopic = {
  slug: "too-and-enough",
  title: "Too and enough: more than you want, or the right amount",
  summary: "Say there is a problem with too (It's too hot) and the right amount with enough (He isn't old enough, We've got enough chairs). Learn where each word goes.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 16,

  explanation: [
    "Remember: an adjective is a word that tells us more about a noun, like big, old or cheap. <b>Too</b> and an adjective means more than we want, more than is good, or more than is possible: This coffee is <b>too hot</b>. I can't drink it. These shoes are <b>too small</b> for me.",
    "Too and very are different. <b>Very</b> only makes the word stronger: This bag is <b>very heavy</b>, but I can carry it. <b>Too</b> says that there is a problem: This bag is <b>too heavy</b>. I can't carry it.",
    "Too goes straight before the adjective: too hot, not too much hot. Before a noun, use <b>too much</b> with an uncountable noun and <b>too many</b> with a plural noun. Remember: plural means two or more. There is <b>too much sugar</b> in this tea. There are <b>too many people</b> here.",
    "<b>Enough</b> means as much as we need: the right amount. Enough goes <b>after</b> an adjective: Is the room <b>big enough</b>? He isn't <b>old enough</b> to drive. But enough goes <b>before</b> a noun: We've got <b>enough chairs</b>. I haven't got <b>enough money</b>.",
    "After too and an adjective, and after an adjective and enough, we often use <b>to</b> and the base form: He's <b>too tired to play</b> tennis. She isn't <b>fast enough to win</b> the race. It's <b>too cold to swim</b> today. Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    "Not … enough can often say the same thing as too: The room isn't big enough. The room is too small.",
  ].join("\n\n"),

  form: [
    "too + adjective: too hot · too expensive",
    "too much + uncountable noun · too many + plural noun",
    "adjective + enough: old enough · big enough",
    "enough + noun: enough money · enough chairs",
    "too tired to play · old enough to drive",
    "very = stronger · too = a problem",
  ].join("\n"),

  examples: [
    {
      sentence: "I can't buy this jacket. It's <b>too expensive</b>.",
      why: "The price is more than I can pay, so there is a problem. We use <b>too</b> before the adjective.",
    },
    {
      sentence: "This bag is <b>very</b> heavy, but I can carry it.",
      why: "<b>Very</b> only makes heavy stronger. There is no problem, because I can carry it, so we do not use too.",
    },
    {
      sentence: "There are <b>too many</b> cars in the city centre.",
      why: "Cars is a plural noun, so we use <b>too many</b>, not too much.",
    },
    {
      sentence: "I put <b>too much</b> salt in the soup.",
      why: "Salt is an uncountable noun, so we use <b>too much</b>.",
    },
    {
      sentence: "My son isn't <b>old enough</b> to drive.",
      why: "Old is an adjective, so <b>enough</b> goes after it: old enough, not enough old.",
    },
    {
      sentence: "Have we got <b>enough eggs</b> for the cake?",
      why: "Eggs is a noun, so <b>enough</b> goes before it.",
    },
  ],

  pitfall: {
    wrong: "It's too much hot today.",
    right: "It's <b>too hot</b> today.",
    why: "Hot is an adjective, so <b>too</b> goes straight before it. Too much is for uncountable nouns: too much sugar.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I can't drink this tea. It's ___.",
      options: ["too much hot", "hot enough", "too hot", "enough hot"],
      answer: 2,
      feedback:
        "The tea is so hot that there is a problem: I can't drink it. So we use too, straight before the adjective: It's too hot. Enough goes after an adjective, and hot enough would mean that it is hot in the right way.",
    },
    {
      kind: "choice",
      stem: "This bag is ___ heavy, but I can carry it.",
      options: ["very", "too", "enough"],
      answer: 0,
      feedback:
        "I can carry the bag, so there is no problem. Very only makes heavy stronger: This bag is very heavy, but I can carry it. Too heavy would mean that I can't carry it, and enough goes after an adjective, not before.",
    },
    {
      kind: "gap",
      stem: "You're only twelve. You aren't ___ to watch this film. (old, enough)",
      answers: ["old enough"],
      feedback:
        "Old is an adjective, so enough goes after it: You aren't old enough to watch this film.",
    },
    {
      kind: "gap",
      stem: "There are ___ people on this bus. I can't move! (too + much or many)",
      answers: ["too many"],
      feedback:
        "People is a plural noun, so we use too many: There are too many people on this bus. Too much is for uncountable nouns, like too much sugar.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a sentence.",
      words: ["enough", "drive.", "He", "to", "old", "isn't"],
      answer: "He isn't old enough to drive.",
      feedback:
        "Enough goes after the adjective, old, and then comes to and the base form: He isn't old enough to drive.",
    },
    {
      kind: "mistake",
      tokens: ["There", "is", "too", "many", "milk", "in", "my", "coffee."],
      wrongIndex: 3,
      correction: "much",
      feedback:
        "Milk is an uncountable noun, so we use too much, not too many: There is too much milk in my coffee.",
    },
  ],

  levelRationale:
    "English Grammar Profile: too and an adjective, an adjective and enough, and enough and a noun are A2 points, and so are too much and too many with nouns. To and the base form after them (too tired to play) is shown because it is common and uses the infinitive from the topic before. Too … for someone, and enough after adverbs (fast enough with a verb), are left out to keep the rules short. This topic comes after countable and uncountable nouns, because too much and too many need them.",

  sourceNotes:
    "english_grammar.txt, # Infinitives, ## With too and enough (He's too tired to play tennis. She's not fast enough to win the race.) agrees with Swan, and both sentences are used here in a changed form. The note gives no rules for where too and enough go, so too before an adjective, enough after an adjective and before a noun, too much and too many, and the difference between very and too are authored from Swan, Practical English Usage. A noun and then enough (time enough) is old-fashioned, so it is not taught, and the quiz does not test enough with a noun in a gap.",
};
