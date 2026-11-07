import type { SetTopic } from "../../schema";

export const holidaysAndOutdoorActivities: SetTopic = {
  slug: "holidays-and-outdoor-activities",
  title: "Holidays and outdoor activities",
  summary: "Talk about your holidays and the things you do outside: go camping, go swimming, go on a trip, have a picnic on the beach.",
  level: "a2",
  category: "vocabulary",
  shape: "set",
  order: 22,

  explanation: [
    "This topic has words for holidays and for things people do outside: at the beach, in the mountains, on a lake or in the countryside. The table shows them in this order: first holiday words and places, then water activities, then activities on land, and last camping and eating outside.",
    "A <b>holiday</b> is a time when you do not work or go to school, and often travel. Say <b>on holiday</b>: We're on holiday in Spain. We go on holiday every August. Not in holiday. In American English, people say vacation: We're on vacation.",
    "Many activity words end in <b>-ing</b>: swimming, sailing, fishing, camping. To say that you do them, use <b>go</b> + the -ing word: We go swimming every summer. Last year we went camping in Wales. Do not put to after go: go fishing, not go to fishing.",
    "Some activities use other verbs. You <b>have a picnic</b> or <b>have a barbecue</b>: We had a picnic by the river. You <b>go on a trip</b>: We went on a trip to the mountains. You <b>go to the beach</b>: On Sunday we went to the beach.",
    "Spelling: British English writes snorkelling, with two l's. American English writes snorkeling, with one. Both are correct.",
    "The sounds in / / are American English.",
  ].join("\n\n"),

  entries: [
    { headword: "holiday", ipa: "/ˈhɑlədeɪ/", gloss: "a time away from work or school, often in another place. American English says vacation.", inUse: "We're going on <b>holiday</b> to Greece in July." },
    { headword: "trip", ipa: "/trɪp/", gloss: "a short journey to a place and back again", inUse: "We went on a day <b>trip</b> to the lake." },
    { headword: "beach", ipa: "/bitʃ/", gloss: "the area of sand or small stones next to the sea", inUse: "The children played on the <b>beach</b> all day." },
    { headword: "sightseeing", ipa: "/ˈsaɪtsiɪŋ/", gloss: "visiting the famous and interesting places in a town or city", inUse: "We went <b>sightseeing</b> in Rome on our first day." },
    { headword: "sunbathing", ipa: "/ˈsʌnbeɪðɪŋ/", gloss: "lying in the sun to get warm or to make your skin darker", inUse: "My sister loves <b>sunbathing</b>, but I prefer the shade." },

    { headword: "swimming", ipa: "/ˈswɪmɪŋ/", gloss: "moving through water with your arms and legs", inUse: "Let's go <b>swimming</b> in the sea." },
    { headword: "sailing", ipa: "/ˈseɪlɪŋ/", gloss: "travelling on water in a boat that the wind moves", inUse: "They go <b>sailing</b> every weekend in summer." },
    { headword: "snorkelling", ipa: "/ˈsnɔrkəlɪŋ/", gloss: "swimming just under the water with a tube in your mouth for air, to look at fish. American English writes snorkeling.", inUse: "We saw beautiful fish when we went <b>snorkelling</b>." },
    { headword: "surfing", ipa: "/ˈsɝfɪŋ/", gloss: "standing on a long board and riding on big waves in the sea", inUse: "He learned <b>surfing</b> in Australia." },
    { headword: "fishing", ipa: "/ˈfɪʃɪŋ/", gloss: "trying to catch fish, for food or for fun", inUse: "My grandfather goes <b>fishing</b> on the river." },

    { headword: "cycling", ipa: "/ˈsaɪklɪŋ/", gloss: "riding a bike", inUse: "We went <b>cycling</b> along the coast." },
    { headword: "hiking", ipa: "/ˈhaɪkɪŋ/", gloss: "walking a long way in the countryside or the mountains, for fun", inUse: "Bring good shoes. We're going <b>hiking</b> tomorrow." },
    { headword: "climbing", ipa: "/ˈklaɪmɪŋ/", gloss: "going up rocks or mountains, using your hands and feet", inUse: "<b>Climbing</b> can be dangerous without a teacher." },

    { headword: "camping", ipa: "/ˈkæmpɪŋ/", gloss: "staying outside for a holiday, usually sleeping in a tent", inUse: "We go <b>camping</b> in the forest every year." },
    { headword: "tent", ipa: "/tɛnt/", gloss: "a small house made of strong cloth that you can carry and put up outside", inUse: "It rained, but we stayed dry in our <b>tent</b>." },
    { headword: "campsite", ipa: "/ˈkæmpsaɪt/", gloss: "a place where people can stay in tents, often with showers and toilets", inUse: "The <b>campsite</b> was next to a small lake." },
    { headword: "picnic", ipa: "/ˈpɪknɪk/", gloss: "a meal that you take with you and eat outside", inUse: "We had a <b>picnic</b> in the park." },
    { headword: "barbecue", ipa: "/ˈbɑrbɪkju/", gloss: "a party where people cook food over a fire outside, or the thing they cook on", inUse: "Our neighbours invited us to a <b>barbecue</b> on Saturday." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["Last summer we went to camping.", "Last summer we went camping.", "Last summer we went on camping."],
      answer: 1,
      feedback:
        "With activity words that end in -ing, use go + the -ing word, with nothing between them: we went camping. Went to camping and went on camping are mistakes that many learners make.",
    },
    {
      kind: "gap",
      stem: "Our office is closed in August, because everyone is ___ holiday. (one word)",
      answers: ["on"],
      feedback:
        "Say on holiday: everyone is on holiday. It is the same in American English with vacation: on vacation. In holiday is not correct.",
    },
    {
      kind: "gap",
      stem: "A meal that you take with you and eat outside, for example in a park, is a ___.",
      answers: ["picnic"],
      feedback:
        "A picnic is a meal that you take with you and eat outside. We say have a picnic: We had a picnic by the river.",
    },
    {
      kind: "choice",
      stem: "You want to see the old church, the museum and the castle in a new city. What are you doing?",
      options: ["sunbathing", "sailing", "hiking", "sightseeing"],
      answer: 3,
      feedback:
        "Sightseeing is visiting the famous and interesting places in a town or city. Sunbathing is lying in the sun, sailing is travelling in a boat, and hiking is walking a long way in the countryside.",
    },
    {
      kind: "mistake",
      tokens: ["We", "put", "up", "our", "picnic", "and", "slept", "in", "it."],
      wrongIndex: 4,
      correction: "tent",
      feedback:
        "You put up a tent and sleep in it: it is a small house of strong cloth. A picnic is a meal that you eat outside.",
    },
  ],

  levelRationale:
    "The English Vocabulary Profile places holiday, trip, beach, tent, picnic, camping, swimming, sailing, fishing and cycling at A1 or A2, and they are the words an A2 learner needs to describe a holiday. Go + -ing for activities (go swimming, go shopping) is an early point in the English Grammar Profile. Sightseeing, snorkelling, surfing, sunbathing, hiking and climbing may sit a little higher in the profile, but they are common holiday words, they follow the same go + -ing pattern, and an example makes each one clear.",

  sourceNotes:
    "english_grammar.txt, # Vocabulary, lists sailing, snorkelling, water-skiing, white-water rafting and windsurfing. Sailing and snorkelling are used here, but the glosses are new, and nothing from the notes' definitions or IPA is used. Water-skiing, white-water rafting and windsurfing are above A2, and windsurfing is not in CMUdict, so they are left out. Go + -ing, on holiday, have a picnic and the snorkelling/snorkeling spelling checked against Swan, Practical English Usage. IPA is from CMUdict (BSD-style licence, see LICENSES.md), converted ARPAbet→IPA and checked by hand: the second strong mark in sightseeing is dropped; snorkelling uses the CMUdict sounds of snorkeling.",
};
