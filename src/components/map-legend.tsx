import { Landmark, Flame, Triangle, Circle, Star } from "lucide-react";
import type { Location } from "@/data/types";

export const regionColorVar: Record<Location["region"], string> = {
  "Northern Kingdom": "var(--region-northern)",
  "Southern Kingdom": "var(--region-southern)",
  Phoenicia: "var(--region-phoenicia)",
  Aram: "var(--region-aram)",
  Transjordan: "var(--region-transjordan)",
  "Coastal Plain": "var(--region-sea)",
};

export const regionLabel: Record<Location["region"], string> = {
  "Northern Kingdom": "Northern Kingdom (Israel)",
  "Southern Kingdom": "Southern Kingdom (Judah)",
  Phoenicia: "Phoenicia",
  Aram: "Aram (Syria)",
  Transjordan: "Transjordan",
  "Coastal Plain": "Coastal Plain",
};

const regionOrder: Location["region"][] = [
  "Northern Kingdom",
  "Southern Kingdom",
  "Phoenicia",
  "Aram",
  "Transjordan",
];

/** Fuller legend shown below the map, for readers who want the full picture. */
export function MapLegend() {
  return (
    <div className="grid gap-5 rounded-xl border border-border/70 bg-card/50 p-4 sm:grid-cols-2">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Regions
        </p>
        <ul className="space-y-1.5">
          {regionOrder.map((r) => (
            <li key={r} className="flex items-center gap-2 text-sm">
              <span className="size-3 shrink-0 rounded-full" style={{ backgroundColor: regionColorVar[r] }} />
              {regionLabel[r]}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Map symbols
        </p>
        <ul className="space-y-1.5 text-sm">
          <li className="flex items-center gap-2"><Circle className="size-3.5 shrink-0 fill-current text-muted-foreground" /> City (location well attested)</li>
          <li className="flex items-center gap-2"><Circle className="size-3.5 shrink-0 text-muted-foreground" /> City (precise site disputed)</li>
          <li className="flex items-center gap-2"><Star className="size-3.5 shrink-0 fill-current text-gold-600 dark:text-gold-400" /> Capital city</li>
          <li className="flex items-center gap-2"><Triangle className="size-3.5 shrink-0 fill-current text-muted-foreground" /> Mountain peak</li>
          <li className="flex items-center gap-2"><Landmark className="size-3.5 shrink-0 text-muted-foreground" /> Temple</li>
          <li className="flex items-center gap-2"><Flame className="size-3.5 shrink-0 text-muted-foreground" /> Rival shrine / altar</li>
        </ul>
      </div>
    </div>
  );
}
