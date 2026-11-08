import type { PhraseTopic } from "../../schema";

export const givingAndReceivingFeedback: PhraseTopic = {
  slug: "giving-and-receiving-feedback",
  title: "Giving and receiving feedback: Well done!, You might want to…",
  summary: "Praise a colleague's work, accept praise with Thank you. I appreciate that., and make a soft suggestion with You might want to… or It might be worth…",
  level: "b2",
  category: "speaking",
  shape: "phrases",
  order: 30,

  explanation: [
    "<b>Feedback</b> is what someone tells you about your work: what was good, and what could be better. At work, people often give feedback after a presentation, a report or a project. Remember: register means how formal or informal your words are. Most feedback phrases are neutral.",
    "<b>Giving praise.</b> To praise someone means to say that they did something well. Say it, and say what was good, so it sounds real: <b>Well done!</b> <b>You did a great job</b> on the report. I thought your presentation <b>went really well</b>. I was really <b>impressed by</b> your slides. Impressed with is also correct. With colleagues you know well, Nice one! and Great stuff! are informal.",
    "<b>Answering praise.</b> In English, people usually accept praise with a thank-you. Saying No, it was terrible can sound strange, as if you don't believe the other person. Say <b>Thank you. I appreciate that.</b> That's good to hear. <b>I'm glad you thought it went well.</b> If other people helped, you can share the praise: It was a team effort. With friends, Thanks! is informal.",
    "<b>Making a suggestion.</b> When something could be better, a direct sentence like The slides are boring can sound rude. So we make it softer, with the hedges from order 21. Remember: making a statement less strong or less sure is called hedging. <b>You might want to</b> + the base form is a soft suggestion, not a guess about what the other person wants: You might want to add a few pictures. <b>It might be worth</b> + the gerund says that something could help: It might be worth checking the numbers once more. Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund. As in B1 giving advice, <b>Maybe you could</b>… is also soft and friendly. <b>I'd say</b> (order 21) makes an opinion softer: I'd say the middle part was a bit long.",
    "A good way to give feedback is to start with something positive, then make one or two soft suggestions: I really liked your opening. You might want to make the ending a bit shorter, though. <b>It's just a thought, but</b>… makes a suggestion even softer: It's just a thought, but could we start with the results? To a manager or a client, <b>I was wondering whether</b>… is very polite, as in B1 indirect and polite questions.",
    "<b>Receiving a suggestion.</b> Thank the person, and show that you will think about it: Thank you for the feedback. I'll work on that. That's a fair point. If the feedback isn't clear, ask for an example: Could you give me an example?",
  ].join("\n\n"),

  situations: [
    {
      situation: "Giving praise",
      phrases: ["Well done!", "You did a great job on the report.", "I thought your presentation went really well.", "I was really impressed by your slides."],
      register: "neutral",
    },
    {
      situation: "Giving praise to a colleague you know well",
      phrases: ["Nice one!", "Great stuff!", "That was brilliant!"],
      register: "informal",
    },
    {
      situation: "Giving praise in a formal letter or a written review",
      phrases: ["Your contribution to the project has been excellent.", "I would like to thank you for all your hard work this year."],
      register: "formal",
    },
    {
      situation: "Answering praise",
      phrases: ["Thank you. I appreciate that.", "That's good to hear.", "I'm glad you thought it went well.", "It was a team effort."],
      register: "neutral",
    },
    {
      situation: "Answering praise from a friend",
      phrases: ["Thanks, that's really nice of you!", "Thanks! I'm really pleased with it."],
      register: "informal",
    },
    {
      situation: "Making a suggestion softly",
      phrases: [
        "You might want to add a few pictures.",
        "It might be worth checking the numbers once more.",
        "Maybe you could slow down a little.",
        "It's just a thought, but could we start with the results?",
      ],
      register: "neutral",
    },
    {
      situation: "Making a suggestion to a manager or a client",
      phrases: ["I was wondering whether we could add a short summary.", "I wonder if it might be better to start the campaign earlier."],
      register: "formal",
    },
    {
      situation: "Receiving a suggestion",
      phrases: ["Thank you for the feedback. I'll work on that.", "That's a fair point.", "Could you give me an example?"],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "A colleague's report is good, but it is too long. You want to make a suggestion politely. What do you say?",
      options: [
        "Your report is too long. Cut it.",
        "Well done! It's perfect.",
        "Thank you. I appreciate that.",
        "You might want to make the report a little shorter.",
      ],
      answer: 3,
      feedback:
        "You might want to… is a soft suggestion, so it is polite. Your report is too long. Cut it. is very direct, and it can sound rude. Well done! It's perfect. is praise, but you think the report needs to change. Thank you. I appreciate that. answers praise.",
    },
    {
      kind: "choice",
      stem: "Your manager says: Your presentation was excellent. Which answer is the most natural?",
      options: ["Thank you. I appreciate that.", "No, it was terrible.", "Yes, I know."],
      answer: 0,
      feedback:
        "In English, people usually accept praise with a thank-you: Thank you. I appreciate that. No, it was terrible can sound as if you don't believe your manager, and Yes, I know can sound rude.",
    },
    {
      kind: "gap",
      stem: "A: Your report was really clear. B: Thank you. I really ___ that. (a verb that means be grateful for)",
      answers: ["appreciate", "appreciated"],
      feedback:
        "I appreciate that means I am grateful for what you said. It is a warm, neutral way to accept praise. I appreciated that is also correct.",
    },
    {
      kind: "gap",
      stem: "I was really ___ by the way you answered the questions. Well done! (impress, one word)",
      answers: ["impressed"],
      feedback:
        "Impressed is the adjective for how you feel: I was impressed by… means I thought it was very good. Impressive describes the thing itself: Your answers were impressive.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a soft suggestion.",
      words: ["slowly.", "want", "a", "You", "speak", "more", "to", "might", "little"],
      answer: "You might want to speak a little more slowly.",
      feedback:
        "You might want to + the base form is a soft suggestion: You might want to speak a little more slowly. A little goes before more slowly, to make the change sound small.",
    },
    {
      kind: "mistake",
      tokens: ["It", "might", "be", "worth", "add", "a", "short", "summary", "at", "the", "end."],
      wrongIndex: 4,
      correction: "adding",
      feedback:
        "After worth, use the gerund, the -ing form: It might be worth adding a short summary at the end. You might want to add… is also correct, with to + the base form.",
    },
  ],

  levelRationale:
    "The CEFR's B2 descriptors for sociolinguistic appropriateness say a learner can express themselves appropriately in situations and avoid crass errors of formulation, and its B2 descriptors for discussion include commenting on other people's work and putting a point of view. Giving praise, accepting it, and making a suggestion softly are that skill at work. The spec (section 8) places giving and receiving feedback at B2 with no family. The suggestions reuse the hedging of order 21 (might, I'd say) and its definition, and the gerund after worth reuses the gerund wording from B1. Maybe you could… keeps its B1 giving-advice meaning, and I was wondering whether… keeps its B1 formal label.",

  sourceNotes:
    "english_grammar.txt, ## Giving feedback and suggestion, has I think it works, but we could change a few things, That's a very good point, It's just a thought, but wouldn't it be better to… and suggestions with you might. ## Giving praise has Well done, You did a good job and I think it went really well on the whole, and ## Responding to praise has I appreciate that, Thanks very much and I'm glad you thought it went well. These agree with Swan, Practical English Usage, and the fixed phrases (Well done, I appreciate that, It's just a thought, but…) are used, with new example sentences. Several lines in the notes have slips: 'I sounds like' should be It sounds like, 'i can see' needs a capital I, and 'I'm glad you though' should be thought. The note's 'you might check the heating will be on' is not standard; You might want to + the base form and It might be worth + the gerund are taught instead, from Swan. Lines in ## Responding to praise about being free on a date (I'm on holiday that week) are answers to a request, not to praise, and are not used. Thanks phrases are labelled informal, as in B2 follow-up emails.",
};
