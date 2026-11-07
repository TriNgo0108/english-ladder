# English Ladder — B1 Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clear the parked A2 polish, then author the complete B1 level: all 44 topics in spec §8's B1 list, linked to their A1/A2 counterparts. B1 is the first level to populate the Phrases & Expressions category, and the first to have Writing, Speaking and Mechanics all at once.

**Architecture:** This is a content-only plan, with no new components and no schema changes.
- Topics are new typed modules under `src/content/b1/<category>/<slug>.ts`, registered through a new B1 barrel.
- They are validated by the existing schema and registry.
- They are linked across levels through `src/content/families.ts`.
- The plan follows the A2 plan (`docs/superpowers/plans/2026-11-06-english-ladder-a2.md`, Tasks 4–9) step for step.

**Tech Stack:** Next.js 16 (App Router, `output: 'export'`) · React 19 · TypeScript 6 strict · Tailwind 4 · Zod 4 · Vitest 5 + Testing Library + jsdom. These are unchanged.

**Spec:** `docs/superpowers/specs/2026-11-05-cefr-grammar-site-design.md`. The §8 B1 mapping is this plan's backlog. Prior plans are `2026-11-05-english-ladder-platform-and-a1.md` and `2026-11-06-english-ladder-a2.md`. Both are complete and merged to `master`.

## Global Constraints

Every Global Constraint in the A2 plan still applies verbatim:
- no push, remote or deploy until C1 is authored
- the quiz floor and target
- shape bound to category
- gap grading
- the word bank is graded by order and never shuffled
- the one-token rule for mistake items
- choice items have exactly one correct answer, in a varied position
- feedback reads correctly on both outcomes
- the family rules
- the spec §12.1 definition of done

The following are added or restated for B1:

- **Scope.** Author the 44 items in the §8 list, not the "~26" headline. The A2 plan's "Follow-up plans" section records this decision.
- **Variety.** The site teaches British spelling and usage, as A1 and A2 do (*colour*, *at the weekend*). Gaps also accept a standard American alternative where Swan records it as correct: past simple with *just*, *already* and *yet*, and *gotten*. Explanations may mention a US difference in one plain sentence. *(My call.)*
- **B1 pitch.**
  - Explanations use A1–B1 words and structures.
  - Grammar terms that A1 and A2 already defined are reused with their exact earlier wording: noun, verb, subject, object, short form, base form, plural, preposition, past participle, infinitive, gerund, comparative.
  - New terms are defined once, in plain words, where first needed: auxiliary, clause, state verb, transitive, intransitive, relative pronoun, phrasal verb, particle, collocation, suffix, register.
  - An explanation may rely on any earlier B1 topic by `order`, but never on a later one.
- **No IPA at B1.** B1 has no Vocabulary category. Phrases-category entries are multi-word or function words, and IPA is optional in the schema, so B1 omits it. No IPA tooling is needed. *(My call.)*
- **Intonation is shown visually, not with audio** (spec §6).
  - The arrows are ↗ (rising) and ↘ (falling), written after the word that carries the pitch movement.
  - A screen reader reads them as "north east arrow", so every arrow is named in words in the same sentence or why-line ("rising ↗"), never used alone.
  - Quizzes test the rule ("which tag rises when you're really asking?"), never a sound.
  - If the visual treatment doesn't teach (Task 11, Step 2), cut the topic, renumber, and say so in the report. Spec §6 allows this.
- **`order` is continuous across B1, 1–44:**
  - Grammar 1–26
  - Phrases & Expressions 27–32
  - Writing 33–35
  - Speaking 36–40
  - Mechanics 41–44

## Review Focus

1. **A gap where both present perfect and past simple fit.** "I ___ (lose) my keys." admits *have lost* and *lost*, and US usage admits past simple with *just*, *already* and *yet*. Each item must force one form with a finished-time or unfinished-time marker (*yesterday*, *since Monday*, *ever*), or accept both. Owned by Task 3, Step 4. The same applies to past perfect vs past simple in Task 4, where *before* and *after* often make the past perfect optional.
2. **Interchangeable forms marked wrong.** Each of these must be fixed in the item itself, not by marking the learner wrong:
   - modals of possibility: *might*, *may* and *could* are interchangeable in positive possibility. Accept all three, or force one with the negative (*mightn't* vs *can't*). Task 5.
   - relative pronouns: *that* can replace *who* or *which* in defining clauses, and an object pronoun can be left out. A gap can't accept "nothing", so never gap an omissible pronoun. In a word bank, an optional pronoun is either in the chips or makes the order ambiguous. Task 6.
   - reported speech: backshift is optional when the fact is still true ("She said she *likes* / *liked* jazz"). Accept both, or set the fact in a finished past. Task 6.
3. **A family that now spans three levels shows only one neighbour.** The past-simple chain A1 `was-were` → A2 `past-simple-regular-and-irregular` → B1 present perfect vs past simple, and the conditionals, linking-words and emails chains, must list every sibling in CEFR order on every page. Owned by Task 11, cross-level step.
4. **The new A2↔B1 `used-to` link must not reject the existing A2 slug.** A2 `used-to-and-would` has no family today. Without its new `family: "used-to"`, the collision guard would reject it. With it, the guard must not reject it. Owned by Task 2.
5. **An arrow is read aloud as "north east arrow" with nothing else.** Every ↗ and ↘ in B1 content must be named in words in the same string. Owned by Task 11, with a corpus test.

---

## File Structure

- `src/content/b1/index.ts`: the B1 barrel, `b1Topics: Topic[]`
- `src/content/b1/<category>/<slug>.ts`: the 44 topics
- `src/content/b1/b1-part-<n>.test.ts`: per-batch pins, one per content task (parts 1–8), in the style of `src/content/a2/a2-part-5.test.ts`
- `src/content/registry.ts`: loads `b1Topics` after `a2Topics`
- `src/content/families.ts`: new keys and updated comments
- `src/content/a2/grammar/used-to-and-would.ts`: gains `family: "used-to"`
- `src/content/cross-level.test.ts`: extended to A1–A2–B1
- Six A2 files for the parked polish (Task 1)

---

## Task 1: Parked A2 polish

All six items come from the A2 final review, which rated them "can wait".

**Files:**
- Modify:
  - `src/content/a2/vocabulary/travel-and-first-aid-items.ts`
  - `src/content/a2/speaking/asking-for-things-politely.ts` (or wherever "Excuse me, could you tell me the time" lives; grep for it)
  - `src/content/a2/grammar/present-continuous-for-future.ts:20`
  - `src/content/a2/grammar/have-to.ts`
  - the A2 countable-topic file whose distractor uses egg/banana (grep `banana` in `src/content/a2`)
  - `src/content/a2/grammar/should-and-must.ts`
- Test: the matching `src/content/a2/a2-part-<n>.test.ts` pins

- [ ] **Step 1: Update the pins first.** Where an item's tokens, answers or wrong token change, edit its pin in the A2 part test. Then run `npm test -- src/content/a2` and expect FAIL.
- [ ] **Step 2: Make the six fixes:**
  1. **travel-and-first-aid-items mistake item.** *with*→*without* is a defensible second fix. Rewrite it so exactly one token is wrong and no other single-token change gives a correct sentence.
  2. **"Excuse me, could you tell me the time".** It is labelled `formal` but is neutral. Change its register to `neutral`. If that leaves its situation with mixed registers, move the phrase to a neutral situation.
  3. **present-continuous-for-future.ts:20.** Change "use … usually" to "usually use".
  4. **have-to mistake item.** "Does he has to" has a *Does*→*So* second fix. Rewrite it so only *has*→*have* corrects it, e.g. by making it a question with a question mark and context that rules out *So*.
  5. **The countable-topic distractor.** It uses egg/banana. Change it to chair/car.
  6. **should-and-must.** Change "the other person can choose" to "there is a choice".
- [ ] **Step 3: Run `npm test`.** Expected: PASS.
- [ ] **Step 4: Commit.** `fix(content): A2 polish from final review (one-token mistake items, neutral register, wording)`

---

## Task 2: B1 barrel and family keys

**Files:**
- Create: `src/content/b1/index.ts`
- Modify:
  - `src/content/registry.ts`
  - `src/content/families.ts`
  - `src/content/a2/grammar/used-to-and-would.ts`
- Test: `src/content/registry.test.ts`

**Interfaces:**
- Consumes: `FAMILY_KEYS`, and `loadCorpus([...a1Topics, ...a2Topics])` in `registry.ts`.
- Produces:
  - `b1Topics: Topic[]` (initially `[]`). The registry loads `[...a1Topics, ...a2Topics, ...b1Topics]`.
  - `FAMILY_KEYS` gains these keys: `used-to`, `wish`, `passive`, `reported-speech`, `relative-clauses`, `collocations`, `idioms`, `register`, `agreeing-and-disagreeing` and `intonation`.
  - A2 `used-to-and-would` gets `family: "used-to"`.
  - The comment block gains one line per new key, naming its B1 owner and later continuations from §8:
    - wish → B2 wish for past regrets
    - passive → B2 advanced passive
    - reported-speech → B2 reported commands
    - relative-clauses → B2 non-defining
    - collocations → B2 workplace collocations → C1 collocational precision
    - idioms → C1 advanced idioms
    - register → C1 register and formality shifts
    - agreeing-and-disagreeing → C1 handling pushback
    - intonation → C1 stress and intonation for emphasis
  - Existing lines are updated where B1 now fills a "later" slot:
    - `modal-deduction` is no longer reserved.
    - `punctuation` gains its B1 commas entry.

**B1 slugs, order and families. The content tasks use this table verbatim:**

| order | category | slug | family |
|---|---|---|---|
| 1 | grammar | `present-perfect-and-past-simple` | `past-simple` |
| 2 | grammar | `since-and-for` | — |
| 3 | grammar | `already-yet-and-just` | — |
| 4 | grammar | `stative-verbs` | — |
| 5 | grammar | `present-perfect-continuous` | — |
| 6 | grammar | `past-perfect-and-narrative-tenses` | — |
| 7 | grammar | `time-clauses` | — |
| 8 | grammar | `future-continuous-and-future-perfect` | `future-forms` |
| 9 | grammar | `second-conditional` | `conditionals` |
| 10 | grammar | `wish-and-if-only` | `wish` |
| 11 | grammar | `modals-of-possibility-and-deduction` | `modal-deduction` |
| 12 | grammar | `be-used-to-and-get-used-to` | `used-to` |
| 13 | grammar | `gerunds-vs-infinitives` | `gerunds-and-infinitives` |
| 14 | grammar | `transitive-and-intransitive-verbs` | — |
| 15 | grammar | `the-passive` | `passive` |
| 16 | grammar | `reported-speech` | `reported-speech` |
| 17 | grammar | `say-and-tell` | — |
| 18 | grammar | `defining-relative-clauses` | `relative-clauses` |
| 19 | grammar | `question-tags` | `question-forms` |
| 20 | grammar | `determiners` | `determiners` |
| 21 | grammar | `adjective-order` | `adjective-order` |
| 22 | grammar | `gradable-and-non-gradable-adjectives` | — |
| 23 | grammar | `intensifiers` | — |
| 24 | grammar | `so-and-such` | — |
| 25 | grammar | `linking-words` | `linking-words` |
| 26 | grammar | `word-building-suffixes` | — |
| 27 | phrases | `phrasal-verbs-separable` | — |
| 28 | phrases | `phrasal-verbs-inseparable` | — |
| 29 | phrases | `collocations` | `collocations` |
| 30 | phrases | `idioms` | `idioms` |
| 31 | phrases | `prepositions-of-movement` | `prepositions-of-place` |
| 32 | phrases | `in-time-and-on-time` | `prepositions-of-time` |
| 33 | writing | `formal-and-informal-register` | `register` |
| 34 | writing | `letter-structure` | — |
| 35 | writing | `a-professional-email` | `emails` |
| 36 | speaking | `giving-advice` | — |
| 37 | speaking | `likes-and-dislikes` | — |
| 38 | speaking | `agreeing-and-disagreeing` | `agreeing-and-disagreeing` |
| 39 | speaking | `indirect-and-polite-questions` | `polite-requests` |
| 40 | speaking | `introducing-yourself-and-interrupting-at-work` | `introductions` |
| 41 | mechanics | `commas` | `punctuation` |
| 42 | mechanics | `colons-and-semicolons` | — |
| 43 | mechanics | `abbreviations` | — |
| 44 | mechanics | `question-intonation` | `intonation` |

Notes on the table:
- Where a slug equals its family key (`determiners`, `idioms`, `reported-speech` and others), the topic must still set `family` explicitly. The collision guard requires it.
- The two phrasal-verb topics stay unkeyed. One key can hold only one topic per level, so the B2 plan will choose which of them links to B2 advanced phrasal verbs. *(My call.)*
- Stative verbs come before present perfect continuous, because PPC's "not with state verbs" rule relies on them. Transitive/intransitive comes before the passive for the same reason. *(My call; this reorders §8's list.)*

- [ ] **Step 1: Write the failing tests** in `registry.test.ts`:
  - `it('gives A2 used-to-and-would the used-to family')`: `findTopic('a2','grammar','used-to-and-would')?.family` is `'used-to'`.
  - `it('loads B1 topics into the corpus')`: a `createRegistry` fixture where a b1 topic with `family: 'used-to'` and the real-shaped a2 topic are siblings both ways.
  - `it('lists the new B1 family keys')`: `FAMILY_KEYS` contains each of the ten new keys, and has no duplicates.
- [ ] **Step 2: Run** `npm test -- src/content/registry.test.ts`. Expected: FAIL.
- [ ] **Step 3: Implement** the barrel, the registry wiring, the keys with their comments, and the A2 family.
- [ ] **Step 4: Run** `npm test` → PASS, then `npm run build` → succeeds. `/b1/` still renders its empty state, and the A2 `used-to-and-would` page builds.
- [ ] **Step 5: Commit.** `feat(content): B1 barrel and cross-level family keys for B1`

---

## Tasks 3–11: B1 content

Every content task follows the A2 plan's six content steps (A2 plan, "Tasks 5–9"), with these B1 substitutions:

- [ ] **Step 1: Read the references.**
  - Read `src/content/a2/grammar/first-conditional.ts` for register and structure.
  - Read every A1 and A2 sibling via the family table, plus any A2 topic the new one builds on even without a family. For example, A2 `past-simple-regular-and-irregular` and `past-continuous` for narrative tenses, A2 `infinitive-of-purpose` for gerunds vs infinitives, and A2 `will` for future continuous. B1 must not contradict them.
  - Grep `english_grammar.txt` for the §8 source section named in the task. Where the notes are wrong or above B1, follow the English Grammar Profile and Swan, and record it in `sourceNotes`.
- [ ] **Step 2: Author the topics,** each with a `summary` of at most 155 characters that doesn't open with a definition, at the B1 pitch in Global Constraints.
- [ ] **Step 3: Write `src/content/b1/b1-part-<n>.test.ts`.** Use the same pins as A2:
  - slug and order sequence
  - families (including "no family" for unkeyed rows)
  - every gap's full `answers[]`, plus at least one wrong answer rejected per gap
  - every wordbank answer
  - every mistake item's wrong token and correction
- [ ] **Step 4: Run the ambiguity sweep** from the A2 plan on every item, plus the B1 risks the task lists. Record the sweep in the report.
- [ ] **Step 5: Run** `npm test`, `npm run typecheck`, `npm run lint` and `npm run build`. Then inspect `out/b1/<category>/<slug>/index.html` for each new topic: the explanation, the summary meta and the quiz stems should all be present.
- [ ] **Step 6: Commit,** `feat(content): B1 <batch name> (<slugs>)`. A fix after review is a separate `fix(content): …` commit.

### Task 3: B1 Grammar, part 1 — the present perfect group (`order` 1–5), `b1-part-1`

`rule` shape: present perfect vs past simple · *since* and *for* · *already*, *yet*, *just* · stative verbs · present perfect continuous. Sources: *Present perfect simple and continuous*, *Since and for*, *Already and yet*, *Stative verbs*.

- Introduce present perfect form here (`have / has + past participle`), reusing A2's definition of past participle.
- The core contrast is finished time (*yesterday*, *in 2019*, *last week*) vs unfinished time or no stated time (*ever*, *never*, *this week*, *since*). Keep "experience", "result now" and "unfinished time" as the three uses. Don't overstate: say "usually" where Swan allows exceptions.
- At least one distractor must be the classic "I have seen him yesterday" (spec §10).
- *since* + point in time, *for* + length of time. *since* can also be a conjunction (*since I was a child*); teach it if used, otherwise avoid it.
- *already*, *yet*, *just*: say *yet* goes in questions and negatives, usually at the end. Mention the US past-simple use in one sentence and accept it in gaps (Global Constraint).
- Stative verbs: *know*, *like*, *want*, *believe*, *belong*, *need*, *understand*. Also cover the two-meaning verbs *think* and *have* (opinion vs activity) without listing every exception.
- Present perfect continuous: duration up to now and recent activity with visible results. It contrasts with present perfect simple on completion and number (*I've read 3 books* vs *I've been reading*). It is not used with state verbs, which links back to order 4.
- **Extra sweep risk:** Review Focus 1. Also *for* vs *since* gaps where *for* plus a duration-less noun is possible ("for Christmas" is a different meaning).

### Task 4: B1 Grammar, part 2 — narrative and future (`order` 6–10), `b1-part-2`

`rule` shape: past perfect and narrative tenses · time clauses (*while*, *as soon as*, *until*) · future continuous & future perfect · second conditional · *wish* and *if only*. Sources: *Narrative tense*, *Time expressions*, *Future tense*, *Second conditional*, *Wish and if only*.

- Narrative tenses combine A2 past simple and past continuous with the new past perfect (`had + past participle`) for "earlier than the story's past". Past perfect is optional when *before* or *after* already shows the order. Say so, and accept both in such gaps (Review Focus 1).
- Time clauses: present simple, not *will*, after *as soon as*, *until* and *when* for the future. This matches A2 first conditional's rule, so cross-reference it. *while* + continuous for the longer action.
- Future continuous is an action in progress at a future time. Future perfect is done before a future time (*by Friday*). Accept *will be* / *'ll be* and *will have* / *'ll have* contractions.
- Second conditional: past simple in the *if*-clause, *would* in the result clause. It is unreal or unlikely, and contrasts with A2's first conditional. Teach *If I were* as preferred and *If I was* as common and informal; accept both in gaps. The clause-order rule is the same as A2's.
- *wish* / *if only* + past simple for present wishes. *wish* + *would* is for complaints about others' behaviour, never *I wish I would*. Past regrets (*wish* + past perfect) belong to B2: mention at most that it exists. Accept *were* and *was*.
- **Extra sweep risk:** *would* in the *if*-clause as a distractor is correct in polite requests ("If you would wait here…"). Don't use it in a context where it could read as polite.

### Task 5: B1 Grammar, part 3 — modals and verb patterns (`order` 11–15), `b1-part-3`

`rule` shape: modals of possibility and deduction · *be used to* / *get used to* · gerunds vs infinitives · transitive vs intransitive verbs · the passive. Sources: *Modal verbs 2–5*, *Be used to*, *Gerund*, *Infinitive or gerund*, *Verbs followed by…*, *Transitive verb vs intransitive*, *The passive*.

- Deduction: *must* (sure it's true), *can't* (sure it's not true), *might*, *may* or *could* (possible). The negative of *must* for deduction is *can't*, not *mustn't*; that's the classic distractor. Keep to the present here; past deduction (*must have*) is B2.
- *be used to* + noun or *-ing* (it is normal for me) vs *get used to* (becoming normal) vs A2 *used to* + base form (past habit). The page links to the A2 topic through the `used-to` family; repeat the contrast in one line.
- Gerunds vs infinitives extend A2:
  - verbs that change meaning: *stop*, *remember*, *forget*, *try*
  - gerund after prepositions
  - gerund as subject
  
  Accept both forms where both are correct (*start*, *like*, *love*, *begin*).
- Transitive and intransitive: define *transitive* (needs an object) and *intransitive* (has no object). Include verbs that are both (*open*, *break*). Common learner errors are "I arrived the station" and "She discussed about it".
- The passive: `be + past participle`, with *by* only when the doer matters. Cover present simple, past simple, present perfect and *will* passives. Only transitive verbs have a passive, which links back to order 14.
- **Extra sweep risk:** Review Focus 2 (modals). Also passive gaps where active is grammatical, so supply the subject in the stem. Also *try + -ing* / *try + to* where both fit.

### Task 6: B1 Grammar, part 4 — reporting, clauses, questions, noun phrases (`order` 16–21), `b1-part-4`

`rule` shape: reported speech · *say* vs *tell* · defining relative clauses · question tags · determiners · adjective order. Sources: *Reported speech*, *Say or tell*, *Relative clauses*, *Question tags*, *Determiners*, *Order of adjective — detailed*.

- Reported speech covers statements and questions: backshift, and pronoun and time-word changes (*tomorrow* → *the next day*). Reported questions use statement word order, so gap those with a wordbank. Commands are B2, so leave them out.
- *say* vs *tell*: *tell* + person; *say* (+ *to* person). Include the fixed phrases *tell the truth*, *tell a story* and *say sorry*.
- Defining relative clauses:
  - *who* for people, *which* for things, *that* for both, *where*, and *whose*
  - the object pronoun can be left out
  - no commas
  
  Non-defining clauses are B2; mention at most that commas mean a different kind.
- Question tags: a positive sentence takes a negative tag and the reverse. The auxiliary repeats, otherwise *do/does/did*. Also *I'm …, aren't I?* and *Let's …, shall we?* The intonation meaning (real question vs checking) is taught in order 44, so point forward only as "you'll see later", or not at all. *(My call: state no intonation rule here.)*
- Determiners extend A1 *this/that* and A2 *some/any/much/many* with *each*, *every*, *all*, *both*, *either*, *neither*, *a few*, *a little*, *few*, *little*, *several*, *no*, *none*. Follow the `determiners` family.
- Adjective order: opinion · size · age · shape · colour · origin · material · purpose. Say that more than three adjectives is rare. Wordbanks must have exactly one natural order. Use opinion-size-colour-type sequences from Swan's examples, not edge cases.
- **Extra sweep risk:** Review Focus 2 (relative pronouns, backshift).

### Task 7: B1 Grammar, part 5 — adjectives, emphasis, linking, word building (`order` 22–26), `b1-part-5`

`rule` shape: gradable & non-gradable adjectives · intensifiers · *so*, *such*, *such a* · linking words (contrast, reason, result, addition, example) · word building with suffixes. Sources: *Gradable and non-gradable*, *Intensifiers*, *Very really So*, *So, such, such a*, *Linking words — detailed*, *Word building*, *Word form*, *Nouns and adjectives*.

- Gradable adjectives (*cold*) take *very*. Non-gradable or extreme ones (*freezing*, *perfect*) take *absolutely* or *completely*. *really* fits both, so never make *really* a wrong option.
- Intensifiers: *very*, *really*, *so*, *quite*, *extremely*, *a bit*, *rather*. Say that *quite* varies by meaning and stress in British English; keep to the "fairly" sense, or leave *quite* out of quizzes.
- *so* + adjective or adverb; *such* + (adjective) + plural or uncountable noun; *such a/an* + (adjective) + singular noun. Include *so … that* and *such … that*.
- Linking words extend A2 *and/but/so/because* with *however*, *although*, *despite / in spite of* (+ noun or *-ing*), *because of*, *due to*, *therefore*, *as a result*, *in addition*, *also*, *for example*, *such as*. The punctuation after *However,* is taught at order 41, so here only show it.
- Word building: noun suffixes (*-ment*, *-tion*, *-ness*, *-ity*, *-er/-or*), adjective suffixes (*-ful*, *-less*, *-able*, *-ous*, *-al*, *-ive*) and *-ly* adverbs. Spelling changes such as *happy → happiness* are shown in examples.
- **Extra sweep risk:** linking-word gaps where *although*, *though* and *even though* all fit, and *however* vs *but*. Word-building gaps need the stem to fix the word class, and a learner might produce a valid alternative noun (*improvement* / *improving*).

### Task 8: B1 Phrases & Expressions (`order` 27–32), `b1-part-6`

`set` shape, category `phrases`. Six topics: phrasal verbs, separable · phrasal verbs, inseparable · collocations · idioms · prepositions of movement · *in time* vs *on time* (with related time phrases). Each has 6–30 entries, original glosses and no IPA. Sources: *Phrasal verb Type 1*, *Type 2*, *Collocations*, *Idiom*, *Preposition of movement*, *Time adverbs*.

- Gloss wording is original. The notes may choose the headwords, never the gloss (spec §12.2).
- Separable phrasal verbs: the explanation states the object-pronoun rule (*turn it off*, never *turn off it*). That is word order, so test it with a wordbank whose chips allow exactly one order. With a noun object, both positions are correct; never wordbank a noun-object item.
- Inseparable phrasal verbs: *look after*, *get on (with)*, *come across*, *run into*, *look forward to* (+ *-ing*, which links to order 13).
- Collocations: *make* / *do*, *have* / *take*, plus adjective + noun (*heavy rain*, *strong coffee*). Distractors are the real learner errors (*do a mistake*). Note that *take a decision* and *make a decision* are both British, so don't use that pair as a test.
- Idioms: high-frequency, transparent-enough B1 idioms only (EGP / English Vocabulary Profile B1). The `inUse` sentence must make the meaning recoverable.
- Prepositions of movement extend A1 prepositions of place: *into*, *out of*, *onto*, *across*, *through*, *along*, *past*, *over*, *under*, *up*, *down*, *towards*, *around*. *across* and *over* overlap, so accept both where both are correct.
- *in time* (early enough) vs *on time* (at the planned time), plus *in the end* / *at the end (of)*, *at last*, *at the moment*, *in a moment*, *on the way*, *in the way*.

### Task 9: B1 Writing and Speaking (`order` 33–40), `b1-part-7`

`phrases` shape. Each topic has at least 3 situations, accurate registers and no IPA.

- **Writing** (category `writing`), sources *Formal and informal phrases*, *How to write a good letter*, *Writing a email*:
  - formal vs informal register (family `register`): paired situations, the same intent in both registers
  - letter structure: greeting, reason for writing, main points, request or next step, closing and sign-off. The UK convention is *Dear Sir or Madam* → *Yours faithfully*, and *Dear Ms Lee* → *Yours sincerely*. Test it with a choice item.
  - a professional email (family `emails`): it must not contradict A2 `an-informal-email`, and it reuses that topic's situation names where the intent matches
- **Speaking** (category `speaking`), sources *Giving advice 1 & 2*, *Likes and dislikes*, *Agreeing and disagreeing*, *Indirect and direct questions*, *Polite vs direct*, *Question*:
  - giving advice: *You should…*, *Why don't you…?*, *If I were you, I'd…* (links to order 9), *Have you tried…?*
  - likes and dislikes: degrees from *I love* to *I can't stand*. *I'm (not) keen on* and *I'm into* are informal. Gerunds after them link to order 13.
  - agreeing and disagreeing (family `agreeing-and-disagreeing`): include soft disagreement (*I see what you mean, but…*)
  - indirect and polite questions (family `polite-requests`): *Could you tell me where … is?* takes statement word order, so test it with a wordbank. It must agree with A2 `asking-for-things-politely` and A1 `would-you-like`.
  - introducing yourself and interrupting at work (family `introductions`): it must agree with A1 `greetings-and-introducing-yourself`
- **Extra sweep risk:** the register label must be right for every phrase. This is the A2 lesson that "Excuse me, could you tell me the time" is neutral, not formal. Choice items testing appropriateness need exactly one option that fits the stated situation and listener.

### Task 10: B1 Mechanics (`order` 41–43), `b1-part-8` (first half)

`rule` shape, category `mechanics`. Topics: commas (family `punctuation`) · colons and semicolons · abbreviations. Sources: *The comma*, *The semicolon*, *Colons*, *Abbreviations*.

- **Gap grading ignores end punctuation and can't test commas** (Global Constraint). So punctuation quizzes use `choice` and `mistake` items only. A `mistake` item's tokens attach punctuation to the word before it ("However" vs "However,"), so the wrong token is the word-with-mark. *(My call.)*
- Commas cover lists, after an introductory phrase or *However*, before a joining *but* or *so* between two clauses, around non-essential extra information, and never between subject and verb. Mention the Oxford comma as a style choice, and never mark it wrong.
- Colons introduce a list or an explanation after a complete sentence. Semicolons join two related complete sentences, or separate list items that contain commas.
- Abbreviations: *e.g.*, *i.e.*, *etc.*, *Mr*, *Mrs*, *Ms*, *Dr*, *St*, *ASAP*, *FYI*, *approx.* British usage writes *Mr*, *Dr* without a full stop; say that US usage adds one. *e.g.* vs *i.e.* is the classic choice item.

### Task 11: Question intonation (`order` 44), then the cross-level and level-surface checks, `b1-part-8` (second half)

`rule` shape, category `mechanics`, slug `question-intonation`, family `intonation`. Sources: *Pronouncing*, *Intonation for question in the past*.

- [ ] **Step 1: Author it.**
  - Yes/no questions usually rise (↗). Wh- questions usually fall (↘).
  - Question tags rise for a real question and fall when checking something you expect to be true (back-link to order 19).
  - Rising intonation on a statement makes it a question (*You're leaving?* ↗).
  - Use "usually": Swan notes many exceptions.
  - Every arrow is named in words in the same string (Global Constraint).
- [ ] **Step 2: Teachability check.** Read the built page `out/b1/mechanics/question-intonation/index.html` at 375px and 1440px.
  - The arrows must render in both the Newsreader (examples) and Plex (explanation) faces, with no tofu boxes. If either font lacks the glyph, change the arrows to text ("(rising)", "(falling)").
  - If the page can't teach the rule without sound, cut the topic, renumber to 43 topics, and report it.
- [ ] **Step 3: Corpus test for arrows (Review Focus 5).** In `b1-part-8`, check every string in every B1 topic that contains ↗ or ↘ also contains the word *rising* or *falling* (case-insensitive).
- [ ] **Step 4: Cross-level links (Review Focus 3).** Extend `src/content/cross-level.test.ts`:
  - For every B1 topic with a family, `siblingsAcrossLevels` returns every A1/A2 topic sharing its key, and each of those returns it.
  - Pin the past-simple chain explicitly. `siblingsAcrossLevels` of the A2 past simple equals `[a1 was-were, b1 present-perfect-and-past-simple]` in that order. B1 returns `[a1, a2]`.
  - Pin A2 `used-to-and-would` ↔ B1 `be-used-to-and-get-used-to`.
  - Pin the set of families B1 shares with A1/A2 to exactly: `past-simple`, `future-forms`, `conditionals`, `used-to`, `gerunds-and-infinitives`, `question-forms`, `determiners`, `adjective-order`, `linking-words`, `prepositions-of-place`, `prepositions-of-time`, `emails`, `polite-requests`, `introductions`, `punctuation`.
  - After the build, confirm `out/a1/grammar/was-were/index.html` links to both the A2 and B1 pages.
- [ ] **Step 5: Level surfaces.** After `npm run build`, check:
  - `out/b1/index.html` lists Grammar 26 · Phrases & Expressions 6 · Writing 3 · Speaking & Communication 5 · Mechanics 4.
  - `out/b1/phrases/index.html` and `out/b1/mechanics/index.html` exist, and `out/b1/vocabulary/` does not.
  - `out/sitemap.xml` includes the B1 category and topic URLs.
  - `out/search-index.json` contains 97 topics (26 + 27 + 44).
  - Searching "present perfect" in the built site returns the B1 topic.
- [ ] **Step 6: Run** `npm test`, `npm run typecheck`, `npm run lint` and `npm run build`. All must pass.
- [ ] **Step 7: Commit.** `feat(content): B1 question intonation; cross-level links across A1–B1`

---

## Follow-up plans

- **B2:** 32 items in §8. It owns the `wish`, `passive`, `reported-speech`, `relative-clauses`, `collocations` and `conditionals` continuations. It decides which B1 phrasal-verb topic links to B2 advanced phrasal verbs. It must key "describing certainty in the past" (still unkeyed, per the memory note).
- **C1:** then deploy, which is the platform plan's deferred Task 16 and its checklist.
- **Still open, not in this plan:**
  - contrast tests reading tokens from `globals.css`
  - the word-bank chip-shuffle choice, which still needs the user's pick
