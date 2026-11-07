import type { PhraseTopic } from "../../schema";

export const introducingYourselfAndInterruptingAtWork: PhraseTopic = {
  slug: "introducing-yourself-and-interrupting-at-work",
  family: "introductions",
  title: "Introducing yourself and interrupting at work",
  summary: "Introduce yourself and others at work, get someone's attention, interrupt a meeting politely with Sorry to interrupt, but…, and end a conversation.",
  level: "b1",
  category: "speaking",
  shape: "phrases",
  order: 40,

  explanation: [
    "At A1, you learned to say hello and introduce yourself: Hello, my name's Ana. Nice to meet you. At work, people also want to know your job or your team, so add it: Hello, I'm Ana. I work in marketing. I'm the new sales assistant. I've just started in the IT department.",
    "To introduce another person, say <b>This is</b> + the name, and add something about them: Tom, this is Maria. She's joining our team. You can also say Can I introduce you to…? or Have you two met? The answer is still Nice to meet you, and the other person says Nice to meet you, too, as at A1.",
    "With a client or a senior manager, be more formal: Good morning. Let me introduce myself. My name is Ana Silva. Use Mr, Mrs or Ms + the family name, as at A1. Pleased to meet you and It's a pleasure to meet you are a little more formal than Nice to meet you.",
    "To get someone's attention before you ask something, say <b>Excuse me</b>, <b>Sorry to bother you, but</b>… or <b>Have you got a minute?</b> Do you have a moment? means the same.",
    "To <b>interrupt</b> means to start speaking when another person is speaking. In a meeting, do it politely: <b>Sorry to interrupt, but</b>… Can I just say something? Could I come in here? To a manager or a client, add I'm: I'm sorry to interrupt, but could I add something? May I is more formal, as at A2: Excuse me, may I ask a question?",
    "If someone interrupts you, you can let them speak (Sorry, go ahead.) or politely finish first (Can I just finish what I was saying?). If you both start speaking at the same time, say After you.",
    "To end a conversation, say something friendly and give a reason: It's been nice talking to you. I'd better get back to work (order 36). See you at the meeting.",
    "With colleagues you know well, people are often informal: Hi! Got a sec? Catch you later! Hi and Bye are informal, as at A1.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Introducing yourself to a new colleague",
      phrases: ["Hello, I'm Ana. I work in marketing.", "Hello, my name's Tom. I'm the new sales assistant.", "I've just started in the IT department."],
      register: "neutral",
    },
    {
      situation: "Introducing yourself formally, for example to a client",
      phrases: ["Good morning. Let me introduce myself.", "My name is Ana Silva. I'm the sales manager.", "It's a pleasure to meet you."],
      register: "formal",
    },
    {
      situation: "Introducing another person",
      phrases: ["Tom, this is Maria. She's joining our team.", "Can I introduce you to our new trainee?", "Have you two met?"],
      register: "neutral",
    },
    {
      situation: "Answering an introduction",
      phrases: ["Nice to meet you.", "Nice to meet you, too.", "I've heard a lot about you."],
      register: "neutral",
    },
    {
      situation: "Getting someone's attention",
      phrases: ["Excuse me, have you got a minute?", "Sorry to bother you, but could I ask you something?", "Do you have a moment?"],
      register: "neutral",
    },
    {
      situation: "Interrupting in a meeting",
      phrases: ["Sorry to interrupt, but I have a question.", "Can I just say something here?", "Could I come in here?"],
      register: "neutral",
    },
    {
      situation: "Interrupting very politely, for example a manager or a client",
      phrases: ["I'm sorry to interrupt, but could I add something?", "Excuse me, may I ask a question?"],
      register: "formal",
    },
    {
      situation: "Letting the other person speak, or finishing your point",
      phrases: ["Sorry, go ahead.", "After you.", "Can I just finish what I was saying?"],
      register: "neutral",
    },
    {
      situation: "Ending a conversation",
      phrases: ["It's been nice talking to you.", "I'd better get back to work.", "See you at the meeting."],
      register: "neutral",
    },
    {
      situation: "With colleagues you know well",
      phrases: ["Hi! I'm Sam. I sit over there.", "Got a sec?", "Catch you later!"],
      register: "informal",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You are in a meeting. Your manager is speaking, and you need to ask a question now. What do you say?",
      options: [
        "I'm sorry to interrupt, but could I ask a question?",
        "Stop talking. I have a question.",
        "Hey! Wait!",
        "Nice to meet you. I have a question.",
      ],
      answer: 0,
      feedback:
        "I'm sorry to interrupt, but… is the polite way to start speaking when your manager is speaking: with a manager or a client, I'm makes it a little more polite. Stop talking and Hey! Wait! are rude to a manager. Nice to meet you is only for the first time you meet someone.",
    },
    {
      kind: "gap",
      stem: "Sara, this ___ Daniel. He's our new designer.",
      answers: ["is"],
      feedback:
        "To introduce one person, say This is + the name: Sara, this is Daniel. Then add something about him: He's our new designer.",
    },
    {
      kind: "gap",
      stem: "It was nice ___ to you. See you on Monday! (talk, one word)",
      answers: ["talking"],
      feedback:
        "It was nice talking to you is a friendly way to end a conversation. It was nice to talk to you is also correct, but it has two words in the gap.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to interrupt a meeting politely.",
      words: ["make", "interrupt,", "I", "but", "Sorry", "suggestion?", "could", "to", "a"],
      answer: "Sorry to interrupt, but could I make a suggestion?",
      feedback:
        "Sorry to interrupt comes first, then but and a polite question with could: could I make a suggestion? We make a suggestion, not do a suggestion.",
    },
    {
      kind: "mistake",
      tokens: ["Please", "to", "meet", "you,", "Ms", "Lee."],
      wrongIndex: 0,
      correction: "Pleased",
      feedback:
        "The phrase is Pleased to meet you, with -d: pleased means happy. Please is a different word, for asking politely. Nice to meet you is also correct, and a little less formal.",
    },
    {
      kind: "choice",
      stem: "You are chatting with a colleague that you see every day, at the coffee machine. Now you need to go back to your desk. What do you say?",
      options: ["Nice to meet you.", "Sorry to interrupt.", "Well, I'd better get back to work. See you later."],
      answer: 2,
      feedback:
        "I'd better get back to work gives a friendly reason to end the conversation, and See you later says goodbye. Nice to meet you is only for the first time you meet someone, and you see this colleague every day. Sorry to interrupt is for when someone else is speaking.",
    },
  ],

  levelRationale:
    "The CEFR's B1 descriptors include starting, keeping up and ending a simple face-to-face conversation, and using a suitable phrase to get the floor, which means to start speaking in a discussion. Introducing yourself and others at work and interrupting politely are those skills. The topic builds on A1 greetings-and-introducing-yourself and keeps its rules: Hi is informal, Nice to meet you is only for the first meeting, and Mr, Mrs or Ms goes with the family name. I'd better comes from order 36.",

  sourceNotes:
    "english_grammar.txt, # Question, opens with workplace phrases: introducing yourself (Hello, my name's Meera), introducing someone else (Can I introduce you to our new trainee?), getting attention or interrupting (Name, do you have a minute?, Can I have some of your time?, Could I stop you for a minute?) and ending a conversation (It's been nice talking to you, Meera). These agree with Swan, Practical English Usage, and some are used. Could I stop you for a minute? can sound strong, so the softer Sorry to interrupt, but… is taught first. # Statements gives I'm sorry. I interrupted you., After you and No, you go first, which agree with Swan; After you is used.",
};
