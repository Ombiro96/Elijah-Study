import type { CompareBlock as CompareBlockData } from "@/data/slides";
import { cn } from "@/lib/utils";

export function CompareBlockView({ compare, className }: { compare: CompareBlockData; className?: string }) {
  return (
    <div className={cn("w-full max-w-3xl", className)}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border/70 bg-card p-4 text-left">
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-gold-700 dark:text-gold-400">{compare.leftLabel}</p>
          <p className="mt-2 text-sm italic text-foreground">{compare.leftText}</p>
        </div>
        <div className="rounded-xl border border-border/70 bg-card p-4 text-left">
          <p className="font-mono text-xs font-semibold uppercase tracking-wide text-gold-700 dark:text-gold-400">{compare.rightLabel}</p>
          <p className="mt-2 text-sm italic text-foreground">{compare.rightText}</p>
        </div>
      </div>
      {compare.sharedPhrase && (
        <p className="mt-3 rounded-lg border border-gold-500/40 bg-gold-100/50 px-4 py-2 text-center font-heading text-lg font-semibold text-stone-800 dark:bg-gold-700/10 dark:text-gold-200">
          {compare.sharedPhrase}
        </p>
      )}
      {compare.note && <p className="mt-2 text-center text-sm text-muted-foreground">{compare.note}</p>}
    </div>
  );
}
