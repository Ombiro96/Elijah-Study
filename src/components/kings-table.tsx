"use client";

import * as React from "react";
import Link from "next/link";
import { allKings } from "@/data/kings";
import type { King } from "@/data/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScriptureTagList } from "@/components/scripture-tag";

const kingdomOptions = ["All Kingdoms", "United Kingdom", "Israel", "Judah"] as const;
const evalOptions = ["All Evaluations", "good", "mixed", "evil"] as const;

function evalBadge(ev: King["evaluation"]) {
  const map = {
    good: "border-[#3f5c53]/40 bg-[#3f5c53]/10 text-[#2f453e] dark:text-[#a8c9bd]",
    mixed: "border-gold-500/40 bg-gold-100/60 text-stone-700 dark:bg-gold-700/10 dark:text-gold-200",
    evil: "border-clay-500/40 bg-clay-500/10 text-clay-600 dark:text-[#e29d8f]",
  } as const;
  return (
    <Badge variant="outline" className={map[ev]}>
      {ev === "good" ? "Good" : ev === "mixed" ? "Mixed" : "Evil"}
    </Badge>
  );
}

export function KingsTable() {
  const [kingdom, setKingdom] = React.useState<string>("All Kingdoms");
  const [evaluation, setEvaluation] = React.useState<string>("All Evaluations");
  const [query, setQuery] = React.useState("");

  const filtered = allKings.filter((k) => {
    if (kingdom !== "All Kingdoms" && k.kingdom !== kingdom) return false;
    if (evaluation !== "All Evaluations" && k.evaluation !== evaluation) return false;
    if (query && !k.name.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name…"
          className="h-9 w-48 rounded-lg border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        />
        <Select value={kingdom} onValueChange={(v) => v && setKingdom(v)}>
          <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
          <SelectContent>
            {kingdomOptions.map((k) => <SelectItem key={k} value={k}>{k}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={evaluation} onValueChange={(v) => v && setEvaluation(v)}>
          <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
          <SelectContent>
            {evalOptions.map((e) => (
              <SelectItem key={e} value={e}>
                {e === "All Evaluations" ? e : e[0].toUpperCase() + e.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground">{filtered.length} of {allKings.length} kings</p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border/70">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-32">King</TableHead>
              <TableHead>Kingdom</TableHead>
              <TableHead>Father</TableHead>
              <TableHead>Mother</TableHead>
              <TableHead>Years Reigned</TableHead>
              <TableHead className="min-w-36">Dates (BC)</TableHead>
              <TableHead>Capital</TableHead>
              <TableHead>Evaluation</TableHead>
              <TableHead className="min-w-72">Main Events</TableHead>
              <TableHead className="min-w-40">Prophets</TableHead>
              <TableHead className="min-w-40">References</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((k) => (
              <TableRow key={k.id}>
                <TableCell className="font-medium">
                  {k.personId ? (
                    <Link href={`/people/${k.personId}`} className="hover:underline">{k.name}</Link>
                  ) : k.name}
                </TableCell>
                <TableCell>{k.kingdom}</TableCell>
                <TableCell className="text-muted-foreground">{k.father ?? "—"}</TableCell>
                <TableCell className="text-muted-foreground">{k.mother ?? "—"}</TableCell>
                <TableCell className="whitespace-nowrap text-muted-foreground">{k.yearsReigned}</TableCell>
                <TableCell className="whitespace-nowrap font-mono text-xs text-muted-foreground">{k.datesBC}</TableCell>
                <TableCell className="text-muted-foreground">{k.capital}</TableCell>
                <TableCell>{evalBadge(k.evaluation)}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{k.mainEvents}</TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {k.prophets.length ? k.prophets.join(", ") : "—"}
                </TableCell>
                <TableCell><ScriptureTagList refs={k.references} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {filtered.length === 0 && (
        <p className="mt-6 text-center text-sm text-muted-foreground">No kings match those filters.</p>
      )}
    </div>
  );
}
