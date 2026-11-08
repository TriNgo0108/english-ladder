# English Ladder — UI Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give the site a proper frame for wide screens: a sticky top bar, a topic sidebar, and an "On this page" rail. Give every section its own spaced panel, and switch the whole site to the owner-approved warm, book-like look, built on shadcn/ui.

**Architecture:**
- **Theme:** the colour tokens stay in `src/app/globals.css` in all three theme states. shadcn's variable names are aliases of those tokens, and a test reads that file to enforce contrast.
- **Navigation data:** built on the server by a pure `src/lib/nav.ts`. It reaches client components as props, and the client components read `usePathname()` to know where the reader is.
- **Sidebar:** lives in a new `src/app/[level]/layout.tsx`.
- **Top bar:** lives in the root layout.
- **"On this page" rail:** part of the topic page itself.

**Tech Stack:** Next.js 16.4 (App Router, `output: "export"`, `basePath`, `trailingSlash: true`) · React 19.3 · TypeScript 6 strict · Tailwind 4.3 (CSS-first) · shadcn/ui (Radix primitives, `lucide-react`, `tw-animate-css`) · Vitest 5 + Testing Library + jsdom · `sharp` (already installed with Next) for the favicon.

**Spec:** `docs/superpowers/specs/2026-11-08-ui-redesign-design.md`, which builds on `docs/superpowers/specs/2026-11-05-cefr-grammar-site-design.md`. Mockups are in `docs/superpowers/specs/2026-11-08-ui-redesign-mockups/`.

## Global Constraints

- Work on branch `ui-redesign` in the main checkout. No git worktrees. No push or deploy (`main` is the deploy branch).
- Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code (`AGENTS.md`). `usePathname` needs no `Suspense` here, because every route has `generateStaticParams` and `dynamicParams = false`.
- No content, URL, JSON-LD, sitemap or search-index changes. Quiz *behaviour* is unchanged: restyle only, and no progress counter.
- The theme key stays the only `localStorage` use. Sidebar open/closed state is never persisted.
- Three-state theming:
  - light on `:root`
  - OS dark under `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { … } }`
  - explicit dark on `:root[data-theme="dark"]`
  - No colour may be defined only inside a media or `[data-theme]` block. Never switch to a `.dark` class.
- Running text is never wider than `65ch`.
- Accessibility rules:
  - 4.5:1 text contrast
  - visible `focus-visible` outline on every interactive element
  - 44×44px minimum targets (`min-h-11`)
  - `cursor: pointer` on clickables
  - SVG icons only (`lucide-react` or inline), never emoji
  - transitions 150–300ms
  - `prefers-reduced-motion` respected
- Fonts unchanged:
  - Newsreader: headings and example sentences
  - IBM Plex Sans: everything else
  - IBM Plex Mono: grammatical forms
- **Breakpoints:**
  - ≥1280px (`xl`): sidebar · lesson · rail
  - 1024–1279px (`lg`): sidebar · lesson, with the cross-level links under the lesson
  - <1024px: one column, and the topic list in a `Sheet`
- Existing tests keep passing. Update a test only where this plan changes the markup or value it asserts.
- `npm run typecheck`, `npm run lint`, `npm test` and `npm run build` all pass at the end of every task.

## Review Focus

1. **Unknown paths.** On the 404 page, or for a path like `/zz/`, the top bar and the `Sheet` render level links only, with no crash and no level marked current. Task 4 tests `locateNav("/zz/")`.
2. **Trailing slash or none.** `usePathname()` may return `/a1/grammar/to-be` or `/a1/grammar/to-be/`. Either way the current topic and level are highlighted. Tested in Tasks 4 and 5.
3. **A topic deep in a long level** (B1 has 45 topics). On load, the sidebar scrolls so the current topic is visible. Task 4 tests that `scrollIntoView` is called on the `aria-current` link.
4. **Jump links under the sticky top bar.** A clicked "On this page" link lands with the heading visible, not hidden behind the bar. Task 3 tests that `SECTION_HEADING` carries `scroll-mt-24`.
5. **Choosing a topic in the phone `Sheet`.** The sheet closes when a topic is chosen, so it doesn't sit over the new page. Task 5 tests that the dialog is gone after a link click.

---

### Task 1: shadcn foundation and the warm palette

**Files:**
- Create: `components.json`, `src/lib/utils.ts` (both from the shadcn CLI), `src/components/ui/{button,sheet,collapsible,separator,scroll-area}.tsx` (from the CLI, then edited), `src/app/globals.test.ts`, `src/components/ui/ui-tokens.test.ts`
- Modify: `src/app/globals.css`, `src/lib/levels.ts`, `src/lib/levels.test.ts`, `src/lib/contrast.test.ts`, `package.json`

**Interfaces:**
- Produces:
  - the CSS utilities `bg-ground`, `bg-surface`, `bg-subtle`, `border-border`, `text-text`, `text-muted`, `text-accent`, `bg-accent`, `text-on-accent`, `text-correct`, `text-incorrect`
  - the shadcn aliases `bg-background`, `text-foreground`, `bg-card`, `bg-popover`, `bg-primary`, `text-primary-foreground`, `bg-secondary`, `border-input`, `ring-ring`
  - `cn(...inputs): string` from `@/lib/utils`
  - the shadcn components `Button`, `Sheet*`, `Collapsible*`, `Separator`, `ScrollArea` from `@/components/ui/*`

**Token values** (light / dark; OS-dark repeats dark exactly). These were checked with `contrastRatio`, and every text pairing is ≥5.2:1.

| Token | Light | Dark |
|---|---|---|
| `--color-ground` | `#F8F4EC` | `#1A1612` |
| `--color-surface` | `#FFFDF8` | `#231E19` |
| `--color-subtle` (hover/tint background) | `#F1EADC` | `#2C251F` |
| `--color-border` | `#E7DFCF` | `#3A322A` |
| `--color-text` | `#2A2520` | `#EDE6DA` |
| `--color-muted` | `#6B5E4F` | `#A89A87` |
| `--color-accent` | `#9A3412` | `#F0A36B` |
| `--color-on-accent` | `#FFFDF8` | `#1A1612` |
| `--color-correct` | `#3F6212` | `#86C06A` |
| `--color-incorrect` | `#B91C1C` | `#F49A8E` |

The spec's starting muted value `#7C6F5F` measures 4.46:1 on the ground, so it fails. `#6B5E4F` replaces it.

**Level ramp:**
- **Fills (`ramp`):** `["#FBE7D3", "#F6CDA4", "#EEA86E", "#D9773A", "#9A3412"]`
- **Badge text (`fg`):** `DARK = "#2A2520"` for A1–B2 and `WHITE` for C1. The B2 pair, the lowest, measures 4.81:1.

- [ ] **Step 1: Initialise shadcn.**
  - Run `npx shadcn@latest init` from the repo root. Answer the prompts as follows:
    - Radix base
    - neutral base colour
    - CSS variables yes
    - `@/components` and `@/lib/utils` aliases
  - Then run `npx shadcn@latest add button sheet collapsible separator scroll-area`.
  - Check the result:
    - `components.json` exists
    - `src/lib/utils.ts` exports `cn`
    - `package.json` gained the CLI's dependencies (`radix-ui` or `@radix-ui/*`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, `tw-animate-css`)
    - pin them to exact versions, as the rest of `package.json` is

- [ ] **Step 2: Write the failing palette test `src/app/globals.test.ts`.**

  The test reads `globals.css` with `fs` and extracts every `--color-<name>: #RRGGBB` declaration from three blocks:
  - light: the first `:root {` block
  - OS dark: `:root:not([data-theme="light"]) {` inside the `prefers-color-scheme: dark` media block
  - explicit dark: `:root[data-theme="dark"] {`

  Tests:
  - `it("defines every token in all three theme states")`: the three key sets are equal, and include `ground, surface, subtle, border, text, muted, accent, on-accent, correct, incorrect`.
  - `it("repeats the explicit dark palette exactly for OS dark")`: OS dark equals explicit dark.
  - `it.each` over light and dark × `text, muted, accent, correct, incorrect` × backgrounds `ground, surface, subtle`, each `expect(contrastRatio(fg, bg)).toBeGreaterThanOrEqual(4.5)`.
  - `it("keeps on-accent text readable on the accent")`: ≥4.5 in both themes.

  Delete the `describe("spec palette meets WCAG AA")` block from `src/lib/contrast.test.ts`, because this test now covers the real file. Keep the two `contrastRatio` unit tests.

- [ ] **Step 3: Run `npx vitest run src/app/globals.test.ts`.** Expected: FAIL, because `subtle` and `on-accent` are missing and the values are the old blue palette.

- [ ] **Step 4: Rewrite the token blocks in `src/app/globals.css`.**
  - **Token blocks:** use the table above, in the existing three-block structure. Delete any `:root { --background: oklch(…) }` and `.dark { … }` blocks the CLI added. Keep its `@import "tw-animate-css";`.
  - **`@theme inline`:** expose each token as `--color-<name>: var(--color-<name>)`. Add the shadcn aliases:
    - `--color-background: var(--color-ground)`
    - `--color-foreground: var(--color-text)`
    - `--color-card` and `--color-popover`: `var(--color-surface)`
    - `--color-card-foreground` and `--color-popover-foreground`: `var(--color-text)`
    - `--color-primary: var(--color-accent)`
    - `--color-primary-foreground: var(--color-on-accent)`
    - `--color-secondary: var(--color-subtle)`
    - `--color-secondary-foreground: var(--color-text)`
    - `--color-input: var(--color-border)`
    - `--color-ring: var(--color-accent)`
    - `--color-destructive: var(--color-incorrect)`
    - `--radius: 0.375rem`
  - **No collisions:** don't define shadcn's `muted`, `muted-foreground`, `accent` or `accent-foreground`. On this site `muted` is a text colour and `accent` is the rust, so they would collide (Step 6 deals with them).
  - **Dark variant:** replace any CLI `@custom-variant dark` with one that matches both dark states:

    ```css
    @custom-variant dark {
      @media (prefers-color-scheme: dark) {
        &:where(:root:not([data-theme="light"]) *) { @slot; }
      }
      &:where([data-theme="dark"], [data-theme="dark"] *) { @slot; }
    }
    ```
  - **Smooth scrolling:** add `@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }`.

- [ ] **Step 5: Run `npx vitest run src/app/globals.test.ts`.** Expected: PASS.

- [ ] **Step 6: Write the failing guard `src/components/ui/ui-tokens.test.ts`.**
  - The test reads every `.tsx` in `src/components/ui/`.
  - `it("uses site tokens instead of shadcn's colliding names")`: for each file, the content must not match `/(?<![\w-])(bg-accent|bg-muted|text-accent-foreground|text-muted-foreground)(?![\w-])/`. The lookarounds still catch `hover:bg-accent` and `bg-accent/50`.
  - Run the test. Expected: FAIL on the CLI's files.
  - Then edit those files:
    - `bg-accent` → `bg-subtle`
    - `bg-muted` → `bg-subtle`
    - `text-accent-foreground` → `text-text`
    - `text-muted-foreground` → `text-muted`
  - Re-run. Expected: PASS.

- [ ] **Step 7: Re-hue the level ramp.**
  - In `src/lib/levels.test.ts`, change the ramp expectation to `["#FBE7D3", "#F6CDA4", "#EEA86E", "#D9773A", "#9A3412"]`. Rename the test to `"uses the warm ramp, deepening A1 to C1"`.
  - Run it. Expected: FAIL.
  - Update `ramp` in `src/lib/levels.ts`, and set `DARK` to `"#2A2520"`.
  - Run `npx vitest run src/lib`. Expected: PASS, including the existing badge-contrast test.

- [ ] **Step 8: Run the full checks.** Run `npm run typecheck && npm run lint && npm test && npm run build`. Expected: all pass. Existing pages now render in the warm palette, still in the old layout.

- [ ] **Step 9: Commit.** `git add -A && git commit -m "feat(theme): shadcn foundation and warm book-like palette"`

---

### Task 2: Ladder mark and favicon in rust

**Files:**
- Create: `src/components/LadderMark.tsx`, `src/components/LadderMark.test.tsx`, `src/app/icon.svg`, `scripts/build-favicon.mjs`, `src/app/favicon.test.ts`
- Modify: `src/app/favicon.ico` (regenerated), `package.json` (script `"favicon": "node scripts/build-favicon.mjs"`)

**Interfaces:**
- Produces: `LadderMark({ className }: { className?: string }): JSX.Element`, an inline SVG that is decorative (`aria-hidden="true"`). The ladder is drawn in `currentColor` on a rounded square filled with `var(--color-accent)`, so it follows the theme.

- [ ] **Step 1: Look at the current mark.**
  - Run `python -c "from PIL import Image; im=Image.open('src/app/favicon.ico'); im.size=(256,256); im.load(); im.save(r'<scratchpad>/old-favicon.png')"` and view the PNG.
  - Redraw that same ladder geometry (two rails and the rungs on a rounded square) as SVG paths in a `0 0 32 32` viewBox.

- [ ] **Step 2: Write the failing tests.**
  - `LadderMark.test.tsx`:
    - `it("is decorative")`: `container.querySelector("svg")` has `aria-hidden="true"`.
    - `it("has no accessible name of its own")`: there's no `<title>`.
  - `favicon.test.ts`, which reads files with `fs`:
    - `it("ships an SVG icon on the rust accent")`: `src/app/icon.svg` contains `#9A3412`.
    - `it("has a multi-size favicon.ico from 16 to 256px")`: in the ICO header, `readUInt16LE(2) === 1` and `readUInt16LE(4) === 7`. The directory width bytes (offset `6 + 16*i`) are `[16, 24, 32, 48, 64, 128, 0]`, where 0 means 256.

- [ ] **Step 3: Run `npx vitest run src/components/LadderMark.test.tsx src/app/favicon.test.ts`.** Expected: FAIL.

- [ ] **Step 4: Implement the icons.**
  - **`LadderMark.tsx`:** the component described under Interfaces.
  - **`src/app/icon.svg`:** the same paths, with fixed colours: fill `#9A3412` and ladder `#FFFDF8`. Next's metadata convention emits the `<link rel="icon">`.
  - **`scripts/build-favicon.mjs`:**
    1. Render `src/app/icon.svg` with `sharp` to PNG at 16, 24, 32, 48, 64, 128 and 256px.
    2. Write `src/app/favicon.ico` as a PNG-embedded ICO with this layout:
       - a 6-byte header (reserved 0, type 1, count 7)
       - one 16-byte entry per image: width/height byte (0 for 256), colours 0, reserved 0, planes 1, bpp 32, byte length, data offset
       - the PNG buffers, in entry order
  - Run `npm run favicon`.

- [ ] **Step 5: Run the tests again.** Expected: PASS. Run `npm run build` and confirm `out/icon.svg` and `out/favicon.ico` exist.

- [ ] **Step 6: Commit.** `git add -A && git commit -m "feat(site): ladder mark and favicon redrawn in rust"`

---

### Task 3: Section panels and lesson typography (the styled topic page)

**Files:**
- Create: `src/components/Section.tsx`, `src/components/Section.test.tsx`, `src/lib/topic-sections.ts`, `src/lib/topic-sections.test.ts`
- Modify: `src/components/shapes/{TopicHeader,RuleTopicView,SetTopicView,PhraseTopicView}.tsx`, `src/components/quiz/{Quiz,shared}.tsx`, `src/components/{TopicNav,CrossLevelLinks}.tsx`

**Interfaces:**
- Produces:
  - from `@/components/Section`:
    - `PANEL: string`, the panel classes: `rounded-md border border-border bg-surface p-6 sm:p-8`
    - `SECTION_HEADING: string`: `font-serif text-2xl border-b border-border pb-2 scroll-mt-24`
    - `Section({ headingId, title, aside, children, className }: { headingId: string; title: ReactNode; aside?: ReactNode; children: ReactNode; className?: string })`. It renders `<section aria-labelledby={headingId} className={cn(PANEL, className)}>`, then an `<h2 id={headingId} className={SECTION_HEADING}>`, with `aside` beside the heading and the children below.
    - `EXAMPLE_TEXT: string`: `font-serif text-xl italic [&_b]:not-italic [&_b]:font-semibold [&_b]:text-accent`
  - from `@/lib/topic-sections`:
    - `type TopicSection = { id: string; label: string }`
    - `topicSections(topic: Topic): TopicSection[]`
- **Section ids stay exactly as they are today**, so existing tests and links don't break:

  | Section | id | Included |
  |---|---|---|
  | Form | `form-heading` | only if `topic.form` |
  | Examples | `examples-heading` | rule topics |
  | Common mistake | `pitfall-heading` | only if `topic.pitfall` |
  | Words | `words-heading` | set topics |
  | each phrase situation | `situation-${i}`, labelled with `s.situation` | phrase topics |
  | Quiz | `quiz-heading` | always last |

- [ ] **Step 1: Write the failing tests.**
  - `topic-sections.test.ts`, using real topics from the registry (`allTopics.find(...)`):
    - `it("lists a rule topic's sections in page order, ending with Quiz")`. Pick a rule topic with both `form` and `pitfall`. Expect ids `["form-heading", "examples-heading", "pitfall-heading", "quiz-heading"]`.
    - `it("omits Form and Common mistake when the topic has none")`.
    - `it("lists Words then Quiz for a set topic")`.
    - `it("lists one entry per situation for a phrase topic, labelled with the situation")`.
  - `Section.test.tsx`:
    - `it("labels the section by its heading")`: `getByRole("region", { name: "Examples" })`.
    - `it("keeps headings clear of the sticky top bar")`: the `h2` has the class `scroll-mt-24`.

- [ ] **Step 2: Run `npx vitest run src/lib/topic-sections.test.ts src/components/Section.test.tsx`.** Expected: FAIL (the modules are missing).

- [ ] **Step 3: Implement `Section.tsx` and `topic-sections.ts`.**

- [ ] **Step 4: Restyle the topic views.**
  - **Rule/Set/Phrase views:** build every section with `Section`. Each view's `<article>` becomes `grid gap-10` (40px between panels), and the `mt-8` spacing goes.
  - **`TopicHeader`:** the explanation becomes its own panel, a `div` with `PANEL`; it isn't a labelled region. The breadcrumb keeps its links in `text-muted`. Its last crumb stays `aria-current="page"`.
  - **Example sentences, the pitfall's "Not this" and "Say this" lines, and phrase lines:** use `EXAMPLE_TEXT`. The pitfall's line-through and its "Not this" / "Say this" words stay.
  - **Form lines:** stay in `font-mono`.
  - **Words table:** stays inside its own scroll region, placed inside the panel.
  - **Text width:** every text block inside a panel keeps `max-w-[65ch]`.
  - **`Quiz`:** the section uses `PANEL`. Its `h2` keeps `ref` and `tabIndex={-1}` and adds `SECTION_HEADING`. The question list and score are otherwise unchanged.
  - **`shared.tsx`:**
    - `PRIMARY_BUTTON` becomes a filled accent button: `bg-accent text-on-accent border-accent`, with a hover that goes to `opacity-90`.
    - `BUTTON_BASE`'s hover becomes `not-aria-disabled:hover:bg-subtle`.
    - Correct/incorrect colours stay `text-correct` and `text-incorrect`.
  - **`TopicNav` and `CrossLevelLinks`:** cards use `bg-surface`, `hover:bg-subtle` and `hover:border-accent`.

- [ ] **Step 5: Run `npm test`.** Expected: all pass, the existing shape, quiz and nav tests included. If an existing test asserted a removed class, update only that assertion and say so in the commit body.

- [ ] **Step 6: Commit.** `git add -A && git commit -m "feat(topic): section panels and book-like lesson typography"`

- [ ] **Step 7: OWNER LOOK CHECKPOINT (spec §8.2). Stop here.**
  - Run `npm run dev`. Open one rule topic (e.g. `/b1/grammar/` → the first topic) and one phrase topic.
  - Show them to the owner in light and dark (use the theme toggle). Ask for sign-off on the look.
  - Make any token or panel changes the owner asks for now, in `globals.css`, `Section.tsx` or `shared.tsx`. Re-run `npm test`, because the contrast tests guard the new values. Commit them as `fix(theme): owner look adjustments`.
  - Do not start Task 4 until the owner approves.

---

### Task 4: Navigation data and the topic sidebar

**Files:**
- Create: `src/lib/nav.ts`, `src/lib/nav.test.ts`, `src/components/nav/TopicTree.tsx`, `src/components/nav/TopicTree.test.tsx`, `src/app/[level]/layout.tsx`
- Modify: `src/app/[level]/page.tsx`, `src/app/[level]/[category]/page.tsx`, `src/app/[level]/[category]/[topic]/page.tsx` (each `<main>` drops `mx-auto max-w-3xl`, because the layout now sizes it)

**Interfaces:**
- Produces (`@/lib/nav`):
  - `type NavTopic = { title: string; href: string }`, where `href` is `topicPath(topic)`, always with a trailing slash
  - `type NavGroup = { category: CategorySlug; label: string; topics: NavTopic[] }`
  - `buildLevelNav(level: Level): NavGroup[]`: groups in `CATEGORIES` order, empty categories left out, topics in `order`
  - `type NavLocation = { level?: Level; category?: CategorySlug; topicHref?: string }`
  - `locateNav(pathname: string): NavLocation`:
    - accepts a path with or without its trailing slash
    - validates the level and category with `LevelSchema` and `CategorySlugSchema`
    - unknown segments give `{}`, or only the valid leading part
    - `topicHref` is set only when there are three segments, and is normalised to the trailing-slash form
  - `buildAllNav(): Record<Level, NavGroup[]>`, consumed by Task 5
- Produces (`@/components/nav/TopicTree`, `"use client"`): `TopicTree({ groups, onNavigate }: { groups: NavGroup[]; onNavigate?: () => void })`
  - one `Collapsible` per group
  - the trigger is a ≥44px button showing the label and the count (`"Grammar · 12"`)
  - `defaultOpen` is set only for the group matching `locateNav(usePathname()).category`
  - topic links use `next/link`
  - the link equal to `topicHref` gets `aria-current="page"` and `text-accent font-semibold`
  - on mount, the current link is scrolled into view (`scrollIntoView({ block: "nearest" })`)
  - each link's `onClick` calls `onNavigate`

- [ ] **Step 1: Write the failing tests.**
  - `nav.test.ts`:
    - `it("groups a level's topics by category in CATEGORIES order with no empty groups")`, for `a1`. The total topic count equals `topicsByLevel("a1").length`.
    - `it("orders topics within a group by order")`.
    - `it("locates a topic path with or without the trailing slash")`. `locateNav("/a1/grammar/x")` and `locateNav("/a1/grammar/x/")` both give `{ level: "a1", category: "grammar", topicHref: "/a1/grammar/x/" }`.
    - `it("locates level and category pages")`.
    - `it("returns nothing for unknown paths")`: `locateNav("/zz/")` and `locateNav("/")` give `{}`. `locateNav("/a1/nope/")` gives `{ level: "a1" }`.
  - `TopicTree.test.tsx`, with `vi.mock("next/navigation", () => ({ usePathname: () => mockPath }))`, a `mockPath` variable set per test, and `Element.prototype.scrollIntoView = vi.fn()`. Groups come from `buildLevelNav("b1")`.
    - `it("opens only the current topic's group")`. With `mockPath` set to a B1 grammar topic path without the trailing slash, the Grammar trigger has `aria-expanded="true"` and every other trigger `"false"`.
    - `it("marks the current topic and scrolls it into view")`. Exactly one link has `aria-current="page"`, and `scrollIntoView` was called.
    - `it("starts with every group closed on a level page")`: `mockPath = "/b1/"`.
    - `it("calls onNavigate when a topic is chosen")`, with `userEvent`.

- [ ] **Step 2: Run `npx vitest run src/lib/nav.test.ts src/components/nav/TopicTree.test.tsx`.** Expected: FAIL.

- [ ] **Step 3: Implement `nav.ts` and `TopicTree.tsx`.** Wrap the tree in `<nav aria-label="Topics in this level">`.

- [ ] **Step 4: Create `src/app/[level]/layout.tsx`.**
  - It's a server component. It reads the level from `params` with `LevelSchema.parse`.
  - It renders `<div className="mx-auto grid w-full max-w-screen-2xl gap-8 px-4 py-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:px-8">`.
  - Inside that div:
    - an `<aside className="hidden lg:block">`, holding a `ScrollArea` with `sticky top-24 h-[calc(100dvh-7rem)]`, holding `<TopicTree key={level} groups={buildLevelNav(level)} />`
    - then `{children}`
  - Remove `mx-auto w-full max-w-3xl px-4 py-8` from the three pages' `<main>` elements, keeping `min-w-0`.

- [ ] **Step 5: Run the full checks.** Run `npm test && npm run build`. Expected: PASS. Check by eye at 1280px that the sidebar shows on level, category and topic pages and is absent on home.

- [ ] **Step 6: Commit.** `git add -A && git commit -m "feat(nav): level topic sidebar"`

---

### Task 5: Sticky top bar and phone menu

**Files:**
- Create: `src/components/nav/SiteHeader.tsx`, `src/components/nav/LevelLinks.tsx`, `src/components/nav/LevelLinks.test.tsx`, `src/components/nav/MobileNav.tsx`, `src/components/nav/MobileNav.test.tsx`
- Modify: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/not-found.tsx` (each `<main>` gets the frame width: `mx-auto w-full max-w-screen-2xl px-4 py-8 lg:px-8`)

**Interfaces:**
- Consumes: `locateNav`, `buildAllNav`, `NavGroup` (Task 4), `TopicTree` (Task 4), `LadderMark` (Task 2), `Search`, `ThemeToggle`.
- Produces:
  - `LevelLinks({ orientation }: { orientation: "row" | "column" })`, `"use client"`: links to `/${slug}/` for every entry in `LEVELS`. The link matching `locateNav(usePathname()).level` gets `aria-current="page"`.
  - `MobileNav({ navByLevel }: { navByLevel: Record<Level, NavGroup[]> })`, `"use client"`:
    - a `lg:hidden` shadcn `Sheet` (side `left`)
    - the trigger is a `Button` with `aria-label="Open menu"` and the lucide `Menu` icon, at least 44px
    - the `SheetContent` has a `SheetTitle` "Menu", then `<LevelLinks orientation="column" />`, then a `TopicTree` with the current level's groups and an `onNavigate` that closes the sheet
    - with no current level, the sheet shows the level links only
    - the open state lives in `useState`
  - `SiteHeader()`, a server component:
    - `<header className="sticky top-0 z-30 border-b border-border bg-ground/95 backdrop-blur">`
    - inside it, a `max-w-screen-2xl` row with height `h-16`, holding:
      - `MobileNav`
      - the home link, containing `LadderMark` and the text "English Ladder" in `font-serif`
      - `<div className="hidden md:flex"><LevelLinks orientation="row" /></div>` in the middle
      - `Search` and `ThemeToggle` on the right

- [ ] **Step 1: Write the failing tests.** Mock `next/navigation` as in Task 4.
  - `LevelLinks.test.tsx`:
    - `it("marks the current level")`: path `/b2/writing/`.
    - `it("marks the level on a topic path without a trailing slash")`.
    - `it("marks no level on an unknown path")`: path `/zz/`. No link has `aria-current`.
  - `MobileNav.test.tsx`, with `navByLevel = buildAllNav()`:
    - `it("opens a menu with the level links and the current level's topics")`. Click "Open menu", then expect a `getByRole("dialog")` containing the link "A1" and a B1 topic title (path is a B1 topic).
    - `it("shows level links only when there is no current level")`: path `/`. The dialog has no `aria-expanded` group triggers.
    - `it("closes after a topic is chosen")`. Click a topic link inside the dialog, then `queryByRole("dialog")` is `null`.

- [ ] **Step 2: Run `npx vitest run src/components/nav`.** Expected: the new tests FAIL.

- [ ] **Step 3: Implement the three components.** In `src/app/layout.tsx`, replace the old `<header>` with `<SiteHeader />`. Pass `navByLevel={buildAllNav()}` to `MobileNav` from inside `SiteHeader`.

- [ ] **Step 4: Run the full checks.** Run `npm test && npm run build`. Expected: PASS. At 375px, check by eye that the menu opens, traps focus, closes with Escape, and that nothing is hidden under the bar.

- [ ] **Step 5: Commit.** `git add -A && git commit -m "feat(nav): sticky top bar with level links and phone menu"`

---

### Task 6: "On this page" rail

**Files:**
- Create: `src/components/nav/OnThisPage.tsx`, `src/components/nav/OnThisPage.test.tsx`, `src/components/nav/useActiveSection.ts`
- Modify: `src/app/[level]/[category]/[topic]/page.tsx`, `src/components/CrossLevelLinks.tsx` (adds a `headingId` prop)

**Interfaces:**
- Consumes: `topicSections`, `TopicSection` (Task 3).
- Produces:
  - `useActiveSection(ids: string[]): string | undefined`. It watches the elements with those ids using one `IntersectionObserver` with `rootMargin: "-96px 0px -60% 0px"`. It returns the id of the last heading that has crossed the line under the top bar, or the first id before any has.
  - `OnThisPage({ sections }: { sections: TopicSection[] })`: `<nav aria-label="On this page">`, with one `<a href={"#" + id}>` per section. The active one gets `aria-current="location"` and `text-accent`.
  - `CrossLevelLinks` gains an optional `headingId?: string` (default `"cross-level-heading"`), so it can render twice without duplicate ids.

- [ ] **Step 1: Write the failing tests `OnThisPage.test.tsx`.** Stub `window.IntersectionObserver` with a fake that records its callback and its observed elements.
  - `it("links to every section of the topic in order")`, using `topicSections` of a real rule topic. The hrefs equal `#form-heading`, … `#quiz-heading`.
  - `it("marks the section being read")`. Render the headings plus `OnThisPage`, fire the fake observer's callback with `examples-heading` intersecting, and expect that link to have `aria-current="location"`.

- [ ] **Step 2: Run `npx vitest run src/components/nav/OnThisPage.test.tsx`.** Expected: FAIL.

- [ ] **Step 3: Implement `useActiveSection.ts` and `OnThisPage.tsx`.**

- [ ] **Step 4: Lay out the topic page.**
  - `<main>` becomes `grid gap-10 xl:grid-cols-[minmax(0,1fr)_15rem]`.
  - The first column holds the `TopicBody`, then `TopicNav`, then `<div className="xl:hidden"><CrossLevelLinks topic={topic} /></div>`.
  - The second column is `<aside className="hidden xl:block">`, with `sticky top-24` content: `<OnThisPage sections={topicSections(topic)} />`, then `<CrossLevelLinks topic={topic} headingId="cross-level-heading-rail" />`.
  - The rail version stacks its links vertically.
  - Because the hidden copy uses `display: none`, there's only ever one copy in the accessibility tree.

- [ ] **Step 5: Run the full checks.** Run `npm test && npm run build`. Expected: PASS. At 1440px, check by eye that clicking a rail link lands with the heading visible below the bar, and that the highlight follows scrolling.

- [ ] **Step 6: Commit.** `git add -A && git commit -m "feat(topic): on-this-page rail with section highlight"`

---

### Task 7: Home, level, category and 404 pages

**Files:**
- Create: `src/components/LinkCard.tsx`, `src/app/page.test.tsx`
- Modify: `src/app/page.tsx`, `src/app/[level]/page.tsx`, `src/app/[level]/[category]/page.tsx`, `src/app/not-found.tsx`

**Interfaces:**
- Produces: `LinkCard({ href, children, className }: { href: string; children: ReactNode; className?: string })`. It's a `next/link` with these classes:
  - layout: `block min-h-11 rounded-md border border-border bg-surface p-6`
  - hover: `transition-colors duration-200 hover:border-accent hover:bg-subtle`
  - focus: the standard `focus-visible` outline
  - nothing that moves the layout on hover

- [ ] **Step 1: Write the failing test `src/app/page.test.tsx`.**
  - `it("shows the first three topics of each level as examples")`. For `a1`, the card contains `"e.g. " + topicsByLevel("a1").slice(0, 3).map((t) => t.title).join(", ")`.
  - `it("lays the level cards out three across on large screens")`: the card list has the class `lg:grid-cols-3`.

- [ ] **Step 2: Run `npx vitest run src/app/page.test.tsx`.** Expected: FAIL.

- [ ] **Step 3: Restyle the pages.**
  - **Home:** an intro block (the H1 and the existing description), then `grid gap-6 sm:grid-cols-2 lg:grid-cols-3` of `LinkCard`. Each card shows the badge, the blurb, the count or "Coming soon", and the "e.g." line in `text-muted`. A level with no topics shows no "e.g." line.
  - **Level and category pages:** keep their structure and copy, use `LinkCard`, and put `gap-10` between the title block and the list.
  - **404:** copy unchanged, use `LinkCard`.

- [ ] **Step 4: Run the full checks.** Run `npm test && npm run build`. Expected: PASS, including the existing level and category page tests.

- [ ] **Step 5: Commit.** `git add -A && git commit -m "feat(pages): roomier home, level, category and 404 pages"`

---

### Task 8: Final verification pass

**Files:** only fixes found in this pass.

- [ ] **Step 1: Run the full checks.** Run `npm run typecheck && npm run lint && npm test && npm run build`. Expected: all pass. Record the test count.
- [ ] **Step 2: Check by eye.** Use `npx serve out` (or `npm run dev`) at 375, 768, 1024, 1280 and 1440px, in light, dark, and OS-dark with no stored theme. Pages: home, A1 level, B1 grammar category, a B1 rule topic, a set topic, a phrase topic, and the 404. Confirm:
  - no sideways page scroll
  - nothing under the sticky bar
  - the rail appears only from 1280px, and the cross-level links show exactly once at every width
  - the sidebar highlights the current topic, and B1's late topics are scrolled into view
  - the `Sheet` works by keyboard
  - focus rings are visible on the warm ground
- [ ] **Step 3: Fix and commit.** Fix anything found, with a test where the fault is logic rather than looks. Commit with `fix(ui): …`.
