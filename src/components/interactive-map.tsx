"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { locations, journeys, getJourneyById } from "@/data/locations";
import type { Location, JourneyId } from "@/data/types";
import { CertaintyBadge } from "@/components/certainty-badge";
import { ScriptureTagList } from "@/components/scripture-tag";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const regionFill: Record<Location["region"], string> = {
  "Northern Kingdom": "fill-gold-300/25",
  "Southern Kingdom": "fill-[#3f5c53]/15",
  Phoenicia: "fill-[#5d8377]/15",
  Aram: "fill-clay-500/12",
  Transjordan: "fill-stone-400/15",
  "Coastal Plain": "fill-gold-200/15",
};

export function InteractiveMap() {
  const searchParams = useSearchParams();
  const initial = searchParams.get("location");
  const [journey, setJourney] = React.useState<JourneyId | "all">("all");
  const [selectedId, setSelectedId] = React.useState<string | null>(initial);

  const activeJourney = journey !== "all" ? getJourneyById(journey) : null;
  const activeLocationIds = new Set(activeJourney?.steps.map((s) => s.locationId));
  const selected = locations.find((l) => l.id === selectedId) ?? null;

  const pathPoints =
    activeJourney?.steps
      .slice()
      .sort((a, b) => a.order - b.order)
      .map((s) => locations.find((l) => l.id === s.locationId))
      .filter((l): l is Location => !!l) ?? [];

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="mb-4 flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={journey === "all" ? "default" : "outline"}
            onClick={() => setJourney("all")}
            className={journey === "all" ? "bg-gold-gradient text-stone-900" : ""}
          >
            All Locations
          </Button>
          {journeys.map((j) => (
            <Button
              key={j.id}
              size="sm"
              variant={journey === j.id ? "default" : "outline"}
              onClick={() => setJourney(j.id)}
              className={journey === j.id ? "bg-gold-gradient text-stone-900" : ""}
            >
              {j.title}
            </Button>
          ))}
        </div>
        {activeJourney && (
          <p className="mb-3 text-sm text-muted-foreground">{activeJourney.description}</p>
        )}

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border/70 bg-parchment-100 dark:bg-stone-800 sm:aspect-[5/4]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            {/* Stylized coastline */}
            <path
              d="M28,0 C24,15 20,28 22,42 C24,58 30,70 26,100 L0,100 L0,0 Z"
              className="fill-[#5d8377]/10 dark:fill-[#5d8377]/10"
            />
            {/* Jordan valley line */}
            <path
              d="M56,10 C55,25 57,40 55,55 C53,68 52,80 50,100"
              stroke="var(--color-stone-400)"
              strokeWidth="0.4"
              strokeDasharray="1.2,1"
              fill="none"
              opacity="0.6"
            />
            {/* Journey path */}
            {pathPoints.length > 1 && (
              <polyline
                points={pathPoints.map((p) => `${p.coordinates.x},${p.coordinates.y}`).join(" ")}
                fill="none"
                stroke={activeJourney?.color}
                strokeWidth="0.6"
                strokeDasharray="2,1.4"
                strokeLinecap="round"
                opacity="0.85"
              />
            )}
          </svg>

          {locations.map((loc) => {
            const dimmed = activeJourney && !activeLocationIds.has(loc.id);
            const isSelected = selectedId === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => setSelectedId(loc.id)}
                style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                className={cn(
                  "group absolute -translate-x-1/2 -translate-y-1/2 transition-all",
                  dimmed && "opacity-30"
                )}
              >
                <span
                  className={cn(
                    "block size-3 rounded-full border-2 border-stone-50 bg-clay-500 shadow transition-transform group-hover:scale-125 dark:border-stone-900",
                    isSelected && "scale-150 ring-2 ring-gold-500 ring-offset-1"
                  )}
                />
                <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-stone-900/85 px-1.5 py-0.5 text-[10px] font-medium text-parchment-50 opacity-0 shadow transition-opacity group-hover:opacity-100 dark:bg-parchment-50/90 dark:text-stone-900">
                  {loc.name}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Marker positions are illustrative, not surveyed coordinates. Regions: {" "}
          {Object.keys(regionFill).join(" · ")}.
        </p>
      </div>

      <div>
        {selected ? (
          <div className="sticky top-20 rounded-xl border border-border/70 bg-card p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-heading text-xl font-semibold">{selected.name}</h3>
              <button onClick={() => setSelectedId(null)} className="rounded-full p-1 hover:bg-muted">
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground">{selected.region}</span>
              <CertaintyBadge level={selected.certainty} />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{selected.description}</p>
            <p className="mt-3 text-sm">
              <span className="font-medium">Why it matters: </span>
              <span className="text-muted-foreground">{selected.importance}</span>
            </p>
            <div className="mt-4">
              <ScriptureTagList refs={selected.scriptureRefs} />
            </div>
            {selected.relatedPeople && selected.relatedPeople.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.relatedPeople.map((pid) => (
                  <Link
                    key={pid}
                    href={`/people/${pid}`}
                    className="rounded-full border border-gold-500/30 bg-gold-100/50 px-2.5 py-1 text-xs font-medium capitalize text-stone-700 hover:bg-gold-100 dark:bg-gold-700/10 dark:text-gold-200"
                  >
                    {pid.replace(/-/g, " ")}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border/70 p-8 text-center text-sm text-muted-foreground">
            Select a marker on the map, or choose a journey above, to see details here.
          </div>
        )}
      </div>
    </div>
  );
}
