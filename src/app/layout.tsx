import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import { Search } from "@/components/Search";
import { ThemeToggle } from "@/components/ThemeToggle";
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
      <body className="min-h-full flex flex-col font-sans">
        <header className="flex items-center justify-end gap-2 p-2">
          <Search />
          <ThemeToggle />
        </header>
        {children}
      </body>
    </html>
  );
}
