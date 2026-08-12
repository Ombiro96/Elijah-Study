import type { ParallelsBlock } from "@/data/slides";
import { cn } from "@/lib/utils";

/**
 * Two figures set side by side, one parallel per row, with the point of
 * contact named in the middle — used for the Elijah / John the Baptist slide.
 */
export function ParallelLivesView({
  parallels,
  className,
}: {
  parallels: ParallelsBlock;
  className?: string;
}) {
  const rowGrid = "grid gap-1.5 sm:grid-cols-[1fr_7.5rem_1fr] sm:items-baseline sm:gap-x-5";

  return (
    <div className={cn("w-full max-w-5xl text-left", className)}>
      <div className={cn(rowGrid, "pb-3")}>
        <div className="order-2 sm:order-1 sm:text-right">
          <p className="font-heading text-2xl font-semibold sm:text-3xl">{parallels.leftName}</p>
          {parallels.leftSub && (
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              {parallels.leftSub}
            </p>
          )}
        </div>
        <span className="order-1 hidden sm:order-2 sm:block" />
        <div className="order-3">
          <p className="font-heading text-2xl font-semibold sm:text-3xl">{parallels.rightName}</p>
          {parallels.rightSub && (
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              {parallels.rightSub}
            </p>
          )}
        </div>
      </div>

      {parallels.rows.map((row) => (
        <div key={row.label} className={cn(rowGrid, "border-t border-border/60 py-3")}>
          <p className="order-2 text-sm text-foreground sm:order-1 sm:text-right sm:text-base">
            {row.left}
          </p>
          <span className="order-1 justify-self-start rounded-full border border-gold-500/40 bg-gold-100/50 px-2.5 py-0.5 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-gold-700 sm:order-2 sm:justify-self-center dark:bg-gold-700/10 dark:text-gold-400">
            {row.label}
          </span>
          <p className="order-3 text-sm text-foreground sm:text-base">{row.right}</p>
        </div>
      ))}

      {parallels.footnote && (
        <p className="border-t border-border/60 pt-3 text-center text-sm text-muted-foreground">
          {parallels.footnote}
        </p>
      )}
    </div>
  );
}
