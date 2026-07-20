import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { ReignBarChart } from "@/components/reign-bar-chart";
import { israelKings, judahKings } from "@/data/kings";
import { majorBattles, majorMiracles } from "@/data/charts";
import { ScriptureTagList } from "@/components/scripture-tag";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = { title: "Charts — The Prophet Elijah" };

function prophetsFor(kings: typeof israelKings) {
  const seen = new Map<string, string[]>();
  for (const k of kings) {
    for (const p of k.prophets) {
      if (!seen.has(p)) seen.set(p, []);
      seen.get(p)!.push(k.name);
    }
  }
  return Array.from(seen.entries());
}

export default function ChartsPage() {
  const israelProphets = prophetsFor(israelKings);
  const judahProphets = prophetsFor(judahKings);

  return (
    <div>
      <PageHero
        kicker="Reference"
        title="Charts"
        subtitle="Visual summaries of reign lengths, prophetic ministries, major battles, and major miracles across the Elijah–Elisha narrative."
      />
      <div className="mx-auto max-w-5xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
        <section>
          <SectionHeading kicker="Chart" title="Kings of Israel by reign length" subtitle="Bar length reflects approximate years reigned (Thiele chronology). Hover any bar for details." />
          <ReignBarChart kings={israelKings} color="var(--chart-israel)" />
        </section>

        <section>
          <SectionHeading kicker="Chart" title="Kings of Judah by reign length" />
          <ReignBarChart kings={judahKings} color="var(--chart-judah)" />
        </section>

        <section>
          <SectionHeading kicker="Chart" title="Prophets by timeline" subtitle="Every prophet named in Kings alongside the reign(s) during which they ministered." />
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold text-gold-700 dark:text-gold-400">Prophets to Israel</p>
              <ul className="space-y-2">
                {israelProphets.map(([prophet, kings]) => (
                  <li key={prophet} className="rounded-lg border border-border/70 bg-card/50 p-3 text-sm">
                    <span className="font-medium">{prophet}</span>
                    <p className="mt-0.5 text-xs text-muted-foreground">during {kings.join(", ")}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-[#3f5c53] dark:text-[#8fbfae]">Prophets to Judah</p>
              <ul className="space-y-2">
                {judahProphets.map(([prophet, kings]) => (
                  <li key={prophet} className="rounded-lg border border-border/70 bg-card/50 p-3 text-sm">
                    <span className="font-medium">{prophet}</span>
                    <p className="mt-0.5 text-xs text-muted-foreground">during {kings.join(", ")}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading kicker="Chart" title="Major battles" />
          <div className="overflow-x-auto rounded-xl border border-border/70">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Battle</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Combatants</TableHead>
                  <TableHead className="min-w-64">Outcome</TableHead>
                  <TableHead>References</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {majorBattles.map((b) => (
                  <TableRow key={b.name}>
                    <TableCell className="font-medium">{b.name}</TableCell>
                    <TableCell className="whitespace-nowrap font-mono text-xs text-muted-foreground">{b.dateBC ?? "—"}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{b.combatants}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{b.outcome}</TableCell>
                    <TableCell><ScriptureTagList refs={b.refs} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section>
          <SectionHeading kicker="Chart" title="Major miracles" subtitle="Elijah's and Elisha's miracles, back to back — note how consistently Elisha's ministry multiplies Elijah's pattern." />
          <div className="overflow-x-auto rounded-xl border border-border/70">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Miracle</TableHead>
                  <TableHead>Prophet</TableHead>
                  <TableHead>Reference</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {majorMiracles.map((m) => (
                  <TableRow key={m.miracle}>
                    <TableCell className="text-sm">{m.miracle}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={m.worker === "Elijah" ? "border-gold-500/40" : "border-[#3f5c53]/40"}>
                        {m.worker}
                      </Badge>
                    </TableCell>
                    <TableCell><ScriptureTagList refs={m.refs} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    </div>
  );
}
