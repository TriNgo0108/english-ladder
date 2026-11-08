import type { RuleTopic } from "../../schema";

export const discourseMarkersAndCohesion: RuleTopic = {
  slug: "discourse-markers-and-cohesion",
  family: "linking-words",
  title: "Discourse markers and cohesion: as far as … is concerned, that said, on the contrary, this problem",
  summary: "Turning to the budget… As far as costs are concerned… That said… On the contrary… This problem… Guide the reader and tie your sentences together.",
  level: "c1",
  category: "grammar",
  shape: "rule",
  order: 10,

  explanation: [
    "A word or phrase that shows how a sentence fits into the rest of a text or a talk is called a <b>discourse marker</b>: Firstly, In other words, That said. The linking words from B1 and B2, like however and as a result, and the signposts for a talk from B2, like Moving on to, are discourse markers too. The way the sentences of a text connect, so that they read as one clear piece and not as a list of separate sentences, is called <b>cohesion</b>. Discourse markers are one way to build it. This topic also shows three more: summary nouns, ellipsis and substitution, and other words for the same thing.",
    "<b>Put points in order</b> with <b>Firstly</b> (or First), <b>Secondly</b> and <b>Finally</b>: <b>Firstly</b>, the plan is too expensive. <b>Secondly</b>, it would take too long. <b>Turning to</b> + a noun moves to a new topic: <b>Turning to</b> the budget, we expect to spend less this year. It is a little more formal than Moving on to (B2).",
    "<b>As far as</b> + a noun + <b>is concerned</b> names the topic that you are going to talk about: <b>As far as</b> the budget <b>is concerned</b>, we're in good shape. With a plural noun, use are: As far as the costs <b>are concerned</b>, … In careful speech and writing, keep is concerned: As far as the budget is concerned, not As far as the budget, … As far as I'm concerned is different: it means in my opinion.",
    "<b>In other words</b> says the same thing again, in a simpler or clearer way: Sales fell by forty per cent. <b>In other words</b>, the launch was a disaster.",
    "<b>Admittedly</b> and <b>Granted</b> accept a point against your own view, before you go on with it: <b>Admittedly</b>, the course is hard. But you'll learn a lot. <b>Granted</b>, it's expensive, but it will last for years. This is concession (order 9). Remember: accepting that one fact is true, while saying that it doesn't change your main point, is called concession. <b>That said</b> (or Having said that) works the other way round: it adds a point against what you have just said. The hotel was excellent. <b>That said</b>, it was very expensive. It is close to however, and it is common in speech and in everyday writing.",
    "<b>On the contrary</b> says that the opposite of what was said or thought is true. It often answers a negative idea: 'I suppose you were bored.' '<b>On the contrary</b>, I loved every minute.' The film wasn't boring. <b>On the contrary</b>, it was gripping. On the contrary and on the other hand are not the same. On the other hand (B2) gives the other side of a question, and both sides are true: The job is well paid. On the other hand, the hours are long. Don't use on the contrary for that.",
    "<b>Summary nouns.</b> <b>This</b> or <b>these</b> + a noun can sum up the idea of the sentence before it: Rents have doubled, and wages have stayed the same. <b>This problem</b> affects millions of families. The council has closed three libraries. <b>These changes</b> have angered local people. Choose a noun that names the idea: a problem, a change, a decision, an increase, this approach. It is often a noun from nominalisation (order 7). Remember: turning a verb or an adjective into a noun, so that an action or a quality becomes a thing, is called nominalisation. This on its own is also common (This affects millions of families), but this + a noun is clearer. Use this with a singular noun and these with a plural noun.",
    "<b>Ellipsis and substitution</b> (order 6) link sentences too. Remember: leaving out words that the listener can understand from what came before is called ellipsis. Remember: using a short word like so, do or one in place of a longer phrase is called substitution. The council promised to repair the road, but it hasn't <b>done so</b>. We need a new printer, and a fast <b>one</b>. Pronouns do the same: The museum opened in 1990, and <b>it</b> is now the most popular in the city. Remember: a pronoun is a short word that we use in place of a noun.",
    "<b>Avoid repeating the same noun</b> in every sentence. Use a pronoun, a summary noun, or a different word for the same thing: The museum opened in 1990. <b>The building</b> was designed by a young architect, and <b>it</b> has won several prizes.",
  ].join("\n\n"),

  form: [
    "order: Firstly (First) · Secondly · Finally · Turning to + noun (a little formal)",
    "topic: As far as + noun + is / are concerned, … · As far as I'm concerned = in my opinion",
    "saying it again: In other words, …",
    "concession: Admittedly, … · Granted, … · the other way round: That said, … / Having said that, …",
    "On the contrary = the opposite is true · On the other hand = the other side (both true)",
    "this + singular summary noun · these + plural summary noun: this problem, these changes",
    "ellipsis and substitution (order 6): hasn't done so · a fast one · pronouns: it, they, them",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>Firstly</b>, the plan is too expensive. <b>Secondly</b>, it would take too long.",
      why: "<b>Firstly</b> and <b>Secondly</b> put the points in order, so the reader can follow the argument.",
    },
    {
      sentence: "<b>As far as</b> transport <b>is concerned</b>, the new office is perfect.",
      why: "The phrase names the topic, transport, before the comment about it.",
    },
    {
      sentence: "<b>Admittedly</b>, the flat is small. But it's very close to the station.",
      why: "<b>Admittedly</b> accepts a point against the flat, and the next sentence gives the main point.",
    },
    {
      sentence: "'You must be exhausted.' '<b>On the contrary</b>, I feel great.'",
      why: "The second speaker says that the opposite is true, so we use <b>on the contrary</b>.",
    },
    {
      sentence: "The factory closed in May, and two hundred people lost their jobs. <b>This decision</b> shocked the whole town.",
      why: "<b>This decision</b> sums up the closing of the factory, so the two sentences hang together.",
    },
    {
      sentence: "We were asked to leave the building, and we <b>did so</b> at once.",
      why: "<b>Did so</b> stands for left the building, so the verb is not repeated.",
    },
  ],

  pitfall: {
    wrong: "The hotel was expensive. On the contrary, the staff were very friendly.",
    right: "The hotel was expensive. <b>On the other hand</b>, the staff were very friendly.",
    why: "Friendly staff is the other side of the question, not the opposite of expensive, so we need on the other hand.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "As far as the costs ___ concerned, we're well within budget. (Write one word.)",
      answers: ["are"],
      feedback:
        "The phrase is as far as + a noun + is / are concerned, and costs is plural, so we use are: As far as the costs are concerned, we're well within budget.",
    },
    {
      kind: "gap",
      stem: "We need to cut costs. ___ said, we mustn't touch the training budget. (Write one word.)",
      answers: ["That"],
      feedback:
        "That said adds a point against what you have just said: That said, we mustn't touch the training budget. Having said that means the same, but it is three words.",
    },
    {
      kind: "gap",
      stem: "The council promised to repair the bridge last year, but it still hasn't done ___. (Write one word.)",
      answers: ["so", "it", "that", "this"],
      feedback:
        "A short word stands for repair the bridge, so we don't repeat it: it still hasn't done so. Done so is formal; done it and done that are also correct, and more usual in conversation. Done this is also possible.",
    },
    {
      kind: "choice",
      stem: "A: I suppose the film was boring. B: ___ I couldn't take my eyes off the screen.",
      options: ["On the other hand,", "In other words,", "On the contrary,", "That said,"],
      answer: 2,
      feedback:
        "B says that the opposite of A's idea is true, so we use on the contrary. On the other hand gives the other side, when both sides are true, in other words says the same thing again, and that said needs a point of B's own before it.",
    },
    {
      kind: "choice",
      stem: "Many young people can't afford to rent a flat in the city, and this ___ is getting worse every year.",
      options: ["advantage", "problem", "decision", "success"],
      answer: 1,
      feedback:
        "The noun after this sums up the idea before it. Not being able to rent a flat is a problem, so this problem fits. It isn't an advantage, a decision or a success.",
    },
    {
      kind: "mistake",
      tokens: ["As", "far", "as", "the", "budget", "is", "concern,", "we", "still", "have", "plenty", "of", "money."],
      wrongIndex: 6,
      correction: "concerned,",
      feedback:
        "The phrase is as far as + a noun + is concerned, with the past participle concerned: As far as the budget is concerned, we still have plenty of money.",
    },
    {
      kind: "mistake",
      tokens: ["The", "flat", "is", "very", "small.", "On", "the", "contrary,", "it's", "in", "a", "great", "location."],
      wrongIndex: 7,
      correction: "other hand,",
      feedback:
        "A great location is the other side of the question, not the opposite of small, so we need on the other hand: The flat is very small. On the other hand, it's in a great location. On the contrary says that the opposite of an idea is true.",
    },
    {
      kind: "mistake",
      tokens: ["Taxes", "have", "gone", "up", "and", "wages", "have", "fallen.", "This", "changes", "have", "hit", "young", "families", "hardest."],
      wrongIndex: 8,
      correction: "These",
      feedback:
        "Changes is plural, so the summary noun needs these, not this: These changes have hit young families hardest. This goes with a singular noun: This change has …",
    },
  ],

  levelRationale:
    "The spec (section 8) places discourse markers and cohesion at C1, and the plan makes it the C1 topic of the linking-words family, after A2 and-but-so-because, B1 linking-words and B2 advanced-linkers. B2 left on the contrary to C1, and this topic teaches it against B2's on the other hand without changing it. The English Grammar Profile records firstly, in other words and on the other hand from B1 and B2, and as far as … is concerned, admittedly, on the contrary and this / these + a summary noun as C1 points of discourse and cohesion, so they come together here. It builds on concessive clauses (order 9) for admittedly and granted, on ellipsis and substitution (order 6) for done so and one, and on nominalisation (order 7) for summary nouns, as the plan's order dependencies require. Concession, ellipsis, substitution, nominalisation and pronoun reuse their earlier wording; discourse marker and cohesion are defined here. Each gap fixes its slot: are agrees with costs; the That said gap asks for one word, so having said that can't fit; the done ___ gap accepts so, it, that and this, following Review Focus 2. The choice items have one answer each: only on the contrary contradicts A, and only problem names the idea before it. The mistake items were checked for a second fix and frame-word swaps: concern can only become concerned; in the contrary item, no other token makes on the contrary correct, since a great location is never the opposite of small; in This changes, changing changes to change leaves have wrong, and changing have to has leaves changes wrong.",

  sourceNotes:
    "english_grammar.txt, # Linking words and # Linking expression (extended here). # Linking words, ## Contrasting ideas and ## Addition, is taught at B1 and B2 and is not repeated. # Linking expression lists ## Describing causes, ## Describe effects and ## Constrasting (should be Contrasting); its 'The results of this was' should be The result of this was, and its On the other hand and In contrast agree with Swan. The discourse markers are authored from Swan, Practical English Usage, entries discourse markers (structuring: firstly, secondly, finally, turning to; focusing: as far as … is concerned; reformulating: in other words; concession and counter-argument: admittedly, granted; contradicting: on the contrary), contrary (on the contrary vs on the other hand: not interchangeable), and as far as … is concerned (with is concerned not dropped in careful usage). That said / having said that follows the Oxford Advanced Learner's Dictionary. Cohesion with this / these + a noun, pronouns and other words for the same thing follows Swan's notes on written texts, and do so and one follow order 6.",
};
