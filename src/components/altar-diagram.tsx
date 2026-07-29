import { CertaintyBadge } from "@/components/certainty-badge";
import { ScriptureTag } from "@/components/scripture-tag";
import { cn } from "@/lib/utils";

/**
 * Hand-coded schematic elevation of the two Carmel altars — drawn, like the
 * illustrative map on /maps, as authored SVG rather than AI-generated art.
 *
 * The asymmetry between the two panels is deliberate and is the point of the
 * figure: 1 Kings 18 describes Elijah's altar in close detail and says almost
 * nothing about Baal's. Nothing here is a reconstruction of how either altar
 * actually looked — only a diagram of what the text does and does not say.
 */

/**
 * The twelve uncut stones: four courses of three, joints deliberately
 * staggered course to course so they read as individual stones rather than
 * bands. Alternating fills carry the reading even where strokes are subtle.
 */
const STONES: string[] = [
  // bottom course
  "130,250 129,216 178,213 179,250",
  "179,250 178,213 236,215 237,250",
  "237,250 236,215 290,213 288,250",
  // second course
  "135,214 134,183 200,181 201,214",
  "201,214 200,181 246,183 247,214",
  "247,214 246,183 285,181 283,214",
  // third course
  "141,182 140,153 185,151 186,182",
  "186,182 185,151 232,153 233,182",
  "233,182 232,153 279,151 277,182",
  // top course
  "148,152 147,127 195,125 196,152",
  "196,152 195,125 236,127 237,152",
  "237,152 236,125 272,127 270,152",
];

/** Silhouette of the whole stone stack, used to clip the "drenched" sheen. */
const ALTAR_SILHOUETTE =
  "M130,250 L129,216 L135,214 L134,183 L141,182 L140,153 L148,152 L147,127 L272,127 L270,152 L279,151 L277,182 L285,181 L283,214 L290,213 L288,250 Z";

/** Stacked logs, drawn as a short course of rounded bars sitting on `y`. */
function Wood({ top }: { top: number }) {
  return (
    <g className="fill-gold-600 dark:fill-gold-700">
      <rect x={152} y={top + 14} width={116} height={6} rx={3} />
      <rect x={158} y={top + 7} width={104} height={6} rx={3} />
      <rect x={150} y={top} width={120} height={6} rx={3} />
    </g>
  );
}

/** The bull, cut in pieces and laid on the wood — abstract joints, not anatomy. */
function BullPieces({ y }: { y: number }) {
  return (
    <g className="fill-[#8a6a4e] dark:fill-[#6f5340]">
      <ellipse cx={186} cy={y} rx={20} ry={9} />
      <ellipse cx={222} cy={y - 5} rx={16} ry={8} />
      <ellipse cx={252} cy={y + 1} rx={14} ry={7} />
      <ellipse cx={205} cy={y - 12} rx={13} ry={7} />
    </g>
  );
}

function Callout({ n, x, y }: { n: number; x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={11} className="fill-gold-500 stroke-white/80 dark:stroke-stone-900" strokeWidth={1.5} />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        className="fill-white font-mono text-[12px] font-bold"
      >
        {n}
      </text>
    </g>
  );
}

function GroundAndTrench({ withTrench }: { withTrench: boolean }) {
  // Ground surface sits at y=250; the trench is cut either side of the altar base.
  const ground = withTrench
    ? "M0,250 L84,250 L88,274 L126,274 L126,250 L294,250 L294,274 L332,274 L336,250 L420,250 L420,300 L0,300 Z"
    : "M0,250 L420,250 L420,300 L0,300 Z";
  const outline = withTrench
    ? "M0,250 L84,250 L88,274 L126,274 L126,250 M294,250 L294,274 L332,274 L336,250 L420,250"
    : "M0,250 L420,250";
  return (
    <>
      <path d={ground} className="fill-stone-100 dark:fill-stone-800" />
      {withTrench && (
        // "He filled the trench also with water" (18:35) — full to the brim.
        <g className="fill-[#8fb4c4] dark:fill-[#3f6473]">
          <path d="M84,250 L88,274 L126,274 L126,250 Z" />
          <path d="M294,250 L294,274 L332,274 L336,250 Z" />
        </g>
      )}
      <path
        d={outline}
        className="stroke-stone-500 dark:stroke-stone-400"
        strokeWidth={2}
        fill="none"
      />
    </>
  );
}

function LordsAltar() {
  return (
    <svg
      viewBox="0 62 420 224"
      className="h-auto w-full"
      role="img"
      aria-labelledby="lords-altar-title lords-altar-desc"
    >
      <title id="lords-altar-title">Schematic of the altar of the LORD on Mount Carmel</title>
      <desc id="lords-altar-desc">
        A side-on diagram of an altar built from twelve rough, uncut stones in four courses, with
        logs laid on top, pieces of a bull laid on the logs, water running down the stones, and a
        trench cut into the ground around the base holding standing water.
      </desc>

      <defs>
        <clipPath id="carmel-altar-clip">
          <path d={ALTAR_SILHOUETTE} />
        </clipPath>
      </defs>

      <GroundAndTrench withTrench />

      {/* twelve uncut stones — alternating fills plus strokes, so they read either way */}
      {STONES.map((points, i) => (
        <polygon
          key={i}
          points={points}
          className={cn(
            "stroke-stone-500 dark:stroke-stone-400",
            i % 2 === 0
              ? "fill-[#ded6c8] dark:fill-[#5a5140]"
              : "fill-[#c4b8a3] dark:fill-[#453d30]"
          )}
          strokeWidth={1.8}
        />
      ))}

      {/* drenched three times over: a wet sheen clipped to the stones */}
      <rect
        x={125}
        y={120}
        width={170}
        height={135}
        clipPath="url(#carmel-altar-clip)"
        className="fill-[#8fb4c4] opacity-[0.22] dark:fill-[#6fa0b8] dark:opacity-[0.14]"
      />
      {/* water spilling off the base into the trenches on either side */}
      <g className="stroke-[#8fb4c4] dark:stroke-[#5d8ba0]" strokeWidth={4} fill="none" strokeLinecap="round">
        <path d="M133,232 Q128,244 126,252" />
        <path d="M287,232 Q292,244 294,252" />
      </g>

      <Wood top={107} />
      <BullPieces y={97} />

      <Callout n={1} x={110} y={200} />
      <Callout n={2} x={300} y={114} />
      <Callout n={3} x={138} y={86} />
      <Callout n={4} x={105} y={262} />
      <Callout n={5} x={312} y={240} />
    </svg>
  );
}

function BaalsAltar() {
  return (
    <svg
      viewBox="0 62 420 224"
      className="h-auto w-full"
      role="img"
      aria-labelledby="baals-altar-title baals-altar-desc"
    >
      <title id="baals-altar-title">Schematic of the altar of Baal on Mount Carmel</title>
      <desc id="baals-altar-desc">
        A side-on diagram showing logs and pieces of a bull resting on an altar drawn only as a
        dashed, featureless outline, because the biblical text never describes how Baal&apos;s altar
        was built. No fire is shown.
      </desc>

      <GroundAndTrench withTrench={false} />

      {/* the altar itself: deliberately undrawn — the text never describes it */}
      <path
        d="M130,250 L136,150 Q210,142 284,150 L290,250 Z"
        className="fill-stone-100/70 stroke-stone-500 dark:fill-stone-700/50 dark:stroke-stone-400"
        strokeWidth={2.5}
        strokeDasharray="9 7"
      />
      <text
        x={210}
        y={212}
        textAnchor="middle"
        className="fill-stone-400 font-heading text-[54px] font-bold dark:fill-stone-500"
      >
        ?
      </text>
      <text
        x={210}
        y={236}
        textAnchor="middle"
        className="fill-stone-400 text-[13px] dark:fill-stone-500"
      >
        not described
      </text>

      <Wood top={130} />
      <BullPieces y={120} />

      <Callout n={1} x={104} y={200} />
      <Callout n={2} x={300} y={141} />
      <Callout n={3} x={138} y={108} />
    </svg>
  );
}

function Legend({
  items,
}: {
  items: { n: number; label: string; ref?: string }[];
}) {
  return (
    <ol className="mt-3 space-y-1.5">
      {items.map((it) => (
        <li key={it.n} className="flex gap-2.5 text-sm">
          <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-500 font-mono text-[11px] font-bold text-white">
            {it.n}
          </span>
          <span className="text-muted-foreground">
            {it.label}
            {it.ref && (
              <>
                {" "}
                <ScriptureTag refText={it.ref} />
              </>
            )}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function AltarDiagram({ className }: { className?: string }) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Baal */}
        <div className="rounded-xl border border-border/70 bg-card p-4">
          <p className="font-heading text-base font-semibold text-foreground">The altar of Baal</p>
          <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
            1 Kings 18:23-29 — almost nothing is described
          </p>
          <div className="mt-3 overflow-hidden rounded-lg bg-stone-50 dark:bg-stone-900">
            <BaalsAltar />
          </div>
          <Legend
            items={[
              {
                n: 1,
                label:
                  "“The altar that they had made” — its material, shape, and size are never stated. The text simply refuses to describe it.",
                ref: "1 Kings 18:26",
              },
              { n: 2, label: "Wood laid on the altar, exactly as agreed.", ref: "1 Kings 18:23" },
              {
                n: 3,
                label:
                  "The bull, chosen first and cut in pieces — they were given every advantage.",
                ref: "1 Kings 18:25",
              },
            ]}
          />
          <p className="mt-3 rounded-lg bg-muted/60 px-3 py-2 text-sm">
            <span className="font-medium text-foreground">And no fire.</span>{" "}From morning to
            evening: calling, dancing, cutting themselves. &ldquo;No voice. No one answered; no one
            paid attention.&rdquo;
          </p>
        </div>

        {/* The LORD */}
        <div className="rounded-xl border border-gold-500/40 bg-gold-100/20 p-4 dark:bg-gold-700/10">
          <p className="font-heading text-base font-semibold text-foreground">The altar of the LORD</p>
          <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
            1 Kings 18:30-35 — described almost stone by stone
          </p>
          <div className="mt-3 overflow-hidden rounded-lg bg-stone-50 dark:bg-stone-900">
            <LordsAltar />
          </div>
          <Legend
            items={[
              {
                n: 1,
                label:
                  "Twelve uncut stones — one for each tribe of Jacob, not ten for the northern kingdom.",
                ref: "1 Kings 18:31-32",
              },
              { n: 2, label: "Wood laid in order on the repaired altar.", ref: "1 Kings 18:33" },
              { n: 3, label: "The bull, cut in pieces and laid on the wood.", ref: "1 Kings 18:33" },
              {
                n: 4,
                label: "A trench dug around the altar.",
                ref: "1 Kings 18:32",
              },
              {
                n: 5,
                label:
                  "Four jars of water, poured three times — twelve in all. It runs down the altar and fills the trench.",
                ref: "1 Kings 18:33-35",
              },
            ]}
          />
          <p className="mt-3 rounded-lg bg-muted/60 px-3 py-2 text-sm">
            <span className="font-medium text-foreground">Then he stops working.</span>{" "}Everything
            from here is God&rsquo;s to do &mdash; and the fire consumes the offering, the wood, the
            stones, the dust, and the water in the trench.
          </p>
        </div>
      </div>

      <figcaption className="mt-4 space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-foreground">
            Both altars shown as prepared, before either was answered.
          </span>
          <CertaintyBadge level="biblical" />
        </div>
        <p className="text-xs text-muted-foreground">
          <span className="font-medium text-foreground">What this is: </span>a hand-drawn schematic
          of what 1 Kings 18 states, not a reconstruction of how either altar looked. Every labelled
          feature is in the text; the proportions, stone shapes, and layout are the
          diagram&rsquo;s own. The lopsidedness between the two panels is the point &mdash; the
          narrator lavishes detail on one altar and withholds it from the other.
        </p>
        <p className="text-xs text-muted-foreground">
          <span className="font-medium text-foreground">One uncertainty: </span>the trench is
          measured as holding &ldquo;two seahs of seed&rdquo; (1 Kings 18:32), which may describe
          its capacity or, on the older rabbinic land measure, the area it enclosed. Its actual size
          is genuinely unclear, so no scale is implied here.
        </p>
      </figcaption>
    </figure>
  );
}
