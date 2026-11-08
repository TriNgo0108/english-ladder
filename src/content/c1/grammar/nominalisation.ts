import type { RuleTopic } from "../../schema";

export const nominalisation: RuleTopic = {
  slug: "nominalisation",
  title: "Nominalisation: the company expanded → the expansion of the company",
  summary: "The company expanded rapidly → the rapid expansion of the company. Turn verbs and adjectives into nouns for a formal, impersonal style.",
  level: "c1",
  category: "grammar",
  shape: "rule",
  order: 7,

  explanation: [
    "Turning a verb or an adjective into a noun, so that an action or a quality becomes a thing, is called <b>nominalisation</b>: The company expanded rapidly. → <b>The rapid expansion of the company</b> … Remember: a noun is a word for a person, a thing, an animal or a place. Remember: a verb is a word like go, eat or have. Remember: an adjective is a word that tells us more about a noun: what the person or thing is like. The new noun is usually an abstract noun. Remember: a word for an idea, a feeling or a quality, something that we can't see or touch, is called an abstract noun.",
    "Nominalisation makes writing more formal and impersonal: the focus is on the action or the idea, not on the people. It is common in reports, academic writing and the news. It also puts a lot of information into one part of the sentence: Because prices rose sharply, sales fell. → <b>The sharp rise in prices</b> led to a fall in sales. Remember: register means how formal or informal your words are. In conversation, the verb is usually more natural: Prices went up, so we sold less.",
    "Many of these nouns use the suffixes from B1 word building: decide → deci<b>sion</b>, improve → improve<b>ment</b>, able → abil<b>ity</b>. Remember: a suffix is a group of letters that we add to the end of a word to make a new word. Others use different endings: fail → fail<b>ure</b>, arrive → arriv<b>al</b>, refuse → refus<b>al</b>, grow → grow<b>th</b>, strong → streng<b>th</b>, important → import<b>ance</b>, analyse → analys<b>is</b>. Some nouns have the same form as the verb: increase → an increase, rise → a rise, change → a change. Each word takes its own ending, so check a dictionary: decision, not decidement; failure, not failment.",
    "Put <b>of</b> before the doer, or before the thing that the action happens to: The company expanded. → the expansion <b>of</b> the company. They built the bridge. → the construction <b>of</b> the bridge. Don't leave of out: the expansion of the company, not the expansion the company. For a person or an organisation, 's is also common: the government's decision. When of names the thing that the action happens to, by can name the doer: the construction of the bridge <b>by</b> a Danish firm.",
    "Nouns for a change, like increase, rise, fall and growth, usually take <b>in</b> before the thing that changes: a rise <b>in</b> prices, a fall <b>in</b> sales, an increase <b>in</b> crime.",
    "When the verb has an adverb, the adverb becomes an adjective before the noun: expanded <b>rapidly</b> → the <b>rapid</b> expansion. analysed carefully → a careful analysis. Remember: an adverb of manner tells us more about a verb. When the verb has to + another verb, the noun keeps it: She decided to leave. → her decision <b>to leave</b>. Order 8 looks at these longer groups of words around a noun.",
    "Don't overdo it: a sentence with too many of these nouns is hard to read. Use nominalisation where a formal, impersonal style fits, like a report or an essay.",
  ].join("\n\n"),

  form: [
    "verb → noun: decide → decision · improve → improvement · fail → failure · arrive → arrival · grow → growth · analyse → analysis",
    "adjective → noun: able → ability · strong → strength · important → importance",
    "same form: an increase · a rise · a change",
    "the + noun + of + doer or thing affected: the expansion of the company · the construction of the bridge (by …)",
    "change nouns + in: a rise in prices · a fall in sales",
    "adverb → adjective: expanded rapidly → the rapid expansion",
    "formal and impersonal · in conversation, the verb is usually more natural",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>The arrival of</b> the new manager changed the whole office.",
      why: "The verb arrive becomes the noun <b>arrival</b>, and <b>of</b> comes before the doer, the new manager.",
    },
    {
      sentence: "<b>A careful analysis of</b> the data showed a clear pattern.",
      why: "Analyse becomes <b>analysis</b>, and the adverb carefully becomes the adjective <b>careful</b>.",
    },
    {
      sentence: "There has been <b>a sharp increase in</b> the number of cyclists.",
      why: "<b>Increase</b> is the same as the verb. It is a noun for a change, so it takes <b>in</b>.",
    },
    {
      sentence: "<b>The council's refusal to</b> repair the road angered local residents.",
      why: "Refuse becomes <b>refusal</b>. The council is an organisation, so 's is used, and to repair stays after the noun.",
    },
    {
      sentence: "<b>Her ability to</b> stay calm impressed everyone.",
      why: "The adjective able becomes the noun <b>ability</b>, which keeps to + the base form.",
    },
  ],

  pitfall: {
    wrong: "The expansion the company was faster than expected.",
    right: "The expansion <b>of</b> the company was faster than expected.",
    why: "A noun made from a verb needs of before the doer or the thing that the action happens to.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "The committee decided quickly, which surprised everyone. → The committee made a quick ___, which surprised everyone. (Write the noun from decide.)",
      answers: ["decision"],
      feedback:
        "The noun from decide is decision, with -sion: The committee made a quick decision. After a, the noun is singular, and decidement is not a word.",
    },
    {
      kind: "gap",
      stem: "They built the new bridge in just two years. → The construction ___ the new bridge took just two years. (Write one word.)",
      answers: ["of"],
      feedback:
        "Of comes before the thing that the action happens to: the construction of the new bridge. Without of, the noun and the bridge don't connect.",
    },
    {
      kind: "gap",
      stem: "She is clearly able to lead the team. → Nobody doubts her ___ to lead the team. (Write the noun from able.)",
      answers: ["ability"],
      feedback:
        "The noun from able is ability, with -ity, and it keeps to + the base form: her ability to lead the team. Before to lead, the noun is singular.",
    },
    {
      kind: "gap",
      stem: "The project failed, and everyone was shocked. → The ___ of the project shocked everyone. (Write the noun from fail.)",
      answers: ["failure"],
      feedback:
        "The noun from fail is failure, with -ure: The failure of the project shocked everyone. Failment and failness are not words.",
    },
    {
      kind: "choice",
      stem: "Which sentence is the most formal and impersonal?",
      options: [
        "We decided to close the office because sales fell.",
        "Sales fell, so we closed the office.",
        "They closed the office 'cause sales went down.",
        "The decision to close the office was due to a fall in sales.",
      ],
      answer: 3,
      feedback:
        "The decision to close the office was due to a fall in sales uses two nouns, decision and fall, and no people, so it is the most formal and impersonal. The others use verbs with we or they, which is more natural in conversation.",
    },
    {
      kind: "choice",
      stem: "The economy recovered slowly. → The ___ recovery of the economy worried investors.",
      options: ["slowly", "slowness", "slow", "more slowly"],
      answer: 2,
      feedback:
        "When the verb becomes a noun, its adverb becomes an adjective before the noun: recovered slowly → the slow recovery. An adverb like slowly can't go before a noun.",
    },
    {
      kind: "mistake",
      tokens: ["The", "decidement", "to", "close", "the", "factory", "was", "announced", "last", "week."],
      wrongIndex: 1,
      correction: "decision",
      feedback:
        "The noun from decide is decision, not decidement: The decision to close the factory was announced last week. Each verb takes its own ending, so check a dictionary.",
    },
    {
      kind: "mistake",
      tokens: ["The", "rapidly", "expansion", "of", "the", "company", "created", "hundreds", "of", "new", "jobs."],
      wrongIndex: 1,
      correction: "rapid",
      feedback:
        "Before a noun, we use an adjective, not an adverb: The rapid expansion of the company created hundreds of new jobs. The adverb rapidly goes with the verb: The company expanded rapidly.",
    },
  ],

  levelRationale:
    "The spec (section 8) places nominalisation at C1 as a new point, with no family. The English Grammar Profile records abstract nouns formed with suffixes from B1, and noun phrases built from nominalised verbs with of, in formal and academic writing, at C1, so this topic sits at C1 before complex noun phrases (order 8). It reuses the B1 word-building suffixes in one line and doesn't reteach them. Noun, verb, adjective, abstract noun, suffix, register and adverb of manner reuse their earlier wording; nominalisation is defined here. Following the task's sweep risk, each gap fixes the slot: a quick ___ needs a singular noun, so decisions and deciding don't fit; her ___ to lead needs ability (abilities can't take to here); the ___ of the project needs a noun, and failing as a noun means a weakness; the of gap follows construction, which takes of, not in. The choice items have one answer: only one option uses nouns with no people, and only slow is an adjective that fits before recovery. The mistake items were checked for a second fix: in decidement, no other token changes the noun, and in rapidly, the only other edit, making expansion into expanding, would need of the to go too.",

  sourceNotes:
    "english_grammar.txt has no section on nominalisation (a new point in spec section 8), so this topic is authored from Swan, Practical English Usage, entries possessive 's and of (of for the doer or the thing affected, as in the arrival of the train and the construction of the bridge; 's usual with people and organisations; by for the doer when of names the thing affected), prepositions after nouns (increase / rise / fall in), and the notes on formal and academic style, where noun structures are preferred to verbs. Swan has no entry of its own called nominalisation, so the verb-noun and adjective-noun pairs follow the standard dictionary forms (Oxford Advanced Learner's Dictionary). B1 word-building-suffixes teaches -ment, -tion, -sion, -ness and -ity, and those suffixes are reused unchanged. The formal-style claim agrees with Swan's notes on formal and academic writing and with C1 order 3, which calls impersonal constructions typical of formal reports.",
};
