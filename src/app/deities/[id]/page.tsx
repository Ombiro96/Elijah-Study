import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { canaaniteDeities, getDeityById } from "@/data/deities";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { CertaintyBadge } from "@/components/certainty-badge";
import { ZoomableImage } from "@/components/zoomable-image";

export function generateStaticParams() {
  return canaaniteDeities.map((d) => ({ id: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const deity = getDeityById(id);
  return { title: deity ? `${deity.name} — The Prophet Elijah` : "Deity not found" };
}

export default async function DeityPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const deity = getDeityById(id);
  if (!deity) notFound();

  return (
    <div>
      <PageHero kicker="Canaanite deity" title={deity.name} subtitle={deity.epithet} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-10 lg:col-span-2">
          <section>
            <SectionHeading kicker="Background" title="Origin" />
            <p className="text-muted-foreground">{deity.origin}</p>
          </section>

          <section>
            <SectionHeading kicker="Ritual" title="Worship & Practice" />
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              {deity.worshipPractices.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </section>

          <section>
            <SectionHeading kicker="Geography" title="Cult Sites" />
            <p className="text-muted-foreground">{deity.cultSites}</p>
          </section>

          <section>
            <SectionHeading kicker="History" title="Brought to Israel by" />
            <p className="text-muted-foreground">{deity.encouragedBy}</p>
          </section>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-xl border border-border/70 bg-stone-100 dark:bg-stone-900">
            <ZoomableImage
              src={deity.image.src}
              alt={deity.image.alt}
              thumbnailClassName="relative aspect-[4/3] w-full bg-stone-200 dark:bg-stone-800"
              className="h-full w-full object-cover"
            />
            <div className="space-y-2 border-t border-border/60 p-4 text-sm">
              <CertaintyBadge level={deity.imageCertainty} />
              {deity.imageNote && <p className="text-xs italic text-muted-foreground">{deity.imageNote}</p>}
              <p className="text-xs text-muted-foreground">{deity.image.caption}</p>
              <a
                href={deity.image.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[11px] text-muted-foreground/80 hover:underline"
              >
                {deity.image.attribution}
              </a>
            </div>
          </div>

          {deity.alternateNames && (
            <Card className="border-border/70">
              <CardContent className="pt-6 text-sm">
                <p className="mb-2 font-semibold">Also known as</p>
                <p className="text-muted-foreground">{deity.alternateNames.join(", ")}</p>
              </CardContent>
            </Card>
          )}

          <Card className="border-border/70">
            <CardContent className="pt-6">
              <p className="mb-3 text-sm font-semibold">Domain</p>
              <div className="flex flex-wrap gap-1.5">
                {deity.domain.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-gold-500/30 bg-gold-100/40 px-2 py-0.5 text-[11px] font-medium text-stone-700 dark:bg-gold-700/10 dark:text-gold-200"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
