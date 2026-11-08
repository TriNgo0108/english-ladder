import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import { NavProvider } from "@/components/nav/NavContext";
import { SiteHeader } from "@/components/nav/SiteHeader";
import { buildAllNav } from "@/lib/nav";
import { BASE_PATH, SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_ORIGIN}${BASE_PATH}/`),
  title: { default: SITE_NAME, template: `%s - ${SITE_NAME}` },
  description:
    "Free English lessons for every CEFR level, from A1 to C1. Clear explanations, examples, and quizzes with instant feedback.",
  openGraph: { siteName: SITE_NAME, type: "website", locale: "en" },
};

// Runs before first paint: stamps data-theme only for a valid stored value.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* Extensions (e.g. VPN/ad-block) inject attributes on <body> before hydration. */}
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        <NavProvider navByLevel={buildAllNav()}>
          <SiteHeader />
          {children}
        </NavProvider>
      </body>
    </html>
  );
}
