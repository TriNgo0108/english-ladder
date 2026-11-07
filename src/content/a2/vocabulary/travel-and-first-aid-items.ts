import type { SetTopic } from "../../schema";

export const travelAndFirstAidItems: SetTopic = {
  slug: "travel-and-first-aid-items",
  title: "Travel and first-aid items",
  summary: "Pack for a trip with the right words: passport, ticket, suitcase, sunscreen, plasters and a torch, and a small first-aid kit.",
  level: "a2",
  category: "vocabulary",
  shape: "set",
  order: 25,

  explanation: [
    "This topic has words for the things you take on a trip. The table shows them in this order: first things for travelling, then things for the sun and the dark, and last the things in a first-aid kit. <b>First aid</b> is the help you give to a person who is hurt or ill before a doctor comes.",
    "To put your things in a suitcase or a bag for a trip is to <b>pack</b>: Have you packed your suitcase? Don't forget your passport!",
    "Some words are always plural, because the thing has two parts: <b>sunglasses</b>, <b>scissors</b>, <b>tweezers</b>. Use a plural verb, and these or those: These scissors are sharp. My sunglasses are in the car. To talk about one, say a pair of: I bought a pair of sunglasses. Not a sunglass or a scissor.",
    "British and American English use some different words. A <b>torch</b> in British English is a flashlight in American English. A <b>plaster</b> for a small cut is often a bandage in American English. People in Britain also say rucksack for a backpack, and sun cream for sunscreen.",
    "Phrase book, first-aid kit and insect repellent are made of two words, so they have no sounds in the table.",
    "The sounds in / / are American English.",
  ].join("\n\n"),

  entries: [
    { headword: "passport", ipa: "/ˈpæspɔrt/", gloss: "a small official book with your photo and name. You show it when you travel to another country.", inUse: "Can I see your <b>passport</b>, please?" },
    { headword: "ticket", ipa: "/ˈtɪkɪt/", gloss: "a piece of paper, or a message on your phone, that shows you have paid to travel or to go in", inUse: "I bought my train <b>ticket</b> online." },
    { headword: "suitcase", ipa: "/ˈsutkeɪs/", gloss: "a large bag or box with a handle, for your clothes when you travel", inUse: "My <b>suitcase</b> is too heavy to carry." },
    { headword: "backpack", ipa: "/ˈbækpæk/", gloss: "a bag that you carry on your back. British English also says rucksack.", inUse: "I only took a small <b>backpack</b> for the weekend." },
    { headword: "map", ipa: "/mæp/", gloss: "a drawing of a place from above, with its roads, towns and rivers", inUse: "Can you show me the hotel on the <b>map</b>?" },
    { headword: "guidebook", ipa: "/ˈɡaɪdbʊk/", gloss: "a book for visitors about a city or country: where to stay, where to eat and what to see", inUse: "Our <b>guidebook</b> says the museum is free on Sundays." },
    { headword: "phrase book", gloss: "a book for travellers with sentences in another language, like How much is this?, and what they mean", inUse: "I used a <b>phrase book</b> to order food in Portugal." },
    { headword: "camera", ipa: "/ˈkæmrə/", gloss: "a thing that you take photos with", inUse: "I left my <b>camera</b> on the bus!" },
    { headword: "charger", ipa: "/ˈtʃɑrdʒɚ/", gloss: "a thing that puts power back into your phone or computer", inUse: "Have you got a phone <b>charger</b>? My battery is almost dead." },

    { headword: "sunglasses", ipa: "/ˈsʌnɡlæsɪz/", gloss: "dark glasses that you wear to protect your eyes from the sun. The word is plural.", inUse: "My <b>sunglasses</b> are in the car." },
    { headword: "sunscreen", ipa: "/ˈsʌnskrin/", gloss: "a cream that stops the sun from burning your skin. British English also says sun cream.", inUse: "Put on some <b>sunscreen</b> before you go to the beach." },
    { headword: "torch", ipa: "/tɔrtʃ/", gloss: "a light that works with batteries and that you can carry. American English says flashlight.", inUse: "It's very dark in the tent. Where's the <b>torch</b>?" },
    { headword: "insect repellent", gloss: "something that you put on your skin to keep mosquitoes and other insects away", inUse: "Take some <b>insect repellent</b>. There are a lot of mosquitoes by the lake." },

    { headword: "first-aid kit", gloss: "a box or bag with the things you need to help a person who is hurt", inUse: "There's a <b>first-aid kit</b> in the car." },
    { headword: "plaster", ipa: "/ˈplæstɚ/", gloss: "a small piece of sticky material that you put over a small cut. American English often says bandage.", inUse: "I cut my finger, so I put a <b>plaster</b> on it." },
    { headword: "bandage", ipa: "/ˈbændɪdʒ/", gloss: "a long piece of cloth that you put round a part of the body that is hurt", inUse: "The nurse put a <b>bandage</b> on my ankle." },
    { headword: "painkiller", ipa: "/ˈpeɪnkɪlɚ/", gloss: "a pill that makes a pain smaller, for example a headache", inUse: "I took a <b>painkiller</b> for my headache." },
    { headword: "thermometer", ipa: "/θɚˈmɑmətɚ/", gloss: "a thing that tells you your temperature, or how hot or cold the air is", inUse: "Use the <b>thermometer</b> to see if she has a temperature." },
    { headword: "tweezers", ipa: "/ˈtwizɚz/", gloss: "a small tool with two thin metal arms, for taking out very small things, like a piece of glass from your skin. The word is plural.", inUse: "I used <b>tweezers</b> to take the small piece of glass out of my foot." },
    { headword: "scissors", ipa: "/ˈsɪzɚz/", gloss: "a tool for cutting paper or cloth, with two sharp parts that open and close. The word is plural.", inUse: "Cut the bandage with the <b>scissors</b>." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["These scissors are very sharp.", "This scissors is very sharp.", "These scissor are very sharp."],
      answer: 0,
      feedback:
        "Scissors is always plural, because it has two parts. So say these scissors and are. This scissors is and these scissor are both mistakes. To talk about one, say a pair of scissors.",
    },
    {
      kind: "gap",
      stem: "You need this small book to travel to another country. It has your photo and your name in it. It's your ___.",
      answers: ["passport"],
      feedback:
        "A passport is the small official book that you show when you travel to another country. It has your photo and your name.",
    },
    {
      kind: "gap",
      stem: "I've got a small cut on my finger. Can you put a ___ on it, please?",
      answers: ["plaster", "bandage", "band-aid", "bandaid", "dressing"],
      feedback:
        "For a small cut, British English says a plaster. American English often says a bandage, or a Band-Aid. All of these are correct. A dressing is correct too, but people use that word mostly in hospitals.",
    },
    {
      kind: "choice",
      stem: "It's night, and it's very dark in the tent. You can't see anything. What do you need?",
      options: ["a thermometer", "a guidebook", "a torch", "a map"],
      answer: 2,
      feedback:
        "A torch is a light that you can carry (in American English, a flashlight). A thermometer tells you your temperature, and you need light to read a guidebook or a map.",
    },
    {
      kind: "mistake",
      tokens: ["I", "need", "the", "tweezers", "to", "take", "my", "temperature."],
      wrongIndex: 3,
      correction: "thermometer",
      feedback:
        "A thermometer tells you your temperature. To take your temperature means to find out how hot your body is. Tweezers are for taking out very small things from your skin.",
    },
  ],

  levelRationale:
    "The English Vocabulary Profile places passport, ticket, suitcase, map, camera, sunglasses and the verb pack at A1 or A2, the words a learner needs to get ready for a trip. Plasters, painkillers, a torch and a first-aid kit are a small step higher, but they are needed for the simple travel and health talk that A2 descriptors name, and each is a concrete thing that an example makes clear. Plural-only nouns like scissors build on the A1 topic on singular and plural nouns.",

  sourceNotes:
    "english_grammar.txt, # Vocabulary, lists sunscreen, insect repellent, bandages and plasters, tweezers, a thermometer, a torch, binoculars and a phrase book. These helped choose the words, but every gloss is new, and nothing from the notes' definitions or IPA is used. Binoculars and vaccination are above A2, so they are left out. Plural-only nouns (scissors, sunglasses, tweezers) and a pair of, and the British and American words (torch and flashlight, plaster and bandage, rucksack and backpack) checked against Swan, Practical English Usage. IPA is from CMUdict (BSD-style licence, see LICENSES.md), converted ARPAbet→IPA and checked by hand.",
};
