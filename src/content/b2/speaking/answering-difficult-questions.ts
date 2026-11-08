import type { PhraseTopic } from "../../schema";

export const answeringDifficultQuestions: PhraseTopic = {
  slug: "answering-difficult-questions",
  title: "Answering difficult questions: That's a good question, I'll get back to you",
  summary: "Get time to think with That's a good question, check what was asked, say I'll have to get back to you on that, and pass a question to the right person.",
  level: "b2",
  category: "speaking",
  shape: "phrases",
  order: 32,

  explanation: [
    "After a presentation (order 29), in a meeting or at a job interview, people sometimes ask a question that is hard to answer. You may need time to think, you may not know the answer, or someone else may know it better. These phrases help you stay calm and polite, and honest. Remember: register means how formal or informal your words are. Most of these phrases are neutral.",
    "<b>Get time to think.</b> <b>That's a good question</b> and That's an interesting question are very common. They are polite, and they also give you a few seconds to think. <b>Let me think about that for a moment.</b> Try not to use That's a good question for every question, or it can sound empty.",
    "<b>Check the question.</b> If you aren't sure what the person means, check before you answer: <b>Do you mean</b> the cost for this year, or for the whole project? <b>So you're asking</b> about the cost? This is a declarative question (order 18). Remember: a declarative question is a question with the word order of a statement. Declarative questions are usually informal, but So you're asking…? is a common, neutral way to check a question in a meeting. Sorry, could you say that again? is fine if you didn't hear.",
    "<b>Say that you don't know.</b> It is usually better to say that you don't know than to guess. Promise to find out: <b>I'm afraid I don't know the answer to that.</b> <b>I'll have to get back to you on that.</b> Get back to someone means answer them later. I'm not sure, but I'll find out for you. In a very formal meeting, you can say I'm not in a position to comment on that, which means I'm not allowed to, or not able to, answer now.",
    "<b>Answer a critical question.</b> When someone doesn't agree with you, first show that you understand, then give your answer, as in B1 agreeing and disagreeing: <b>I see your point, but</b>… <b>I understand what you're saying, but</b>… I understand your concern.",
    "<b>Pass the question on.</b> If someone else knows more, say so: <b>I'm not the best person to answer that.</b> I think Sara can answer that better than I can. That's really a question for the finance team. If the question is about a point that comes later in your talk, say: I'll come back to that later, if that's all right.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Getting time to think",
      phrases: ["That's a good question.", "That's an interesting question.", "Let me think about that for a moment."],
      register: "neutral",
    },
    {
      situation: "Checking the question",
      phrases: ["Do you mean the cost for this year?", "So you're asking about the cost?", "Sorry, could you say that again?"],
      register: "neutral",
    },
    {
      situation: "Saying that you don't know",
      phrases: ["I'm afraid I don't know the answer to that.", "I'll have to get back to you on that.", "I'm not sure, but I'll find out for you."],
      register: "neutral",
    },
    {
      situation: "Saying that you can't answer now, in a formal meeting",
      phrases: ["I'm not in a position to comment on that at the moment.", "I do not have those figures with me, but I will send them to you by Friday."],
      register: "formal",
    },
    {
      situation: "Answering a critical question",
      phrases: [
        "I see your point, but the new system is cheaper in the long run.",
        "I understand what you're saying, but we need to save money.",
        "I understand your concern.",
      ],
      register: "neutral",
    },
    {
      situation: "Passing the question to someone else",
      phrases: ["I'm not the best person to answer that.", "I think Sara can answer that better than I can.", "That's really a question for the finance team."],
      register: "neutral",
    },
    {
      situation: "Coming back to a question later",
      phrases: ["I'll come back to that later, if that's all right.", "Could we come back to that at the end?"],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "After your talk, someone asks about next year's budget. You don't have the figures, but you can find them. What do you say?",
      options: ["No idea. Next question.", "I'll have to get back to you on that.", "That's a stupid question.", "To sum up, the budget."],
      answer: 1,
      feedback:
        "I'll have to get back to you on that says that you will answer later, so it is honest and polite. No idea. Next question. and That's a stupid question are rude. To sum up gives the main idea again at the end of a talk; it doesn't answer a question.",
    },
    {
      kind: "choice",
      stem: "At a meeting, someone asks a question about the law. Your colleague Ana is the company's lawyer, and she knows much more about it than you do. What do you say?",
      options: ["Ask someone else.", "That's a good question. Next!", "I think Ana is the best person to answer that."],
      answer: 2,
      feedback:
        "I think Ana is the best person to answer that passes the question politely to the person who knows most. Ask someone else is an order, and it sounds rude. That's a good question. Next! doesn't answer the question or help the person.",
    },
    {
      kind: "gap",
      stem: "I'll have to get ___ to you on that. I don't have the numbers with me today. (one word)",
      answers: ["back"],
      feedback: "Get back to someone means answer them later: I'll have to get back to you on that. It is a polite, honest way to say that you will find the answer.",
    },
    {
      kind: "gap",
      stem: "So you're ___ me whether the price will go up next year? (ask, one word)",
      answers: ["asking"],
      feedback:
        "So you're asking me whether… checks the question before you answer. It is a declarative question: a question with the word order of a statement, you're asking, not are you asking.",
    },
    {
      kind: "wordbank",
      prompt: "Someone in the audience says your plan is too expensive. Put the words in order to answer politely.",
      words: ["choice.", "you're", "but", "understand", "no", "I", "what", "saying,", "have", "we"],
      answer: "I understand what you're saying, but we have no choice.",
      feedback:
        "I understand what you're saying, but… first shows that you understand the other person, then gives your answer: we have no choice. It is softer than No, you're wrong.",
    },
    {
      kind: "mistake",
      tokens: ["Sorry,", "I", "don't", "know", "the", "answer", "of", "your", "question."],
      wrongIndex: 6,
      correction: "to",
      feedback:
        "We say the answer to a question, not the answer of: Sorry, I don't know the answer to your question. I'm afraid I don't know is a little softer than Sorry, I don't know.",
    },
  ],

  levelRationale:
    "The CEFR's B2 descriptors for addressing audiences say a learner can take a series of follow-up questions with a degree of fluency and spontaneity, and its B2 descriptors for formal discussion and meetings include answering questions and dealing with them politely. The spec (section 8) places answering difficult questions at B2 with no family. The topic follows giving a presentation (order 29), reuses the declarative question of order 18 with its exact wording, and keeps B1 agreeing-and-disagreeing: I see your point, but… is neutral, like I see what you mean, but…",

  sourceNotes:
    "english_grammar.txt, # Answering difficult questions, has only I see your point, but, I see what you mean, but and I understand what you're saying, but. These agree with Swan, Practical English Usage, and are used as fixed phrases; I see what you mean, but… is already taught in B1 agreeing-and-disagreeing, so this topic uses the other two. The brief's phrases for getting time (That's a good question), not knowing (I'll have to get back to you on that) and passing a question on are authored from Swan and the learner dictionaries, which give get back to someone as answer them later. # Presentation, ## Asking the speaker for more details (What do you mean by…?, Do you have … in mind?) shows the questions a speaker may hear; Do you mean…? is used here for checking. The mistake item has one fix: of can only become to (the answer to); no other single word makes the sentence correct.",
};
