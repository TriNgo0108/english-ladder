import type { RuleTopic } from "../../schema";

export const prepositionsOfTime: RuleTopic = {
  slug: "prepositions-of-time",
  family: "prepositions-of-time",
  title: "Prepositions of time: at, on, in",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 15,

  explanation: [
    "We use the prepositions <b>at</b>, <b>on</b> and <b>in</b> to say when something happens: at six o'clock, on Monday, in June. Remember: a preposition is a small word that goes before a noun.",
    "Use <b>at</b> for clock times: at 7 o'clock, at half past nine. We also say <b>at night</b> and <b>at the weekend</b>. At the weekend is British English. In American English, people say on the weekend. Both are correct.",
    "Use <b>on</b> for days and dates: on Monday, on Sundays, on 3 May, on my birthday.",
    "Use <b>in</b> for months, years and seasons: in May, in 2025, in summer, in winter. Also use in for parts of the day, with the: in the morning, in the afternoon, in the evening. But night is different: we usually say at night.",
    "When you say a day and a part of the day together, use <b>on</b>: on Monday morning, on Friday evening. The day decides, not the part of the day.",
    "Do not use at, on or in before today, tomorrow, every, next and this: I'm busy tomorrow. I go swimming every Sunday. See you next Monday. Not on next Monday, and not in this morning.",
  ].join("\n\n"),

  form: [
    "at + clock times · at 7 o'clock · at night · at the weekend",
    "on + days and dates · on Monday · on 3 May · on Friday evening",
    "in + months, years, seasons · in May · in 2025 · in summer",
    "in + parts of the day · in the morning · in the evening · but at night",
    "no at/on/in · today · tomorrow · every day · next week · this morning",
  ].join("\n"),

  examples: [
    {
      sentence: "The lesson starts <b>at</b> nine o'clock.",
      why: "Nine o'clock is a clock time, so we use <b>at</b>.",
    },
    {
      sentence: "I don't work <b>on</b> Sundays.",
      why: "Sunday is a day of the week, so we use <b>on</b>.",
    },
    {
      sentence: "The shop is closed <b>on</b> 25 December.",
      why: "25 December is a date, so we use <b>on</b>.",
    },
    {
      sentence: "My birthday is <b>in</b> July.",
      why: "July is a month, so we use <b>in</b>.",
    },
    {
      sentence: "It's very cold here <b>in</b> winter.",
      why: "Winter is a season, so we use <b>in</b>.",
    },
    {
      sentence: "I drink coffee <b>in</b> the morning.",
      why: "The morning is a part of the day, so we use <b>in</b>, with the.",
    },
    {
      sentence: "My baby doesn't sleep well <b>at</b> night.",
      why: "Night is different from morning and evening: we usually say <b>at</b> night, with no the.",
    },
    {
      sentence: "We play football <b>on</b> Saturday afternoon.",
      why: "Saturday afternoon is a day and a part of the day together. The day decides, so we use <b>on</b>.",
    },
    {
      sentence: "See you <b>next</b> Friday!",
      why: "Before next, we do not use a preposition: next Friday, not on next Friday.",
    },
  ],

  pitfall: {
    wrong: "I have an English lesson in Monday.",
    right: "I have an English lesson <b>on</b> Monday.",
    why: "For days of the week, we use <b>on</b>: on Monday. In is for months, years, seasons and parts of the day.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "The film starts ___ 8 o'clock.",
      options: ["on", "in", "at"],
      answer: 2,
      feedback:
        "8 o'clock is a clock time, so we use at: The film starts at 8 o'clock. On is for days and dates. In is for months, years, seasons and parts of the day.",
    },
    {
      kind: "gap",
      stem: "My birthday is ___ March. (at, on or in)",
      answers: ["in"],
      feedback:
        "March is a month, so we use in: My birthday is in March. For a date, we use on: My birthday is on 3 March.",
    },
    {
      kind: "gap",
      stem: "We have English lessons ___ Tuesday and Thursday. (at, on or in)",
      answers: ["on"],
      feedback:
        "Tuesday and Thursday are days of the week, so we use on: on Tuesday and Thursday.",
    },
    {
      kind: "gap",
      stem: "I usually read a book ___ night, before I go to sleep. (at, on or in)",
      answers: ["at"],
      feedback:
        "Night is different from morning, afternoon and evening. We say at night: I read a book at night. For the other parts of the day, it is in the: in the evening.",
    },
    {
      kind: "choice",
      stem: "I see my grandmother ___ Sunday afternoon.",
      options: ["on", "in", "at"],
      answer: 0,
      feedback:
        "Sunday afternoon is a day and a part of the day together. The day decides, so we use on: on Sunday afternoon. Alone, the part of the day takes in: in the afternoon.",
    },
    {
      kind: "mistake",
      tokens: ["I", "drink", "coffee", "at", "the", "morning", "and", "tea", "in", "the", "evening."],
      wrongIndex: 3,
      correction: "in",
      feedback:
        "The morning is a part of the day, so we use in, like in the evening: I drink coffee in the morning and tea in the evening. At is for clock times and for night.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: at, on and in with common time words (clock times, days, months, parts of the day) are used at A1. Learners need them as soon as they can tell the time and say the days of the week. This topic comes just after prepositions of place, so the word preposition is already known.",

  sourceNotes:
    "english_grammar.txt, # Preposition phrases time and place, ## Time: at for clock times, in for months, years and parts of the day, and on for days of the week, special days, dates and 'a part of day of week' (on Monday morning) all agree with Swan. Two points are added from Swan: parts of the day need the (in the morning), and night is different (at night). Swan notes that in the night is also possible for one night (I woke up in the night), so the topic says we usually say at night. The note's at for meals and festivals (at lunch, at Christmas) is right, but it is left out to keep this topic short. # Time and place, ## Time lists next among the prepositions of time ('Next - use for days in the week after this week'). That is wrong: next is not a preposition, and it takes no preposition before it (next Tuesday, not on next Tuesday). This topic teaches that. At the weekend (British) and on the weekend (American) are both given as correct, and the quiz has no gap where only one of them is accepted.",
};
