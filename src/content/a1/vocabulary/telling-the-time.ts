import type { SetTopic } from "../../schema";

export const tellingTheTime: SetTopic = {
  slug: "telling-the-time",
  title: "Telling the time",
  level: "a1",
  category: "vocabulary",
  shape: "set",
  order: 21,

  explanation: [
    "To ask the time, say <b>What time is it?</b> or <b>What's the time?</b> The answer starts with It's: It's four o'clock.",
    "For a full hour, with no minutes, use <b>o'clock</b>: 3:00 = It's three o'clock. Use o'clock only for a full hour. Do not say ten past three o'clock.",
    "For the minutes after the hour, up to 30, say the minutes, then <b>past</b>, then the hour: 3:10 = ten past three. 3:20 = twenty past three. A quarter is 15 minutes, so 3:15 = <b>quarter past three</b>. You can also say a quarter past three. Both are correct. 3:30 = <b>half past three</b>.",
    "After 30 minutes, think about the next hour. Say the minutes that are left before it, then <b>to</b>, then the next hour: 3:40 = twenty to four. 3:45 = <b>quarter to four</b>, or a quarter to four. 3:55 = five to four. Do not say half to four: 3:30 is half past three.",
    "With past and to, we usually use five, ten, quarter, twenty, twenty-five and half. For other times, add minutes: 3:07 = seven minutes past three.",
    "There is a second, easy way: say the hour, then the minutes, like the numbers on your phone. 3:30 = three thirty. 3:45 = three forty-five. 7:05 = seven oh five (say oh for 0). This way is very common in British and American English. American speakers also sometimes say a quarter of four for 3:45.",
    "In British English, people sometimes say half three. It means half past three (3:30). It does not mean 2:30.",
    "<b>a.m.</b> means from midnight to midday: 9 a.m. is in the morning. <b>p.m.</b> means from midday to midnight: 9 p.m. is in the evening. Use a.m. and p.m. with numbers only, not with o'clock: 9 a.m., not 9 o'clock a.m.",
    "The sounds in / / are American English. The table gives no sounds for groups of words, like half past, or for a.m. and p.m., which we say as letters: A M, P M.",
  ].join("\n\n"),

  entries: [
    { headword: "What time is it?", gloss: "the question we ask to know the time", inUse: "Excuse me, <b>what time is it</b>? It's half past four." },
    { headword: "o'clock", ipa: "/əˈklɑk/", gloss: "a word after the hour when there are no minutes", inUse: "It's six <b>o'clock</b>." },
    { headword: "past", ipa: "/pæst/", gloss: "after. We use it for the minutes after an hour.", inUse: "It's ten <b>past</b> nine." },
    { headword: "to", ipa: "/tu/", gloss: "before. We use it for the minutes before the next hour.", inUse: "It's five <b>to</b> eight." },
    { headword: "quarter", ipa: "/ˈkwɔrtɚ/", gloss: "15 minutes. An hour has four quarters.", inUse: "It's <b>quarter</b> past two." },
    { headword: "half past", gloss: "30 minutes after the hour", inUse: "The lesson starts at <b>half past</b> ten." },
    { headword: "minute", ipa: "/ˈmɪnət/", gloss: "a short time. An hour has 60 minutes.", inUse: "The bus comes in five <b>minutes</b>." },
    { headword: "hour", ipa: "/ˈaʊɚ/", gloss: "60 minutes. A day has 24 hours.", inUse: "The train takes an <b>hour</b>." },
    { headword: "a.m.", gloss: "from midnight to midday: in the morning", inUse: "The shop opens at 9 <b>a.m.</b>" },
    { headword: "p.m.", gloss: "from midday to midnight: in the afternoon, evening and night", inUse: "The shop closes at 6 <b>p.m.</b>" },
    { headword: "midday", ipa: "/ˈmɪddeɪ/", gloss: "12 o'clock in the day", inUse: "We have lunch at <b>midday</b>." },
    { headword: "midnight", ipa: "/ˈmɪdnaɪt/", gloss: "12 o'clock at night", inUse: "I go to bed at <b>midnight</b>." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "It's 4:30. Which is right?",
      options: ["It's four and a half.", "It's half to five.", "It's half past four."],
      answer: 2,
      feedback:
        "4:30 is half past four: 30 minutes after four. You can also say four thirty. We do not say four and a half for the time, and half to five is not English. Use to only for the minutes before the next hour, as in quarter to five (4:45).",
    },
    {
      kind: "choice",
      stem: "Which time is quarter to nine?",
      options: ["9:15", "8:45", "9:45"],
      answer: 1,
      feedback:
        "To means before. Quarter to nine is 15 minutes before nine: 8:45. 9:15 is quarter past nine, 15 minutes after nine.",
    },
    {
      kind: "gap",
      stem: "It's 7:15. It's ___ past seven.",
      answers: ["quarter", "a quarter", "fifteen minutes"],
      feedback:
        "15 minutes is a quarter of an hour, so 7:15 is quarter past seven, or a quarter past seven. Both are correct. Fifteen minutes past seven is also right, but quarter past is much more usual. You can also say seven fifteen.",
    },
    {
      kind: "gap",
      stem: "Write the time 3:30 in words. It's ___.",
      answers: ["half past three", "three thirty", "three-thirty", "half three"],
      feedback:
        "3:30 is half past three. Three thirty is also correct and very common. In British English, half three means the same. All of these are right. We do not say three and a half or half to four.",
    },
    {
      kind: "mistake",
      tokens: ["It's", "ten", "past", "six", "o'clock."],
      wrongIndex: 4,
      correction: "It's ten past six. (no o'clock)",
      feedback:
        "Use o'clock only for a full hour, with no minutes: It's six o'clock. When there are minutes, stop after the hour: It's ten past six.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to ask the time.",
      words: ["is", "time", "it?", "What"],
      answer: "What time is it?",
      feedback:
        "What time comes first, then is, then it: What time is it? This is a question, so is comes before it. You can also ask What's the time?",
    },
  ],

  levelRationale:
    "The CEFR's A1 descriptors include handling numbers, quantities, cost and time, and the English Vocabulary Profile places o'clock, past, half, quarter, minute and hour at A1. This topic comes straight after numbers, because every time is said with number words.",

  sourceNotes:
    "english_grammar.txt, # Telling the time, has four short points: 'ten thirty' when morning or evening is clear, a.m. and p.m. when it is not, midday for 12 p.m. and midnight for 12 a.m. All four agree with Swan, Practical English Usage, and are used here. The note does not cover past, to, quarter or half; those, the o'clock rule, half three, and a quarter of (American) are from Swan. IPA is from CMUdict (public domain), converted from ARPAbet and checked by hand; nothing from the notes.",
};
