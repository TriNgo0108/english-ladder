"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, type ReactNode } from "react";
import { locateNav, type NavByLevel, type NavLocation } from "@/lib/nav-location";

const NavContext = createContext<NavByLevel>({});

/** Supplies the site's topic lists (built once on the server) to every nav component. */
export function NavProvider({ navByLevel, children }: { navByLevel: NavByLevel; children: ReactNode }) {
  return <NavContext.Provider value={navByLevel}>{children}</NavContext.Provider>;
}

export function useNavByLevel(): NavByLevel {
  return useContext(NavContext);
}

/** Where the reader is; empty on any path that is not a real page. */
export function useNavLocation(): NavLocation {
  return locateNav(usePathname(), useContext(NavContext));
}
