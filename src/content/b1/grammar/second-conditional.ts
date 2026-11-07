import type { RuleTopic } from "../../schema";

export const secondConditional: RuleTopic = {
  slug: "second-conditional",
  family: "conditionals",
  title: "Second conditional: If I had more time, I'd learn the guitar",
  summary: "If I won the lottery, I'd travel the world. Imagine things that are not true or not likely, with if + past simple and would + base form.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 9,

  explanation: [
    "We use the <b>second conditional</b> to imagine a situation that is <b>not true now</b>, or that is <b>not likely</b> in the future, and its result: <b>If</b> I <b>had</b> a car, I<b>'d drive</b> to work. (I don't have a car.) <b>If</b> I <b>won</b> the lottery, I<b>'d travel</b> round the world. (I probably won't win.)",
    "The sentence has two clauses. Remember: a clause is a group of words with a subject and a verb. In the <b>if clause</b>, use the <b>past simple</b>, even though we are talking about now or the future. In the result clause, use <b>would</b> ('d) or <b>wouldn't</b> and the base form of a verb: If I <b>had</b> more time, I<b>'d learn</b> the guitar. If she <b>lived</b> nearer, we <b>wouldn't need</b> to drive. Remember: the base form is the verb as you see it in a dictionary, with nothing added. Here, 'd means would.",
    "With be, we can use <b>were</b> for every subject: If I <b>were</b> rich, I'd buy a house by the sea. If it <b>were</b> warmer, we could swim. Were is often preferred, especially in writing. <b>If I was</b> and <b>if it was</b> are also correct and common, especially in informal English, when we speak to friends and family. <b>If I were you</b>, I'd … is a common way to give advice: If I were you, I'd talk to your teacher.",
    "We don't usually use would in the if clause: If I <b>had</b> more money, I'd buy a new phone, not If I would have more money. Would goes in the result clause. In the result clause, we can also use <b>could</b> (would be able to) or <b>might</b> (would perhaps): If I had more time, I <b>could</b> help you.",
    "Compare the first conditional (A2), for something that is possible: If it <b>rains</b> tomorrow, we<b>'ll stay</b> at home. (Maybe it will rain.) The second conditional is for something that we imagine, or that we think is not likely: If it <b>snowed</b> in July, we<b>'d be</b> very surprised.",
    "As in the first conditional, the if clause can come first or second, and the meaning is the same. When the if clause comes first, we usually put a comma after it. When it comes second, we don't usually use a comma: <b>If</b> I knew her number, I'd call her. I'd call her <b>if</b> I knew her number.",
    "To ask a question, put would before the subject in the result clause: What <b>would</b> you <b>do</b> if you found a wallet in the street?",
  ].join("\n\n"),

  form: [
    "If + past simple, would ('d) / wouldn't + base form: If I had more time, I'd learn the guitar.",
    "would ('d) + base form + if + past simple: I'd learn the guitar if I had more time.",
    "If I were … (often preferred) · If I was … (common in informal English)",
    "If I were you, I'd … (advice)",
    "also: could / might + base form in the result clause",
    "not usually: If I would have …",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>If</b> I <b>had</b> a car, I<b>'d drive</b> to work.",
      why: "I don't have a car, so this is not true now. The if clause uses the past simple, <b>had</b>, and the result clause uses <b>'d</b> (would) and the base form.",
    },
    {
      sentence: "<b>If</b> I <b>won</b> the lottery, I<b>'d travel</b> round the world.",
      why: "Winning the lottery is not likely, so we use the second conditional. <b>Won</b> is past in form, but it is about the future.",
    },
    {
      sentence: "<b>If</b> I <b>were</b> you, I<b>'d talk</b> to your teacher.",
      why: "<b>If I were you</b> gives advice: I imagine that I am in your situation. If I was you is also heard in informal English.",
    },
    {
      sentence: "She <b>wouldn't be</b> so tired if she <b>went</b> to bed earlier.",
      why: "The if clause comes second, so there is no comma. She doesn't go to bed early, so this is not true now.",
    },
    {
      sentence: "What <b>would</b> you <b>do</b> if you <b>saw</b> a snake in your garden?",
      why: "In a question, <b>would</b> comes before the subject, you. The if clause still uses the past simple: saw.",
    },
    {
      sentence: "<b>If</b> it <b>rains</b> tomorrow, we<b>'ll stay</b> at home. <b>If</b> it <b>snowed</b> in July, we<b>'d be</b> very surprised.",
      why: "Rain tomorrow is possible, so the first sentence is a first conditional. Snow in July is not likely, so the second sentence is a second conditional.",
    },
  ],

  pitfall: {
    wrong: "If I would have more money, I would buy a new phone.",
    right: "If I <b>had</b> more money, I would buy a new phone.",
    why: "In the if clause, use the <b>past simple</b>, not would. Would goes in the result clause.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "If I ___ more free time, I'd learn to play the guitar.",
      options: ["have", "had", "would have", "will have"],
      answer: 1,
      feedback:
        "The result clause has 'd (would), so this is the second conditional, and the if clause uses the past simple: If I had more free time, I'd learn to play the guitar. We don't usually use would or will in the if clause, and have goes with will in the first conditional.",
    },
    {
      kind: "gap",
      stem: "If I ___ you, I'd take the job. (be)",
      answers: ["were", "was"],
      feedback:
        "If I were you gives advice, and it uses the past form of be: If I were you, I'd take the job. Were is often preferred, especially in writing. If I was you is also correct in informal English.",
    },
    {
      kind: "gap",
      stem: "If we lived near the sea, we ___ swimming every day. (go, would)",
      answers: ["would go", "'d go"],
      feedback:
        "This is the result clause, so we use would and the base form: If we lived near the sea, we'd go swimming every day. We would go is also correct.",
    },
    {
      kind: "gap",
      stem: "I would tell you the answer if I ___ it. (know)",
      answers: ["knew"],
      feedback:
        "The if clause comes second here, and it uses the past simple: I would tell you the answer if I knew it. I don't know it, so this is not true now. Know is irregular: know → knew.",
    },
    {
      kind: "choice",
      stem: "Which sentence is about something that is unlikely or not true now?",
      options: [
        "If I see Tom, I'll tell him.",
        "If it rains, we'll stay at home.",
        "If you're tired, go to bed.",
        "If I were taller, I'd play basketball.",
      ],
      answer: 3,
      feedback:
        "If I were taller, I'd play basketball is a second conditional: I am not tall, so this is not true now. The other sentences use the present simple in the if clause, for something that is possible or real.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["you", "phone?", "do", "What", "if", "lost", "your", "would", "you"],
      answer: "What would you do if you lost your phone?",
      feedback:
        "The question word comes first, then would, then the subject and the base form: What would you do. The if clause comes second and uses the past simple: if you lost your phone?",
    },
    {
      kind: "mistake",
      tokens: ["If", "I", "am", "you,", "I'd", "call", "her", "today."],
      wrongIndex: 2,
      correction: "were",
      feedback:
        "I can't really be you, so this is a second conditional, and the if clause uses the past form of be: If I were you, I'd call her today. If I was you is also heard in informal English. Am is the present simple, which goes with the first conditional and will.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the second conditional, with if and the past simple and would in the result clause, is a B1 point, and If I were you for advice is also B1. It builds on the first conditional, the family's A2 topic, and keeps its clause-order and comma rule. Were and was are both taught, with were as often preferred and was as common in informal English, following Swan, and gaps accept both. The no-would rule is given with don't usually, because would after if is correct in polite requests (If you would wait here, …), which are above B1. Could and might in the result clause are mentioned but not tested. The third conditional and mixed conditionals are left to B2, the family's next level.",

  sourceNotes:
    "english_grammar.txt, # Second conditional: theoretically possible but not true, purely imaginary situations, and would plus the past simple after if agree with Swan. The note says would + infinitive; this topic says the base form, as A1 and A2 do. The note's examples use If I were, which Swan gives as the more formal choice beside If I was. The likely or unlikely future meaning, If I were you for advice, could and might in the result, the comparison with the first conditional, the comma and questions are authored from Swan, Practical English Usage.",
};
