import type { PhraseTopic } from "../../schema";

export const breakingBadNews: PhraseTopic = {
  slug: "breaking-bad-news",
  title: "Breaking bad news: I'm afraid…, I'm sorry to have to tell you…",
  summary: "Prepare the listener with I'm afraid I've got some bad news, say it clearly and kindly, show that you understand, then talk about what happens next.",
  level: "b2",
  category: "speaking",
  shape: "phrases",
  order: 31,

  explanation: [
    "Sometimes you have to tell someone news that will make them unhappy or worried: an order is late, a trip is cancelled, a plan has to change. To <b>break bad news</b> means to tell someone this kind of news. How you say it matters, so it helps to follow four steps: prepare the listener, say the news clearly, show that you understand, and talk about the next step. Remember: register means how formal or informal your words are.",
    "<b>Prepare the listener.</b> A short first sentence tells the other person that bad news is coming: <b>I'm afraid I've got some bad news.</b> <b>I'm sorry to have to tell you this, but</b>… <b>There's something we need to talk about.</b> If it is hard to say, you can also start with I'm not sure how to put this, but… As at A2, I'm afraid here means I'm sorry. It makes bad news sound softer: I'm afraid the hotel is fully booked. To answer a question, I'm afraid so means yes, and I'm afraid not means no.",
    "<b>Say it clearly.</b> After the first sentence, give the news in plain words. <b>Unfortunately</b> is common at the start: Unfortunately, the flight has been cancelled. Be kind, but be clear. If you use too many hedges (order 21), the listener may not understand what has happened.",
    "<b>Show that you understand.</b> Say that you know the news is hard: <b>I know this isn't what you wanted to hear.</b> I realise this must be very disappointing. I'm really sorry about this.",
    "<b>Talk about the next step.</b> Say what you can do, or what happens now. A cleft sentence (order 19) puts the next step in focus: <b>What we can do is</b> offer you a full refund. You can also say: Let's look at the options together. We'll do all we can to sort it out.",
    "<b>In a formal letter or email,</b> people often write <b>I regret to inform you that</b>… It means I'm sorry that I have to tell you, and it is very formal: I regret to inform you that your application has been unsuccessful. In conversation, I'm afraid… or I'm sorry to tell you… usually sounds kinder.",
    "<b>When you hear bad news,</b> you can say: Oh no! What happened? That's a real shame. I see. What happens now? With friends, Oh no, you're joking! is informal.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Preparing the listener",
      phrases: [
        "I'm afraid I've got some bad news.",
        "I'm sorry to have to tell you this, but the trip is off.",
        "There's something we need to talk about.",
        "I'm not sure how to put this, but we've found a problem.",
      ],
      register: "neutral",
    },
    {
      situation: "Giving the news clearly",
      phrases: ["Unfortunately, the flight has been cancelled.", "I'm afraid the hotel is fully booked.", "I'm afraid we won't be able to finish the work by Friday."],
      register: "neutral",
    },
    {
      situation: "Showing that you understand",
      phrases: ["I know this isn't what you wanted to hear.", "I realise this must be very disappointing.", "I'm really sorry about this."],
      register: "neutral",
    },
    {
      situation: "Talking about the next step",
      phrases: ["What we can do is offer you a full refund.", "Let's look at the options together.", "We'll do all we can to sort it out."],
      register: "neutral",
    },
    {
      situation: "Giving bad news in a formal letter or email",
      phrases: ["I regret to inform you that your application has been unsuccessful.", "We regret to inform you that the concert has been cancelled."],
      register: "formal",
    },
    {
      situation: "Reacting to bad news",
      phrases: ["Oh no! What happened?", "That's a real shame.", "I see. What happens now?"],
      register: "neutral",
    },
    {
      situation: "Reacting to bad news with friends",
      phrases: ["Oh no, you're joking!", "What a pain!"],
      register: "informal",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You work in a furniture shop. You have to phone a customer and tell her that her sofa will arrive two weeks late. How do you start?",
      options: [
        "Your sofa is late. Bye.",
        "Good news about your sofa!",
        "Hello, Mrs Patel. I'm afraid I've got some bad news about your sofa.",
      ],
      answer: 2,
      feedback:
        "I'm afraid I've got some bad news… prepares the customer, and I'm afraid makes the news softer. Your sofa is late. Bye. is too short and sounds rude. Good news is wrong, because the news is bad.",
    },
    {
      kind: "choice",
      stem: "You are writing a formal letter to tell a job applicant that she didn't get the job. Which sentence fits best?",
      options: [
        "I regret to inform you that your application has not been successful.",
        "Bad luck! You didn't get the job.",
        "Sorry, mate, the job's gone to someone else.",
      ],
      answer: 0,
      feedback:
        "I regret to inform you that… is very formal, so it fits a formal letter. Bad luck! and Sorry, mate are informal, for friends, and they sound unkind in a letter about a job.",
    },
    {
      kind: "gap",
      stem: "I'm sorry to ___ to tell you this, but the shop is closing next month. (one word)",
      answers: ["have"],
      feedback:
        "I'm sorry to have to tell you… means I'm sorry that I must tell you. Sorry is followed by to + the base form, and have to shows that you have no choice.",
    },
    {
      kind: "gap",
      stem: "A: Is the restaurant closed today? B: I'm afraid ___. It's closed every Monday. (one word)",
      answers: ["so"],
      feedback:
        "I'm afraid so means yes, it's true, and I'm sorry: the restaurant is closed. I'm afraid not would mean no, but It's closed every Monday shows that the answer is yes. We don't say I'm afraid yes.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to give the news to your team.",
      words: ["been", "meeting", "afraid", "cancelled.", "I'm", "has", "the"],
      answer: "I'm afraid the meeting has been cancelled.",
      feedback:
        "I'm afraid comes first and makes the news softer. Then the news follows, in the order of a normal sentence: the meeting has been cancelled.",
    },
    {
      kind: "mistake",
      tokens: ["We", "regret", "to", "inform", "you", "what", "the", "trip", "to", "Paris", "has", "been", "cancelled."],
      wrongIndex: 5,
      correction: "that",
      feedback:
        "Inform you is followed by that + a clause: We regret to inform you that the trip to Paris has been cancelled. It is a very formal way to give bad news in a letter or an email. In conversation, I'm afraid… usually sounds kinder.",
    },
  ],

  levelRationale:
    "The CEFR's B2 descriptors for sociolinguistic appropriateness say a learner can express themselves confidently, clearly and politely in a formal or informal register, as the situation and the person need. Giving bad news clearly and kindly is a hard case of that skill. The spec (section 8) places breaking bad news at B2 with no family. The topic keeps the A2 meaning of I'm afraid (here it means I'm sorry) and the B2 letters-of-complaint note that I'm afraid makes bad news sound softer. It uses the cleft sentence of order 19 (What we can do is…) only in the explanation and phrases, never in a word bank, and it links to the hedging of order 21.",

  sourceNotes:
    "english_grammar.txt, ## Breaking bad news, has I don't know how to put this, There's something we need to discuss, I'm sorry to drop this on you, I'm sorry to have to say that…, I need to talk to you urgently and Unfortunately, we're going to have to… These agree with Swan, Practical English Usage. I'm sorry to have to and There's something we need to are used as fixed phrases, with new example sentences; I'm not sure how to put this is used in place of I don't know how to put this, which can sound more worried. I'm sorry to drop this on you is informal and is not used. The list repeats I need to talk to you urgently. I'm afraid so and I'm afraid not, I regret to inform you that, and the reactions to bad news are authored from Swan and the learner dictionaries. The mistake item has one fix: what can only become that, after inform you. Its sentence is not one of the phrases, and the I'm afraid so gap is forced by the second sentence, It's closed every Monday.",
};
