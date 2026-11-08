import type { RuleTopic } from "../../schema";

export const advancedModality: RuleTopic = {
  slug: "advanced-modality",
  family: "modal-deduction",
  title: "Advanced modality: That'll be Tom, she's bound to win, it may well rain",
  summary: "That'll be the postman. She's bound to win. It may well rain. They should have landed by now. Say exactly how likely you think something is.",
  level: "c1",
  category: "grammar",
  shape: "rule",
  order: 1,

  explanation: [
    "In B1 and B2, we used must, can't, might, may and could to guess about the present and the past: She must be tired. He might have missed the bus. Remember: a guess like this is called a <b>deduction</b>. Remember: a modal verb is a small verb that goes before the base form of another verb and adds a meaning to it. This topic adds more ways to say how likely you think something is, from sure to just possible.",
    "<b>Will</b> can make an assumption: something you believe is true, from what you know, without checking. The doorbell rings at the time the postman always comes: <b>That'll be</b> the postman. Don't call him now: he<b>'ll be</b> asleep. For the past, use <b>will have</b> and the past participle: They left at six, so they<b>'ll have arrived</b> by now. Remember: the past participle is the form of a verb that comes after have: seen, gone, finished.",
    "<b>Would</b> makes the assumption a little less sure, or puts it in the past: 'Who's the man with Anna?' 'That <b>would be</b> her brother, I think.' In 1960, my grandmother <b>would have been</b> about twenty.",
    "<b>Be bound to</b> + the base form says that you are sure something will happen or is true: She's the best player in the club. She<b>'s bound to</b> win. Don't lend him your car: he<b>'s bound to</b> scratch it. Be bound to is not a modal verb, so be changes with the subject and the tense: I'm bound to, they were bound to.",
    "<b>Should</b> and <b>ought to</b> + the base form say what we <b>expect</b>, because it is normal or planned: I posted it on Monday, so it <b>should arrive</b> by Thursday. The roads <b>ought to be</b> quiet at this time of night. This is less sure than will or must: we expect it, but we can't be sure. Should is much more common; ought to is a little more formal. We usually use should for something good or neutral that we expect. For something bad, say It'll probably rain, not usually It should rain, which can sound as if you want rain.",
    "<b>May well</b>, <b>might well</b> and <b>could well</b> + the base form say that something is <b>quite likely</b>: more likely than may, might or could alone. Take a coat. It <b>may well</b> rain later. She <b>could well</b> be right. But may well does not mean certain: if you are sure, use will, must or be bound to. As in B1, <b>may</b>, <b>might</b> and <b>could</b> alone say that something is possible, but you are not sure.",
    "So the scale runs from sure to possible: <b>will</b>, <b>must</b> and <b>be bound to</b> (sure) → <b>should</b> and <b>ought to</b> (expected) → <b>may well</b>, <b>might well</b> and <b>could well</b> (quite likely) → <b>may</b>, <b>might</b> and <b>could</b> (possible).",
    "<b>Should have</b> + past participle (ought to have is also correct) has two meanings. First, an expectation about the past, when you don't know yet: Their flight left at nine, so they <b>should have landed</b> by now. Second, something that was expected or right but didn't happen, often as a criticism: The parcel <b>should have arrived</b> yesterday, but it didn't. You <b>should have told</b> me! I'd have helped. <b>Shouldn't have</b> criticises something that did happen: You <b>shouldn't have shouted</b> at her. The situation shows which meaning is meant.",
    "For being sure about the past, use must have and can't have, as in B2: It must have rained. She can't have seen us. This topic doesn't change those rules.",
  ].join("\n\n"),

  form: [
    "will / would + base form → assumption: That'll be the postman. · will have + past participle: They'll have arrived.",
    "be bound to + base form → sure: She's bound to win.",
    "should / ought to + base form → expected: It should arrive by Thursday.",
    "may / might / could well + base form → quite likely: It may well rain. · not: certain",
    "may / might / could + base form → possible (B1)",
    "should have / ought to have + past participle → expected, or expected but didn't happen (a criticism): You should have told me.",
  ].join("\n"),

  examples: [
    {
      sentence: "Someone's at the door. <b>That'll be</b> Sam: he said he'd come at eight.",
      why: "The speaker is sure from what they know, without checking, so we use <b>will</b> for an assumption.",
    },
    {
      sentence: "Don't worry about the exam. You<b>'re bound to</b> pass: you've worked so hard.",
      why: "The speaker is sure that it will happen, so we use <b>be bound to</b> and the base form. Be changes with the subject: you're.",
    },
    {
      sentence: "The meeting <b>should finish</b> by four, so I can pick you up at five.",
      why: "This is what we expect, because it is planned, so we use <b>should</b>. Ought to finish is also correct, and a little more formal.",
    },
    {
      sentence: "Ask Maria. She <b>may well</b> know the answer.",
      why: "<b>May well</b> says that it is quite likely, but not certain. She may know would be less likely.",
    },
    {
      sentence: "It's nearly midnight. They <b>should have got</b> home by now.",
      why: "This is an expectation about the past, so we use <b>should have</b> and the past participle. We don't know yet if they are home.",
    },
    {
      sentence: "You <b>shouldn't have</b> paid for dinner. It was my turn!",
      why: "You paid, and the speaker thinks it wasn't right, so we use <b>shouldn't have</b> and the past participle for the criticism.",
    },
  ],

  pitfall: {
    wrong: "Look at the sky. It's bound rain this afternoon.",
    right: "Look at the sky. It's <b>bound to</b> rain this afternoon.",
    why: "Bound goes with <b>to</b> and the base form: bound to rain. Be bound to is not a modal verb, so it needs to, unlike should or might.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "The doorbell rings at ten. You ordered a parcel, and the courier always comes at ten. Which sentence shows that you are sure?",
      options: ["That might be the courier.", "That'll be the courier.", "That may well be the courier.", "That could be the courier."],
      answer: 1,
      feedback:
        "You are sure from what you know, without checking, so we use will for an assumption: That'll be the courier. May well says it's quite likely, and might and could say it's possible, so they are less sure.",
    },
    {
      kind: "choice",
      stem: "Which sentence says that the speaker is certain?",
      options: ["She might get the job.", "She may well get the job.", "She could well get the job.", "She's bound to get the job."],
      answer: 3,
      feedback:
        "Be bound to says that the speaker is sure: She's bound to get the job. May well and could well say that it's quite likely, but not certain, and might says it's possible.",
    },
    {
      kind: "gap",
      stem: "I posted the card on Monday, so it ___ arrive by Thursday. (Write the modal for expectation: what normally happens.)",
      answers: ["should", "ought to"],
      feedback:
        "For what we expect, because it is normal, we use should or ought to and the base form: It should arrive by Thursday. It ought to arrive by Thursday is also correct, and a little more formal.",
    },
    {
      kind: "gap",
      stem: "Their flight left at nine and takes two hours. It's half past eleven, so they ___ by now. (land: use the modal for expectation)",
      answers: ["should have landed", "should've landed", "ought to have landed"],
      feedback:
        "This is an expectation about the past, so we use should have and the past participle: They should have landed by now. Ought to have landed is also correct. In speaking, should have is often should've.",
    },
    {
      kind: "gap",
      stem: "You ___ so much cake. No wonder you feel sick! (eat + not: a criticism)",
      answers: ["shouldn't have eaten", "should not have eaten", "shouldn't've eaten", "ought not to have eaten", "oughtn't to have eaten"],
      feedback:
        "You ate the cake, and the speaker thinks it wasn't a good idea, so we use shouldn't have and the past participle: You shouldn't have eaten so much cake. Ought not to have eaten is also correct, and more formal. Eat is irregular: eat → ate → eaten.",
    },
    {
      kind: "mistake",
      tokens: ["You", "should", "have", "came", "with", "us.", "The", "party", "was", "great."],
      wrongIndex: 3,
      correction: "come",
      feedback:
        "After should have, we need the past participle, not the past simple: You should have come with us. Come is irregular: come → came → come.",
    },
    {
      kind: "mistake",
      tokens: ["Don't", "lend", "him", "money.", "He's", "bound", "to", "forgetting", "to", "pay", "you", "back."],
      wrongIndex: 7,
      correction: "forget",
      feedback:
        "Be bound to goes with the base form, not the -ing form: He's bound to forget to pay you back.",
    },
  ],

  levelRationale:
    "The spec (section 8) places advanced modality at C1 as a new point, and the plan makes it the C1 topic of the modal-deduction family, after B1 modals-of-possibility-and-deduction and B2 describing-certainty-in-the-past, with its scope set to degrees of likelihood and expectation (obligation and ability stay at B2). The English Grammar Profile records should for expectation and be bound to from B2, and will for assumptions, may well, might well and could well for something quite likely, and should have for an expectation about the past, at B2 and C1, so this topic brings them together on one scale at C1. Deduction, modal verb and past participle reuse their earlier wording, B1's might, may and could for something possible but not sure is kept, and must have and can't have are named, not retaught. Should and ought to are taught as the same in meaning, and every expectation gap accepts both; the criticism gap is negative, because could have and might have also criticise in the positive (You could have told me!). Each gap names the meaning in its cue, so will and must do not fit. The classic error, may well for certain, is tested in the certainty choice, where may well and could well are the distractors.",

  sourceNotes:
    "english_grammar.txt has no section on advanced modality (a new point in spec section 8). # Modal verb, ## Modal verbs 2 lists should for expectation and might for weaker possibility, and ## Modal verb (obligation 1) says that ought to sounds a little more formal than should; both agree with Swan. The topic is authored from Swan, Practical English Usage, entries will (assumptions: That'll be the postman; will have + past participle), would (less sure assumptions), bound to, should (expectation, and not usually for unwelcome things), ought (the same meaning as should, less common), may and might (may well, might well, could well), and should have (expectation about the past, and criticism). Swan also gives could have and might have for criticism, so the criticism gap is negative. Must have and can't have are taught in B2 describing-certainty-in-the-past and are not changed here.",
};
