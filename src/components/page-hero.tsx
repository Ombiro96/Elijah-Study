import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  subtitle,
  className,
  children,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("border-b border-border/60 bg-gradient-to-b from-gold-100/40 to-transparent dark:from-gold-700/10", className)}>
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        {kicker && (
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
            {kicker}
          </p>
        )}
        <h1 className="text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-balance text-lg text-muted-foreground">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      {kicker && (
        <p className="mb-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 dark:text-gold-400">
          {kicker}
        </p>
      )}
      <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-2xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
