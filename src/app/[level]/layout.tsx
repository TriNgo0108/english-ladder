import { TopicTree } from "@/components/nav/TopicTree";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LevelSchema } from "@/content/schema";

/** Level, category and topic pages: the level's topic list beside the content from lg up. */
export default async function LevelLayout({ children, params }: LayoutProps<"/[level]">) {
  const level = LevelSchema.parse((await params).level);
  return (
    <div className="mx-auto grid w-full max-w-screen-2xl gap-8 px-4 py-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:px-8">
      <aside className="hidden lg:block">
        {/* Sticky on a wrapper: ScrollArea's own `relative` would turn top-24 into an offset. */}
        <div className="sticky top-24">
          <ScrollArea className="h-[calc(100dvh-7rem)] pr-3">
            <TopicTree key={level} level={level} />
          </ScrollArea>
        </div>
      </aside>
      {children}
    </div>
  );
}
