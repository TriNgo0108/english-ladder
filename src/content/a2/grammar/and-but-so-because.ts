import type { RuleTopic } from "../../schema";

export const andButSoBecause: RuleTopic = {
  slug: "and-but-so-because",
  family: "linking-words",
  title: "And, but, so and because: joining two ideas",
  summary: "Join two ideas with and, but, so and because: It was late, so we took a taxi. Learn which word comes before the reason and which comes before the result.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 18,

  explanation: [
    "We use <b>and</b>, <b>but</b>, <b>so</b> and <b>because</b> to join two ideas in one sentence. Each word has its own meaning, so choose the word that shows how the two ideas go together.",
    "<b>And</b> adds one more idea, or one more thing: I live in Rome <b>and</b> I work in a bank. We bought bread <b>and</b> milk. When the subject is the same in both ideas, we often do not say it again: She got up <b>and</b> had a shower. Remember: the subject is the person or thing that the sentence is about.",
    "<b>But</b> joins two ideas that are different, or a second idea that we do not expect after the first: The hotel was nice, <b>but</b> it was very expensive. I like tea, <b>but</b> I don't like coffee. He's only six, <b>but</b> he can read very well.",
    "<b>Because</b> comes before the <b>reason</b>. It answers the question Why?: I'm tired <b>because</b> I went to bed late. A: Why are you happy? B: <b>Because</b> it's my birthday! In a short answer like this, because and the reason can stand alone. In writing, join the reason to the other idea: I stayed at home because I was ill.",
    "<b>So</b> comes before the <b>result</b>: what happens because of the first idea. It was raining, <b>so</b> we took a taxi. I was hungry, <b>so</b> I made a sandwich.",
    "So and because can join the same two ideas, but in a different order. Because comes before the reason, and so comes before the result: We took a taxi <b>because</b> it was raining. (The reason is the rain.) It was raining, <b>so</b> we took a taxi. (The result is the taxi.)",
    "We often put a comma before but and so when they join two ideas: It was late, so we went home. We don't usually put a comma before because: We went home because it was late.",
  ].join("\n\n"),

  form: [
    "idea + and + one more idea: I live in Rome and I work in a bank.",
    "idea + but + a different idea: The flat is small, but it's nice.",
    "result + because + reason: I'm tired because I went to bed late.",
    "reason + so + result: I went to bed late, so I'm tired.",
  ].join("\n"),

  examples: [
    {
      sentence: "I went to the market <b>and</b> bought some apples.",
      why: "<b>And</b> adds one more thing that I did. The subject, I, is the same, so we do not say it again.",
    },
    {
      sentence: "My flat is small, <b>but</b> it's very comfortable.",
      why: "Small is not a good thing, but comfortable is a good thing. The two ideas are different, so we use <b>but</b>.",
    },
    {
      sentence: "She's learning English <b>because</b> she wants to work in London.",
      why: "Wanting to work in London is the reason, so it comes after <b>because</b>.",
    },
    {
      sentence: "The shop was closed, <b>so</b> I went home.",
      why: "Going home is the result of the closed shop, so it comes after <b>so</b>.",
    },
    {
      sentence: "We didn't go out <b>because</b> it was cold. · It was cold, <b>so</b> we didn't go out.",
      why: "These are the same two ideas. <b>Because</b> comes before the reason (it was cold). <b>So</b> comes before the result (we didn't go out).",
    },
  ],

  pitfall: {
    wrong: "I was hungry because I made a sandwich.",
    right: "I was hungry, <b>so</b> I made a sandwich.",
    why: "Making a sandwich is the result of being hungry, not the reason. Before a result, use <b>so</b>. Because would make the sandwich the reason for being hungry.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I drank a big glass of water ___ I was very thirsty.",
      options: ["so", "because", "but"],
      answer: 1,
      feedback:
        "Being very thirsty is the reason for drinking the water, so we use because: I drank a big glass of water because I was very thirsty. So would make being thirsty the result of drinking the water, and but is for two ideas that are different.",
    },
    {
      kind: "choice",
      stem: "My sister is very tall, ___ my brother is quite short.",
      options: ["so", "because", "but"],
      answer: 2,
      feedback:
        "Tall and short are very different, so we use but: My sister is very tall, but my brother is quite short. Her height is not the reason for his, and it is not the result, so so and because do not fit.",
    },
    {
      kind: "choice",
      stem: "At the shop, I bought some eggs ___ some cheese.",
      options: ["because", "so", "but", "and"],
      answer: 3,
      feedback:
        "And adds one more thing: I bought some eggs and some cheese. Because and so need a full idea after them, with a subject and a verb, and nothing here is different or unexpected, so but does not fit.",
    },
    {
      kind: "gap",
      stem: "The bus didn't come, ___ we walked to school. (so or because)",
      answers: ["so"],
      feedback:
        "Walking to school is the result of the bus not coming, so we use so: The bus didn't come, so we walked to school. Because would make walking the reason that the bus didn't come.",
    },
    {
      kind: "gap",
      stem: "Let's open the window ___ it's very hot in here. (so or because)",
      answers: ["because"],
      feedback:
        "The heat is the reason for opening the window, so we use because: Let's open the window because it's very hot in here. Before a reason, use because, not so.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a sentence.",
      words: ["sat", "full,", "so", "The", "outside.", "we", "café", "was"],
      answer: "The café was full, so we sat outside.",
      feedback:
        "First comes the reason, The café was full, then so and the result: we sat outside.",
    },
    {
      kind: "mistake",
      tokens: ["Why", "is", "Sam", "late?", "So", "he", "missed", "the", "bus."],
      wrongIndex: 4,
      correction: "Because",
      feedback:
        "The answer to Why? is a reason, so it starts with because: Why is Sam late? Because he missed the bus. So comes before a result, not a reason.",
    },
  ],

  levelRationale:
    "English Grammar Profile: and, but and because to join two ideas are A1–A2 points, and so for a result is an A2 point. This site places all four together at A2, so that so and because can be taught side by side: they join the same two ideas from different sides, which is the main mistake learners make. And and but are already used in A1 explanations; this topic names them and gives their meaning. Because at the start of a sentence, before the main idea (Because it was late, we went home), and other linking words (however, although, because of) are left to B1 and B2. Commas are given as a tendency with often and usually, and the quiz does not test them.",

  sourceNotes:
    "New topic: english_grammar.txt has no section on and, but, so and because. # Linking words and # Conjunction give higher linking words (however, nevertheless, whereas, despite, although, even though, because of, due to, owing to, as); they are above A2 and left to later levels. The note under # Conjunction that and can join two verb phrases (She got up and had a shower) agrees with this topic. The meanings, the reason and result contrast, the short answer Because …, and the comma tendency are authored from Swan, Practical English Usage. The gaps name so or because in the hint, because and could also join the ideas in a plain list of events (The bus didn't come and we walked to school).",
};
