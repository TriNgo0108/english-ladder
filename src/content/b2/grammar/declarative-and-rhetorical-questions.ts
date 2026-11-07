import type { RuleTopic } from "../../schema";

export const declarativeAndRhetoricalQuestions: RuleTopic = {
  slug: "declarative-and-rhetorical-questions",
  family: "question-forms",
  title: "Declarative and rhetorical questions: You're coming tomorrow? Who cares?",
  summary: "So you're coming tomorrow? Who cares? Check what you think you know with a statement that sounds like a question, and make a point with a question.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 18,

  explanation: [
    "Most questions change the order of a statement: be or the auxiliary goes before the subject. You're coming. → <b>Are you</b> coming? She lives here. → <b>Does she</b> live here? Remember: an auxiliary is a small verb that goes with another verb, like be in She is working, have in They have finished, do in Do you like it?, and can or will. Remember: the subject is the person or thing that the sentence is about. This topic is about two kinds of question that work differently.",
    "In B1 question intonation, we saw that you can make a question from a statement without changing the words: You're <b>leaving</b>? (rising) Remember: intonation is the way your voice goes up and down when you speak. A question like this is called a <b>declarative question</b>: a question with the word order of a statement. In speech, the voice usually goes up at the end (rising). In writing, the question mark shows that it is a question. As in B1, this site writes (rising) and (falling) for the voice.",
    "We usually use a declarative question when we think that we already know the answer, and we want to <b>check</b> it: So you're coming tomorrow? (rising) You've met my sister? (rising) We also use it to show <b>surprise</b> about something we have just heard: You sold your car? (rising) Declarative questions often start with so, or end with right or then: So the meeting is at ten? (rising) The meeting is at ten, right? (rising)",
    "There is no do, does or did in a declarative question, so the verb has the same form as in a statement: So she <b>works</b> at the hospital? (rising) This is different from a subject question (A2), like Who called you?, where the question word is the subject.",
    "Declarative questions are common in conversation, and they are usually informal. We don't usually use them when we have <b>no idea</b> of the answer. To ask for new information, use a normal question: <b>What time does</b> the museum open? <b>Is there</b> a bank near here?",
    "A <b>rhetorical question</b> is a question that we ask for effect, to make a point, not to get an answer. The answer is clear, so the speaker doesn't wait for one: Who cares? (= Nobody cares.) How should I know? (= I don't know.) What's the point of worrying? (= There is no point.) Rhetorical questions use the normal order of a question. People use them in conversation, and in speeches and opinion writing, to make the listener or reader think: Do we really want our children to grow up like this?",
    "A rhetorical question often means the <b>opposite</b> of its form. A positive question often has a negative meaning: Who would want to live there? (= Nobody would want to live there.) A negative question often has a positive meaning: Isn't it beautiful? (= It's very beautiful.) The situation shows when a question is rhetorical: the same words can also be a real question.",
  ].join("\n\n"),

  form: [
    "declarative question: statement word order + ? · voice usually rising · So you're coming tomorrow? (rising)",
    "use: to check something you think you know, or to show surprise · usually informal",
    "no do / does / did: So she works at the hospital? (rising)",
    "no idea of the answer → a normal question: What time does the museum open?",
    "rhetorical question: asked to make a point, no answer expected · Who cares? (= Nobody cares.)",
    "positive form → often a negative meaning · negative form → often a positive meaning: Isn't it beautiful?",
  ].join("\n"),

  examples: [
    {
      sentence: "So you're flying to Rome on <b>Friday</b>? (rising)",
      why: "The speaker thinks that they know the answer and wants to check it. The words are a statement, and the voice goes up at the end: rising.",
    },
    {
      sentence: "You've <b>already</b> finished? (rising)",
      why: "The speaker is surprised that it was so quick. It is a declarative question: the word order of a statement, with a rising voice.",
    },
    {
      sentence: "The party starts at eight, <b>right</b>? (rising)",
      why: "Right at the end shows that the speaker is checking. The order is the same as in a statement, and the voice is rising.",
    },
    {
      sentence: "Who cares what they think?",
      why: "This is a rhetorical question. The speaker doesn't want an answer. It means: Nobody cares what they think.",
    },
    {
      sentence: "Isn't this view amazing?",
      why: "This is a negative rhetorical question with a positive meaning: This view is amazing.",
    },
  ],

  pitfall: {
    wrong: "(You have no idea.) Excuse me, the next train goes to Leeds?",
    right: "(You have no idea.) Excuse me, <b>does the next train go</b> to Leeds?",
    why: "You have no idea of the answer, so you need a normal question. A declarative question is for checking something that you think you already know.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Which of these is a declarative question?",
      options: ["Are you coming to the party?", "Who's coming to the party?", "You're coming to the party?"],
      answer: 2,
      feedback:
        "You're coming to the party? has the word order of a statement, with a question mark, so it is a declarative question. Are you coming? puts be before the subject, and Who's coming? starts with a question word.",
    },
    {
      kind: "choice",
      stem: "You're a tourist. You have no idea when the museum opens. What do you ask at the hotel desk?",
      options: ["The museum opens at ten?", "What time does the museum open?"],
      answer: 1,
      feedback:
        "You have no idea of the answer, so you need a normal question: What time does the museum open? A declarative question like The museum opens at ten? is for checking something you think you already know.",
    },
    {
      kind: "choice",
      stem: "Your friend is unhappy because her boss has asked her to work this Sunday. She says: Who wants to work on a Sunday? What does she mean?",
      options: [
        "She wants to know who will work on Sunday.",
        "Nobody wants to work on a Sunday.",
        "Everybody wants to work on a Sunday.",
      ],
      answer: 1,
      feedback:
        "This is a rhetorical question: she doesn't want an answer. A positive rhetorical question often has a negative meaning, so it means: Nobody wants to work on a Sunday.",
    },
    {
      kind: "choice",
      stem: "You and a friend are watching the sun go down over the sea. Your friend says: Isn't it beautiful? What does she mean?",
      options: ["It's very beautiful.", "It isn't beautiful.", "She isn't sure if it's beautiful."],
      answer: 0,
      feedback:
        "This is a rhetorical question. A negative rhetorical question often has a positive meaning, so she means: It's very beautiful.",
    },
    {
      kind: "gap",
      stem: "In a declarative question like So you're leaving tomorrow?, the voice usually goes ___ at the end. (Write up or down.)",
      answers: ["up"],
      feedback:
        "A declarative question has the word order of a statement, so the voice does the work. It usually goes up at the end (rising). A statement usually falls.",
    },
    {
      kind: "mistake",
      tokens: ["Why", "would", "anyone", "wants", "to", "live", "there?"],
      wrongIndex: 3,
      correction: "want",
      feedback:
        "A rhetorical question uses the normal order of a question, and after would we use the base form: Why would anyone want to live there? It means: Nobody would want to live there.",
    },
    {
      kind: "mistake",
      tokens: ["What's", "the", "point", "of", "complain", "about", "it?"],
      wrongIndex: 4,
      correction: "complaining",
      feedback:
        "After the point of, we use the -ing form: What's the point of complaining about it? It is a rhetorical question: it means that there is no point.",
    },
  ],

  levelRationale:
    "The spec (section 8) places declarative and rhetorical questions at B2. The English Grammar Profile lists questions by their form and has no single point for these two uses, so the level follows the spec. This is the question-forms family's B2 topic, after A1 question-words, A2 subject-questions and B1 question-tags, and it links back to B1 question-intonation, which already showed You're leaving? (rising) and left declarative questions as a grammar point to B2. The words auxiliary, subject and intonation reuse their earlier wording, and the topic tells declarative questions apart from A2 subject questions, which also keep statement order. The voice is written as (rising) and (falling), never with arrow characters, as in B1, because the site's fonts have no glyphs for U+2197 and U+2198. Every rule about the voice and about meaning says usually or often, because Swan records exceptions, and the rhetorical items each give a situation, because the same words can be a real question. Echo questions with a question word (You paid how much?) are left out.",

  sourceNotes:
    "english_grammar.txt, # Forming question, ## Declarative questions: a statement turned into a question, with a question mark in writing and a change of intonation in speech, used to confirm something the speaker already knows, agrees with Swan; the note's sentence 'our voice goes towards the of the sentence' is missing a word (up at the end). ## Rhetorical questions: questions we ask when we don't expect an answer, to draw attention to something, agrees with Swan, but the note's example, So we're going by train?, is a declarative question, not a rhetorical one, so it is not used. # Intonation for question in the past is about yes/no and wh- questions and is taught in B1 question intonation. The surprise use, so and right, the verb form with no do, not using them for new information, and the opposite meaning of rhetorical questions are authored from Swan, Practical English Usage.",
};
