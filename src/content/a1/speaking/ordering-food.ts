import type { PhraseTopic } from "../../schema";

export const orderingFood: PhraseTopic = {
  slug: "ordering-food",
  title: "Ordering food in a café or restaurant",
  level: "a1",
  category: "speaking",
  shape: "phrases",
  order: 25,

  explanation: [
    "To order means to ask for food or drink in a café or restaurant. The waiter is the person who takes your order and brings your food. The menu is the list of food and drinks.",
    "When you arrive, say how many people you are: <b>A table for two, please.</b>",
    "The waiter asks questions. Learn to understand them: <b>Are you ready to order?</b> <b>What would you like to drink?</b> <b>Anything else?</b> (Do you want more?)",
    "To order, use <b>I'd like…</b> or <b>Could I have…?</b>, and say <b>please</b>: I'd like the chicken, please. Could I have a glass of water, please? Can I have…? is also correct and very common. Could is a little more polite than can. People also often say I'll have the soup, please. Learn this as one phrase.",
    "Be careful with <b>I want</b>. To a waiter, I want a coffee can sound rude (not polite), because it sounds like you are telling the waiter what to do. With friends, I want the pizza is fine.",
    "Do not forget 'd. I'd like a coffee means I want a coffee now. I like coffee means I enjoy coffee in general. It does not order anything.",
    "Some food words usually have no plural, as you saw in the topic on food words: some bread, some rice, not breads or rices.",
    "To pay at the end, ask for the bill: <b>Can we have the bill, please?</b> In American English, people say the check.",
    "All of these phrases are neutral and polite, so they are good with any waiter. The last group is informal: it is for talking with your friends at the table.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Arriving at a restaurant",
      phrases: ["Hello. A table for two, please.", "Have you got a table for four?"],
      register: "neutral",
    },
    {
      situation: "What the waiter says",
      phrases: ["Are you ready to order?", "What would you like to drink?", "Anything else?"],
      register: "neutral",
    },
    {
      situation: "Ordering your food and drinks",
      phrases: [
        "I'd like the fish, please.",
        "Could I have a salad, please?",
        "Can I have some water, please?",
        "I'll have the soup, please.",
      ],
      register: "neutral",
    },
    {
      situation: "Asking about the food",
      phrases: ["What's this, please?", "Is there meat in this?"],
      register: "neutral",
    },
    {
      situation: "Saying you don't want more",
      phrases: ["No, that's all, thanks.", "That's all, thank you."],
      register: "neutral",
    },
    {
      situation: "Paying",
      phrases: ["Can we have the bill, please?", "Could I have the bill, please?"],
      register: "neutral",
    },
    {
      situation: "Choosing food with friends",
      phrases: ["What do you want?", "I want a burger. What about you?"],
      register: "informal",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You are in a restaurant. You want the fish. What is the polite way to say it to the waiter?",
      options: ["I want the fish.", "Give me the fish.", "I'd like the fish, please.", "I like the fish, please."],
      answer: 2,
      feedback:
        "I'd like the fish, please is polite: I'd like means I want, but it is softer, and please makes it kind. I want the fish and Give me the fish can sound rude to a waiter. I like the fish, please is wrong: without 'd, it does not ask for the fish. It only says you enjoy it.",
    },
    {
      kind: "gap",
      stem: "Waiter: What would you like to drink? You: Could I ___ a glass of water, please?",
      answers: ["have", "get", "order"],
      feedback:
        "Could I have…? is the usual way to ask for something: Could I have a glass of water, please? Could I get…? is also correct, and very common in American English. Could I order… is correct too.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make the waiter's question.",
      words: ["to", "you", "order?", "ready", "Are"],
      answer: "Are you ready to order?",
      feedback:
        "This is a question with be, so are comes before you: Are you ready to order? It means: do you know what you want to eat now?",
    },
    {
      kind: "choice",
      stem: "Waiter: Anything else? You don't want any more food. What do you say?",
      options: ["Yes, please.", "No, that's all, thanks.", "I don't want."],
      answer: 1,
      feedback:
        "No, that's all, thanks tells the waiter politely that you have everything. Yes, please means you want more. I don't want is wrong (want needs something after it) and it sounds rude.",
    },
    {
      kind: "gap",
      stem: "At the end of the meal, you want to pay. You ask: Can we have the ___, please?",
      answers: ["bill", "check"],
      feedback:
        "At the end, ask for the bill: Can we have the bill, please? In American English, people say the check. Both are correct.",
    },
    {
      kind: "mistake",
      tokens: ["Could", "I", "have", "some", "breads,", "please?"],
      wrongIndex: 4,
      correction: "bread,",
      feedback:
        "Bread usually has no plural, so say some bread, not some breads. It is the same for rice, meat and cheese: some rice, some cheese.",
    },
  ],

  levelRationale:
    "The CEFR's A1 descriptors include asking people for things and giving people things, and handling numbers, quantities and cost, as when you order and pay. I'd like is an A1 point in the English Grammar Profile, and Could I have…? and Can I have…? are used here as fixed phrases. This topic comes after Would you like…?, which teaches I'd like.",

  sourceNotes:
    "english_grammar.txt, # Ordering food, lists seven restaurant phrases. 'Could I have…', 'Could I get you something to drink?' and 'I'll have some still water, please' agree with Swan, Practical English Usage, and are the model for the ordering phrases here. The note has a typo, 'sparking water' for sparkling water. 'I'm going to go for', 'What's the polenta like?' and 'What do you recommend' are above A1, and are not used. The bill/check difference and the register of I want checked against Swan.",
};
