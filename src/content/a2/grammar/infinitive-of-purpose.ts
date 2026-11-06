import type { RuleTopic } from "../../schema";

export const infinitiveOfPurpose: RuleTopic = {
  slug: "infinitive-of-purpose",
  title: "Infinitive of purpose: to say why",
  summary: "Say why you do something with to and the base form: I went to the shop to buy milk. Learn why for to buy is wrong, and when to use for and a noun.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 15,

  explanation: [
    "To say <b>why</b> we do something, we can use <b>to</b> and the base form of a verb: I went to the shop <b>to buy</b> milk. She is saving money <b>to buy</b> a car. Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    "To and the base form together, like to buy or to see, are called the <b>infinitive</b>. When it tells us why, it is called the infinitive of purpose. Purpose means the reason for doing something.",
    "The infinitive of purpose often answers a question with Why …?: Why did you go to London? <b>To see</b> my friend. In a short answer like this, we can use to and the base form alone.",
    "Do not put for before to: I came here <b>to learn</b> English, not I came here for to learn English. And do not use for with the base form: not I came here for learn English.",
    "We can use <b>for</b> and a noun to say why: I went to the shop <b>for some milk</b>. We went out <b>for dinner</b>. Remember: a noun is a word for a person, a thing, an animal or a place. But when we use a verb, we use to: I went to the shop <b>to buy</b> some milk.",
    "To say what a thing is used for, we can use <b>for</b> and the -ing form of a verb: Scissors are <b>for cutting</b> paper. This cloth is <b>for cleaning</b> glasses. We can also say: We use scissors <b>to cut</b> paper.",
    "In formal English, you will also see <b>in order to</b>. It means the same as to: We are writing <b>in order to ask</b> for your help. When we speak, we usually just say to.",
  ].join("\n\n"),

  form: [
    "verb … + to + base form: I went out to buy bread.",
    "Why …? → To + base form: To see my friend.",
    "not for to + base form · not for + base form",
    "for + noun: I went out for some bread.",
    "a thing is for + -ing: Scissors are for cutting paper.",
    "formal: in order to + base form",
  ].join("\n"),

  examples: [
    {
      sentence: "I went to the shop <b>to buy</b> some bread.",
      why: "<b>To buy</b> tells us why I went to the shop. After to, buy is in the base form.",
    },
    {
      sentence: "She's learning Spanish <b>to get</b> a better job.",
      why: "Getting a better job is the reason she is learning Spanish, so we use <b>to</b> and the base form.",
    },
    {
      sentence: "A: Why did you call Ana? B: <b>To ask</b> her about the party.",
      why: "The answer to a Why question can be just <b>to</b> and the base form.",
    },
    {
      sentence: "We went to the café <b>for</b> a coffee.",
      why: "A coffee is a noun, so here we can use <b>for</b>. With a verb, we say to have a coffee.",
    },
    {
      sentence: "This knife is <b>for cutting</b> bread.",
      why: "This says what a thing is used for, so we use <b>for</b> and the -ing form.",
    },
    {
      sentence: "I got up early <b>to catch</b> the first train.",
      why: "Catching the first train is the reason I got up early, so we use <b>to</b> and the base form.",
    },
  ],

  pitfall: {
    wrong: "I came to England for to study English.",
    right: "I came to England <b>to study</b> English.",
    why: "To say why, use <b>to</b> and the base form. Do not put for before to.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I went to the bank ___ some money.",
      options: ["for to get", "for get", "for getting", "to get"],
      answer: 3,
      feedback:
        "Getting money is the reason I went to the bank, so we use to and the base form: I went to the bank to get some money. We do not use for with a verb to say why a person does something.",
    },
    {
      kind: "gap",
      stem: "Tom is saving money ___ a new bike. (buy)",
      answers: ["to buy", "in order to buy", "so as to buy"],
      feedback:
        "Buying a bike is the reason Tom is saving money, so we use to and the base form: Tom is saving money to buy a new bike. In order to buy is also correct, but it is more formal.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["We went out for dinner.", "We went out for have dinner.", "We went out for to have dinner."],
      answer: 0,
      feedback:
        "Dinner is a noun, so we can use for: We went out for dinner. With the verb have, we use to and no for: We went out to have dinner.",
    },
    {
      kind: "gap",
      stem: "Scissors are for ___ paper. (cut)",
      answers: ["cutting"],
      feedback:
        "This says what a thing is used for, and for comes before the gap, so we use the -ing form: Scissors are for cutting paper. With to, we say: We use scissors to cut paper.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a sentence.",
      words: ["art.", "to", "Paris", "She", "study", "to", "went"],
      answer: "She went to Paris to study art.",
      feedback:
        "First say what she did, She went to Paris, then say why, with to and the base form: to study art.",
    },
    {
      kind: "mistake",
      tokens: ["I", "called", "Sam", "for", "invite", "him", "to", "my", "party."],
      wrongIndex: 3,
      correction: "to",
      feedback:
        "To say why I called Sam, we use to and the base form: I called Sam to invite him to my party. We do not use for with the base form.",
    },
  ],

  levelRationale:
    "English Grammar Profile: to and the base form to say why someone does something is an A2 point, and for and a noun (for dinner) is also early. This topic defines the word infinitive once, because the name of the topic needs it. For and the -ing form for what a thing is used for is taught only as a contrast, because it is the main reason learners say for to. So that, and in order not to, are above A2 and left out. In order to is shown as formal and accepted in the gaps.",

  sourceNotes:
    "english_grammar.txt, # Infinitives, ## To express purpose or reason (He joined the club to get some exercise) and ## Its functional, As an adverb (I went to the shop to buy milk). Both agree with Swan. The note does not give the mistake for to, for and a noun, for and the -ing form, or in order to; these are authored from Swan, Practical English Usage. The note also lists other uses of the infinitive (after adjectives, after superlatives, as a noun); they are left to other topics. The Tom gap also accepts so as to buy, which is correct but formal and not taught here.",
};
