import Link from "next/link";
import type { Metadata } from "next";
import { WeekLayout, WeekSection } from "@/components/week-layout";
import { TransfigurationCompare } from "@/components/transfiguration-compare";
import { KingdomSplit } from "@/components/kingdom-split";
import { ScriptureTagList, ScriptureTag } from "@/components/scripture-tag";
import { CertaintyBadge } from "@/components/certainty-badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = { title: "Week 1: Why Elijah? — The Prophet Elijah" };

const toc = [
  { id: "law-and-prophets", label: "Jesus and the Law & Prophets" },
  { id: "transfiguration", label: "The Transfiguration" },
  { id: "israel-timeline", label: "Israel Timeline" },
  { id: "joshua-jericho", label: "Joshua and Jericho" },
  { id: "division-of-kingdom", label: "Division of the Kingdom" },
  { id: "why-prophets", label: "Why Prophets?" },
  { id: "young-prophet", label: "The Young Prophet" },
  { id: "omri", label: "Omri" },
  { id: "ahab", label: "Ahab" },
];

export default function Week1Page() {
  return (
    <WeekLayout
      week={1}
      title="Why Elijah?"
      subtitle="Before Elijah ever speaks a word in Scripture, four centuries of history — the Law, the Prophets, a united kingdom torn in two, and a king determined to outdo every idolatry before him — have already set the stage."
      toc={toc}
      nextHref="/week/2"
    >
      <WeekSection id="law-and-prophets" kicker="Matthew 5:17" title="Jesus and the Law & the Prophets">
        <p>
          &ldquo;Do not think that I have come to abolish the Law or the Prophets; I have not come
          to abolish them but to fulfill them&rdquo; (Matthew 5:17). Before we can understand
          Elijah, we need to understand what &ldquo;the Law and the Prophets&rdquo; meant to
          Jesus&rsquo; first hearers &mdash; because Elijah lives entirely inside that second
          category, and his story only makes sense as part of a larger whole.
        </p>
        <p>
          <span className="font-medium text-foreground">The Law</span> (Torah) is the five books
          of Moses &mdash; not simply rules, but the covenant document establishing who Israel is
          and how they are to live as God&rsquo;s people. <span className="font-medium text-foreground">The Prophets</span>{" "}
          include both the &ldquo;Former Prophets&rdquo; (the historical narrative from Joshua
          through Kings, where Elijah&rsquo;s story is found) and the &ldquo;Latter Prophets&rdquo;
          (Isaiah through Malachi). Together, &ldquo;the Law and the Prophets&rdquo; was shorthand
          for the entire Hebrew Scriptures.
        </p>
        <p>
          Jesus&rsquo; claim is bold: he is not contradicting this whole body of Scripture, he is{" "}
          <em>fulfilling</em> it &mdash; becoming the reality the Law and the Prophets were always
          pointing toward. That is the lens for this entire study: Elijah is not an isolated hero
          story. He is one chapter in a storyline that ends at the cross and empty tomb.
        </p>
        <ScriptureTagList refs={["Matthew 5:17", "Luke 24:27"]} />
        <p className="pt-2 text-sm">
          <Link href="/theology/law-and-prophets" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            Read the full theology of the Law and the Prophets →
          </Link>
        </p>
      </WeekSection>

      <WeekSection id="transfiguration" kicker="Matthew 17" title="The Transfiguration">
        <p>
          Fast-forward nearly a thousand years past Elijah&rsquo;s ministry: Jesus is transfigured
          on a mountain before Peter, James, and John, and two figures appear beside him &mdash;
          Moses and Elijah. Of all the towering figures of the Old Testament, why these two?
        </p>
        <TransfigurationCompare />
        <p>
          Moses represents the Law he mediated at Sinai; Elijah represents the Prophets, both in
          his own dramatic ministry and as the one whose return Malachi promised before &ldquo;the
          great and awesome day of the LORD&rdquo; (Malachi 4:5-6). When Peter suggests building
          three tents &mdash; treating the three men as equals &mdash; the Father&rsquo;s voice
          corrects him: &ldquo;This is my beloved Son... listen to him.&rdquo; Moses and Elijah
          disappear. Jesus alone remains. That is the whole shape of this study in a single scene:
          the Law and the Prophets converge on, and are subordinated to, Jesus Christ.
        </p>
      </WeekSection>

      <WeekSection id="israel-timeline" kicker="From Joshua to Ahab" title="Israel Timeline">
        <p>
          To understand the world Elijah steps into, we need the broad shape of Israel&rsquo;s
          history leading up to him: Joshua&rsquo;s conquest, the unstable era of the Judges, the
          united monarchy under Saul, David, and Solomon, the kingdom&rsquo;s division, and finally
          the dynasty of Omri and Ahab, in whose reign Elijah appears.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {["Joshua", "Judges", "Saul", "David", "Solomon", "Division", "Jeroboam", "Omri", "Ahab", "Elijah"].map((s) => (
            <span key={s} className="rounded-full border border-gold-500/30 bg-gold-100/40 px-3 py-1 text-xs font-medium text-stone-700 dark:bg-gold-700/10 dark:text-gold-200">
              {s}
            </span>
          ))}
        </div>
        <p className="pt-2 text-sm">
          <Link href="/timeline" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            Explore the full interactive timeline, including the synchronized Israel/Judah kings view →
          </Link>
        </p>
      </WeekSection>

      <WeekSection id="joshua-jericho" kicker="Joshua 6 → 1 Kings 16" title="Joshua and Jericho">
        <p>
          Centuries before Elijah, Joshua leads Israel across the Jordan and conquers Jericho, the
          first city to fall in the land (Joshua 6). After its destruction, Joshua pronounces a
          curse: whoever rebuilds the city will lay its foundation at the cost of his firstborn,
          and set up its gates at the cost of his youngest (Joshua 6:26).
        </p>
        <p>
          Fast-forward roughly three and a half centuries, into the very reign in which Elijah
          appears: &ldquo;In his days Hiel of Bethel built Jericho. He laid its foundation at the
          cost of Abiram his firstborn, and set up its gates at the cost of his youngest son Segub,
          according to the word of the LORD, which he spoke by Joshua the son of Nun&rdquo; (1 Kings
          16:34).
        </p>
        <Card className="border-gold-500/30 bg-gold-100/30 dark:bg-gold-700/10">
          <CardContent className="pt-5">
            <p className="font-heading text-lg font-semibold">The major lesson</p>
            <p className="mt-1 text-sm">
              This is not incidental detail. Placed right before Elijah&rsquo;s introduction, it is
              a deliberate demonstration that <span className="font-medium text-foreground">God&rsquo;s word never fails</span> &mdash;
              even when centuries pass in between. Everything Elijah is about to say and do carries
              that same weight.
            </p>
          </CardContent>
        </Card>
        <ScriptureTagList refs={["Joshua 6", "Joshua 6:26", "1 Kings 16:34"]} />
        <p className="pt-2 text-sm">
          <Link href="/maps?location=jericho" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            See Jericho on the interactive map →
          </Link>
        </p>
      </WeekSection>

      <WeekSection id="division-of-kingdom" kicker="1 Kings 12" title="Division of the Kingdom">
        <p>
          Solomon&rsquo;s son Rehoboam rejects the elders&rsquo; counsel to lighten his father&rsquo;s
          heavy labor demands, threatening even harsher treatment. The ten northern tribes secede
          under Jeroboam, splitting the united kingdom permanently into Israel (north) and Judah
          (south).
        </p>
        <KingdomSplit />
        <p>
          Jeroboam, fearing pilgrimages to Jerusalem would eventually win the people back to the
          house of David, sets up golden calves at Bethel and Dan &mdash; sanctuary cities at
          opposite ends of his kingdom &mdash; and appoints his own priesthood outside the tribe of
          Levi, since the Levites remained loyal to the Jerusalem Temple and largely relocated to
          Judah (2 Chronicles 11:13-17).
        </p>
        <ScriptureTagList refs={["1 Kings 12", "1 Kings 12:25-33"]} />
      </WeekSection>

      <WeekSection id="why-prophets" kicker="Covenant Messengers" title="Why Prophets?">
        <p>
          It is easy to think of prophets primarily as people who predict the future. Scripture
          presents something more specific: prophets are <span className="font-medium text-foreground">covenant messengers</span>.
          Prediction is one of their tools, but their core task is to hold Israel to the covenant
          Moses already delivered at Sinai.
        </p>
        <p>The basic pattern running through Joshua–Kings is simple and repeats constantly:</p>
        <ol className="list-decimal space-y-1 pl-5 text-sm">
          <li><span className="font-medium text-foreground">Moses gives the covenant</span> — the terms of the relationship between God and Israel.</li>
          <li><span className="font-medium text-foreground">Kings (and the people) violate it</span> — through idolatry, injustice, or both.</li>
          <li><span className="font-medium text-foreground">Prophets call Israel back</span> — enforcing covenant terms already established, not inventing new religion.</li>
        </ol>
        <p>
          Elijah&rsquo;s entire ministry fits this pattern exactly: he does not introduce a new
          message, he enforces the first commandment against a king and queen who have abandoned
          it.
        </p>
        <p className="pt-1 text-sm">
          <Link href="/theology/prophetic-office" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            Read more in the Theology section →
          </Link>
        </p>
      </WeekSection>

      <WeekSection id="young-prophet" kicker="1 Kings 13" title="The Young Prophet">
        <p>
          Immediately after Jeroboam sets up his altar at Bethel, an unnamed &ldquo;man of God&rdquo;
          from Judah confronts it directly &mdash; centuries before Josiah would actually destroy it
          (2 Kings 23:15-16). The story that follows is one of the strangest and most instructive in
          the Old Testament.
        </p>
        <Accordion className="w-full">
          <AccordionItem value="altar">
            <AccordionTrigger>Jeroboam&rsquo;s altar and the withered hand</AccordionTrigger>
            <AccordionContent>
              The man of God denounces the altar by name, prophesying that a future king named
              Josiah will one day burn human bones on it. Jeroboam stretches out his hand to seize
              him &mdash; and his hand withers, unable to be pulled back, until the prophet prays
              for its restoration. <ScriptureTag refText="1 Kings 13:1-6" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="split">
            <AccordionTrigger>The altar splits and the ashes pour out</AccordionTrigger>
            <AccordionContent>
              As a sign confirming the prophecy, the altar itself splits apart and its ashes pour
              out &mdash; a visible, immediate authentication of the spoken word.{" "}
              <ScriptureTag refText="1 Kings 13:3" /> <ScriptureTag refText="1 Kings 13:5" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="old-prophet">
            <AccordionTrigger>The old prophet&rsquo;s deception</AccordionTrigger>
            <AccordionContent>
              God commands the man of God to eat no bread and drink no water in Bethel, and to
              return home by a different road. An old prophet living in Bethel follows him, lies
              that an angel gave him a new instruction to bring him back for a meal, and the man of
              God believes him and disobeys. <ScriptureTag refText="1 Kings 13:11-19" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="lion">
            <AccordionTrigger>The lion</AccordionTrigger>
            <AccordionContent>
              On the road home, a lion kills the man of God for his disobedience &mdash; yet
              strikingly does not eat the body or attack the donkey standing beside it, a detail the
              text itself highlights as unnatural and telling. <ScriptureTag refText="1 Kings 13:20-28" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="grid gap-3 pt-2 sm:grid-cols-3">
          <Card className="border-border/70"><CardContent className="pt-5"><p className="text-sm font-semibold">Obedience</p><p className="mt-1 text-xs text-muted-foreground">A genuine word from God is not overridden by a later claim to special revelation, however plausible it sounds.</p></CardContent></Card>
          <Card className="border-border/70"><CardContent className="pt-5"><p className="text-sm font-semibold">False spiritual authority</p><p className="mt-1 text-xs text-muted-foreground">The old prophet&rsquo;s lie shows that claimed spiritual authority is not self-authenticating.</p></CardContent></Card>
          <Card className="border-border/70"><CardContent className="pt-5"><p className="text-sm font-semibold">God&rsquo;s word cannot be overridden</p><p className="mt-1 text-xs text-muted-foreground">The prophecy against the altar stands for three centuries and is fulfilled exactly, regardless of the messenger&rsquo;s own failure.</p></CardContent></Card>
        </div>
      </WeekSection>

      <WeekSection id="omri" kicker="1 Kings 16:15-28" title="Omri">
        <div className="flex flex-wrap items-center gap-2">
          <CertaintyBadge level="historical-background" />
        </div>
        <p>
          Omri receives only eight verses in Scripture, yet he is one of the most historically
          consequential kings the Northern Kingdom produced. After winning a civil war, he
          purchases the hill of Samaria and builds it into a new, defensible capital.
        </p>
        <p>
          Assyrian records continue calling Israel &ldquo;the House of Omri&rdquo; (Bit-Humri) for
          over a century after his death, and the Moabite Stone opens by describing Omri&rsquo;s
          domination of Moab. Politically and militarily, he is a major figure. Scripture&rsquo;s
          own verdict could not be more different: &ldquo;Omri did what was evil in the sight of the
          LORD, and did more evil than all who were before him&rdquo; (1 Kings 16:25) &mdash; a
          reminder that political success and covenant faithfulness are measured on entirely
          different scales in this story.
        </p>
        <p>Omri is succeeded by his son Ahab, who inherits both his political stability and his spiritual trajectory.</p>
        <ScriptureTagList refs={["1 Kings 16:15-28"]} />
      </WeekSection>

      <WeekSection id="ahab" kicker="1 Kings 16:29-33" title="Ahab">
        <p>
          Scripture calls Ahab, bluntly, the worst king Israel had yet had: &ldquo;Ahab did more to
          provoke the LORD, the God of Israel, to anger than all the kings of Israel who were
          before him&rdquo; (1 Kings 16:33).
        </p>
        <p>
          The turning point is his marriage to <Link href="/people/jezebel" className="font-medium text-foreground hover:underline">Jezebel</Link>,
          a Sidonian princess. Under her influence, Ahab builds a temple and altar to{" "}
          <Link href="/themes/baal" className="font-medium text-foreground hover:underline">Baal</Link> in
          Samaria itself, alongside an Asherah pole &mdash; not fringe practices tolerated at the
          margins, but state-sponsored worship installed at the very center of national life. It is
          in this same reign that Hiel rebuilds Jericho, and Joshua&rsquo;s ancient curse is
          fulfilled to the letter.
        </p>
        <p>Every element is now in place: a divided kingdom, an institutionalized false worship system, a king determined to outdo his predecessors&rsquo; idolatry, and a covenant God who has not changed.</p>
        <p className="border-l-4 border-gold-500/50 pl-4 font-heading text-xl italic text-foreground">
          &ldquo;Now Elijah the Tishbite, of Tishbe in Gilead, said to Ahab, &lsquo;As the LORD, the
          God of Israel, lives, before whom I stand, there shall be neither dew nor rain these years,
          except by my word.&rsquo;&rdquo; <span className="not-italic text-sm text-muted-foreground">— 1 Kings 17:1</span>
        </p>
        <ScriptureTagList refs={["1 Kings 16:29-33", "1 Kings 17:1"]} />
      </WeekSection>
    </WeekLayout>
  );
}
