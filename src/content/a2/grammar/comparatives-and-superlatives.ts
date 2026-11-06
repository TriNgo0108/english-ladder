import type { RuleTopic } from "../../schema";

export const comparativesAndSuperlatives: RuleTopic = {
  slug: "comparatives-and-superlatives",
  family: "comparison",
  title: "Comparatives and superlatives: bigger, the biggest",
  summary: "Compare people and things: older than, more expensive than, the biggest, the best. Learn when to use -er and -est and when to use more and most.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 3,

  explanation: [
    "Remember: an adjective is a word that tells us more about a noun, like big, old or cheap. A noun is a word for a person, a thing, an animal or a place. Adjectives have special forms for comparing people and things.",
    "To compare two people or things, use the <b>comparative</b> and then <b>than</b>. The comparative is the form of an adjective that we use to compare two: old → older, expensive → more expensive. My brother is <b>older than</b> me. The train is <b>more expensive than</b> the bus.",
    "To say that one person or thing is number one in a group of three or more, use <b>the</b> and the <b>superlative</b>. The superlative is the form of an adjective for number one in a group: old → the oldest, expensive → the most expensive. She is <b>the oldest</b> person in my family. We often use <b>in</b> before a place or a group: the biggest city <b>in</b> the world.",
    "Which form do you use? It depends on how long the adjective is. A syllable is a part of a word with one vowel sound: big has one syllable, hap-py has two, and ex-pen-sive has three.",
    "Adjectives with one syllable add <b>-er</b> and <b>-est</b>: cheap → cheaper → the cheapest, old → older → the oldest. If the adjective ends in e, add only -r and -st: nice → nicer → the nicest. If it ends in one vowel and then one consonant, write the last letter two times: big → bigger → the biggest, hot → hotter → the hottest. We do not do this with w: new → newer. Remember: a vowel is one of the letters a, e, i, o and u. A consonant is any other letter.",
    "Adjectives with two syllables that end in -y also use -er and -est, and the y changes to i: happy → happier → the happiest, easy → easier → the easiest, busy → busier → the busiest.",
    "Most other adjectives with two syllables, and all adjectives with three or more, use <b>more</b> and <b>the most</b>: boring → more boring → the most boring, expensive → more expensive → the most expensive. A few adjectives with two syllables, like quiet and simple, can use both: quieter or more quiet. Both are correct.",
    "Two common adjectives are irregular: good → <b>better</b> → <b>the best</b>, and bad → <b>worse</b> → <b>the worst</b>.",
    "Use -er or more, not both: bigger, not more bigger. After a comparative, use <b>than</b>: taller than, not taller that.",
  ].join("\n\n"),

  form: [
    "one syllable: cheap → cheaper → the cheapest · nice → nicer → the nicest · big → bigger → the biggest",
    "two syllables, ending in -y: happy → happier → the happiest",
    "two or more syllables: boring → more boring → the most boring · expensive → more expensive → the most expensive",
    "irregular: good → better → the best · bad → worse → the worst",
    "comparative + than · the + superlative",
  ].join("\n"),

  examples: [
    {
      sentence: "My brother is <b>older than</b> me.",
      why: "Old has one syllable, so we add <b>-er</b>. We compare two people, so <b>than</b> comes after older.",
    },
    {
      sentence: "London is <b>bigger than</b> Paris.",
      why: "Big ends in one vowel and then one consonant, so the g is written two times: <b>bigger</b>.",
    },
    {
      sentence: "The shop is always <b>busier</b> on Saturdays.",
      why: "Busy has two syllables and ends in -y, so the y changes to i and we add -er: <b>busier</b>.",
    },
    {
      sentence: "The film was <b>more interesting than</b> the book.",
      why: "Interesting is a long adjective, with four syllables, so we use <b>more</b>, not -er.",
    },
    {
      sentence: "Everest is <b>the highest</b> mountain in the world.",
      why: "Everest is number one of all the mountains, so we use <b>the</b> and the superlative: the highest. In comes before the world.",
    },
    {
      sentence: "It was <b>the most beautiful</b> beach on the island.",
      why: "Beautiful has three syllables, so the superlative is <b>the most</b> beautiful, not the beautifullest.",
    },
    {
      sentence: "My cooking is <b>worse than</b> my sister's, but my dad is <b>the best</b> cook in the family.",
      why: "Bad and good are irregular: bad → <b>worse</b>, good → <b>the best</b>. We do not say badder or the goodest.",
    },
  ],

  pitfall: {
    wrong: "My new flat is more bigger than my old one.",
    right: "My new flat is <b>bigger</b> than my old one.",
    why: "Big has one syllable, so it takes -er. Use -er or more, never both.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Her English is very good. It's ___ than mine.",
      options: ["more good", "better", "gooder", "best"],
      answer: 1,
      feedback:
        "Good is irregular. Its comparative is better: It's better than mine. We do not say more good or gooder. Best is the superlative, and it needs the, not than: the best.",
    },
    {
      kind: "gap",
      stem: "My new phone is ___ than my old one. It cost £200 more. (expensive)",
      answers: ["more expensive", "much more expensive", "a lot more expensive", "far more expensive"],
      feedback:
        "Expensive has three syllables, so the comparative uses more: My new phone is more expensive than my old one. We do not say expensiver. It cost more, so less expensive does not fit here.",
    },
    {
      kind: "gap",
      stem: "Everyone got question 1 right. It was the ___ question in the test. (easy)",
      answers: ["easiest"],
      feedback:
        "Question 1 is number one in a group of many questions, so we use the superlative. Easy has two syllables and ends in -y, so the y changes to i and we add -est: the easiest question.",
    },
    {
      kind: "choice",
      stem: "Russia is ___ country in the world.",
      options: ["the bigest", "bigger", "the most big", "the biggest"],
      answer: 3,
      feedback:
        "Russia is number one of all the countries, so we use the superlative with the. Big ends in one vowel and then one consonant, so the g is written two times: the biggest, not the bigest. Big is short, so we do not use most with it.",
    },
    {
      kind: "mistake",
      tokens: ["Today", "is", "the", "hotest", "day", "of", "the", "year."],
      wrongIndex: 3,
      correction: "hottest",
      feedback:
        "Hot ends in one vowel and then one consonant, so the t is written two times before -est: Today is the hottest day of the year.",
    },
    {
      kind: "choice",
      stem: "My brother is two years older ___ me.",
      options: ["than", "that", "of", "as"],
      answer: 0,
      feedback:
        "After a comparative like older, we use than: My brother is two years older than me. That, of and as are not used after a comparative to say who we compare with.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A2: comparatives with -er and than, superlatives with the and -est, more and the most with longer adjectives, and the irregular better, best, worse and worst are A2 points. This topic builds on the A1 topic on adjectives before the noun and after be. Far (further, the furthest), less and the least, as … as, and comparing with adverbs (more quickly) are left out, so the topic can stay with the main patterns.",

  sourceNotes:
    "english_grammar.txt, # Comparatives and superlatives. The one-syllable, -y and irregular sections agree with Swan. The note's 'Use more and the most for adjectives which have syllables or more' is missing a word (two), and as a rule it is too wide: two-syllable adjectives that end in -y take -er and -est (happier), as the note's own -y section shows. This topic says most other two-syllable adjectives. The note says the adjectives that can take both forms 'often end with a vowel sound'. Swan does not give that reason, so this topic only names quiet and simple as examples and does not test them. 'Cleaver' in the note should be clever. The doubled consonant (bigger), -e adjectives (nicer), than after the comparative, and no -er with more are authored from Swan, Practical English Usage. The note's far → farther/further is correct but left out here. Than me is the normal informal form (Swan), so the examples use it.",
};
