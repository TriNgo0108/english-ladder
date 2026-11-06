import type { RuleTopic } from "../../schema";

export const presentSimpleForFuture: RuleTopic = {
  slug: "present-simple-for-future",
  family: "present-simple",
  title: "Present simple for the future: The train leaves at six",
  summary: "Use the present simple for timetables and fixed times: The train leaves at 6.15. The film starts at eight. Compare it with the present continuous.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 7,

  explanation: [
    "Remember: we use the present simple for things that are true for a long time and for things we do again and again: I live in Rome. We play football on Sundays. We also use it to talk about the <b>future</b>, when something happens at a fixed time on a <b>timetable</b>. A timetable is a list of times, for example for trains, buses, planes, classes or films.",
    "The train <b>leaves</b> at 6.15 tomorrow morning. The film <b>starts</b> at eight tonight. Our plane <b>arrives</b> at ten. The course <b>begins</b> on 5 September. We usually say the time or the day, so it is clear that we mean the future.",
    "We use it most with verbs like leave, arrive, start, begin, finish, open and close. Be works in the same way: The concert <b>is</b> on Friday.",
    "The forms are the same as always. With he, she and it, and with one thing, add <b>-s</b>: the bus leaves, the shop opens. Finish ends in -sh, so it adds -es: The lesson finishes at four. To say no, use don't or doesn't and the base form: The shop <b>doesn't open</b> until ten tomorrow. To ask a question, use do or does: What time <b>does</b> the train <b>leave</b>? After does, the verb has no -s. Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    "Present simple or present continuous? For a timetable, we usually use the present simple: The bus leaves at seven. For our own plans that we have arranged, we usually use the present continuous: I'm meeting Sam at six. We do not usually use the present simple for these plans: I'm seeing the doctor tomorrow, not usually I see the doctor tomorrow. We often use the two together: My train <b>leaves</b> at six, so I<b>'m getting up</b> at five.",
    "You will sometimes hear will for a timetable too: The train will leave at 6.15. But the present simple is more usual.",
  ].join("\n\n"),

  form: [
    "timetable + present simple: The train leaves at 6.15. · The film starts at eight.",
    "he/she/it + -s: the bus leaves · the lesson finishes",
    "The shop doesn't open until ten. · What time does the train leave?",
    "timetable → present simple · my own arranged plan → present continuous",
  ].join("\n"),

  examples: [
    {
      sentence: "The train to London <b>leaves</b> at 6.15 tomorrow morning.",
      why: "The time is on the train timetable, so we use the present simple. The train is one thing (it), so leave has <b>-s</b>.",
    },
    {
      sentence: "Hurry up! The film <b>starts</b> in ten minutes.",
      why: "The cinema decides when the film starts. It is a fixed time, so we use the present simple: <b>starts</b>.",
    },
    {
      sentence: "Our English course <b>finishes</b> on 20 June.",
      why: "The course has a fixed end date. Finish ends in -sh, so with it we add <b>-es</b>: finishes.",
    },
    {
      sentence: "What time <b>does</b> your plane <b>arrive</b>?",
      why: "In a question, <b>does</b> comes before the subject, your plane. After does, arrive has no -s.",
    },
    {
      sentence: "The bank <b>doesn't open</b> tomorrow. It's a holiday.",
      why: "The bank's opening times are fixed. To say no, use <b>doesn't</b> and the base form: open, not opens.",
    },
    {
      sentence: "I<b>'m meeting</b> Ana at the station. Her train <b>arrives</b> at five.",
      why: "Meeting Ana is my own arranged plan, so it is in the present continuous. The train time is on a timetable, so it is in the present simple.",
    },
  ],

  pitfall: {
    wrong: "What time does the film starts?",
    right: "What time does the film <b>start</b>?",
    why: "After does, use the base form. The -s is already in does, so the verb has no -s: start, not starts.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "Hurry up! Our bus ___ at 7.10, and it's 7.05 now. (leave, present simple)",
      answers: ["leaves"],
      feedback:
        "The bus time is on a timetable, so we use the present simple. Our bus is one thing (it), so the verb needs -s: Our bus leaves at 7.10.",
    },
    {
      kind: "choice",
      stem: "Look at the cinema programme. The film ___ at 8.30 tonight.",
      options: ["start", "starts", "starting", "is start"],
      answer: 1,
      feedback:
        "The film time is fixed by the cinema, so we use the present simple. The film is one thing (it), so start needs -s: starts. Starting needs is before it, and we do not put is before the base form.",
    },
    {
      kind: "choice",
      stem: "The last train leaves at 11.40 tonight. Why does the speaker use the present simple?",
      options: [
        "The time is on a timetable.",
        "The speaker decides at the moment of speaking.",
        "The train is leaving now.",
      ],
      answer: 0,
      feedback:
        "The train time is fixed on a timetable, so we use the present simple for the future: leaves. For a decision at the moment of speaking, we usually use will, and tonight shows that the train is not leaving now.",
    },
    {
      kind: "gap",
      stem: "The film ___ until nine tonight, so we have time for dinner first. (start + not, present simple)",
      answers: ["doesn't start", "does not start"],
      feedback:
        "The film time is fixed by the cinema, so we use the present simple. The film is one thing (it), so to say no we use doesn't, or does not, and the base form: The film doesn't start until nine tonight.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to ask about the timetable.",
      words: ["leave?", "does", "the", "What", "train", "time"],
      answer: "What time does the train leave?",
      feedback:
        "What time comes first, then does, then the subject, the train, then the base form: What time does the train leave? Leave has no -s, because the -s is already in does.",
    },
    {
      kind: "mistake",
      tokens: ["What", "time", "does", "the", "concert", "finishes?"],
      wrongIndex: 5,
      correction: "finish",
      feedback:
        "After does, the verb is in the base form, with no -es: What time does the concert finish? The -s is already in does.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A2: the present simple for future events on a timetable or a fixed schedule (The train leaves at six) is an A2 point. This site's A1 present simple topic leaves timetables out for that reason. The topic comes after going to, will and the present continuous for the future, so that it can be compared with the present continuous, the form learners most often confuse it with.",

  sourceNotes:
    "english_grammar.txt, # Present Simple for Future: timetables and official schedules (trains, films, school terms), not personal arrangements, agrees with Swan, and this topic follows it. The note's first example has an extra word ('The train at leaves at 9am'), so it is not used; its examples are used only as models, not copied. 'Departs' is above A2, so this topic uses leave. Be in the same way (The concert is on Friday), the -s and -es endings, doesn't and does, the contrast with the present continuous for personal arrangements, and the note that will is also possible but less usual for timetables are authored from Swan, Practical English Usage. Gaps name the form in the hint, because will leave and is leaving can also be correct for a timetable.",
};
