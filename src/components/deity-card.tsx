import { canaaniteDeities, getDeityById } from "@/data/deities";
import { CertaintyBadge } from "@/components/certainty-badge";
import { ZoomableImage } from "@/components/zoomable-image";
import { cn } from "@/lib/utils";

export function DeityCard({ id, className }: { id: string; className?: string }) {
  const deity = getDeityById(id);
  if (!deity) return null;
  return (
    <div className={cn("flex flex-col overflow-hidden rounded-xl border border-border/70 bg-card text-left", className)}>
      <ZoomableImage
        src={deity.image.src}
        alt={deity.image.alt}
        thumbnailClassName="relative aspect-[4/3] w-full bg-stone-200 dark:bg-stone-800"
        className="h-full w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="font-heading text-lg font-semibold">
            {deity.name}
            {deity.alternateNames && (
              <span className="ml-1.5 text-sm font-normal text-muted-foreground">({deity.alternateNames.join(", ")})</span>
            )}
          </p>
        </div>
        <p className="text-sm font-medium text-gold-700 dark:text-gold-400">{deity.epithet}</p>
        <div className="flex flex-wrap gap-1">
          {deity.domain.map((d) => (
            <span key={d} className="rounded-full border border-gold-500/30 bg-gold-100/40 px-2 py-0.5 text-[11px] font-medium text-stone-700 dark:bg-gold-700/10 dark:text-gold-200">
              {d}
            </span>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">{deity.origin}</p>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Worship &amp; practice</p>
          <ul className="mt-1 list-disc space-y-1 pl-4 text-xs text-muted-foreground">
            {deity.worshipPractices.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </div>
        <p className="text-xs"><span className="font-semibold text-foreground">Cult sites: </span><span className="text-muted-foreground">{deity.cultSites}</span></p>
        <p className="text-xs"><span className="font-semibold text-foreground">Brought to Israel by: </span><span className="text-muted-foreground">{deity.encouragedBy}</span></p>
        <div className="mt-auto space-y-1 border-t border-border/60 pt-2">
          <div className="flex items-center gap-1.5">
            <CertaintyBadge level={deity.imageCertainty} />
          </div>
          {deity.imageNote && <p className="text-[11px] italic text-muted-foreground">{deity.imageNote}</p>}
          <p className="text-[11px] text-muted-foreground">{deity.image.caption}</p>
          <p className="text-[10px] text-muted-foreground/80">{deity.image.attribution}</p>
        </div>
      </div>
    </div>
  );
}

export function DeityGrid({ ids, className }: { ids: string[]; className?: string }) {
  const deities = ids.map((id) => canaaniteDeities.find((d) => d.id === id)).filter(Boolean);
  if (!deities.length) return null;
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {ids.map((id) => (
        <DeityCard key={id} id={id} />
      ))}
    </div>
  );
}
