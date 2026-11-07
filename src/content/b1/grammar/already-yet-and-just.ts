import type { RuleTopic } from "../../schema";

export const alreadyYetAndJust: RuleTopic = {
  slug: "already-yet-and-just",
  title: "Already, yet and just: I've just eaten, have you finished yet?",
  summary: "I've just arrived. Have you finished yet? I've already paid. Learn what each word adds to the present perfect, and where it goes in the sentence.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 3,

  explanation: [
    "We often use <b>just</b>, <b>already</b> and <b>yet</b> with the present perfect. They all talk about the time up to now. Remember: the present perfect is have or has and the past participle: I've finished.",
    "<b>Just</b> means a very short time ago. It goes between have or has and the past participle: I<b>'ve just had</b> lunch, so I'm not hungry. The train <b>has just left</b>. Sorry, you've missed it.",
    "<b>Already</b> means before now, often sooner than someone thinks. It usually goes between have or has and the past participle: I<b>'ve already paid</b> for the tickets. She<b>'s already finished</b> her homework. Already can also go at the end, especially when we speak: I've paid for the tickets <b>already</b>.",
    "<b>Yet</b> means up to now. We use it in questions and in sentences with not, and it usually goes at the end. In a question, we want to know if something has happened: Have you finished <b>yet</b>? In a sentence with not, it hasn't happened, but we think it will: I <b>haven't finished yet</b>. The bus <b>hasn't come yet</b>.",
    "In a positive statement, use already, not yet: I've <b>already</b> booked the hotel, not I've booked the hotel yet.",
    "In American English, people often use the past simple with just, already and yet: I <b>just had</b> lunch. Did you eat <b>yet</b>? In British English, the present perfect is more usual, and this site uses it in its examples.",
  ].join("\n\n"),

  form: [
    "have / has + just + past participle: I've just had lunch.",
    "have / has + already + past participle: She's already left.",
    "… already (at the end): I've done it already.",
    "Have you … yet? · I haven't … yet.",
    "not: I've finished yet. → I've already finished.",
    "American English also: I just had lunch. · Did you eat yet?",
  ].join("\n"),

  examples: [
    {
      sentence: "Your coffee is hot. I<b>'ve just made</b> it.",
      why: "I made it a very short time ago, so we use <b>just</b>, between 've and the past participle, made.",
    },
    {
      sentence: "Don't buy any milk. I<b>'ve already bought</b> some.",
      why: "<b>Already</b> says it happened before now, and sooner than you think. It goes between 've and bought.",
    },
    {
      sentence: "<b>Has</b> the post <b>arrived yet</b>?",
      why: "This is a question, so we use <b>yet</b>, at the end.",
    },
    {
      sentence: "I <b>haven't read</b> the book <b>yet</b>, but I'm going to start it tonight.",
      why: "The sentence has not, and it hasn't happened but it will, so we use <b>yet</b>, at the end.",
    },
    {
      sentence: "We've seen that film <b>already</b>. Let's watch something else.",
      why: "<b>Already</b> can also go at the end of the sentence, especially when we speak.",
    },
  ],

  pitfall: {
    wrong: "I've finished my homework yet.",
    right: "I've <b>already</b> finished my homework.",
    why: "<b>Yet</b> is for questions and sentences with not. In a positive statement, use <b>already</b>.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I'm not hungry, thanks. I've ___ had lunch.",
      options: ["yet", "ever", "just", "still"],
      answer: 2,
      feedback:
        "Just means a very short time ago, and it goes between have and the past participle: I've just had lunch. Yet is for questions and sentences with not, and it usually goes at the end. Ever is for questions about experience. Still means that something hasn't stopped, so it doesn't fit here.",
    },
    {
      kind: "gap",
      stem: "I haven't finished the report ___, so I can't send it to you. (already or yet)",
      answers: ["yet"],
      feedback:
        "The sentence has not, and the report isn't finished, so we use yet: I haven't finished the report yet. Already is for positive statements.",
    },
    {
      kind: "gap",
      stem: "We've missed the beginning. The film ___. (just, start)",
      answers: ["has just started", "'s just started", "just started"],
      feedback:
        "The film started a very short time ago, so we use just between has and the past participle: The film has just started, or The film's just started. In American English, The film just started is also correct.",
    },
    {
      kind: "gap",
      stem: "I ___ that film. I saw it last week. (already, see)",
      answers: ["have already seen", "'ve already seen", "already saw"],
      feedback:
        "Already goes between have and the past participle: I have already seen, or I've already seen, that film. The second sentence uses the past simple, saw, because last week is a finished time. In American English, I already saw that film is also correct.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["arrived", "yet?", "the", "Has", "taxi"],
      answer: "Has the taxi arrived yet?",
      feedback:
        "Has comes before the subject, the taxi, then the past participle, arrived. Yet goes at the end of the question: Has the taxi arrived yet?",
    },
    {
      kind: "mistake",
      tokens: ["The", "client", "is", "happy.", "We've", "finished", "the", "project", "yet."],
      wrongIndex: 8,
      correction: "already",
      feedback:
        "The client is happy, so the project is done. This is a positive statement, not a question, so we can't use yet. Use already: We've finished the project already, or We've already finished the project.",
    },
  ],

  levelRationale:
    "English Grammar Profile: just, already and yet with the present perfect start at A2 and are used with confidence at B1, including yet in questions and negatives and already at the end. This topic comes after the present perfect and past simple (order 1), because these words are taught with the present perfect form from that topic. Yet is given as usually at the end, because Swan allows it after not in a formal style (I have not yet decided), which is above B1 and not taught. The American English past simple is named in one sentence and accepted in gaps, as this site does for B1 (Swan records it as correct).",

  sourceNotes:
    "english_grammar.txt, # Already and yet: yet at the end of a question or a negative agrees with Swan; this topic says usually at the end, because yet can also come after not in a formal style. Already after have or has agrees with Swan, but already can also go at the end of the sentence, so this topic gives both. # Present perfect simple and continuous, ## Present perfect simple, says we use the present perfect with just, yet and already; Swan agrees for British English, and adds that American English often uses the past simple with them, so this topic says so and accepts it in gaps. Just, the meanings of the three words, and the mistake I've finished yet are authored from Swan, Practical English Usage.",
};
