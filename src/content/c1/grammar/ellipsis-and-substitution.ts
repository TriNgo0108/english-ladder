import type { RuleTopic } from "../../schema";

export const ellipsisAndSubstitution: RuleTopic = {
  slug: "ellipsis-and-substitution",
  title: "Ellipsis and substitution: Tom has, I'd love to, I hope so, a blue one",
  summary: "I haven't finished, but Tom has. I'd love to. I hope so. Have you got a blue one? Avoid repeating yourself by leaving words out or using a short word.",
  level: "c1",
  category: "grammar",
  shape: "rule",
  order: 6,

  explanation: [
    "We don't like to repeat words that the listener already knows. Leaving out words that the listener can understand from what came before is called <b>ellipsis</b>: I haven't finished, but Tom has. (= Tom has finished.) Using a short word like so, do or one in place of a longer phrase is called <b>substitution</b>: I hope so. Have you got a blue one? Both make speech and writing shorter and more natural.",
    "After an auxiliary or a modal verb, we can leave out the words that would repeat: I haven't finished, but Tom <b>has</b>. She can't swim, but her brother <b>can</b>. 'Are you coming?' 'Yes, I <b>am</b>.' Remember: an auxiliary is a small verb that goes with another verb, like be in She is working, have in They have finished, do in Do you like it?, and can or will. Remember: a modal verb is a small verb that goes before the base form of another verb and adds a meaning to it. With be as the verb, do the same: I'm not tired, but she <b>is</b>. When there is no auxiliary, use <b>do</b>, <b>does</b> or <b>did</b>: I didn't enjoy the film, but my brother <b>did</b>.",
    "The word at the end is stressed, so it can't be a short form: but Tom has, not but Tom's. Yes, I am, not Yes, I'm. A negative short form is fine: I wanted to stay, but I couldn't.",
    "In B1, you met So do I and Neither can I for agreeing. They are the same kind of ellipsis, with the same rule: use the auxiliary from the first sentence, or do, does or did.",
    "To avoid repeating an infinitive, keep only <b>to</b>: 'Would you like to come with us?' 'I'd love <b>to</b>.' I meant to call you, but I forgot <b>to</b>. You don't have to come if you don't want <b>to</b>. Remember: to and the base form together, like to buy or to see, are called the infinitive. Don't add do: I'd love to, not I'd love to do. With be, keep be: He isn't a manager yet, but he'd like <b>to be</b>.",
    "After <b>think</b>, <b>hope</b>, <b>expect</b>, <b>suppose</b>, <b>believe</b>, <b>imagine</b> and <b>be afraid</b>, use <b>so</b> in place of a whole clause: 'Is Anna coming?' 'I think <b>so</b>.' (= I think that she is coming.) 'Will it be expensive?' 'I'm afraid <b>so</b>.' Remember: a clause is a group of words with a subject and a verb.",
    "For a negative, think, expect, suppose, believe and imagine usually take don't … so: I <b>don't think so</b>. I don't expect so. I think not is also correct, but it is formal and less common. Hope and be afraid take not: I <b>hope not</b>. I'm <b>afraid not</b>. Say I hope not, not I don't hope so. We don't use so after know: 'You're late.' 'I know.', not I know so.",
    "<b>Do so</b> stands for a verb and the words after it, when they describe an action: The manager asked me to check the figures, and I <b>did so</b> at once. Do so is formal, and common in formal letters and reports. Remember: register means how formal or informal your words are. Do it and do that mean the same, and are more usual in conversation: I said I'd fix the door, and I <b>did it</b> the next day.",
    "<b>One</b> and <b>ones</b> stand for a countable noun, so that we don't repeat it: I don't like this shirt. Have you got a blue <b>one</b>? These shoes are nice, but have you got any cheaper <b>ones</b>? Use one for one thing and ones for two or more. Remember: a countable noun is a thing that we can count: one apple, two apples, three chairs. One means another of the same kind. For the same thing that we already named, use it or them: I bought a new laptop, but <b>it</b> doesn't work.",
    "We don't use one for an uncountable noun. Use some, or leave the noun out: If you need rice, there's <b>some</b> in the cupboard, not there's one. Remember: an uncountable noun is a thing that we cannot count as one, two, three.",
  ].join("\n\n"),

  form: [
    "auxiliary / modal / be at the end: I haven't finished, but Tom has. · She can't, but I can. · I didn't, but he did. · no short form: Tom has, not Tom's",
    "to for a repeated infinitive: I'd love to. · not: I'd love to do · with be: he'd like to be",
    "think / expect / suppose / believe / imagine so · I don't think so (I think not is formal)",
    "hope / be afraid: I hope so · I hope not · I'm afraid so · I'm afraid not · not: I don't hope so · not: I know so",
    "do so (formal) · do it / do that (more usual in conversation)",
    "one / ones for a countable noun: a blue one, cheaper ones · not for an uncountable noun: there's some",
  ].join("\n"),

  examples: [
    {
      sentence: "Sara hasn't replied yet, but I think Ben <b>has</b>.",
      why: "<b>Has</b> stands for has replied. The auxiliary is at the end, so it is the full form, not Ben's.",
    },
    {
      sentence: "'Can you come on Saturday?' 'I'm not sure, but I'll try <b>to</b>.'",
      why: "<b>To</b> stands for to come on Saturday, so we don't repeat the verb.",
    },
    {
      sentence: "'Is the museum open on Mondays?' 'I'm <b>afraid not</b>.'",
      why: "<b>Not</b> stands for a negative clause: I'm afraid it isn't open. Be afraid takes not, not don't … so.",
    },
    {
      sentence: "Applicants who wish to withdraw may <b>do so</b> at any time.",
      why: "<b>Do so</b> stands for withdraw. It is formal, so it suits rules and official letters.",
    },
    {
      sentence: "The small boxes are full. Can you pass me one of the big <b>ones</b>?",
      why: "<b>Ones</b> stands for boxes, a plural countable noun.",
    },
  ],

  pitfall: {
    wrong: "'Would you like to join us?' 'I'd love to do, but I'm busy.'",
    right: "'Would you like to join us?' 'I'd love <b>to</b>, but I'm busy.'",
    why: "To avoid repeating the infinitive, we keep only to. We don't add do.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "I can't speak Spanish, but my sister ___. She lived in Madrid for five years. (Write one word.)",
      answers: ["can"],
      feedback:
        "After a modal verb, we leave out the words that would repeat: my sister can (speak Spanish). The first sentence uses can't, so the reply uses can.",
    },
    {
      kind: "gap",
      stem: "A: Will Anna be at the meeting? B: I expect ___. She's never missed one. (Write one word.)",
      answers: ["so"],
      feedback:
        "After expect, so stands for a whole clause: I expect so (= I expect that she will be there). The second sentence shows that the answer is yes, so not doesn't fit.",
    },
    {
      kind: "gap",
      stem: "A: Why didn't you call him? B: I wanted ___, but I lost my phone. (Write one word.)",
      answers: ["to"],
      feedback:
        "To avoid repeating an infinitive, we keep only to: I wanted to (call him), but I lost my phone. We don't use it or so here, and we don't add do.",
    },
    {
      kind: "gap",
      stem: "These shoes are too small. Have you got any bigger ___? (Write the word from this topic that stands for shoes.)",
      answers: ["ones"],
      feedback:
        "Ones stands for a plural countable noun: Have you got any bigger ones? One is for one thing, and them would mean the same shoes, not another pair.",
    },
    {
      kind: "choice",
      stem: "A: Is it going to rain at the wedding tomorrow? B: ___ We've planned everything outside.",
      options: ["I don't hope so.", "I hope no.", "I hope not.", "I'm not hoping so."],
      answer: 2,
      feedback:
        "With hope, the negative is hope not: I hope not (= I hope that it won't rain). We don't say I don't hope so or I hope no. With think, the usual negative is different: I don't think so.",
    },
    {
      kind: "choice",
      stem: "A formal letter says: Please return the signed form by 1 May. If you fail to ___, your place may be offered to another applicant.",
      options: ["do", "do so", "make so", "so do"],
      answer: 1,
      feedback:
        "Do so stands for the action, return the signed form, and it is formal, so it suits a letter like this. Do on its own needs an object, and make so and so do don't mean this. Do it or do this would also be correct, but they sound less formal.",
    },
    {
      kind: "mistake",
      tokens: ["I'm", "not", "ready", "to", "leave", "yet,", "but", "Tom's."],
      wrongIndex: 7,
      correction: "Tom is.",
      feedback:
        "When be or an auxiliary comes at the end, it is stressed, so we can't use a short form: I'm not ready to leave yet, but Tom is. A short form at the start, like I'm, is fine.",
    },
    {
      kind: "mistake",
      tokens: ["If", "you", "need", "some", "money,", "there's", "one", "in", "my", "bag."],
      wrongIndex: 6,
      correction: "some",
      feedback:
        "Money is uncountable, so one can't stand for it. We use some: If you need some money, there's some in my bag.",
    },
  ],

  levelRationale:
    "The spec (section 8) places ellipsis and substitution at C1 as a new point, with no family. The English Grammar Profile records short answers and so do I from A2 and B1, and ellipsis after auxiliaries, to for a repeated infinitive, so and not after think, hope and be afraid, and one / ones at B1 and B2, with do so and a wider range of ellipsis in formal writing at C1; this topic brings them together at C1 and adds the rules that learners still break at this level (no short form at the end, I hope not, no one for an uncountable noun). It links back to B1 agreeing-and-disagreeing for So do I and Neither can I without reteaching them, and keeps B2 breaking-bad-news's I'm afraid so / I'm afraid not. Auxiliary, modal verb, infinitive, clause, register, countable and uncountable reuse their earlier wording; ellipsis and substitution are defined here. Following Review Focus 2, each gap fixes one filler: the can gap mirrors can't, the expect gap adds a sentence that makes the answer yes, the to gap's verb wanted can't take it or so, and the ones gap is plural with any; the cues ask for one word. The do so item is a choice in a formal letter, because do it and do this also fit the slot; neither is an option. The mistake items were checked for a second fix: in Tom's, only the last token can change, and in the money item, changing some or money leaves one wrong: a money is not English, and a countable noun in place of money no longer agrees with some or with one. The noun is money, not milk, because a milk (a carton) is informal British English and would give a second fix.",

  sourceNotes:
    "english_grammar.txt has no section on ellipsis or substitution (a new point in spec section 8), so this topic is authored from Swan, Practical English Usage, entries ellipsis after auxiliary verbs (with the stressed, non-contracted form at the end: Yes, I am, not Yes, I'm), infinitives: to used instead of the whole infinitive (I'd love to; to be kept with be), so: I think so, I hope so, etc. (and not with hope and be afraid; I don't think so is more usual than I think not, which is formal; no so after know), do so (formal; do it / do that more usual in informal speech), and one: substitute word (for countable nouns only, not uncountable ones). B1 agreeing-and-disagreeing teaches So do I and Neither do I, and this topic agrees with it.",
};
