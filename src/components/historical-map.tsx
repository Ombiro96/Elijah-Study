import { getMapById } from "@/data/maps";
import { cn } from "@/lib/utils";

/**
 * Renders a real, sourced historical map (Wikimedia Commons / National
 * Library of Israel scans) with visible attribution — never AI-generated
 * map art.
 */
export function HistoricalMapFigure({ mapId, className }: { mapId: string; className?: string }) {
  const map = getMapById(mapId);
  if (!map) return null;
  return (
    <figure className={cn("mx-auto w-full max-w-2xl", className)}>
      <div className="overflow-hidden rounded-xl border border-border/70 bg-stone-100 shadow-sm dark:bg-stone-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={map.image.src} alt={map.image.alt} className="h-auto w-full object-contain" loading="lazy" />
      </div>
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{map.image.caption}</span>
        <br />
        <a href={map.image.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-gold-700 hover:underline dark:text-gold-400">
          {map.image.attribution}
        </a>
      </figcaption>
    </figure>
  );
}
