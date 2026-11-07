import type { RuleTopic } from "../../schema";

export const needntHaveAndDidntNeedTo: RuleTopic = {
  slug: "neednt-have-and-didnt-need-to",
  family: "modal-obligation",
  title: "Needn't have and didn't need to: it wasn't necessary",
  summary: "You needn't have brought a present, but thank you! We didn't need to wait, so we left. Say that something in the past was not necessary.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 5,

  explanation: [
    "In A2, we learned that don't have to means that something is <b>not necessary</b>, and that mustn't means that something is not allowed. To say that something was not necessary in the <b>past</b>, English has two ways, and they are a little different.",
    "<b>Needn't have</b> and the past participle means that you <b>did</b> something, but it was not necessary. It was a waste of time, money or effort: I <b>needn't have cooked</b> so much food. Only four people came. (I cooked a lot of food, but it wasn't necessary.) You <b>needn't have brought</b> a present, but thank you! Needn't have is a past modal (order 4): a modal verb, then have, then the past participle. It is the same for every subject, and there is no to: She needn't have worried, not She needn't to have worried.",
    "<b>Didn't need to</b> and the base form means that something was not necessary. We usually use it when the person <b>didn't do</b> it: The museum was free, so we <b>didn't need to pay</b>. But we can also use it when the person did it: I <b>didn't need to take</b> a taxi, but I took one because it was raining. So didn't need to fits <b>whether or not</b> the action happened, and needn't have is only for something that did happen. <b>Didn't have to</b> means the same as didn't need to.",
    "Needn't have is more common in British English. In American English, people often use didn't need to or didn't have to for both meanings.",
    "Don't use mustn't have for this. Mustn't means that something is not allowed (A2), so it doesn't say that something was unnecessary: I <b>needn't have</b> worried, not I mustn't have worried.",
  ].join("\n\n"),

  form: [
    "needn't have + past participle → I did it, but it wasn't necessary: I needn't have cooked so much.",
    "didn't need to + base form → it wasn't necessary (usually: I didn't do it): We didn't need to pay.",
    "didn't have to + base form = didn't need to",
    "not: needn't to have · not: didn't need pay · not: mustn't have (for not necessary)",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>needn't have cooked</b> so much food. Only four people came.",
      why: "I cooked a lot, but it wasn't necessary, so we use <b>needn't have</b> and the past participle.",
    },
    {
      sentence: "You <b>needn't have brought</b> a present, but thank you!",
      why: "The person brought a present, which wasn't necessary. This is a polite way to say thank you.",
    },
    {
      sentence: "The museum was free, so we <b>didn't need to pay</b>.",
      why: "Paying wasn't necessary, and we didn't pay. <b>Didn't need to</b> is followed by the base form.",
    },
    {
      sentence: "I <b>didn't need to take</b> a taxi, but I took one because it was raining.",
      why: "<b>Didn't need to</b> can also be used when the person did the action. The rest of the sentence tells us that I took a taxi.",
    },
    {
      sentence: "We <b>didn't have to</b> wait long. The doctor saw us at once.",
      why: "<b>Didn't have to</b> means the same as didn't need to: waiting a long time wasn't necessary.",
    },
  ],

  pitfall: {
    wrong: "You needn't to have bought me flowers.",
    right: "You <b>needn't have bought</b> me flowers.",
    why: "Needn't is a modal verb, so there is no to after it: <b>needn't have</b> and the past participle.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I took a big umbrella, but it didn't rain at all. I ___ it.",
      options: ["mustn't have taken", "needn't take", "can't have taken", "needn't have taken"],
      answer: 3,
      feedback:
        "I took the umbrella, but it wasn't necessary, so we use needn't have and the past participle: I needn't have taken it. I didn't need to take it is also correct. Mustn't is for things that are not allowed, needn't take is about now or the future, and can't have is for being sure that something didn't happen.",
    },
    {
      kind: "choice",
      stem: "Which sentence tells us that we booked a table, but that it wasn't necessary?",
      options: ["We didn't need to book a table.", "We needn't have booked a table.", "We didn't have to book a table."],
      answer: 1,
      feedback:
        "Needn't have and the past participle means that we did it, but it wasn't necessary: We needn't have booked a table. Didn't need to and didn't have to say that it wasn't necessary, but they don't tell us if we booked or not.",
    },
    {
      kind: "gap",
      stem: "The museum was free, so we ___ anything. We just walked in. (pay + not, need)",
      answers: ["didn't need to pay", "did not need to pay", "didn't have to pay", "did not have to pay"],
      feedback:
        "We didn't pay, because it wasn't necessary, so we use didn't need to and the base form: We didn't need to pay anything. Didn't have to pay is also correct. Needn't have paid would mean that we paid, but we just walked in.",
    },
    {
      kind: "gap",
      stem: "I ___ so early this morning. When I got to work, the meeting had been cancelled! (get up, needn't)",
      answers: ["needn't have got up", "need not have got up", "needn't have gotten up", "need not have gotten up"],
      feedback:
        "I got up early, but it wasn't necessary, so we use needn't have and the past participle: I needn't have got up so early. Gotten is the American past participle of get, so I needn't have gotten up is also correct.",
    },
    {
      kind: "mistake",
      tokens: ["You", "needn't", "have", "buy", "me", "a", "present,", "but", "thank", "you!"],
      wrongIndex: 3,
      correction: "bought",
      feedback:
        "After needn't have, we need the past participle: You needn't have bought me a present, but thank you! Buy is irregular: buy → bought → bought.",
    },
    {
      kind: "mistake",
      tokens: ["I", "mustn't", "have", "cooked", "so", "much", "food.", "Only", "three", "people", "came."],
      wrongIndex: 1,
      correction: "needn't",
      feedback:
        "I cooked a lot of food, but it wasn't necessary, so we use needn't have: I needn't have cooked so much food. Mustn't is for things that are not allowed, so it doesn't fit.",
    },
  ],

  levelRationale:
    "English Grammar Profile: needn't have and the past participle for something that was done but was not necessary, and didn't need to for something that was not necessary, are B2 points. This is the modal-obligation family's B2 topic after A2 should-and-must, and it builds on A2 have-to's not necessary for don't have to and not allowed for mustn't. Following Swan, didn't need to is taught as fitting whether or not the action happened, and needn't have only for an action that happened, so the choice that asks which sentence shows the action happened has one answer, and the umbrella choice offers no didn't need to option. The no-necessity gap has We just walked in, so needn't have paid does not fit. Should have and shouldn't have for criticism are left to C1, so the topic stays at six questions.",

  sourceNotes:
    "english_grammar.txt, # Can't have and needn't have: needn't have + past participle for something that was unnecessary agrees with Swan; the note does not say that the action happened, so this topic adds that from Swan. Its can't have half is taught in the describing-certainty-in-the-past topic (order 4). The example You're all natural trainer should be You're a natural trainer. ## Modal verb (obligation 1) lists needn't without a past form. Didn't need to, didn't have to, the British and American note, no to after needn't, and the contrast with mustn't are authored from Swan, Practical English Usage.",
};
