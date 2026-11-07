import type { PhraseTopic } from "../../schema";

export const givingAdvice: PhraseTopic = {
  slug: "giving-advice",
  title: "Giving advice: You should…, Why don't you…?",
  summary: "Help a friend with a problem: You should…, Why don't you…?, If I were you, I'd…, Have you tried…? and, for a warning, You'd better…",
  level: "b1",
  category: "speaking",
  shape: "phrases",
  order: 36,

  explanation: [
    "When a friend or a colleague has a problem, you can give <b>advice</b>: you say what you think they should do. Advice is uncountable: some advice or a piece of advice, not an advice. The verb is <b>advise</b>, with s.",
    "<b>Should</b> + the base form is the most common way: You <b>should</b> see a doctor. You <b>shouldn't</b> work so late. Remember: the base form is the verb as you see it in a dictionary, with nothing added. To sound softer, start with I think: I think you should talk to him. For negative advice, I don't think you should… is more common than I think you shouldn't…: I don't think you should buy it.",
    "<b>Why don't you</b> + the base form? is a friendly suggestion. It isn't a real question about a reason: Why don't you ask your teacher? means I think you could ask your teacher. There is no to: Why don't you ask…?, not Why don't you to ask…? <b>Maybe you could</b> + the base form is also soft and friendly: Maybe you could take a short break.",
    "<b>If I were you, I'd</b> + the base form is the second conditional (order 9). You imagine that you are the other person: If I were you, I'd talk to her. If I were you, I wouldn't worry. In informal speech, If I was you is also common.",
    "<b>Have you tried</b> + the gerund? suggests something to test, to see if it helps, like try + -ing (order 13): Have you tried drinking warm milk? Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.",
    "<b>You'd better</b> + the base form is strong advice. It is often a warning that something bad will happen if the person doesn't do it: You'd better hurry, or you'll miss the bus. Here 'd means had, but it is about now or the future. There is no to: You'd better go, not You'd better to go. The negative is You'd better not. It can sound too strong to a manager or a stranger, so we use it mostly with friends and family. About yourself, I'd better… is fine with anyone: I'd better go now.",
    "In formal writing, for example a notice for hotel guests, we often use <b>recommend</b> + -ing, or <b>be advised to</b>: We recommend booking early. Guests are advised to arrive before 6 p.m.",
    "To ask for advice, say What should I do?, What would you do? or Do you think I should…? To answer, say That's a good idea or Thanks, I'll try that. If you have already tried it, say so politely: I've already tried that, but it didn't work.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Asking for advice",
      phrases: ["What should I do?", "What would you do?", "Do you think I should call him?", "Can I ask your advice about something?"],
      register: "neutral",
    },
    {
      situation: "Giving advice",
      phrases: ["I think you should see a doctor.", "You shouldn't work so late.", "I don't think you should buy it."],
      register: "neutral",
    },
    {
      situation: "Making a suggestion",
      phrases: ["Why don't you ask your teacher?", "Maybe you could take a short break.", "Have you tried drinking warm milk?"],
      register: "neutral",
    },
    {
      situation: "Imagining you are the other person",
      phrases: ["If I were you, I'd talk to her.", "If I were you, I wouldn't worry about it."],
      register: "neutral",
    },
    {
      situation: "Giving strong advice or a warning to a friend",
      phrases: ["You'd better hurry, or you'll miss the bus.", "You'd better not tell Mum!"],
      register: "informal",
    },
    {
      situation: "Giving advice in a notice or a formal letter",
      phrases: ["We recommend booking a table in advance.", "Guests are advised to arrive before 6 p.m."],
      register: "formal",
    },
    {
      situation: "Answering advice",
      phrases: ["That's a good idea.", "Thanks, I'll try that.", "I've already tried that, but it didn't work."],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Your friend says: I can't sleep at night. Which reply is correct?",
      options: [
        "Why don't you drink less coffee?",
        "You should drinking less coffee.",
        "Why you don't drink less coffee?",
        "Why don't you to drink less coffee?",
      ],
      answer: 0,
      feedback:
        "Why don't you + the base form? is a friendly suggestion: Why don't you drink less coffee? After should, use the base form too, so should drinking is wrong. Why you don't… has the wrong order for a question, and there is no to after Why don't you.",
    },
    {
      kind: "gap",
      stem: "A: Should I take the job in London? B: If I ___ you, I'd take it. It's a great chance.",
      answers: ["were", "was"],
      feedback:
        "If I were you, I'd… is the second conditional (order 9), used for advice. Were is often preferred, especially in writing. If I was you is also correct and common in informal speech.",
    },
    {
      kind: "gap",
      stem: "You ___ better take an umbrella. It's going to rain any minute. (one word)",
      answers: ["had", "'d"],
      feedback:
        "You had better, or You'd better, + the base form is strong advice or a warning: You'd better take an umbrella. We don't say should better or would better.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a friendly suggestion.",
      words: ["for", "ask", "manager", "Why", "help?", "you", "your", "don't"],
      answer: "Why don't you ask your manager for help?",
      feedback:
        "Why don't you comes first, then the base form and the rest: ask your manager for help. We ask a person for a thing: ask your manager for help.",
    },
    {
      kind: "mistake",
      tokens: ["Have", "you", "tried", "turn", "it", "off", "and", "on", "again?"],
      wrongIndex: 3,
      correction: "turning",
      feedback:
        "Have you tried + the gerund? suggests something to test: Have you tried turning it off and on again? With this meaning, try takes -ing, as in order 13.",
    },
  ],

  levelRationale:
    "The English Grammar Profile has should for advice at A2, and had better for advice and warnings and If I were you for advice among its B1 points. The CEFR's B1 descriptors include giving and asking for advice and making suggestions in everyday conversation. The topic uses the second conditional (order 9) and try + -ing (order 13), which come earlier in B1.",

  sourceNotes:
    "english_grammar.txt, # Giving advice 1 and # Giving advice 2 mix advice (You should try to get there before 10, It's a good idea to get there before 10) with rules and obligation (You need to tell someone, You have to fill in a small form, Clothes must be handed in). Need to, have to and must say what is necessary or a rule, not what is a good idea, so they are left out of this topic. 'the won't be cleaned' should be they won't be cleaned. Why don't you…?, If I were you, Have you tried…? and You'd better are added from Swan, Practical English Usage, which also records had better as strong advice, used mostly in informal speech.",
};
