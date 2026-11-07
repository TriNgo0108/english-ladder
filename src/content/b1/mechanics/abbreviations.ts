import type { RuleTopic } from "../../schema";

export const abbreviations: RuleTopic = {
  slug: "abbreviations",
  title: "Abbreviations: e.g., i.e., etc., Mr, Dr, ASAP",
  summary: "Know what e.g., i.e., etc., Mr, Dr, St, approx., ASAP and FYI mean, how to write them, and when the full words are better.",
  level: "b1",
  category: "mechanics",
  shape: "rule",
  order: 43,

  explanation: [
    "An <b>abbreviation</b> is a short way to write a word or a group of words: Dr for doctor, ASAP for as soon as possible. Abbreviations are common in notes, messages, emails and forms.",
    "<b>Titles.</b> <b>Mr</b> is for a man, <b>Mrs</b> for a married woman, and <b>Ms</b> for any woman. <b>Dr</b> is for a doctor, or for someone with a doctorate, the highest university degree. They go before the family name, or the full name: Mr Brown, Dr Sara Lee. In British English, they usually have no full stop: Mr Brown, Dr Lee. In American English, they usually have one: Mr. Brown, Mrs. Lee, Ms. Kaur, Dr. Lee.",
    "<b>St</b> is short for Street in an address (Market St) or for Saint in a name (St Paul's Cathedral). In British English it also has no full stop.",
    "<b>e.g.</b> means for example. Use it to give one or more examples, when there are others too: winter sports, e.g. skiing and skating. <b>i.e.</b> means that is or in other words. Use it to say exactly what you mean, with nothing else: the capital of Japan, i.e. Tokyo. When you read them aloud, you can say for example and that is, or the letters.",
    "<b>etc.</b> means and other things of the same kind. It goes at the end of a list, often after a comma: pens, pencils, notebooks, etc. Don't put and before it, because the and is already in its meaning. After e.g. you don't usually need etc. as well, because e.g. already says there are more. When etc. ends a sentence, its full stop also ends the sentence, so don't add a second one.",
    "<b>approx.</b> means approximately, or about. It goes before a number: approx. 45 minutes. It is common in notes, timetables and recipes. In a normal sentence, about is more natural.",
    "<b>ASAP</b> means as soon as possible, and <b>FYI</b> means for your information: you use it when you send someone information that may be useful to them. They are written in capital letters, usually with no full stops. They are common in work emails and messages, but they are informal. In a formal email (order 33), write the full words: as soon as possible.",
    "We usually write e.g., i.e., etc. and approx. with a full stop at the end.",
  ].join("\n\n"),

  form: [
    "Mr · Mrs · Ms · Dr + family name or full name · British: no full stop",
    "St = Street (Market St) or Saint (St Paul's)",
    "e.g. = for example (there are others) · i.e. = that is (exactly this)",
    "list, etc. · not: and etc. · one full stop at the end of a sentence",
    "approx. + number = about",
    "ASAP = as soon as possible · FYI = for your information · informal",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>Dr</b> Okafor will see you now.",
      why: "Dr goes before the family name. In British English, it has no full stop.",
    },
    {
      sentence: "Bring something warm to wear, <b>e.g.</b> a jumper or a jacket.",
      why: "A jumper and a jacket are examples. A coat or a scarf would also be fine, so we use <b>e.g.</b>",
    },
    {
      sentence: "The course is for complete beginners, <b>i.e.</b> people who have never studied Spanish.",
      why: "The second part says exactly what complete beginners means, so we use <b>i.e.</b>",
    },
    {
      sentence: "The shop sells cards, wrapping paper, ribbons, <b>etc.</b>",
      why: "<b>etc.</b> means there are other things of the same kind. There is no and before it, and only one full stop at the end.",
    },
    {
      sentence: "The library is on Market <b>St</b>, next to the bank.",
      why: "Here <b>St</b> means Street. It comes after the name of the street.",
    },
    {
      sentence: "The drive takes <b>approx.</b> 45 minutes.",
      why: "<b>approx.</b> means about. It goes before a number.",
    },
    {
      sentence: "<b>FYI</b>, the meeting has moved to Room 4.",
      why: "<b>FYI</b> means for your information. The writer is giving useful news and doesn't ask for anything.",
    },
  ],

  pitfall: {
    wrong: "We need cups, plates, napkins and etc.",
    right: "We need cups, plates, napkins<b>, etc.</b>",
    why: "<b>etc.</b> already means and other things, so don't put and before it.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "We sell all kinds of citrus fruit, ___ lemons, limes and oranges.",
      options: ["i.e.", "e.g.", "etc."],
      answer: 1,
      feedback:
        "Lemons, limes and oranges are some examples. There are other citrus fruits too, like grapefruit, so we use e.g. (for example). With i.e., the sentence would say these are the only ones, and etc. goes at the end of a list, not before it.",
    },
    {
      kind: "choice",
      stem: "The office is closed at the weekend, ___ on Saturday and Sunday.",
      options: ["e.g.", "etc.", "i.e."],
      answer: 2,
      feedback:
        "The weekend is exactly Saturday and Sunday, with nothing else, so we use i.e. (that is). With e.g., the sentence would say these are only some examples, and etc. goes at the end of a list.",
    },
    {
      kind: "choice",
      stem: "You are writing to a client for the first time. Which sentence is the most formal?",
      options: ["Please reply as soon as possible.", "Please reply ASAP.", "Reply ASAP, thx!"],
      answer: 0,
      feedback:
        "ASAP is common in work messages, but it is informal. In a formal email, write the full words: Please reply as soon as possible. Thx (thanks) is very informal.",
    },
    {
      kind: "mistake",
      tokens: ["Please", "send", "me", "the", "sales", "figures", "FYI."],
      wrongIndex: 6,
      correction: "ASAP.",
      feedback:
        "FYI means for your information. You use it when you give information, not when you ask for something. Here the writer wants the figures quickly, so the right word is ASAP (as soon as possible): Please send me the sales figures ASAP.",
    },
    {
      kind: "mistake",
      tokens: ["For", "the", "picnic,", "bring", "sandwiches,", "fruit,", "drinks,", "etc.."],
      wrongIndex: 7,
      correction: "etc.",
      feedback:
        "When etc. ends a sentence, its full stop also ends the sentence. Don't add a second one: For the picnic, bring sandwiches, fruit, drinks, etc.",
    },
  ],

  levelRationale:
    "The CEFR's B1 descriptors include writing notes, messages and simple emails, and understanding short work texts, where e.g., i.e., etc., titles and ASAP are very common. The English Grammar Profile does not cover abbreviations, so the level follows the CEFR and the spec (section 8). The titles Mr, Mrs and Ms were already used at A1 and in B1 orders 34 and 35. The register point (ASAP is informal) builds on order 33.",

  sourceNotes:
    "english_grammar.txt, # Abbreviations lists abbreviations from house adverts (bed, kit, gge, GCH, unfurn). They are too specialised for this level and are left out. The list here (e.g., i.e., etc., Mr, Mrs, Ms, Dr, St, approx., ASAP, FYI) and the British and American full stop rules are authored from Swan, Practical English Usage.",
};
