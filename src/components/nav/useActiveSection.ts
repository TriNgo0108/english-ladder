"use client";

import { useEffect, useState } from "react";

/** The band, under the sticky top bar, where a heading counts as "being read". */
const TOP_OFFSET = 96;

/**
 * The id of the section being read: the heading in the reading band, else the
 * last one that scrolled up past it. Starts at the first id.
 */
export function useActiveSection(ids: string[]): string | undefined {
  const [active, setActive] = useState<string | undefined>(ids[0]);
  const key = ids.join(" ");

  useEffect(() => {
    const list = key.split(" ").filter(Boolean);
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        let leftDownward: string | undefined;
        for (const e of entries) {
          const id = (e.target as HTMLElement).id;
          if (e.isIntersecting) visible.add(id);
          else {
            visible.delete(id);
            if (e.boundingClientRect.top > TOP_OFFSET) leftDownward = id;
          }
        }
        const first = list.find((id) => visible.has(id));
        if (first) setActive(first);
        else if (leftDownward) {
          // Scrolling back up past a heading: the section above it is being read again.
          const i = list.indexOf(leftDownward);
          setActive((cur) => (cur === leftDownward ? list[Math.max(0, i - 1)] : cur));
        }
      },
      { rootMargin: `-${TOP_OFFSET}px 0px -60% 0px` },
    );
    for (const id of list) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [key]);

  return active;
}
