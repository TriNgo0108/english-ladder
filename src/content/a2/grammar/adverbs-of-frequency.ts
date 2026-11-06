import type { RuleTopic } from "../../schema";

export const adverbsOfFrequency: RuleTopic = {
  slug: "adverbs-of-frequency",
  title: "Adverbs of frequency: always, usually, never",
  summary: "Say how often you do things with always, usually, often, sometimes and never, and put them in the right place: I usually walk. She's never late.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 9,

  explanation: [
    "An <b>adverb of frequency</b> tells us how often something happens. From all the time to not at all: <b>always</b> → <b>usually</b> → <b>often</b> → <b>sometimes</b> → <b>never</b>. I always have breakfast. We sometimes eat out. He never drinks coffee. We often use them with the present simple, for things we do again and again.",
    "These adverbs usually go <b>before the main verb</b>. The main verb is the verb that says what happens, like walk, eat or play: I <b>usually walk</b> to work. She <b>often eats</b> pizza. Not I walk usually to work.",
    "With be, they go <b>after be</b>: She<b>'s always</b> late. We<b>'re never</b> at home on Sundays. Is he often ill?",
    "When there are two verbs, like can and the base form, or don't and the base form, the adverb goes <b>between</b> them: I <b>can never</b> find my keys. She <b>doesn't often</b> cook. Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    "In questions, the adverb goes after the subject: <b>Do</b> you <b>often</b> go to the cinema? We often use <b>ever</b> in questions. It means at any time: <b>Do</b> you <b>ever</b> play tennis? Yes, sometimes. No, never. Remember: the subject is the person or thing that the sentence is about.",
    "Never already means not ever, so do not use not or don't with it: I <b>never</b> eat meat, not I don't never eat meat. To say no with don't, use ever: I don't ever eat meat. Never is more usual.",
    "Usually, often and sometimes can also go at the start or at the end: <b>Sometimes</b> I walk to work. I walk to work <b>sometimes</b>. Always and never usually go in the middle, in the places above: I always walk to work, not Always I walk to work.",
  ].join("\n\n"),

  form: [
    "always → usually → often → sometimes → never",
    "before the main verb: I usually walk to work.",
    "after be: She's always late.",
    "between two verbs: I can never find my keys. · She doesn't often cook.",
    "Do you ever …? · Do you often …?",
    "never = not ever: I never eat meat, not I don't never eat meat",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>always</b> have breakfast at seven.",
      why: "<b>Always</b> goes before the main verb, have.",
    },
    {
      sentence: "My brother is <b>never</b> late.",
      why: "With be, the adverb goes after be: is <b>never</b>, not never is.",
    },
    {
      sentence: "We <b>often</b> go to the beach in summer.",
      why: "<b>Often</b> goes before the main verb, go.",
    },
    {
      sentence: "I can <b>never</b> remember her phone number.",
      why: "There are two verbs, can and remember. The adverb goes between them: can <b>never</b> remember.",
    },
    {
      sentence: "Do you <b>ever</b> cook for your friends?",
      why: "In a question, we often use <b>ever</b>. It goes after the subject, you, and before the main verb, cook.",
    },
    {
      sentence: "<b>Sometimes</b> I take the bus to work.",
      why: "<b>Sometimes</b> can also go at the start. We can say I sometimes take the bus too.",
    },
  ],

  pitfall: {
    wrong: "I go always to work by bus.",
    right: "I <b>always go</b> to work by bus.",
    why: "Adverbs of frequency usually go before the main verb, not after it. With be, the adverb comes after be: I'm always late.",
  },

  quiz: [
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["go", "ever", "Do", "swimming?", "you"],
      answer: "Do you ever go swimming?",
      feedback:
        "Do comes first, then the subject, you, then ever, then the main verb: Do you ever go swimming? Ever goes before the main verb, go.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "I go never to the gym.",
        "I don't never go to the gym.",
        "Never I go to the gym.",
        "I never go to the gym.",
      ],
      answer: 3,
      feedback:
        "Never goes before the main verb, go: I never go to the gym. Never already means not ever, so we do not use don't with it. And never does not go at the start of a sentence like this one.",
    },
    {
      kind: "gap",
      stem: "My brother hates sport, so he ___ football on TV. (watch + never)",
      answers: ["never watches"],
      feedback:
        "Never goes before the main verb. The subject is he, so watch needs -es: he never watches football. We do not say doesn't never watch, because never already means not ever.",
    },
    {
      kind: "gap",
      stem: "Lucy is a great teacher. She ___ kind to her students. (be + always)",
      answers: ["is always", "'s always"],
      feedback:
        "With be, the adverb goes after be: She is always kind, or She's always kind. With other verbs it goes before the verb, but not with be.",
    },
    {
      kind: "mistake",
      tokens: ["I", "ever", "eat", "meat.", "I'm", "a", "vegetarian."],
      wrongIndex: 1,
      correction: "never",
      feedback:
        "A vegetarian does not eat meat, so we need never: I never eat meat. We use ever in questions (Do you ever eat meat?), not in a sentence like this one.",
    },
    {
      kind: "choice",
      stem: "Which word can go at the start of this sentence? ___ I walk to work.",
      options: ["Always", "Never", "Sometimes"],
      answer: 2,
      feedback:
        "Sometimes can go at the start: Sometimes I walk to work. Usually and often can go there too. Always and never usually go before the main verb: I always walk to work. I never walk to work.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A2: always, usually, often, sometimes and never before the main verb, after be and between two verbs, and ever in questions, are A2 points. Learners meet these words at A1, and this site's A1 present simple topic leaves them out so that their position can be taught here. The topic comes after adverbs of manner, so that the two positions can be kept apart: adverbs of manner go after the verb, adverbs of frequency before it.",

  sourceNotes:
    "english_grammar.txt, # Time expressions, ## Frequency adverbs (HOW OFTEN?): before the main verb, after be, and between a modal verb and the main verb agree with Swan, and this topic follows them. The note says sometimes and usually can also go at the start. Swan also gives often, and adds the end position, so this topic says usually, often and sometimes can go at the start or the end. Always and never usually go in the middle; Never at the start with a changed word order (Never have I seen …) is formal and above A2, so it is left out, and always or never at the start of an instruction (Never touch this) is also left out. Ever in questions, never with no not, and between don't and the base form are authored from Swan, Practical English Usage. Hardly ever and rarely are left to later levels. The wordbank uses ever, because often or sometimes in a question can also go at the end. The be + always gap does not accept always is: Swan gives always before be only when be is stressed, which a gap cannot show.",
};
