import Link from "next/link";
import type { Metadata } from "next";
import { WeekLayout, WeekSection } from "@/components/week-layout";
import { LocationStrip } from "@/components/location-strip";
import { ScriptureTagList } from "@/components/scripture-tag";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = { title: "Week 2: Who is God? — The Prophet Elijah" };

const toc = [
  { id: "geography", label: "The Geography" },
  { id: "widow-provision", label: "Widow & Provision" },
  { id: "resurrection", label: "Resurrection" },
  { id: "carmel", label: "Mount Carmel" },
  { id: "fire", label: "Fire Falls" },
  { id: "rain-jezreel", label: "Cloud, Rain & Jezreel" },
  { id: "who-controls-rain", label: "Who Controls Rain?" },
];

export default function Week2Page() {
  return (
    <WeekLayout
      week={2}
      title="Who is God?"
      subtitle="1 Kings 17–18 answers one question from every possible angle: provision, resurrection, storm, and fire. By the end, even Baal's own prophets cannot avoid the verdict Israel shouts on the mountain."
      toc={toc}
      prevHref="/week/1"
      nextHref="/week/3"
    >
      <WeekSection id="geography" kicker="1 Kings 17–18" title="The Geography of the Drought">
        <p>
          Elijah&rsquo;s ministry in these two chapters moves through five distinct locations, each
          adding a piece to the argument: a hidden brook, a foreign widow&rsquo;s house, a public
          mountain, a valley of judgment, and a royal city.
        </p>
        <LocationStrip ids={["cherith", "zarephath", "mount-carmel", "kishon", "jezreel"]} />
      </WeekSection>

      <WeekSection id="widow-provision" kicker="1 Kings 17:2-16" title="The Widow and Provision">
        <p>
          After announcing the drought, Elijah is sent first to the Brook Cherith, where ravens
          &mdash; unclean scavenger birds, an odd choice of provider &mdash; feed him bread and meat
          twice a day. When the brook dries up, he is sent somewhere even stranger: not to a
          faithful Israelite town, but to Zarephath, a Sidonian town in Jezebel&rsquo;s own home
          region.
        </p>
        <p>
          There he finds a widow gathering sticks to cook a final meal for herself and her son
          before they expect to die of starvation. Elijah asks her to feed him first, promising that
          her jar of flour and jug of oil will not run out until the drought ends &mdash; and they
          do not (1 Kings 17:8-16).
        </p>
        <Card className="border-gold-500/30 bg-gold-100/30 dark:bg-gold-700/10">
          <CardContent className="pt-5 text-sm">
            <span className="font-medium text-foreground">Why a foreigner?</span> Jesus himself
            later points to this exact episode: &ldquo;there were many widows in Israel in the days
            of Elijah... yet Elijah was sent to none of them but only to Zarephath... to a woman who
            was a widow&rdquo; (Luke 4:25-26). Grace, from the very start of Elijah&rsquo;s ministry,
            was never confined to ethnic Israel.
          </CardContent>
        </Card>
        <ScriptureTagList refs={["1 Kings 17:2-7", "1 Kings 17:8-16", "Luke 4:25-26"]} />
      </WeekSection>

      <WeekSection id="resurrection" kicker="1 Kings 17:17-24" title="Resurrection">
        <p>
          The widow&rsquo;s son falls ill and dies. In grief, she asks Elijah whether he has come to
          expose her sin. Elijah carries the boy to his room, stretches himself over him three
          times, and cries out to the LORD &mdash; and the boy&rsquo;s life returns.
        </p>
        <p>
          This is the first resurrection recorded in Scripture, and it happens not in Jerusalem but
          in pagan territory, through the prayer of a single prophet. The widow&rsquo;s response
          settles the question this whole chapter has been building toward: &ldquo;Now I know that
          you are a man of God, and that the word of the LORD in your mouth is truth&rdquo; (1 Kings
          17:24).
        </p>
        <ScriptureTagList refs={["1 Kings 17:17-24"]} />
      </WeekSection>

      <WeekSection id="carmel" kicker="1 Kings 18:19-40" title="Mount Carmel: Baal vs. Yahweh">
        <p>
          Three years into the drought, Elijah summons Ahab, 450 prophets of Baal, and 400 prophets
          of Asherah to Mount Carmel for a public test: two altars, two sacrifices, no fire lit by
          human hands. &ldquo;The God who answers by fire, he is God&rdquo; (1 Kings 18:24).
        </p>
        <Accordion className="w-full">
          <AccordionItem value="taunt">
            <AccordionTrigger>Elijah&rsquo;s challenge to the people</AccordionTrigger>
            <AccordionContent>
              Before the contest begins, Elijah confronts the crowd directly: &ldquo;How long will
              you go limping between two different opinions? If the LORD is God, follow him; but if
              Baal, then follow him&rdquo; (1 Kings 18:21). The people say nothing &mdash; the
              silence itself is the problem the whole day is designed to break.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="baal-fails">
            <AccordionTrigger>The prophets of Baal cry out in vain</AccordionTrigger>
            <AccordionContent>
              From morning until noon, and then into the afternoon, Baal&rsquo;s prophets call on
              their god, dance around the altar, and cut themselves with swords and lances &mdash; a
              known feature of Canaanite ritual practice, and historical background rather than a
              biblical claim about its purpose. Elijah mocks them: perhaps Baal is deep in thought,
              or relieving himself, or asleep. Nothing happens. &ldquo;There was no voice. No one
              answered; no one paid attention&rdquo; (1 Kings 18:29).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rebuild">
            <AccordionTrigger>Elijah repairs the altar of the LORD</AccordionTrigger>
            <AccordionContent>
              Elijah rebuilds a broken-down altar of the LORD using twelve stones &mdash; one for
              each tribe of Jacob, a deliberate reminder that the whole nation, not just the
              Northern Kingdom, is in view. He then drenches the sacrifice and the altar with water
              three times, filling a trench around it, removing any possible accusation of a hidden
              spark. <span className="italic">(1 Kings 18:30-35)</span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </WeekSection>

      <WeekSection id="fire" kicker="1 Kings 18:36-40" title="Fire Falls">
        <p>
          Elijah prays a short, simple prayer &mdash; no theatrics, no self-harm, no hours of
          shouting &mdash; and &ldquo;the fire of the LORD fell and consumed the burnt offering and
          the wood and the stones and the dust, and licked up the water that was in the
          trench&rdquo; (1 Kings 18:38). The people fall on their faces: &ldquo;The LORD, he is God;
          the LORD, he is God&rdquo; (1 Kings 18:39).
        </p>
        <p>
          The prophets of Baal are then executed at the Kishon Valley below &mdash; the covenant
          penalty for leading Israel into apostasy (Deuteronomy 13:1-5), carried out at the very
          spot where, centuries earlier, the Kishon had swept away another army opposing the LORD&rsquo;s
          people (Judges 4-5).
        </p>
        <ScriptureTagList refs={["1 Kings 18:36-39", "1 Kings 18:40", "Deuteronomy 13:1-5"]} />
      </WeekSection>

      <WeekSection id="rain-jezreel" kicker="1 Kings 18:41-46" title="The Cloud, the Rain, and the Run to Jezreel">
        <p>
          Elijah tells Ahab to go eat and drink, &ldquo;for there is a sound of the rushing of
          rain&rdquo; &mdash; before a single cloud is visible. He climbs Carmel, bends to the
          ground, and sends his servant to look toward the sea seven times. On the seventh look, a
          cloud &ldquo;like a man&rsquo;s hand&rdquo; rises from the sea; within moments the sky is
          black with clouds and wind, and heavy rain falls, ending the three-and-a-half-year
          drought.
        </p>
        <p>
          Then, remarkably, &ldquo;the hand of the LORD was on Elijah, and he girded up his loins and
          ran before Ahab to the entrance of Jezreel&rdquo; (1 Kings 18:46) &mdash; a roughly
          17-mile run, outrunning a royal chariot, on the heels of the greatest spiritual victory of
          his life. It is worth noting this detail precisely because of what happens next, in Week
          3: even after this height, Elijah is only a few verses away from utter despair.
        </p>
        <ScriptureTagList refs={["1 Kings 18:41-46"]} />
      </WeekSection>

      <WeekSection id="who-controls-rain" kicker="The Central Question" title="Who Controls Rain — Yahweh or Baal?">
        <p>
          Everything in 1 Kings 17–18 answers one deliberately concrete question. Baal was
          worshiped across the ancient Near East specifically as a storm and fertility deity &mdash;
          the one who supposedly controlled rain, dew, and the harvests an agricultural society
          depended on for survival. Elijah&rsquo;s drought, and its ending, are not abstract
          theology; they are a direct, public rebuttal on Baal&rsquo;s own claimed turf.
        </p>
        <p>
          A god who cannot even answer his own prophets, on his own terms, with his own claimed
          power, is exposed as no god at all. The LORD, by contrast, withholds and grants rain by
          His word alone &mdash; and the entire nation, watching from the slopes of Carmel, is left
          with only one honest verdict to shout.
        </p>
        <p className="pt-1 text-sm">
          <Link href="/themes/rain" className="font-medium text-gold-700 hover:underline dark:text-gold-400">Explore the theme of Rain →</Link>{" "}
          <Link href="/themes/baal" className="font-medium text-gold-700 hover:underline dark:text-gold-400">Explore the theme of Baal →</Link>
        </p>
      </WeekSection>
    </WeekLayout>
  );
}
