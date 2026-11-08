import type { RuleTopic } from "../../schema";

export const mixedConditionals: RuleTopic = {
  slug: "mixed-conditionals",
  title: "Mixed conditionals: If I'd taken the job, I'd live in Paris now",
  summary: "If I had taken that job, I'd live in Paris now. Mix past and present in one conditional sentence when the two parts are about different times.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 2,

  explanation: [
    "In the second conditional (B1), both parts of the sentence are about now. In the third conditional (order 1), both parts are about the past. But sometimes the two parts are about <b>different times</b>. Then we mix the two patterns. This is a <b>mixed conditional</b>.",
    "<b>A different past, with a result now.</b> The if clause is like the third conditional: <b>had</b> and the past participle. The result clause is like the second conditional: <b>would</b> and the base form. <b>If</b> I <b>had taken</b> that job, I <b>would live</b> in Paris <b>now</b>. (I didn't take it, and I don't live in Paris.) <b>If</b> she <b>hadn't missed</b> the plane, she<b>'d be</b> here <b>today</b>. For something in progress now, use would be and the -ing form: If he hadn't hurt his knee, he <b>would be playing</b> tonight.",
    "<b>A different present, with a result in the past.</b> The if clause is like the second conditional: the <b>past simple</b>, for something that is not true now, and was not true then either. The result clause is like the third conditional: <b>would have</b> and the past participle. <b>If</b> I <b>were</b> braver, I <b>would have said</b> something at the meeting. (I'm not a brave person, so I didn't say anything.) <b>If</b> he <b>spoke</b> French, he <b>would have understood</b> the film. As in B1, If I <b>was</b> is also correct, especially in informal English.",
    "Time words like <b>now</b>, <b>today</b>, <b>at the moment</b>, <b>yesterday</b> and <b>at the time</b> show which result we mean. Without one, both results can be possible, and both are correct, with a different meaning: If I had taken the job, I <b>would be</b> rich. (rich now) If I had taken the job, I <b>would have been</b> rich. (rich then, in the past)",
    "In the result clause, we can also use <b>could</b> or <b>might</b>, as in the other conditionals: If I'd learned to drive, I <b>could</b> take you to the station now. Remember that 'd can mean had or would: If I<b>'d</b> (had) taken the job, I<b>'d</b> (would) be rich.",
  ].join("\n\n"),

  form: [
    "past → now: If + had + past participle, would ('d) + base form: If I'd taken the job, I'd live in Paris now.",
    "now → past: If + past simple, would ('d) have + past participle: If I were braver, I'd have said something.",
    "time words show the result: now, today, at the moment · yesterday, at the time",
    "also: could / might in the result clause",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>If</b> I <b>had studied</b> medicine, I <b>would be</b> a doctor <b>now</b>.",
      why: "The if clause is about the past (I didn't study medicine), and the result is about now (I'm not a doctor). So we use <b>had studied</b> and <b>would be</b>.",
    },
    {
      sentence: "<b>If</b> she <b>hadn't missed</b> the plane, she<b>'d be</b> here <b>today</b>.",
      why: "She missed the plane in the past, and the result is now: she isn't here. <b>'d be</b> means would be.",
    },
    {
      sentence: "<b>If</b> I <b>were</b> braver, I <b>would have said</b> something at the meeting.",
      why: "I'm not a brave person: that is true now, and was true then. The result is in the past, so we use <b>would have</b> and the past participle.",
    },
    {
      sentence: "<b>If</b> he <b>didn't</b> love her, he <b>wouldn't have moved</b> to Australia with her.",
      why: "He loves her, now and in the past. Because he loves her, he moved, so we imagine the opposite: <b>didn't love</b>, <b>wouldn't have moved</b>.",
    },
    {
      sentence: "<b>If</b> we<b>'d booked</b> a table, we <b>wouldn't be</b> waiting <b>at the moment</b>.",
      why: "We didn't book in the past, and the result is now, in progress: we are waiting. So the result clause uses <b>would</b> and be + -ing.",
    },
  ],

  pitfall: {
    wrong: "If I had gone to bed earlier, I wouldn't have been so tired now.",
    right: "If I had gone to bed earlier, I <b>wouldn't be</b> so tired now.",
    why: "<b>Now</b> shows that the result is in the present, so use <b>would</b> and the base form, not would have.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I went to bed very late last night. If I had gone to bed earlier, I ___ so tired now.",
      options: ["wouldn't have been", "won't be", "hadn't been", "wouldn't be"],
      answer: 3,
      feedback:
        "The if clause is about the past, but now shows that the result is in the present, so we use would and the base form: I wouldn't be so tired now. Wouldn't have been is for a result in the past, and won't and hadn't are not used in the result clause.",
    },
    {
      kind: "gap",
      stem: "If Tom hadn't broken his leg last month, he ___ in the team today. (play, would)",
      answers: ["would be playing", "'d be playing", "would play", "'d play"],
      feedback:
        "He broke his leg in the past, and today shows that the result is now, so we use would and the base form: He would play in the team today. He would be playing is also correct, for something in progress today. He'd is the short form of he would.",
    },
    {
      kind: "choice",
      stem: "Which sentence means: I'm not a brave person, so I didn't say anything at the meeting?",
      options: [
        "If I were braver, I would have said something.",
        "If I were braver, I will say something.",
        "If I was braver, I had said something.",
        "If I am braver, I would have said something.",
      ],
      answer: 0,
      feedback:
        "Not being brave is true now, so the if clause uses the past simple, were. Not saying anything is in the past, so the result uses would have and the past participle: If I were braver, I would have said something. Will and had are not used in this result clause, and am is the present, which goes with the first conditional.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order. I don't speak German, so I didn't understand the guide yesterday. If I spoke German, …",
      words: ["understood", "would", "I", "the", "have", "guide."],
      answer: "I would have understood the guide.",
      feedback:
        "Not speaking German is true now, and the result is in the past, so after the subject comes would have and the past participle: I would have understood the guide.",
    },
    {
      kind: "mistake",
      tokens: ["If", "I", "had", "gone", "to", "bed", "earlier,", "I", "will", "feel", "better", "now."],
      wrongIndex: 8,
      correction: "would",
      feedback:
        "The if clause imagines a different past, and now shows that the result is in the present, so we use would and the base form: I would feel better now. I might feel better now is also correct. Will is not used in this result clause.",
    },
    {
      kind: "mistake",
      tokens: ["Maria", "is", "very", "shy.", "If", "she", "isn't", "so", "shy,", "she", "would", "have", "spoken", "to", "him", "at", "the", "party", "yesterday."],
      wrongIndex: 6,
      correction: "weren't",
      feedback:
        "Maria is shy: that is true now, so we imagine the opposite with the past simple: If she weren't so shy, she would have spoken to him at the party yesterday. If she wasn't so shy is also correct, especially in informal English, and If she hadn't been so shy is correct too, as a third conditional. Isn't is the present, and it doesn't go with would have.",
    },
  ],

  levelRationale:
    "English Grammar Profile: mixed conditionals, with a past condition and a present result or a present condition and a past result, are B2 points. Spec section 8 lists them at B2 as a new item, with no family, so this topic is unkeyed. It comes after the third conditional (order 1) and builds on B1 second conditional, so both patterns are taught as mixes of the two. Every item has a time word (now, today, yesterday) or a stated past or present fact that shows which result is meant, and the explanation says that without one, would be and would have been are both correct. In the present-to-past mistake item, wasn't and hadn't been are named as correct, so the wrong word is still only isn't. The present-to-past choice offers no past perfect option, because If I had been braver would also be correct.",

  sourceNotes:
    "Mixed conditionals are a new topic in spec section 8, with no section in english_grammar.txt. The two patterns, the time words, could and might in the result, and were and was are authored from Swan, Practical English Usage.",
};
