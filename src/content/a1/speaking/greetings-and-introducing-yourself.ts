import type { PhraseTopic } from "../../schema";

export const greetingsAndIntroducingYourself: PhraseTopic = {
  slug: "greetings-and-introducing-yourself",
  family: "introductions",
  title: "Greetings and introducing yourself",
  level: "a1",
  category: "speaking",
  shape: "phrases",
  order: 23,

  explanation: [
    "A greeting is what you say when you meet someone: Hello! Good morning! The words you choose change with the person. Is it a friend, your teacher, or a manager at a job interview?",
    "Each group of phrases below has a register. The register tells you who the words are for. <b>Informal</b> is easy and friendly: for friends, family and people of your age. <b>Neutral</b> is good for most people and most places. <b>Formal</b> is for serious times, like a job interview or a first meeting at work.",
    "<b>Hello</b> is good for anyone, at any time. <b>Hi</b> is informal: use it with friends and family. Hey is very informal.",
    "<b>Good morning</b> (until about 12 o'clock), <b>good afternoon</b> (from 12 to about 6 o'clock) and <b>good evening</b> (after about 6 o'clock) are also ways to say hello. They are a little more polite than hello, and they are good at work, in shops and with your teacher. <b>Good night</b> is not hello. Say it only when you leave someone at night, or when you go to bed.",
    "After hello, people often ask <b>How are you?</b> The usual answer is short: I'm fine, thanks. And you? With friends, people also say How are you doing? or How's it going?",
    "To say your name, say <b>My name's Ana</b> or <b>I'm Ana</b>. My name's is the short form of my name is. To say your country, say I'm from Mexico. When you meet someone for the first time, say <b>Nice to meet you</b>. The other person answers Nice to meet you, too. Say this only the first time you meet a person.",
    "In a formal meeting, say your full name: My name is Ana Silva. Use Mr (for a man), Mrs (for a married woman) or Ms (for any woman) with the person's family name: Good morning, Mrs Lee. Not Good morning, Mrs Ana. Pleased to meet you is a little more formal than nice to meet you.",
    "To finish, say <b>Goodbye</b>. Bye and See you! are informal. See you tomorrow and Have a nice day are good for most people.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Saying hello to anyone",
      phrases: ["Hello.", "Hello, how are you?", "I'm fine, thanks. And you?"],
      register: "neutral",
    },
    {
      situation: "Saying hello at a time of day",
      phrases: ["Good morning.", "Good afternoon.", "Good evening."],
      register: "neutral",
    },
    {
      situation: "Saying hello to a friend",
      phrases: ["Hi!", "Hi, how are you doing?", "Hey, how's it going?"],
      register: "informal",
    },
    {
      situation: "Introducing yourself",
      phrases: ["Hello, my name's Ana.", "I'm Tom.", "I'm from Mexico.", "Nice to meet you.", "Nice to meet you, too."],
      register: "neutral",
    },
    {
      situation: "Asking about a new person",
      phrases: ["What's your name?", "Where are you from?"],
      register: "neutral",
    },
    {
      situation: "Meeting someone at a job interview",
      phrases: ["Good morning, Mrs Lee.", "My name is Ana Silva.", "Pleased to meet you."],
      register: "formal",
    },
    {
      situation: "Saying goodbye",
      phrases: ["Goodbye.", "See you tomorrow.", "Have a nice day."],
      register: "neutral",
    },
    {
      situation: "Saying goodbye to a friend",
      phrases: ["Bye!", "See you!", "See you later."],
      register: "informal",
    },
    {
      situation: "Leaving at night",
      phrases: ["Good night.", "Good night. See you tomorrow."],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You arrive at your English class at 9 o'clock in the morning. You say hello to your teacher. What do you say?",
      options: ["Good night.", "Good morning.", "Nice to meet you.", "Goodbye."],
      answer: 1,
      feedback:
        "It is the morning and you are saying hello, so say Good morning. Good night and Goodbye are for when you leave. Nice to meet you is only for the first time you meet someone, and you know your teacher.",
    },
    {
      kind: "gap",
      stem: "A: Nice to meet you. B: Nice to meet you, ___.",
      answers: ["too", "as well"],
      feedback:
        "The usual answer is Nice to meet you, too. Too here means: the same for me. Nice to meet you as well is also correct.",
    },
    {
      kind: "choice",
      stem: "You have a job interview in the morning. You meet the manager, Mrs Lee, for the first time. What do you say?",
      options: ["Good morning, Mrs Lee. Pleased to meet you.", "Hey, how's it going?", "Good night, Mrs Lee."],
      answer: 0,
      feedback:
        "A job interview is formal, so say Good morning, use Mrs with her family name, and say Pleased to meet you. Hey, how's it going? is very informal, for friends. Good night is only for leaving at night.",
    },
    {
      kind: "gap",
      stem: "A: How are you? B: I'm fine, ___. And you?",
      answers: ["thanks", "thank you", "thanks very much", "thank you very much"],
      feedback:
        "The usual answer is I'm fine, thanks or I'm fine, thank you. Both are correct. Then we often ask the same question back: And you?",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to ask a new person about their country.",
      words: ["from?", "you", "are", "Where"],
      answer: "Where are you from?",
      feedback:
        "The question word where comes first, then are, then you, and from goes at the end: Where are you from? The answer is I'm from…",
    },
    {
      kind: "mistake",
      tokens: ["Good", "night,", "Mr", "Brown.", "How", "are", "you", "today?"],
      wrongIndex: 1,
      correction: "morning,",
      feedback:
        "You are saying hello and asking How are you?, so this is a greeting. Good night is not a greeting. We say it only when we leave at night or go to bed. Use Good morning here. Good afternoon and Good evening are right too, later in the day.",
    },
  ],

  levelRationale:
    "The CEFR's A1 descriptors say a learner can make basic social contact with the simplest everyday polite forms of greetings, farewells and introductions, and can introduce themselves and ask and answer questions about personal details. The phrases here are those forms. This topic comes after the grammar topics, so be, short forms and Where are you from? are already known.",

  sourceNotes:
    "english_grammar.txt, # Question, opens with workplace phrases. Its first one, 'Hello, my name's Meera' for introducing yourself, agrees with this topic and is the model for 'Hello, my name's Ana'. The rest of that section (interrupting, presentations, complaints) is B1 and later, and is not used. The good night rule and the use of Mr, Mrs and Ms checked against Swan, Practical English Usage.",
};
