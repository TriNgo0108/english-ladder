import type { PhraseTopic } from "../../schema";

export const discursiveAndArgumentativeWriting: PhraseTopic = {
  slug: "discursive-and-argumentative-writing",
  title: "Discursive and argumentative writing: It is often argued that…, On balance…",
  summary: "Set out an issue, give both sides with Proponents of… and Critics…, concede a point with Admittedly, give your view and finish with On balance…",
  level: "c1",
  category: "writing",
  shape: "phrases",
  order: 15,

  explanation: [
    "A <b>discursive essay</b> looks at an issue from more than one side before it reaches a view. An <b>argumentative essay</b> argues for one view from the start, but it still deals with the other side. Both are written for exams, courses, articles and reports, so their register is formal or neutral, never informal. Remember: register means how formal or informal your words are. A common plan has five parts: the issue, one side, the other side, your own view, and a conclusion.",
    "<b>Introduce the issue</b> without saying whose view it is. <b>It is often argued that</b> + a clause gives a common view: It is often argued that social media does more harm than good. This is <b>it</b> + a passive verb + a that clause, as in order 3: it gives a view without saying who holds it. <b>It is widely believed that</b> … works the same way, and so does <b>The question of whether</b> … <b>has been widely debated</b>. These are formal.",
    "<b>Present one side.</b> <b>Proponents of</b> + a noun are people who support an idea, and <b>advocates of</b> means the same: Proponents of free tuition argue that education benefits the whole of society. Both are formal; supporters of means the same and suits any writing. After them, <b>argue that</b> is neutral about whether you agree. <b>Claim that</b> can suggest that you are not sure the view is true.",
    "<b>Present the other side.</b> <b>Critics</b>, <b>on the other hand</b>, … and <b>Opponents of</b> … give the opposite view: Critics, on the other hand, point out that someone has to pay for it. As in B2, on the other hand gives the other side of a question. <b>Point out that</b> suggests that the point is true.",
    "<b>Concede a point.</b> Remember: accepting that one fact is true, while saying that it doesn't change your main point, is called concession. It makes an argument sound fair. <b>Admittedly</b> and <b>Granted</b> (order 10) start a sentence that accepts a point against your view: Admittedly, free tuition would be expensive. Both are neutral. In more formal writing, use <b>While it is true that</b> … or <b>Although</b> … (order 9) inside one sentence, or <b>It cannot be denied that</b> …: While it is true that the scheme is costly, its long-term benefits are greater. <b>Much as</b> (order 9) goes with verbs of liking and feeling, and it is formal: Much as I admire the aim of the policy, I doubt that it would work. Then go back to your own argument.",
    "<b>Give your view.</b> <b>In my view</b>, … and <b>I would argue that</b> … are neutral. <b>I would contend that</b> … is formal and firm: contend means argue that something is true. It is my firm belief that … is formal too. In some academic writing, I is avoided, so writers use impersonal forms instead: It seems clear that … Hedges from B2 keep a claim fair: Remember: making a statement less strong or less sure is called hedging. High fees tend to discourage poorer students is fairer than High fees stop poorer students from studying.",
    "<b>Conclude.</b> <b>On balance</b>, … means after thinking about both sides: On balance, the arguments for free tuition are stronger. <b>All things considered</b>, … means the same. Both are neutral. As in B2 summarising and adding points, <b>In conclusion</b>, … is formal, and it is usual at the end of an essay.",
    "Start each paragraph with a discourse marker (order 10), like Firstly or Turning to. Use full forms, like it is and do not, and no exclamation marks, as in any formal writing.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Introducing the issue",
      phrases: [
        "It is often argued that social media does more harm than good.",
        "It is widely believed that cars should be banned from city centres.",
        "The question of whether university should be free has been widely debated.",
      ],
      register: "formal",
    },
    {
      situation: "Presenting one side",
      phrases: [
        "Proponents of free tuition argue that education benefits the whole of society.",
        "Advocates of the ban claim that it would cut pollution.",
      ],
      register: "formal",
    },
    {
      situation: "Presenting the other side",
      phrases: [
        "Critics, on the other hand, point out that someone has to pay for it.",
        "Opponents of the ban argue that it would hurt local shops.",
      ],
      register: "formal",
    },
    {
      situation: "Conceding a point",
      phrases: ["Admittedly, free tuition would be expensive.", "Granted, the ban would be unpopular at first."],
      register: "neutral",
    },
    {
      situation: "Conceding a point in formal writing",
      phrases: [
        "While it is true that the scheme is costly, its long-term benefits are greater.",
        "It cannot be denied that some shops would lose customers.",
        "Much as I admire the aim of the policy, I doubt that it would work.",
      ],
      register: "formal",
    },
    {
      situation: "Giving your view",
      phrases: ["In my view, the benefits clearly outweigh the costs.", "I would argue that education is an investment, not a cost."],
      register: "neutral",
    },
    {
      situation: "Giving your view firmly, in formal writing",
      phrases: ["I would contend that the ban is long overdue.", "It is my firm belief that public transport should be free."],
      register: "formal",
    },
    {
      situation: "Concluding",
      phrases: ["On balance, the arguments for free tuition are stronger.", "All things considered, a gradual ban seems the best solution."],
      register: "neutral",
    },
    {
      situation: "Concluding in formal writing",
      phrases: ["In conclusion, the evidence suggests that the ban would work."],
      register: "formal",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "In a formal essay, you want to present the view of people who support a four-day working week. Which sentence does this?",
      options: [
        "Loads of people reckon a four-day week is a great idea.",
        "On balance, a four-day week would be a sensible change.",
        "Proponents of a four-day week argue that it makes staff more productive.",
        "Critics, on the other hand, say that it would be too costly.",
      ],
      answer: 2,
      feedback:
        "Proponents of … argue that … presents the view of the people who support an idea, in a formal register. Loads of people reckon is informal, so it doesn't suit a formal essay. On balance gives the writer's conclusion, not the supporters' view, and Critics, on the other hand gives the opposite side.",
    },
    {
      kind: "choice",
      stem: "Your essay argues for a four-day week. In one sentence, you want to accept a point against your view before you go on with your argument. Which sentence does this?",
      options: [
        "Admittedly, a four-day week would not suit every business.",
        "In conclusion, a four-day week should be introduced.",
        "Furthermore, staff would have more time with their families.",
        "Proponents of a four-day week argue that staff would be happier.",
      ],
      answer: 0,
      feedback:
        "Admittedly accepts a point against your own view: that is concession, and the next sentence goes back to your argument. In conclusion ends the essay, Furthermore adds another point for your view, and Proponents of … argue gives the supporters' view, not a point against it.",
    },
    {
      kind: "gap",
      stem: "Some people would lose out. ___ balance, however, the advantages of the scheme outweigh its disadvantages. (one word)",
      answers: ["on"],
      feedback:
        "On balance means after thinking about both sides: On balance, however, the advantages of the scheme outweigh its disadvantages. The preposition is always on, not in or at.",
    },
    {
      kind: "gap",
      stem: "Much ___ I sympathise with the protesters, I cannot support their methods. (one word)",
      answers: ["as"],
      feedback:
        "Much as + a clause means although … very much (order 9), and it goes with verbs of feeling like sympathise, admire and like: Much as I sympathise with the protesters, I cannot support their methods. It is formal, and there is no but in the second part.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to introduce the issue in the first sentence of a formal essay.",
      words: ["damages", "It", "often argued", "is", "local communities.", "tourism", "that"],
      answer: "It is often argued that tourism damages local communities.",
      feedback:
        "It is often argued that + a clause gives a common view without saying whose it is, so it is a good first sentence for a discursive essay. Often goes after is, before the past participle argued.",
    },
    {
      kind: "mistake",
      tokens: ["Admitted,", "the", "scheme", "would", "be", "expensive,", "but", "it", "would", "save", "money", "in", "the", "long", "run."],
      wrongIndex: 0,
      correction: "Admittedly,",
      feedback:
        "To accept a point at the start of a sentence, use the adverb Admittedly: Admittedly, the scheme would be expensive, but it would save money in the long run. Granted, is also correct here, but Admitted, is not used this way.",
    },
  ],

  levelRationale:
    "The CEFR's C1 descriptors for reports and essays say a learner can write clear, well-structured expositions of complex subjects, underlining the relevant salient issues, and can expand and support points of view at some length with subsidiary points, reasons and relevant examples, and round off with an appropriate conclusion. A discursive or argumentative essay is that skill. The spec (section 8) places discursive and argumentative writing at C1 with no family. It builds on earlier C1 grammar by order: it + a passive verb + a that clause (order 3) for It is often argued that, concessive clauses (order 9) for while, although and much as, and discourse markers (order 10) for Admittedly, Granted, Firstly and Turning to. It keeps the B2 labels for In conclusion (formal) and on the other hand, and reuses the definitions of register, concession and hedging word for word. The English Grammar Profile records it + passive reporting verb + that clause and much as as concessive among its upper levels (my best reading of the profile, not a checked list); the phrase labels follow the learner dictionaries (contend formal; admittedly, granted and on balance unlabelled, so neutral).",

  sourceNotes:
    "english_grammar.txt has no section on discursive or argumentative writing (a new point in spec section 8); # Statements has Mind you, On the other hand and In other words, which are taught in B2 and order 10 and are not repeated. The topic is authored from Swan, Practical English Usage, entries discourse markers (concession with admittedly, granted, it is true that), much as, while (= although), on the other hand, and passive reporting structures (it is argued / believed that). Register labels follow the Oxford Advanced Learner's Dictionary and the Cambridge Dictionary as I know them: contend and proponent formal, admittedly, granted, on balance and all things considered without a label. Their online pages could not be fetched for this task (HTTP 403), so the labels were not re-checked live. Admitted, as a sentence adverb is not recorded in either dictionary, which is why it is the mistake item's wrong token; Granted, is recorded, and the feedback accepts it.",
};
