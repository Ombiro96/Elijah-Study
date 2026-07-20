import Link from "next/link";
import type { Metadata } from "next";
import { WeekLayout, WeekSection } from "@/components/week-layout";
import { LocationStrip } from "@/components/location-strip";
import { ScriptureTagList } from "@/components/scripture-tag";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Week 3: When God's Servants Break — The Prophet Elijah" };

const toc = [
  { id: "from-carmel-to-fear", label: "From Carmel to Fear" },
  { id: "broom-tree", label: "The Broom Tree" },
  { id: "angel-provision", label: "The Angel's Provision" },
  { id: "forty-days-horeb", label: "Forty Days to Horeb" },
  { id: "still-small-voice", label: "The Still Small Voice" },
  { id: "seven-thousand", label: "The 7,000" },
  { id: "commission", label: "The Threefold Commission" },
];

export default function Week3Page() {
  return (
    <WeekLayout
      week={3}
      title="When God's Servants Break"
      subtitle="One chapter after the greatest public victory of his life, Elijah asks God to let him die. 1 Kings 19 is one of Scripture's most honest portraits of what happens when a faithful servant reaches the end of himself."
      toc={toc}
      prevHref="/week/2"
      nextHref="/week/4"
    >
      <WeekSection id="from-carmel-to-fear" kicker="1 Kings 19:1-3" title="Jezebel's Threat and Elijah's Fear">
        <p>
          Ahab reports everything to Jezebel &mdash; the fire, the rain, the death of her prophets.
          Her response is immediate and specific: a message vowing to kill Elijah within a day,
          exactly as he had killed her prophets. &ldquo;Then he was afraid, and he arose and ran for
          his life&rdquo; (1 Kings 19:3).
        </p>
        <p>
          This is worth sitting with rather than rushing past. Only a chapter earlier, Elijah called
          down fire from heaven and outran Ahab&rsquo;s chariot to Jezreel. Now a single threatening
          message undoes him completely. Scripture does not sand down this contradiction or explain
          it away &mdash; it simply reports it, as an honest picture of how despair can follow hard
          on the heels of triumph, even for the most faithful.
        </p>
        <ScriptureTagList refs={["1 Kings 19:1-3"]} />
      </WeekSection>

      <WeekSection id="broom-tree" kicker="1 Kings 19:4" title="The Broom Tree">
        <p>
          Elijah leaves his servant at Beersheba &mdash; the southernmost town of Judah, the edge of
          familiar territory &mdash; and goes a further day&rsquo;s journey alone into the
          wilderness. There, under a broom tree (a desert shrub offering only thin shade), he asks
          to die: &ldquo;It is enough; now, O LORD, take away my life, for I am no better than my
          fathers&rdquo; (1 Kings 19:4).
        </p>
        <p>
          This is not staged despair. It is a real, specific death wish from the same prophet who
          had just stood unflinching before 450 opposing prophets and a hostile king. Fatigue,
          isolation, and fear together can bring down even the most spiritually decorated servant of
          God &mdash; a sobering and pastorally important note for any reader tempted to think
          faithful service should make a person immune to collapse.
        </p>
        <ScriptureTagList refs={["1 Kings 19:4"]} />
      </WeekSection>

      <WeekSection id="angel-provision" kicker="1 Kings 19:5-8" title="The Angel's Provision">
        <p>
          God&rsquo;s first response to Elijah&rsquo;s despair is not a rebuke, a sermon, or even a
          direct word &mdash; it is sleep, and then food. An angel touches him twice, providing
          baked bread and water, and lets him sleep between. &ldquo;Arise and eat, for the journey is
          too great for you&rdquo; (1 Kings 19:7).
        </p>
        <Card className="border-gold-500/30 bg-gold-100/30 dark:bg-gold-700/10">
          <CardContent className="pt-5 text-sm">
            Before God addresses Elijah&rsquo;s theology or his fear, He addresses his body. Rest and
            food come before correction &mdash; a pattern many readers find strikingly gentle for a
            man who, moments earlier, asked to die.
          </CardContent>
        </Card>
        <ScriptureTagList refs={["1 Kings 19:5-8"]} />
      </WeekSection>

      <WeekSection id="forty-days-horeb" kicker="1 Kings 19:8" title="Forty Days to Mount Horeb">
        <p>
          Strengthened by that food, Elijah travels forty days and nights to &ldquo;Horeb, the
          mountain of God&rdquo; &mdash; the same mountain, traditionally identified with Sinai,
          where Moses received the covenant and spent forty days in God&rsquo;s presence (Exodus
          24:18). The parallel is almost certainly deliberate: Elijah is being cast, narratively, as
          a new Moses figure, journeying to the same place, for a comparable length of time, in
          crisis.
        </p>
        <LocationStrip ids={["beersheba", "horeb"]} />
        <ScriptureTagList refs={["1 Kings 19:8", "Exodus 24:18"]} />
      </WeekSection>

      <WeekSection id="still-small-voice" kicker="1 Kings 19:9-13" title="Wind, Earthquake, Fire — and a Still Small Voice">
        <p>
          At Horeb, God asks Elijah directly: &ldquo;What are you doing here?&rdquo; Elijah answers
          with his complaint &mdash; he alone remains faithful, and now his life is sought too. God
          tells him to stand on the mountain, &ldquo;for the LORD is about to pass by.&rdquo;
        </p>
        <p>
          A great wind tears at the mountains; the LORD is not in the wind. An earthquake follows;
          the LORD is not in the earthquake. Fire follows; the LORD is not in the fire. Then comes
          &ldquo;a low whisper&rdquo; (or, in older translations, &ldquo;a still small voice&rdquo;)
          &mdash; and it is there that Elijah wraps his face in his cloak and goes out to meet God.
        </p>
        <p>
          After everything Elijah has seen God do through spectacle &mdash; fire from heaven, a
          drought-ending storm &mdash; God chooses, at the moment of Elijah&rsquo;s deepest need, to
          meet him quietly instead. The dramatic displays are not absent from Elijah&rsquo;s story;
          they are simply not where God locates Himself here.
        </p>
        <ScriptureTagList refs={["1 Kings 19:9-13"]} />
      </WeekSection>

      <WeekSection id="seven-thousand" kicker="1 Kings 19:14-18" title="The 7,000">
        <p>
          Asked the same question again, Elijah repeats his complaint word for word: &ldquo;I, even
          I only, am left&rdquo; (1 Kings 19:14). God&rsquo;s answer both corrects and comforts him:
          7,000 in Israel have not bowed the knee to Baal or kissed him &mdash; a remnant entirely
          unknown to Elijah himself.
        </p>
        <Card className="border-border/70">
          <CardContent className="pt-5 text-sm">
            <span className="font-medium text-foreground">Romans 11 later returns to this exact
            moment.</span> Paul cites Elijah&rsquo;s complaint and God&rsquo;s answer about the 7,000
            as evidence of a recurring pattern: God always preserves a believing remnant, &ldquo;chosen
            by grace,&rdquo; even when it is invisible to the person feeling most alone in their
            faithfulness.{" "}
            <Link href="/theology/romans-11" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
              Read more on Romans 11 →
            </Link>
          </CardContent>
        </Card>
        <ScriptureTagList refs={["1 Kings 19:14-18", "Romans 11:1-6"]} />
      </WeekSection>

      <WeekSection id="commission" kicker="1 Kings 19:15-21" title="The Threefold Commission">
        <p>
          God gives Elijah three specific tasks: anoint Hazael as king over Aram, anoint Jehu as
          king over Israel, and anoint Elisha as prophet in his own place. What actually happens
          next in the narrative is easy to miss but theologically significant.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-gold-500/40 bg-gold-100/30 dark:bg-gold-700/10">
            <CardContent className="pt-5">
              <Badge className="bg-gold-gradient text-stone-900">Personal</Badge>
              <p className="mt-2 font-heading text-lg font-semibold">Elisha</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Elijah himself finds Elisha plowing and casts his cloak over him (1 Kings 19:19-21).
                Elisha becomes his direct, personally mentored successor.
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/70">
            <CardContent className="pt-5">
              <Badge variant="outline">Mediated</Badge>
              <p className="mt-2 font-heading text-lg font-semibold">Hazael</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Anointed only years later, through Elisha, who weeps as he foresees the cruelty
                Hazael will inflict on Israel as king of Aram (2 Kings 8:7-15).
              </p>
            </CardContent>
          </Card>
          <Card className="border-border/70">
            <CardContent className="pt-5">
              <Badge variant="outline">Mediated</Badge>
              <p className="mt-2 font-heading text-lg font-semibold">Jehu</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Anointed only years later, when Elisha sends a young prophet to anoint him privately
                among the army officers (2 Kings 9:1-10).
              </p>
            </CardContent>
          </Card>
        </div>
        <p>
          Elijah personally commissions only Elisha; Hazael and Jehu are named in the same breath
          but anointed only later, through Elisha&rsquo;s ministry rather than Elijah&rsquo;s own
          hand. The lesson is not that Elijah failed to complete his commission &mdash; it is that
          God&rsquo;s purposes are never limited to what one prophet can personally accomplish in
          his own lifetime. What Elijah is given to see and what he is given to carry out are not
          the same thing, and both matter.
        </p>
        <p className="pt-1 text-sm">
          <Link href="/family-trees" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            See the full prophetic succession diagram →
          </Link>
        </p>
        <ScriptureTagList refs={["1 Kings 19:15-21", "2 Kings 8:7-15", "2 Kings 9:1-10"]} />
      </WeekSection>
    </WeekLayout>
  );
}
