import type { RuleTopic } from "../../schema";

export const edAndIngAdjectives: RuleTopic = {
  slug: "ed-and-ing-adjectives",
  title: "-ed and -ing adjectives: bored or boring?",
  summary: "Bored or boring? Use -ed adjectives for how a person feels and -ing adjectives for what makes them feel that way: The film was boring, so I was bored.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 20,

  explanation: [
    "Many adjectives come in pairs, one with <b>-ed</b> and one with <b>-ing</b>: bored and boring, interested and interesting, tired and tiring. Remember: an adjective is a word that tells us more about a noun: what the person or thing is like.",
    "Adjectives with <b>-ed</b> say how a person <b>feels</b>: I'm <b>bored</b>. There's nothing to do. She was <b>excited</b> about her holiday. We were <b>tired</b> after the long walk.",
    "Adjectives with <b>-ing</b> describe the person or thing that <b>makes</b> us feel that way: This film is <b>boring</b>. (It makes me feel bored.) The news was very <b>exciting</b>. It was a <b>tiring</b> day.",
    "So one situation can have both: The lesson was <b>boring</b>, so the students were <b>bored</b>. The book is <b>interesting</b>, and I'm very <b>interested</b> in it. We often say interested <b>in</b>: He's interested in football.",
    "Be careful when you talk about people. I'm <b>bored</b> means that I feel bored. I'm <b>boring</b> means that other people feel bored with me! So for your feelings, use -ed: I'm interested in art, not I'm interesting in art.",
    "Some common pairs: bored, boring · interested, interesting · excited, exciting · tired, tiring · surprised, surprising · relaxed, relaxing · frightened, frightening · amazed, amazing.",
  ].join("\n\n"),

  form: [
    "-ed: how a person feels · I'm bored. She's interested in art.",
    "-ing: what makes the feeling · The film is boring. Art is interesting.",
    "interested in + noun: He's interested in football.",
  ].join("\n"),

  examples: [
    {
      sentence: "I'm <b>bored</b>. Let's go for a walk.",
      why: "<b>Bored</b> says how I feel, so it ends in -ed.",
    },
    {
      sentence: "This game is <b>boring</b>. Let's play something else.",
      why: "The game makes us feel bored, so we use <b>boring</b>, with -ing.",
    },
    {
      sentence: "My uncle is very <b>interested</b> in old cars.",
      why: "This is how my uncle feels about old cars, so we use <b>interested</b>, and then in.",
    },
    {
      sentence: "We had a <b>relaxing</b> weekend by the sea.",
      why: "The weekend made us feel relaxed, so we use <b>relaxing</b>, with -ing.",
    },
    {
      sentence: "The film was <b>frightening</b>, and the children were <b>frightened</b>.",
      why: "The film made the children feel afraid, so it is <b>frightening</b>. The children felt afraid, so they were <b>frightened</b>.",
    },
  ],

  pitfall: {
    wrong: "I was very exciting about the trip.",
    right: "I was very <b>excited</b> about the trip.",
    why: "This is how I felt, so use the <b>-ed</b> adjective. Exciting is for the thing that makes us feel that way: The trip was exciting.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "There's nothing to do and nothing on TV. I'm so ___.",
      options: ["boring", "bored", "bore"],
      answer: 1,
      feedback:
        "This is how I feel, so we use the -ed adjective: I'm so bored. I'm boring would mean that other people feel bored with me, and bore is not an adjective.",
    },
    {
      kind: "choice",
      stem: "The football match was really ___. Both teams played very well.",
      options: ["excited", "excite", "exciting"],
      answer: 2,
      feedback:
        "The match made people feel excited, so we use the -ing adjective: The match was really exciting. A match cannot feel excited, and excite is a verb, not an adjective.",
    },
    {
      kind: "choice",
      stem: "The museum tour was two hours long and nobody listened. The tour was ___, so the visitors were ___.",
      options: ["boring … bored", "bored … boring", "bored … bored", "boring … boring"],
      answer: 0,
      feedback:
        "The tour made the visitors feel bored, so the tour was boring, with -ing. The visitors felt it, so they were bored, with -ed: The tour was boring, so the visitors were bored.",
    },
    {
      kind: "gap",
      stem: "Nobody told us about the party, so we were very ___ when we opened the door. (surprised or surprising)",
      answers: ["surprised"],
      feedback:
        "This is how we felt when we saw the party, so we use the -ed adjective: We were very surprised. The party was surprising.",
    },
    {
      kind: "gap",
      stem: "We walked twenty kilometres today. It was a very ___ day. (tired or tiring)",
      answers: ["tiring"],
      feedback:
        "The day made us feel tired, so we use the -ing adjective: It was a very tiring day. We were tired.",
    },
    {
      kind: "mistake",
      tokens: ["My", "sister", "is", "very", "interesting", "in", "music."],
      wrongIndex: 4,
      correction: "interested",
      feedback:
        "This is how my sister feels about music, so we use the -ed adjective, and then in: My sister is very interested in music. Music is interesting.",
    },
  ],

  levelRationale:
    "English Grammar Profile: common -ed and -ing adjectives (bored, boring, interested, interesting, excited, exciting, tired, tiring) are A2 points. This topic uses a small set of very common pairs, and it gives the warning about I'm boring because it is the most common mistake with these words. The spelling of other -ed forms (worried, with y to i) and less common pairs (disappointed, embarrassed) are left out, and the gaps give both words in the hint, so the quiz tests the meaning and not the spelling.",

  sourceNotes:
    "english_grammar.txt, # Adjectives, ## -ed and -ing adjectives, and # -ed adj and -ing adj: -ed for how a person feels and -ing for what causes the feeling agree with Swan. The note's example He's very interesting, about a person, agrees with this topic's point that -ing adjectives can describe people too, and the topic adds the warning that I'm boring means something different from I'm bored. The list of pairs, interested in, and the examples are authored from Swan, Practical English Usage. The quiz uses contexts where only the feeling reading or only the cause reading is possible, so I'm boring is never a plain wrong answer without a reason.",
};
