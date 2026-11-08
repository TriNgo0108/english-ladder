# English Ladder UI Redesign — Design

**Date:** 2026-11-08
**Status:** Awaiting approval
**Builds on:** [2026-11-05-cefr-grammar-site-design.md](2026-11-05-cefr-grammar-site-design.md). This document **replaces its §9 "Visual design"** colour tokens, level ramp and layout rules. Everything else in that document (content model, quiz behaviour, accessibility rules, theming mechanics, storage rule) still stands.

**Mockups the owner reacted to:** [2026-11-08-ui-redesign-mockups/](2026-11-08-ui-redesign-mockups/). These are `topic-layout.html` (owner chose A), `home-layout.html` (owner chose C) and `visual-style.html` (owner chose 2, "warm, book-like"). They are HTML fragments written for a brainstorming viewer, so they render unstyled-but-legible when opened directly. They show light mode only.

Decisions are marked **(owner)** when the site owner chose them in conversation, and **(designer's call)** when they were settled on the owner's behalf and can be revisited.

---

## 1. Intent and why

The site works, but every page is a single 768px column centred on the screen. On a laptop or desktop, over half the screen is empty, and the header holds only search and a theme toggle: no name, no navigation. The owner's words: "too simple… a lot of unused space", on all screens.

The redesign gives the site a proper frame (a top bar, a topic sidebar and an "on this page" rail) so wide screens are used for **navigation and orientation**, not for wider text. It also gives the site a warmer, more crafted look that reads like a well-made grammar book.

**Success:** on a 1440px screen, a learner on any topic can see where they are in the level, jump to any other topic in that level, jump to any section of the lesson, and none of it feels cramped. Every section has clear breathing room around it.

## 2. Goals

- A persistent **top bar** on every page.
- A **topic sidebar** on level, category and topic pages, listing the current level's topics.
- An **"On this page" rail** on topic pages, with jump links, the current section highlighted, and the cross-level links.
- **Every section visibly separated** (owner): its own panel with generous space around it, never running into the next.
- The **warm, book-like look** (owner) across all pages, in light and dark.
- **shadcn/ui** as the component foundation (owner).
- Running text stays at **65ch maximum**. Wide screens get more navigation, not longer lines.

## 3. Non-goals

- No content changes. Topic data, explanations, examples and quizzes stay as they are.
- No change to quiz *behaviour* (§10 of the base design): scoring, feedback, retry and keyboard handling are all unchanged. Restyling only.
- No change to URLs, page structure for SEO, JSON-LD, sitemap or search index.
- No new features: no progress tracking, accounts, bookmarks or reading history.
- No change to the level/category/topic **navigation steps** (owner): the home page links to levels, a level page links to categories, a category page lists topics.

## 4. Anti-goals: what would make this a failure even if it worked

- **Clutter.** Three columns that feel busy or noisy. The frame must feel calm; the lesson stays the obvious focus.
- **Wider text.** Paragraphs stretched to fill the space.
- **A broken phone experience.** The phone view must be at least as good as today's.
- **A childish look.** The audience writes cover letters. No claymorphism, bubbly shapes, toy colours or emoji. (The base design rejected ui-ux-pro-max's "education" suggestion of Baloo 2 + Comic Neue for this reason, and it was suggested again here.)
- **Accessibility regressions.** Every rule in base design §9 "Accessibility — non-negotiable" still applies: 4.5:1 contrast, visible focus rings, 44×44px targets, keyboard operable, `prefers-reduced-motion`, SVG icons only.
- **New storage.** The theme key stays the only thing the site stores. Sidebar open/closed state is **not** persisted.

## 5. Constraints

- **Stack as it is:** Next.js 16.4 with `output: "export"` (static export to GitHub Pages, with `basePath`, `trailingSlash`), React 19.3, Tailwind CSS 4.3 (CSS-first `@theme`, no `tailwind.config`), TypeScript, Vitest + Testing Library. This Next.js version has breaking changes: read the relevant guide in `node_modules/next/dist/docs/` before writing code (see `AGENTS.md`).
- **Everything must work in a static export:** no server components that need a runtime, no API routes beyond the existing prebuilt `search-index.json`.
- **Three-state theming stays** (base design §9 "Theming"): light on `:root`; OS dark via `@media (prefers-color-scheme: dark)` guarded by `:root:not([data-theme="light"])`; explicit dark via `:root[data-theme="dark"]`. shadcn's default `.dark` class convention must be adapted to this. Don't switch the site to a class toggle.
- **Fonts stay** (owner): Newsreader (headings, example sentences), IBM Plex Sans (interface, explanations), IBM Plex Mono (grammatical forms), loaded via `next/font`.
- **Existing tests keep passing**, updated where markup legitimately changes.

## 6. Component foundation: shadcn/ui (owner)

The owner chose shadcn/ui. MUI was rejected because its own styling system would fight Tailwind and add weight.

- Initialise shadcn for Tailwind 4 with the CLI (`components.json`, `cn()` helper, `@/components/ui` alias). Components are copied into the repo, not imported from a package.
- **shadcn's colour variables map onto the site's own tokens** (§8), so `bg-background`, `text-foreground`, `bg-primary` and so on resolve to the warm palette in all three theme states. There is one source of truth for colour, not two parallel palettes.
- **Components expected (designer's call):** `Sheet` (the phone topic menu), `Collapsible` or `Accordion` (sidebar category groups), `Button`, `Separator`, `ScrollArea` (the sidebar's own scroll). The builder may add others where they clearly help. Restyle existing pieces (quiz controls, cards, search, theme toggle) with shadcn primitives where that simplifies them. Don't rewrite working behaviour just to use a component.
- **Icons:** `lucide-react`, the shadcn default. This replaces the hand-written SVG arrows over time, but only as a side effect of touching those files.
- **Search keeps its current logic** (lazy index fetch, keyboard navigation, combobox semantics, tests). It may be restyled. Swapping it for shadcn's `Command` is allowed only if every existing search test still passes. **(designer's call)**

## 7. Layout

### 7.1 Breakpoints (designer's call)

| Width | Topic page | Level / category page | Home |
|---|---|---|---|
| ≥ 1280px (`xl`) | sidebar · lesson · "On this page" rail | sidebar · content | full-width frame |
| 1024–1279px (`lg`) | sidebar · lesson (no rail) | sidebar · content | full-width frame |
| < 1024px | single column; sidebar opens in a `Sheet` from a menu button in the top bar | same | same |

When the right rail is hidden, its "This topic at other levels" links render at the bottom of the lesson, where they are today. "On this page" simply isn't shown below `xl`.

The overall frame is capped (around `max-w-7xl`/`max-w-screen-2xl`, builder's choice) and centred, so ultra-wide screens don't spread the three columns to the edges.

### 7.2 Top bar (every page)

- **Left:** the site name "English Ladder" with the ladder mark (redrawn in rust, §8.2), linking home.
- **Middle:** the five levels A1 · A2 · B1 · B2 · C1 as links, the current level marked (`aria-current`). On narrow screens these move into the `Sheet` menu.
- **Right:** search, then the theme toggle.
- **Below `lg`:** a menu button (≥44px, labelled) opens the `Sheet`.
- **Sticky** at the top while scrolling **(designer's call)**. Content and in-page jump targets must not hide beneath it (`scroll-margin-top` on section headings).

### 7.3 Topic sidebar (level, category and topic pages)

- Lists **every topic in the current level, grouped by category** in the `CATEGORIES` order, topics within a group in `order`.
- Each group is collapsible with its topic count. **Which groups start open (designer's call):** on a topic page, the current topic's category; on a category page, that category; on a level page, all closed. The current topic is highlighted (accent colour) and carries `aria-current="page"`.
- Sticky beside the content and scrolls independently (`ScrollArea`), so a long level (B1 has 45 topics) never pushes the page.
- Its own `<nav aria-label>`, distinct from the breadcrumb and the prev/next nav.
- On phones the same list appears inside the `Sheet`, with the level links above it. On the home page and the 404 page, which have no current level, the `Sheet` shows the level links only.

### 7.4 "On this page" rail (topic pages, ≥ `xl`)

- Jump links to each section present on that topic. The sections vary by topic shape: rule topics have Form (optional), Examples, Common mistake (optional), Quiz; set topics have Words, Quiz; phrase topics have one section per group, then Quiz. Build the list from what actually rendered, never a fixed list.
- **Highlights the section being read** (scroll-spy via `IntersectionObserver`). With `prefers-reduced-motion`, jumps don't animate.
- Below it: "This topic at other levels" (the existing `CrossLevelLinks`), moved here from the bottom of the page.
- Sticky, like the sidebar.

### 7.5 Lesson column (topic pages)

- Same content and order as today: breadcrumb, level badge + title, explanation, then the shape's sections, quiz, prev/next.
- **Each section is its own panel** (owner: "every section has space to separate them"): the explanation, Form, Examples, Common mistake, Words, each phrase group, and the Quiz each sit in a surface panel with a fine border, with generous vertical space between panels (around 32–48px; the builder sets the exact scale on the 8px grid).
- Text inside panels stays ≤ 65ch. The Words table may use the panel's full width and keeps its own horizontal scroll.
- The breadcrumb stays (it's how phone users orient). It may be visually lighter.

### 7.6 Home page: "today's cards, wider and richer" (owner)

- Intro block: the "English Ladder" heading and the existing one-line description, in its own spaced block.
- Five level cards, **three across at `lg`**, two at `sm`, one on phones.
- Each card: the level badge, the "You can…" blurb, the topic count (or "Coming soon"), and **the first three topics of the level by `order`** as a small "e.g." line **(designer's call on which three)**.
- No sidebar on the home page. The frame and top bar are present.
- Cards get roomier padding and a clear hover/focus state (border or shadow change, no movement that shifts layout).

### 7.7 Level page and category page (owner: same steps as today)

- **Level page:** title + badge, blurb, then the category cards (label, topic count), with the sidebar beside them.
- **Category page:** "Back to level" link, title, then the numbered topic list as cards, with the sidebar beside them (that category's group open).
- Both get the roomier card style and section spacing.
- The "Nothing here yet" empty-level state keeps its wording.

### 7.8 404 page

It gets the frame (top bar) and the new card styling. No sidebar, since a static 404 knows no level.

## 8. Look: "warm, book-like" (owner)

The owner picked this from three mockups: today's look refined, warm book-like, and colourful per-level.

> **Note for the reader:** base design §9 recorded that "an early warm-cream + Georgia-serif + terracotta direction was rejected as a recognised AI-generated-design cliché". The owner has now chosen a warm paper + serif + rust direction after seeing it side by side with alternatives. This document supersedes that line. The way to keep it from reading as a template is in the details: Newsreader rather than Georgia, a restrained single accent, real typographic hierarchy, and no decorative flourishes.

### 8.1 Character

- A paper-toned page ground with slightly lighter "page" panels and fine warm-grey borders. Flat, with at most a hairline shadow. No heavy drop shadows.
- **One accent: a deep rust/burnt orange.** Used for links, the current item in the sidebar and rail, the primary button, and the key words in example sentences.
- **Example sentences in italic Newsreader**, key words (the existing rich-text emphasis) in upright accent colour, so they read like specimens in a printed grammar.
- **Section headings in Newsreader with a thin rule beneath.** Labels (e.g. "EXAMPLES") may use small uppercase Plex Sans in muted colour. The mockup's "QUIZ · 2 of 8" was a sample label only. The quiz gains **no** progress counter; it still shows all questions at once, as today. **(designer's call)**
- Grammatical forms stay in IBM Plex Mono.

### 8.2 Tokens (designer's call; exact values are the builder's, within these rules)

Starting points from the approved mockup (light):

| Role | Starting value |
|---|---|
| Ground | `#F8F4EC` |
| Surface (panel) | `#FFFDF8` |
| Border | `#E7DFCF` |
| Text | `#2A2520` |
| Muted text | `#7C6F5F` (verify ≥ 4.5:1 on both ground and surface; darken if not) |
| Accent | `#9A3412` |

- **Dark theme is designed, not inverted:** a warm dark brown ground (not blue-black), a slightly lighter surface, warm off-white text, and a lighter rust/amber accent that meets 4.5:1.
- **Quiz feedback colours** stay separate from the accent and themed per light/dark: green for correct, red for incorrect, shifted slightly warm to sit on paper, each ≥ 4.5:1 on its ground and surface. A rust accent next to an incorrect red must still be told apart, and feedback is never signalled by colour alone (the existing text/strike-through cues stay).
- **The level ramp is re-hued** from blue to a single warm hue deepening from A1 to C1, keeping the base design's rule: one ordered hue, badge always shows the level text, badge text ≥ 4.5:1 against its fill. Update `ramp` and `fg` in `src/lib/levels.ts`.
- Every token defined in all three theme states (`:root`, guarded OS-dark, explicit dark) and exposed both as the site's own utilities (`bg-ground`, `text-muted`, …) and through shadcn's variable names.
- **Look checkpoint (designer's call):** the mockup showed light mode only, and only one lesson fragment. So after the palette and panel styling exist, and **before** the frame, sidebar and other pages are built on them, show the owner one fully styled topic page in **both light and dark** and get their sign-off. Adjust tokens there, not later.
- **Ladder mark and favicon are redrawn in the new palette (owner).** Today's favicon is a white ladder on accent blue, and only `src/app/favicon.ico` exists (no SVG source). Redraw the ladder as an SVG (used in the top bar beside the name) on the new rust accent. Regenerate the favicon set (16–256px `.ico`, plus whatever icon files the site already ships) from that SVG, so the browser tab, top bar and site match.
- **Contrast is verified, not eyeballed:** every text/background pairing is checked at ≥ 4.5:1 (≥ 3:1 for large text and UI borders that carry meaning) in both themes before the work is called done.

## 9. Verification

- `npm run typecheck`, `npm run lint`, `npm test`, `npm run build` all pass.
- Checked by eye at 375, 768, 1024, 1280 and 1440px in light and dark: no horizontal page scroll, nothing hidden under the sticky top bar, the `Sheet` opens/closes with keyboard and traps focus, the sidebar highlights the current topic, the rail highlights the section being read.
- New behaviour gets tests: sidebar grouping/ordering/`aria-current`/default-open group, "On this page" built from rendered sections, home card sample topics.

## 10. Left to the builder

- File and component decomposition, including whether the frame lives in the root layout or a nested layout per route group.
- Exact spacing scale, panel padding, frame max-width, shadow (if any), and the final hex values within §8's rules.
- Which further shadcn components to add.
- How scroll-spy is implemented, as long as it respects reduced motion and doesn't cause layout shift.
- Build order. Suggested: shadcn init + token mapping + warm palette (with contrast checks) → styled topic page → **owner look checkpoint (§8.2)** → top bar + frame → sidebar + `Sheet` → topic page panels + rail → home, level, category, 404 → visual pass at all breakpoints.
