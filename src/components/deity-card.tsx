import Link from "next/link";
import { canaaniteDeities, getDeityById } from "@/data/deities";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function DeityCard({ id, className }: { id: string; className?: string }) {
  const deity = getDeityById(id);
  if (!deity) return null;
  return (
    <Link href={`/deities/${deity.id}`} className={cn("group block h-full", className)}>
      <Card className="h-full overflow-hidden border-border/70 transition-all group-hover:-translate-y-0.5 group-hover:border-gold-500/40 group-hover:shadow-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={deity.image.src}
          alt={deity.image.alt}
          className="aspect-[4/3] w-full bg-stone-200 object-cover transition-transform duration-300 group-hover:scale-[1.02] dark:bg-stone-800"
          loading="lazy"
        />
        <CardContent className="space-y-1.5 pt-4">
          <p className="font-heading text-lg font-semibold">
            {deity.name}
            {deity.alternateNames && (
              <span className="ml-1.5 text-sm font-normal text-muted-foreground">({deity.alternateNames.join(", ")})</span>
            )}
          </p>
          <p className="text-sm font-medium text-gold-700 dark:text-gold-400">{deity.epithet}</p>
          <p className="line-clamp-2 text-sm text-muted-foreground">{deity.origin}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export function DeityGrid({ ids, className }: { ids: string[]; className?: string }) {
  const deities = ids.map((id) => canaaniteDeities.find((d) => d.id === id)).filter(Boolean);
  if (!deities.length) return null;
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {ids.map((id) => (
        <DeityCard key={id} id={id} />
      ))}
    </div>
  );
}
