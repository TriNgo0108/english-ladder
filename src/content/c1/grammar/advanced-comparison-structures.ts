import type { RuleTopic } from "../../schema";

export const advancedComparisonStructures: RuleTopic = {
  slug: "advanced-comparison-structures",
  family: "comparison",
  title: "Advanced comparison: the sooner the better, nowhere near as good, twice the size",
  summary: "The sooner, the better. It's far bigger, but nowhere near as nice. Twice the size of ours. Compare more precisely, with modifiers and fixed patterns.",
  level: "c1",
  category: "grammar",
  shape: "rule",
  order: 4,

  explanation: [
    "In A2, we used the comparative and than: older than, more expensive than. The comparative is the form of an adjective that we use to compare two: old → older, expensive → more expensive. The spelling rules from A2 still apply here: bigger, happier, more interesting. This topic adds ways to say how big a difference is, and some fixed patterns.",
    "To say that the difference is big, put <b>far</b>, <b>much</b>, <b>a lot</b>, <b>a great deal</b>, <b>considerably</b> or <b>significantly</b> before the comparative: The new flat is <b>far bigger</b>. This one is <b>much more</b> expensive. A lot is informal; a great deal, considerably and significantly are more formal. To say that it is small, use <b>slightly</b>, <b>a bit</b> or <b>a little</b>: It's <b>slightly cheaper</b>. A bit is informal. Don't use very before a comparative: much better, not very better.",
    "<b>The</b> + comparative …, <b>the</b> + comparative says that two things change together: <b>The more</b> you practise, <b>the easier</b> it gets. <b>The longer</b> we waited, <b>the angrier</b> he became. Both parts need the. After each comparative comes the subject and the verb. In short fixed phrases, there is no verb: <b>The sooner, the better.</b> The bigger, the better.",
    "<b>As</b> + adjective + <b>as</b> says that two things are the same: My bag is as heavy as yours. Not as … as says that the first is less: It isn't as cold as yesterday. To make the difference big, use <b>nowhere near as</b> … as or <b>not nearly as</b> … as: The sequel is <b>nowhere near as good as</b> the first film. It's <b>not nearly as</b> hot as last summer. To make it small, use <b>almost as</b> or <b>nearly as</b>.",
    "For multiples, put <b>twice</b>, <b>three times</b> and so on before as … as: Their house is <b>twice as big as</b> ours. Or use the + a noun like size, price, height or number + of: It's <b>three times the size of</b> ours. Tickets are now <b>twice the price</b>. With nouns, use as much or as many: The new stadium holds <b>twice as many</b> people <b>as</b> the old one. Use as, not than, after as … as.",
    "<b>Not so much</b> X <b>as</b> Y says that Y describes something better than X: It's <b>not so much</b> a job <b>as</b> a way of life. She's not so much shy as careful. <b>As</b> … <b>as ever</b> says that something hasn't changed: He's <b>as busy as ever</b>. (He is still very busy.)",
    "<b>As</b> + auxiliary or be + subject means and so did, in formal English: She became a doctor, <b>as did</b> her father. He loves jazz, <b>as does</b> his wife. This uses inversion, as in B2: the auxiliary, or be when it is the verb, comes before the subject. Remember: the subject is the person or thing that the sentence is about. As her father did is also correct, and less formal. Order 5 looks at inversion more closely.",
  ].join("\n\n"),

  form: [
    "far / much / a lot / a great deal / considerably / significantly + comparative → big difference",
    "slightly / a bit / a little + comparative → small difference · not: very + comparative",
    "the + comparative + subject + verb, the + comparative + subject + verb: The more you practise, the easier it gets. · The sooner, the better.",
    "nowhere near as / not nearly as + adjective + as → much less",
    "twice / three times as + adjective + as · three times the size of",
    "not so much X as Y · as + adjective + as ever",
    "as + auxiliary or be + subject (formal): as did her father · less formal: as her father did",
  ].join("\n"),

  examples: [
    {
      sentence: "The train is <b>far quicker</b> than the bus, but it's <b>slightly more</b> expensive.",
      why: "<b>Far</b> shows a big difference and <b>slightly</b> a small one. Expensive is long, so it takes more, as in A2.",
    },
    {
      sentence: "<b>The more</b> I read about it, <b>the less</b> I understand.",
      why: "Two things change together, so both parts start with <b>the</b> + comparative, then the subject and the verb.",
    },
    {
      sentence: "This year's festival was <b>nowhere near as</b> busy <b>as</b> last year's.",
      why: "<b>Nowhere near as</b> … as says that the difference is big: it was much less busy.",
    },
    {
      sentence: "Their garden is <b>three times the size of</b> ours.",
      why: "For a multiple with a noun, we use <b>three times</b> + the + size + <b>of</b>. Three times as big as ours means the same.",
    },
    {
      sentence: "The problem is <b>not so much</b> the cost <b>as</b> the time.",
      why: "<b>Not so much</b> X <b>as</b> Y says that the time describes the problem better than the cost.",
    },
    {
      sentence: "My grandfather was a teacher, <b>as was</b> my mother.",
      why: "<b>As</b> + auxiliary or be + subject is formal and means and so was. The verb, was, comes before the subject. As my mother was is also correct.",
    },
  ],

  pitfall: {
    wrong: "The more you sleep, more tired you feel.",
    right: "<b>The more</b> you sleep, <b>the more</b> tired you feel.",
    why: "In this pattern, both parts need <b>the</b> + comparative.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "The longer you wait, ___ it will be to get a ticket. (hard)",
      answers: ["the harder"],
      feedback:
        "Two things change together, so both parts need the + comparative: The longer you wait, the harder it will be. Hard has one syllable, so it takes -er.",
    },
    {
      kind: "gap",
      stem: "The new flat is ___ bigger than our old one: we've got three extra rooms now. (a big difference: use a modifier from this topic)",
      answers: ["far", "much", "a lot", "a great deal", "considerably", "significantly"],
      feedback:
        "For a big difference, we put far, much, a lot, a great deal, considerably or significantly before the comparative: The new flat is far bigger. We don't use very before a comparative, and slightly and a bit show a small difference.",
    },
    {
      kind: "gap",
      stem: "Their new house is enormous. It's three times ___ size of their old flat. (Write one word.)",
      answers: ["the"],
      feedback:
        "For a multiple with a noun, we use three times + the + size + of: It's three times the size of their old flat. Three times as big as their old flat means the same.",
    },
    {
      kind: "gap",
      stem: "The sequel was good, but it was nowhere ___ as exciting as the first film. (Write one word.)",
      answers: ["near"],
      feedback:
        "Nowhere near as … as says that the difference is big: it was much less exciting. Not nearly as exciting means the same.",
    },
    {
      kind: "choice",
      stem: "He's not so much a teacher as a friend to his students. What does this mean?",
      options: [
        "He's a better teacher than a friend.",
        "Friend describes him better than teacher.",
        "He's neither a teacher nor a friend.",
        "He's as good a teacher as he is a friend.",
      ],
      answer: 1,
      feedback: "Not so much X as Y says that Y describes something better than X. So friend describes him better than teacher.",
    },
    {
      kind: "choice",
      stem: "Her father was a doctor, and she became one too. Which ending is correct? She became a doctor, ___",
      options: ["as her father", "as her father did it", "as did her father do", "as did her father"],
      answer: 3,
      feedback:
        "As + auxiliary + subject means and so did, in formal English: She became a doctor, as did her father. As her father did is also correct, but as her father did it and as did her father do are not.",
    },
    {
      kind: "mistake",
      tokens: ["The", "sooner", "we", "leave,", "the", "best."],
      wrongIndex: 5,
      correction: "better",
      feedback:
        "In this pattern, both parts use the comparative, not the superlative: The sooner we leave, the better. Good is irregular: good → better → the best.",
    },
    {
      kind: "mistake",
      tokens: ["The", "new", "stadium", "holds", "twice", "as", "many", "people", "than", "the", "old", "one."],
      wrongIndex: 8,
      correction: "as",
      feedback:
        "After twice as many, we use as, not than: The new stadium holds twice as many people as the old one. Than goes after a comparative, like more.",
    },
  ],

  levelRationale:
    "The spec (section 8) places advanced comparison structures at C1, and the plan makes it the C1 topic of the comparison family, after A2 comparatives-and-superlatives, whose spelling rules it keeps and whose definition of the comparative it reuses. The English Grammar Profile records much and far with comparatives from A2 and B1, the + comparative, the + comparative and twice as … as at B2, and nowhere near as, not so much … as, three times the size of and as + auxiliary or be + subject at C1, so the topic brings them together at C1. As … as was left out of A2 and has no topic of its own, so it is introduced in one paragraph here. As did her father is named and taught briefly, with as her father did as the less formal choice; inversion is taught in order 5. The modifier gap accepts every big-difference modifier the topic teaches. No item uses a word bank, because as did her father uses inversion.",

  sourceNotes:
    "english_grammar.txt, # Comparsions lists only contrast linkers (even though, but, On the one hand, However, as well as), not comparison structures, so it doesn't support this topic; those linkers belong to the linking-words family. # Comparatives and superlatives is the A2 material, and its spelling rules are kept. The topic is authored from Swan, Practical English Usage, entries comparison: modification of comparatives (much, far, a lot, slightly; not very), the … the … (including The sooner the better), as … as (not as / not so, nowhere near as, not nearly as), comparison: twice, three times (as … as, and the size of), not so much … as, and inversion after as (as did his father, formal).",
};
