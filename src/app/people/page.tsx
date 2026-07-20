import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { people } from "@/data/people";

export const metadata: Metadata = { title: "People — The Prophet Elijah" };

const groups: { label: string; ids: string[] }[] = [
  { label: "Before the Kingdom", ids: ["moses", "joshua"] },
  { label: "United Kingdom", ids: ["david", "solomon"] },
  { label: "The Divided Kingdom", ids: ["rehoboam", "jeroboam", "omri", "ahab", "jezebel"] },
  { label: "Elijah & Elisha's Circle", ids: ["elijah", "elisha", "hazael", "jehu", "micaiah"] },
  { label: "Fulfillment in Christ", ids: ["john-the-baptist", "jesus"] },
];

export default function PeopleIndexPage() {
  return (
    <div>
      <PageHero
        kicker="People"
        title="Sixteen lives behind the story"
        subtitle="From Moses to Jesus, each figure here shaped or was shaped by the world Elijah stepped into. Click any name for a full biography, timeline, family, and theological significance."
      />
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        {groups.map((group) => (
          <div key={group.label}>
            <h2 className="mb-4 font-heading text-xl font-semibold tracking-tight">{group.label}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.ids.map((id) => {
                const p = people.find((x) => x.id === id);
                if (!p) return null;
                return (
                  <Link key={p.id} href={`/people/${p.id}`} className="group">
                    <Card className="h-full border-border/70 transition-all group-hover:-translate-y-0.5 group-hover:border-gold-500/40 group-hover:shadow-md">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-heading text-lg font-semibold">{p.name}</p>
                          {p.kingdom && p.kingdom !== "N/A" && (
                            <Badge variant="outline" className="shrink-0 text-[11px]">
                              {p.kingdom}
                            </Badge>
                          )}
                        </div>
                        {p.title && <p className="text-sm text-gold-700 dark:text-gold-400">{p.title}</p>}
                        <p className="mt-2 text-xs text-muted-foreground">{p.era}</p>
                        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.role}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
