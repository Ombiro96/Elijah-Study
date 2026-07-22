import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { InteractiveMap } from "@/components/interactive-map";
import { HistoricalMapFigure } from "@/components/historical-map";
import { historicalMaps } from "@/data/maps";

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
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-semibold">Historical Maps</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Real, sourced maps from public-domain and CC-licensed collections — the same three
          periods used throughout the teaching slides — for the political shape of the land at
          each stage of the story.
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {historicalMaps.map((m) => (
            <div key={m.id}>
              <HistoricalMapFigure mapId={m.id} />
              <p className="mt-3 text-sm text-muted-foreground">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
