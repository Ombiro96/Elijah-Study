"use client";

import Link from "next/link";
import { Flame, Menu } from "lucide-react";
import { NavGroup } from "@/components/nav-group";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const studyLinks = [
  { href: "/week/1", label: "Week 1", description: "Why Elijah? The world before he appears." },
  { href: "/week/2", label: "Week 2", description: "Who is God? Carmel and the drought." },
  { href: "/week/3", label: "Week 3", description: "When God's Servants Break — Horeb." },
  { href: "/week/4", label: "Week 4", description: "The Legacy of Elijah, to Christ." },
  { href: "/teach", label: "Teaching Mode", description: "Full-screen presentation mode." },
];

const referenceLinks = [
  { href: "/timeline", label: "Timeline", description: "Synchronized Israel & Judah timeline." },
  { href: "/kings", label: "Kings", description: "Filterable table of every king." },
  { href: "/maps", label: "Maps", description: "Interactive map of every location." },
  { href: "/people", label: "People", description: "Character pages and relationships." },
  { href: "/deities", label: "Deities", description: "Gods and idols Israel was warned about." },
  { href: "/family-trees", label: "Family Trees", description: "Dynasties and prophetic succession." },
  { href: "/charts", label: "Charts", description: "Kings, prophets, battles, miracles." },
];

const studyTopics = [
  { href: "/themes", label: "Themes", description: "Idolatry, covenant, rain, fire, and more." },
  { href: "/theology", label: "Theology", description: "Deeper study on Law, Prophets, and Christ." },
  { href: "/scripture", label: "Scripture Index", description: "Every passage referenced, indexed." },
];

const allLinksFlat = [
  { href: "/", label: "Home" },
  ...studyLinks,
  ...referenceLinks,
  ...studyTopics,
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex size-9 items-center justify-center rounded-full bg-gold-gradient text-stone-900 shadow-sm">
            <Flame className="size-5" strokeWidth={2.25} />
          </span>
          <span className="hidden font-heading text-lg font-semibold tracking-tight sm:inline">
            The Prophet Elijah
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className="rounded-lg px-2.5 py-1.5 text-sm font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-foreground"
          >
            Home
          </Link>
          <NavGroup label="Study" links={studyLinks} />
          <NavGroup label="Reference" links={referenceLinks} />
          <NavGroup label="Deeper Study" links={studyTopics} />
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Link href="/teach" className="hidden sm:block">
            <Button variant="outline" size="sm" className="ml-1 border-gold-500/40">
              Teaching Mode
            </Button>
          </Link>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <span className="flex size-9 items-center justify-center rounded-lg hover:bg-muted">
                  <Menu className="size-5" />
                </span>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle className="font-heading">Navigate</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-0.5 px-3 pb-6">
                  {allLinksFlat.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="rounded-lg px-2 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-muted"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
