import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { people, getPersonById } from "@/data/people";
import { getThemeById } from "@/data/themes";
import { getLocationById } from "@/data/locations";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { ScriptureTagList } from "@/components/scripture-tag";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPinned, Users, GitBranch } from "lucide-react";

export function generateStaticParams() {
  return people.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const person = getPersonById(id);
  return { title: person ? `${person.name} — The Prophet Elijah` : "Person not found" };
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const person = getPersonById(id);
  if (!person) notFound();

  return (
    <div>
      <PageHero
        kicker={person.kingdom && person.kingdom !== "N/A" ? person.kingdom : person.era}
        title={person.name}
        subtitle={person.title}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-10 lg:col-span-2">
          <section>
            <SectionHeading kicker="Role" title="Biography" />
            <div className="space-y-4 text-muted-foreground">
              {person.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {person.certaintyNote && (
              <p className="mt-4 rounded-lg border border-gold-500/30 bg-gold-100/40 px-4 py-3 text-sm text-stone-700 dark:bg-gold-700/10 dark:text-gold-200">
                {person.certaintyNote}
              </p>
            )}
          </section>

          <section>
            <SectionHeading kicker="Life" title="Timeline" />
            <ol className="space-y-4 border-l-2 border-gold-500/30 pl-5">
              {person.timeline.map((t, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[1.65rem] top-1.5 size-2.5 rounded-full bg-gold-500" />
                  {t.dateBC && <p className="font-mono text-xs text-gold-600 dark:text-gold-400">{t.dateBC}</p>}
                  <p className="text-sm">{t.event}</p>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <SectionHeading kicker="Reading" title="Key Scriptures" />
            <ScriptureTagList refs={person.keyScriptures} />
          </section>

          {person.relationships.length > 0 && (
            <section>
              <SectionHeading kicker="Connections" title="Relationships" />
              <div className="space-y-3">
                {person.relationships.map((r) => {
                  const other = getPersonById(r.personId);
                  return (
                    <Card key={r.personId} className="border-border/70">
                      <CardContent className="flex items-start gap-3 pt-5">
                        <GitBranch className="mt-0.5 size-4 shrink-0 text-gold-600 dark:text-gold-400" />
                        <div>
                          {other ? (
                            <Link href={`/people/${other.id}`} className="font-medium hover:underline">
                              {other.name}
                            </Link>
                          ) : (
                            <span className="font-medium">{r.personId}</span>
                          )}
                          <p className="text-sm text-muted-foreground">{r.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        <div className="space-y-6">
          <Card className="border-border/70">
            <CardContent className="space-y-1 pt-6 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Era</span><span className="text-right font-medium">{person.era}</span></div>
              {person.approxDates && (
                <div className="flex justify-between"><span className="text-muted-foreground">Approx. dates</span><span className="text-right font-medium">{person.approxDates}</span></div>
              )}
              {person.kingdom && person.kingdom !== "N/A" && (
                <div className="flex justify-between"><span className="text-muted-foreground">Kingdom</span><span className="text-right font-medium">{person.kingdom}</span></div>
              )}
            </CardContent>
          </Card>

          {person.family.length > 0 && (
            <Card className="border-border/70">
              <CardContent className="pt-6">
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold"><Users className="size-4" /> Family</p>
                <ul className="space-y-2 text-sm">
                  {person.family.map((f, i) => (
                    <li key={i} className="flex justify-between gap-2">
                      <span className="text-muted-foreground">{f.relation}</span>
                      {f.personId ? (
                        <Link href={`/people/${f.personId}`} className="font-medium hover:underline">
                          {getPersonById(f.personId)?.name ?? f.personId}
                        </Link>
                      ) : (
                        <span className="text-right font-medium">{f.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {person.themeIds.length > 0 && (
            <Card className="border-border/70">
              <CardContent className="pt-6">
                <p className="mb-3 text-sm font-semibold">Themes</p>
                <div className="flex flex-wrap gap-1.5">
                  {person.themeIds.map((id) => {
                    const theme = getThemeById(id);
                    if (!theme) return null;
                    return (
                      <Link key={id} href={`/themes/${id}`}>
                        <Badge variant="secondary" className="cursor-pointer">{theme.name}</Badge>
                      </Link>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}

          {person.locationIds.length > 0 && (
            <Card className="border-border/70">
              <CardContent className="pt-6">
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold"><MapPinned className="size-4" /> Map References</p>
                <ul className="space-y-1.5 text-sm">
                  {person.locationIds.map((id) => {
                    const loc = getLocationById(id);
                    if (!loc) return null;
                    return (
                      <li key={id}>
                        <Link href={`/maps?location=${id}`} className="hover:underline">{loc.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
