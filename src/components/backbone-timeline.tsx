import Link from "next/link";
import { timelineEvents } from "@/data/timeline";
import { getPersonById } from "@/data/people";
import { getLocationById } from "@/data/locations";
import { ScriptureTagList } from "@/components/scripture-tag";
import { CertaintyBadge } from "@/components/certainty-badge";
import { Badge } from "@/components/ui/badge";

const eraColors: Record<string, string> = {
  Conquest: "border-l-[#6b7d4f]",
  Judges: "border-l-stone-400",
  "United Kingdom": "border-l-gold-400",
  "Divided Kingdom": "border-l-[#8a4a35]",
  "Elijah's Ministry": "border-l-clay-500",
  "Later Kingdom": "border-l-[#3f5c53]",
  "New Testament": "border-l-gold-600",
};

export function BackboneTimeline() {
  const withEraFlags = timelineEvents.map((e, i) => ({
    event: e,
    showEra: i === 0 || timelineEvents[i - 1].era !== e.era,
  }));

  return (
    <div className="space-y-0">
      {withEraFlags.map(({ event: e, showEra }) => {
        return (
          <div key={e.id}>
            {showEra && (
              <p className="mb-3 mt-10 first:mt-0 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
                {e.era}
              </p>
            )}
            <div className={`mb-4 border-l-4 ${eraColors[e.era] ?? "border-l-border"} rounded-r-lg bg-card/60 p-4`}>
              <div className="flex flex-wrap items-center gap-2">
                {e.dateBC && <Badge variant="outline" className="font-mono text-xs">{e.dateBC}</Badge>}
                <p className="font-heading text-lg font-semibold">{e.label}</p>
                <CertaintyBadge level={e.certainty} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <ScriptureTagList refs={e.scriptureRefs} />
                {e.personIds?.map((pid) => {
                  const p = getPersonById(pid);
                  if (!p) return null;
                  return (
                    <Link key={pid} href={`/people/${pid}`} className="text-xs font-medium text-gold-700 hover:underline dark:text-gold-400">
                      {p.name} →
                    </Link>
                  );
                })}
                {e.locationIds?.map((lid) => {
                  const l = getLocationById(lid);
                  if (!l) return null;
                  return (
                    <Link key={lid} href={`/maps?location=${lid}`} className="text-xs font-medium text-muted-foreground hover:underline">
                      📍 {l.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
