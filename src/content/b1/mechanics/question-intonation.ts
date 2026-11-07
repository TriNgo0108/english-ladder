import type { RuleTopic } from "../../schema";

export const questionIntonation: RuleTopic = {
  slug: "question-intonation",
  family: "intonation",
  title: "Question intonation: rising and falling",
  summary:
    "Does your voice go up or down at the end of a question? Learn the usual pattern for yes/no questions, wh- questions, question tags and You're leaving?",
  level: "b1",
  category: "mechanics",
  shape: "rule",
  order: 44,

  explanation: [
    "<b>Intonation</b> is the way your voice goes up and down when you speak. At the end of a question, the voice usually goes up or down, and this can change the meaning. This site has no sound, so after an example we write <b>(rising)</b> when the voice goes up at the end, and <b>(falling)</b> when it goes down. The word in bold is where the voice moves.",
    "English intonation has many exceptions, and people often change it to show their feelings. So the rules in this topic say <b>usually</b>: they tell you what most speakers do most of the time.",
    "A yes/no question is a question that we can answer with yes or no. In a yes/no question, the voice usually goes up at the end: Are you <b>ready</b>? (rising) Can you <b>swim</b>? (rising)",
    "A wh- question starts with a question word, like what, where, when, who, why or how, and its answer is not yes or no. In a wh- question, the voice usually goes down at the end: Where do you <b>live</b>? (falling) Why are you <b>late</b>? (falling) Sometimes speakers use a rising voice here to sound extra friendly, or to ask the other person to say something again.",
    "<b>Question tags</b> (order 19) can rise or fall, and the meaning changes. If you are not sure and you really want to know, the tag is a real question, and the voice usually goes up on the tag: The meeting is on Friday, <b>isn't it</b>? (rising) If you are almost sure and you only want the other person to agree, the voice usually goes down on the tag: This soup is delicious, <b>isn't it</b>? (falling) We often use a falling tag to start a friendly conversation.",
    "You can also make a question from a statement without changing the words. Keep the word order of the statement, but let your voice go up at the end: You're <b>leaving</b>? (rising) This often shows surprise, or checks something you have just heard. A statement usually falls: You're <b>leaving</b>. (falling) In writing, the question mark shows the difference.",
  ].join("\n\n"),

  form: [
    "yes/no question → voice usually goes up · Are you ready? (rising)",
    "wh- question → voice usually goes down · Where do you live? (falling)",
    "tag, a real question (not sure) → usually rising · The meeting is on Friday, isn't it? (rising)",
    "tag, asking someone to agree (almost sure) → usually falling · This soup is delicious, isn't it? (falling)",
    "statement words + voice goes up → a question · You're leaving? (rising)",
  ].join("\n"),

  examples: [
    {
      sentence: "Is this seat <b>free</b>? (rising)",
      why: "This is a yes/no question, so the voice usually goes up at the end, on free: rising.",
    },
    {
      sentence: "How much is this <b>jacket</b>? (falling)",
      why: "How much makes this a wh- question, so the voice usually goes down at the end: falling.",
    },
    {
      sentence: "The train leaves at nine, <b>doesn't it</b>? (rising)",
      why: "The speaker isn't sure about the time and wants the answer. It is a real question, so the tag is usually rising.",
    },
    {
      sentence: "That was a great film, <b>wasn't it</b>? (falling)",
      why: "The speaker enjoyed the film and expects the other person to agree. It is not a real question, so the tag is usually falling.",
    },
    {
      sentence: "You've <b>finished</b>? (rising)",
      why: "The words and the word order are a statement, but the voice goes up at the end, so it is a question: rising. The speaker is surprised that it was so quick.",
    },
  ],

  pitfall: {
    wrong: "(You aren't sure.) Your sister lives in Leeds, <b>doesn't she</b>? (falling)",
    right: "(You aren't sure.) Your sister lives in Leeds, <b>doesn't she</b>? (rising)",
    why: "You really want to know, so the tag is a real question and is usually rising. A falling tag says you are almost sure and only want the other person to agree.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "You ask a shop assistant: Is there a bank near here? What does your voice usually do at the end?",
      options: ["It usually goes down (falling).", "It usually goes up (rising)."],
      answer: 1,
      feedback:
        "Is there a bank near here? is a yes/no question: the answer is yes or no. In a yes/no question, the voice usually goes up at the end, so it is rising.",
    },
    {
      kind: "choice",
      stem: "You think the last bus leaves at midnight, but you aren't sure, and you really want to know. You say: The last bus leaves at midnight, doesn't it? How does the tag usually sound?",
      options: ["Rising", "Falling"],
      answer: 0,
      feedback:
        "You aren't sure, so the tag is a real question, and a real question tag is usually rising: the voice goes up. A falling tag would say that you are almost sure and only want the other person to agree.",
    },
    {
      kind: "choice",
      stem: "It's a hot, sunny day. You aren't asking for information: you just want your friend to agree. You say: It's really hot today, isn't it? How does the tag usually sound?",
      options: ["Rising", "Falling"],
      answer: 1,
      feedback:
        "You can feel that it's hot, so this is not a real question. When you only want the other person to agree, the tag is usually falling: the voice goes down. A rising tag would sound as if you really didn't know.",
    },
    {
      kind: "choice",
      stem: "Which question usually has falling intonation?",
      options: ["Have you got a pen?", "Is the museum open today?", "What time do you finish work?", "Do you take sugar?"],
      answer: 2,
      feedback:
        "What time do you finish work? starts with a question word, so it is a wh- question, and the voice usually goes down at the end: falling. The other three are yes/no questions, which are usually rising.",
    },
    {
      kind: "choice",
      stem: "Maria's friend tells her some news. Maria is surprised and says: You've sold your car? The words are in the same order as a statement. When Maria says it, what makes it a question?",
      options: ["The word order changes.", "Her voice falls at the end.", "Her voice rises at the end."],
      answer: 2,
      feedback:
        "The word order doesn't change: You've sold your car is a statement. Maria's voice goes up at the end (rising), and that makes it a question. In writing, the question mark shows it. A statement usually falls.",
    },
    {
      kind: "choice",
      stem: "At a party, a man says to you: You're Anna's cousin, aren't you? (falling) What does the falling tag usually show?",
      options: ["He is almost sure, and he expects you to agree.", "He has no idea, and he really wants to know."],
      answer: 0,
      feedback:
        "A falling tag usually shows that the speaker is almost sure and expects you to agree. If he had no idea and really wanted to know, the tag would usually be rising.",
    },
    {
      kind: "gap",
      stem: "Where are you from? What's the time? How did you get here? Questions like these usually have ___ intonation. (Write rising or falling.)",
      answers: ["falling"],
      feedback:
        "These are wh- questions: they start with a question word, and the answer is not yes or no. In a wh- question, the voice usually goes down at the end, so the answer is falling.",
    },
  ],

  levelRationale:
    "The English Grammar Profile covers grammar, not pronunciation, so it has no intonation points. The CEFR Companion Volume (2020) scale for phonological control expects a B1 speaker to use intonation and stress well enough to support the message, and the spec (section 8) places question intonation at B1, in the intonation family that continues at C1 with stress and intonation for emphasis. Question tags were taught in order 19 without a rule about the voice; this topic adds it. Swan, Practical English Usage, notes that intonation has many exceptions, so every rule says usually, the quiz tests the rule and its meaning, never a sound, and there are no mistake items, because an intonation marked wrong in one context can be right in another. The site's fonts (Newsreader and IBM Plex Sans, latin subset) have no glyphs for the arrow characters U+2197 and U+2198, so the voice is written as (rising) and (falling) instead of arrows.",

  sourceNotes:
    "english_grammar.txt, # Intonation for question in the past: voice up for yes/no questions and down for wh- questions agrees with Swan; this topic adds usually, because Swan records many exceptions. # Forming question, ## Declarative questions: a statement said with a rising voice becomes a question; that is used here for You're leaving? (rising), while declarative questions as a grammar point stay at B2, in the question-forms family. # Pronouncing is about how to say the and which words are stressed, not about question intonation, so it is not used. Rising and falling question tags are authored from Swan.",
};
