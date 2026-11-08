import type { RuleTopic } from "../../schema";

export const thirdConditional: RuleTopic = {
  slug: "third-conditional",
  family: "conditionals",
  title: "Third conditional: If I'd known, I'd have helped",
  summary: "If we had left earlier, we wouldn't have missed the train. Imagine a different past, and its result, with if + had and would have.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 1,

  explanation: [
    "We use the <b>third conditional</b> to imagine a <b>different past</b>: something that did not happen, and the result it would have had. <b>If</b> I <b>had known</b> about the party, I <b>would have come</b>. (I didn't know, so I didn't come.) <b>If</b> we <b>had left</b> earlier, we <b>wouldn't have missed</b> the train. (We left late, and we missed it.) We can't change the past, so the third conditional is often used for regrets, or to say what went wrong.",
    "The sentence has two clauses. Remember: a clause is a group of words with a subject and a verb. In the <b>if clause</b>, use the <b>past perfect</b> (B1): <b>had</b> and the past participle. In the result clause, use <b>would have</b> and the past participle. Remember: the past participle is the form of a verb that comes after have: seen, gone, finished. To say no, use <b>hadn't</b> and <b>wouldn't have</b>: If she <b>hadn't helped</b> me, I <b>wouldn't have finished</b> in time.",
    "In speaking, we usually use short forms. In the if clause, <b>'d</b> means had. In the result clause, <b>'d</b> means would: If I<b>'d</b> known, I<b>'d have</b> helped. We also say <b>would've</b>: I would've helped. It can sound like would of, but we never write of: write would have or would've.",
    "In the result clause, we can also use <b>could have</b> (would have been able to) or <b>might have</b> (would perhaps have): If you had asked me, I <b>could have</b> helped you. If he had trained harder, he <b>might have</b> won.",
    "We don't usually use would in the if clause: If I <b>had known</b>, I would have called you, not If I would have known. Would goes in the result clause.",
    "Compare the second conditional (B1), which imagines the present: If I <b>had</b> a car, I<b>'d drive</b> to work. (I don't have a car now.) The third conditional imagines the past: If I <b>had had</b> a car yesterday, I<b>'d have driven</b> to work. (I didn't have one, so I didn't drive.) Had had is correct: the first had makes the past perfect, and the second is the past participle of have.",
    "As in the first and second conditionals, the if clause can come first or second. When it comes first, we usually put a comma after it. To ask a question, put would before the subject: What <b>would</b> you <b>have done</b> if you had lost your passport?",
  ].join("\n\n"),

  form: [
    "If + had ('d) + past participle, would ('d) have + past participle: If I'd known, I'd have helped.",
    "would have + past participle + if + had + past participle: I'd have helped if I'd known.",
    "hadn't + past participle · wouldn't have + past participle",
    "also: could have / might have + past participle in the result clause",
    "would have → 'd have, would've · never: would of",
    "not usually: If I would have known …",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>If</b> I <b>had known</b> about the party, I <b>would have come</b>.",
      why: "I didn't know, so I didn't come. The if clause uses had and the past participle, and the result clause uses <b>would have</b> and the past participle.",
    },
    {
      sentence: "<b>If</b> we<b>'d left</b> earlier, we <b>wouldn't have missed</b> the train.",
      why: "In the if clause, <b>'d</b> means had. We left late and missed the train, so we imagine the opposite.",
    },
    {
      sentence: "She <b>might have won</b> the race <b>if</b> she <b>hadn't fallen</b>.",
      why: "<b>Might have</b> means would perhaps have: we are not sure about the result. The if clause comes second, so there is no comma.",
    },
    {
      sentence: "<b>If</b> you<b>'d asked</b> me, I<b>'d have helped</b> you.",
      why: "The first <b>'d</b> means had, and the second means would. You didn't ask me, so I didn't help.",
    },
    {
      sentence: "What <b>would</b> you <b>have done</b> if you <b>had lost</b> your passport?",
      why: "In a question, <b>would</b> comes before the subject, you. The if clause still uses had and the past participle.",
    },
  ],

  pitfall: {
    wrong: "If I would have known, I would have called you.",
    right: "If I <b>had known</b>, I would have called you.",
    why: "In the if clause, use <b>had</b> and the past participle, not would have. Would goes in the result clause.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "If you had told me about the concert last Saturday, I ___ with you. (go, would)",
      answers: ["would have gone", "'d have gone", "would've gone"],
      feedback:
        "The concert was last Saturday, so this is about the past, and the result clause uses would have and the past participle: I would have gone with you. I'd have gone and I would've gone are also correct. Go is irregular: go → went → gone.",
    },
    {
      kind: "gap",
      stem: "We ___ the last train if we had left the restaurant ten minutes earlier. (miss + not, would)",
      answers: ["wouldn't have missed", "would not have missed", "'d not have missed"],
      feedback:
        "This is the result clause, about the past, so we use wouldn't have and the past participle: We wouldn't have missed the last train. Wouldn't is the short form of would not.",
    },
    {
      kind: "gap",
      stem: "If she ___ harder last term, she would have passed the exam. (study)",
      answers: ["had studied", "'d studied", "had been studying", "'d been studying"],
      feedback:
        "Last term is in the past, so this is the if clause of a third conditional, and we use had and the past participle: If she had studied harder last term, she would have passed the exam. She didn't study hard, and she didn't pass. She'd studied is also correct, and so is had been studying (she'd been studying), for a longer activity.",
    },
    {
      kind: "choice",
      stem: "Which sentence imagines a different past?",
      options: [
        "If I had more money, I'd buy a car.",
        "If I'd had more money, I'd have bought a car.",
        "If I have more money, I'll buy a car.",
      ],
      answer: 1,
      feedback:
        "If I'd had more money, I'd have bought a car is a third conditional: I didn't have the money, so I didn't buy a car. If I had more money, I'd buy a car is a second conditional, about now, and If I have more money, I'll buy a car is a first conditional, about a possible future.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["you", "done", "What", "had", "missed", "if", "have", "the", "would", "flight?", "you"],
      answer: "What would you have done if you had missed the flight?",
      feedback:
        "The question word comes first, then would, the subject and have done: What would you have done. The if clause comes second and uses had and the past participle: if you had missed the flight?",
    },
    {
      kind: "mistake",
      tokens: ["If", "we", "have", "seen", "the", "sign,", "we", "would", "have", "stopped."],
      wrongIndex: 2,
      correction: "had",
      feedback:
        "We didn't see the sign, so this is a third conditional, and the if clause uses had and the past participle: If we had seen the sign, we would have stopped. The result clause is correct: would have stopped.",
    },
    {
      kind: "mistake",
      tokens: ["If", "you", "had", "asked", "me,", "I", "will", "have", "helped", "you."],
      wrongIndex: 6,
      correction: "would",
      feedback:
        "You didn't ask, so we imagine a different past, and the result clause uses would have: If you had asked me, I would have helped you. I could have helped you and I might have helped you are also correct. Will have is not used in a conditional about the past.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the third conditional, with if and the past perfect and would have and the past participle in the result, is a B2 point, and could have and might have in the result clause are B2 too. The spec (section 8) places it at B2, as the conditionals family's third topic after A2 first conditional and B1 second conditional, and it keeps their clause, comma and question rules. Short forms are taught and every gap accepts would have, 'd have and would've, and had or 'd in the if clause. Could have and might have are taught as correct in the result clause and never marked wrong; the gaps that ask for would name it in the cue. The no-would rule is given with don't usually, as in B1. Every gap has a past time or a past result, so a mixed conditional (the next topic) does not fit.",

  sourceNotes:
    "english_grammar.txt, # Third conditional: something in the past that would have happened if our actions had been different, If + had + past participle and would have + past participle, the short forms I'd and I'd have, and the negatives hadn't and wouldn't have agree with Swan. The note's example puts the if clause second; this topic teaches both orders, with the comma rule from the B1 topic. Could have and might have in the result, the rule against would in the if clause, would've and the warning about would of, had had, and questions are authored from Swan, Practical English Usage.",
};
