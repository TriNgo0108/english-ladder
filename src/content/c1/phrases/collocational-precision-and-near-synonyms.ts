import type { SetTopic } from "../../schema";

export const collocationalPrecisionAndNearSynonyms: SetTopic = {
  slug: "collocational-precision-and-near-synonyms",
  family: "collocations",
  title: "Collocational precision: heavy smoker, high risk, bitterly cold",
  summary: "Heavy rain, but high risk and strong evidence. Choose between words that mean almost the same, like job, work and career, by the words they go with.",
  level: "c1",
  category: "phrases",
  shape: "set",
  order: 14,

  explanation: [
    "Remember: a collocation is a group of words that we often use together, like make a mistake or heavy rain. At B1 and B2, you learned which verb goes with a noun: make a mistake, do your homework, meet a deadline. At C1, the hard part is choosing between words that mean almost the same. Words like these are called <b>near-synonyms</b>. Strong, heavy and high can all mean a lot, but we say strong coffee, heavy rain and high risk. As at B1, there is often no rule, so learn each noun with the words it goes with.",
    "<b>Strong, heavy or high?</b> <b>Strong</b> goes with coffee, tea and wind (B1), and also with evidence, opposition and a smell. <b>Heavy</b> goes with rain, snow and traffic (B1), and with people who do something a lot: a heavy smoker, a heavy drinker. It also goes with losses: heavy losses. <b>High</b> goes with numbers and levels: high risk, a high price, high standards, high unemployment, a high temperature. Some nouns take two: a strong wind and high winds are both correct.",
    "<b>Bitterly, deeply or highly?</b> These adverbs make an adjective stronger, but each one goes with its own adjectives. <b>Bitterly</b> goes with cold and with some negative feelings: bitterly cold, bitterly disappointed. <b>Deeply</b> goes with feelings: deeply concerned, deeply moved, deeply disappointed. <b>Highly</b> goes with likely, unlikely and words of praise: highly unlikely, highly successful, highly recommended. With disappointed, bitterly and deeply are both common. With recommend, highly and strongly are both common: I highly recommend it. I strongly recommend it.",
    "<b>Job, work or career?</b> A <b>job</b> is one paid position, and it is countable: She's got a new job. He has two jobs. <b>Work</b> is the activity, or the place where you do it, and it is usually uncountable here: I'm looking for work. I go to work by bus. He's out of work. So we say a job, not a work. A <b>career</b> is all the jobs you do over many years, often in one area: a career in teaching.",
    "<b>Rise, raise or increase?</b> As at B2, <b>raise</b> always has an object, and <b>rise</b> never does: The company raised its prices. Prices rose. Rise, rose, risen; raise, raised, raised. <b>Increase</b> can do both: They increased prices. Prices increased. A rise or an increase is also a noun, with in before the thing that changes, as in order 7: a sharp increase in sales, a slight rise in prices.",
    "<b>Affect, effect or impact?</b> <b>Affect</b> is usually a verb: The strike affected thousands of passengers. <b>Effect</b> is usually a noun, and it takes have and on: The strike had a big effect on passengers. <b>Impact</b> is a noun for a strong effect: have an impact on. It is also a verb, impact or impact on, and that use is now common, but some careful writers prefer affect. Effect is also a formal verb, meaning bring about, as in effect change, so don't use it to mean affect.",
    "When two near-synonyms both collocate with a noun, both are correct. As at B1, make a decision is correct everywhere, and British English also uses take a decision.",
  ].join("\n\n"),

  entries: [
    { headword: "strong evidence", gloss: "facts that make something very likely to be true", inUse: "There is <b>strong evidence</b> that the drug works." },
    { headword: "strong opposition", gloss: "a lot of people disagreeing firmly with a plan or an idea", inUse: "The new airport faces <b>strong opposition</b> from local people." },
    { headword: "a heavy smoker", gloss: "someone who smokes a lot. We also say a heavy drinker.", inUse: "My grandfather was <b>a heavy smoker</b> until he was sixty." },
    { headword: "heavy losses", gloss: "a lot of money lost by a business, or many people killed in a war", inUse: "The airline made <b>heavy losses</b> during the pandemic." },
    { headword: "high risk", gloss: "a big chance that something bad will happen. We also say a high risk of something.", inUse: "Smoking puts you at <b>high risk</b> of heart disease." },
    { headword: "high standards", gloss: "a high level of quality that you expect", inUse: "Our head chef has very <b>high standards</b>." },
    { headword: "bitterly cold", gloss: "very cold, in an unpleasant way, usually about the weather or the wind", inUse: "It was <b>bitterly cold</b> at the bus stop this morning." },
    { headword: "bitterly disappointed", gloss: "very disappointed, often with some anger. Deeply disappointed is also common.", inUse: "The fans were <b>bitterly disappointed</b> by the result." },
    { headword: "deeply concerned", gloss: "very worried. It is common in formal statements.", inUse: "We are <b>deeply concerned</b> about the safety of the bridge." },
    { headword: "highly unlikely", gloss: "almost certainly not going to happen", inUse: "It's <b>highly unlikely</b> that the shop will open on a Sunday." },
    { headword: "highly recommended", gloss: "praised by many people, so that others should try it. With the verb, strongly recommend is also common.", inUse: "The new Thai restaurant comes <b>highly recommended</b>." },
    { headword: "a job", gloss: "one particular position that you are paid for. It is countable: a job, two jobs.", inUse: "She's just got <b>a job</b> at the hospital." },
    { headword: "work", gloss: "the activity of working, or the place where you work. It is usually uncountable here: look for work, go to work.", inUse: "He's been out of <b>work</b> since the factory closed." },
    { headword: "a career", gloss: "all the jobs you do over many years of your working life, often in one area", inUse: "She wants <b>a career</b> in medicine." },
    { headword: "raise", gloss: "make something go up. It always has an object.", inUse: "The bank has <b>raised</b> its interest rates." },
    { headword: "rise", gloss: "go up. It never has an object. The forms are rise, rose, risen.", inUse: "The river <b>rose</b> by two metres overnight." },
    { headword: "increase", gloss: "make something go up, or go up. It can have an object or not.", inUse: "Sales <b>increased</b> by ten per cent last month." },
    { headword: "a sharp increase", gloss: "a sudden, big rise. A slight increase is a small one.", inUse: "There has been <b>a sharp increase</b> in the number of cyclists." },
    { headword: "affect", gloss: "a verb: change something or someone, often in a bad way", inUse: "The cold weather has <b>affected</b> the harvest." },
    { headword: "effect", gloss: "a noun: a result or a change that something causes. We say have an effect on.", inUse: "Music can have a strong <b>effect</b> on your mood." },
    { headword: "impact", gloss: "a noun for a strong effect: have an impact on. It is also used as a verb, but affect is safer in careful writing.", inUse: "The new road has had a huge <b>impact</b> on the village." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "My uncle smoked forty cigarettes a day for thirty years. He was a very ___ smoker.",
      options: ["strong", "high", "heavy", "thick"],
      answer: 2,
      feedback:
        "We say a heavy smoker: someone who smokes a lot. Heavy goes with people who do something a lot, as in a heavy drinker. Strong, high and thick don't go with smoker.",
    },
    {
      kind: "choice",
      stem: "The train hasn't even left London yet, so it's ___ unlikely to arrive in Leeds on time.",
      options: ["highly", "bitterly", "heavily", "strongly"],
      answer: 0,
      feedback:
        "Highly goes with likely and unlikely: highly unlikely means almost certainly not. Bitterly goes with cold and with disappointed, and heavily and strongly don't go with unlikely.",
    },
    {
      kind: "choice",
      stem: "She worked in four different schools, but she spent her whole ___ in teaching.",
      options: ["job", "work", "post", "career"],
      answer: 3,
      feedback:
        "A career is all the jobs you do over many years, often in one area, so it fits her whole … in teaching. She had four jobs, one in each school, so her whole job doesn't fit, and work and post don't go with her whole … in.",
    },
    {
      kind: "gap",
      stem: "Engineers say there is a ___ risk that the old bridge will collapse. (heavy, strong or high)",
      answers: ["high"],
      feedback:
        "High goes with numbers and levels, including risk: a high risk that the bridge will collapse. Heavy goes with rain and traffic, and strong with coffee, wind and evidence.",
    },
    {
      kind: "gap",
      stem: "House prices have ___ by eight per cent since January. (rise, raise or increase)",
      answers: ["risen", "increased"],
      feedback:
        "Here prices go up on their own, with no object, so we use rise or increase: house prices have risen, or have increased. Raise always needs an object: The bank has raised its rates.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order.",
      words: ["in", "There", "profits.", "a", "increase", "was", "sharp"],
      answer: "There was a sharp increase in profits.",
      feedback:
        "A sharp increase is a sudden, big rise, and the noun increase takes in before the thing that changes: There was a sharp increase in profits.",
    },
    {
      kind: "mistake",
      tokens: ["I've", "applied", "for", "three", "works", "this", "month,", "but", "nobody", "has", "replied."],
      wrongIndex: 4,
      correction: "jobs",
      feedback:
        "A job is one paid position, and it is countable: I've applied for three jobs. Work is the activity, and it is usually uncountable, so we don't say three works here.",
    },
    {
      kind: "mistake",
      tokens: ["The", "rail", "strike", "will", "effect", "thousands", "of", "passengers", "this", "weekend."],
      wrongIndex: 4,
      correction: "affect",
      feedback:
        "Affect is the verb: The rail strike will affect thousands of passengers. Effect is usually a noun, as in have an effect on. As a formal verb, effect means bring about, as in effect change, and that doesn't fit here.",
    },
  ],

  levelRationale:
    "English Vocabulary Profile: strong evidence, strong opposition, heavy losses, high standards, bitterly disappointed, deeply concerned, highly unlikely and highly recommended are usually given as B2 or C1, and the distinctions job / work / career, rise / raise and affect / effect as B1 or B2 points that C1 learners still get wrong in writing. These levels are my best reading of the profile, not a checked list. This is the collocations family's C1 topic after B1 collocations and B2 workplace collocations. It keeps B1's guide that there is often no rule, repeats B1's note that make a decision is correct everywhere and British English also uses take a decision, and repeats B2's rule that raise has an object and rise doesn't. It reuses B1's definition of collocation, and defines near-synonyms here. Every cue names the context, so only one near-synonym fits: the smoker who smoked forty a day, the train that hasn't left, four schools across a whole working life, and a choice of three named words for each gap.",

  sourceNotes:
    "english_grammar.txt, # Collocations gives serious disadvantage, main advantage, considerable importance and similar adjective + noun pairs, and # Statements gives There was a sharp increase in profits, Sales are forecast to increase / rise / grow and grow steadily. The sharp increase sentence is used in the wordbank, and rise and increase are taught as near-synonyms. Rise / raise and job / work / career are checked against Swan, Practical English Usage (raise and rise; work, job). Affect / effect is from Swan (affect and effect), and impact as a verb from the Oxford Advanced Learner's Dictionary, which records it as common but disliked by some. Review Focus 5: the Oxford Collocations Dictionary could not be consulted (ozdic.com returned 404, and the Oxford, Cambridge and Collins sites returned 403), so every distractor is one I am certain is not a recorded collocation, and every real alternative is accepted or left out of the options. Not used as distractors because they are real: big smoker (informal), a big risk, deeply unlikely (found in British journalism), highly disappointed (common in American English), strongly recommend, a heavy price, high winds, a heavy or thick accent, increased (beside risen), out of a job. The distractors used are strong, high and thick with smoker; bitterly, heavily and strongly with unlikely; job, work and post in her whole … in teaching; heavy and strong with risk; and raised for prices that go up on their own. Bitterly disappointed and deeply disappointed are taught as both correct, and so are highly and strongly recommend. Every gloss is new.",
};
