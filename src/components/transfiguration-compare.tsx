import { ScriptureTagList } from "@/components/scripture-tag";

const figures = [
  {
    name: "Moses",
    represents: "The Law",
    detail: "Mediator of the Sinai covenant; his death and burial are shrouded in mystery (Deuteronomy 34:5-6).",
    href: "/people/moses",
  },
  {
    name: "Jesus",
    represents: "The Fulfillment",
    detail: "Transfigured in glory; the Father declares him His Son and commands, \"Listen to him\" — Moses and Elijah recede, Jesus alone remains.",
    href: "/theology/transfiguration",
    emphasis: true,
  },
  {
    name: "Elijah",
    represents: "The Prophets",
    detail: "Taken up without dying (2 Kings 2:11); expected by Jewish tradition to return before the Day of the LORD (Malachi 4:5-6).",
    href: "/people/elijah",
  },
];

export function TransfigurationCompare() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {figures.map((f) => (
          <div
            key={f.name}
            className={`rounded-xl border p-5 ${
              f.emphasis
                ? "border-gold-500/50 bg-gold-100/50 dark:bg-gold-700/10"
                : "border-border/70 bg-card/50"
            }`}
          >
            <p className="font-mono text-xs uppercase tracking-wide text-gold-600 dark:text-gold-400">{f.represents}</p>
            <p className="mt-1 font-heading text-xl font-semibold">{f.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{f.detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <ScriptureTagList refs={["Matthew 17:1-13", "Luke 9:28-36", "Deuteronomy 34:5-6", "Malachi 4:5-6"]} />
      </div>
    </div>
  );
}
