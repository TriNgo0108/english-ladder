# English Ladder — B2 Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clear the B1 carry-forwards, then author the complete B2 level: 33 topics from spec §8's B2 list, linked to their A1–B1 counterparts. It also adds one A2 topic, subject questions, which A1 `question-words` promises "at a later level".

**Architecture:** Content and test-only, with no new components and no schema changes.
- Duplicated test helpers move into one shared module.
- Topics are typed modules under `src/content/b2/<category>/<slug>.ts`, registered through a new B2 barrel, validated by the existing schema and registry, and linked across levels through `src/content/families.ts`.
- The plan follows the B1 plan (`docs/superpowers/plans/2026-11-07-english-ladder-b1.md`, "Tasks 3–11") step for step.

**Tech Stack:** Next.js 16 (App Router, `output: 'export'`) · React 19 · TypeScript 6 strict · Tailwind 4 · Zod 4 · Vitest 5 + Testing Library + jsdom. These are unchanged.

**Spec:** `docs/superpowers/specs/2026-11-05-cefr-grammar-site-design.md`. The §8 B2 mapping is this plan's backlog. Prior plans are the platform/A1, A2 and B1 plans in `docs/superpowers/plans/`. All are complete and merged to `master`.

## Global Constraints

Every Global Constraint in the A2 and B1 plans still applies verbatim:
- no push, remote or deploy until C1 is authored
- the quiz floor (4) and the rule/set/phrases minimums (3 examples, 6 entries, 3 situations)
- shape bound to category
- gap grading cannot test capitalisation, hyphenation, commas or end punctuation, and every defensible answer goes in `answers[]`
- the word bank is graded by order and never shuffled; exactly one correct order
- the one-token rule for mistake items
- choice items have exactly one correct answer, in a varied position
- feedback reads correctly on both outcomes
- the family rules (one topic per key per level, keys in `FAMILY_KEYS`, explicit `family` where slug equals a key)
- British usage, with a standard American alternative accepted where Swan records it
- an explanation may rely on an earlier topic of its level by `order`, never a later one
- every ↗ or ↘ is named in words in the same string
- the spec §12.1 definition of done

The following are added or restated for B2:

- **Scope.** 33 topics. §8 lists 32 items. The two past-modal items (*must have / can't have / needn't have* and *describing certainty in the past*) become three topics so that each gets its own family and none overlaps: certainty (`modal-deduction`), necessity (`modal-obligation`) and ability (`modal-ability`). The two easily-confused pairs (*remind/remember*, *wear/dress*) become one set topic. *(My call.)*
- **Quiz length.** The target is 6 questions, with a range of 5–8. Every grammar topic has **at least 2 `mistake` items**, because spec §10 weights spot-the-mistake towards B2/C1. Every topic's quiz length is pinned in its part test (Task 1 adds the helper).
- **B2 pitch.**
  - Explanations use A1–B2 words and structures.
  - Terms defined earlier are reused with their exact earlier wording. Before writing, grep A1–B1 for the term's first definition. This includes B1's auxiliary, clause, state verb, transitive, intransitive, relative pronoun, phrasal verb, particle, collocation, suffix and register.
  - New terms are defined once, in plain words, where first needed: past modal, non-defining clause, participle clause, causative, reporting verb, negative adverbial, inversion, cleft sentence, abstract noun, hedging, declarative question, rhetorical question.
- **No IPA at B2.** It is the same reason as B1: there is no Vocabulary category, and the phrases entries are multi-word.
- **Inversion is never tested with a word bank.** The grader accepts one order, and the same chips always also form the uninverted sentence (*I have never seen* / *Never have I seen*). Inversion and cleft items use `choice`, `gap` and `mistake`.
- **`order` is continuous across B2, 1–33:**
  - Grammar 1–21
  - Phrases & Expressions 22–24
  - Writing 25–28
  - Speaking 29–33
- **A2 gains one topic.** A2 `subject-questions` is grammar `order` 22. A2 vocabulary, writing and speaking move from 22–27 to 23–28. *(My call: EGP places subject questions with *who* and *what* at A2, so putting them at B2 would assign the level for the look of it, which is a spec §2 anti-goal.)*

## Review Focus

1. **Interchangeable past modals marked wrong.** Each must be fixed in the item itself, not by marking the learner wrong. Owned by Task 4, Step 4.
   - *may have*, *might have* and *could have* are interchangeable for past possibility.
   - *can't have* and *couldn't have* both express impossibility.
   - *didn't need to* fits whether or not the action happened; *needn't have* means it did happen.
   - The pins must accept every alternative a gap admits.
2. **One gap that fits both third and mixed conditionals.** "If I had taken the job, I ___ (be) rich" admits *would be* and *would have been*. Each item forces one with a time marker (*now*, *today*, *at the time*), or accepts both. `'d` is ambiguous (*had* / *would*), so accept the contraction wherever the full form is accepted: *would have*, *'d have*, *would've*. Owned by Task 4.
3. **A comma mistake item in non-defining clauses with a second fix.** If removing both commas leaves a correct defining clause ("My brother who lives in Paris is a doctor" is fine for someone with two brothers), the item has two fixes. Every comma item uses a unique referent (a proper noun, *my mother*, *the Eiffel Tower*). Owned by Task 6, with each mistake item's tokens pinned.
4. **An inversion or cleft word bank.** The same chips always form a correct uninverted sentence, but the grader accepts one order. Owned by Task 7. Test: `inversion-after-negative-adverbials` and `cleft-sentences` have no `wordbank` items.
5. **The renumbered A2 and the four-level `question-forms` chain.** The A2 previous/next links must not skip or repeat a topic. A1 `question-words` → A2 `subject-questions` → B1 `question-tags` → B2 `declarative-and-rhetorical-questions` must list every sibling in CEFR order on every page. Owned by Task 2 (A2 order and neighbours) and Task 9 (the chain).

---

## File Structure

- `src/content/test-helpers.ts`: the shared quiz-pin helpers (Task 1). It is not a `.test.ts`, so Vitest does not collect it.
- `src/content/a2/grammar/subject-questions.ts`, `src/content/a2/a2-part-6.test.ts`: the new A2 topic (Task 2)
- `src/content/b2/index.ts`: the B2 barrel, `b2Topics: Topic[]`
- `src/content/b2/<category>/<slug>.ts`: the 33 topics
- `src/content/b2/b2-part-<n>.test.ts`: per-batch pins, parts 1–6
- `src/content/registry.ts`: loads `b2Topics` after `b1Topics`
- `src/content/families.ts`: three new keys and updated comments
- `src/content/b1/phrases/phrasal-verbs-inseparable.ts`, `src/content/b1/writing/letter-structure.ts`: gain families
- `src/content/cross-level.test.ts`: extended to A1–B2

---

## Task 1: Shared test helpers and quiz-length pins

The 13 part tests (`a2-part-1`…`5`, `b1-part-1`…`8`) each redefine the same helpers, with drift (`wordbankAnswer` vs `wordbankAnswers`, and `choiceOptions` vs `distractors`, which have the same body). This task moves them into one module and pins every existing topic's quiz length. No assertion changes meaning.

**Files:**
- Create: `src/content/test-helpers.ts`, `src/content/test-helpers.test.ts`
- Modify: the 13 part tests listed above

**Interfaces:**
- Produces, all exported from `src/content/test-helpers.ts`. It imports `expect` from `"vitest"` explicitly, and each body is the existing one from the part tests:
  - `gap(questions: Question[], stemPart: string): string[]` throws if missing
  - `wordbankAnswer(questions: Question[]): string | undefined` returns the first
  - `wordbankAnswers(questions: Question[]): string[]`
  - `mistakeSentence(questions: Question[]): string | undefined` returns the first, tokens joined by spaces
  - `wrongToken(questions: Question[]): [string, string] | undefined` returns the first mistake's `[wrong token, correction]`
  - `mistakes(questions: Question[]): Array<[string, string]>` returns all of them
  - `choiceAnswer(questions: Question[], stemPart: string, optionPart?: string): string` throws if missing (from the b1-part-8 version)
  - `distractors(t: { quiz: Question[] }): string[]` replaces `choiceOptions`
  - `expectGap(accepted: string[], right: string[], wrong: string[]): void`
  - `ids(level: Level, category: CategorySlug, slug: string): string[]` returns `"level/slug"` siblings. Callers of the two-argument grammar-only `ids` pass `"grammar"`.
  - `plain(s: string): string`
  - `answerSentences(t: Topic): string[]` (from b1-part-6/7, widened to `Topic`)
  - `stringsIn(value: unknown, path: string): Array<[string, string]>`
  - **new** `quizLengths(topics: Topic[]): Record<string, number>` maps slug → `quiz.length`
- File-local helpers that only one file uses (`reg`, `formalPhrases`, `unnamedArrows`, `ARROW`) stay where they are.

- [ ] **Step 1: Write `test-helpers.test.ts`.** Use a small inline `Question[]` fixture covering one of each kind:
  - `gap` throws `gap containing "zzz" missing` for an absent stem
  - `wrongToken` and `mistakes` return the same first pair
  - `distractors` excludes the answer
  - `answerSentences` fills `___` with `answers[0]` and strips a trailing `(hint)`
  - `quizLengths([t])` equals `{ [t.slug]: t.quiz.length }`
- [ ] **Step 2: Run** `npm test -- src/content/test-helpers.test.ts`. Expected: FAIL, because the module doesn't exist.
- [ ] **Step 3: Implement the module.** Then replace the local copies in all 13 part tests with imports, and delete the now-unused `matchesGap`, `findTopic` and `siblingsAcrossLevels` imports.
- [ ] **Step 4: Add one quiz-length pin per part test,** `it('pins each topic\'s quiz length')`, as `expect(quizLengths(topics)).toEqual({ … })` with today's values. Read the values from the topic files, not from a test run.
- [ ] **Step 5: Run** `npm test`, `npm run typecheck` and `npm run lint`. Expected: PASS. The test count is 508 + the new helper tests + 13 length pins. `grep -rn "^function gap\|^function expectGap" src/content` returns nothing.
- [ ] **Step 6: Commit.** `test(content): shared quiz-pin helpers and per-topic quiz-length pins`

---

## Task 2: A2 subject questions (`order` 22)

**Files:**
- Create: `src/content/a2/grammar/subject-questions.ts`, `src/content/a2/a2-part-6.test.ts`
- Modify:
  - `src/content/a2/index.ts` (insert after the last grammar topic)
  - the six A2 vocabulary, writing and speaking topics (`order` +1)
  - `src/content/a2/a2-part-5.test.ts` (orders 23–28, level length 28)
  - `src/content/families.ts` (the `question-forms` comment)
- Grep `src/` for any hard-coded A2 count (`27`) and update it to 28.

**Interfaces:**
- Consumes: Task 1 helpers.
- Produces: A2 `subject-questions`, `rule` shape, grammar, `order` 22, `family: "question-forms"`.

- [ ] **Step 1: Write `a2-part-6.test.ts`.** It pins:
  - the slug, order 22, shape, family and quiz length
  - `topicsByLevel("a2").map(t => t.order)` is 1–28
  - `adjacentTopics` of A2 order 21 has `next` = `subject-questions`, and of order 23 has `prev` = `subject-questions`
  - `ids("a1","grammar","question-words")` contains `"a2/subject-questions"`
  - every gap, wordbank and mistake item, in the B1 pin style
- [ ] **Step 2: Run** `npm test -- src/content/a2`. Expected: FAIL.
- [ ] **Step 3: Author the topic** at A2 pitch (A2 plan, Tasks 5–9, Step 2). Read A1 `question-words` first; it already says *Who lives here?* has no *do*. This topic must agree and extend it:
  - *Who* or *What* as the subject takes no *do / does / did* (*Who called you?*, *What happened?*)
  - this contrasts with the object question (*Who did you call?*)
  - the verb after subject *who* is singular (*Who lives here?*), even when the answer is plural
  - Source: `english_grammar.txt` has no section for this, so author it from Swan and the EGP and say so in `sourceNotes`.
  - Word order is the point, so include at least one wordbank. Its chips must not also form the object question: no *did* chip when the answer has none.
  - The classic distractor is *Who did call you?*
- [ ] **Step 4: Renumber** the six later A2 topics, update the a2-part-5 pins and the counts. Leave A1 `question-words` text unchanged; "at a later level" stays true.
- [ ] **Step 5: Run** `npm test`, `npm run typecheck`, `npm run lint` and `npm run build`. Check that `out/a2/grammar/subject-questions/index.html` exists, and that `out/a1/grammar/question-words/index.html` links to it.
- [ ] **Step 6: Commit.** `feat(content): A2 subject questions; renumber A2 vocabulary, writing and speaking`

---

## Task 3: B2 barrel and family keys

**Files:**
- Create: `src/content/b2/index.ts`
- Modify:
  - `src/content/registry.ts`
  - `src/content/families.ts`
  - `src/content/b1/phrases/phrasal-verbs-inseparable.ts`, `src/content/b1/writing/letter-structure.ts`, and their pins in `b1-part-6` / `b1-part-7`
- Test: `src/content/registry.test.ts`

**Interfaces:**
- Produces:
  - `b2Topics: Topic[]` (initially `[]`). The registry loads `[...a1Topics, ...a2Topics, ...b1Topics, ...b2Topics]`.
  - `FAMILY_KEYS` gains `phrasal-verbs`, `letters` and `inversion`.
  - B1 `phrasal-verbs-inseparable` gets `family: "phrasal-verbs"`. B2 advanced phrasal verbs are mostly three-part verbs (*put up with*), which are inseparable, so this is the natural link. B1 `phrasal-verbs-separable` stays unkeyed. *(My call; this settles the B1 plan's open choice.)*
  - B1 `letter-structure` gets `family: "letters"`.
  - Comment lines:
    - phrasal-verbs → B1 phrasal verbs, inseparable → B2 advanced phrasal verbs
    - letters → B1 letter structure → B2 letters of complaint
    - inversion → B2 inversion after negative adverbials → C1 advanced inversion and fronting
  - Updated comment lines:
    - modal-ability → B2 could, was able to and could have
    - modal-obligation → B2 needn't have and didn't need to
    - modal-deduction names its B2 owner `describing-certainty-in-the-past`
    - conditionals → B2 third conditional only, with mixed conditionals unkeyed
    - question-forms → A2 subject questions

**B2 slugs, order and families. The content tasks use this table verbatim:**

| order | category | slug | family |
|---|---|---|---|
| 1 | grammar | `third-conditional` | `conditionals` |
| 2 | grammar | `mixed-conditionals` | — |
| 3 | grammar | `wish-for-past-regrets` | `wish` |
| 4 | grammar | `describing-certainty-in-the-past` | `modal-deduction` |
| 5 | grammar | `neednt-have-and-didnt-need-to` | `modal-obligation` |
| 6 | grammar | `could-was-able-to-and-could-have` | `modal-ability` |
| 7 | grammar | `future-in-the-past` | `future-forms` |
| 8 | grammar | `advanced-passive-and-reporting-verbs` | `passive` |
| 9 | grammar | `the-causative` | — |
| 10 | grammar | `reported-commands-advice-and-requests` | `reported-speech` |
| 11 | grammar | `non-defining-relative-clauses` | `relative-clauses` |
| 12 | grammar | `reduced-relative-clauses` | — |
| 13 | grammar | `participle-clauses` | — |
| 14 | grammar | `verb-object-infinitive-and-gerund-patterns` | `gerunds-and-infinitives` |
| 15 | grammar | `adjective-and-verb-phrases` | — |
| 16 | grammar | `articles-with-abstract-and-general-nouns` | `articles` |
| 17 | grammar | `advanced-linkers` | `linking-words` |
| 18 | grammar | `declarative-and-rhetorical-questions` | `question-forms` |
| 19 | grammar | `cleft-sentences` | — |
| 20 | grammar | `inversion-after-negative-adverbials` | `inversion` |
| 21 | grammar | `hedging-and-degrees-of-certainty` | — |
| 22 | phrases | `advanced-phrasal-verbs` | `phrasal-verbs` |
| 23 | phrases | `workplace-collocations` | `collocations` |
| 24 | phrases | `easily-confused-words` | — |
| 25 | writing | `letters-of-complaint` | `letters` |
| 26 | writing | `a-cover-letter` | — |
| 27 | writing | `follow-up-emails` | `emails` |
| 28 | writing | `summarising-and-adding-points` | — |
| 29 | speaking | `giving-a-presentation` | — |
| 30 | speaking | `giving-and-receiving-feedback` | — |
| 31 | speaking | `breaking-bad-news` | — |
| 32 | speaking | `answering-difficult-questions` | — |
| 33 | speaking | `checking-for-approval` | — |

Notes on the table:
- No B2 slug equals a family key. Every keyed row still sets `family` explicitly.
- Order dependencies: mixed after third; the three past modals before hedging (21); reduced relatives after non-defining; participle clauses after reduced relatives; adjective and verb phrases (15) before the cover letter (26), which reuses them.

- [ ] **Step 1: Write the failing tests** in `registry.test.ts`:
  - `it('gives B1 phrasal-verbs-inseparable and letter-structure their families')`
  - `it('loads B2 topics into the corpus')`: a `createRegistry` fixture with a b2 topic in `phrasal-verbs` and the B1 topic are siblings both ways
  - `it('lists the new B2 family keys')`: the three keys are present, with no duplicates
  - Update the b1-part-6/7 family pins from `toBeUndefined()` to the new keys.
- [ ] **Step 2: Run** `npm test -- src/content`. Expected: FAIL.
- [ ] **Step 3: Implement** the barrel, the registry wiring, the keys and comments, and the two B1 families.
- [ ] **Step 4: Run** `npm test` → PASS, then `npm run build` → succeeds, and `/b2/` renders its empty state.
- [ ] **Step 5: Commit.** `feat(content): B2 barrel and cross-level family keys for B2`

---

## Tasks 4–9: B2 content

Every content task follows the B1 plan's six content steps ("Tasks 3–11"), with these B2 substitutions:

- [ ] **Step 1: Read the references.**
  - Read `src/content/b1/grammar/second-conditional.ts` for register and structure, or `src/content/b1/writing/a-professional-email.ts` for phrases topics.
  - Read every A1–B1 sibling via the family table, plus any earlier topic the new one builds on even without a family (for example B1 `defining-relative-clauses` for reduced relatives, and B1 `the-passive` for the causative). B2 must not contradict them.
  - Grep `english_grammar.txt` for the source section named in the task. Where the notes are wrong or above B2, follow the English Grammar Profile and Swan, and record it in `sourceNotes`. Topics marked **(new)** in §8 have no section, so say so.
- [ ] **Step 2: Author the topics,** each with a `summary` of at most 155 characters that doesn't open with a definition, at the B2 pitch in Global Constraints.
- [ ] **Step 3: Write `src/content/b2/b2-part-<n>.test.ts`** with Task 1's helpers:
  - slug and order sequence, shape, and schema pass
  - families (including "no family" for unkeyed rows)
  - quiz lengths, with `quizLengths`
  - every gap's full `answers[]`, plus at least one wrong answer rejected per gap
  - every wordbank answer
  - every mistake item's wrong token and correction, with `mistakes`
  - for grammar parts, each topic has at least 2 mistake items
- [ ] **Step 4: Run the ambiguity sweep** from the A2 and B1 plans on every item, plus the risks the task lists. Record the sweep in the report. The B1 reviewers' recurring catches are first on the list:
  - a second single-token fix in mistake items, including deleting a token
  - a gap missing a defensible variant (British *shall*, contractions, *could* for *might*)
  - an unhedged rule
- [ ] **Step 5: Run** `npm test`, `npm run typecheck`, `npm run lint` and `npm run build`. Then inspect `out/b2/<category>/<slug>/index.html` for each new topic: the explanation, the summary meta and the quiz stems should all be present.
- [ ] **Step 6: Commit,** `feat(content): B2 <batch name> (<slugs>)`. A fix after review is a separate `fix(content): …` commit.

### Task 4: B2 Grammar, part 1 — conditionals, regrets, past modals (`order` 1–6), `b2-part-1`

`rule` shape. Sources: *Third conditional*, **(new)** mixed conditionals, *Expressing past regrets with wish*, *Describing certainty in the past*, *Can't have and needn't have*.

- **Third conditional:** `if + past perfect, would have + past participle`, for an unreal past. Contrast it with B1 second conditional in one line. Accept *would have*, *'d have* and *would've*, and *had* / *'d* in the *if*-clause. *could have* and *might have* in the result clause are correct, so never mark them wrong.
- **Mixed conditionals:** past condition → present result (*If I had studied, I would be a doctor now*), and present condition → past result (*If I were braver, I would have said something*). Review Focus 2.
- **Wish for past regrets:** `wish / if only + past perfect`. It extends B1 `wish-and-if-only` and must agree with B1's *were/was* and *would* rules. The classic distractor is *I wish I didn't say that* for a past regret.
- **Describing certainty in the past:** a scale from *must have* (sure) through *may have*, *might have*, *could have* (possible) to *can't have* / *couldn't have* (sure it's not true). B1's "the negative of deductive *must* is *can't*" carries over: *mustn't have* is the classic distractor. *might have* for "unlikely" (the note's line) is too strong, so say "less sure" and record it. Review Focus 1.
- **needn't have and didn't need to:** *needn't have done* means it was done but was unnecessary. *didn't need to* means it was unnecessary, and usually not done. Mention *should have* / *shouldn't have* for criticism only if the topic still fits 5–8 questions; otherwise leave it for C1 advanced modality.
- **could, was able to and could have:** general past ability (*could*). A single achievement (*was able to*, *managed to*, not *could*), except that negatives *couldn't* are fine for single events. Unreal past ability (*could have*). This keeps the note's ability half of "Describing certainty in the past"; record the split in `sourceNotes`.
- **Extra sweep risk:** Review Focus 1 and 2. Also check *could* vs *was able to* gaps where the context leaves "general" or "single" open.

### Task 5: B2 Grammar, part 2 — future in the past, passives, the causative, reporting (`order` 7–10), `b2-part-2`

`rule` shape. Sources: **(new)** future in the past, *The passive*, *Statements*, *The causative*, *Reported speech: Commands, advice or requests*.

- **Future in the past:** *was going to*, *would*, *was about to*, and past continuous for a past arrangement. The classic use is *I was going to call you, but…*. Accept *was going to* and *would* where both fit a reported plan.
- **Advanced passive and reporting verbs:** *It is said / thought / believed that…* and *He is said to be / to have been…*. Also passive continuous and modal passives (*is being repaired*, *must be done*). It builds on B1 `the-passive` without repeating its basics. Accept both the *It is said that* and the *X is said to* pattern when a gap allows either.
- **The causative:** `have / get + object + past participle` (a service you arrange), and *have something stolen* (something bad that happens to you). *get* is a little more informal. The classic distractor is *I cut my hair* meaning the hairdresser did it; frame it as a choice item about who did the work.
- **Reported commands, advice and requests:** `tell / ask / advise / warn + object + (not) to + infinitive`. It extends B1 `reported-speech`, which left commands out. *say* never takes this pattern, which links to B1 `say-and-tell`. The classic distractor is *She said me to wait*.
- **Extra sweep risk:** reporting-verb gaps where *told*, *asked* and *advised* all fit. The stem must fix the speech act, or the answers must accept each one.

### Task 6: B2 Grammar, part 3 — clauses and verb patterns (`order` 11–15), `b2-part-3`

`rule` shape. Sources: *Relative clauses* (## Non-defining), **(new)** reduced relative clauses, **(new)** participle clauses, *Verbs followed by gerunds and infinitives*, *Adjective phrase*, *Verb phrase*.

- **Non-defining relative clauses:** they add extra information, take commas, never use *that*, and the pronoun can't be left out. *which* can refer to a whole clause (*He was late, which annoyed everyone*). Commas can't be gap-tested, so comma items are `choice` or `mistake`, with punctuation attached to the token. Review Focus 3.
- **Reduced relative clauses:** *the man (who is) standing there*, *a book (that was) written in 1900*. These are an *-ing* or past participle phrase after a noun. Never gap a slot where the full clause is also correct, unless both are accepted.
- **Participle clauses:** *Walking home, I saw…*, *Built in 1900, the house…*, *Having finished, she left*. The classic error is the dangling participle (*Walking home, the rain started*). Make it a choice item, because a one-token fix is rarely possible.
- **Verb + object + infinitive or gerund:** *want / expect / allow / encourage someone to do*. Also *make / let someone do* (no *to*), *prevent / stop someone (from) doing*, and *I don't mind him doing*. It extends B1 `gerunds-vs-infinitives`. The classic distractors are *I want that you come* and *They made me to wait*.
- **Adjective and verb phrases:** adjective + preposition (*good at*, *interested in*, *responsible for*), adjective + *to*-infinitive (*keen to learn*, *ready to*), and verb + preposition (*focus on*, *pay attention to*, *depend on*). The source examples are CV language, so use work contexts; order 26 reuses them. *keen on* + *-ing* vs *keen to* + infinitive are both correct, so never test them as a pair.
- **Extra sweep risk:** Review Focus 3. Also *stop someone doing* vs *stop someone from doing*: accept both.

### Task 7: B2 Grammar, part 4 — articles, linkers, questions, emphasis, hedging (`order` 16–21), `b2-part-4`

`rule` shape. Sources: *Article* (general vs specific), *Linking expression*, *Forming question*, **(new)** cleft sentences, **(new)** inversion, **(new)** hedging.

- **Articles with abstract and general nouns:** zero article for general abstract and plural nouns (*Life is short*, *Dogs need exercise*). *the* when it is made specific (*the life of a writer*). *the* + adjective for groups (*the rich*), and *the* + singular noun for a whole kind (*The tiger is endangered*). It extends A2 `articles-the-and-zero-article` and must agree with it.
- **Advanced linkers:** cause and effect (*owing to*, *as a consequence*, *consequently*, *thus*) and contrast (*whereas*, *while*, *nevertheless*, *on the other hand*, *even so*). It extends B1 `linking-words`. Keep B1's rule that *despite* / *owing to* take a noun or *-ing*. The classic distractor is *owing to he was ill*.
- **Declarative and rhetorical questions:** a statement form with rising intonation or a question mark, used to check (*You're coming tomorrow?*), and a question asked for effect. It links back to B1 `question-intonation` and `question-tags`. Arrows follow the Global Constraint.
- **Cleft sentences:** *It was Maria who…*, *What I need is…*, *The thing that… is…*. These are for emphasis. No word banks (Review Focus 4).
- **Inversion after negative adverbials:** *Never have I…*, *Not only did she…, but…*, *Hardly had… when*, *No sooner had… than*, *Only then did…*. It is formal or written. The classic error is a missing auxiliary (*Never I have seen*). No word banks (Review Focus 4).
- **Hedging and degrees of certainty:** *seem / appear to*, *tend to*, *It is likely / unlikely that*, *possibly*, *arguably*, *I would say*, *There's a chance that*. It builds on order 4 and B1 modals of possibility. Hedges are often interchangeable, so prefer choice items about strength (*definitely* > *probably* > *possibly*).
- **Extra sweep risk:** Review Focus 4. Also linker gaps where *whereas* and *while* both fit (accept both), and *however* vs *nevertheless* (accept both).
- **Test:** `wordbankAnswers` is `[]` for `cleft-sentences` and `inversion-after-negative-adverbials`.

### Task 8: B2 Phrases & Expressions and Writing (`order` 22–28), `b2-part-5`

**Phrases** (`set` shape, category `phrases`, 6–30 entries each, original glosses, no IPA). Sources: *Phrasal verb*, *Collocations*, *Remind or remember*, *Wear and dress*.
- **Advanced phrasal verbs:** three-part verbs (*put up with*, *come up with*, *get away with*, *look down on*, *run out of*, *catch up with*), and multi-meaning verbs from the notes (*look up*, *hang up (on)*, *get through*). Three-part verbs never separate, which links to B1 `phrasal-verbs-inseparable` in one line.
- **Workplace collocations:** *meet a deadline*, *hold a meeting*, *raise an issue*, *reach an agreement*, *give notice*, *take on responsibility* (the note's review list has several). Distractors are real learner errors (*make a meeting*). It must not contradict B1 `collocations` on *make/do*.
- **Easily confused words:** *remind* (someone, about / to) vs *remember*; *wear* vs *dress* (*get dressed*, *dress someone*) vs *put on*. Add *rob / steal* or *borrow / lend* only if each entry stays clearly B2 (check the English Vocabulary Profile). The classic distractor is *Remember me to call him*.

**Writing** (`phrases` shape, category `writing`, at least 3 situations, accurate registers). Sources: *Phrases from letters of complaint*, *Covering letter*, *Follow up email*, *Adding points and summarizing*.
- **Letters of complaint** (family `letters`): stating the problem, giving details, saying what you want, and a firm close. It must agree with B1 `letter-structure` on greetings and sign-offs (*Dear Sir or Madam* → *Yours faithfully*).
- **A cover letter:** the role you're applying for, why you fit (reusing order 15's adjective and verb phrases), and the close. It is formal.
- **Follow-up emails** (family `emails`): after a meeting, chasing a reply, and after an interview. It must agree with B1 `a-professional-email`, and reuse its situation names where the intent matches.
- **Summarising and adding points:** *In short*, *To sum up*, *All in all*; *What's more*, *Not only that*, *While I'm on the subject*, *By the way*. Label each one's register: *By the way* is informal and *To sum up* is neutral.
- **Extra sweep risk:** register labels on every phrase (the A2 "Excuse me, could you tell me the time" lesson). Choice items about appropriateness need exactly one option that fits the stated reader.

### Task 9: B2 Speaking (`order` 29–33), then the cross-level and level-surface checks, `b2-part-6`

**Speaking** (`phrases` shape, category `speaking`). Sources: *Presentation*, *Giving feedback and suggestion*, *Responding to praise*, *Giving praise*, *Breaking bad news*, *Answering difficult questions*, *Checking for approval 1*.
- **Giving a presentation:** opening, signposting (*Moving on to…*), referring to visuals, and closing and inviting questions.
- **Giving and receiving feedback:** giving praise, responding to praise, and a softened suggestion (*You might want to…*). It can reuse order 21's hedges.
- **Breaking bad news:** preparing the listener (*I'm afraid…*, *I'm sorry to have to tell you…*), and saying it clearly and kindly.
- **Answering difficult questions:** buying time (*That's a good question*), not knowing (*I'll have to get back to you on that*), and redirecting.
- **Checking for approval:** *Is that OK with you?*, *Would you be happy with…?*, *Does that work for you?* It must agree with B1 `indirect-and-polite-questions`.

Then:

- [ ] **Cross-level links (Review Focus 5).** Extend `src/content/cross-level.test.ts`:
  - For every B2 topic with a family, `siblingsAcrossLevels` returns every A1–B1 topic sharing its key, and each of those returns it.
  - Pin the `question-forms` chain: `ids("b1","grammar","question-tags")` equals `["a1/question-words","a2/subject-questions","b2/declarative-and-rhetorical-questions"]`.
  - Pin the `conditionals` chain A2 → B1 → B2 and the `emails` chain A2 → B1 → B2 the same way.
  - Pin the set of families B2 shares with earlier levels to exactly: `conditionals`, `wish`, `modal-deduction`, `modal-obligation`, `modal-ability`, `future-forms`, `passive`, `reported-speech`, `relative-clauses`, `gerunds-and-infinitives`, `articles`, `linking-words`, `question-forms`, `phrasal-verbs`, `collocations`, `letters`, `emails`. `inversion` has no earlier sibling.
  - After the build, confirm that `out/a1/grammar/can-for-ability/index.html` links to the B2 ability page.
- [ ] **Level surfaces.** After `npm run build`, check:
  - `out/b2/index.html` lists Grammar 21 · Phrases & Expressions 3 · Writing 4 · Speaking & Communication 5
  - `out/b2/mechanics/` and `out/b2/vocabulary/` do not exist
  - `out/a2/index.html` lists Grammar 22
  - `out/sitemap.xml` includes the B2 category and topic URLs
  - `out/search-index.json` contains 131 topics (26 + 28 + 44 + 33), and add a test pinning `b2Topics` to length 33
  - searching "third conditional" in the built site returns the B2 topic
- [ ] **Run** `npm test`, `npm run typecheck`, `npm run lint` and `npm run build`. All must pass.
- [ ] **Commit.** `feat(content): B2 speaking; cross-level links across A1–B2`

---

## Follow-up plans

- **C1:** 22 items in §8. It owns the `inversion`, `comparison`, `collocations`, `idioms`, `register`, `agreeing-and-disagreeing`, `intonation` and `punctuation` continuations, and decides whether *advanced modality* joins `modal-deduction` or stands alone.
- **Then deploy:** the platform plan's deferred Task 16 and its checklist.
- **Still open, not in this plan:**
  - contrast tests reading tokens from `globals.css`
  - the → ↗ ↘ glyphs missing from the served font subsets
  - the "Word" column header on multi-word phrase tables
  - the A2 "Hello Maria," register label
  - the word-bank chip-shuffle choice, which still needs the user's pick
