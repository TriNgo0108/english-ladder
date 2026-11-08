"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark" | "system";

const STORAGE_KEY = "theme";
const NEXT: Record<Mode, Mode> = { light: "dark", dark: "system", system: "light" };

function readMode(): Mode {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : "system";
  } catch {
    return "system";
  }
}

function applyMode(mode: Mode) {
  const root = document.documentElement;
  try {
    if (mode === "system") {
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      window.localStorage.setItem(STORAGE_KEY, mode);
    }
  } catch {
    // Storage unavailable: the choice still applies for this page view.
  }
  if (mode === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", mode);
  }
}

function Icon({ mode }: { mode: Mode }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (mode === "light") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    );
  }
  if (mode === "dark") {
    return (
      <svg {...common}>
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

export function ThemeToggle() {
  // The server cannot know the stored theme, so start from a stable value
  // and read the real one after mount.
  const [mode, setMode] = useState<Mode>("system");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sync from localStorage after mount
    setMode(readMode());
  }, []);

  const next = NEXT[mode];

  return (
    <button
      type="button"
      aria-label={`Theme: ${mode}. Switch to ${next}`}
      onClick={() => {
        applyMode(next);
        setMode(next);
      }}
      className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-control bg-surface text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <Icon mode={mode} />
    </button>
  );
}
