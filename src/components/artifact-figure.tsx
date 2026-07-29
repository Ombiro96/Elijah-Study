import { getArtifactById } from "@/data/artifacts";
import { ZoomableImage } from "@/components/zoomable-image";
import { CertaintyBadge } from "@/components/certainty-badge";
import { cn } from "@/lib/utils";

/**
 * Renders a real, sourced archaeological or archival photograph with visible
 * attribution, a certainty badge, and the required note stating what the
 * image is *not* — never AI-generated art. Click to view fullscreen/zoomed.
 */
export function ArtifactFigure({
  artifactId,
  className,
  showDescription = true,
}: {
  artifactId: string;
  className?: string;
  showDescription?: boolean;
}) {
  const artifact = getArtifactById(artifactId);
  if (!artifact) return null;
  const { image } = artifact;

  return (
    <figure className={cn("w-full", className)}>
      <div className="overflow-hidden rounded-xl border border-border/70 bg-stone-100 shadow-sm dark:bg-stone-900">
        <ZoomableImage src={image.src} alt={image.alt} className="aspect-[4/3] object-cover" />
      </div>
      <figcaption className="mt-2.5 space-y-1.5">
        <p className="font-heading text-base font-semibold text-foreground">{artifact.title}</p>
        <p className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
          {artifact.era}
        </p>
        {showDescription && (
          <p className="text-sm text-muted-foreground">{artifact.description}</p>
        )}
        <div className="pt-0.5">
          <CertaintyBadge level={artifact.certainty} />
        </div>
        <p className="text-xs text-muted-foreground">
          <span className="font-medium text-foreground">What this is not: </span>
          {artifact.note}
        </p>
        <a
          href={image.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-xs text-gold-700 hover:underline dark:text-gold-400"
        >
          {image.attribution}
        </a>
      </figcaption>
    </figure>
  );
}
