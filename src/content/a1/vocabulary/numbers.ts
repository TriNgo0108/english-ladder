import type { SetTopic } from "../../schema";

export const numbers: SetTopic = {
  slug: "numbers",
  title: "Numbers: one, two, three…",
  summary: "Learn the numbers from 0 to a million, say them clearly, and tell thirteen from thirty.",
  level: "a1",
  category: "vocabulary",
  shape: "set",
  order: 20,

  explanation: [
    "We use numbers all the time: for age, prices, times, phone numbers and addresses. The table shows the numbers from 0 to 20, then 30, 40 and the other tens to 90, then hundred, thousand and million.",
    "Learn 0 to 12 as new words. After 12, most numbers follow a rule, so they are easier.",
    "The numbers 13 to 19 end in <b>-teen</b>: fourteen, sixteen, seventeen. Three of them change a little. Three → <b>thirteen</b>. Five → <b>fifteen</b>, not fiveteen. Eight → <b>eighteen</b>, with only one t.",
    "The tens end in <b>-ty</b>: twenty, sixty, seventy. Again, some change. Three → <b>thirty</b>. Five → <b>fifty</b>, not fivety. Four → <b>forty</b>. Four has a u, but forty does not: forty, not fourty.",
    "Thirteen and thirty sound almost the same, so say them carefully. In thirteen, the strong part is at the end: thir-TEEN. In thirty, the strong part is at the start: THIR-ty. It is the same for 14 and 40, 15 and 50, and the others. In the Sounds like column, the mark ˈ comes just before the strong part: /θɝˈtin/, /ˈθɝti/.",
    "For 21 to 99, say the ten, then the number from 1 to 9: twenty-one, thirty-five, ninety-nine. When you write them, put a short line (-) between the two words: twenty-one.",
    "For 100, say <b>a hundred</b> or <b>one hundred</b>. They mean the same. For 1,000, say a thousand or one thousand. In British English, put <b>and</b> after hundred: 150 = a hundred and fifty, 265 = two hundred and sixty-five. In American English, people often say one hundred fifty, with no and. Both are correct. Big numbers work in the same way: 1,460 = one thousand, four hundred and sixty.",
    "After another number, hundred, thousand and million have no -s: two hundred, five thousand, three million. Not two hundreds.",
    "The sounds in / / are American English.",
  ].join("\n\n"),

  entries: [
    { headword: "zero", ipa: "/ˈzɪroʊ/", gloss: "the number 0. In phone numbers, people often say oh.", inUse: "My phone number starts with <b>zero</b>." },
    { headword: "one", ipa: "/wʌn/", gloss: "the number 1", inUse: "I have <b>one</b> brother." },
    { headword: "two", ipa: "/tu/", gloss: "the number 2", inUse: "We have <b>two</b> cats." },
    { headword: "three", ipa: "/θri/", gloss: "the number 3", inUse: "She has <b>three</b> children." },
    { headword: "four", ipa: "/fɔr/", gloss: "the number 4", inUse: "There are <b>four</b> people in my family." },
    { headword: "five", ipa: "/faɪv/", gloss: "the number 5", inUse: "The shop is <b>five</b> minutes from here." },
    { headword: "six", ipa: "/sɪks/", gloss: "the number 6", inUse: "I get up at <b>six</b> o'clock." },
    { headword: "seven", ipa: "/ˈsɛvən/", gloss: "the number 7", inUse: "There are <b>seven</b> days in a week." },
    { headword: "eight", ipa: "/eɪt/", gloss: "the number 8", inUse: "My son is <b>eight</b>." },
    { headword: "nine", ipa: "/naɪn/", gloss: "the number 9", inUse: "The lesson starts at <b>nine</b>." },
    { headword: "ten", ipa: "/tɛn/", gloss: "the number 10", inUse: "I can count to <b>ten</b> in Spanish." },
    { headword: "eleven", ipa: "/ɪˈlɛvən/", gloss: "the number 11", inUse: "A football team has <b>eleven</b> players." },
    { headword: "twelve", ipa: "/twɛlv/", gloss: "the number 12", inUse: "There are <b>twelve</b> months in a year." },
    { headword: "thirteen", ipa: "/θɝˈtin/", gloss: "the number 13 (10 + 3)", inUse: "My daughter is <b>thirteen</b>." },
    { headword: "fourteen", ipa: "/fɔrˈtin/", gloss: "the number 14 (10 + 4)", inUse: "I live at number <b>fourteen</b>." },
    { headword: "fifteen", ipa: "/fɪfˈtin/", gloss: "the number 15 (10 + 5)", inUse: "The class has <b>fifteen</b> students." },
    { headword: "sixteen", ipa: "/sɪksˈtin/", gloss: "the number 16 (10 + 6)", inUse: "He is <b>sixteen</b> years old." },
    { headword: "seventeen", ipa: "/sɛvənˈtin/", gloss: "the number 17 (10 + 7)", inUse: "The book costs <b>seventeen</b> euros." },
    { headword: "eighteen", ipa: "/eɪˈtin/", gloss: "the number 18 (10 + 8)", inUse: "In my country, you can drive at <b>eighteen</b>." },
    { headword: "nineteen", ipa: "/naɪnˈtin/", gloss: "the number 19 (10 + 9)", inUse: "My sister is <b>nineteen</b>." },
    { headword: "twenty", ipa: "/ˈtwɛnti/", gloss: "the number 20 (2 × 10)", inUse: "The ticket costs <b>twenty</b> dollars." },
    { headword: "thirty", ipa: "/ˈθɝti/", gloss: "the number 30 (3 × 10)", inUse: "The lesson is <b>thirty</b> minutes long." },
    { headword: "forty", ipa: "/ˈfɔrti/", gloss: "the number 40 (4 × 10)", inUse: "My father is <b>forty</b>." },
    { headword: "fifty", ipa: "/ˈfɪfti/", gloss: "the number 50 (5 × 10)", inUse: "The jacket is <b>fifty</b> pounds." },
    { headword: "sixty", ipa: "/ˈsɪksti/", gloss: "the number 60 (6 × 10)", inUse: "There are <b>sixty</b> minutes in an hour." },
    { headword: "seventy", ipa: "/ˈsɛvənti/", gloss: "the number 70 (7 × 10)", inUse: "My grandmother is <b>seventy</b>." },
    { headword: "eighty", ipa: "/ˈeɪti/", gloss: "the number 80 (8 × 10)", inUse: "Our house is <b>eighty</b> years old." },
    { headword: "ninety", ipa: "/ˈnaɪnti/", gloss: "the number 90 (9 × 10)", inUse: "The film is <b>ninety</b> minutes long." },
    { headword: "hundred", ipa: "/ˈhʌndrəd/", gloss: "the number 100 (10 × 10). Say a hundred or one hundred.", inUse: "There are a <b>hundred</b> people at the party." },
    { headword: "thousand", ipa: "/ˈθaʊzənd/", gloss: "the number 1,000 (10 × 100)", inUse: "The town has five <b>thousand</b> people." },
    { headword: "million", ipa: "/ˈmɪljən/", gloss: "the number 1,000,000 (1,000 × 1,000)", inUse: "This city has three <b>million</b> people." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Which word is 15?",
      options: ["fifty", "fiveteen", "fifteen", "fivety"],
      answer: 2,
      feedback:
        "15 is fifteen. Five changes to fif- here, so it is not fiveteen. Fifty is 50: the -ty numbers are the tens. Fivety is not a word.",
    },
    {
      kind: "choice",
      stem: "Sam says: I'm THIR-ty. The strong part is at the start. How old is Sam?",
      options: ["13", "30", "3"],
      answer: 1,
      feedback:
        "In thirty (30), the strong part is at the start: THIR-ty. In thirteen (13), the strong part is at the end: thir-TEEN. So Sam is 30.",
    },
    {
      kind: "gap",
      stem: "Write 150 in words: ___",
      answers: ["a hundred and fifty", "one hundred and fifty", "one hundred fifty", "a hundred fifty"],
      feedback:
        "150 is a hundred and fifty, or one hundred and fifty. A hundred and one hundred mean the same. British English puts and after hundred. American English often has no and: one hundred fifty. All of these are correct.",
    },
    {
      kind: "choice",
      stem: "How do you say 3,000?",
      options: ["three thousands", "three thousand", "three of thousand"],
      answer: 1,
      feedback:
        "After another number, thousand has no -s: three thousand. It is the same for hundred and million: two hundred, five million. We do not say three thousands or three of thousand.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to say 265.",
      words: ["sixty-five", "and", "two", "hundred"],
      answer: "two hundred and sixty-five",
      feedback:
        "Say the hundreds first, then and, then the rest: two hundred and sixty-five. Hundred has no -s after two. In American English, people often leave out and: two hundred sixty-five.",
    },
    {
      kind: "mistake",
      tokens: ["My", "father", "is", "fourty", "years", "old."],
      wrongIndex: 3,
      correction: "forty",
      feedback:
        "40 is forty, with no u. Four has a u, but forty does not. Fourteen (14) keeps the u: fourteen, forty.",
    },
  ],

  levelRationale:
    "The CEFR's A1 descriptors include handling numbers, quantities, cost and time, and the English Vocabulary Profile places the number words for 0 to 100 at A1. Learners need numbers at once, for age, prices and phone numbers. Thousand and million are kept here for prices and dates, and because they follow the same no -s rule as hundred.",

  sourceNotes:
    "english_grammar.txt, # Numbers, gives five examples of saying big numbers (150, 1460, 15389, 170827, 4000000). The 'a/one hundred and fifty' pattern agrees with Swan, Practical English Usage. The note's last example is wrong: it gives 4,000,000 as 'four million, one hundred thousand', which is 4,100,000. That example is not used. Spelling, the -teen/-ty stress contrast, the British and and the no -s rule checked against Swan. IPA is from CMUdict (BSD-style licence, see LICENSES.md), converted ARPAbet→IPA and checked by hand; nothing from the notes.",
};
