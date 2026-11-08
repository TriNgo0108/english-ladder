import type { PhraseTopic } from "../../schema";

export const aCoverLetter: PhraseTopic = {
  slug: "a-cover-letter",
  title: "A cover letter: I am writing to apply for…",
  summary: "Say which job you want, show why you fit it with phrases like responsible for and keen to, and ask for an interview, all in a formal register.",
  level: "b2",
  category: "writing",
  shape: "phrases",
  order: 26,

  explanation: [
    "A cover letter goes with your CV when you apply for a job. British English also calls it a covering letter. It tells the employer which job you want and why you are the right person for it. It is formal. Remember: register means how formal or informal your words are. Use the plan and the greetings from B1 letter structure, and keep it short: three or four paragraphs, on one page.",
    "<b>Say which job</b> you are applying for, and where you saw it: I am writing to apply for the position of sales assistant, as advertised on your website. We apply for a job, as in order 15. Position and post are formal words for job. I note from the job advert that… is a formal way to show that you have read the advert carefully.",
    "<b>Say why you fit the job.</b> Point to your CV, then choose two or three skills or experiences that match the advert: As you can see from my CV, I have three years' experience in customer service. I believe I have the necessary qualities for this role.",
    "The adjective and verb phrases from order 15 are very useful here: In my current job, I am <b>responsible for</b> training new staff. I am <b>familiar with</b> online booking systems. I am <b>keen to</b> take on more responsibility. I <b>work well under pressure</b>. Many of these phrases are neutral, not formal: you could also say them in an interview. They fit well in a formal letter when you use full forms, like I am and I have, and not I'm and I've.",
    "I am confident of being able to… is formal and correct. Of is a preposition, so the verb after it takes -ing, the gerund. Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund. I am confident that I can… means the same and is more common.",
    "<b>Close</b> by asking for an interview and saying when you are free: I would welcome the opportunity to discuss my application at an interview. Then add a closing line, like Thank you for considering my application, or I look forward to hearing from you.",
    "Sign off as in B1 letter structure: Yours sincerely after Dear + a name, and Yours faithfully after Dear Sir or Madam (British). If you can, find the name of the person who will read the letter: Dear Ms Patel is usually better than Dear Sir or Madam. Send your CV with it: Please find attached my CV (in an email), or I enclose my CV (on paper).",
    "Avoid informal words and phrases, like I'm really into…, Hi there and Cheers, and don't use exclamation marks (!).",
  ].join("\n\n"),

  situations: [
    {
      situation: "Saying which job you are applying for",
      phrases: [
        "I am writing to apply for the post of trainee accountant.",
        "I am writing to apply for the position of sales assistant, as advertised on your website.",
        "I note from the job advert that you are looking for someone who speaks Spanish.",
      ],
      register: "formal",
    },
    {
      situation: "Saying why you fit the job",
      phrases: [
        "As you can see from my CV, I have three years' experience in customer service.",
        "I believe I have the necessary qualities for this role.",
        "I am confident of being able to meet your sales targets.",
      ],
      register: "formal",
    },
    {
      situation: "Describing your skills and experience",
      phrases: [
        "In my current job, I am responsible for training new staff.",
        "I am familiar with online booking systems.",
        "I am keen to take on more responsibility.",
        "I work well under pressure.",
      ],
      register: "neutral",
    },
    {
      situation: "Sending your CV",
      phrases: ["Please find attached my CV and a copy of my certificate.", "I enclose my CV and the names of two referees."],
      register: "formal",
    },
    {
      situation: "Asking for an interview",
      phrases: ["I would welcome the opportunity to discuss my application at an interview.", "I am available for interview from 1 June."],
      register: "formal",
    },
    {
      situation: "The closing line",
      phrases: ["Thank you for considering my application.", "I look forward to hearing from you."],
      register: "formal",
    },
    {
      situation: "Signing off after Dear + a name (British)",
      phrases: ["Yours sincerely,"],
      register: "formal",
    },
    {
      situation: "Signing off after Dear Sir or Madam (British)",
      phrases: ["Yours faithfully,"],
      register: "formal",
    },
    {
      situation: "Not for a cover letter",
      phrases: ["Hi there!", "I'm really into marketing!", "Cheers,"],
      register: "informal",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Which is the best first sentence for a cover letter?",
      options: [
        "Hi! I really, really want this job!",
        "My CV is attached, have a look.",
        "I am writing to apply for the position of hotel receptionist, as advertised on your website.",
        "I'm into hotels, so here's my CV.",
      ],
      answer: 2,
      feedback:
        "The first sentence says which job you are applying for and where you saw it, in a formal register: I am writing to apply for the position of… The other three are informal, and they don't name the job.",
    },
    {
      kind: "gap",
      stem: "As you can see ___ my CV, I have worked in sales for six years. (one word)",
      answers: ["from", "in", "on"],
      feedback:
        "As you can see from my CV is the usual phrase. As you can see in my CV and on my CV are also correct, because we say that something is in or on a CV.",
    },
    {
      kind: "gap",
      stem: "I am familiar ___ most accounting software. (one word)",
      answers: ["with"],
      feedback:
        "We say familiar with, as in order 15: I am familiar with most accounting software. It means that you know it and can use it.",
    },
    {
      kind: "choice",
      stem: "You are writing a cover letter to a large company. Which sentence fits best?",
      options: [
        "I am keen to develop my skills in a larger company.",
        "I'm dead keen on working with you guys!",
        "Your company is cool, so I want to join it.",
      ],
      answer: 0,
      feedback:
        "I am keen to develop my skills… uses keen to + the base form (order 15) and the full form I am, so it fits a formal letter. Dead keen, you guys and cool are informal, and the exclamation mark is too.",
    },
    {
      kind: "wordbank",
      prompt: "End your cover letter by saying that you can come to an interview on any day. Put the words in order.",
      words: ["interview", "at", "I", "time.", "for", "am", "any", "an", "available"],
      answer: "I am available for an interview at any time.",
      feedback:
        "Available for + a noun says when you are free: I am available for an interview at any time. British English also says available for interview, with no an.",
    },
    {
      kind: "mistake",
      tokens: ["I", "have", "three", "years'", "experience", "in", "manage", "a", "small", "team."],
      wrongIndex: 6,
      correction: "managing",
      feedback:
        "In is a preposition, so the verb after it takes -ing, the gerund: I have three years' experience in managing a small team. This is the same rule as good at managing in order 15.",
    },
  ],

  levelRationale:
    "The CEFR's B2 descriptors for correspondence include formal letters that give reasons and present the writer's case, and a job application letter is a common B2 task. The spec (section 8) places the cover letter at B2 with no family, and the B2 table puts it after adjective and verb phrases (order 15), which it reuses: responsible for, familiar with, keen to and work well under pressure. It keeps B1 letter-structure's greetings and British sign-off rule, and B1 a-professional-email's Please find attached. Phrases that are neutral, like I am responsible for…, are labelled neutral, not formal: they fit in a formal letter because the letter uses full forms.",

  sourceNotes:
    "english_grammar.txt, # Covering letter gives I am writing to apply for, As you can see from my CV, I note from the job advert, I believe I have the necessary qualities, I am confident of being able to and I would like to have the chance to. All agree with Swan, Practical English Usage, and all but the last are used; I would welcome the opportunity is used for the same idea, because it is more usual in a cover letter. The note's advice to change the dates on a CV so that there are no gaps is not used: a cover letter should be honest, and it is not about the CV's dates. 'there no gaps' is missing are. British covering letter and the usual cover letter, available for interview with no article, and in or on a CV are checked against Swan and the learner dictionaries.",
};
