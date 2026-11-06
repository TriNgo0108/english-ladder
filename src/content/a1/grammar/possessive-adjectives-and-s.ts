import type { RuleTopic } from "../../schema";

export const possessiveAdjectivesAndS: RuleTopic = {
  slug: "possessive-adjectives-and-s",
  title: "Possessives: my, your, his, her and 's",
  summary: "Say who things belong to with my, your, his, her, our, their and 's: Tom's car, my sister's room. Learn its and it's.",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 7,

  explanation: [
    "We use <b>my</b>, <b>your</b>, <b>his</b>, <b>her</b>, <b>its</b>, <b>our</b> and <b>their</b> before a noun to say who has something: I have got a phone. It is <b>my</b> phone. She has got a car. It is <b>her</b> car. We also use them for family and friends: my mother, our teacher.",
    "Each one goes with a pronoun: I → my, you → your, he → his, she → her, it → its, we → our, they → their.",
    "His or her? Look at the person who has the thing, not at the thing. Tom and <b>his</b> sister: Tom is a man, so it is his. Anna and <b>her</b> brother: Anna is a woman, so it is her.",
    "Do not put a, an or the before my, your, his and the others: my car, not the my car.",
    "We can also add <b>'s</b> to a name or a noun to say who has something: Tom's car, my sister's name, the teacher's desk. With people, use 's, not of: Maria's phone, not the phone of Maria.",
    "When a plural noun already ends in -s, add only the sign ': my parents' house (the house of my two parents).",
    "Careful with <b>its</b> and <b>it's</b>. <b>Its</b>, with no ', is like his and her, but for a thing or an animal: The dog is in its bed. <b>It's</b>, with ', is a short form: it's = it is or it has: It's cold. In the same way, 's after a name can be a short form: Tom's here = Tom is here.",
  ].join("\n\n"),

  form: [
    "I → my · you → your · he → his · she → her · it → its · we → our · they → their",
    "name or noun + 's · Tom's car · my sister's room",
    "plural noun ending in -s + ' · my parents' house",
    "its = for a thing or an animal (the dog → its bed) · it's = it is or it has",
  ].join("\n"),

  examples: [
    {
      sentence: "I've got a sister. <b>Her</b> name is Lucy.",
      why: "We use <b>her</b> because the person with the name is my sister, a woman.",
    },
    {
      sentence: "Paul and <b>his</b> mother are at home.",
      why: "We use <b>his</b> because Paul is a man. We look at Paul, not at his mother.",
    },
    {
      sentence: "We've got a flat. <b>Our</b> flat is small.",
      why: "<b>Our</b> goes with we. We have got the flat, so it is our flat.",
    },
    {
      sentence: "This is <b>Sara's</b> bag.",
      why: "We add <b>'s</b> to the name Sara to say that Sara has the bag. We do not say the bag of Sara.",
    },
    {
      sentence: "My <b>parents'</b> car is red.",
      why: "Parents is plural and it already ends in -s, so we add only the sign <b>'</b>: parents'.",
    },
    {
      sentence: "The cat is in <b>its</b> bed.",
      why: "<b>Its</b>, with no ', is for a thing or an animal, like his and her. It's would mean it is.",
    },
    {
      sentence: "<b>Their</b> children are at school.",
      why: "<b>Their</b> goes with they: the children of two or more people.",
    },
  ],

  pitfall: {
    wrong: "The dog is hungry. It's bowl is empty.",
    right: "The dog is hungry. <b>Its</b> bowl is empty.",
    why: "<b>Its</b>, with no ', shows that the bowl is the dog's bowl. <b>It's</b> always means it is or it has. Try it: It is bowl is empty? No. So we write its.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Anna is at the cinema with ___ brother.",
      options: ["his", "she", "its", "her"],
      answer: 3,
      feedback:
        "Anna is a woman, so we use her: Anna is with her brother. We look at the person who has the brother, Anna, not at the brother. She can only be a subject. She cannot come before a noun. Its is for a thing or an animal.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["The car of Peter is new.", "Peter's car is new.", "Peters car is new."],
      answer: 1,
      feedback:
        "With a person, we add 's to the name: Peter's car is new. We do not say the car of Peter. Without the sign ', Peters car is wrong.",
    },
    {
      kind: "gap",
      stem: "Look at that old phone in the shop window. ___ screen is very small. (Use my, your, his, her, its, our or their.)",
      answers: ["Its"],
      feedback:
        "The phone has a screen, and a phone is a thing, so we use its: Its screen is very small. Its has no '. It's means it is or it has.",
    },
    {
      kind: "gap",
      stem: "Lisa is my sister. She has got a red bag. → It is my ___ bag. (sister)",
      answers: ["sister's"],
      feedback:
        "With a person, we add 's to say who has something: my sister's bag. It is one sister, so the ' comes before the s.",
    },
    {
      kind: "mistake",
      tokens: ["Maria", "and", "his", "mother", "are", "here."],
      wrongIndex: 2,
      correction: "her",
      feedback:
        "Maria is a woman, so we use her: Maria and her mother are here. We look at the person who has the mother, Maria. His is for a man.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: the possessive words my, your, his, her, its, our and their before a noun, and 's with names and nouns for people, are A1 points. The plural form with only ' (my parents') is given briefly, because it is the same 's rule with a plural noun. This topic comes after personal pronouns, because each possessive word is taught next to its pronoun.",

  sourceNotes:
    "New topic: english_grammar.txt has no section on my, your, his and the others, or on 's. # Possessive pronouns lists them next to the pronouns mine, hers, ours and theirs, which are a later A1 topic. Its examples 'That's his book' and 'This is our house' agree. Its line 'He/she - his/her - his/hers' is unclear: it should be he → his → his and she → her → hers. 'That car's theirs' uses 's = is, which this topic also explains. Claims checked against Swan, Practical English Usage: his and her follow the person who has the thing, not the thing; no article before my, your and the others; 's is normal with people, not of; only ' after a regular plural (parents'); its and it's.",
};
