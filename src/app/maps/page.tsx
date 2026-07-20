import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { InteractiveMap } from "@/components/interactive-map";

export const metadata: Metadata = { title: "Maps — The Prophet Elijah" };

export default function MapsPage() {
  return (
    <div>
      <PageHero
        kicker="Reference"
        title="The geography of the story"
        subtitle="From Joshua's conquest to Elisha's ministry, every significant location is mapped here. Filter by journey, or click any marker for its description, importance, and scripture references."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-sm text-muted-foreground">Loading map…</div>}>
          <InteractiveMap />
        </Suspense>
      </div>
    </div>
  );
}
