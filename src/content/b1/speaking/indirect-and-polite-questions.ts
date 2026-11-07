import type { PhraseTopic } from "../../schema";

export const indirectAndPoliteQuestions: PhraseTopic = {
  slug: "indirect-and-polite-questions",
  family: "polite-requests",
  title: "Indirect and polite questions: Could you tell me where…?",
  summary: "Ask politely with Could you tell me where the station is?, Do you know if…? and Would you mind…?, keeping normal sentence order after the opening.",
  level: "b1",
  category: "speaking",
  shape: "phrases",
  order: 39,

  explanation: [
    "At A2, you learnt to ask for things with Can I…?, Could you…? and May I…? This topic adds <b>indirect questions</b>. An indirect question starts with a polite opening, like <b>Could you tell me</b>…? or <b>Do you know</b>…? It is softer than a direct question, so we use it a lot with people we don't know, in shops and at work.",
    "Compare. Direct: Where <b>is</b> the station? Indirect: Could you tell me where the station <b>is</b>? After the opening, the rest of the question has the order of a normal sentence: the subject, then the verb. Remember: the subject is the person or thing that the sentence is about. It is the same order as in a reported question (order 16).",
    "There is no do, does or did after the opening. Direct: What time <b>does</b> the bank <b>open</b>? Indirect: Do you know what time the bank <b>opens</b>? Without does, the verb itself takes -s. Direct: Where did she go? Indirect: Do you know where she went?",
    "For a yes/no question, use <b>if</b> or <b>whether</b>: Is there a lift? → Do you know if there is a lift? Does this bus go to the airport? → Could you tell me whether this bus goes to the airport?",
    "Other openings are Do you happen to know…? and I was wondering if… I was wondering if you could help me is not a question, so it ends with a full stop. It is very polite, for example to a manager or a client.",
    "To ask someone to do something, use <b>Would you mind</b> + the gerund: Would you mind closing the door? Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund. Mind means not like, or be unhappy about. So to say yes, I'll do it, answer <b>No, not at all</b> or No, of course not. To ask for permission, use <b>Do you mind if I</b> + the present simple: Do you mind if I sit here? → No, go ahead.",
    "Remember from A1 and A2: Would you like…? is for offers and invitations. It asks what the other person wants. To ask someone to do something, say Would you mind helping me? or Could you help me?, not Would you like to help me?",
    "Excuse me, could you tell me…? is neutral, not formal: it is fine with almost anyone. With family and friends, direct questions are also fine: Where's the remote?",
  ].join("\n\n"),

  situations: [
    {
      situation: "Asking a stranger for information",
      phrases: [
        "Excuse me, could you tell me where the station is?",
        "Do you know what time the museum opens?",
        "Do you happen to know if there's a bank near here?",
      ],
      register: "neutral",
    },
    {
      situation: "Asking someone to do something",
      phrases: [
        "Would you mind closing the door?",
        "Would you mind waiting a moment?",
        "Could you possibly help me with this box?",
        "Would it be possible to change my appointment?",
      ],
      register: "neutral",
    },
    {
      situation: "Asking for permission",
      phrases: ["Do you mind if I sit here?", "Do you mind if I open the window?", "Is it all right if I leave a bit early today?"],
      register: "neutral",
    },
    {
      situation: "Asking very politely, for example a manager or a client",
      phrases: ["I was wondering if you could help me.", "I was wondering whether you could send me the figures."],
      register: "formal",
    },
    {
      situation: "Answering Would you mind…? and Do you mind if…?",
      phrases: ["No, not at all.", "No, of course not. Go ahead.", "Actually, I'm using it at the moment. Sorry."],
      register: "neutral",
    },
    {
      situation: "Asking family and friends",
      phrases: ["Where's the remote?", "What time's the film?", "Got a pen?"],
      register: "informal",
    },
  ],

  quiz: [
    {
      kind: "wordbank",
      prompt: "The direct question is: Where is this train going? Put the words in order to ask it politely.",
      words: ["train", "is", "going?", "where", "Could", "this", "you", "tell", "me"],
      answer: "Could you tell me where this train is going?",
      feedback:
        "After Could you tell me, use the order of a normal sentence: the subject (this train), then is, then going. So is comes after the subject: where this train is going, not where is this train going, which is the order of a direct question.",
    },
    {
      kind: "gap",
      stem: "Direct: What time does the train leave? Indirect: Do you know what time the train ___? (leave, one word)",
      answers: ["leaves"],
      feedback:
        "In an indirect question there is no does, so the verb itself takes -s: Do you know what time the train leaves? Not what time does the train leave.",
    },
    {
      kind: "gap",
      stem: "Direct: Is there a lift in this building? Indirect: Could you tell me ___ there is a lift in this building?",
      answers: ["if", "whether"],
      feedback:
        "For a yes/no question, use if or whether, then the order of a normal sentence: Could you tell me if there is a lift in this building? Whether is also correct and a little more formal.",
    },
    {
      kind: "choice",
      stem: "A colleague asks you: Would you mind opening the window? You are happy to do it. What do you say?",
      options: ["Yes, I would.", "No, not at all.", "Yes, please."],
      answer: 1,
      feedback:
        "Mind means not like, so Would you mind…? asks: is it a problem for you? No, not at all means no problem, I'll do it. Yes, I would means it is a problem, so you won't do it. Yes, please is the answer to an offer.",
    },
    {
      kind: "gap",
      stem: "Would you mind ___ your music down a little? I'm trying to work. (turn, one word)",
      answers: ["turning"],
      feedback: "After Would you mind, use the gerund: Would you mind turning your music down a little? Not Would you mind to turn.",
    },
    {
      kind: "mistake",
      tokens: ["Do", "you", "know", "what", "time", "Ms", "Lee", "arrive?"],
      wrongIndex: 7,
      correction: "arrives?",
      feedback:
        "In the direct question, does carries the -s: What time does Ms Lee arrive? In the indirect question there is no does, so the verb takes -s: Do you know what time Ms Lee arrives? Arrived is also correct, about the past.",
    },
    {
      kind: "choice",
      stem: "You stop a stranger in the street to ask the way. Which question is polite and correct?",
      options: [
        "Would you like to tell me where the station is?",
        "Where's station?",
        "Excuse me, do you know where is the station?",
        "Excuse me, do you know where the station is?",
      ],
      answer: 3,
      feedback:
        "Excuse me, do you know where the station is? is polite, and it has the order of a normal sentence after the opening. Where is the station is the order of a direct question, so it is wrong after Do you know. Would you like…? is for offers and invitations, not requests, and Where's station? needs the.",
    },
  ],

  levelRationale:
    "The English Grammar Profile has indirect questions with Can you tell me…? and Do you know…? + a question word or if, and Would you mind + -ing for requests, among its B1 points. The CEFR's B1 descriptors include asking for information politely in everyday places like shops and stations. The topic uses reported question order (order 16) and the gerund (order 13). It keeps the A1 and A2 rules: Would you like…? is for offers and invitations, Could you…? is polite, and Excuse me, could you tell me…? is neutral.",

  sourceNotes:
    "english_grammar.txt, # Indirect and direct questions, says indirect questions have the order of a statement, no auxiliary, and if or whether for yes/no questions. This agrees with Swan, Practical English Usage, and is the base of this topic. 'Indirection question' should be indirect question, and 'Indirect question are' should be Indirect questions are. Its Have you any idea…? is correct but British and a little old-fashioned, so Do you happen to know…? is used instead. # Polite vs direct and # Question have Would you mind + -ing and I wonder if you would mind…, which agree with Swan. # Question's 'Would you mind if I take question at the end' is not used: Swan gives Would you mind if I took…, a form above B1, so Do you mind if I + the present simple is taught here.",
};
