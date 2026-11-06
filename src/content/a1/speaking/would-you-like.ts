import type { PhraseTopic } from "../../schema";

export const wouldYouLike: PhraseTopic = {
  slug: "would-you-like",
  title: "Would you like…? Offers and invitations",
  level: "a1",
  category: "speaking",
  shape: "phrases",
  order: 24,

  explanation: [
    "<b>Would you like…?</b> is a polite way to ask a question. Polite means kind and correct with other people. We use it to offer something (to ask if a person wants it) and to invite someone (to ask them to come with us or do something with us).",
    "Would is the same for every person: I would, you would, she would. The short form is <b>'d</b>: I'd like = I would like. After would, the verb is in the base form, with no -s: Would she like a drink?, not Would she likes a drink? Remember: the base form is the verb with nothing added. It is the same after can.",
    "To offer a thing, use <b>Would you like</b> + a noun: Would you like a cup of tea? Would you like some cake? Remember: a noun is a word for a person, a thing, an animal or a place.",
    "To invite someone, use <b>Would you like to</b> + the base form: Would you like to come to my party? Would you like to have dinner with us? Do not forget to: not Would you like come…?",
    "To say yes to a thing, say <b>Yes, please.</b> To say no, say <b>No, thank you</b> or No, thanks. Do not answer Yes, I like.",
    "To say yes to an invitation, say <b>Yes, I'd love to</b> or Yes, I'd like that. To say no politely, say sorry and give a reason: I'm sorry, I can't. I'm busy on Saturday. Or: I'd love to, but I can't.",
    "Would you like…? and Do you like…? are different. <b>Do you like</b> coffee? asks about always: do you enjoy coffee in general? The answer is Yes, I do or No, I don't. <b>Would you like</b> a coffee? asks about now: do you want one now? The answer is Yes, please or No, thank you.",
    "Would you like…? means the same as Do you want…?, but it is more polite. Use it with people you do not know well, at work and with guests. With friends and family, Do you want…? is fine, and people often say only Want a coffee?",
    "You can also use <b>I'd like</b> to ask for something politely: I'd like a glass of water, please. You will use this again in the next topic, about ordering food.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Offering something to eat or drink",
      phrases: ["Would you like a cup of tea?", "Would you like some water?", "Would you like something to eat?"],
      register: "neutral",
    },
    {
      situation: "Saying yes or no to an offer",
      phrases: ["Yes, please.", "No, thank you.", "Yes, please. I'd love a coffee."],
      register: "neutral",
    },
    {
      situation: "Inviting someone",
      phrases: [
        "Would you like to come to my party?",
        "Would you like to have dinner with us on Saturday?",
        "Would you like to go to the cinema tonight?",
      ],
      register: "neutral",
    },
    {
      situation: "Saying yes to an invitation",
      phrases: ["Yes, I'd love to.", "Yes, I'd like that. Thank you."],
      register: "neutral",
    },
    {
      situation: "Saying no to an invitation",
      phrases: ["I'm sorry, I can't. I'm busy on Saturday.", "I'd love to, but I can't."],
      register: "neutral",
    },
    {
      situation: "Asking for something politely",
      phrases: ["I'd like a glass of water, please.", "I'd like to go home now."],
      register: "neutral",
    },
    {
      situation: "Offering something to a friend",
      phrases: ["Do you want a coffee?", "Want some cake?", "No, thanks. I'm fine."],
      register: "informal",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Your new neighbour is at your home for the first time. You want to give her a drink. What is the polite question?",
      options: ["Do you like a coffee?", "Would you like a coffee?", "Would you like drink a coffee?"],
      answer: 1,
      feedback:
        "To offer something now, say Would you like a coffee? Do you like coffee? asks if she enjoys coffee in general. It is not an offer. Would you like drink is wrong: before a verb, we need to (Would you like to drink…?).",
    },
    {
      kind: "choice",
      stem: "Someone at work asks: Would you like some cake? You want some. What do you say?",
      options: ["Yes, please.", "Yes, I like.", "Yes, I would like."],
      answer: 0,
      feedback:
        "To say yes to an offer, say Yes, please. Yes, I like and Yes, I would like are wrong: like needs something after it. To say no, say No, thank you.",
    },
    {
      kind: "gap",
      stem: "Would you like ___ come to the cinema with us on Friday?",
      answers: ["to"],
      feedback:
        "To invite someone to do something, use Would you like to + the base form: Would you like to come…? Without to, the question is wrong.",
    },
    {
      kind: "gap",
      stem: "A: Would you like to have lunch with me tomorrow? B: Yes, I'd ___ to. (one word)",
      answers: ["love", "like"],
      feedback:
        "Yes, I'd love to is the usual way to say yes to an invitation. Yes, I'd like to is also correct. Yes, I'd be happy to is correct too, but it has two words. I'd is the short form of I would.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to offer a drink.",
      words: ["like", "tea?", "Would", "some", "you"],
      answer: "Would you like some tea?",
      feedback:
        "In the question, would comes first, then you, then like and the thing you offer: Would you like some tea?",
    },
    {
      kind: "mistake",
      tokens: ["Would", "your", "brother", "likes", "a", "drink?"],
      wrongIndex: 3,
      correction: "like",
      feedback:
        "After would, the verb has no -s, even with he and she: Would your brother like a drink? It is the same after can: She can swim, not She can swims.",
    },
  ],

  levelRationale:
    "The English Grammar Profile has would like among its first points for would, at A1: I'd like for wants and Would you like…? for offers and invitations. The CEFR's A1 descriptors also include simple polite forms like please and thank you. This topic needs the base form and can, which A1 grammar has already taught.",

  sourceNotes:
    "english_grammar.txt, # Would you like to +v0 / N, has two points: would you like + noun to offer something, and would you like to + verb to invite. Both agree with Swan, Practical English Usage, and are the base of this topic. The answers (Yes, please; I'd love to), the Do you like…? contrast and the register of Do you want…? are new, checked against Swan.",
};
