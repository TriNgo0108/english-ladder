import type { ReactNode } from "react";
import { NavProvider } from "@/components/nav/NavContext";
import { buildAllNav } from "@/lib/nav";

const navByLevel = buildAllNav();

/** Wraps a nav component in the provider the root layout supplies. Test-only. */
export function withNav(ui: ReactNode) {
  return <NavProvider navByLevel={navByLevel}>{ui}</NavProvider>;
}
