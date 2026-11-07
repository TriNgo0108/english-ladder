import type { SetTopic } from "../../schema";

export const houseAndHome: SetTopic = {
  slug: "house-and-home",
  title: "House and home",
  summary: "Describe where you live, room by room: the kitchen, the living room, upstairs and downstairs, and the things in each room.",
  level: "a2",
  category: "vocabulary",
  shape: "set",
  order: 25,

  explanation: [
    "This topic has words for the place where you live. The table shows them in this order: first kinds of home and the parts of a house, then the rooms, then the furniture and machines in them. <b>Furniture</b> means the big things in a room, like a sofa, a bed or a cupboard. It has no plural: some furniture, not furnitures.",
    "A <b>house</b> is a building. Your <b>home</b> is the place where you live: it can be a house, a flat or one room. Say <b>at home</b> and <b>go home</b>, with no to: I'm at home. I go home at six. Not I go to home.",
    "Use <b>in</b> with rooms: in the kitchen, in my bedroom, in the garden. Use <b>on</b> with floors: on the ground floor, on the second floor.",
    "<b>Upstairs</b> and <b>downstairs</b> already mean to or on another floor, so they need no to or in: Go upstairs. The bathroom is downstairs. Not go to upstairs.",
    "British and American English count floors in different ways. In Britain, the floor at the same level as the street is the <b>ground floor</b>, and the floor above it is the first floor. In the USA, the floor at street level is the first floor. Some other words change too: a flat is an apartment in American English, a wardrobe is a closet, and a cooker is a stove.",
    "Cupboard has a p that we do not say: KUB-erd. Shelf has a different plural: one shelf, two <b>shelves</b>.",
    "The sounds in / / are American English.",
  ].join("\n\n"),

  entries: [
    { headword: "house", ipa: "/haʊs/", gloss: "a building for people to live in, often one family", inUse: "They live in a small <b>house</b> near the river." },
    { headword: "home", ipa: "/hoʊm/", gloss: "the place where you live. It can be a house, a flat or a room.", inUse: "I usually get <b>home</b> at about seven." },
    { headword: "flat", ipa: "/flæt/", gloss: "a home with all its rooms on one floor of a bigger building. American English says apartment.", inUse: "Our <b>flat</b> is on the fourth floor." },
    { headword: "garden", ipa: "/ˈɡɑrdən/", gloss: "the land next to a house, with grass, flowers or vegetables. American English often says yard for the grass part.", inUse: "The children are playing in the <b>garden</b>." },
    { headword: "roof", ipa: "/ruf/", gloss: "the top of a building, over the rooms", inUse: "There's a bird on the <b>roof</b>." },
    { headword: "wall", ipa: "/wɔl/", gloss: "one of the sides of a room or a building", inUse: "We put a big photo on the <b>wall</b>." },
    { headword: "floor", ipa: "/flɔr/", gloss: "the part of a room that you walk on. It is also one level of a building.", inUse: "Don't leave your shoes on the <b>floor</b>." },
    { headword: "ground floor", gloss: "the floor of a building at the same level as the street. American English says first floor.", inUse: "The kitchen is on the <b>ground floor</b>." },
    { headword: "stairs", ipa: "/stɛrz/", gloss: "the steps inside a building that you walk up and down to go to another floor", inUse: "Be careful on the <b>stairs</b>." },
    { headword: "upstairs", ipa: "/ʌpˈstɛrz/", gloss: "on or to a higher floor of a building", inUse: "My bedroom is <b>upstairs</b>." },
    { headword: "downstairs", ipa: "/daʊnˈstɛrz/", gloss: "on or to a lower floor of a building, often the ground floor", inUse: "Breakfast is ready. Come <b>downstairs</b>!" },

    { headword: "hall", ipa: "/hɔl/", gloss: "the space just inside the front door, with doors to the other rooms", inUse: "You can leave your coat in the <b>hall</b>." },
    { headword: "kitchen", ipa: "/ˈkɪtʃən/", gloss: "the room where you cook", inUse: "We usually eat breakfast in the <b>kitchen</b>." },
    { headword: "living room", gloss: "the room where you sit, talk and watch TV", inUse: "There's a big sofa in the <b>living room</b>." },
    { headword: "bedroom", ipa: "/ˈbɛdrum/", gloss: "a room for sleeping in", inUse: "Our flat has two <b>bedrooms</b>." },
    { headword: "bathroom", ipa: "/ˈbæθrum/", gloss: "a room with a bath or a shower, and often a toilet", inUse: "The <b>bathroom</b> is next to my bedroom." },

    { headword: "sofa", ipa: "/ˈsoʊfə/", gloss: "a long, soft seat for two or three people", inUse: "He fell asleep on the <b>sofa</b>." },
    { headword: "armchair", ipa: "/ˈɑrmtʃɛr/", gloss: "a soft chair for one person, with a place for each arm", inUse: "My grandfather always sits in this <b>armchair</b>." },
    { headword: "wardrobe", ipa: "/ˈwɔrdroʊb/", gloss: "a tall cupboard for your clothes. American English says closet.", inUse: "Hang your shirts in the <b>wardrobe</b>." },
    { headword: "cupboard", ipa: "/ˈkʌbɚd/", gloss: "a piece of furniture with a door, or a space in a wall with a door, for things like plates, food or towels", inUse: "The cups are in the <b>cupboard</b> above the sink." },
    { headword: "shelf", ipa: "/ʃɛlf/", gloss: "a flat board on a wall or in a cupboard, for putting things on. The plural is shelves.", inUse: "Put the books back on the <b>shelf</b>, please." },
    { headword: "fridge", ipa: "/frɪdʒ/", gloss: "a cold machine in the kitchen that keeps food and drinks fresh", inUse: "There's some milk in the <b>fridge</b>." },
    { headword: "cooker", ipa: "/ˈkʊkɚ/", gloss: "a kitchen machine for cooking, with an oven and hot places on top. American English says stove.", inUse: "We've got a new electric <b>cooker</b>." },
    { headword: "sink", ipa: "/sɪŋk/", gloss: "a bowl with taps in a kitchen or bathroom, for washing dishes or your hands", inUse: "Leave the dirty plates in the <b>sink</b>." },
    { headword: "washing machine", gloss: "a machine that washes clothes", inUse: "The <b>washing machine</b> is in the kitchen." },
    { headword: "shower", ipa: "/ˈʃaʊɚ/", gloss: "a place where water comes down on you from above, for washing your body", inUse: "I have a <b>shower</b> every morning." },
    { headword: "bath", ipa: "/bæθ/", gloss: "a long container that you fill with water and sit in to wash. American English says bathtub.", inUse: "The children have a <b>bath</b> before bed." },
    { headword: "mirror", ipa: "/ˈmɪrɚ/", gloss: "a piece of special glass where you can see yourself", inUse: "She looked in the <b>mirror</b> and smiled." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "I'm very tired after work. I'm going ___ now.",
      options: ["to home", "at home", "home"],
      answer: 2,
      feedback:
        "After go, say home with no to: I'm going home. To home is a common mistake. At home is for where you are, not where you go: I'm at home now.",
    },
    {
      kind: "gap",
      stem: "In the kitchen, we keep milk and cheese cold in the ___.",
      answers: ["fridge", "refrigerator"],
      feedback:
        "A fridge keeps food and drinks cold and fresh. Refrigerator is the long word for fridge, and it is also correct.",
    },
    {
      kind: "choice",
      stem: "Tom lives in London. His flat is one floor above the street. In British English, which floor is it on?",
      options: ["the ground floor", "the first floor", "the second floor"],
      answer: 1,
      feedback:
        "In British English, the floor at street level is the ground floor, so one floor above it is the first floor. In American English, it is the second floor, because the street level is the first floor.",
    },
    {
      kind: "gap",
      stem: "My bedroom is ___, so I walk up the stairs to go to bed.",
      answers: ["upstairs"],
      feedback:
        "Upstairs means on a higher floor. You walk up the stairs to get there. Downstairs is the opposite.",
    },
    {
      kind: "mistake",
      tokens: ["Every", "evening,", "I", "hang", "my", "clothes", "in", "the", "fridge."],
      wrongIndex: 8,
      correction: "wardrobe.",
      feedback:
        "You hang your clothes in a wardrobe (in American English, a closet). A fridge is the cold machine in the kitchen for food.",
    },
  ],

  levelRationale:
    "The English Vocabulary Profile places house, home, flat, garden, kitchen, bedroom, bathroom, living room, floor, stairs, upstairs, downstairs, sofa, fridge and shower at A1 or A2: they are the words an A2 learner needs to describe their home. Wardrobe, cupboard, shelf, cooker, sink and mirror may sit a little higher, but they are common, concrete things that an example makes clear. Go home and at home, and in with rooms, build on the A1 topic on prepositions of place.",

  sourceNotes:
    "New topic: english_grammar.txt, # Vocabulary, has only rowhouse (terraced house) for homes, which is above A2 and not used. The word list and every gloss are new. Go home and at home, upstairs and downstairs with no to, furniture as uncountable, shelf and shelves, and the British and American floor numbers and words (flat and apartment, wardrobe and closet, cooker and stove, bath and bathtub) checked against Swan, Practical English Usage. IPA is from CMUdict (BSD-style licence, see LICENSES.md), converted ARPAbet→IPA and checked by hand: upstairs changes CMUdict's weak first sound to /ʌ/, and downstairs drops the second strong mark, to match the usual US stress.",
};
