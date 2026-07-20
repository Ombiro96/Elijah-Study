"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { locations, journeys, getJourneyById } from "@/data/locations";
import type { Location, JourneyId, FeatureType } from "@/data/types";
import { CertaintyBadge } from "@/components/certainty-badge";
import { ScriptureTagList } from "@/components/scripture-tag";
import { MapLegend, regionColorVar, regionLabel } from "@/components/map-legend";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X, Landmark, Flame, Triangle } from "lucide-react";

const regionSlug: Record<Location["region"], string> = {
  "Northern Kingdom": "northern",
  "Southern Kingdom": "southern",
  Phoenicia: "phoenicia",
  Aram: "aram",
  Transjordan: "transjordan",
  "Coastal Plain": "coastal",
};

/** Soft political-territory washes over each region's heartland cluster — approximate, not precise borders. */
const regionBlobs: { region: Location["region"]; cx: number; cy: number; rx: number; ry: number }[] = [
  { region: "Northern Kingdom", cx: 45, cy: 38, rx: 18, ry: 21 },
  { region: "Southern Kingdom", cx: 50, cy: 72, rx: 13, ry: 18 },
  { region: "Phoenicia", cx: 33, cy: 16, rx: 9, ry: 14 },
  { region: "Aram", cx: 64, cy: 8, rx: 9, ry: 8 },
  { region: "Transjordan", cx: 59, cy: 50, rx: 10, ry: 15 },
];

/** Soft brown highland washes suggesting relief, hillshade-style, without real elevation data. */
const highlandBlobs = [
  { cx: 38, cy: 30, rx: 9, ry: 10 }, // Galilee / Carmel range
  { cx: 48, cy: 50, rx: 10, ry: 18 }, // Samaria-Bethel central ridge
  { cx: 49, cy: 72, rx: 8, ry: 14 }, // Judean hill country
  { cx: 62, cy: 42, rx: 8, ry: 12 }, // Gilead / Transjordan plateau
];

const regionTextLabels: { region: Location["region"]; x: number; y: number; small?: boolean }[] = [
  { region: "Northern Kingdom", x: 45, y: 27 },
  { region: "Southern Kingdom", x: 50, y: 74 },
  { region: "Phoenicia", x: 26, y: 17, small: true },
  { region: "Aram", x: 64, y: 3, small: true },
  { region: "Transjordan", x: 64, y: 56, small: true },
];

type MarkerKind = "mountain" | "temple" | "shrine" | "city";

function markerKind(featureType: FeatureType): MarkerKind {
  if (featureType === "mountain") return "mountain";
  if (featureType === "temple") return "temple";
  if (featureType === "shrine") return "shrine";
  return "city";
}

function isBig(featureType: FeatureType) {
  return featureType === "capital" || featureType === "fortress";
}

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

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border-2 border-[var(--map-ink)]/30 shadow-inner sm:aspect-[5/4]" style={{ backgroundColor: "var(--map-land)" }}>
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="seaGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--region-sea)" stopOpacity="0.95" />
                <stop offset="100%" stopColor="var(--region-sea)" stopOpacity="0.55" />
              </linearGradient>
              {highlandBlobs.map((b, i) => (
                <radialGradient key={i} id={`highland-${i}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--map-highland)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--map-highland)" stopOpacity="0" />
                </radialGradient>
              ))}
              {regionBlobs.map((b) => (
                <radialGradient key={b.region} id={`glow-${regionSlug[b.region]}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={regionColorVar[b.region]} stopOpacity="0.5" />
                  <stop offset="65%" stopColor={regionColorVar[b.region]} stopOpacity="0.24" />
                  <stop offset="100%" stopColor={regionColorVar[b.region]} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            {/* Highland relief washes */}
            {highlandBlobs.map((b, i) => (
              <ellipse key={i} cx={b.cx} cy={b.cy} rx={b.rx} ry={b.ry} fill={`url(#highland-${i})`} />
            ))}

            {/* The Great Sea (Mediterranean) */}
            <path
              d="M0,0 L0,100 L24,100 C26,90 22,80 25,70 C28,61 30,53 27,45 C24,39 25,36 29,33 C33,30 35,27 31,21 C28,16 26,11 30,6 C28,2 24,1 21,0 Z"
              fill="url(#seaGradient)"
            />

            {/* Dead Sea */}
            <ellipse cx="53" cy="78" rx="3.4" ry="6.5" fill="var(--region-sea)" opacity="0.7" />

            {/* Region political washes + soft outline */}
            {regionBlobs.map((b) => (
              <ellipse key={b.region} cx={b.cx} cy={b.cy} rx={b.rx} ry={b.ry} fill={`url(#glow-${regionSlug[b.region]})`} />
            ))}
            {regionBlobs.map((b) => (
              <ellipse
                key={`${b.region}-outline`}
                cx={b.cx}
                cy={b.cy}
                rx={b.rx}
                ry={b.ry}
                fill="none"
                stroke={regionColorVar[b.region]}
                strokeWidth="0.35"
                strokeDasharray="1.4,1.2"
                opacity="0.55"
              />
            ))}

            {/* Jordan River */}
            <path
              d="M55,7 C56,20 58,32 56,45 C54,55 58,62 56,70 C55,74 54,76 53,78"
              stroke="var(--region-sea)"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
              opacity="0.35"
            />
            <path
              d="M55,7 C56,20 58,32 56,45 C54,55 58,62 56,70 C55,74 54,76 53,78"
              stroke="var(--region-sea)"
              strokeWidth="0.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.95"
            />

            {/* Kishon brook, below Carmel */}
            <path d="M35,34 C38,35 41,35 44,37" stroke="var(--region-sea)" strokeWidth="0.4" fill="none" opacity="0.8" />

            {/* Journey indicator from Beersheba toward Horeb, off the regional map */}
            <path
              d="M46,84 C43,90 40,95 38,100"
              stroke="var(--map-ink)"
              strokeWidth="0.45"
              strokeDasharray="1.4,1.2"
              fill="none"
              opacity="0.45"
            />

            {/* Selected journey path */}
            {pathPoints.length > 1 && (
              <polyline
                points={pathPoints.map((p) => `${p.coordinates.x},${p.coordinates.y}`).join(" ")}
                fill="none"
                stroke={activeJourney?.color}
                strokeWidth="0.6"
                strokeDasharray="2,1.4"
                strokeLinecap="round"
                opacity="0.9"
              />
            )}
          </svg>

          {/* Physical-feature labels (HTML, so type is never distorted by the stretched viewBox) */}
          <span
            style={{ left: "11%", top: "48%" }}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-heading text-[11px] italic tracking-[0.2em] opacity-80 sm:text-sm"
            aria-hidden
          >
            <span style={{ writingMode: "vertical-rl", color: "var(--map-ink)" }}>THE GREAT SEA</span>
          </span>
          <span
            style={{ left: "60%", top: "22%", color: "var(--map-ink)" }}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 -rotate-6 whitespace-nowrap font-heading text-[9px] italic opacity-70 sm:text-[11px]"
          >
            Jordan R.
          </span>
          <span
            style={{ left: "53%", top: "78%", color: "var(--map-ink)" }}
            className="pointer-events-none absolute -translate-x-1/2 translate-y-2 whitespace-nowrap font-heading text-[9px] italic opacity-75"
          >
            Dead Sea
          </span>
          <span
            style={{ left: "38%", top: "100%", color: "var(--map-ink)" }}
            className="pointer-events-none absolute -translate-x-1/2 translate-y-1 whitespace-nowrap text-[9px] italic opacity-70"
          >
            ↓ ~40 days to Horeb / Sinai (not to scale)
          </span>

          {/* Region text labels */}
          {regionTextLabels.map((l) => (
            <span
              key={l.region}
              style={{ left: `${l.x}%`, top: `${l.y}%`, color: regionColorVar[l.region] }}
              className={cn(
                "pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-heading font-semibold uppercase tracking-[0.12em] opacity-70",
                l.small ? "text-[10px]" : "text-xs sm:text-sm"
              )}
            >
              {l.region === "Northern Kingdom" ? "Israel" : l.region === "Southern Kingdom" ? "Judah" : l.region}
            </span>
          ))}

          {/* Title tag, atlas-plate style */}
          <div
            className="absolute left-2 top-2 rounded-sm bg-[var(--map-ink)] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-parchment-50 shadow sm:text-xs"
          >
            {activeJourney ? activeJourney.title : "The World of Elijah"}
          </div>

          {/* Compass rose */}
          <div className="absolute bottom-3 right-3 flex flex-col items-center text-[var(--map-ink)] opacity-70">
            <span className="text-[10px] font-bold leading-none">N</span>
            <span className="text-xs leading-none">↑</span>
          </div>


          {/* Markers + persistent labels */}
          {locations.map((loc) => {
            const dimmed = activeJourney && !activeLocationIds.has(loc.id);
            const isSelected = selectedId === loc.id;
            const kind = markerKind(loc.featureType);
            const big = isBig(loc.featureType);
            const color = regionColorVar[loc.region];
            const hollow = !!loc.uncertainLocation;
            const nearRightEdge = loc.coordinates.x > 82;
            const nearBottomEdge = loc.coordinates.y > 92;
            const physical = kind === "mountain";

            return (
              <div
                key={loc.id}
                style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                className={cn("group absolute -translate-x-1/2 -translate-y-1/2", dimmed && "opacity-30")}
              >
                <button onClick={() => setSelectedId(loc.id)} className="relative block">
                  {kind === "mountain" && (
                    <Triangle
                      className={cn("size-4 transition-transform group-hover:scale-125", isSelected && "scale-150")}
                      style={{ color }}
                      fill={hollow ? "none" : color}
                      strokeWidth={2}
                    />
                  )}
                  {(kind === "temple" || kind === "shrine") && (
                    <span
                      className={cn(
                        "flex size-5 items-center justify-center rounded-full border-2 shadow transition-transform group-hover:scale-125",
                        isSelected && "scale-150 ring-2 ring-gold-500 ring-offset-1"
                      )}
                      style={{
                        backgroundColor: hollow ? "transparent" : color,
                        borderColor: color,
                      }}
                    >
                      {kind === "temple" ? (
                        <Landmark className="size-3" style={{ color: hollow ? color : "var(--map-land)" }} strokeWidth={2.5} />
                      ) : (
                        <Flame className="size-3" style={{ color: hollow ? color : "var(--map-land)" }} strokeWidth={2.5} />
                      )}
                    </span>
                  )}
                  {kind === "city" && (
                    <span
                      className={cn(
                        "block rounded-full border-2 shadow transition-transform group-hover:scale-125",
                        big ? "size-4" : "size-2.5",
                        isSelected && "scale-150 ring-2 ring-gold-500 ring-offset-1"
                      )}
                      style={{
                        backgroundColor: hollow ? "var(--map-land)" : color,
                        borderColor: color,
                      }}
                    />
                  )}
                </button>
                <span
                  className={cn(
                    "pointer-events-none absolute top-1/2 whitespace-nowrap font-heading text-[10px] font-medium leading-none sm:text-[11px]",
                    physical && "italic",
                    nearRightEdge ? "right-full mr-1.5 -translate-y-1/2 text-right" : "left-full ml-1.5 -translate-y-1/2",
                    nearBottomEdge && "top-auto bottom-full mb-1 translate-y-0 left-1/2 -translate-x-1/2 text-center"
                  )}
                  style={{ color: "var(--map-ink)" }}
                >
                  {loc.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-4">
          <MapLegend />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Styled as an illustrative historical atlas plate: marker positions and region outlines
          are approximate, not surveyed coordinates. Regional boundaries in particular were never
          fixed straight lines in antiquity.
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
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <span className="size-2.5 rounded-full" style={{ backgroundColor: regionColorVar[selected.region] }} />
                {regionLabel[selected.region]}
              </span>
              <CertaintyBadge level={selected.certainty} />
              {selected.uncertainLocation && (
                <span className="rounded-full border border-dashed border-muted-foreground/40 px-2 py-0.5 text-[11px] text-muted-foreground">
                  Precise site disputed
                </span>
              )}
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
