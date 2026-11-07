import type { PhraseTopic } from "../../schema";

export const anInformalEmail: PhraseTopic = {
  slug: "an-informal-email",
  family: "emails",
  title: "An informal email",
  summary: "Write a friendly email to a friend or family member: start with Hi, give your news, ask questions and finish with Love or Best wishes.",
  level: "a2",
  category: "writing",
  shape: "phrases",
  order: 27,

  explanation: [
    "An informal email is an email to a person you know well: a friend, someone in your family, or a classmate. It is friendly, like talking. A formal email is for people you do not know, or for work, and it uses different phrases.",
    "Each group of phrases below has a register. The register tells you who the words are for. <b>Informal</b> is easy and friendly. <b>Neutral</b> is good for most people. <b>Formal</b> is for serious emails, for example to a company.",
    "An informal email usually has six parts, in this order. 1. Start: <b>Hi Sam,</b> or Hello Sam, with the person's first name and a comma. 2. An opening line: Thanks for your email. How are you? 3. Your news. 4. Your questions. 5. An ending: Write soon! See you soon. 6. A goodbye word and your name: Love, Ana.",
    "Write short paragraphs, with two or three sentences each. Start a new paragraph for a new idea, for example when you stop giving news and start asking questions.",
    "For news about the past, use the past simple: Last weekend we went to the beach. For plans, use going to or the present continuous: I'm going to visit you in May. We're moving to a new flat next month.",
    "Short forms like I'm, it's and don't are fine in an informal email. You can use exclamation marks (!) to sound happy: Guess what? I've got a new job! Don't use too many.",
    "Choose the goodbye word for the person. <b>Love</b> is for family and close friends. <b>Best wishes</b> is good for friends and also for people you know a little. Cheers is very informal and British. Do not use Yours sincerely or Yours faithfully with friends: they are only for formal letters and emails.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Starting the email",
      phrases: ["Hi Sam,", "Hello Maria,", "Hi everyone,"],
      register: "informal",
    },
    {
      situation: "Opening lines",
      phrases: [
        "Thanks for your email.",
        "It was great to hear from you.",
        "How are you? I hope you're well.",
        "Sorry I didn't write sooner. I was very busy at work.",
      ],
      register: "informal",
    },
    {
      situation: "Giving news",
      phrases: [
        "Guess what? I've got a new job!",
        "I've got some good news.",
        "Last weekend we went to the beach with the children.",
        "We're moving to a new flat next month.",
      ],
      register: "informal",
    },
    {
      situation: "Asking questions and asking for things",
      phrases: [
        "How was your holiday?",
        "Are you free on Saturday?",
        "Do you want to come for dinner?",
        "Could you send me the photos?",
      ],
      register: "informal",
    },
    {
      situation: "Ending the email",
      phrases: ["Write soon!", "Hope to hear from you soon.", "See you soon.", "Take care."],
      register: "informal",
    },
    {
      situation: "Saying goodbye to people you know well",
      phrases: ["Love,", "Lots of love,", "Cheers,"],
      register: "informal",
    },
    {
      situation: "Saying goodbye to friends and people you know a little",
      phrases: ["Best wishes,", "All the best,"],
      register: "neutral",
    },
    {
      situation: "Not for friends: a formal email",
      phrases: ["Dear Mr Brown,", "I am writing to ask about your English classes.", "Yours sincerely,"],
      register: "formal",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You are writing an email to your friend Sam. Which is the best first line?",
      options: ["Hi Sam,", "Dear Mr Sam,", "Yours sincerely,"],
      answer: 0,
      feedback:
        "To a friend, start with Hi or Hello, then the first name and a comma. Use Mr only with a family name (Mr Brown), and only in formal emails. Yours sincerely is not a start: it goes at the end of a formal email.",
    },
    {
      kind: "gap",
      stem: "Hi Ana, Thanks ___ your email. It was lovely to get your news.",
      answers: ["for"],
      feedback: "Say thanks for + the thing: Thanks for your email. Thanks for the photos. Not thanks to your email.",
    },
    {
      kind: "gap",
      stem: "It was great to ___ from you. I'm happy that your new job is going well.",
      answers: ["hear"],
      feedback:
        "It was great to hear from you is a friendly opening line. It means: I was happy to get your email. Hear from someone means get a message from them.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to ask your friend for something.",
      words: ["send", "the", "Could", "photos?", "me", "you"],
      answer: "Could you send me the photos?",
      feedback:
        "In the question, could comes first, then you, then the base form send. The person (me) comes before the thing (the photos): send me the photos.",
    },
    {
      kind: "choice",
      stem: "You are writing to your best friend. Which goodbye word is right before your name?",
      options: ["Yours faithfully,", "Dear,", "Love,"],
      answer: 2,
      feedback:
        "Love is the usual goodbye word for family and close friends. Yours faithfully is only for very formal letters, for example to a company when you do not know the person's name. Dear is for the start of an email, not the end.",
    },
    {
      kind: "mistake",
      tokens: ["Thank", "you", "for", "you", "email."],
      wrongIndex: 3,
      correction: "your",
      feedback:
        "Before a noun, use your (it belongs to you): your email. You is the person, so for you email is wrong. You can also say Thanks for your email, which is more informal.",
    },
  ],

  levelRationale:
    "The CEFR's A2 descriptors for writing include very simple personal letters for thanks and apology, and short simple messages about everyday things. An email to a friend is that task today. The phrases use A2 grammar from this level: the past simple for news, going to and the present continuous for plans, and could for asking for things. This is the first topic in the emails family. A professional email comes at B1.",

  sourceNotes:
    "english_grammar.txt, # Writing a email, says informal emails are for friends and people we know well, and that short paragraphs are easier to read. Both agree with standard guidance and are used here, but the note's own phrase lists are almost all formal (Dear Sir or Madam, Yours faithfully, I am writing to…), so they are used only in the formal contrast group. The note has errors: 'a informal email' should be an informal email, and 'Email are easier' should be Emails are easier. # Formal and informal phrases, ## Informal, gives Love, Cheers, Write back soon, Take care and Hope to hear from you soon. These agree with Swan, Practical English Usage, and some are used here. Its 'This just a note to ask you' is missing is, and 'sorry I've taken so long to reply' uses the present perfect (B1), so the past simple Sorry I didn't write sooner is used. Yours sincerely and Yours faithfully as British formal closes checked against Swan.",
};
