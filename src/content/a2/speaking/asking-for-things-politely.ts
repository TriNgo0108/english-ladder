import type { PhraseTopic } from "../../schema";

export const askingForThingsPolitely: PhraseTopic = {
  slug: "asking-for-things-politely",
  family: "polite-requests",
  title: "Asking for things politely",
  summary: "Ask people for things, for help and for permission with Can I…?, Could you…? and May I…?, and answer with Yes, of course or I'm sorry, but…",
  level: "a2",
  category: "speaking",
  shape: "phrases",
  order: 27,

  explanation: [
    "At A1, you learnt <b>I'd like…, please</b> to ask for something, and <b>Would you like…?</b> to offer something to another person. This topic adds more ways to ask: for a thing, for help, and for permission. Permission means that someone says you can do something.",
    "Remember: Would you like…? is for offers and invitations. It asks what the other person wants. It is not the way to ask for something for you: say Could I have some water?, not Would you like to give me some water?",
    "To ask for a thing, use <b>Can I have…?</b> or <b>Could I have…?</b>: Could I have the menu, please? Could is a little more polite than can. To use another person's thing for a short time and then give it back, use <b>borrow</b>: Could I borrow your pen? The other person <b>lends</b> it to you: Could you lend me your pen? Not Could you borrow me your pen?",
    "To ask someone to do something, use <b>Can you…?</b> or <b>Could you…?</b> + the base form: Could you help me, please? Can you open the door? Remember: the base form is the verb with nothing added, so say Could you help me?, not Could you helps me?",
    "To ask for permission, use <b>Can I…?</b>, <b>Could I…?</b> or <b>May I…?</b> + the base form: Can I sit here? Could I use your phone? May I is more formal: May I come in? You can also say Is it OK if I open the window?",
    "<b>Please</b> makes every request softer. Put it at the end or after you or I: Could you help me, please? Could you please help me? With a person you do not know, start with <b>Excuse me</b>: Excuse me, could you tell me the time, please?",
    "Be careful with orders like Give me a pen. To most people, they can sound rude (not polite). With family and close friends, Pass me the salt, please is fine.",
    "To say yes, say <b>Yes, of course</b> or <b>Sure</b>. When you give the thing, say <b>Here you are</b>. To give permission, you can also say Go ahead. Do not say Yes, please: that is the answer to an offer, as in A1. To a question with Can I…?, do not answer Yes, I can: say Yes, of course or Yes, you can.",
    "To say no politely, say sorry and give a reason: <b>I'm sorry, but</b> I need it. <b>I'm afraid</b> I can't. I'm afraid here means I'm sorry. It is polite and a little more formal.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Asking for a thing",
      phrases: ["Can I have a glass of water, please?", "Could I have the menu, please?", "Could I borrow your pen?"],
      register: "neutral",
    },
    {
      situation: "Asking someone to do something",
      phrases: ["Could you help me, please?", "Can you open the door, please?", "Could you say that again, please?", "Excuse me, could you tell me the time, please?"],
      register: "neutral",
    },
    {
      situation: "Asking for permission",
      phrases: ["Can I sit here?", "Could I use your phone?", "Is it OK if I open the window?"],
      register: "neutral",
    },
    {
      situation: "Asking a stranger or someone at work",
      phrases: ["May I come in?", "May I ask a question?"],
      register: "formal",
    },
    {
      situation: "Saying yes",
      phrases: ["Yes, of course.", "Here you are.", "Yes, go ahead."],
      register: "neutral",
    },
    {
      situation: "Saying no politely",
      phrases: ["I'm sorry, but I need it.", "I'm afraid I can't.", "Sorry, I'm using it at the moment."],
      register: "neutral",
    },
    {
      situation: "Asking and answering with family and friends",
      phrases: ["Can you pass me the salt?", "Pass the bread, please.", "Can I have some of your chips?", "Sure, no problem."],
      register: "informal",
    },
  ],

  quiz: [
    {
      kind: "gap",
      stem: "You need to write something, but you haven't got a pen. You ask a friend: Could I ___ your pen for a minute?",
      answers: ["borrow", "use", "have", "take", "get", "grab", "steal"],
      feedback:
        "Could I borrow your pen? is the usual question: borrow means use a thing and then give it back. Could I use, have, take, get or grab your pen? are also correct, and steal is possible as a joke between friends, but it is not polite. Lend is wrong here: the other person lends, so say Could you lend me your pen?",
    },
    {
      kind: "choice",
      stem: "A woman at the next table asks you: Could I borrow your newspaper? You say yes. What do you say?",
      options: ["Yes, please.", "Yes, I can.", "Yes, of course."],
      answer: 2,
      feedback:
        "Yes, of course is a polite way to say yes to a request. Yes, please is the answer to an offer, when you want the thing. Yes, I can talks about you, but she asked to borrow it, so the answer is about her: Yes, of course, or Yes, you can.",
    },
    {
      kind: "gap",
      stem: "A: Excuse me, can I sit here? B: Yes, of ___. (one word)",
      answers: ["course"],
      feedback: "Yes, of course is a polite and friendly way to give permission. Sure and Go ahead are also good answers.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to ask politely.",
      words: ["window,", "you", "please?", "open", "Could", "the"],
      answer: "Could you open the window, please?",
      feedback:
        "In the question, could comes first, then you, then the base form open and the rest of the sentence. Please goes at the end, after a comma.",
    },
    {
      kind: "choice",
      stem: "You are in a shop. You want the shop assistant to show you the blue jumper. What is the polite question?",
      options: [
        "Do you like to show me the blue jumper?",
        "Could you show me the blue jumper, please?",
        "Could you to show me the blue jumper, please?",
        "Show me the blue jumper.",
      ],
      answer: 1,
      feedback:
        "Could you…, please? asks another person to do something politely. Do you like…? asks what a person enjoys in general, so it is not a request. After could, use the base form with no to: Could you show, not Could you to show. Show me the blue jumper is an order, and it can sound rude.",
    },
    {
      kind: "mistake",
      tokens: ["Could", "you", "borrow", "me", "your", "pen?"],
      wrongIndex: 2,
      correction: "lend",
      feedback:
        "The person who gives the thing lends it: Could you lend me your pen? The person who takes it borrows it: Could I borrow your pen? Many learners say borrow me, but it is wrong.",
    },
  ],

  levelRationale:
    "The English Grammar Profile has can and could for requests and permission at A2, with could as the more polite form. May I…? is taught here only as a fixed, formal phrase for permission. The CEFR's A2 descriptors include asking for and giving things and making simple requests in everyday places. The topic builds on the A1 topics Would you like…? (I'd like and offers) and Ordering food (Could I have…?), and keeps their rules: Would you like…? offers, and Yes, please answers an offer.",

  sourceNotes:
    "english_grammar.txt, # Question, has requests such as Do you know what the exchange rate is, please?, Could you put the headings in bold, please? and Would you mind letting my friend sit here?. Could you…, please? agrees with Swan, Practical English Usage, and is used. Would you mind + -ing and Do you know…? with an indirect question are B1, so they are not used here. # Polite vs direct lists I'm afraid not and I'm sorry, but, which agree with Swan and are used in the answers. Borrow and lend, may for formal permission, Here you are and the answers to Can I…? checked against Swan.",
};
