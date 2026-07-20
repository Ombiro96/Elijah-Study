"use client";

import type { King } from "@/data/types";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function parseDuration(datesBC: string): number {
  const nums = (datesBC.match(/\d{2,4}/g) ?? []).map(Number);
  if (nums.length < 2) return 1;
  return Math.max(nums[0] - nums[1], 1);
}

export function ReignBarChart({ kings, color }: { kings: King[]; color: string }) {
  const durations = kings.map((k) => parseDuration(k.datesBC));
  const max = Math.max(...durations);

  return (
    <div className="space-y-1.5">
      {kings.map((k, i) => {
        const pct = Math.max((durations[i] / max) * 100, 3);
        return (
          <Tooltip key={k.id}>
            <TooltipTrigger className="flex w-full items-center gap-2 text-left">
              <span className="w-32 shrink-0 truncate text-xs font-medium sm:w-40 sm:text-sm">{k.name}</span>
              <span className="relative h-4 flex-1 rounded bg-muted">
                <span
                  className="absolute inset-y-0 left-0 rounded"
                  style={{ width: `${pct}%`, backgroundColor: color }}
                />
              </span>
              <span className="w-14 shrink-0 text-right font-mono text-[11px] text-muted-foreground">
                {durations[i]}y
              </span>
            </TooltipTrigger>
            <TooltipContent className="max-w-64">
              <span className="font-semibold">{k.name}</span> — {k.datesBC}. {k.mainEvents}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
