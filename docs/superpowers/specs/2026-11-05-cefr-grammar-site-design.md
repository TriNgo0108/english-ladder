# CEFR English Grammar Site — Design

**Date:** 2026-11-05
**Status:** Awaiting approval
**Source material:** `english_grammar.txt` (2,807 lines of personal study notes)

---

## 1. Intent and why

A free, public English learning website organised by CEFR level, A1 through C1. A learner arrives, says what level they are, and gets a self-contained body of material at that level: grammar plus the surrounding language skills, each topic explained in plain English with worked examples and a short practice quiz.

The project starts from `english_grammar.txt`, a personal set of study notes. Those notes are a **reference, not a boundary** — they tell us what deserves attention and supply examples where they're strong, but the site is a properly authored curriculum, not a reformatting of the notes.

**Why now:** the notes contain real teaching value that is currently unusable by anyone but their author — unordered, unlevelled, uneven in depth, and in places just a bare word list. The value is locked up in a format only the author can navigate.

**What makes it worth building:** two things. First, genuine CEFR organisation — most free grammar sites are an alphabetical topic index with no notion of what a learner is ready for. Second, the notes carry an unusually strong seam of **workplace English** (meetings, feedback, presentations, complaint handling, cover letters) that free grammar sites almost never cover alongside grammar. That is the site's distinguishing content.

---

## 2. Goals

- Every level A1–C1 **stands on its own**. A learner who only ever reads A2 finds no holes and no forward references to things they haven't met.
- Every topic has: a plain-English explanation pitched at its own level, the form where one exists, several examples each with a line explaining *why* it works, and a 5-question quiz.
- Explanations at a level use the language of that level. An A1 page is written in A1-ish English and introduces no grammatical jargon it hasn't first taught.
- All ~115 topic pages are **real, indexable HTML** so learners can find the site through search.
- Accessible by default: WCAG AA contrast, keyboard navigable, works on a phone.

## 3. Non-goals

- **No accounts, no login, no backend.** Static site only.
- **No learner-progress persistence.** Quizzes give instant feedback; no score, streak, or completion state is saved between visits. This rule is about *learner progress specifically* — a single theme-preference key is permitted (see §9), because a dark-mode choice that resets on every page navigation is a defect, not a feature.
- **No C2 level.** The ladder stops at C1.
- **No translations.** English-only explanations, deliberately.
- **No CMS.** Content lives in the repo as typed data.
- **No audio, video, or speech recognition.** Considered and deliberately deferred to a separate project — see §13 for the reasoning, so this isn't reopened by accident.
- **No spaced repetition, streaks, XP, or gamification.**

## 4. Anti-goals — what would make this a failure even if it worked

- **A1 that a beginner can't actually read.** If the A1 explanations are written at B1 and lean on words like "auxiliary" or "participle", the level system is decoration and the site has failed its most vulnerable user.
- **Levels assigned for the look of it.** If the A1/B2 badges don't correspond to real CEFR progression, the site's one organising idea is a lie.
- **A dump of the notes with headings.** If topic pages read like bullet fragments — "influence on the present", "want to focus on action or result" — nothing has been built.
- **Quizzes that test reading comprehension of the page above.** Questions must probe the grammar point, including the mistake a learner at that level actually makes.
- **Broken or ambiguous quiz items.** A gap-fill with two defensible answers, or a multiple-choice with no correct option, destroys trust faster than a missing topic.
- **A children's app.** The content includes cover letters and giving feedback at work. A toy-like wrapper would misrepresent the audience.

## 5. Constraints

- Source notes are uneven: some entries are near-complete mini-lessons (adjective order, comparatives, the three conditionals, relative clauses, punctuation), many are a few bullet fragments, and `# Vocabulary` is a ~470-line undifferentiated word list. `# Review` is a stub.
- The notes are **silent on A1/A2 fundamentals**. Those levels are almost entirely new authoring.
- The notes skew B1–B2 and lean workplace. Expect the richest source material at those levels.
- Some note content is miscategorised in the source (manner/place/time adverbs sit under `# Stative verbs`; `# Question` is mostly workplace phrases, not question formation). Do not trust the source's own hierarchy.
- The notes contain occasional errors and typos ("suntroke", "I feel stick", "adjectves", "Constrasting", `in time → one time`). The `# Pronouncing` section's rule is outright wrong — it gives "a vowel sound, or the letter 'U'" as taking *an*, which fails for *a university*. **Never copy a note's claim without checking it against the authorities named in §6.** The notes are a prompt, not an authority.
- One Vietnamese gloss appears in the vocabulary list. Drop it — the site is English-only.
- **The vocabulary block (lines 357–825) appears to be verbatim third-party dictionary content.** The definition wording and dot-syllabified US IPA (`/ˈsʌn.skriːn/`, `/θɚˈmɑː.mə.t̬ɚ/`) match Cambridge Dictionary entries. These are personal study notes, which is fair use; a public website is republication, which is not. See §12 — this blocks the Vocabulary category specifically, and no vocabulary topic ships until it's resolved.

---

## 6. Decisions already made

These were settled in conversation and are not open for the builder to revisit.

| Decision | Choice |
|---|---|
| Primary navigation | **Level-first.** Landing page asks the learner's level; everything after is scoped to it. |
| Levels | A1, A2, B1, B2, C1 |
| Scope | Grammar **plus** other language skills — vocabulary, collocations, idioms, phrasal verbs, writing, speaking, punctuation |
| Topic count | ~90–120, each level self-sufficient |
| Explanation language | **English only** |
| Quiz question types | **All four**: multiple choice, typed gap-fill, word-bank sentence building, spot-the-mistake |
| Questions per topic | ~5 |
| Progress tracking | **None.** Session-only feedback, no accounts, no storage |
| Framework | **Next.js, App Router, `output: 'export'`** — fully static, pre-rendered |
| Language | TypeScript |
| Content format | **Typed TS/JSON data files**, validated at build time |
| Visual direction | **"Editorial Reference"** (see §9) |
| Hosting | **GitHub Pages, project page** (`<user>.github.io/english-ladder`) |
| First release | **All five levels.** Not shipped level-by-level |
| Name | **English Ladder** |
| Content authoring | **All authored by me**, level by level, A1 first (§12.1) |
| Vocabulary sourcing | **Original glosses + openly-licensed IPA** (§12.2) |

### Decisions left to me, recorded as mine

Each of these is a call a sensible builder could make; they are recorded so the author can check them while reading.

- **Tailwind CSS** for styling (follows from the stack; the design database rates it 10/10 for both candidate styles).
- **Zod** for build-time content validation, so a malformed topic fails the build rather than shipping.
- Category taxonomy and the specific level assignment of each topic (§7, §8).
- **GitHub Pages config:** `basePath` and `assetPrefix` set from the repo name via one exported constant, plus `.nojekyll` (Jekyll would otherwise swallow Next's `_next/` directory), `images: { unoptimized: true }`, and `trailingSlash: true`. Deployed by a GitHub Actions workflow.
- **Reference authorities.** "Is this A2 or B1?" and "is this claim true?" need a resolution procedure, so: levels are checked against the **English Grammar Profile** (English Profile / Cambridge), and grammar claims against **Swan, *Practical English Usage***. Where the notes disagree with these, the authorities win and the note is treated as the error. Every topic records which authority settled its level.
- **Topic ordering is load-bearing.** §2 promises a level introduces no jargon it hasn't first taught, which only holds if there is an order. So `Topic` carries an `order` field, category indexes present a numbered path rather than an unordered list, and topic pages get prev/next. Explanations should still avoid gratuitous forward references, but may rely on earlier topics *at the same level*.
- **Intonation topics are kept, taught visually.** Question intonation (B1) and stress for emphasis (C1) stay in the mapping despite the no-audio rule, rendered with pitch arrows and stress marks on contrast pairs. Their quizzes test the *rule* ("which word carries the stress if you're correcting someone?"), never a sound. If the visual treatment proves unteachable during authoring, cut them and say so.
- **Cross-level linking.** Because SEO means most arrivals land on a deep topic page, every topic shows "this topic at other levels" where siblings exist (*articles* appears at A1, A2 and B2). Plus a client-side search over titles and topic text — cheap, since all content is in the bundle already.
- **No analytics.** Consistent with the no-backend, no-storage stance.
- **No placement test.** The level chooser gets a concrete descriptive blurb per level ("A2: you can talk about your past and make simple plans"), not a quiz.
- Validator floor stays at ≥4 questions while the authoring target is ~5, so a topic with a genuinely short quiz is not blocked.

---

## 7. Content architecture

### Hierarchy

```
Level (A1 … C1)
  └── Category
        └── Topic
              ├── explanation (prose, pitched at level)
              ├── form (optional, e.g. "have / has + past participle")
              ├── examples[]  — sentence + why-line
              ├── pitfall (optional "watch out" box)
              └── quiz — ~5 questions, mixed types
```

### Categories

The same six categories exist across levels, but **not every category is populated at every level** — this is intentional, not an omission.

| Category | What it holds |
|---|---|
| **Grammar** | Tenses, articles, conditionals, modals, clauses, word order |
| **Vocabulary** | Topical word sets with definitions and IPA |
| **Phrases & Expressions** | Phrasal verbs, collocations, idioms, easily-confused words |
| **Writing** | Letters, emails, register, structure |
| **Speaking & Communication** | Politeness, advice, agreement, meetings, presentations |
| **Mechanics** | Punctuation, numbers, abbreviations, intonation |

### Routing

```
/                          level chooser
/a1                        level overview — categories + topic counts
/a1/grammar                category index
/a1/grammar/verb-to-be     topic page
```

Stable, human-readable slugs. Every topic page is statically generated with its own `<title>`, meta description, and JSON-LD.

### The topic data shape

```ts
type Level = 'a1' | 'a2' | 'b1' | 'b2' | 'c1';

type Example = {
  sentence: string;      // may contain <b> around the target structure
  why: string;           // one line: why this form, here
};

type Question =
  | { kind: 'choice';   stem: string; options: string[]; answer: number; feedback: string }
  | { kind: 'gap';      stem: string; answers: string[]; feedback: string }  // answers[] = all accepted forms
  | { kind: 'wordbank'; prompt: string; words: string[]; answer: string; feedback: string }
  | { kind: 'mistake';  tokens: string[]; wrongIndex: number; correction: string; feedback: string };

type TopicBase = {
  slug: string;
  title: string;
  level: Level;
  category: Category;
  order: number;           // position within its level; ordering is load-bearing
  explanation: string;
  quiz: Question[];
  levelRationale: string;  // which authority settled this level, and why
  sourceNotes?: string;    // provenance: which part of english_grammar.txt fed this
};

// Grammar and Mechanics
type RuleTopic = TopicBase & {
  shape: 'rule';
  form?: string;
  examples: Example[];
  pitfall?: { wrong: string; right: string; why: string };
};

// Vocabulary, Phrases & Expressions
type SetTopic = TopicBase & {
  shape: 'set';
  entries: { headword: string; ipa?: string; gloss: string; inUse: string }[];
};

// Writing, Speaking & Communication
type PhraseTopic = TopicBase & {
  shape: 'phrases';
  situations: { situation: string; phrases: string[]; register: 'formal' | 'neutral' | 'informal' }[];
};

type Topic = RuleTopic | SetTopic | PhraseTopic;
```

**Three shapes, not one.** Roughly a third of the mapping is word sets and phrase banks, and a grammar-shaped record forces them to read wrong: a vocabulary entry has a headword, IPA and a gloss, not a sentence with a why-line. Each shape gets its own component and its own validator branch.

The quiz rule bends accordingly. For `rule` topics the anti-goal holds strictly — questions probe the structure, and distractors encode the real error. For `set` and `phrase` topics, recall *is* the skill being learned, so questions test production and appropriateness ("you need to interrupt your manager politely — which works?", "which of these collocates with *knowledge*?") rather than pretending to test a rule that isn't there.

Build-time validation must reject: a `choice` whose `answer` is out of range · a `gap` with an empty `answers` array · a `wordbank` whose `words` can't be rearranged into `answer` · a `mistake` whose `wrongIndex` is out of range · fewer than 4 questions on any topic · a `rule` topic with fewer than 3 examples · a `set` topic with fewer than 6 entries · a `phrase` topic with fewer than 3 situations · any duplicate slug · any duplicate or gapped `order` within a level · any topic missing `levelRationale`.

---

## 8. The CEFR mapping

This is my classification. Topics marked **(new)** have no basis in the notes and are authored from scratch; the rest cite their source section.

### A1 — Beginner (~20 topics)

**Grammar:** nouns, singular & plural *(Nouns)* · personal pronouns **(new)** · verb *to be* **(new)** · *have got* *(Have got)* · articles a/an *(Article)* · *this/that/these/those* *(This, these…)* · possessive adjectives and possessive 's **(new)** · present simple *(Tense)* · present continuous *(Tense)* · *there is / there are* *(There is / There are)* · *can* for ability *(Modal verb)* · imperatives *(The imperative)* · adjectives before the noun *(Adjectives)* · prepositions of place **(new)** · prepositions of time at/on/in *(Time and place)* · question words *(Making wh- questions)* · yes/no questions and short answers **(new)** · *was/were* **(new)** · object & possessive pronouns *(Possessive pronouns)*

**Vocabulary:** numbers *(Numbers)* · telling the time *(Telling the time)* · days, months, family, food, colours **(new)**

**Speaking:** greetings and introducing yourself *(Question)* · *Would you like…?* *(Would you like to…)* · ordering food *(Ordering food)*

**Mechanics:** capital letters and full stops **(new)**

### A2 — Elementary (~24 topics)

**Grammar:** past simple, regular & irregular **(new)** · past continuous *(Tense)* · comparatives & superlatives *(Comparatives and superlatives — detailed in notes)* · *going to* *(Will and going to)* · *will* *(Will and going to)* · present continuous for future *(Present continuous for Future)* · present simple for future *(Present Simple for Future)* · adverbs of manner *(Manner adverb)* · adverbs of frequency *(Frequency adverbs)* · quantifiers some/any/much/many *(Quantities)* · countable & uncountable nouns *(Countable nouns)* · *used to* and *would* *(Used to and would)* · *should* and *must* *(Should and Must)* · *have to* *(Modal verb obligation 1)* · infinitive of purpose *(Infinitives)* · *too* and *enough* *(Infinitives with too and enough)* · articles: *the* and zero article *(Article)* · conjunctions and, but, so, because *(Conjunction)* · first conditional *(First conditional)* · *-ed* and *-ing* adjectives *(-ed adj and -ing adj)* · verb + gerund, verb + infinitive, introductory *(Gerund, Infinitives)*

**Vocabulary:** holidays & outdoor activities *(Vocabulary)* · the body and symptoms *(Vocabulary)* · travel and first-aid items *(Vocabulary)* · house & home *(Vocabulary)*

**Writing:** an informal email *(Writing a email)*

**Speaking:** asking for things politely *(Question)*

### B1 — Intermediate (~26 topics)

**Grammar:** present perfect simple vs past simple *(Present perfect simple and continuous)* · present perfect continuous *(same)* · *since* and *for* *(Since and for)* · *already*, *yet*, *just* *(Already and yet)* · past perfect and narrative tenses *(Narrative tense)* · second conditional *(Second conditional)* · reported speech *(Reported speech)* · *say* vs *tell* *(Say or tell)* · the passive *(The passive)* · defining relative clauses *(Relative clauses)* · gerunds vs infinitives *(Gerund, Infinitive or gerund, Verbs followed by…)* · modals of possibility and deduction *(Modal verbs 2–5)* · future continuous & future perfect *(Future tense)* · *be used to* / *get used to* *(Be used to)* · *wish* and *if only* *(Wish and if only)* · question tags *(Question tags)* · stative verbs *(Stative verbs)* · adjective order *(Order of adjective — detailed in notes)* · determiners *(Determiners)* · *so*, *such*, *such a* *(So, such, such a)* · linking words: contrast, reason, result, addition, example *(Linking words — detailed)* · time clauses: while, as soon as, until *(Time expressions)* · gradable & non-gradable adjectives *(Gradable and non-gradable)* · intensifiers *(Intensifiers, Very really So)* · word building: suffixes *(Word building, Word form, Nouns and adjectives)* · transitive vs intransitive verbs *(Transitive verb vs intransitive)*

**Phrases & Expressions:** phrasal verbs, separable *(Phrasal verb Type 1)* · phrasal verbs, inseparable *(Type 2)* · collocations *(Collocations)* · idioms *(Idiom)* · prepositions of movement *(Preposition of movement)* · *in time* vs *on time* *(Time adverbs)*

**Writing:** formal vs informal register *(Formal and informal phrases)* · letter structure *(How to write a good letter)* · a professional email *(Writing a email)*

**Speaking:** giving advice *(Giving advice 1 & 2)* · likes and dislikes *(Likes and dislikes)* · agreeing and disagreeing *(Agreeing and disagreeing)* · indirect and polite questions *(Indirect and direct questions, Polite vs direct)* · introducing yourself and interrupting at work *(Question)*

**Mechanics:** commas *(The comma)* · colons and semicolons *(The semicolon, Colons)* · abbreviations *(Abbreviations)* · question intonation *(Pronouncing, Intonation for question in the past)*

### B2 — Upper intermediate (~25 topics)

**Grammar:** third conditional *(Third conditional)* · mixed conditionals **(new)** · *wish* for past regrets *(Expressing past regrets with wish)* · non-defining relative clauses *(Relative clauses)* · reduced relative clauses **(new)** · the causative *(The causative)* · reported commands, advice and requests *(Reported speech: Commands…)* · *must have* / *can't have* / *needn't have* *(Can't have and needn't have)* · describing certainty in the past *(Describing certainty in the past)* · advanced passive and reporting verbs *(The passive, Statements)* · participle clauses **(new)** · inversion after negative adverbials **(new)** · cleft sentences **(new)** · articles with abstract and general nouns *(Article — general vs specific)* · advanced linkers: cause, effect, contrast *(Linking expression)* · declarative and rhetorical questions *(Forming question)* · verb + object + infinitive/gerund patterns *(Verbs followed by gerunds and infinitives)* · adjective and verb phrases *(Adjective phrase, Verb phrase)* · future in the past **(new)** · hedging and degrees of certainty **(new)**

**Phrases & Expressions:** advanced phrasal verbs *(Phrasal verb)* · workplace collocations *(Collocations)* · easily-confused pairs: *remind*/*remember* *(Remind or remember)*, *wear*/*dress* *(Wear and dress)*

**Writing:** letters of complaint *(Phrases from letters of complaint)* · a cover letter *(Covering letter)* · follow-up emails *(Follow up email)* · summarising and adding points *(Adding points and summarizing)*

**Speaking:** giving a presentation *(Presentation — detailed)* · giving and receiving feedback *(Giving feedback and suggestion, Responding to praise, Giving praise)* · breaking bad news *(Breaking bad news)* · answering difficult questions *(Answering difficult questions)* · checking for approval *(Checking for approval)*

### C1 — Advanced (~20 topics)

**Grammar:** advanced inversion and fronting **(new)** · the subjunctive and unreal past **(new)** · impersonal and passive constructions **(new)** · nominalisation **(new)** · ellipsis and substitution **(new)** · complex noun phrases **(new)** · concessive subordination **(new)** · advanced modality **(new)** · advanced comparison structures *(Comparisons)* · discourse markers and cohesion *(Linking words, Linking expression — extended)* · register and formality shifts *(Formal and informal phrases, Polite vs direct)*

**Phrases & Expressions:** advanced idioms *(Idiom)* · figurative language **(new)** · collocational precision and near-synonyms *(Collocations, Statements — paraphrase sets)*

**Writing:** discursive and argumentative writing **(new)** · formal reports and executive summaries *(Summarizing)*

**Speaking:** chairing a meeting *(Statements — agenda, action points)* · diplomatic language and negotiating *(Statements, Polite vs direct)* · handling pushback *(Agreeing and disagreeing)* · rhetorical devices *(Rhetorical questions)*

**Mechanics:** punctuation for rhetorical effect *(Punctuation)* · stress and intonation for emphasis *(Pronouncing)*

**Total: ~115 topics.**

---

## 9. Visual design — "Editorial Reference"

Derived from the project's `ui-ux-pro-max` design database (styles: *Swiss Modernism 2.0*; typography: *News Editorial*), then adjusted. Two notes on what was **rejected** and why:

- The database's unprompted recommendation for "education" was **Claymorphism with Baloo 2 + Comic Neue** and a video-background hero — its own stated best-fit being "children's apps". Rejected: the audience writes cover letters.
- An early warm-cream + Georgia-serif + terracotta direction was rejected as a recognised AI-generated-design cliché.

### Tokens

**Colour** — neutrals are slate biased slightly blue, so they read as chosen rather than inherited.

| Role | Light | Dark |
|---|---|---|
| Ground | `#FCFCFD` | `#0E1117` |
| Surface | `#FFFFFF` | `#161923` |
| Border | `#DFE3EC` | `#242836` |
| Text | `#1B1F2A` | `#E6E9F0` |
| Muted text | `#5A6173` | `#8B93A5` |
| Accent | `#1D4ED8` | `#60A5FA` |

Semantic colours for quiz feedback are **separate from the accent**, and themed because no single hex reaches 4.5:1 on both a near-white and a near-black ground: correct `#15803D` light / `#16A34A` dark, incorrect `#DC2626` light / `#F87171` dark.

**The level ramp** is one hue deepening across the scale — `#DBEAFE` → `#BFDBFE` → `#93C5FD` → `#60A5FA` → `#2563EB` — because A1→C1 is a genuine ordered progression. It is not six unrelated brand colours, and the ordering carries real information. Level is never signalled by colour alone; the badge always reads "A1".

**Type** — three roles, each with a reason:

- **Newsreader** (serif) — headings and **example sentences only**. The examples are the specimens a learner studies, so they get the reading face. Chosen on the database's note that Newsreader is designed for long-form reading.
- **IBM Plex Sans** — all interface text, explanations, quiz chrome.
- **IBM Plex Mono** — grammatical forms, so `have / has + past participle` reads as a pattern rather than as prose.

Loaded via `next/font` and self-hosted, not a CDN link.

**Layout** — 12-column grid, 8px base unit, mathematical spacing. Running text capped at 65ch. Body text never below 16px on mobile. Wide content gets its own `overflow-x: auto` container so the page body never scrolls sideways.

### Theming

Light and dark, both designed rather than inverted. Three viewer states must be handled: `:root` carries the full light palette; `@media (prefers-color-scheme: dark)` redefines tokens guarded as `:root:not([data-theme="light"])`; `:root[data-theme="dark"]` redefines them again so an explicit toggle wins both directions. No colour may be defined **only** inside a media or `[data-theme]` block.

**There is a theme toggle, and it persists.** This is the one exception to §3's no-storage rule, and it is deliberate: on a statically exported multi-page site, a toggle without storage resets on every navigation, which is worse than having no toggle. So one `localStorage` key holds the theme, read by a small inline script in `<head>` before first paint so the page never flashes the wrong theme. That key is the only thing the site ever stores — no learner progress, ever.

### Accessibility — non-negotiable

From the database's pre-delivery checklist: 4.5:1 minimum contrast · visible focus rings on every interactive element · 44×44px minimum touch targets · `cursor: pointer` on clickables · SVG icons, never emoji · hover transitions 150–300ms · `prefers-reduced-motion` respected · verified at 375 / 768 / 1024 / 1440px.

---

## 10. Quiz behaviour

- ~5 questions per topic, mixed across the four types. Type is chosen to suit the topic: **word-bank** for anything where sequence is the point (adjective order, question formation, word order); **spot-the-mistake** weighted toward B2/C1; **gap-fill** where production matters; **multiple choice** anywhere.
- Answer immediately, see immediately. Each question carries a `feedback` string that explains *why*, shown on both correct and incorrect answers.
- Distractors must encode the real error a learner at that level makes. The notes are a good source here — `"I have seen him yesterday"` is exactly the trap worth setting.
- **Gap-fill accepts a set of answers**, not one string: contractions and both valid spellings where either is right. Matching is trimmed and case-insensitive. Where more than one answer is grammatical, all go in `answers[]`.
- Keyboard operable throughout; `aria-live` announces feedback.
- Score shown at the end of the quiz, then discarded. Retry re-renders fresh. Nothing persists.

---

## 11. Left to the builder

- Component decomposition and file layout within the Next.js app.
- Test strategy. At minimum: the content validator must have tests proving it rejects each malformed case listed in §7, and the gap-fill matcher must have tests for trimming, case, and multi-answer acceptance.
- Build order. Suggested: scaffold and tokens → content schema and validator → one complete topic end-to-end as a vertical slice → the four quiz components → then content authoring level by level, A1 first.
- Whether to generate an OG image per topic.
- Sitemap and `robots.txt` generation.
- Exact IPA rendering approach for the vocabulary categories.

---

## 12. Authoring, naming, and provenance

### 12.1 Who authors the content

**I author all of it** — every explanation, example, why-line and quiz question across all ~115 topics. This is the bulk of the project's effort and the plan must budget for it accordingly, not treat it as a tail after the app is built.

Delivery runs **level by level, A1 first**, for a specific reason: the hardest thing to get right is the *pitch* of the writing, and A1 is where getting it wrong does the most damage (§4). Authoring A1 first means the author can read a complete level and correct the register before the same style is committed across a hundred more topics.

**Definition of done for a topic.** A topic is not done until all of these hold:

1. Explanation uses only vocabulary and structures at or below its own level, and defines any grammatical term it uses.
2. Every claim checks out against the §6 authorities. Where a source note disagreed, the note is wrong and `sourceNotes` records that.
3. `levelRationale` names what settled the level.
4. Every example's why-line explains the *choice of form*, not the meaning of the sentence.
5. At least one quiz distractor encodes a real learner error at that level.
6. **Ambiguity sweep:** every gap-fill has been re-read adversarially for a second defensible answer. If one exists, it goes in `answers[]` or the question is rewritten. §4 names this as a trust-destroying failure, so it gets its own pass rather than riding along with authoring.
7. Validator passes.

No external teacher review is planned. That raises the stakes on items 1, 2 and 6 — they are the only thing standing between the site and the anti-goals, so the plan should treat them as real work with real time attached, not a checklist formality.

### 12.2 Vocabulary definitions and IPA

The notes' vocabulary block cannot be republished (§5). Resolved: **original glosses, openly-licensed IPA.**

- **Every definition is written from scratch** in my own words, pitched at the learner's level. The notes' entries may be used to decide *which words* a set contains — a word list is not itself protectable — but no definition wording is carried over.
- **IPA comes from an openly-licensed source** — Wiktionary (CC-BY-SA, requires attribution) or a CMUdict-derived dataset (public domain, but needs conversion from ARPAbet to IPA). The builder picks which, and the choice carries an obligation: if Wiktionary, the site needs a visible attribution and license notice. Record the choice and the attribution requirement in the repo.
- **Do not copy IPA from the notes**, even though it's "just" a transcription — it came from the same source as the glosses.
- A `LICENSES.md` at the repo root records every third-party content source and its terms.

### 12.3 Name

**English Ladder.** Repo `english-ladder`; the site serves from `<user>.github.io/english-ladder`, so `basePath` and `assetPrefix` are `/english-ladder`.

### 12.4 Git

Done. Repository initialised at `E:\side_projects\english` with a `.gitignore` covering `.superpowers/`, `node_modules/`, `.next/` and `out/`. A GitHub remote is still needed for Pages deployment.

---

## 13. Deferred: listening and speaking

Audio was raised during design, researched, and deliberately left out of this project. Recorded here so the decision isn't quietly reversed by someone who only reads §3.

**What was found.** The market splits three ways: phoneme-level scorers with IPA feedback (ELSA Speak, Speakometer), AI conversation partners (Loora, TalkDrill), and human-coach review (Speechling). The simplest useful pattern is the Cambridge Pronunciation Tool's — hear a native speaker, record yourself, compare by ear.

**Why pronunciation scoring cannot live in this project.** It is architecturally incompatible with a static, backend-free site:

- **Web Speech API** — absent in Firefox; in Chrome, Edge and Safari the audio is sent to the vendor's cloud by default, so it isn't backend-free and carries a disclosure obligation. Chrome 139+ added on-device `processLocally`, but it can't be relied on. It returns only a transcript, so it cannot tell a learner *which sound* was wrong.
- **Whisper via Transformers.js** — genuinely local, but a 40–120MB model download and roughly 2–5× slower than real time on WASM. A 10-second clip takes 20–50 seconds. Unusable inside a quiz.
- **A paid speech API** — works properly, needs a backend and per-utterance cost. Both are non-goals.

Building something that *appeared* to score pronunciation inside a static page would mean shipping a fake or broken feature, which §4's spirit forbids.

**What would work, if and when this becomes project two:** minimal-pair listening discrimination (no microphone needed at all, just audio files), short listening comprehension with a revealed transcript, and `MediaRecorder`-based record-and-compare shadowing — fully local, instant, no model, no fake score.

**Decision:** English Ladder ships as a grammar and language-skills reference with no audio. A listening and speaking trainer is a separate product with its own architecture, to be brainstormed on its own once this one is real. The B1 and C1 intonation topics therefore keep the visual treatment described in §6.
