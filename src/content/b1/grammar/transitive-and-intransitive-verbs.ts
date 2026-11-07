import type { RuleTopic } from "../../schema";

export const transitiveAndIntransitiveVerbs: RuleTopic = {
  slug: "transitive-and-intransitive-verbs",
  title: "Transitive and intransitive verbs: We arrived at the station",
  summary: "We arrived at the station, not arrived the station. We discussed it, not discussed about it. Learn which verbs need an object and which can't have one.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 14,

  explanation: [
    "Some verbs need an object. Remember: the object is the person or thing that the action goes to. It usually comes after the verb. A verb that needs an object is called <b>transitive</b>: She <b>bought</b> a new bike. I <b>like</b> this song. We can't stop after the verb: not She bought or I like.",
    "A verb that has <b>no object</b> is called <b>intransitive</b>: The baby is <b>sleeping</b>. Our train <b>arrived</b> late. What <b>happened</b>? Common intransitive verbs are <b>arrive</b>, <b>happen</b>, <b>sleep</b>, <b>die</b>, <b>go</b>, <b>come</b>, <b>laugh</b> and <b>wait</b>.",
    "To add a noun after an intransitive verb, we need a <b>preposition</b>. Remember: a preposition is a small word, like in, on or under, that goes before a noun. We <b>arrived at</b> the station, not We arrived the station. I'm <b>waiting for</b> the bus. She <b>listens to</b> the radio. Don't <b>laugh at</b> me!",
    "Some transitive verbs take the object <b>directly</b>, with no preposition, although other languages often use one. We <b>discussed</b> the plan, not discussed about the plan. She <b>entered</b> the room, not entered in the room. We <b>reached</b> the hotel at nine, not reached to the hotel. Can you <b>describe</b> him? Please <b>answer</b> the question.",
    "With <b>explain</b>, the object is the thing that we explain, and the person comes after <b>to</b>: Can you <b>explain</b> the rule <b>to</b> me? Not Can you explain me the rule?",
    "Many verbs can be <b>both</b> transitive and intransitive. With some, the object of one sentence becomes the subject of the other. Remember: the subject is the person or thing that the sentence is about. I <b>opened</b> the door. The door <b>opened</b>. He <b>broke</b> the glass. The glass <b>broke</b>. Other verbs like this are <b>close</b>, <b>start</b>, <b>stop</b>, <b>change</b> and <b>move</b>. With others, like <b>read</b>, <b>eat</b>, <b>cook</b> and <b>drive</b>, the object can just be left out: I was reading a book. I was reading.",
    "A good learner's dictionary tells you if a verb is transitive or intransitive, often with the letters T and I.",
  ].join("\n\n"),

  form: [
    "transitive: verb + object · She bought a bike. · not: She bought.",
    "intransitive: no object · The train arrived. · + preposition + noun: arrived at the station",
    "no preposition: discuss it · enter the room · reach the hotel · answer the question",
    "explain something to someone · not: explain me",
    "both: I opened the door. The door opened. · I was reading (a book).",
  ].join("\n"),

  examples: [
    {
      sentence: "She <b>bought</b> a new bike.",
      why: "<b>Buy</b> is transitive, so it needs an object: a new bike.",
    },
    {
      sentence: "Our train <b>arrived</b> late.",
      why: "<b>Arrive</b> is intransitive, so it has no object. Late is not an object. It tells us when.",
    },
    {
      sentence: "We <b>arrived at</b> the hotel at nine.",
      why: "To add a place after <b>arrive</b>, we need a preposition: at the hotel. We can also say We reached the hotel, with no preposition.",
    },
    {
      sentence: "We <b>discussed</b> the plan for an hour.",
      why: "<b>Discuss</b> takes its object directly: discussed the plan, not discussed about the plan.",
    },
    {
      sentence: "I <b>opened</b> the window. · The window <b>opened</b>.",
      why: "<b>Open</b> is both. In the first sentence, the window is the object. In the second, it is the subject.",
    },
    {
      sentence: "Can you <b>explain</b> this word <b>to</b> me?",
      why: "The thing that we explain is the object: this word. The person comes after <b>to</b>.",
    },
  ],

  pitfall: {
    wrong: "We need to discuss about the problem.",
    right: "We need to <b>discuss</b> the problem.",
    why: "<b>Discuss</b> is transitive, and it takes its object directly, with no preposition. We can also say talk about the problem.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["She entered the room quietly.", "She entered to the room quietly.", "She entered in the room quietly."],
      answer: 0,
      feedback:
        "Enter is transitive, and it takes its object directly, with no preposition: She entered the room quietly. We can also say She went into the room.",
    },
    {
      kind: "choice",
      stem: "We need to ___ the problem before the meeting.",
      options: ["discuss about", "discuss", "talk", "speak"],
      answer: 1,
      feedback:
        "Discuss takes its object directly: We need to discuss the problem. We don't say discuss about. Talk and speak need about before the problem: talk about the problem.",
    },
    {
      kind: "gap",
      stem: "I love this song! Can we listen ___ it again?",
      answers: ["to"],
      feedback:
        "Listen is intransitive, so before a noun or a pronoun like it we need a preposition: Can we listen to it again? We don't say listen it.",
    },
    {
      kind: "choice",
      stem: "In which sentence does break have no object?",
      options: ["Be careful! You'll break that glass.", "Who broke the window?", "I broke my arm last year.", "The glass fell and broke."],
      answer: 3,
      feedback:
        "In The glass fell and broke, nothing comes after broke, so break has no object here, and it is intransitive. In the other sentences, break has an object: that glass, the window, my arm.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["last", "enjoy", "night?", "Did", "you", "party", "the"],
      answer: "Did you enjoy the party last night?",
      feedback:
        "Enjoy is transitive, so it needs an object after it: Did you enjoy the party last night? We can't say Did you enjoy last night the party.",
    },
    {
      kind: "mistake",
      tokens: ["We", "arrived", "the", "station", "just", "after", "six."],
      wrongIndex: 1,
      correction: "arrived at",
      feedback:
        "Arrive is intransitive, so it can't have an object. To add a place, we need a preposition: We arrived at the station just after six. We reached the station is also correct.",
    },
  ],

  levelRationale:
    "The spec (section 8) places transitive and intransitive verbs at B1. The verbs used here (buy, like, arrive, happen, discuss, enter, reach, listen, explain) are A1 to B1 vocabulary, and the errors taught (arrive the station, discuss about, explain me) are ones that Swan, Practical English Usage, warns about. The topic defines the terms transitive and intransitive for the first time on this site. It comes just before the passive (order 15), which needs it. Verbs that are both transitive and intransitive are given in two groups, as Swan does: verbs like open and break, where the object becomes the subject, and verbs like read and eat, where the object can be left out. Verbs with two objects (give me the book) are not taught here.",

  sourceNotes:
    "english_grammar.txt, # Transitive verb vs intransitive: transitive verbs need an object, intransitive verbs don't, and some verbs can be used with or without an object agree with Swan. The note's examples are not used. The note puts cook in its intransitive list, but cook is also transitive (I cooked dinner), so this topic gives cook as a verb that is both. Prepositions after intransitive verbs, the verbs that take no preposition (discuss, enter, reach, answer), explain + to, the two kinds of verbs that are both, and dictionary marks are authored from Swan, Practical English Usage.",
};
