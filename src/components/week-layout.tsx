import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export interface WeekTocEntry {
  id: string;
  label: string;
}

export function WeekLayout({
  week,
  title,
  subtitle,
  toc,
  prevHref,
  nextHref,
  children,
}: {
  week: number | string;
  title: string;
  subtitle: string;
  toc: WeekTocEntry[];
  prevHref?: string;
  nextHref?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageHero kicker={`Week ${week}`} title={title} subtitle={subtitle} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[220px_1fr] lg:px-8">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-1 border-l border-border/70 pl-4 text-sm">
            {toc.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="block py-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.label}
              </a>
            ))}
          </nav>
        </aside>
        <div className="min-w-0 space-y-16">
          {children}
          <div className="flex items-center justify-between border-t border-border/60 pt-8">
            {prevHref ? (
              <Link href={prevHref} className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-700 hover:underline dark:text-gold-400">
                <ArrowLeft className="size-4" /> Previous week
              </Link>
            ) : <span />}
            {nextHref ? (
              <Link href={nextHref} className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-700 hover:underline dark:text-gold-400">
                Next week <ArrowRight className="size-4" />
              </Link>
            ) : <span />}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WeekSection({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      {kicker && (
        <p className="mb-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 dark:text-gold-400">
          {kicker}
        </p>
      )}
      <h2 className="mb-4 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <div className="space-y-4 text-muted-foreground">{children}</div>
    </section>
  );
}
