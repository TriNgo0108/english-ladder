import type { PhraseTopic } from "../../schema";

export const summarisingAndAddingPoints: PhraseTopic = {
  slug: "summarising-and-adding-points",
  title: "Summarising and adding points: To sum up, What's more, By the way",
  summary: "Finish with To sum up or In short, add a point with What's more or Not only that, and change the subject with By the way, in the right register.",
  level: "b2",
  category: "writing",
  shape: "phrases",
  order: 28,

  explanation: [
    "When you finish a talk, a report or a long email, it helps to give the main idea again in a few words. This is called <b>summarising</b>. When you want to give one more point, you use a phrase for <b>adding</b>. These phrases usually go at the start of a sentence, with a comma after them (B1 commas). Remember: register means how formal or informal your words are. Each group below has its register.",
    "<b>To sum up</b>, <b>In short</b> and <b>All in all</b> are neutral: you can use them in speech and in most writing. To sum up usually comes at the end of a talk or a piece of writing: To sum up, the new system is cheaper and faster. In short often comes after a long explanation: In short, we need more time. All in all means thinking about everything together, the good and the bad. <b>In conclusion</b> and In summary are formal, and they are usual at the end of an essay or a report.",
    "<b>What's more</b> and <b>Not only that</b> add a second point, often a stronger one: The flat is big. What's more, it has a garden. They are neutral, and common in speech and in everyday writing, like emails and blogs. In a formal report or essay, <b>Furthermore</b>, <b>Moreover</b> or In addition (B1) is more usual.",
    "Not only that, but… is a fixed phrase, so it has no inversion: Not only that, but it's also cheaper. Compare order 20, where not only starts a longer clause and the auxiliary comes first: Not only did she write the music, but she also sang the songs.",
    "<b>While I'm on the subject</b> adds a point about the subject that you are already talking about. One other thing to mention is… and There's one more point I'd like to make add a last point, often in a meeting or a talk. These are neutral, and they are mostly used in speech.",
    "<b>By the way</b> changes the subject to something new, often something you have just remembered. It is informal: it is common in conversation and in messages to friends and colleagues you know well. Don't use it in a formal letter or report.",
    "The linkers in order 17 are for reasons, results and contrasts. The phrases in this topic don't show a reason or a contrast: they show that you are finishing, adding or changing the subject.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Summarising",
      phrases: ["To sum up, the new system is cheaper and faster.", "In short, we need more time.", "All in all, it was a very good year."],
      register: "neutral",
    },
    {
      situation: "Summarising in formal writing",
      phrases: ["In conclusion, the evidence shows that the plan will work.", "In summary, there are three main reasons for the fall in sales."],
      register: "formal",
    },
    {
      situation: "Adding a point",
      phrases: [
        "What's more, it has a garden.",
        "Not only that, but it's also cheaper.",
        "One other thing to mention is the cost of parking.",
        "There's one more point I'd like to make.",
      ],
      register: "neutral",
    },
    {
      situation: "Adding a point in formal writing",
      phrases: ["Furthermore, the new system is easier to use.", "Moreover, the costs are lower than expected."],
      register: "formal",
    },
    {
      situation: "Adding a point about the same subject",
      phrases: ["While I'm on the subject, has anyone checked the travel costs?"],
      register: "neutral",
    },
    {
      situation: "Changing the subject",
      phrases: ["By the way, did you hear about Sam's new job?", "Oh, by the way, I found your keys."],
      register: "informal",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You're at the end of a presentation, and you want to give the main idea again in a few words. Which phrase do you start with?",
      options: ["By the way,", "To sum up,", "What's more,", "While I'm on the subject,"],
      answer: 1,
      feedback:
        "To sum up gives the main idea again at the end. What's more and While I'm on the subject add a point, and By the way changes the subject.",
    },
    {
      kind: "choice",
      stem: "You're writing a formal report for your company's directors. Which phrase is best for adding one more point?",
      options: ["By the way,", "Oh, and another thing,", "Furthermore,"],
      answer: 2,
      feedback:
        "Furthermore is formal, so it fits a report for the directors. By the way and Oh, and another thing are informal, and they belong in conversation.",
    },
    {
      kind: "gap",
      stem: "The hotel was cheap. What's ___, it was right next to the beach. (one word)",
      answers: ["more"],
      feedback:
        "What's more adds a second, often stronger, point: What's more, it was right next to the beach. It is neutral; in formal writing, use furthermore or moreover.",
    },
    {
      kind: "gap",
      stem: "There were a few problems, but all ___ all, it was a very successful year for the company. (one word)",
      answers: ["in"],
      feedback:
        "All in all means thinking about everything together, the good and the bad: all in all, it was a very successful year.",
    },
    {
      kind: "choice",
      stem: "You're chatting with a colleague about a football match. Suddenly you remember something different: you want to ask if she got your email. Which phrase fits best?",
      options: ["By the way,", "In conclusion,", "Furthermore,", "To sum up,"],
      answer: 0,
      feedback:
        "By the way changes the subject to something new that you have just remembered, and it is informal, so it fits a chat. In conclusion and to sum up are for the end of a talk, and furthermore adds a point in formal writing.",
    },
    {
      kind: "wordbank",
      prompt: "In a meeting about the budget, you want to ask one more question about the same subject. Put the words in order.",
      words: ["subject,", "much", "While", "does", "on", "the", "I'm", "how", "parking", "cost?"],
      answer: "While I'm on the subject, how much does parking cost?",
      feedback:
        "While I'm on the subject adds a point about the same subject: the budget. After it, the question has the usual order: how much does parking cost?",
    },
  ],

  levelRationale:
    "The English Vocabulary Profile usually gives by the way and what's more as B1, and to sum up, in short, all in all, not only that, while I'm on the subject, furthermore and moreover as B2 (my best reading of the profile, not a checked list). The CEFR's B2 descriptors for coherence say a learner can use a number of linking devices to mark clearly the relationships between ideas, and to sum up a talk or a text. The spec (section 8) places summarising and adding points at B2 with no family. The topic builds on B1 linking words (in addition) and B2 advanced linkers (order 17), and it separates Not only that from the inversion in order 20. Every phrase has a register label: By the way is informal, To sum up is neutral, and In conclusion and Furthermore are formal.",

  sourceNotes:
    "english_grammar.txt, # Adding points and summarizing gives In short, To sum up and All in all for summarising, and One other thing to mention, While I'm on the subject, Not only that, What's more and By the way for adding. All agree with Swan, Practical English Usage, and are used. The note's 'There's additional point' is missing an article and is not idiomatic; There's one more point I'd like to make is used instead. In conclusion, In summary, Furthermore and Moreover are added from Swan as the formal choices, and their register labels, with By the way informal and To sum up neutral, are checked against Swan and the learner dictionaries. The heading uses the American spelling summarizing; the site uses summarising, which is more common in Britain. There is no mistake item: each one-token error tried (To sum on, In conclude, All of all) had a second single-token fix (To go on, To conclude, First of all), so the quiz tests the phrases with choices, gaps and a wordbank instead.",
};
