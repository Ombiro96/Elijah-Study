import Link from "next/link";

const columns = [
  {
    title: "Study",
    links: [
      { href: "/week/1", label: "Week 1 — Why Elijah?" },
      { href: "/week/2", label: "Week 2 & 3 — Who is God?" },
      { href: "/week/4", label: "Week 4 — The Legacy of Elijah" },
    ],
  },
  {
    title: "Reference",
    links: [
      { href: "/timeline", label: "Timeline" },
      { href: "/kings", label: "Kings" },
      { href: "/maps", label: "Maps" },
      { href: "/people", label: "People" },
      { href: "/deities", label: "Deities" },
      { href: "/family-trees", label: "Family Trees" },
    ],
  },
  {
    title: "Deeper Study",
    links: [
      { href: "/themes", label: "Themes" },
      { href: "/theology", label: "Theology" },
      { href: "/scripture", label: "Scripture Index" },
      { href: "/teach", label: "Teaching Mode" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <p className="font-heading text-lg font-semibold">The Prophet Elijah</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            An interactive companion to a four-week study of Elijah&rsquo;s ministry —
            history, geography, and theology, culminating in Jesus Christ.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-foreground/80">{col.title}</p>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60 px-4 py-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        Scripture references throughout follow the ESV versification. Dates BC are approximate and follow the Thiele chronology unless noted otherwise.
      </div>
    </footer>
  );
}
