import type { RuleTopic } from "../../schema";

export const prepositionsOfPlace: RuleTopic = {
  slug: "prepositions-of-place",
  family: "prepositions-of-place",
  title: "Prepositions of place: in, on, under, next to",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 14,

  explanation: [
    "A <b>preposition</b> is a small word, like in, on or under, that goes before a noun. In this topic, prepositions tell us where a person or thing is: The cat is <b>on</b> the bed. My keys are <b>in</b> my bag.",
    "<b>In</b> means inside something: in the box, in my bag, in the kitchen. We also use in for towns and countries: in London, in Japan.",
    "<b>On</b> means touching the top of something: on the table, on the floor. We also use on for a wall: There's a picture on the wall.",
    "<b>Under</b> means below something: The cat is under the table.",
    "<b>Next to</b> means at the side of something, very near it: The bank is next to the station. It is two words.",
    "<b>Between</b> is for a person or thing with something on each side: The café is between the bank and the station.",
    "<b>Behind</b> means at the back of something: The garden is behind the house. <b>In front of</b> is the opposite: My car is in front of the house. Before a noun, it is three words: in front of the house, not in front the house.",
    "We often use these prepositions with be or there is: The keys are on the table. There's a bus stop in front of the school.",
  ].join("\n\n"),

  form: [
    "in · on · under · next to · between · behind · in front of",
    "in the box · on the table · on the wall · under the bed",
    "next to the bank · between the bank and the café",
    "behind the house · in front of the house",
  ].join("\n"),

  examples: [
    {
      sentence: "Your keys are <b>in</b> my bag.",
      why: "We use <b>in</b> because the keys are inside the bag.",
    },
    {
      sentence: "The book is <b>on</b> the table.",
      why: "We use <b>on</b> because the book is touching the top of the table.",
    },
    {
      sentence: "There's a clock <b>on</b> the wall.",
      why: "For a wall, we also use <b>on</b>: the clock is touching the wall.",
    },
    {
      sentence: "The cat is <b>under</b> the bed.",
      why: "We use <b>under</b> because the cat is below the bed.",
    },
    {
      sentence: "The chair is <b>next to</b> the window.",
      why: "We use <b>next to</b> because the chair is at the side of the window, very near it.",
    },
    {
      sentence: "The bank is <b>between</b> the café and the cinema.",
      why: "We use <b>between</b> because there is something on each side of the bank: the café and the cinema.",
    },
    {
      sentence: "The garden is <b>behind</b> the house.",
      why: "We use <b>behind</b> because the garden is at the back of the house.",
    },
    {
      sentence: "My car is <b>in front of</b> the house.",
      why: "We use <b>in front of</b>, the opposite of behind. Before a noun, it is three words.",
    },
  ],

  pitfall: {
    wrong: "The cups are in the table.",
    right: "The cups are <b>on</b> the table.",
    why: "<b>In</b> is for inside something. The cups are touching the top of the table, so we use <b>on</b>.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Your phone is ___ the table, next to your keys.",
      options: ["on", "in", "between"],
      answer: 0,
      feedback:
        "The phone is touching the top of the table, so we use on: on the table. In is for inside something, like a bag or a box. Between needs two things, one on each side.",
    },
    {
      kind: "gap",
      stem: "Put the ice cream ___ the freezer, so it stays cold. (Use one word.)",
      answers: ["in", "inside", "into"],
      feedback:
        "The ice cream must go inside the freezer to stay cold, so we use in: Put the ice cream in the freezer. Inside and into are also right here.",
    },
    {
      kind: "gap",
      stem: "There's a photo of my family ___ the wall, above my bed. (Use one word.)",
      answers: ["on"],
      feedback:
        "For a wall, we use on: a photo on the wall. The photo is touching the wall. We do not say in the wall.",
    },
    {
      kind: "choice",
      stem: "My house is in the middle. There's a café on one side and a shop on the other side. My house is ___ the café and the shop.",
      options: ["behind", "under", "between", "in"],
      answer: 2,
      feedback:
        "There is something on each side of my house, so we use between: between the café and the shop. Behind means at the back of something, and under means below it.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "The bus stop is in front the school.",
        "The bus stop is front of the school.",
        "The bus stop is in front of the school.",
      ],
      answer: 2,
      feedback:
        "Before a noun, in front of is three words: The bus stop is in front of the school. We cannot leave out in, and we cannot leave out of.",
    },
    {
      kind: "mistake",
      tokens: ["The", "café", "is", "next", "of", "the", "bank."],
      wrongIndex: 4,
      correction: "to",
      feedback:
        "Next to is always next + to, not next of: The café is next to the bank.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: a small set of common prepositions of place, such as in, on, under and next to, is used at A1. Between, behind and in front of are added to make a set that learners can use to say where things are in a room or a street. They are everyday words that an A1 learner needs, but adding them is my choice, not an EGP level split. Prepositions of time are the next topic.",

  sourceNotes:
    "New topic in the A1 mapping. english_grammar.txt, # Time and place, ## Place gives at for a street number and a fixed place (at our office), next to for beside another place, and on for on the corner of. Next to agrees with Swan. At for places and on the corner of are left out to keep this topic to where things are in a room or a street. The note's first lines say that at, on and next are prepositions: next alone is not a preposition (next to is). # Preposition of movement (into, across, past, over) is above this topic; into is only accepted as a second answer where it fits (Put the ice cream into the freezer). In, on, under, between, behind and in front of, on for a wall, and in for towns and countries are authored from Swan, Practical English Usage.",
};
