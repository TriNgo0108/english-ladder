import type { SetTopic } from "../../schema";

export const inTimeAndOnTime: SetTopic = {
  slug: "in-time-and-on-time",
  family: "prepositions-of-time",
  title: "In time or on time? Time phrases with in, on and at",
  summary: "The train left on time, and we got there just in time. Learn on time and in time, in the end and at the end, at last, at the moment and more.",
  level: "b1",
  category: "phrases",
  shape: "set",
  order: 32,

  explanation: [
    "At A1, you learned at, on and in with times, days and months: at 7 o'clock, on Monday, in May. This topic is about some fixed phrases with the same three words. Each phrase has its own meaning, so learn it as one thing.",
    "<b>On time</b> means at the planned time, not late: The train left on time. Our teacher always starts the lesson on time.",
    "<b>In time</b> means early enough, before it is too late: We got to the station in time to catch the train. Will you be home in time for dinner? Use in time for + a noun, or in time to + the base form. Remember: the base form is the verb as you see it in a dictionary, with nothing added. <b>Just in time</b> means early enough, but only a little early: The doors were closing, and we got on just in time.",
    "<b>In the end</b> means finally, after a long time, or after a lot of changes or problems: We looked at ten flats, and in the end we chose the first one. <b>At the end of</b> something means in its last part, like the last part of a film, a month or a road: I'm going on holiday at the end of June. When of comes next, we use at the end, not in the end.",
    "<b>At last</b> also means finally, but we usually use it when we are happy that a long wait is over: At last you're here! I've been waiting for hours.",
    "<b>At the moment</b> means now: I'm busy at the moment. <b>In a moment</b> means very soon: Wait here. I'll be back in a moment.",
    "<b>On the way</b>, or on my way, means during a journey: Call me when you're on the way. <b>In the way</b> means in a place that stops someone from moving or seeing: Can you move your bag? It's in the way.",
  ].join("\n\n"),

  entries: [
    { headword: "on time", gloss: "at the planned time, not late", inUse: "The plane landed exactly <b>on time</b>." },
    { headword: "in time", gloss: "early enough, before it is too late. We say in time for + a noun, or in time to + a verb.", inUse: "I hope we get there <b>in time</b> for the start of the match." },
    { headword: "just in time", gloss: "early enough, but only a little early", inUse: "We ran to the platform and caught the train <b>just in time</b>." },
    { headword: "in the end", gloss: "finally, after a long time or after a lot of changes", inUse: "The test was hard, but <b>in the end</b> I passed." },
    { headword: "at the end of", gloss: "in the last part of something, like a film, a month or a street", inUse: "There's a café <b>at the end of</b> our street." },
    { headword: "at last", gloss: "finally, after a long wait. We often say it when we are happy.", inUse: "<b>At last</b>! The rain has stopped." },
    { headword: "at the moment", gloss: "now", inUse: "She can't come to the phone. She's in the shower <b>at the moment</b>." },
    { headword: "in a moment", gloss: "very soon", inUse: "Sit down, please. The doctor will see you <b>in a moment</b>." },
    { headword: "on the way", gloss: "during a journey. We also say on my way, on your way and so on.", inUse: "Can you get some milk <b>on the way</b> home?" },
    { headword: "in the way", gloss: "in a place that stops someone from moving or seeing", inUse: "I can't see the TV. You're <b>in the way</b>!" },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "The concert was planned to start at 8:00, and it started at exactly 8:00. It started ___.",
      options: ["in time", "at last", "on time"],
      answer: 2,
      feedback:
        "On time means at the planned time, so the concert started on time. In time means early enough for something, and at last is for the end of a long wait.",
    },
    {
      kind: "gap",
      stem: "We got to the cinema ten minutes before the film started, so we were ___ time to buy some popcorn.",
      answers: ["in", "in good", "in plenty of", "in good time", "in plenty of time"],
      feedback:
        "In time to + a verb means early enough to do something: we were in time to buy some popcorn. In good time and in plenty of time mean early, with time to spare, so they are correct too. On time means at the planned time, and we don't use it with to + a verb like this.",
    },
    {
      kind: "gap",
      stem: "We looked at lots of flats, and ___ the end we chose a small one near the park. (in or at)",
      answers: ["in"],
      feedback:
        "In the end means finally, after a long time or a lot of changes. At the end is for the last part of something, and it usually comes with of: at the end of the film.",
    },
    {
      kind: "choice",
      stem: "Dad's on the phone ___, but he'll call you back soon.",
      options: ["in a moment", "at the moment", "at last"],
      answer: 1,
      feedback:
        "At the moment means now, so Dad is on the phone now. In a moment means very soon, and at last is for the end of a long wait.",
    },
    {
      kind: "choice",
      stem: "We waited for the bus for an hour in the rain. ___ it came!",
      options: ["At last", "At the end", "On time"],
      answer: 0,
      feedback:
        "At last means finally, after a long wait, and we often say it when we are happy. At the end is for the last part of something, usually with of, and the bus was late, so it didn't come on time.",
    },
    {
      kind: "mistake",
      tokens: ["I'll", "buy", "some", "bread", "in", "the", "way", "home."],
      wrongIndex: 4,
      correction: "on",
      feedback:
        "On the way means during a journey: I'll buy some bread on the way home. In the way means in a place that stops someone from moving or seeing.",
    },
  ],

  levelRationale:
    "English Grammar Profile and English Vocabulary Profile, B1: fixed time phrases such as on time, in time, in the end, at the end of, at last, at the moment and in a moment are B1 points, and learners often mix them up. On the way and in the way are added because they are the same kind of fixed pair. The topic extends the A1 topic on prepositions of time, the family's A1 topic, which teaches at, on and in with clock times, days and months.",

  sourceNotes:
    "english_grammar.txt, # Adverbs, ## Time adverbs (when): in time ('early enough before a deadline') and on time ('punctual, at the schedule') agree with Swan, and the wording here is new. The note's third line, 'in time → one time', looks like a typing mistake and is not used. In the end and at the end of, at last, at the moment and in a moment, on the way and in the way, in time for + noun and in time to + base form, and just in time are from Swan, Practical English Usage. Swan says at last is mostly for a long wait that we are happy to end, so the topic says we usually use it that way. The in the end gap gives (in or at), because at the end without of is sometimes heard in speech.",
};
