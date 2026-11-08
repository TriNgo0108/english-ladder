"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { LevelBadge } from "@/components/LevelBadge";
import { categoryMeta } from "@/lib/categories";
import { BASE_PATH } from "@/lib/site";
import { searchTopics, type SearchEntry } from "@/lib/search-index";

export function Search() {
  const uid = useId();
  const listId = `${uid}-results`;
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchEntry[] | null>(null);
  const [active, setActive] = useState(-1);
  const [dismissed, setDismissed] = useState(false);
  const loading = useRef(false);
  const listRef = useRef<HTMLUListElement>(null);

  // First focus or input fetches the prebuilt index; a failure allows a later retry.
  function ensureIndex() {
    if (index || loading.current) return;
    loading.current = true;
    fetch(`${BASE_PATH}/search-index.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`search index: ${res.status}`);
        return res.json() as Promise<SearchEntry[]>;
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("search index: not an array");
        setIndex(data);
      })
      .catch(() => {
        loading.current = false;
      });
  }

  const results = index ? searchTopics(index, query) : [];
  const hasQuery = query.trim() !== "";
  const open = hasQuery && index !== null && !dismissed;
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
    <div
      className="font-sans sm:relative"
      onBlur={(e) => {
        // Close when focus leaves the whole combobox (input + results).
        if (!e.currentTarget.contains(e.relatedTarget)) setDismissed(true);
      }}
    >
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
        onFocus={() => {
          ensureIndex();
          setDismissed(false);
        }}
        onChange={(e) => {
          ensureIndex();
          setDismissed(false);
          setQuery(e.target.value);
          setActive(-1);
        }}
        onKeyDown={onKeyDown}
        className="min-h-11 w-36 rounded-md border border-control bg-surface px-3 sm:w-56 text-text transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      />
      <div className="absolute right-0 z-10 mt-1 w-80 max-w-[90vw]">
        {open && results.length > 0 && (
          <ul
            id={listId}
            ref={listRef}
            role="listbox"
            aria-label="Search results"
            className="rounded border border-border bg-surface shadow-lg"
            // Keep focus on the input so blur never fires before the click lands.
            onMouseDown={(e) => e.preventDefault()}
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
                  className={`flex min-h-11 items-center gap-2 px-3 py-2 transition-colors duration-200 hover:bg-subtle ${
                    i === active ? "bg-border/40 outline-2 -outline-offset-2 outline-accent" : ""
                  }`}
                >
                  <span className="grow">{r.title}</span>
                  <LevelBadge level={r.level} />
                  <span className="text-base text-muted">{categoryMeta(r.category).label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {open && results.length === 0 && (
          <p
            role="status"
            className="rounded border border-border bg-surface px-3 py-2 text-base text-muted shadow-lg"
          >
            No topics match
          </p>
        )}
      </div>
    </div>
  );
}
