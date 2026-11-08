import type { RuleTopic } from "../../schema";

export const concessiveClauses: RuleTopic = {
  slug: "concessive-clauses",
  title: "Concessive clauses: much as I like him, tired as she was, however hard I try",
  summary: "Although it was late, we kept going. Much as I'd like to help… Tired as she was… However hard I try… Admit one fact and still make your point.",
  level: "c1",
  category: "grammar",
  shape: "rule",
  order: 9,

  explanation: [
    "At B1 and B2, you used although, despite and whereas for a contrast (a different or unexpected idea). Remember: a clause is a group of words with a subject and a verb. Accepting that one fact is true, while saying that it doesn't change your main point, is called <b>concession</b>: Although the flat is small, I love it. A clause that does this, like although the flat is small, is called a <b>concessive clause</b>. This topic adds more ways to make one, and some of them are formal.",
    "<b>Although</b>, <b>even though</b> and <b>though</b> go before a clause, at the start or in the middle of the sentence: <b>Although</b> it was late, we kept working. We kept working <b>even though</b> it was late. As at B1, though is more informal, and even though is a bit stronger. Don't use but in the same sentence: Although it was late, we kept working, not Although it was late, but we kept working.",
    "In informal speech, <b>though</b> can also go at the end of a sentence. There it means however: The hotel was lovely. The food was terrible, <b>though</b>. Although and even though can't go at the end.",
    "<b>Even though</b> is for a fact: <b>Even though</b> it's raining, we're going out. (It is raining.) <b>Even if</b> is for something that may or may not happen, or that isn't true: <b>Even if</b> it rains, we're going out. (Maybe it will rain, maybe it won't: we're going out anyway.) Even if I were rich, I wouldn't stop working.",
    "<b>Despite</b> and <b>in spite of</b> go before a noun or an -ing form (B1): <b>Despite</b> the rain, … <b>Despite</b> feeling ill, … Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund. Before a clause, use <b>despite the fact that</b> or <b>in spite of the fact that</b>: <b>Despite the fact that</b> he was tired, he finished the report. Say despite the fact that he was tired, not despite he was tired. These phrases are quite formal; in conversation, although is usually more natural.",
    "At the start of a sentence, <b>while</b> can mean although: <b>While</b> I understand your point, I can't agree. It is a little formal, and it is common when you accept someone's view before you give your own. In formal British English, whilst is also used. <b>Whereas</b> compares two different facts (B2): My brother loves sport, whereas I prefer reading. It doesn't usually mean although, so use while, not whereas, in a sentence like While I understand your point, …",
    "<b>Much as</b> + a clause means although … very much. It goes with verbs of liking and feeling, like like, love, admire, respect and enjoy: <b>Much as</b> I like him, I wouldn't lend him money. (= Although I like him very much, …) <b>Much as</b> I'd like to help, I'm afraid I can't. It is formal, and it usually starts the sentence. Don't add but: Much as I like him, I wouldn't…, not Much as I like him, but I wouldn't…",
    "In a formal or literary style, an adjective or an adverb can go before <b>as</b> or <b>though</b> and the clause: <b>Tired as she was</b>, she kept going. (= Although she was very tired, …) <b>Strange though it may seem</b>, I enjoyed the exam. <b>Hard as they tried</b>, they couldn't open the door. Remember: an adjective is a word that tells us more about a noun: what the person or thing is like. This is a kind of fronting (order 5). Remember: putting a word or phrase at the start of the sentence, when it would usually come later, is called fronting. After as or though, the order is the normal one, the subject and then the verb: tired as she was, not tired as was she. Remember: the subject is the person or thing that the sentence is about. In American English, as tired as she was is also used.",
    "<b>However</b> + an adjective or an adverb + a clause means it doesn't matter how: <b>However hard</b> I try, I can't remember her name. <b>However tired</b> you are, you must finish the report. <b>No matter how</b> means the same, and it is less formal: <b>No matter how</b> hard I try, … Keep the adjective or the adverb straight after however: However hard I try, not However I try hard. This however is not the linker from B1 (However, it has a great cinema): it goes straight before an adjective or an adverb, with no comma.",
  ].join("\n\n"),

  form: [
    "although / even though / though + clause · not: Although …, but …",
    "informal: …, though. (at the end, = however) · not: …, although.",
    "even though + a fact · even if + a possibility: Even if it rains, we're going.",
    "despite / in spite of + noun or -ing · despite / in spite of the fact that + clause (formal) · not: despite he was tired",
    "While + clause, … (= although; a little formal) · whereas compares two facts",
    "Much as I like him, … (formal) · not: Much as I like him, but …",
    "adjective / adverb + as / though + subject + verb: Tired as she was, … · Strange though it may seem, … (formal or literary)",
    "however / no matter how + adjective or adverb + clause: However hard I try, …",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>Even though</b> the tickets were expensive, the concert sold out in an hour.",
      why: "The tickets really were expensive, so we use <b>even though</b> for a fact.",
    },
    {
      sentence: "<b>Even if</b> you leave now, you won't catch the train.",
      why: "The listener may or may not leave now, so we use <b>even if</b>: the result is the same either way.",
    },
    {
      sentence: "<b>Much as</b> I admire his work, I can't recommend this book.",
      why: "<b>Much as</b> means although … very much. There is no but before the main clause.",
    },
    {
      sentence: "<b>Strange as it may seem</b>, I enjoyed the exam.",
      why: "The adjective strange comes before <b>as</b>, and then the clause keeps its normal order: it may seem.",
    },
    {
      sentence: "<b>However often</b> I explain it, he never listens.",
      why: "<b>However</b> + an adverb means it doesn't matter how often. No matter how often means the same.",
    },
    {
      sentence: "<b>Despite the fact that</b> sales have fallen, the company is still hiring.",
      why: "Sales have fallen is a clause, so despite needs <b>the fact that</b> before it.",
    },
    {
      sentence: "<b>While</b> I see your point, I think we should wait.",
      why: "At the start of the sentence, <b>while</b> means although: I accept your view, but I still disagree.",
    },
  ],

  pitfall: {
    wrong: "Although it was late, but we kept working.",
    right: "<b>Although</b> it was late, we kept working. · It was late, <b>but</b> we kept working.",
    why: "Although and but both show the contrast, so a sentence needs only one of them.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "We went ahead with the launch ___ the early reviews were poor. (Use although or despite.)",
      answers: ["although", "though", "even though", "despite the fact that", "in spite of the fact that"],
      feedback:
        "The early reviews were poor is a clause, with a subject and a verb, so we use although: We went ahead with the launch although the early reviews were poor. Though and even though are also correct, and so are despite the fact that and in spite of the fact that. Despite on its own can't go before a clause.",
    },
    {
      kind: "gap",
      stem: "I'm going to the beach tomorrow even ___ it rains. (Write one word.)",
      answers: ["if"],
      feedback:
        "Nobody knows yet if it will rain tomorrow, so we use even if for a possibility: I'm going to the beach tomorrow even if it rains. Even though is for a fact: Even though it's raining, I'm going.",
    },
    {
      kind: "gap",
      stem: "___ hard she works, her manager is never satisfied. (Write one word.)",
      answers: ["However"],
      feedback:
        "However + an adjective or an adverb + a clause means it doesn't matter how: However hard she works, her manager is never satisfied. No matter how means the same, but it is three words. How on its own doesn't have this meaning.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "Although the flat is small, but it's very bright.",
        "Much as I like the flat, but it's too small.",
        "Despite the flat is small, it's very bright.",
        "Small as the flat is, it's very bright.",
      ],
      answer: 3,
      feedback:
        "Small as the flat is, it's very bright is correct: an adjective + as + a clause in its normal order means although the flat is small. Although and much as don't take but in the same sentence, and despite can't go before a clause: we need despite the fact that.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to say no politely.",
      words: ["busy.", "like", "I'm", "Much", "help,", "to", "as", "too", "I'd"],
      answer: "Much as I'd like to help, I'm too busy.",
      feedback:
        "Much as starts the sentence and means although … very much: Much as I'd like to help, I'm too busy. The main clause follows the comma, with no but.",
    },
    {
      kind: "mistake",
      tokens: ["Despite", "she", "was", "exhausted,", "she", "finished", "the", "race."],
      wrongIndex: 0,
      correction: "Although",
      feedback:
        "She was exhausted is a clause, so we need although (or though, even though, or despite the fact that): Although she was exhausted, she finished the race. Despite goes before a noun or an -ing form: Despite being exhausted, …",
    },
    {
      kind: "mistake",
      tokens: ["The", "food", "was", "great.", "The", "service", "was", "slow,", "although."],
      wrongIndex: 8,
      correction: "though.",
      feedback:
        "In informal speech, though can go at the end of a sentence, where it means however: The service was slow, though. Although can't go at the end. However at the end is also correct.",
    },
    {
      kind: "mistake",
      tokens: ["Tired", "like", "she", "was,", "she", "kept", "walking", "until", "midnight."],
      wrongIndex: 1,
      correction: "as",
      feedback:
        "In this pattern, the adjective goes before as or though, not like: Tired as she was, she kept walking until midnight. Tired though she was is also correct. It means although she was very tired.",
    },
  ],

  levelRationale:
    "The spec (section 8) places concessive clauses at C1 as a new point, with no family. The English Grammar Profile records although, though and even though from B1, even if, despite / in spite of + -ing and concessive while at B1 and B2, and the fact that after despite, much as, adjective + as / though + clause and however + adjective as C1 points, so this topic brings them together at C1. It agrees with B1 linking-words (although before a clause, no but with although, though more informal, even though a bit stronger, despite before a noun or an -ing form, never a clause) and with B2 advanced-linkers (whereas for two facts), and reuses B1's contrast wording. Clause, subject, adjective, gerund and fronting (order 5) reuse their earlier wording; concession and concessive clause are defined here. Following the sweep risk, the although gap accepts although, though and even though, and also despite the fact that and in spite of the fact that, since its cue names despite; even if is not accepted, because the reviews were a known past fact. The even if gap is about tomorrow, so even though doesn't fit. The however gap asks for one word, so no matter how is not a second answer. The three classic distractors (Although … but, Much as … but, Despite + clause) are the options of the choice item, not mistake items, because deleting but would be a second fix. The mistake items were checked for a second fix and for frame-word swaps: in Despite she was exhausted, the pronoun she blocks the -ing fix (Despite she being), so only despite can change; in slow, although., no other token can change; in Tired like she was, only like can change, and the wordbank's capital Much and the full stop on busy. give one order.",

  sourceNotes:
    "english_grammar.txt has no section on concessive clauses (a new point in spec section 8). Its # Linking words, ## Contrasting ideas gives although with a subject and a verb and despite with a noun or pronoun, which B1 already teaches; 'Despite having e-reader' needs an. The topic is authored from Swan, Practical English Usage, entries although and though (though at the end of a clause in informal speech, meaning however; although not used there; no but after although), even (even though for a fact, even if for a possibility), in spite of and despite (in spite of / despite the fact that + clause), while and whilst (while meaning although, whilst British and formal), whereas, much as (with verbs of liking and feeling), as and though: unusual word order (Tired as I was …, Strange though it may seem …, with as … as also used in American English), and however and no matter how (however + adjective or adverb + clause). Concession follows Swan's use of the term for these structures.",
};
