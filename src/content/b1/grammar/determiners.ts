import type { RuleTopic } from "../../schema";

export const determiners: RuleTopic = {
  slug: "determiners",
  family: "determiners",
  title: "Determiners: each, every, both, neither, a few",
  summary: "Every room, both hands, neither answer, a few friends, no milk. Choose the word by how many there are, by the noun, and by what you want to say.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 20,

  explanation: [
    "A <b>determiner</b> is a word before a noun that tells us which one, or how many or how much. You already know this, that, these and those (A1), and some, any, much, many and a lot of (A2). This topic adds more. Remember: a noun is a word for a person, a thing, an animal or a place.",
    "<b>Every</b> and <b>each</b> go with a singular noun and a singular verb: <b>Every</b> room <b>has</b> a TV. <b>Each</b> student <b>gets</b> a book. Every is for all of a group together, and each is for the people or things one by one. For two, use each, not every: She had a ring on <b>each</b> hand. <b>All</b> usually goes with a plural or uncountable noun: <b>All</b> children <b>like</b> games. <b>All the</b> students are here.",
    "<b>Both</b>, <b>either</b> and <b>neither</b> are only for two. <b>Both</b> means the two together, with a plural noun: <b>Both</b> my sisters <b>live</b> abroad. <b>Either</b> means one or the other, it doesn't matter which, with a singular noun: You can park on <b>either</b> side of the street. <b>Neither</b> means not one and not the other, with a singular noun: <b>Neither</b> answer <b>is</b> correct. Before the, my, these or a pronoun, either and neither need of: <b>either of</b> the doors, <b>neither of</b> them. With both, of is possible but not needed: both my sisters or <b>both of</b> my sisters. Before a pronoun, both needs of too: <b>both of</b> them.",
    "<b>A few</b> (with plural nouns) and <b>a little</b> (with uncountable nouns) mean some, a small number or amount, and they sound positive: I've got <b>a few</b> friends here, so I'm not lonely. We've got <b>a little</b> time, so let's have a coffee. <b>Few</b> and <b>little</b> with no a mean not many or not much, and they sound negative: <b>Few</b> people came, so the concert was cancelled. In everyday speech, we often say not many, not much or very few instead. <b>Several</b> goes with plural nouns and means more than two, but not many: I've been there <b>several</b> times.",
    "<b>No</b> goes before a noun and means not any: There's <b>no</b> milk. (There isn't any milk.) Use it with a positive verb: There's no milk, not There isn't no milk. <b>None</b> means not one or not any, and it is used with no noun after it, or with of: \"How many tickets are left?\" \"<b>None</b>.\" <b>None of</b> my friends could come.",
  ].join("\n\n"),

  form: [
    "every / each + singular noun + singular verb · each, not every, for two",
    "all + plural or uncountable noun · All the students are here.",
    "both + plural noun · either / neither + singular noun · only for two",
    "either of / neither of + the, my, these or a pronoun · both (of) my sisters · both of them",
    "a few + plural · a little + uncountable · some, positive",
    "few + plural · little + uncountable · not many, not much, negative",
    "several + plural · no + noun · none (alone) / none of",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>Every</b> room in the hotel <b>has</b> a balcony.",
      why: "<b>Every</b> goes with a singular noun, room, and a singular verb, has.",
    },
    {
      sentence: "<b>Both</b> my sisters live abroad.",
      why: "I have two sisters, and this is true of the two together, so we use <b>both</b> with a plural noun.",
    },
    {
      sentence: "You can park on <b>either</b> side of the street.",
      why: "A street has two sides, and it doesn't matter which one, so we use <b>either</b> with a singular noun.",
    },
    {
      sentence: "<b>Neither</b> answer is correct.",
      why: "There are two answers, and not one of them is correct, so we use <b>neither</b> with a singular noun and verb.",
    },
    {
      sentence: "I've got <b>a few</b> friends in this city, so I'm never lonely.",
      why: "<b>A few</b> means some, and it sounds positive. Friends is plural, so it is a few, not a little.",
    },
    {
      sentence: "<b>Few</b> people came to the meeting, so we stopped early.",
      why: "<b>Few</b> with no a means not many, and it sounds negative.",
    },
    {
      sentence: "There's <b>no</b> sugar in my coffee.",
      why: "<b>No</b> + noun means not any, and the verb is positive: there's, not there isn't.",
    },
  ],

  pitfall: {
    wrong: "Every students has a locker.",
    right: "<b>Every student</b> has a locker.",
    why: "<b>Every</b> and each go with a singular noun. With a plural noun, use all: All students have a locker.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "You can sit at ___ end of the table. It doesn't matter which.",
      options: ["both", "either", "every", "all"],
      answer: 1,
      feedback:
        "A table has two ends, and it doesn't matter which one, so we use either with a singular noun: either end. Both would need a plural noun, both ends, and every and all are not used for two.",
    },
    {
      kind: "gap",
      stem: "___ my parents are from Italy, so I speak Italian at home. (both, either or neither)",
      answers: ["Both"],
      feedback:
        "Parents are two people, and this is true of the two together, so we use both with a plural noun: Both my parents are from Italy.",
    },
    {
      kind: "gap",
      stem: "___ of the two lifts is working, so we'll have to take the stairs. (both, either or neither)",
      answers: ["Neither"],
      feedback:
        "We have to take the stairs, so not one of the two lifts is working. For not one of two, we use neither, with a singular verb: Neither of the two lifts is working.",
    },
    {
      kind: "choice",
      stem: "Don't worry, we've still got ___ time before the train leaves.",
      options: ["little", "a few", "few", "a little"],
      answer: 3,
      feedback:
        "Time is uncountable, so we use little or a little, not few or a few. Don't worry tells us the meaning is positive, some time, so we need a little.",
    },
    {
      kind: "gap",
      stem: "The film was terrible, so very ___ people went to see it. (Write one word.)",
      answers: ["few"],
      feedback:
        "The film was terrible, so the meaning is not many. People is plural, so we use few: very few people went to see it. Little is for uncountable nouns.",
    },
    {
      kind: "gap",
      stem: "\"How many eggs are left?\" \"___. We need to buy some.\" (no or none)",
      answers: ["None"],
      feedback:
        "There is no noun after the gap, so we use none, not no: None. No needs a noun after it: There are no eggs.",
    },
    {
      kind: "mistake",
      tokens: ["Every", "students", "in", "my", "class", "has", "a", "laptop."],
      wrongIndex: 1,
      correction: "student",
      feedback:
        "Every goes with a singular noun and a singular verb: Every student in my class has a laptop.",
    },
  ],

  levelRationale:
    "English Grammar Profile: each, every, all, both, either and neither, a few and a little, several, no and none are A2 to B1 points, and few and little with a negative meaning are B1. The spec (section 8) places determiners at B1 in the family that starts with A1 this, that, these and those. This topic builds on A2 some, any, much and many and does not change it: no + noun with a positive verb is a second way to say not any. Few and little are described as a bit less common in speech, as Swan says. Neither of + plural can take a plural verb in informal English (Neither of them are here), so no item tests the verb after neither of; the neither gap has a singular verb, which is correct in every style.",

  sourceNotes:
    "english_grammar.txt, # Determiners: both (the two together), either (one or the other, it doesn't matter which), neither (not one and not the other), either and neither with a singular noun, both with a plural noun and verb, of before the and my, all, every (each one, seen as a group), each (one by one), none and no agree with Swan. The note's 'a number of = several' is close but not the same, and a number of is not taught here. Its 'No = no any' should say not any. Its lines on a, an and the are taught in the articles topics. The note says nothing about a few, a little, few and little; they are authored from Swan, Practical English Usage, as are each for two, and no with a positive verb.",
};
