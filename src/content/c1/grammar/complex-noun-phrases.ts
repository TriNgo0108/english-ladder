import type { RuleTopic } from "../../schema";

export const complexNounPhrases: RuleTopic = {
  slug: "complex-noun-phrases",
  title: "Complex noun phrases: a three-year contract, the decision to leave",
  summary: "A three-year contract, the shoe shop on the corner, people living nearby, her decision to leave. Build long, precise noun groups for formal writing.",
  level: "c1",
  category: "grammar",
  shape: "rule",
  order: 8,

  explanation: [
    "A group of words built around a noun, which works like one noun in the sentence, is called a <b>noun phrase</b>: the old house on the hill. The main noun in it is called the <b>head noun</b>: here, house. The other words tell us more about the head noun. Some come before it (the old), and some come after it (on the hill).",
    "The verb agrees with the head noun, not with the noun just before the verb: The <b>list</b> of names on the desk <b>is</b> out of date. The <b>cost</b> of new cars <b>has</b> risen. With a lot of, a number of and the majority of, the verb usually agrees with the noun after of: A number of people <b>were</b> late.",
    "Before the head noun come words like the, a and my, then adjectives, in the B1 order: a beautiful old house. Remember: an adjective is a word that tells us more about a noun: what the person or thing is like. Another noun can also go just before the head noun: a <b>city</b> centre, a <b>shoe</b> shop, a <b>bus</b> station. Two nouns used together like this are called a <b>compound noun</b>. The first noun works like an adjective, so it is usually singular, even when the meaning is plural: a shoe shop (it sells shoes), a toothbrush, a car park. A few are plural: a clothes shop, a sports car, a sales manager.",
    "A number + a noun before the head noun is also singular, and it usually has a hyphen: a <b>three-year</b> contract, a <b>ten-minute</b> walk, a five-pound note, a two-hour meeting. A <b>hyphen</b> (-) is a very short line that joins two words into one, with no space on either side: three-year. Say a three-year contract, not a three-years contract. Compare: The contract lasts three <b>years</b>. (Here, years is not before another noun, so it is plural.) With time, ten minutes' walk, with no a, is also correct.",
    "After the head noun, we can add more information. A preposition and the words after it: the house <b>on the corner</b>, a book <b>about Japan</b>. Remember: a preposition is a small word, like in, on or under, that goes before a noun. A relative clause, as in B1: the woman <b>who lives next door</b>. A reduced relative clause, as in B2, with an -ing form for an active meaning or a past participle for a passive meaning: people <b>living</b> in the area, a report <b>published</b> last week.",
    "An infinitive can also come after the head noun, after nouns like decision, plan, chance, attempt, ability and way, and after the first, the last and the only: her decision <b>to leave</b>, a chance <b>to win</b>, the first person <b>to arrive</b>. Remember: to and the base form together, like to buy or to see, are called the infinitive. Say her decision to leave, not her decision of leaving.",
    "Formal writing often puts a lot of information into one noun phrase, sometimes with nominalisation (order 7): <b>The government's decision to raise taxes on imported cars</b> angered drivers. The head noun is decision, and everything before angered belongs to it. In conversation, we usually split this into shorter sentences: The government's going to raise taxes on imported cars, and drivers are angry.",
  ].join("\n\n"),

  form: [
    "noun phrase = words before + head noun + words after: the old house on the hill",
    "the verb agrees with the head noun: The list of names is … · but: A number of people were …",
    "noun + noun (compound noun), first noun usually singular: a shoe shop · a few plurals: a clothes shop, a sports car",
    "number + noun before a noun, singular and usually with a hyphen: a three-year contract · not: a three-years contract",
    "after the head noun: on the corner · who lives next door · living in the area · published last week · to leave",
    "decision / plan / chance / ability + to + base form · not: decision of leaving",
  ].join("\n"),

  examples: [
    {
      sentence: "We stayed in a <b>two-bedroom</b> flat near the beach.",
      why: "A number + noun before the head noun, flat, is singular and has a hyphen: two-bedroom, not two-bedrooms.",
    },
    {
      sentence: "The <b>keys</b> to the back door <b>are</b> in the kitchen.",
      why: "The head noun is keys, so the verb is plural, <b>are</b>, even though door comes just before it.",
    },
    {
      sentence: "Students <b>wishing</b> to take the exam must register by Friday.",
      why: "<b>Wishing</b> is a reduced relative clause: students who wish to take the exam.",
    },
    {
      sentence: "It was the first <b>attempt to climb</b> the mountain in winter.",
      why: "After attempt, the infinitive, <b>to climb</b>, comes after the head noun.",
    },
    {
      sentence: "The new <b>car park</b> behind the station has 500 spaces.",
      why: "<b>Car park</b> is a compound noun, with car in the singular. In American English, it is a parking lot.",
    },
  ],

  pitfall: {
    wrong: "Our hotel is a ten-minutes walk from the beach.",
    right: "Our hotel is a <b>ten-minute</b> walk from the beach.",
    why: "A number + noun before another noun is singular: ten-minute, not ten-minutes.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "She decided to leave the company. → Her decision ___ leave the company surprised everyone. (Write one word.)",
      answers: ["to"],
      feedback:
        "After decision, we use the infinitive: Her decision to leave the company. We don't say decision of leaving.",
    },
    {
      kind: "gap",
      stem: "People ___ in the city centre will need a parking permit. (Write one word: use the verb live.)",
      answers: ["living"],
      feedback:
        "The -ing form makes a reduced relative clause with an active meaning: people living in the city centre (= people who live there).",
    },
    {
      kind: "gap",
      stem: "The report ___ last week contains several mistakes. (Write one word: use the verb publish.)",
      answers: ["published"],
      feedback:
        "The past participle makes a reduced relative clause with a passive meaning: the report published last week (= the report that was published last week).",
    },
    {
      kind: "gap",
      stem: "The list of names on the desk ___ out of date. (Write the verb be in the present simple.)",
      answers: ["is"],
      feedback:
        "The head noun is list, which is singular, so the verb is is. Names and desk come later in the noun phrase, so they don't decide the verb.",
    },
    {
      kind: "choice",
      stem: "The rising cost of living in big cities worries many young families. In the subject, which word is the head noun?",
      options: ["cost", "living", "cities", "families"],
      answer: 0,
      feedback:
        "The subject is the rising cost of living in big cities, and its head noun is cost: the other words tell us more about it. That is why the verb is worries, not worry.",
    },
    {
      kind: "mistake",
      tokens: ["The", "club", "has", "offered", "him", "a", "three-years", "contract."],
      wrongIndex: 6,
      correction: "three-year",
      feedback:
        "A number + noun before another noun is singular: a three-year contract. Compare: The contract lasts three years.",
    },
    {
      kind: "mistake",
      tokens: ["I", "bought", "these", "boots", "at", "the", "new", "shoes", "shop", "in", "town."],
      wrongIndex: 7,
      correction: "shoe",
      feedback:
        "In a compound noun, the first noun is usually singular, even when the meaning is plural: a shoe shop. A few, like a clothes shop, are plural.",
    },
  ],

  levelRationale:
    "The spec (section 8) places complex noun phrases at C1 as a new point, with no family, after nominalisation (order 7). The English Grammar Profile records compound nouns, reduced relative clauses and noun + to-infinitive from B1 and B2, and long noun phrases with several pre- and post-modifiers, typical of formal and academic writing, at C1. Adjective, preposition and infinitive reuse their earlier wording; B1 adjective order, B1 defining relative clauses and B2 reduced-relative-clauses are named and not retaught. Noun phrase, head noun and compound noun are defined here. Hyphens can't be gap-tested, so the number + noun point is a mistake item with the hyphen inside the token (three-years) and the pitfall. Each gap fixes one filler: decision ___ leave takes only to; the live and publish gaps name the verb and ask for one word, so the full relative clause doesn't fit; the agreement gap names be in the present simple. The mistake items were checked for a second fix: in the contract item, no other token makes three-years correct, and in the shoe shop item, changing boots or shop leaves shoes shop wrong.",

  sourceNotes:
    "english_grammar.txt has no section on complex noun phrases (a new point in spec section 8), so this topic is authored from Swan, Practical English Usage, entries noun + noun (the first noun usually singular: a shoe shop; some plural exceptions: a clothes shop, a sports car), measurements before nouns (a three-year contract, a ten-minute walk, singular with a hyphen; also ten minutes' walk), singular and plural: agreement with the head of a noun phrase (and a number of + plural verb), participle clauses after nouns, and infinitives after nouns (decision to, chance to, the first to). Car park is British; parking lot is the American word, as the example says. B2 reduced-relative-clauses is kept: the -ing form is active and the past participle passive.",
};
