import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { theologyTopics, getTheologyTopic } from "@/data/theology";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { ScriptureTagList } from "@/components/scripture-tag";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export function generateStaticParams() {
  return theologyTopics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTheologyTopic(slug);
  return { title: topic ? `${topic.title} — Theology` : "Topic not found" };
}

export default async function TheologyTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTheologyTopic(slug);
  if (!topic) notFound();

  return (
    <div>
      <PageHero kicker="Theology" title={topic.title} subtitle={topic.summary} />
      <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        {topic.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="mb-3 font-heading text-2xl font-semibold tracking-tight">{s.heading}</h2>
            <div className="space-y-4 text-muted-foreground">
              {s.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </section>
        ))}

        <section>
          <SectionHeading kicker="Reading" title="Scripture References" />
          <ScriptureTagList refs={topic.scriptureRefs} />
        </section>

        {topic.interpretivePerspectives && (
          <section>
            <div className="mb-6 flex items-start gap-3 rounded-lg border border-clay-500/40 bg-clay-500/5 p-4">
              <AlertTriangle className="mt-0.5 size-5 shrink-0 text-clay-600" />
              <div>
                <p className="font-heading text-lg font-semibold text-clay-600">Interpretive Perspectives</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Scripture does not explicitly name the two witnesses. The views below are
                  evangelical interpretive proposals, not statements of the biblical text itself —
                  presented so you can see the reasoning behind each without mistaking any one
                  of them for settled fact.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {topic.interpretivePerspectives.map((v) => (
                <Card key={v.view} className="border-border/70">
                  <CardContent className="pt-6">
                    <p className="font-heading text-lg font-semibold">{v.view}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{v.summary}</p>
                    <p className="mt-3 text-sm"><span className="font-medium">Textual support: </span><span className="text-muted-foreground">{v.support}</span></p>
                    <p className="mt-2 text-sm"><span className="font-medium">Considerations: </span><span className="text-muted-foreground">{v.considerations}</span></p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
