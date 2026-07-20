import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { themes, getThemeById } from "@/data/themes";
import { getPersonById } from "@/data/people";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { ScriptureTag } from "@/components/scripture-tag";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function generateStaticParams() {
  return themes.map((t) => ({ id: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const theme = getThemeById(id);
  return { title: theme ? `${theme.name} — Themes` : "Theme not found" };
}

export default async function ThemePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const theme = getThemeById(id);
  if (!theme) notFound();

  return (
    <div>
      <PageHero kicker="Theme" title={theme.name} subtitle={theme.summary} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4 text-muted-foreground lg:col-span-2">
          {theme.explanation.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="pt-4">
            <SectionHeading kicker="Reading" title="Key Passages" />
            <div className="space-y-3">
              {theme.passages.map((p) => (
                <Card key={p.ref} className="border-border/70">
                  <CardContent className="flex flex-wrap items-baseline gap-3 pt-5">
                    <ScriptureTag refText={p.ref} />
                    <p className="text-sm text-muted-foreground">{p.note}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="border-border/70">
            <CardContent className="pt-6">
              <p className="mb-2 text-sm font-semibold">Appears in</p>
              <div className="flex flex-wrap gap-1.5">
                {theme.weekRefs.map((w) => (
                  <Link key={w} href={`/week/${w}`}>
                    <Badge variant="secondary" className="cursor-pointer">Week {w}</Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {theme.relatedPersonIds.length > 0 && (
            <Card className="border-border/70">
              <CardContent className="pt-6">
                <p className="mb-2 text-sm font-semibold">Related People</p>
                <div className="flex flex-wrap gap-1.5">
                  {theme.relatedPersonIds.map((pid) => {
                    const p = getPersonById(pid);
                    if (!p) return null;
                    return (
                      <Link key={pid} href={`/people/${pid}`}>
                        <Badge variant="outline" className="cursor-pointer">{p.name}</Badge>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {theme.relatedThemeIds.length > 0 && (
            <Card className="border-border/70">
              <CardContent className="pt-6">
                <p className="mb-2 text-sm font-semibold">Related Themes</p>
                <div className="flex flex-wrap gap-1.5">
                  {theme.relatedThemeIds.map((tid) => {
                    const t = getThemeById(tid);
                    if (!t) return null;
                    return (
                      <Link key={tid} href={`/themes/${tid}`}>
                        <Badge variant="outline" className="cursor-pointer">{t.name}</Badge>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
