import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { scriptureIndex, bookOrderOT, bookOrderNT } from "@/data/scripture-index";
import { slugifyRef } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = { title: "Scripture Index — The Prophet Elijah" };

function groupByBook(testament: "OT" | "NT", order: string[]) {
  const entries = scriptureIndex.filter((e) => e.testament === testament);
  return order
    .map((book) => ({
      book,
      entries: entries
        .filter((e) => e.book === book)
        .sort((a, b) => a.ref.localeCompare(b.ref, undefined, { numeric: true })),
    }))
    .filter((g) => g.entries.length > 0);
}

export default function ScriptureIndexPage() {
  const ot = groupByBook("OT", bookOrderOT);
  const nt = groupByBook("NT", bookOrderNT);

  return (
    <div>
      <PageHero
        kicker="Reference"
        title="Scripture Index"
        subtitle="Every passage referenced throughout this study, grouped by testament and book, with links back to where each one is discussed."
      />
      <div className="mx-auto max-w-4xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
        <section>
          <SectionHeading kicker={`${ot.reduce((n, g) => n + g.entries.length, 0)} passages`} title="Old Testament" />
          <div className="space-y-10">
            {ot.map((g) => (
              <div key={g.book}>
                <h3 className="mb-3 font-heading text-lg font-semibold text-gold-700 dark:text-gold-400">{g.book}</h3>
                <div className="space-y-2">
                  {g.entries.map((e) => (
                    <Card key={e.ref} id={slugifyRef(e.ref)} className="scroll-mt-24 border-border/70">
                      <CardContent className="pt-4">
                        <p className="font-mono text-sm font-semibold">{e.ref}</p>
                        <ul className="mt-1.5 space-y-1">
                          {e.usages.map((u, i) => (
                            <li key={i} className="text-sm text-muted-foreground">
                              <Link href={u.href} className="hover:text-foreground hover:underline">{u.context}</Link>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading kicker={`${nt.reduce((n, g) => n + g.entries.length, 0)} passages`} title="New Testament" />
          <div className="space-y-10">
            {nt.map((g) => (
              <div key={g.book}>
                <h3 className="mb-3 font-heading text-lg font-semibold text-gold-700 dark:text-gold-400">{g.book}</h3>
                <div className="space-y-2">
                  {g.entries.map((e) => (
                    <Card key={e.ref} id={slugifyRef(e.ref)} className="scroll-mt-24 border-border/70">
                      <CardContent className="pt-4">
                        <p className="font-mono text-sm font-semibold">{e.ref}</p>
                        <ul className="mt-1.5 space-y-1">
                          {e.usages.map((u, i) => (
                            <li key={i} className="text-sm text-muted-foreground">
                              <Link href={u.href} className="hover:text-foreground hover:underline">{u.context}</Link>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
