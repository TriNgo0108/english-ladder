import type { RuleTopic } from "../../schema";

export const impersonalAndPassiveConstructions: RuleTopic = {
  slug: "impersonal-and-passive-constructions",
  family: "passive",
  title: "Impersonal and passive constructions: There are thought to be…, I hate being interrupted",
  summary: "There are thought to be 300 wolves here. It has been agreed that… I hate being interrupted. The car needs washing. More ways to leave out who does it.",
  level: "c1",
  category: "grammar",
  shape: "rule",
  order: 3,

  explanation: [
    "In B1 and B2, we used the passive, be and the past participle, and the two reporting patterns: It is said that the castle is haunted. The castle is said to be haunted. Remember: the past participle is the form of a verb that comes after have: seen, gone, finished. Remember: a reporting verb is a verb that we use to report what people say or think, like say, tell, ask, think and believe. This topic adds more ways to talk about actions and opinions without saying who.",
    "<b>There</b> + a passive reporting verb + <b>to be</b> says that people think something exists: <b>There are thought to be</b> about 2,000 species on the island. <b>There is said to be</b> a ghost in the house. The verb agrees with the noun after it: there is said to be a ghost, there are said to be ghosts. For the past, use <b>to have been</b>: <b>There is believed to have been</b> a village here in Roman times.",
    "<b>It</b> + a passive verb + a that clause reports decisions and plans, without saying who made them: <b>It has been agreed that</b> the office will close at four on Fridays. <b>It was decided that</b> the project would continue. <b>It has been suggested that</b> we meet monthly. This is common in reports and the notes of meetings. With agree and decide, to + the base form is also possible: <b>It was decided to</b> continue the project.",
    "The gerund and the infinitive also have passive forms. Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund. Remember: to and the base form together, like to buy or to see, are called the infinitive. The passive gerund is <b>being</b> + past participle: I hate <b>being interrupted</b>. He left without <b>being seen</b>. The passive infinitive is <b>to be</b> + past participle: She expects <b>to be promoted</b>. For an earlier action, use <b>to have been</b> + past participle: He appears <b>to have been misinformed</b>. Use them after the same verbs as the active forms: enjoy and avoid + gerund, want and hope + infinitive.",
    "<b>Get</b> + past participle is a passive for things that happen to someone, often bad or unexpected: He <b>got fired</b>. We <b>got stuck</b> in traffic. Several people <b>got hurt</b>. Get is informal, so in formal writing use be: He was dismissed. Remember: register means how formal or informal your words are. Don't mix it up with the causative (B2), where get has an object: I got my car repaired.",
    "<b>Need</b> + the -ing form has a passive meaning: The car <b>needs washing</b>. (It needs to be washed.) The walls <b>need painting</b>. <b>Needs to be washed</b> means the same. Both are correct; the -ing form is more common in British English.",
    "These constructions sound impersonal: they keep the focus on the facts, not on the people. That is why they are common in news reports, academic writing and formal reports. In conversation, the active is usually more natural: People think there are about 300 wolves.",
  ].join("\n\n"),

  form: [
    "There + is / are + passive reporting verb + to be: There are thought to be 300 wolves here.",
    "past: There is believed to have been a village here.",
    "It + passive (agree, decide, suggest) + that clause: It has been agreed that … · It was decided to …",
    "passive gerund: being + past participle · I hate being interrupted.",
    "passive infinitive: to be + past participle · to have been + past participle (earlier): He appears to have been misinformed.",
    "get + past participle → informal: He got fired.",
    "need + -ing = need to be + past participle: The car needs washing.",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>There are thought to be</b> fewer than fifty of these birds left.",
      why: "The noun after it, fifty birds, is plural, so we use <b>are</b>. Think is a reporting verb in the passive, then to be.",
    },
    {
      sentence: "<b>It has been agreed that</b> all staff will work from home on Fridays.",
      why: "A decision is reported without saying who made it, so we use <b>It</b> + a passive verb + a that clause.",
    },
    {
      sentence: "Nobody likes <b>being told</b> what to do.",
      why: "After like, we can use the gerund, and the speaker is the one who is told, so we use the passive gerund: <b>being</b> + past participle.",
    },
    {
      sentence: "The painting is thought <b>to have been stolen</b> in the 1970s.",
      why: "The stealing happened before the time of thinking, and the painting didn't steal anything, so we use <b>to have been</b> + past participle.",
    },
    {
      sentence: "My brother <b>got fined</b> for parking outside the school.",
      why: "<b>Got</b> + past participle is an informal passive for something bad that happened to him. He was fined is more formal.",
    },
    {
      sentence: "Your shoes <b>need cleaning</b>.",
      why: "<b>Need</b> + -ing has a passive meaning: they need to be cleaned. Need to be cleaned is also correct.",
    },
  ],

  pitfall: {
    wrong: "She expects to promote next year.",
    right: "She expects <b>to be promoted</b> next year.",
    why: "She doesn't promote anyone: someone promotes her. So we need the passive infinitive, <b>to be</b> + past participle.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "Experts believe that there are about 300 wolves in the region. → There ___ about 300 wolves in the region. (believe)",
      answers: ["are believed to be"],
      feedback:
        "There + a passive reporting verb + to be says that people think something exists. Wolves is plural, so the verb is are: There are believed to be about 300 wolves in the region.",
    },
    {
      kind: "gap",
      stem: "Good news: it ___ that everyone will get a pay rise this year. (agree, present perfect)",
      answers: ["has been agreed", "'s been agreed"],
      feedback:
        "A decision is reported without saying who made it, so we use It + a passive verb + a that clause. In the present perfect, it is has been + past participle: It has been agreed that everyone will get a pay rise.",
    },
    {
      kind: "gap",
      stem: "Nobody enjoys ___ in front of their colleagues. (criticise, passive)",
      answers: ["being criticised", "being criticized", "getting criticised", "getting criticized"],
      feedback:
        "After enjoy, we use the gerund, and the person is the one who is criticised, so we use the passive gerund: being + past participle. Getting criticised is also correct, and more informal. Criticized is the American spelling.",
    },
    {
      kind: "gap",
      stem: "This old letter seems ___ by hand about two hundred years ago. (write: passive infinitive)",
      answers: ["to have been written"],
      feedback:
        "The writing happened long before now, the time of seeming, and the letter didn't write anything, so we use to have been + past participle: This old letter seems to have been written by hand. Write is irregular: write → wrote → written.",
    },
    {
      kind: "gap",
      stem: "The grass is very long. It needs ___. (cut)",
      answers: ["cutting", "to be cut"],
      feedback:
        "Need + the -ing form has a passive meaning: It needs cutting. It needs to be cut means the same, and is also correct.",
    },
    {
      kind: "choice",
      stem: "Which sentence would sound too informal in a formal report?",
      options: [
        "Three employees got fired after the investigation.",
        "Three employees were dismissed after the investigation.",
        "It was decided that three employees would be dismissed.",
        "Three employees are believed to have been dismissed.",
      ],
      answer: 0,
      feedback:
        "Get + past participle is an informal passive, and fire is informal too, so Three employees got fired sounds too informal for a report. The other three use be and are formal.",
    },
    {
      kind: "mistake",
      tokens: ["I", "hate", "been", "interrupted", "when", "I'm", "working."],
      wrongIndex: 2,
      correction: "being",
      feedback:
        "The passive gerund is being + past participle: I hate being interrupted when I'm working. Been is the past participle of be, and it needs have before it.",
    },
    {
      kind: "mistake",
      tokens: ["There", "are", "said", "to", "be", "a", "ghost", "in", "the", "old", "castle."],
      wrongIndex: 1,
      correction: "is",
      feedback:
        "In this pattern, the verb agrees with the noun after to be. A ghost is singular, so we use is: There is said to be a ghost in the old castle.",
    },
  ],

  levelRationale:
    "The spec (section 8) places impersonal and passive constructions at C1 as a new point, and the plan makes it the C1 topic of the passive family, after B1 the-passive and B2 advanced-passive-and-reporting-verbs, whose It is said that and He is said to are named but not retaught. The English Grammar Profile records the passive gerund and passive infinitive from B2, there + passive reporting verb, it + passive + that clause for decisions, and the perfect passive infinitive (to have been + past participle) at C1, and need + -ing at B2, so they are brought together at C1. Past participle, reporting verb, gerund, infinitive and register reuse their earlier wording. Get + past participle was named as informal in B1, and is taught here as informal, with the causative (B2) contrasted. Every gap names its verb and, where two forms could fit, the form: the agree gap names the present perfect, and the passive gerund gap accepts getting criticised and the American spelling. The need gap accepts both needs cutting and needs to be cut.",

  sourceNotes:
    "english_grammar.txt has no section on impersonal constructions (a new point in spec section 8). # The passive, Passive + infinitive construction is taught in B2 advanced-passive-and-reporting-verbs and is not repeated. The topic is authored from Swan, Practical English Usage, entries passive structures with reporting verbs (there is said to be …, it + passive + that clause), passive infinitives and -ing forms (being + past participle, to be + past participle, to have been + past participle), get + past participle (informal, for things that happen to us), and need + -ing (passive meaning, mainly British, with need to be + past participle as the alternative). The contrast with get + object + past participle follows B2 the-causative.",
};
