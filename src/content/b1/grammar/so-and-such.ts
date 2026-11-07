import type { RuleTopic } from "../../schema";

export const soAndSuch: RuleTopic = {
  slug: "so-and-such",
  title: "So, such and such a: so kind, such a kind person",
  summary: "So kind, such a kind person, such kind people. Choose so or such by what comes next, and say what happened with so … that and such … that.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 24,

  explanation: [
    "<b>So</b> and <b>such</b> both make a description stronger, like very. Which one you use depends on the words after it.",
    "Use <b>so</b> before an adjective or an adverb, with no noun after it: The film was <b>so</b> funny. She speaks <b>so</b> quickly. Remember: an adjective is a word that tells us more about a noun: what the person or thing is like.",
    "Use <b>such a</b> or <b>such an</b> before a singular noun, usually with an adjective: She's <b>such a</b> kind person. It was <b>such an</b> easy question. It's <b>such a</b> pity. The word just after a or an decides which one to use: such an easy question, but such a difficult question.",
    "Use <b>such</b> with no a before a plural noun or an uncountable noun, usually with an adjective: They're <b>such</b> friendly people. We had <b>such</b> good weather. Weather is uncountable, so we don't say such a good weather. Remember: plural means two or more.",
    "Before much, many, few and little, use <b>so</b>, not such: There were <b>so many</b> people. I've got <b>so much</b> work this week.",
    "To say what happened because of it, use <b>so … that</b> or <b>such … that</b>: The film was <b>so</b> boring <b>that</b> I fell asleep. It was <b>such a</b> long journey <b>that</b> we stopped twice. In speech, we often leave out that: I was so hungry I ate two sandwiches.",
    "The order is fixed. Such comes before a: such a nice day, not a such nice day. And so doesn't go before a or a noun: such a nice day, not so a nice day or a so nice day.",
  ].join("\n\n"),

  form: [
    "so + adjective or adverb: so funny · so quickly",
    "such a / an + (adjective) + singular noun: such a kind person · such an easy question",
    "such + (adjective) + plural or uncountable noun: such friendly people · such good weather",
    "so much / so many / so few / so little + noun: so many people",
    "so … that · such … that: It was so cold that the lake froze.",
  ].join("\n"),

  examples: [
    {
      sentence: "It's <b>so</b> hot today!",
      why: "Hot is an adjective with no noun after it, so we use <b>so</b>.",
    },
    {
      sentence: "Your grandmother is <b>such a</b> lovely woman.",
      why: "Woman is a singular noun, so we use <b>such a</b>, then the adjective and the noun.",
    },
    {
      sentence: "These are <b>such</b> beautiful photos.",
      why: "Photos is a plural noun, so we use <b>such</b> with no a.",
    },
    {
      sentence: "We had <b>such</b> fun at the party.",
      why: "Fun is an uncountable noun, so we use <b>such</b> with no a. There is no adjective here, and that is fine.",
    },
    {
      sentence: "The music was <b>so</b> loud <b>that</b> we couldn't talk.",
      why: "<b>So</b> + adjective + <b>that</b> says what happened because the music was loud.",
    },
    {
      sentence: "It was <b>such a</b> cold night <b>that</b> the lake froze.",
      why: "Night is a singular noun, so we use <b>such a</b> … <b>that</b>.",
    },
  ],

  pitfall: {
    wrong: "He's so a good teacher.",
    right: "He's <b>such a</b> good teacher.",
    why: "Teacher is a singular noun, so we use <b>such a</b>. So goes before an adjective with no noun after it: He's so good.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "It was ___ beautiful day that we had lunch in the garden.",
      options: ["so", "such", "such a"],
      answer: 2,
      feedback:
        "Day is a singular noun, so we use such a, then the adjective and the noun: It was such a beautiful day that we had lunch in the garden. So doesn't go before a noun, and such needs a before a singular noun.",
    },
    {
      kind: "choice",
      stem: "He drives ___ fast that I'm always scared in his car.",
      options: ["such", "so", "such a"],
      answer: 1,
      feedback:
        "Fast is an adverb here, with no noun after it, so we use so: He drives so fast that I'm always scared in his car. Such and such a go before a noun.",
    },
    {
      kind: "gap",
      stem: "We had ___ good weather on holiday that we went to the beach every day. (so, such or such a)",
      answers: ["such"],
      feedback:
        "Weather is an uncountable noun, so we use such with no a: We had such good weather. Such a is only for a singular noun, and so doesn't go before a noun.",
    },
    {
      kind: "gap",
      stem: "There were ___ many people at the concert that we couldn't see the stage. (so or such)",
      answers: ["so"],
      feedback:
        "Before many and much, we use so, not such: There were so many people at the concert that we couldn't see the stage.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a sentence.",
      words: ["easy", "It", "test.", "such", "was", "an"],
      answer: "It was such an easy test.",
      feedback:
        "Such comes before an, then the adjective and the singular noun: It was such an easy test. We use an because easy starts with a vowel sound.",
    },
    {
      kind: "mistake",
      tokens: ["I", "was", "such", "tired", "that", "I", "went", "to", "bed", "at", "eight."],
      wrongIndex: 2,
      correction: "so",
      feedback:
        "Tired is an adjective with no noun after it, so we use so: I was so tired that I went to bed at eight. Such goes before a noun.",
    },
  ],

  levelRationale:
    "English Grammar Profile: so before an adjective is an A2 point, and such a + adjective + noun, such + plural or uncountable noun, and so … that and such … that are B1 points. So much and so many before a noun are taught because learners often say such many, and because the simple rule (no noun after so) is not true for them. The quiz never gaps that, because it can be left out, and every gap names the words to choose from. The order rules (such a, not a such) come from Swan, Practical English Usage.",

  sourceNotes:
    "english_grammar.txt, # So, such, such a: so + adjective or adverb, such a + adjective + singular countable noun, and such + adjective + plural or uncountable noun agree with Swan. Its 'no noun after it' for so is true for so + adjective, but so much, so many, so few and so little go before a noun, so this topic adds them. # Very, really, So agrees that so doesn't go with an adjective and a noun. The note doesn't give so … that, such … that, such with no adjective (such fun) or leaving out that; these are authored from Swan, Practical English Usage.",
};
