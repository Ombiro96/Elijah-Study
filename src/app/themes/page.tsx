import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { themes } from "@/data/themes";

export const metadata: Metadata = { title: "Themes — The Prophet Elijah" };

export default function ThemesIndexPage() {
  return (
    <div>
      <PageHero
        kicker="Themes"
        title="Cross-referenced biblical themes"
        subtitle="Each theme below threads through multiple weeks of the study. Follow any one of them across the whole storyline — from Sinai to Carmel to the empty tomb."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((t) => (
            <Link key={t.id} href={`/themes/${t.id}`} className="group">
              <Card className="h-full border-border/70 transition-all group-hover:-translate-y-0.5 group-hover:border-gold-500/40 group-hover:shadow-md">
                <CardContent className="pt-6">
                  <p className="font-heading text-lg font-semibold">{t.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{t.summary}</p>
                  <p className="mt-3 text-xs text-gold-600 dark:text-gold-400">
                    {t.passages.length} passage{t.passages.length !== 1 ? "s" : ""} · Week{t.weekRefs.length > 1 ? "s" : ""} {t.weekRefs.join(", ")}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
