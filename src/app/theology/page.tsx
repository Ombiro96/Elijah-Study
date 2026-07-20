import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { theologyTopics } from "@/data/theology";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Theology — The Prophet Elijah" };

export default function TheologyIndexPage() {
  return (
    <div>
      <PageHero
        kicker="Deeper Study"
        title="Theology"
        subtitle="Careful, focused treatments of the theological questions this study raises — including a clearly labeled section on the range of evangelical views concerning the two witnesses of Revelation 11."
      />
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {theologyTopics.map((t) => (
            <Link key={t.slug} href={`/theology/${t.slug}`} className="group">
              <Card className="h-full border-border/70 transition-all group-hover:-translate-y-0.5 group-hover:border-gold-500/40 group-hover:shadow-md">
                <CardContent className="pt-6">
                  <p className="font-heading text-lg font-semibold">{t.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{t.summary}</p>
                  {t.interpretivePerspectives && (
                    <Badge variant="outline" className="mt-3 border-clay-500/40 text-clay-600 dark:text-[#e29d8f]">
                      Interpretive Perspectives
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
