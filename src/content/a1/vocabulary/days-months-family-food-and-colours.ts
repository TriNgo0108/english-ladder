import type { SetTopic } from "../../schema";

export const daysMonthsFamilyFoodAndColours: SetTopic = {
  slug: "days-months-family-food-and-colours",
  title: "Days, months, family, food and colours",
  summary: "Learn everyday words for the days, months, family, food and colours, and use them in short sentences.",
  level: "a1",
  category: "vocabulary",
  shape: "set",
  order: 22,

  explanation: [
    "This topic has five groups of everyday words. The table shows them in this order: first the days of the week, then the months, then family, then food, and last colours.",
    "<b>Days.</b> A week has seven days. Saturday and Sunday are the weekend. Always start a day with a capital letter (a big letter): Monday, not monday. Use <b>on</b> with days: on Monday, on Fridays. Wednesday has a d that we do not say: WENZ-day.",
    "<b>Months.</b> A year has twelve months. Months also start with a capital letter: May, not may. Use <b>in</b> with months: in May, not on May. But use on with a date: on 3 May.",
    "<b>Family.</b> Your <b>parents</b> are your mother and father. Your grandmother and grandfather are the parents of your mother or father. <b>Children</b> is the plural of child: one child, two children. Your children are your sons and daughters.",
    "<b>Food.</b> Some food words usually have no plural and no a: bread, rice, meat and cheese. Say some bread, not a bread or breads. Other food words are like most nouns: an apple, two apples, an egg, three eggs. Remember: a noun is a word for a person, a thing, an animal or a place. As food, chicken and fish usually have no a: I eat fish. We have chicken for dinner.",
    "<b>Colours.</b> A colour word is an adjective. It goes before a noun or after be: a red car, The car is red. It has no plural: red cars, not reds cars. Grey is the British way to write it. In American English, it is gray.",
    "The sounds in / / are American English.",
  ].join("\n\n"),

  entries: [
    { headword: "Monday", ipa: "/ˈmʌndeɪ/", gloss: "the day after Sunday", inUse: "I have an English lesson on <b>Monday</b>." },
    { headword: "Tuesday", ipa: "/ˈtuzdeɪ/", gloss: "the day after Monday", inUse: "The shop is closed on <b>Tuesday</b>." },
    { headword: "Wednesday", ipa: "/ˈwɛnzdeɪ/", gloss: "the day after Tuesday", inUse: "We play tennis on <b>Wednesday</b> evening." },
    { headword: "Thursday", ipa: "/ˈθɝzdeɪ/", gloss: "the day after Wednesday", inUse: "My birthday is on <b>Thursday</b> this year." },
    { headword: "Friday", ipa: "/ˈfraɪdeɪ/", gloss: "the day after Thursday", inUse: "On <b>Friday</b>, we go to the cinema." },
    { headword: "Saturday", ipa: "/ˈsætɚdeɪ/", gloss: "the day after Friday, at the weekend", inUse: "I don't work on <b>Saturday</b>." },
    { headword: "Sunday", ipa: "/ˈsʌndeɪ/", gloss: "the day after Saturday, at the weekend", inUse: "We have lunch with my parents on <b>Sundays</b>." },

    { headword: "January", ipa: "/ˈdʒænjuɛri/", gloss: "the first month of the year", inUse: "It's very cold here in <b>January</b>." },
    { headword: "February", ipa: "/ˈfɛbjuɛri/", gloss: "the month after January", inUse: "<b>February</b> is a short month." },
    { headword: "March", ipa: "/mɑrtʃ/", gloss: "the month after February", inUse: "My son was born in <b>March</b>." },
    { headword: "April", ipa: "/ˈeɪprəl/", gloss: "the month after March", inUse: "It often rains in <b>April</b>." },
    { headword: "May", ipa: "/meɪ/", gloss: "the month after April", inUse: "We go to Italy in <b>May</b>." },
    { headword: "June", ipa: "/dʒun/", gloss: "the month after May", inUse: "There are thirty days in <b>June</b>." },
    { headword: "July", ipa: "/dʒuˈlaɪ/", gloss: "the month after June", inUse: "The school year finishes in <b>July</b>." },
    { headword: "August", ipa: "/ˈɑɡəst/", gloss: "the month after July", inUse: "Many shops are closed in <b>August</b>." },
    { headword: "September", ipa: "/sɛpˈtɛmbɚ/", gloss: "the month after August", inUse: "My new job starts in <b>September</b>." },
    { headword: "October", ipa: "/ɑkˈtoʊbɚ/", gloss: "the month after September", inUse: "My birthday is in <b>October</b>." },
    { headword: "November", ipa: "/noʊˈvɛmbɚ/", gloss: "the month after October", inUse: "We have a holiday in <b>November</b>." },
    { headword: "December", ipa: "/dɪˈsɛmbɚ/", gloss: "the last month of the year", inUse: "We visit my grandparents in <b>December</b>." },

    { headword: "mother", ipa: "/ˈmʌðɚ/", gloss: "the woman who is your parent", inUse: "My <b>mother</b> is a teacher." },
    { headword: "father", ipa: "/ˈfɑðɚ/", gloss: "the man who is your parent", inUse: "My <b>father</b> works in a bank." },
    { headword: "parents", ipa: "/ˈpɛrənts/", gloss: "your mother and father", inUse: "My <b>parents</b> live in Lima." },
    { headword: "brother", ipa: "/ˈbrʌðɚ/", gloss: "a boy or man with the same parents as you", inUse: "I have one <b>brother</b> and two sisters." },
    { headword: "sister", ipa: "/ˈsɪstɚ/", gloss: "a girl or woman with the same parents as you", inUse: "My <b>sister</b> is twenty-five." },
    { headword: "son", ipa: "/sʌn/", gloss: "a boy or man who is your child", inUse: "Their <b>son</b> is at school." },
    { headword: "daughter", ipa: "/ˈdɔtɚ/", gloss: "a girl or woman who is your child", inUse: "Our <b>daughter</b> lives in Toronto." },
    { headword: "children", ipa: "/ˈtʃɪldrən/", gloss: "sons and daughters. It is the plural of child.", inUse: "They have three <b>children</b>." },
    { headword: "husband", ipa: "/ˈhʌzbənd/", gloss: "the man you are married to", inUse: "Her <b>husband</b> is a doctor." },
    { headword: "wife", ipa: "/waɪf/", gloss: "the woman you are married to", inUse: "His <b>wife</b> is from Japan." },
    { headword: "grandmother", ipa: "/ˈɡrændmʌðɚ/", gloss: "the mother of your mother or father", inUse: "My <b>grandmother</b> lives with us." },
    { headword: "grandfather", ipa: "/ˈɡrændfɑðɚ/", gloss: "the father of your mother or father", inUse: "My <b>grandfather</b> was a farmer." },

    { headword: "bread", ipa: "/brɛd/", gloss: "a common food. We make sandwiches with it.", inUse: "Can I have some <b>bread</b>, please?" },
    { headword: "rice", ipa: "/raɪs/", gloss: "a food of very small white or brown pieces. We cook it in water.", inUse: "We often eat <b>rice</b> with chicken." },
    { headword: "meat", ipa: "/mit/", gloss: "food from an animal, for example chicken", inUse: "My sister doesn't eat <b>meat</b>." },
    { headword: "chicken", ipa: "/ˈtʃɪkən/", gloss: "a bird that people keep on farms, and the meat from this bird", inUse: "We have <b>chicken</b> for dinner." },
    { headword: "fish", ipa: "/fɪʃ/", gloss: "an animal that lives in water, and its meat as food", inUse: "I eat <b>fish</b> on Fridays." },
    { headword: "egg", ipa: "/ɛɡ/", gloss: "a food that comes from a chicken. It has a hard outside.", inUse: "I have two <b>eggs</b> for breakfast." },
    { headword: "cheese", ipa: "/tʃiz/", gloss: "a food that is made from milk", inUse: "This <b>cheese</b> is from France." },
    { headword: "apple", ipa: "/ˈæpəl/", gloss: "a round fruit that is red, green or yellow", inUse: "I eat an <b>apple</b> every day." },
    { headword: "banana", ipa: "/bəˈnænə/", gloss: "a long yellow fruit", inUse: "My son likes <b>bananas</b>." },
    { headword: "potato", ipa: "/pəˈteɪtoʊ/", gloss: "a vegetable that grows in the ground. We make chips with it.", inUse: "Do you want <b>potatoes</b> or rice?" },

    { headword: "red", ipa: "/rɛd/", gloss: "the colour of a tomato", inUse: "She has a <b>red</b> car." },
    { headword: "blue", ipa: "/blu/", gloss: "the colour of the sky on a sunny day", inUse: "My eyes are <b>blue</b>." },
    { headword: "green", ipa: "/ɡrin/", gloss: "the colour of grass", inUse: "I have a <b>green</b> bag." },
    { headword: "yellow", ipa: "/ˈjɛloʊ/", gloss: "the colour of a lemon", inUse: "Bananas are <b>yellow</b>." },
    { headword: "black", ipa: "/blæk/", gloss: "the colour of the sky at night", inUse: "He always wears a <b>black</b> coat." },
    { headword: "white", ipa: "/waɪt/", gloss: "the colour of milk", inUse: "Our house is <b>white</b>." },
    { headword: "brown", ipa: "/braʊn/", gloss: "the colour of coffee and chocolate", inUse: "He has <b>brown</b> eyes." },
    { headword: "grey", ipa: "/ɡreɪ/", gloss: "a colour between black and white. American English writes gray.", inUse: "The sky is <b>grey</b> today." },
    { headword: "orange", ipa: "/ˈɔrɪndʒ/", gloss: "a colour between red and yellow. It is also a round fruit.", inUse: "Her bag is <b>orange</b>." },
    { headword: "pink", ipa: "/pɪŋk/", gloss: "a colour between red and white", inUse: "My daughter's room is <b>pink</b>." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Which day comes after Tuesday?",
      options: ["Thursday", "Wednesday", "Monday"],
      answer: 1,
      feedback:
        "The days go Monday, Tuesday, Wednesday, Thursday. So Wednesday comes after Tuesday. Monday comes before Tuesday.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["My birthday is on May.", "My birthday is at May.", "My birthday is in May."],
      answer: 2,
      feedback:
        "Use in with months: in May. On is for days and dates: on Monday, on 3 May. At is for clock times: at six o'clock.",
    },
    {
      kind: "gap",
      stem: "Your mother's mother is your ___.",
      answers: ["grandmother", "grandma", "granny", "gran", "nan", "nana"],
      feedback:
        "The mother of your mother or father is your grandmother. In the family, people often say grandma, granny, gran, nan or nana. These are informal words for grandmother, and they are also correct.",
    },
    {
      kind: "gap",
      stem: "What colour is snow? It's ___.",
      answers: ["white"],
      feedback: "Snow is white, the same colour as milk.",
    },
    {
      kind: "mistake",
      tokens: ["I", "work", "from", "Monday", "to", "Wensday."],
      wrongIndex: 5,
      correction: "Wednesday.",
      feedback:
        "The day after Tuesday is Wednesday. People often forget the d, because we do not say it: we say WENZ-day, but we write Wednesday.",
    },
  ],

  levelRationale:
    "The English Vocabulary Profile places the days, the months, the main family words, basic food words and the basic colours at A1. They are the words a beginner needs to talk about their week, their family and what they eat. The topic is one list with five groups, so that these everyday words are all in one place.",

  sourceNotes:
    "New topic: english_grammar.txt has no list of days, months, family words or colours, and its # Vocabulary block is third-party dictionary text, which is not used. Glosses are new. The capital letters for days and months, on + days and in + months, the uncountable food words and grey/gray checked against Swan, Practical English Usage. IPA is from CMUdict (BSD-style licence, see LICENSES.md), converted ARPAbet→IPA and checked by hand; nothing from the notes.",
};
