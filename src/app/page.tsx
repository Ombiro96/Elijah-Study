import Link from "next/link";
import {
  BookOpen,
  MapPinned,
  Crown,
  Users,
  Layers,
  ListTree,
  Flame,
  ArrowRight,
} from "lucide-react";
import { HeroCarmel } from "@/components/hero-carmel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const weeks = [
  {
    n: 1,
    title: "Why Elijah?",
    blurb: "The historical and spiritual background before Elijah ever appears — the Law, the Prophets, a divided kingdom, and a kingdom in crisis.",
  },
  {
    n: 2,
    title: "Who is God?",
    blurb: "Cherith, Zarephath, and Mount Carmel — the question of who truly controls rain, fire, and life itself.",
  },
  {
    n: 3,
    title: "When God's Servants Break",
    blurb: "Jezebel's threat, the broom tree, and the still small voice at Horeb — what happens when a faithful prophet reaches his limit.",
  },
  {
    n: 4,
    title: "The Legacy of Elijah",
    blurb: "Naboth's vineyard, the death of Ahab, and a cloak passed to Elisha — all the way to the Transfiguration and Christ.",
  },
];

const reference = [
  { href: "/timeline", label: "Timeline", desc: "Israel and Judah, side by side", icon: Layers },
  { href: "/kings", label: "Kings", desc: "Every king, filterable and sourced", icon: Crown },
  { href: "/maps", label: "Maps", desc: "Every location Elijah walked", icon: MapPinned },
  { href: "/people", label: "People", desc: "Sixteen lives behind the story", icon: Users },
  { href: "/themes", label: "Themes", desc: "Idolatry, covenant, fire, and grace", icon: Flame },
  { href: "/scripture", label: "Scripture Index", desc: "Every passage, indexed", icon: ListTree },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative">
        <HeroCarmel />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-5xl px-4 pb-10 sm:px-6 lg:px-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-stone-700 dark:text-gold-200/90">
              A Four-Week Interactive Bible Study
            </p>
            <h1 className="mt-3 max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight text-stone-900 drop-shadow-sm sm:text-6xl dark:text-parchment-50">
              The Prophet Elijah
            </h1>
            <p className="mt-4 max-w-xl text-balance text-lg text-stone-800/90 dark:text-parchment-100/90">
              What is the role of Elijah in Scripture?
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              A prophet standing between the Law and the King of kings
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Elijah appears without introduction in 1 Kings 17, in the middle of Israel&rsquo;s
                darkest institutional idolatry, and disappears without dying in 2 Kings 2. In
                between, he confronts kings, calls down fire, flees in despair, and is met by God
                in a whisper. Centuries later he stands beside Moses at the Transfiguration,
                representing &ldquo;the Prophets&rdquo; alongside Moses&rsquo; &ldquo;Law&rdquo; &mdash;
                both of them pointing to Jesus Christ.
              </p>
              <p>
                This study is built to help you see Elijah inside that whole story: the
                geography he walked, the kings and dynasties around him, the covenant he was
                defending, and the theological threads &mdash; idolatry, provision, judgment,
                grace &mdash; that run from Sinai through Carmel to the empty tomb.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/week/1">
                <Button size="lg" className="bg-gold-gradient text-stone-900 hover:opacity-90">
                  Begin Week 1 <ArrowRight className="ml-1 size-4" />
                </Button>
              </Link>
              <Link href="/teach">
                <Button size="lg" variant="outline">
                  Enter Teaching Mode
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <Card className="border-gold-500/25 bg-card/60">
              <CardContent className="pt-6">
                <BookOpen className="size-6 text-gold-600 dark:text-gold-400" />
                <p className="mt-3 text-sm text-muted-foreground">
                  Every claim in this study is marked by category &mdash; explicit biblical
                  statement, historical background, scholarly consensus, theological tradition,
                  or flagged speculation &mdash; so you always know what kind of claim you&rsquo;re
                  reading.
                </p>
                <Link
                  href="/theology"
                  className="mt-3 inline-flex items-center text-sm font-medium text-gold-700 hover:underline dark:text-gold-400"
                >
                  See the Theology section <ArrowRight className="ml-1 size-3.5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/25">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
            The Study
          </p>
          <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Four weeks, one storyline
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {weeks.map((w) => (
              <Link key={w.n} href={`/week/${w.n}`} className="group">
                <Card className="h-full border-border/70 transition-all group-hover:-translate-y-0.5 group-hover:border-gold-500/40 group-hover:shadow-md">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold-gradient font-heading text-lg font-semibold text-stone-900">
                      {w.n}
                    </span>
                    <div>
                      <p className="font-heading text-xl font-semibold">{w.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{w.blurb}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">
          Reference
        </p>
        <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          Explore the world around the story
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reference.map((r) => (
            <Link key={r.href} href={r.href} className="group">
              <Card className="h-full border-border/70 transition-all group-hover:-translate-y-0.5 group-hover:border-gold-500/40 group-hover:shadow-md">
                <CardContent className="pt-6">
                  <r.icon className="size-6 text-gold-600 dark:text-gold-400" />
                  <p className="mt-3 font-heading text-lg font-semibold">{r.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
