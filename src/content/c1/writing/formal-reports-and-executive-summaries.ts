import type { PhraseTopic } from "../../schema";

export const formalReportsAndExecutiveSummaries: PhraseTopic = {
  slug: "formal-reports-and-executive-summaries",
  family: "summarising",
  title: "Formal reports and executive summaries: This report aims to…, It is recommended that…",
  summary: "State the purpose, describe the method, present the findings and make recommendations, then sum it all up for a busy reader in an executive summary.",
  level: "c1",
  category: "writing",
  shape: "phrases",
  order: 16,

  explanation: [
    "A <b>formal report</b> gives facts and recommendations to readers who have to make a decision, like managers, a committee or a client. Its register is usually formal. Remember: register means how formal or informal your words are. A report has a heading for each part, and each part has its own phrases: the purpose, the method, the findings and the recommendations. A short summary of the whole report often comes first.",
    "<b>The purpose.</b> Say why the report was written: <b>This report aims to</b> + the base form, or <b>The purpose of this report is to</b> + the base form: This report aims to assess the need for a new staff canteen. Remember: the base form is the verb as you see it in a dictionary, with nothing added. Useful verbs are assess, evaluate, examine and outline.",
    "<b>The method.</b> Say how the information was gathered. Reports usually use the passive, because the action matters more than who did it: <b>A survey was carried out</b> among customers in May. <b>Interviews were conducted</b> with ten managers. <b>Data was collected from</b> 200 staff. Data was and data were are both correct: data were is traditional, and common in scientific writing, and data was is more usual in other writing.",
    "<b>The findings.</b> Say what you found. <b>It was found that</b> + a clause is an impersonal passive, as in order 3: It was found that most staff travel to work by car. <b>The survey revealed that</b> … and <b>The majority of respondents</b> … are common too. Respondents are the people who answer a survey. When the evidence is not complete, hedge, as in B2 hedging: Most staff appear to prefer flexible hours.",
    "<b>The recommendations.</b> Say what should happen next. After <b>It is recommended that</b>, formal English can use the base form for every subject: It is recommended that the company <b>adopt</b> flexible working hours. The base form used like this is called the subjunctive (order 2). As in order 2, should + the base form is usual in British English (that the company <b>should adopt</b>), and an ordinary verb (adopts) is common in informal British English. In a report, use the subjunctive or should. <b>We would recommend that</b> … and <b>The company should consider</b> + the -ing form are also used.",
    "<b>The executive summary.</b> An <b>executive summary</b> comes at the start of a long report. It gives the purpose, the main findings and the recommendations in a few lines, for a reader who may read nothing else. Open it with <b>This report summarises</b> … or <b>The key findings are as follows:</b> and a list. <b>In brief</b>, … means in a few words, without the details: In brief, staff want more flexible hours and better parking. It is neutral.",
    "As in B2 summarising and adding points, <b>In short</b> and <b>To sum up</b> are neutral: they are fine in a talk or an email about the report. <b>In summary</b> and <b>In conclusion</b> are formal, and they are usual at the end of a written report.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Stating the purpose",
      phrases: ["This report aims to assess the need for a new staff canteen.", "The purpose of this report is to evaluate the new booking system."],
      register: "formal",
    },
    {
      situation: "Describing the method",
      phrases: ["A survey was carried out among customers in May.", "Interviews were conducted with ten managers.", "Data was collected from 200 staff in three offices."],
      register: "formal",
    },
    {
      situation: "Presenting the findings",
      phrases: [
        "It was found that most staff travel to work by car.",
        "The survey revealed that sixty per cent of customers were satisfied.",
        "The majority of respondents said that the system was easy to use.",
      ],
      register: "formal",
    },
    {
      situation: "Making recommendations",
      phrases: [
        "It is recommended that the company adopt flexible working hours.",
        "It is recommended that a second car park should be built.",
        "We would recommend that staff be given more training.",
      ],
      register: "formal",
    },
    {
      situation: "Opening an executive summary",
      phrases: ["This report summarises the results of a staff survey carried out in March.", "The key findings are as follows:"],
      register: "formal",
    },
    {
      situation: "Giving the main points in a few words",
      phrases: ["In brief, staff want more flexible hours and better parking.", "In short, the new system has saved time.", "To sum up, the trial was a success."],
      register: "neutral",
    },
    {
      situation: "Ending a written report",
      phrases: ["In conclusion, the trial should be extended to all offices.", "In summary, the new system has reduced costs by fifteen per cent."],
      register: "formal",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You are writing the recommendations section of a formal report for the board of directors. Which sentence fits that section?",
      options: [
        "The company should totally go for flexible hours!",
        "It was found that most staff would like flexible hours.",
        "Data was collected from 200 members of staff.",
        "It is recommended that the company introduce flexible hours.",
      ],
      answer: 3,
      feedback:
        "It is recommended that + the subjunctive (introduce) makes a formal recommendation. The company should totally go for… is informal, and it has an exclamation mark. It was found that … gives a finding, and Data was collected from … describes the method.",
    },
    {
      kind: "choice",
      stem: "Which sentence belongs in the method section of a report, not in the findings?",
      options: [
        "It was found that sales had fallen in every region.",
        "Interviews were held with twelve store managers.",
        "The survey revealed that most staff were happy.",
        "It is recommended that the store open later.",
      ],
      answer: 1,
      feedback:
        "Interviews were held with … says how the information was gathered, so it belongs in the method. It was found that … and The survey revealed that … give findings, and It is recommended that … is a recommendation.",
    },
    {
      kind: "gap",
      stem: "It is recommended that the council ___ a new cycle lane on the High Street. (build; formal written English)",
      answers: ["build", "should build"],
      feedback:
        "After It is recommended that, formal English uses the subjunctive, the base form with no -s: that the council build. Should build is also correct, and usual in British English. In informal British English, that the council builds is also common, but a formal report uses build or should build.",
    },
    {
      kind: "gap",
      stem: "Data ___ collected from 450 customers in March. (the past simple of be, one word)",
      answers: ["was", "were"],
      feedback:
        "Data was collected and Data were collected are both correct. Data were is traditional, and common in scientific writing; data was is more usual in other writing.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to state the purpose of a report.",
      words: ["examine", "staff", "of", "This", "the", "aims", "absence.", "report", "to", "causes"],
      answer: "This report aims to examine the causes of staff absence.",
      feedback:
        "This report aims to + the base form states the purpose at the start of a report: This report aims to examine the causes of staff absence.",
    },
    {
      kind: "mistake",
      tokens: ["It", "is", "recommended", "that", "the", "company", "adopting", "a", "new", "travel", "policy."],
      wrongIndex: 6,
      correction: "adopt",
      feedback:
        "After It is recommended that + a subject, use the subjunctive, the base form: It is recommended that the company adopt a new travel policy. Should adopt is also correct. Recommend + the -ing form is correct only without a subject: We recommend adopting a new travel policy.",
    },
  ],

  levelRationale:
    "The CEFR's C1 descriptors for reports and essays say a learner can write clear, well-structured expositions of complex subjects, underlining the relevant salient issues, and the C1 descriptors for processing text include summarising long, demanding texts. A formal report with an executive summary is that skill at work. The spec (section 8) places formal reports and executive summaries at C1, and the plan makes it the C1 topic of the summarising family, after B2 summarising-and-adding-points, whose labels it keeps: In short and To sum up neutral, In summary and In conclusion formal. The English Grammar Profile records the mandative subjunctive after recommend at C1, with should + base form from B2, and it + passive + that clause at the upper levels (my best reading of the profile, not a checked list). The topic builds on impersonal passives (order 3) for It was found that, and the subjunctive (order 2) for It is recommended that, with order 2's rule that the base form and should + the base form are both accepted. Register, the base form and the subjunctive reuse their earlier wording.",

  sourceNotes:
    "english_grammar.txt, # Adding points and summarizing, ## Summarizing gives In short, To sum up and All in all, which are taught in B2 and keep their B2 labels here. # Statements gives report language for findings (There were more complaints this year than there were last year, The biggest number of complaints … concerned …, which should be a cause for concern) and passive forecasts (Sales are forecast to increase); these agree with Swan, Practical English Usage, and their style is used. The note's 'A increase in sales' should be An increase. The report phrases are authored from Swan, entries subjunctive (base form after recommend, should in British English, the ordinary present in informal British English), data (plural in scientific style, often uncountable with a singular verb otherwise), passive (used when the agent is unimportant) and passive reporting structures (it was found that). In brief is unlabelled in the learner dictionaries as I know them, so it is neutral, like In short.",
};
