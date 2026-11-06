import type { RuleTopic } from "../../schema";

export const goingTo: RuleTopic = {
  slug: "going-to",
  title: "Going to: plans and predictions",
  summary: "Talk about your plans with going to: I'm going to learn to drive. Say what you can see will happen: Look, it's going to rain.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 4,

  explanation: [
    "We use <b>going to</b> to talk about the future. It has three parts: <b>am</b>, <b>is</b> or <b>are</b>, then <b>going to</b>, then the base form of a verb: I am going to study. She is going to buy a car. Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    "We often use short forms: I'm going to, you're going to, he's going to, we're going to, they're going to. Remember: the sign ' shows that letters are not there.",
    "We use going to for <b>plans</b>: things that we decided before now. I<b>'m going to visit</b> my aunt this summer. (I decided this last week.) We<b>'re going to paint</b> the kitchen. A plan with going to is often only in our head: we want to do it, but we have not fixed a time or a place with other people yet.",
    "We also use going to when we can see <b>now</b> that something is coming: Look at that black sky! It<b>'s going to rain</b>. Be careful! You<b>'re going to fall</b>. This is a prediction: we say what we think will happen. Here the reason is something that we can see now.",
    "To say no, put <b>not</b> after am, is or are: I<b>'m not going to</b> watch TV tonight. He <b>isn't going to</b> come.",
    "To ask a question, put am, is or are before the subject. Remember: the subject is the person or thing that the sentence is about. <b>Are</b> you <b>going to</b> stay at home? What <b>is</b> she <b>going to</b> do? In short answers, use am, is or are: Yes, I am. No, she isn't. In yes answers, do not use a short form at the end: Yes, I am, not Yes, I'm.",
    "With the verb go, we often do not say going to go. We say going and the place: I'm going to go to the beach, or I'm going to the beach. Both are correct, and both are very common.",
    "We need all three parts. Do not leave out am, is or are, and do not leave out to: She is going to call, not She going to call or She is going call.",
  ].join("\n\n"),

  form: [
    "I am ('m) going to + base form · you/we/they are ('re) going to · he/she/it is ('s) going to",
    "I'm not going to · you/we/they aren't going to · he/she/it isn't going to",
    "Am I going to …? · Are you/we/they going to …? · Is he/she/it going to …?",
    "Yes, I am. · No, she isn't.",
  ].join("\n"),

  examples: [
    {
      sentence: "I<b>'m going to learn</b> to drive this year.",
      why: "This is a plan: I decided it before now. With I, we use <b>'m</b> (am), then going to and the base form, learn.",
    },
    {
      sentence: "My parents <b>are going to sell</b> their house.",
      why: "My parents are two people (they), so we use <b>are</b>. Sell is in the base form, with no -s.",
    },
    {
      sentence: "The sky is very dark. It<b>'s going to rain</b>.",
      why: "We can see the dark sky now, so we know that rain is coming. For this kind of prediction, we use <b>going to</b>.",
    },
    {
      sentence: "Watch out! That glass <b>is going to fall</b>.",
      why: "The glass is at the edge of the table now, so we can see what will happen next. That is why we use <b>is going to</b>.",
    },
    {
      sentence: "We<b>'re not going to</b> have a party this year.",
      why: "To say no, we put <b>not</b> after are: we're not going to. We aren't going to is also correct.",
    },
    {
      sentence: "What <b>are</b> you <b>going to</b> wear tonight?",
      why: "In a question, <b>are</b> comes before the subject, you. Going to and the base form, wear, come after the subject.",
    },
  ],

  pitfall: {
    wrong: "I going to study medicine.",
    right: "I<b>'m going to</b> study medicine.",
    why: "Going to needs am, is or are before it. Do not leave it out: I am going to, or I'm going to.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "We ___ a new car next month. We have the money now. (buy, going to)",
      answers: ["are going to buy", "'re going to buy"],
      feedback:
        "This is a plan, so we use going to. With we, we use are, then going to and the base form: We are going to buy a new car, or We're going to buy a new car.",
    },
    {
      kind: "gap",
      stem: "I ___ TV tonight. I have a lot of homework. (watch + not, going to)",
      answers: ["am not going to watch", "'m not going to watch"],
      feedback:
        "With I, we use am. To say no, put not after am: I am not going to watch TV tonight, or I'm not going to watch TV tonight. We do not say amn't.",
    },
    {
      kind: "choice",
      stem: "Look at that man on the ice! He ___.",
      options: ["falls", "is going fall", "is going to fall", "going to fall"],
      answer: 2,
      feedback:
        "We can see now what will happen next, so we use going to: He is going to fall. We need all three parts: is, going to, and the base form. Is going fall has no to, and going to fall has no is. Falls is the present simple, for things that happen again and again.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["going", "stay?", "you", "Where", "to", "are"],
      answer: "Where are you going to stay?",
      feedback:
        "The question word comes first, then are, then the subject, then going to and the base form: Where are you going to stay?",
    },
    {
      kind: "mistake",
      tokens: ["She", "is", "going", "to", "studies", "medicine", "at", "university."],
      wrongIndex: 4,
      correction: "study",
      feedback:
        "After going to, the verb is in the base form, with no -s: She is going to study medicine at university. The base form never takes -s, even when the subject is she.",
    },
    {
      kind: "choice",
      stem: "My parents ___ visit us on Sunday.",
      options: ["going to", "are going to", "are go to", "is going to"],
      answer: 1,
      feedback:
        "My parents are two people (they), so we use are: My parents are going to visit us on Sunday. Going to needs are before it. Is is for one person or thing, and are go to is not correct.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A2: be going to for plans and for predictions from what we can see now, in statements, negatives and questions, is an A2 point. It comes before will on this site, so that the will topic can compare the two. Going to in the past (I was going to call you) is left to a later level.",

  sourceNotes:
    "english_grammar.txt, # Make plans for future and # Will and going to. The form be going to + base form, plans, intention without arrangements, and predictions from evidence ('Look at those clouds. It's going to rain soon') agree with Swan, and this topic follows them. # Will and going to says we use both 'to refer things that are happening soon'. Swan does not limit going to to the near future (One day I'm going to write a book), so this topic does not say soon for plans. The note's example 'he's going to the Edinburgh Festival' has no second go. Swan says that we often say going (to a place) instead of going to go, and this topic explains that. Short forms, negatives, questions, short answers and the three needed parts are authored from Swan, Practical English Usage.",
};
