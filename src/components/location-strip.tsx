import Link from "next/link";
import { MapPin } from "lucide-react";
import { getLocationById } from "@/data/locations";

export function LocationStrip({ ids }: { ids: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {ids.map((id) => {
        const loc = getLocationById(id);
        if (!loc) return null;
        return (
          <Link
            key={id}
            href={`/maps?location=${id}`}
            className="group rounded-lg border border-border/70 bg-card/50 p-3.5 transition-colors hover:border-gold-500/40"
          >
            <p className="flex items-center gap-1.5 font-heading text-base font-semibold">
              <MapPin className="size-3.5 text-clay-500" /> {loc.name}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{loc.region}</p>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{loc.description}</p>
          </Link>
        );
      })}
    </div>
  );
}
