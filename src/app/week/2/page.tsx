import Link from "next/link";
import type { Metadata } from "next";
import { WeekLayout, WeekSection } from "@/components/week-layout";
import { LocationStrip } from "@/components/location-strip";
import { ScriptureTagList } from "@/components/scripture-tag";
import { CompareBlockView } from "@/components/compare-block";
import { CertaintyBadge } from "@/components/certainty-badge";
import { ArtifactFigure } from "@/components/artifact-figure";
import { AltarDiagram } from "@/components/altar-diagram";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Week 2: Who is God? — The Prophet Elijah",
};

const toc = [
  { id: "the-question", label: "The Question" },
  { id: "chapter-17", label: "Chapter 17 in Brief" },
  { id: "carmel", label: "Mount Carmel" },
  { id: "the-prayer", label: "The Prayer" },
  { id: "the-sequence", label: "Fire, Then Worship" },
  { id: "rain", label: "The Sevenfold Prayer" },
  { id: "running", label: "The Hand of the LORD" },
  { id: "miracles", label: "Miracles Don't Turn Hearts" },
  { id: "romans-11", label: "Romans 11" },
  { id: "bookends", label: "Two Bookends" },
  { id: "crescendo", label: "God Acts First" },
  { id: "verdict", label: "God Was Victorious" },
];

export default function Week2Page() {
  return (
    <WeekLayout
      week={2}
      title="Who is God?"
      subtitle="The God who turns hearts back to Himself. 1 Kings 18 is usually taught as Elijah's finest hour — but Elijah's own prayer refuses the credit, and Paul, reading the same story in Romans 11, refuses it too."
      toc={toc}
      prevHref="/week/1"
      nextHref="/week/3"
    >
      <WeekSection id="the-question" kicker="1 Kings 18" title="The Question the Chapter Answers">
        <p>
          Mount Carmel is the most cinematic scene in the Elijah narrative, and it is easy to teach
          it as a story about a brave man who stood alone against 450 opponents and won. That
          reading is not exactly false. It is just not the reading Elijah himself gives.
        </p>
        <p>
          When the moment finally comes and Elijah prays, he does not ask God to vindicate his
          courage, his argument, or his faith. He asks for something else entirely &mdash; and what
          he asks for reframes the whole chapter. The hero of 1 Kings 18 is not the prophet on the
          mountain. It is the God who answers.
        </p>
        <Card className="border-gold-500/30 bg-gold-100/30 dark:bg-gold-700/10">
          <CardContent className="pt-5">
            <p className="font-heading text-lg font-semibold text-foreground">
              Who is God? The God who turns hearts back to Himself.
            </p>
            <p className="mt-2 text-sm">
              Everything the chapter demonstrates &mdash; power over rain, food, life, fire, and
              weather &mdash; builds toward one final claim that no amount of spectacle can produce
              on its own: God is the one who turns a human heart.
            </p>
          </CardContent>
        </Card>
        <p>
          One sentence holds the whole session together, and it is worth saying at the start so the
          group can watch it recur:
        </p>
        <p className="rounded-xl border border-border/70 bg-card px-5 py-4 text-center font-heading text-xl font-semibold text-foreground">
          God acts first.
        </p>
        <p>
          Elijah is genuinely active throughout &mdash; he obeys, confronts, perseveres, and prays
          hard. But every single time, the initiative belongs to God, and the text keeps saying so
          out loud.
        </p>
      </WeekSection>

      <WeekSection id="chapter-17" kicker="1 Kings 17" title="Chapter 17 in Brief">
        <p>
          Chapter 17 deserves a study of its own, and it has one &mdash; a full slide set filed
          under &ldquo;1 Kings 17&rdquo; in Teaching Mode. Here it functions as the ramp into
          Carmel: three quiet, private demonstrations of who actually runs the world, staged before
          any crowd is watching.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <Card>
            <CardContent className="pt-5 text-sm">
              <p className="font-mono text-xs font-semibold uppercase tracking-wide text-gold-700 dark:text-gold-400">
                Rain
              </p>
              <p className="mt-2">
                Elijah announces a drought by the word of the LORD &mdash; on the exact domain Baal
                was worshiped to control (1 Kings 17:1).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5 text-sm">
              <p className="font-mono text-xs font-semibold uppercase tracking-wide text-gold-700 dark:text-gold-400">
                Food
              </p>
              <p className="mt-2">
                Ravens feed him at Cherith; a Sidonian widow&rsquo;s flour and oil do not run out
                (1 Kings 17:2-16).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-5 text-sm">
              <p className="font-mono text-xs font-semibold uppercase tracking-wide text-gold-700 dark:text-gold-400">
                Life
              </p>
              <p className="mt-2">
                The widow&rsquo;s son dies and is raised &mdash; the first resurrection recorded in
                Scripture, in pagan territory (1 Kings 17:17-24).
              </p>
            </CardContent>
          </Card>
        </div>
        <p>
          Note where all of this happens: Zarephath is a Sidonian town in Jezebel&rsquo;s own home
          region. Jesus later points at this precise detail &mdash; &ldquo;there were many widows in
          Israel in the days of Elijah... yet Elijah was sent to none of them but only to
          Zarephath&rdquo; (Luke 4:25-26). Even the warm-up act is about God choosing, not people
          qualifying.
        </p>
        <LocationStrip ids={["cherith", "zarephath", "mount-carmel", "kishon", "jezreel"]} />
        <ScriptureTagList refs={["1 Kings 17:1", "1 Kings 17:8-16", "1 Kings 17:17-24", "Luke 4:25-26"]} />
      </WeekSection>

      <WeekSection id="carmel" kicker="1 Kings 18:17-40" title="Mount Carmel: The Terms of the Test">
        <p>
          Three years into the drought, Elijah summons Ahab, 450 prophets of Baal, and 400 prophets
          of Asherah to Mount Carmel. Two altars, two sacrifices, no fire lit by human hands.
          &ldquo;The God who answers by fire, he is God&rdquo; (1 Kings 18:24).
        </p>
        <Accordion className="w-full">
          <AccordionItem value="limping">
            <AccordionTrigger>&ldquo;How long will you go limping between two opinions?&rdquo;</AccordionTrigger>
            <AccordionContent>
              Before the contest begins, Elijah confronts the crowd: &ldquo;If the LORD is God,
              follow him; but if Baal, then follow him&rdquo; (1 Kings 18:21). The people answer him
              &ldquo;not a word.&rdquo; That silence is the actual problem the day is designed to
              break &mdash; not open rebellion, but a nation that cannot bring itself to choose.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="baal-fails">
            <AccordionTrigger>Baal&rsquo;s prophets cry out from morning until evening</AccordionTrigger>
            <AccordionContent>
              They call, dance around the altar, and cut themselves with swords and lances &mdash; a
              known feature of Canaanite ritual practice, and historical background rather than a
              biblical claim about its purpose. Elijah mocks them: perhaps Baal is deep in thought,
              or relieving himself, or asleep. The verdict is total: &ldquo;There was no voice. No
              one answered; no one paid attention&rdquo; (1 Kings 18:29). Hours of maximum human
              effort produce nothing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rebuild">
            <AccordionTrigger>Elijah repairs the altar of the LORD</AccordionTrigger>
            <AccordionContent>
              Elijah rebuilds a broken-down altar using twelve stones &mdash; one for each tribe of
              Jacob, a deliberate reminder that the whole covenant nation is in view, not just the
              Northern Kingdom. He drenches the sacrifice and the altar three times, filling a
              trench, removing any possibility of a hidden spark. Then he stops working. Everything
              from this point forward is God&rsquo;s to do (1 Kings 18:30-35).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <AltarDiagram className="pt-2" />

        <div className="space-y-4 rounded-xl border border-border/70 bg-muted/30 p-5">
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">
              And what did they actually look like?
            </p>
            <p className="mt-1.5 text-sm">
              Honestly: we don&rsquo;t know, and no image of either one exists. Both were temporary
              structures built for a single afternoon on an open ridge, and 1 Kings describes only
              Elijah&rsquo;s &mdash; twelve uncut stones, a trench dug around it, wood laid in
              order. Of Baal&rsquo;s altar the text says nothing except that his prophets danced
              around it.
            </p>
            <p className="mt-2 text-sm">
              What we do have is the real thing on both sides: excavated Canaanite and Israelite
              altars, so the group can picture the two traditions the contest set against each
              other.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <ArtifactFigure artifactId="canaanite-altar-megiddo" />
            <ArtifactFigure artifactId="israelite-altar-beersheba" />
          </div>
        </div>
        <ScriptureTagList refs={["1 Kings 18:20-24", "1 Kings 18:25-29", "1 Kings 18:30-35"]} />
      </WeekSection>

      <WeekSection id="the-prayer" kicker="1 Kings 18:36-37" title="The Prayer">
        <blockquote className="border-l-4 border-gold-500/60 pl-5 font-heading text-lg italic text-foreground sm:text-xl">
          &ldquo;O LORD, God of Abraham, Isaac, and Israel, let it be known this day that you are
          God in Israel, and that I am your servant, and that I have done all these things at your
          word. Answer me, O LORD, answer me, that this people may know that you, O LORD, are God,
          and that you have turned their hearts back.&rdquo;
          <footer className="mt-2 font-sans text-sm not-italic text-muted-foreground">
            &mdash; 1 Kings 18:36-37 (ESV)
          </footer>
        </blockquote>
        <p>
          Set against the six hours of shouting and self-laceration that preceded it, the prayer is
          startlingly short. But the content is what matters. Notice what Elijah does{" "}
          <span className="italic">not</span> say.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Card className="border-clay-500/30">
            <CardContent className="pt-5 text-sm">
              <p className="font-mono text-xs font-semibold uppercase tracking-wide text-clay-600">
                He does not pray
              </p>
              <ul className="mt-2 space-y-1.5">
                <li>&ldquo;Show them how convincing my argument is.&rdquo;</li>
                <li>&ldquo;Show them my faith.&rdquo;</li>
                <li>&ldquo;Vindicate what I have risked.&rdquo;</li>
                <li>Even: &ldquo;Turn their hearts.&rdquo;</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-gold-500/40 bg-gold-100/30 dark:bg-gold-700/10">
            <CardContent className="pt-5 text-sm">
              <p className="font-mono text-xs font-semibold uppercase tracking-wide text-gold-700 dark:text-gold-400">
                He prays
              </p>
              <ul className="mt-2 space-y-1.5">
                <li>That they may know <span className="font-medium text-foreground">you are God</span>.</li>
                <li>That they may know <span className="font-medium text-foreground">I am your servant</span> &mdash; acting at your word, not my initiative.</li>
                <li>That they may know <span className="font-medium text-foreground">you have turned their hearts back</span>.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <p>
          That third petition is the one that reorganises the chapter. Elijah does not ask God to
          make the people turn. He asks God to prove publicly that the turning is already
          God&rsquo;s own work. The fire is requested as{" "}
          <span className="italic">evidence</span> of what God is doing in Israel&rsquo;s hearts
          &mdash; not as a substitute for it.
        </p>
        <Card>
          <CardContent className="space-y-2 pt-5 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-foreground">A note on the translations</span>
              <CertaintyBadge level="biblical" />
            </div>
            <p>
              The ESV, KJV, and NASB read the Hebrew perfect as completed action &mdash; &ldquo;you
              have turned their hearts back.&rdquo; The NIV renders it as in progress &mdash;
              &ldquo;you are turning their hearts back again.&rdquo; The{" "}
              <span className="italic">timing</span> is genuinely debated. The{" "}
              <span className="italic">agency</span> is not: in every major translation, God is the
              subject of the verb. Whatever else is uncertain here, the turning is something God
              does.
            </p>
            <p className="text-muted-foreground">
              A minority reading preserved in rabbinic tradition takes Elijah to be charging God
              with having turned Israel&rsquo;s heart <span className="italic">backward</span> into
              apostasy. It is worth knowing the reading exists if someone raises it, but it runs
              against the plain sense of a verse in which Elijah is pleading for Israel rather than
              accusing God.
            </p>
          </CardContent>
        </Card>
        <ScriptureTagList refs={["1 Kings 18:36-37"]} />
      </WeekSection>

      <WeekSection id="the-sequence" kicker="1 Kings 18:38-39" title="Fire, Then Worship">
        <p>
          &ldquo;Then the fire of the LORD fell and consumed the burnt offering and the wood and the
          stones and the dust, and licked up the water that was in the trench. And when all the
          people saw it, they fell on their faces and said, &lsquo;The LORD, he is God; the LORD, he
          is God.&rsquo;&rdquo;
        </p>
        <p>
          The order is worth slowing down for, because it is the pattern the whole study is
          circling:
        </p>
        <div className="rounded-xl border border-gold-500/40 bg-gold-100/30 p-5 dark:bg-gold-700/10">
          <p className="text-center font-heading text-lg font-semibold text-foreground">God acts.</p>
          <p className="my-1 text-center text-2xl text-gold-600 dark:text-gold-400">&darr;</p>
          <p className="text-center font-heading text-lg font-semibold text-foreground">People worship.</p>
          <p className="mt-3 text-center text-sm">Never the reverse.</p>
        </div>
        <p>
          Israel did not worship its way into God&rsquo;s response. God moved first, and worship was
          the answer to what He had already done. Elijah&rsquo;s prayer told us to expect exactly
          this &mdash; and the prophets of Baal spent an entire day demonstrating the alternative,
          which produced nothing but blood and silence.
        </p>
        <p>
          The prophets of Baal are then executed at the Kishon below &mdash; the covenant penalty
          for leading Israel into apostasy (Deuteronomy 13:1-5), carried out at the very spot where
          the Kishon had once swept away another army opposing the LORD&rsquo;s people (Judges 4-5).
        </p>
        <ScriptureTagList refs={["1 Kings 18:38-39", "1 Kings 18:40", "Deuteronomy 13:1-5"]} />
      </WeekSection>

      <WeekSection id="rain" kicker="1 Kings 18:1, 41-45" title="The Sevenfold Prayer">
        <p>
          Here is the detail that is easy to read straight past. God had{" "}
          <span className="italic">already promised the rain</span> &mdash; before Carmel, before
          the fire, before any of it:
        </p>
        <blockquote className="border-l-4 border-gold-500/60 pl-5 font-heading text-lg italic text-foreground">
          &ldquo;Go, show yourself to Ahab, and I will send rain upon the earth.&rdquo;
          <footer className="mt-2 font-sans text-sm not-italic text-muted-foreground">
            &mdash; 1 Kings 18:1
          </footer>
        </blockquote>
        <p>
          The outcome was settled before the contest began. So what does Elijah do once the fire has
          fallen? He does not stroll down the mountain and wait for weather. He climbs to the top of
          Carmel, bows to the ground, and puts his face between his knees &mdash; and then sends his
          servant to look toward the sea.
        </p>
        <div className="rounded-xl border border-border/70 bg-card p-5">
          <div className="space-y-1.5 text-sm">
            {[
              "Once. “There is nothing.”",
              "Twice. Nothing.",
              "Three times. Nothing.",
              "Four. Five. Six. Nothing.",
            ].map((line) => (
              <p key={line} className="text-muted-foreground">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-3 border-t border-border/60 pt-3 font-heading text-base font-semibold text-foreground">
            The seventh time: &ldquo;Behold, a little cloud like a man&rsquo;s hand is rising from
            the sea.&rdquo;
          </p>
        </div>
        <p>
          Elijah prayed hard, and repeatedly, for something God had already committed Himself to do.
          That is not wasted effort or weak faith &mdash; it is the shape the whole Bible gives to
          prayer. The promise did not make prayer unnecessary. It made prayer{" "}
          <span className="italic">confident</span>.
        </p>
        <Card className="border-gold-500/30 bg-gold-100/30 dark:bg-gold-700/10">
          <CardContent className="pt-5 text-sm">
            <p className="font-medium text-foreground">
              James gives us the New Testament commentary
            </p>
            <p className="mt-2">
              &ldquo;Elijah was a man with a nature like ours, and he prayed fervently that it might
              not rain, and for three years and six months it did not rain on the earth. Then he
              prayed again, and heaven gave rain&rdquo; (James 5:17-18).
            </p>
            <p className="mt-2">
              Notice that 1 Kings 17:1 never actually says Elijah{" "}
              <span className="italic">prayed</span> for the drought &mdash; it records him
              announcing it. James tells us what was going on behind the announcement. If Matthew 17
              tells us why Elijah matters, James 5 tells us what we are meant to do about it.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2 pt-5 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-foreground">
                &ldquo;A man with a nature like ours&rdquo;
              </span>
              <CertaintyBadge level="biblical" />
            </div>
            <p>
              James does not say Elijah was extraordinary. He says Elijah was{" "}
              <span className="italic">like us</span>. The Greek word is{" "}
              <span className="italic">homoiopath&#275;s</span>, and it appears only twice in the New
              Testament. The other place is Acts 14:15, where Paul and Barnabas use it to stop a
              crowd from worshipping them: &ldquo;we also are men, of like nature with you.&rdquo;
            </p>
            <p>
              Both times, the word does the same job &mdash; it deflates the veneration of a human
              being. By the time James writes, Elijah has become almost legendary, and James reaches
              for precisely the word that refuses the legend. Don&rsquo;t admire Elijah from a
              distance. Learn from him.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2 pt-5 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-foreground">On &ldquo;three years and six months&rdquo;</span>
              <CertaintyBadge level="scholarly-consensus" />
            </div>
            <p>
              James (and Jesus, in Luke 4:25) say three and a half years; 1 Kings 18:1 says
              &ldquo;in the third year.&rdquo; The usual explanation is that the figures count from
              different starting points &mdash; the longer one from the last rainfall, the shorter
              from Elijah&rsquo;s arrival at Zarephath or the start of his concealment. That is a
              reasonable harmonization rather than something either text states, and is worth
              presenting as such if it comes up.
            </p>
          </CardContent>
        </Card>
        <ScriptureTagList
          refs={["1 Kings 18:1", "1 Kings 18:41-45", "James 5:17-18", "Acts 14:15", "Luke 4:25"]}
        />
      </WeekSection>

      <WeekSection id="running" kicker="1 Kings 18:46" title="The Hand of the LORD">
        <p>
          The chapter ends with a detail that is usually told as a sports story: Elijah outruns a
          royal chariot for roughly seventeen miles, from Carmel to the entrance of Jezreel, at the
          end of the longest day of his life.
        </p>
        <p>
          But the text is not actually interested in his fitness. It tells you the reason in the
          first clause of the sentence:
        </p>
        <blockquote className="border-l-4 border-gold-500/60 pl-5 font-heading text-lg italic text-foreground">
          &ldquo;And <span className="not-italic font-semibold">the hand of the LORD was on
          Elijah</span>, and he gathered up his garment and ran before Ahab to the entrance of
          Jezreel.&rdquo;
          <footer className="mt-2 font-sans text-sm not-italic text-muted-foreground">
            &mdash; 1 Kings 18:46
          </footer>
        </blockquote>
        <p>
          Even his strength comes from God. That is perfectly consistent with everything else in the
          chapter: the fire came from God, the rain came from God, the turned hearts came from God
          &mdash; and now so do the legs.
        </p>
        <Card>
          <CardContent className="space-y-2 pt-5 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-medium text-foreground">Why run <span className="italic">before</span> the chariot?</span>
              <CertaintyBadge level="historical-background" />
            </div>
            <p>
              Running ahead of a king&rsquo;s chariot was the recognised job of a royal herald or
              outrunner in the ancient Near East &mdash; Samuel warns Israel that a king will make
              their sons &ldquo;run before his chariots&rdquo; (1 Samuel 8:11), and both Absalom and
              Adonijah acquire runners when making a play for the throne (2 Samuel 15:1; 1 Kings
              1:5). Elijah taking that position is not mockery; it reads as a prophet honouring the
              king he has just defeated, which makes what Ahab does next all the sadder.
            </p>
          </CardContent>
        </Card>
        <ArtifactFigure artifactId="carmel-view-1915" className="mx-auto max-w-2xl" />
        <p>
          And then hold on to the irony, because next week runs straight into it: the same legs that
          carried Elijah in the strength of the LORD will carry him into the wilderness in fear
          &mdash; within a single chapter.
        </p>
        <ScriptureTagList refs={["1 Kings 18:46", "1 Samuel 8:11", "2 Samuel 15:1"]} />
      </WeekSection>

      <WeekSection id="miracles" kicker="The Week 1 Payoff" title="Why Miracles Don't Turn Hearts">
        <p>
          If spectacle could change hearts, Israel&rsquo;s history would read very differently.
          Everything covered in Week 1 was quietly building this argument:
        </p>
        <ul className="space-y-2.5">
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" />
            <span>
              <span className="font-medium text-foreground">Israel saw the Red Sea part</span>{" "}
              &mdash; and made a golden calf before Moses came back down the mountain (Exodus 14;
              32:1-6).
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" />
            <span>
              <span className="font-medium text-foreground">Solomon saw God personally, twice</span>{" "}
              &mdash; and Scripture says so in the very verse that condemns him: his heart
              &ldquo;had turned away from the LORD, the God of Israel, who had appeared to him
              twice&rdquo; (1 Kings 11:9).
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" />
            <span>
              <span className="font-medium text-foreground">Jeroboam received a direct prophecy</span>{" "}
              and the offer of a dynasty as enduring as David&rsquo;s &mdash; and built two golden
              calves anyway (1 Kings 11:29-39; 12:25-33).
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" />
            <span>
              <span className="font-medium text-foreground">Ahab stood on Carmel and watched the fire fall</span>{" "}
              &mdash; and three chapters later he is complicit in the judicial murder of Naboth
              (1 Kings 21).
            </span>
          </li>
        </ul>
        <p>
          Miracles are evidence, and evidence is not the same thing as a new heart. A heart has to
          be turned, and Scripture is consistent about who does the turning: God circumcises the
          heart so Israel will love Him (Deuteronomy 30:6); God gives a new heart and a new spirit
          (Ezekiel 36:26-27); a king&rsquo;s heart is a stream of water in God&rsquo;s hand
          (Proverbs 21:1); the Lord opens Lydia&rsquo;s heart to respond (Acts 16:14).
        </p>
        <ScriptureTagList
          refs={[
            "1 Kings 11:9",
            "1 Kings 12:25-33",
            "1 Kings 21",
            "Deuteronomy 30:6",
            "Proverbs 21:1",
            "Ezekiel 36:26-27",
            "Acts 16:14",
          ]}
        />
      </WeekSection>

      <WeekSection id="romans-11" kicker="Romans 11:2-6" title="&ldquo;I Have Kept for Myself&rdquo;">
        <p>
          Romans 11 is not a New Testament detour bolted onto an Old Testament story. Paul is
          reading Elijah &mdash; explicitly, by name &mdash; and he lands exactly where
          Elijah&rsquo;s Carmel prayer already stood.
        </p>
        <p>
          Paul quotes Elijah&rsquo;s complaint from 1 Kings 19 (&ldquo;Lord, they have killed your
          prophets... and I alone am left&rdquo;) and then God&rsquo;s answer. Watch the direction
          of the verb:
        </p>
        <CompareBlockView
          compare={{
            leftLabel: "The misreading",
            leftRef: "—",
            leftText:
              "“Seven thousand kept themselves faithful.” Faithfulness as a human achievement that God notices and rewards.",
            rightLabel: "Romans 11:4",
            rightRef: "Romans 11:4",
            rightText:
              "“I have kept for myself seven thousand men who have not bowed the knee to Baal.”",
            sharedPhrase: "God is the one doing the keeping.",
            note: "The Hebrew of 1 Kings 19:18 runs the same way — “I will leave seven thousand in Israel.” Paul is not importing an idea; he is reading one out.",
          }}
        />
        <p>
          And then the conclusion Paul draws:{" "}
          <span className="font-medium text-foreground">
            &ldquo;So too at the present time there is a remnant, chosen by grace&rdquo;
          </span>{" "}
          (Romans 11:5). He immediately closes off any other reading: &ldquo;But if it is by grace,
          it is no longer on the basis of works; otherwise grace would no longer be grace&rdquo;
          (Romans 11:6).
        </p>
        <Card className="border-gold-500/30 bg-gold-100/30 dark:bg-gold-700/10">
          <CardContent className="pt-5 text-sm">
            <p className="font-medium text-foreground">The honest tension &mdash; and its resolution</p>
            <p className="mt-2">
              All Israel shouts &ldquo;The LORD, he is God&rdquo; on Carmel. Yet within one chapter
              Jezebel is still on the throne, Elijah is a fugitive, and he tells God the nation has
              forsaken the covenant (1 Kings 19:10). If Carmel had been a national conversion,
              chapter 19 would make no sense.
            </p>
            <p className="mt-2">
              Paul&rsquo;s category holds both facts at once. God really did turn hearts back
              &mdash; and what He turned was a remnant, whose size He knew and His prophet did not.
            </p>
          </CardContent>
        </Card>
        <p className="pt-1 text-sm">
          <Link href="/theology/romans-11" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            Full discussion: Romans 11 and the Remnant &rarr;
          </Link>
        </p>
        <ScriptureTagList refs={["Romans 11:1-6", "Romans 11:4", "1 Kings 19:14-18"]} />
      </WeekSection>

      <WeekSection id="bookends" kicker="Romans 11 &amp; James 5" title="Two Bookends">
        <p>
          Two New Testament writers look back at Elijah, and they draw two different lessons. Put
          them side by side and they hold the session in place.
        </p>
        <CompareBlockView
          compare={{
            leftLabel: "ROMANS 11 — What God does",
            leftRef: "Romans 11:2-6",
            leftText:
              "Paul looks back at Elijah to teach God's sovereign grace in preserving a remnant. “I have kept for myself seven thousand.” Salvation belongs to God.",
            rightLabel: "JAMES 5 — What we are to do",
            rightRef: "James 5:16-18",
            rightText:
              "James looks back at Elijah to teach the power and persistence of prayer in the life of an ordinary believer. “A man with a nature like ours.”",
            sharedPhrase: "God ordains both the ends and the means.",
            note: "These two truths do not compete. Each one keeps the other from curdling into a distortion.",
          }}
        />
        <p>
          Without James, the week&rsquo;s emphasis on God&rsquo;s initiative can quietly slide into
          fatalism &mdash; if God turns hearts and sends rain, why pray? Without Romans 11, the
          emphasis on fervent prayer can slide into the opposite error, treating prayer as leverage
          that produces results on our terms.
        </p>
        <p>
          1 Kings 18 simply does both at once and never treats it as a problem. God promises the
          rain in verse 1; Elijah prays seven times for it in verse 43. Both are true on the same
          mountain, on the same afternoon.
        </p>
        <p className="pt-1 text-sm">
          <Link href="/theology/james-5" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            James 5 and the Power of Prayer &rarr;
          </Link>{" "}
          <Link href="/themes/prayer" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            Explore the theme of Prayer &rarr;
          </Link>
        </p>
        <ScriptureTagList refs={["Romans 11:2-6", "James 5:13-18", "James 5:17-18"]} />
      </WeekSection>

      <WeekSection id="crescendo" kicker="The Golden Thread" title="God Acts First">
        <p>
          Read the two chapters as a single ascending argument and the shape becomes obvious. Elijah
          is busy the whole way through &mdash; but at every rung, the initiative is God&rsquo;s,
          and each demonstration is more personal than the last.
        </p>
        <ol className="space-y-2">
          {[
            { label: "He sends the drought, and He sends the rain", ref: "1 Kings 17:1; 18:41-45" },
            { label: "He feeds His prophet, and provides through a widow", ref: "1 Kings 17:4-6, 14-16" },
            { label: "He gives life back to the widow's son", ref: "1 Kings 17:21-22" },
            { label: "He answers by fire", ref: "1 Kings 18:38" },
            { label: "He blackens the sky and breaks the drought", ref: "1 Kings 18:44-45" },
            { label: "He strengthens Elijah to run", ref: "1 Kings 18:46" },
          ].map((item) => (
            <li
              key={item.label}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-lg border border-border/70 bg-card px-4 py-2.5"
            >
              <span className="text-foreground">{item.label}</span>
              <span className="font-mono text-xs text-muted-foreground">{item.ref}</span>
            </li>
          ))}
          <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-lg border border-gold-500/50 bg-gold-100/40 px-4 py-3 dark:bg-gold-700/15">
            <span className="font-heading text-lg font-semibold text-foreground">
              And finally &mdash; He controls hearts.
            </span>
            <span className="font-mono text-xs text-gold-700 dark:text-gold-400">1 Kings 18:37</span>
          </li>
        </ol>
        <p>
          The rain came back and the nation still needed its heart turned. That is why the last item
          on the list is the point of the whole chapter, and why it is the one Elijah actually prayed
          for.
        </p>
        <p>
          And note what the list does <span className="italic">not</span> say. Elijah obeyed,
          confronted, rebuilt, prayed, and persevered at every one of these points &mdash; the
          spotlight simply never lands on him. That is the golden thread, and it is the reason
          James can turn round centuries later and say: this is available to you too.
        </p>
        <p className="pt-1 text-sm">
          <Link href="/themes/turned-hearts" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            Explore the theme of Turned Hearts &rarr;
          </Link>{" "}
          <Link href="/themes/prayer" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            Prayer &rarr;
          </Link>{" "}
          <Link href="/themes/rain" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            Rain &rarr;
          </Link>{" "}
          <Link href="/themes/baal" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            Baal &rarr;
          </Link>
        </p>
      </WeekSection>

      <WeekSection id="verdict" kicker="The Ending" title="God Was Victorious">
        <p>
          There is a version of this study that ends with the room impressed by Elijah &mdash; his
          nerve, his sarcasm, his lonely stand, the seventeen-mile run in front of Ahab&rsquo;s
          chariot to Jezreel (1 Kings 18:46). That is a good Bible study.
        </p>
        <p>
          But Elijah himself will not let us end there. He does not close the day saying{" "}
          <span className="italic">look what I did</span>. He prays{" "}
          <span className="italic">that you have turned their hearts back</span>. The prophet on the
          mountain hands the credit away before the fire even falls.
        </p>
        <div className="rounded-xl border border-gold-500/40 bg-gold-100/40 p-6 text-center dark:bg-gold-700/10">
          <p className="text-sm text-muted-foreground line-through">Elijah was victorious.</p>
          <p className="mt-2 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            God was victorious.
          </p>
        </div>
        <p>
          That is not, however, a reason to leave Elijah on a shelf. James is emphatic about the
          application, and it is the opposite of distant admiration: don&rsquo;t just be impressed
          by Elijah &mdash; <span className="italic">pray like him</span>. Trust God like him.
          Remember that he was a man with a nature like ours, and that everything he accomplished
          came from the God he was praying to.
        </p>
        <p>
          And this makes next week stronger, not weaker. If God has just turned a nation&rsquo;s
          heart back to Himself &mdash; and just carried His prophet seventeen miles by His own hand
          &mdash; why is Elijah running?
        </p>
        <p>
          Chapter 19 is not merely a story about a prophet&rsquo;s emotional collapse. It is where we
          learn that the God who turns a nation&rsquo;s heart is also the God who gently restores one
          weary prophet: with sleep, with food, with a voice that is not in the wind or the
          earthquake or the fire &mdash; and with the news that He has kept seven thousand others
          Elijah never knew about.
        </p>
        <ScriptureTagList refs={["1 Kings 18:41-46", "1 Kings 19:1-18", "Romans 11:5"]} />
      </WeekSection>
    </WeekLayout>
  );
}
