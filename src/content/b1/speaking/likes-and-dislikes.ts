import type { PhraseTopic } from "../../schema";

export const likesAndDislikes: PhraseTopic = {
  slug: "likes-and-dislikes",
  title: "Likes and dislikes: from I love… to I can't stand…",
  summary: "Say how much you like things, from I love and I'm really into to I don't mind and I can't stand, with a noun or an -ing form after them.",
  level: "b1",
  category: "speaking",
  shape: "phrases",
  order: 37,

  explanation: [
    "There are many ways to say how much you like something. Here are the most common, from the strongest like to the strongest dislike: I love → I really like → I like → I quite like → I don't mind → I don't really like → I don't like → I hate → I can't stand.",
    "<b>I quite like</b> means I like it, but not very much: I quite like jazz. <b>I don't mind</b> means it's OK for me. I don't like it or dislike it: I don't mind walking. <b>I can't stand</b> means I hate it: I can't stand loud music.",
    "After these phrases, use a noun or the gerund: I love <b>pizza</b>. I love <b>cooking</b>. I hate <b>waiting</b>. Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund. After like, love and hate, the infinitive is also possible (order 13): I like to swim in the morning. After don't mind and can't stand, use the gerund.",
    "<b>I'm keen on</b> and <b>I'm into</b> are informal. We use them a lot with friends: I'm really into hip hop. I'm not keen on cold weather. On and into are prepositions, so a verb after them takes -ing: I'm into running. I'm not keen on getting up early. Remember: a preposition is a small word, like in, on or under, that goes before a noun. I'm crazy about and I'm a big fan of are informal too.",
    "To say that you don't like something politely, use a softer phrase: I don't really like horror films. It's not really my thing. I hate and I can't stand are very strong, so be careful when you talk about something that the other person likes.",
    "To ask about likes, say Do you like…?, What do you think of…? or What kind of… do you like? With friends, you can say Are you into…? Answer Do you like…? with Yes, I do or No, not really. Don't answer Yes, I like: like needs something after it.",
    "To react to an idea or a plan, use <b>sound</b>: That sounds great! I like the sound of that. I don't like the sound of that.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Saying you like something",
      phrases: ["I love cooking for my friends.", "I really like this song.", "I really enjoy working in a team."],
      register: "neutral",
    },
    {
      situation: "Saying you like something, with friends",
      phrases: ["I'm really into hip hop at the moment.", "I'm crazy about football.", "I'm a big fan of her films."],
      register: "informal",
    },
    {
      situation: "Saying you like something a little, or it's OK",
      phrases: ["I quite like jazz.", "I don't mind doing the washing-up.", "It's OK."],
      register: "neutral",
    },
    {
      situation: "Saying you don't like something, politely",
      phrases: ["I don't really like horror films.", "I don't like getting up early on Sundays."],
      register: "neutral",
    },
    {
      situation: "Saying you don't like something, with friends",
      phrases: ["I'm not keen on cold weather.", "I'm not really into reality shows.", "Football's not really my thing."],
      register: "informal",
    },
    {
      situation: "Saying you really don't like something",
      phrases: ["I hate waiting for buses.", "I can't stand loud music.", "I really can't stand people who talk in the cinema."],
      register: "neutral",
    },
    {
      situation: "Asking about likes",
      phrases: ["Do you like rock music?", "What do you think of the new café?", "What kind of films do you like?"],
      register: "neutral",
    },
    {
      situation: "Asking a friend about likes",
      phrases: ["What sort of music are you into?", "Are you into sport?"],
      register: "informal",
    },
    {
      situation: "Reacting to an idea or a plan",
      phrases: ["That sounds great!", "I like the sound of that.", "I don't like the sound of that."],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence shows the strongest dislike?",
      options: ["I don't mind it.", "I'm not keen on it.", "I can't stand it.", "I don't really like it."],
      answer: 2,
      feedback:
        "I can't stand it means I hate it, so it is the strongest. I'm not keen on it and I don't really like it are soft ways to say no. I don't mind it means it's OK for me.",
    },
    {
      kind: "gap",
      stem: "I don't mind ___ at night, but I prefer to drive in the day. (drive, one word)",
      answers: ["driving"],
      feedback:
        "After don't mind, use the gerund: I don't mind driving at night. Remember the spelling: drive loses its e before -ing.",
    },
    {
      kind: "gap",
      stem: "I'm really ___ yoga at the moment. I do it every morning before work. (a preposition)",
      answers: ["into"],
      feedback:
        "I'm into yoga is an informal way to say I like yoga a lot, and I do it often. Really makes it stronger: I'm really into yoga.",
    },
    {
      kind: "gap",
      stem: "My brother loves spicy food, but I'm not very keen ___ it.",
      answers: ["on"],
      feedback:
        "We say keen on + a noun or the gerund: I'm not very keen on it. I'm not keen on is an informal and polite way to say I don't like.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to ask your friend's opinion.",
      words: ["think", "new", "What", "of", "you", "song?", "his", "do"],
      answer: "What do you think of his new song?",
      feedback:
        "What do you think of…? asks for someone's opinion. What comes first, then do you think, then of + the thing: What do you think of his new song?",
    },
    {
      kind: "mistake",
      tokens: ["A:", "Do", "you", "like", "jazz?", "B:", "Yes,", "I", "like."],
      wrongIndex: 8,
      correction: "do.",
      feedback:
        "Answer Do you like…? with a short answer: Yes, I do or No, I don't. Like needs something after it, so Yes, I like is wrong. You can also say Yes, I like it, or Yes, I love it.",
    },
  ],

  levelRationale:
    "Among its B1 points, the English Grammar Profile has the gerund after phrases like don't mind and can't stand, and after a preposition, as in keen on doing. The CEFR's B1 descriptors include saying what you like and don't like, and reacting to other people's ideas in conversation. The topic builds on gerunds and infinitives (order 13).",

  sourceNotes:
    "english_grammar.txt, # Likes and dislikes, lists I'm not keen on, I like the sound of that, That sounds good!, (not) keen on / crazy about / fond of + verb + -ing, and love / like + noun or -ing. These agree with Swan, Practical English Usage, and are used, except fond of, which is less common in everyday speech today and is left out. Its 'I'm not sure i like the sound like that' should be I'm not sure I like the sound of that, and 'I'm no sure' should be I'm not sure. The scale from love to can't stand, and I quite like, I don't mind and I'm into, are added from Swan.",
};
