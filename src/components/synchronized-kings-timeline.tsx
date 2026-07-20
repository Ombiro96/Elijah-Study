"use client";

import * as React from "react";
import Link from "next/link";
import { israelKings, judahKings } from "@/data/kings";
import type { King } from "@/data/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScriptureTagList } from "@/components/scripture-tag";

const SCALE_START = 931; // division of the kingdom
const SCALE_END = 586; // fall of Jerusalem
const TOTAL_YEARS = SCALE_START - SCALE_END;
const TOTAL_HEIGHT = 2600; // px

function parseYears(datesBC: string): [number, number] {
  const nums = (datesBC.match(/\d{2,4}/g) ?? []).map(Number);
  if (nums.length === 0) return [SCALE_START, SCALE_END];
  if (nums.length === 1) return [nums[0], nums[0]];
  return [nums[0], nums[1]];
}

function KingBlock({
  king,
  color,
  onSelect,
}: {
  king: King;
  color: string;
  onSelect: (k: King) => void;
}) {
  const [start, end] = parseYears(king.datesBC);
  const top = ((SCALE_START - start) / TOTAL_YEARS) * 100;
  const rawHeight = ((start - end) / TOTAL_YEARS) * 100;
  const height = Math.max(rawHeight, 1.4);
  const evalBorder =
    king.evaluation === "good"
      ? "border-[#3f5c53]/50"
      : king.evaluation === "evil"
      ? "border-clay-500/50"
      : "border-gold-500/50";

  return (
    <button
      onClick={() => onSelect(king)}
      style={{ top: `${top}%`, height: `${height}%` }}
      className={`group absolute left-1 right-1 overflow-hidden rounded-md border ${evalBorder} ${color} px-2 py-1 text-left shadow-sm transition-all hover:z-10 hover:scale-[1.03] hover:shadow-md`}
    >
      <p className="truncate text-[11px] font-semibold leading-tight sm:text-xs">{king.name}</p>
      {height > 3 && (
        <p className="truncate font-mono text-[9px] text-current/70 sm:text-[10px]">{king.datesBC}</p>
      )}
    </button>
  );
}

export function SynchronizedKingsTimeline() {
  const [selected, setSelected] = React.useState<King | null>(null);

  const ticks = [];
  for (let y = SCALE_START; y >= SCALE_END; y -= 50) ticks.push(y);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5"><span className="size-2.5 rounded-sm bg-gold-200 dark:bg-gold-700/40" /> Israel (Northern Kingdom)</span>
        <span className="inline-flex items-center gap-1.5"><span className="size-2.5 rounded-sm bg-[#3f5c53]/15" /> Judah (Southern Kingdom)</span>
        <span>Click any king for details. Vertical position reflects approximate BC date (Thiele chronology).</span>
      </div>
      <div className="flex gap-2 overflow-x-auto rounded-xl border border-border/70 bg-card/40 p-2">
        <div className="relative w-16 shrink-0" style={{ height: TOTAL_HEIGHT }}>
          {ticks.map((y) => (
            <div
              key={y}
              className="absolute left-0 right-0 border-t border-dashed border-border/60 text-right font-mono text-[10px] text-muted-foreground"
              style={{ top: `${((SCALE_START - y) / TOTAL_YEARS) * 100}%` }}
            >
              <span className="relative -top-2 pr-1">{y} BC</span>
            </div>
          ))}
        </div>
        <div className="relative flex-1" style={{ height: TOTAL_HEIGHT }}>
          <p className="absolute -top-6 left-1 text-xs font-semibold text-gold-700 dark:text-gold-400">Israel</p>
          {israelKings.map((k) => (
            <KingBlock key={k.id} king={k} color="bg-gold-100/70 dark:bg-gold-700/15" onSelect={setSelected} />
          ))}
          <div
            className="absolute left-1 right-1 rounded-md border border-dashed border-clay-500/50 bg-clay-500/10 px-2 py-1 text-center"
            style={{ top: `${((SCALE_START - 722) / TOTAL_YEARS) * 100}%`, height: "1.5%" }}
          >
            <p className="text-[9px] font-semibold text-clay-600">Fall of Samaria, 722 BC</p>
          </div>
        </div>
        <div className="relative flex-1" style={{ height: TOTAL_HEIGHT }}>
          <p className="absolute -top-6 left-1 text-xs font-semibold text-[#3f5c53] dark:text-[#8fbfae]">Judah</p>
          {judahKings.map((k) => (
            <KingBlock key={k.id} king={k} color="bg-[#3f5c53]/10 dark:bg-[#5d8377]/15" onSelect={setSelected} />
          ))}
          <div
            className="absolute left-1 right-1 rounded-md border border-dashed border-clay-500/50 bg-clay-500/10 px-2 py-1 text-center"
            style={{ top: `${((SCALE_START - 586) / TOTAL_YEARS) * 100}%`, height: "1.5%" }}
          >
            <p className="text-[9px] font-semibold text-clay-600">Fall of Jerusalem, 586 BC</p>
          </div>
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">{selected.name}</DialogTitle>
                <DialogDescription>
                  {selected.kingdom} · {selected.datesBC} · {selected.yearsReigned}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 text-sm">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{selected.capital}</Badge>
                  <Badge
                    variant="outline"
                    className={
                      selected.evaluation === "good"
                        ? "border-[#3f5c53]/40 text-[#2f453e] dark:text-[#a8c9bd]"
                        : selected.evaluation === "evil"
                        ? "border-clay-500/40 text-clay-600 dark:text-[#e29d8f]"
                        : "border-gold-500/40 text-stone-700 dark:text-gold-200"
                    }
                  >
                    {selected.evaluation}
                  </Badge>
                  {selected.father && <Badge variant="secondary">Father: {selected.father}</Badge>}
                  {selected.mother && <Badge variant="secondary">Mother: {selected.mother}</Badge>}
                </div>
                <p className="text-muted-foreground">{selected.mainEvents}</p>
                {selected.prophets.length > 0 && (
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Prophets: </span>
                    {selected.prophets.join(", ")}
                  </p>
                )}
                <ScriptureTagList refs={selected.references} />
                {selected.personId && (
                  <Link href={`/people/${selected.personId}`} className="inline-block text-sm font-medium text-gold-700 hover:underline dark:text-gold-400">
                    Full biography →
                  </Link>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
