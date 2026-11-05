"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { LevelBadge } from "@/components/LevelBadge";
import { categoryMeta } from "@/lib/categories";
import { searchTopics, type SearchEntry } from "@/lib/search-index";

export function Search() {
  const uid = useId();
  const listId = `${uid}-results`;
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchEntry[] | null>(null);
  const [active, setActive] = useState(-1);
  const loading = useRef(false);
  const listRef = useRef<HTMLUListElement>(null);

  // First focus or input pulls the corpus text in as a separate chunk.
  function ensureIndex() {
    if (index || loading.current) return;
    loading.current = true;
    import("@/lib/search-data").then(
      (m) => setIndex(m.loadIndex()),
      () => {
        loading.current = false;
      },
    );
  }

  const results = index ? searchTopics(index, query) : [];
  const hasQuery = query.trim() !== "";
  const open = hasQuery && index !== null;
  const optionId = (i: number) => `${uid}-opt-${i}`;

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown" && results.length) {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp" && results.length) {
      e.preventDefault();
      setActive((a) => (a <= 0 ? results.length - 1 : a - 1));
    } else if (e.key === "Enter" && active >= 0 && results[active]) {
      e.preventDefault();
      document.getElementById(optionId(active))?.click();
    } else if (e.key === "Escape") {
      setQuery("");
      setActive(-1);
    }
  }

  function reset() {
    setQuery("");
    setActive(-1);
  }

  return (
    <div className="relative font-sans">
      <label htmlFor={`${uid}-input`} className="sr-only">
        Search topics
      </label>
      <input
        id={`${uid}-input`}
        type="search"
        role="combobox"
        aria-expanded={open && results.length > 0}
        aria-controls={open && results.length > 0 ? listId : undefined}
        aria-autocomplete="list"
        aria-activedescendant={open && active >= 0 && results[active] ? optionId(active) : undefined}
        autoComplete="off"
        placeholder="Search topics"
        value={query}
        onFocus={ensureIndex}
        onChange={(e) => {
          ensureIndex();
          setQuery(e.target.value);
          setActive(-1);
        }}
        onKeyDown={onKeyDown}
        className="min-h-11 w-56 rounded border border-border bg-surface px-3 text-text transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      />
      <div className="absolute right-0 z-10 mt-1 w-80 max-w-[90vw]">
        {open && results.length > 0 && (
          <ul
            id={listId}
            ref={listRef}
            role="listbox"
            aria-label="Search results"
            className="rounded border border-border bg-surface shadow-lg"
          >
            {results.map((r, i) => (
              <li key={r.href} role="presentation">
                <Link
                  id={optionId(i)}
                  role="option"
                  aria-selected={i === active}
                  href={r.href}
                  tabIndex={-1}
                  onClick={reset}
                  className={`flex min-h-11 items-center gap-2 px-3 py-2 transition-colors duration-200 hover:bg-border/40 ${
                    i === active ? "bg-border/40 outline-2 -outline-offset-2 outline-accent" : ""
                  }`}
                >
                  <span className="grow">{r.title}</span>
                  <LevelBadge level={r.level} />
                  <span className="text-sm text-muted">{categoryMeta(r.category).label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {open && results.length === 0 && (
          <p
            role="status"
            className="rounded border border-border bg-surface px-3 py-2 text-sm text-muted shadow-lg"
          >
            No topics match
          </p>
        )}
      </div>
    </div>
  );
}
