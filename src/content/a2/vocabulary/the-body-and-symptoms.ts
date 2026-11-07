import type { SetTopic } from "../../schema";

export const theBodyAndSymptoms: SetTopic = {
  slug: "the-body-and-symptoms",
  title: "The body and symptoms",
  summary: "Name the parts of the body and tell a doctor what is wrong: My back hurts. I've got a headache. I feel dizzy.",
  level: "a2",
  category: "vocabulary",
  shape: "set",
  order: 23,

  explanation: [
    "This topic has words for the parts of the body, and words to say how you feel when you are ill. A <b>symptom</b> is something that shows you are ill, like a headache or a cough. The table shows the body from the head down, and then the symptoms.",
    "Remember: a plural is the form for more than one. Most body words make the plural with -s: two arms, ten fingers. But <b>foot</b> is different: one foot, two <b>feet</b>. Not foots.",
    "With body words, we usually use <b>my</b>, <b>your</b>, <b>his</b> or <b>her</b>, not the: I hurt my knee. She's washing her hands. Not I hurt the knee.",
    "To say where the pain is, use <b>hurt</b>. Hurt is irregular: hurt, hurt, hurt. My back hurts. My feet hurt (plural, so no -s). Yesterday I fell and hurt my arm.",
    "To name an illness or a pain, use <b>I've got</b> + a: I've got a headache. I've got a cold. I've got a sore throat. In American English, people usually say I have a headache. A cold is an illness. I'm cold is different: it means you want to be warmer.",
    "Some symptoms are adjectives. Use them after <b>feel</b> or be: I feel sick. I feel dizzy. In British English, I feel sick often means that you think food will come up from your stomach. In American English, sick usually means ill.",
    "When someone is ill, you can give advice with should: You should go to bed. You should see a doctor.",
    "The sounds in / / are American English.",
  ].join("\n\n"),

  entries: [
    { headword: "head", ipa: "/hɛd/", gloss: "the top part of your body, with your eyes, nose, mouth and brain", inUse: "He put a hat on his <b>head</b>." },
    { headword: "neck", ipa: "/nɛk/", gloss: "the part of your body between your head and your shoulders", inUse: "She wore a scarf around her <b>neck</b>." },
    { headword: "shoulder", ipa: "/ˈʃoʊldɚ/", gloss: "the top of your arm, where it meets your body. You can carry a bag on it.", inUse: "I carry my bag on my left <b>shoulder</b>." },
    { headword: "back", ipa: "/bæk/", gloss: "the part of your body behind you, from your neck down to your legs", inUse: "I sleep on my <b>back</b>." },
    { headword: "arm", ipa: "/ɑrm/", gloss: "the long part of your body from your shoulder to your hand", inUse: "He broke his <b>arm</b> playing football." },
    { headword: "elbow", ipa: "/ˈɛlboʊ/", gloss: "the part of your arm that bends, for example when you lift a cup to drink", inUse: "Don't put your <b>elbows</b> on the table." },
    { headword: "wrist", ipa: "/rɪst/", gloss: "the thin part at the end of your arm, just before your hand. You wear a watch on it.", inUse: "She wears a watch on her left <b>wrist</b>." },
    { headword: "hand", ipa: "/hænd/", gloss: "the part at the end of your arm, with four fingers and a thumb", inUse: "Wash your <b>hands</b> before dinner." },
    { headword: "finger", ipa: "/ˈfɪŋɡɚ/", gloss: "one of the four long, thin parts of your hand, next to your thumb", inUse: "She has a ring on her <b>finger</b>." },
    { headword: "thumb", ipa: "/θʌm/", gloss: "the short, strong finger that can touch each of the other four", inUse: "Hold the pen between your finger and your <b>thumb</b>." },
    { headword: "stomach", ipa: "/ˈstʌmək/", gloss: "the place inside your body where food goes after you eat it. People also use it for the front of the body below the chest.", inUse: "Food goes down your throat and into your <b>stomach</b>." },
    { headword: "leg", ipa: "/lɛɡ/", gloss: "one of the two long parts of your body that you stand and walk on", inUse: "My <b>legs</b> are tired after the long walk." },
    { headword: "knee", ipa: "/ni/", gloss: "the part of your leg that bends when you sit down", inUse: "I fell and cut my <b>knee</b>." },
    { headword: "ankle", ipa: "/ˈæŋkəl/", gloss: "the thin part of your leg just above your foot. It bends when you walk.", inUse: "She can't run because her <b>ankle</b> hurts." },
    { headword: "foot", ipa: "/fʊt/", gloss: "the part at the end of your leg that you stand on. The plural is feet.", inUse: "My left <b>foot</b> is bigger than my right one." },
    { headword: "toe", ipa: "/toʊ/", gloss: "a small part of your foot. You have five on each foot, like short fingers.", inUse: "The water was very cold. I couldn't feel my <b>toes</b>." },
    { headword: "throat", ipa: "/θroʊt/", gloss: "the inside of your neck, where food and air go down", inUse: "I drink tea with honey when my <b>throat</b> hurts." },

    { headword: "hurt", ipa: "/hɝt/", gloss: "if a part of your body hurts, you feel pain there. The past form is also hurt.", inUse: "My back <b>hurts</b> when I sit for a long time." },
    { headword: "headache", ipa: "/ˈhɛdeɪk/", gloss: "a pain in your head", inUse: "I've got a <b>headache</b>, so I'm going to bed early." },
    { headword: "stomach ache", gloss: "a pain in your stomach. American English often writes it as one word: stomachache.", inUse: "He ate too much cake and got a <b>stomach ache</b>." },
    { headword: "sore throat", gloss: "a pain in your throat, often when you have a cold. It hurts when you eat or drink.", inUse: "I can't sing today. I've got a <b>sore throat</b>." },
    { headword: "cold", ipa: "/koʊld/", gloss: "a common illness that is not serious. Your nose is full and you often have a sore throat.", inUse: "Everyone in my office has got a <b>cold</b>." },
    { headword: "cough", ipa: "/kɔf/", gloss: "the loud sound when air comes out of your throat suddenly. It is a verb, too: to cough.", inUse: "She's got a bad <b>cough</b>, so she isn't at school today." },
    { headword: "temperature", ipa: "/ˈtɛmprətʃɚ/", gloss: "how hot or cold something is. I've got a temperature means my body is hotter than usual, because I'm ill.", inUse: "The doctor said my son has got a <b>temperature</b>." },
    { headword: "rash", ipa: "/ræʃ/", gloss: "a red area on your skin. It can come from an illness, a plant or some food.", inUse: "I've got a <b>rash</b> on my arm from the sun." },
    { headword: "sick", ipa: "/sɪk/", gloss: "ill. In British English, I feel sick also means you think food will come up from your stomach.", inUse: "I felt <b>sick</b> on the boat." },
    { headword: "dizzy", ipa: "/ˈdɪzi/", gloss: "feeling that you may fall, because your head feels light and the world seems to move", inUse: "I stood up too fast and felt <b>dizzy</b>." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence tells someone that you are ill?",
      options: ["I'm cold.", "I've got a cold.", "I have cold."],
      answer: 1,
      feedback:
        "A cold is an illness, and it needs a: I've got a cold (in American English, I have a cold). I'm cold says that you want to be warmer, not that you are ill. I have cold is not correct.",
    },
    {
      kind: "gap",
      stem: "There is a pain in my head. I've got a ___.",
      answers: ["headache", "migraine"],
      feedback:
        "A pain in your head is a headache: I've got a headache. A migraine is a very bad headache, so it is also correct here.",
    },
    {
      kind: "choice",
      stem: "Which of these is a part of your leg?",
      options: ["ankle", "wrist", "elbow", "shoulder"],
      answer: 0,
      feedback:
        "Your ankle is the thin part of your leg just above your foot. Your wrist, elbow and shoulder are parts of your arm.",
    },
    {
      kind: "gap",
      stem: "Your hand has four fingers and one ___.",
      answers: ["thumb"],
      feedback:
        "The short, strong finger on your hand is your thumb. It can touch each of the other four fingers.",
    },
    {
      kind: "mistake",
      tokens: ["My", "foots", "hurt", "after", "the", "long", "walk."],
      wrongIndex: 1,
      correction: "feet",
      feedback:
        "The plural of foot is feet, not foots. Feet is plural, so the verb has no -s: my feet hurt. With one foot, say my foot hurts.",
    },
  ],

  levelRationale:
    "The English Vocabulary Profile places the main body words (head, back, arm, hand, leg, foot) at A1 and words like neck, shoulder, knee, stomach, throat, headache, cold, cough, temperature, sick and hurt at A2, the level where a learner can tell a doctor simply what is wrong. Elbow, wrist, thumb, ankle, toe, rash and dizzy may sit a little higher, but they are common in a doctor's office and easy to show. Should for advice uses the A2 topic on should and must.",

  sourceNotes:
    "english_grammar.txt, # Vocabulary, lists the body words throat, back, stomach, thumb, toe, ankle, knee, wrist, elbow, shoulder and neck, and symptom phrases. The word list helped choose the words, but every gloss is new, and nothing from the notes' definitions or IPA is used. The notes have errors in the phrases: 'I feel stick' and 'a score throat' should be I feel sick and a sore throat, and 'suntroke' should be sunstroke. The notes' I've sprained my ankle uses the present perfect, which is B1, so it is not used. Feet, my + body part, hurt, I've got a cold and the British and American meanings of sick checked against Swan, Practical English Usage. IPA is from CMUdict (BSD-style licence, see LICENSES.md), converted ARPAbet→IPA and checked by hand. Stomach ache and sore throat have two words, so they have no IPA.",
};
