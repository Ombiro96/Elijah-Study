import Link from "next/link";
import { slugifyRef } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function ScriptureTag({ refText, className }: { refText: string; className?: string }) {
  return (
    <Link
      href={`/scripture#${slugifyRef(refText)}`}
      className={cn(
        "inline-flex items-center rounded-md border border-gold-500/30 bg-gold-100/60 px-2 py-0.5 font-mono text-[11px] font-medium text-stone-700 transition-colors hover:bg-gold-100 dark:border-gold-700/30 dark:bg-gold-700/10 dark:text-gold-200 dark:hover:bg-gold-700/20",
        className
      )}
    >
      {refText}
    </Link>
  );
}

export function ScriptureTagList({ refs, className }: { refs: string[]; className?: string }) {
  if (!refs?.length) return null;
  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {refs.map((r) => (
        <ScriptureTag key={r} refText={r} />
      ))}
    </div>
  );
}
