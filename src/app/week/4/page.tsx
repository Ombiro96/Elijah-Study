import Link from "next/link";
import type { Metadata } from "next";
import { WeekLayout, WeekSection } from "@/components/week-layout";
import { ScriptureTagList } from "@/components/scripture-tag";
import { Card, CardContent } from "@/components/ui/card";
import { TransfigurationCompare } from "@/components/transfiguration-compare";

export const metadata: Metadata = { title: "Week 4: The Legacy of Elijah — The Prophet Elijah" };

const toc = [
  { id: "naboth", label: "Naboth's Vineyard" },
  { id: "repentance", label: "Ahab's Repentance" },
  { id: "micaiah", label: "Micaiah's Warning" },
  { id: "death-of-ahab", label: "Death of Ahab" },
  { id: "departure", label: "Elijah's Departure" },
  { id: "cloak", label: "The Cloak to Elisha" },
  { id: "john-baptist", label: "John the Baptist" },
  { id: "transfiguration", label: "The Transfiguration" },
  { id: "james-5", label: "James 5" },
  { id: "christ", label: "Conclusion: Christ" },
];

export default function Week4Page() {
  return (
    <WeekLayout
      week={4}
      title="The Legacy of Elijah"
      subtitle="1 Kings 21–22 and 2 Kings 1–2 close Elijah's earthly ministry with a stolen vineyard, a lone honest prophet, a king's death exactly as foretold, and a whirlwind — but his legacy runs forward all the way to the Transfiguration and the gospel itself."
      toc={toc}
      prevHref="/week/3"
    >
      <WeekSection id="naboth" kicker="1 Kings 21" title="Naboth's Vineyard">
        <p>
          Naboth refuses to sell Ahab his ancestral vineyard, rightly citing the Law&rsquo;s
          protection of tribal land inheritance (Leviticus 25:23-28; Numbers 36:7). Ahab sulks;{" "}
          <Link href="/people/jezebel" className="font-medium text-foreground hover:underline">Jezebel</Link>{" "}
          takes matters into her own hands, arranging false witnesses to accuse Naboth of cursing
          God and the king, resulting in his execution by stoning &mdash; all done &ldquo;legally,&rdquo;
          with royal authority, against an innocent man.
        </p>
        <p>
          Elijah meets Ahab at the seized vineyard with a direct indictment: &ldquo;Have you killed
          and also taken possession?&rdquo; (1 Kings 21:19) &mdash; and pronounces judgment on Ahab&rsquo;s
          entire house, including Jezebel&rsquo;s own gruesome death.
        </p>
        <ScriptureTagList refs={["1 Kings 21:1-16", "1 Kings 21:17-26"]} />
      </WeekSection>

      <WeekSection id="repentance" kicker="1 Kings 21:27-29" title="Ahab's Partial Repentance">
        <p>
          Ahab&rsquo;s response is striking: he tears his clothes, puts on sackcloth, fasts, and
          walks about &ldquo;dejectedly&rdquo; (1 Kings 21:27). God tells Elijah this humility is
          genuine &mdash; and, remarkably, delays the promised judgment on Ahab&rsquo;s house to the
          next generation because of it.
        </p>
        <Card className="border-gold-500/30 bg-gold-100/30 dark:bg-gold-700/10">
          <CardContent className="pt-5 text-sm">
            The text treats this repentance as real without pretending it resolves everything.
            Ahab&rsquo;s underlying pattern of life does not fundamentally change, yet God still
            honors the humility that is there. It is a case study in reading repentance without
            either cynicism or naivety &mdash; see the{" "}
            <Link href="/themes/repentance" className="font-medium underline">Repentance theme page</Link> for more.
          </CardContent>
        </Card>
        <ScriptureTagList refs={["1 Kings 21:27-29"]} />
      </WeekSection>

      <WeekSection id="micaiah" kicker="1 Kings 22" title="Micaiah's Warning">
        <p>
          Ahab and Jehoshaphat of Judah plan a joint campaign to retake Ramoth-gilead from Aram.
          Ahab&rsquo;s 400 court prophets unanimously promise victory; uneasy, Jehoshaphat asks for
          &ldquo;another prophet of the LORD&rdquo; &mdash; Ahab admits there is{" "}
          <Link href="/people/micaiah" className="font-medium text-foreground hover:underline">Micaiah</Link>,
          &ldquo;but I hate him, for he never prophesies good concerning me, but always evil&rdquo;
          (1 Kings 22:8).
        </p>
        <p>
          Micaiah, alone, tells Ahab the truth: Israel will be scattered, and Ahab will not return
          alive. He describes a striking vision of the LORD&rsquo;s throne room, where a lying
          spirit is permitted to deceive Ahab&rsquo;s prophets &mdash; a sobering picture of divine
          sovereignty extending even over judicial deception used to bring about judgment. Micaiah
          is struck and imprisoned for his honesty.
        </p>
        <ScriptureTagList refs={["1 Kings 22:1-28"]} />
      </WeekSection>

      <WeekSection id="death-of-ahab" kicker="1 Kings 22:29-40" title="The Death of Ahab">
        <p>
          Ahab disguises himself for battle specifically to escape Micaiah&rsquo;s prophecy &mdash;
          and is struck by &ldquo;a certain man who drew his bow at random,&rdquo; dying slowly as
          his blood pools in his chariot. Dogs lick up his blood exactly where they had licked
          Naboth&rsquo;s, precisely as Elijah had said (1 Kings 21:19; 22:38). No amount of
          precaution can override a word God has already spoken.
        </p>
        <ScriptureTagList refs={["1 Kings 22:29-40"]} />
      </WeekSection>

      <WeekSection id="departure" kicker="2 Kings 2:1-11" title="Elijah's Departure">
        <p>
          After confronting Ahaziah over consulting Baal-zebub instead of the LORD (2 Kings 1),
          Elijah&rsquo;s ministry closes with one of Scripture&rsquo;s most extraordinary scenes.
          Knowing his time is near, Elijah travels from Gilgal to Bethel to Jericho to the Jordan,
          and at each stop tells Elisha to stay behind &mdash; and each time Elisha refuses to leave
          him.
        </p>
        <p>
          At the Jordan, Elijah strikes the water with his rolled-up cloak; it parts, and the two
          cross on dry ground &mdash; deliberately echoing both the Red Sea crossing under Moses and
          the Jordan crossing under Joshua. On the other side, a chariot and horses of fire appear,
          and Elijah is taken up to heaven in a whirlwind. He does not die.
        </p>
        <ScriptureTagList refs={["2 Kings 1", "2 Kings 2:1-11"]} />
      </WeekSection>

      <WeekSection id="cloak" kicker="2 Kings 2:9-15" title="The Cloak Passed to Elisha">
        <p>
          Before being taken up, Elijah asks Elisha what he would like; Elisha asks for &ldquo;a
          double portion&rdquo; of his spirit &mdash; the customary inheritance share of a firstborn
          son, not a request for twice Elijah&rsquo;s power, but for recognition as his true
          spiritual heir. Elijah tells him this will be granted only if Elisha sees him as he is
          taken &mdash; and he does.
        </p>
        <p>
          Elisha picks up Elijah&rsquo;s fallen cloak, strikes the Jordan just as Elijah had, and the
          water parts again. Watching prophets recognize immediately: &ldquo;The spirit of Elijah
          rests on Elisha&rdquo; (2 Kings 2:15). Ministry continues, transformed but unbroken.
        </p>
        <ScriptureTagList refs={["2 Kings 2:9-15"]} />
        <p className="pt-1 text-sm">
          <Link href="/people/elisha" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            Read Elisha&rsquo;s full biography →
          </Link>
        </p>
      </WeekSection>

      <WeekSection id="john-baptist" kicker="Malachi 4:5-6 → Luke 1:17" title="John the Baptist">
        <p>
          The Old Testament closes with a promise: the LORD will send &ldquo;Elijah the
          prophet&rdquo; before the great and awesome Day of the LORD (Malachi 4:5-6). Four
          centuries later, the angel Gabriel tells Zechariah his son John will go before the Lord
          &ldquo;in the spirit and power of Elijah&rdquo; (Luke 1:17) &mdash; and Jesus later
          confirms, &ldquo;if you are willing to accept it, he is Elijah who is to come&rdquo;
          (Matthew 11:14).
        </p>
        <p>
          John even dresses like Elijah (compare 2 Kings 1:8 and Matthew 3:4) and confronts a wicked
          royal marriage much as Elijah confronted Ahab and Jezebel &mdash; paying, like Elijah
          nearly did, with his life.
        </p>
        <p className="pt-1 text-sm">
          <Link href="/theology/john-the-baptist-and-elijah" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            Read the full theology of John the Baptist and Elijah →
          </Link>
        </p>
        <ScriptureTagList refs={["Malachi 4:5-6", "Luke 1:17", "Matthew 11:14"]} />
      </WeekSection>

      <WeekSection id="transfiguration" kicker="Matthew 17:1-13" title="The Transfiguration">
        <p>
          Elijah&rsquo;s story reaches forward, quite literally, to appear beside Jesus on the mount
          of Transfiguration, discussing with him his coming death in Jerusalem (Luke 9:31). We
          introduced this scene in Week 1; by now, having walked through the whole of Elijah&rsquo;s
          ministry, its weight lands differently.
        </p>
        <TransfigurationCompare />
      </WeekSection>

      <WeekSection id="james-5" kicker="James 5:17-18" title="James 5 and the Power of Prayer">
        <p>
          The New Testament also grounds Elijah&rsquo;s extraordinary ministry in ordinary human
          terms: &ldquo;Elijah was a man with a nature like ours, and he prayed fervently that it
          might not rain... Then he prayed again, and heaven gave rain&rdquo; (James 5:17-18). His
          power was not innate spiritual superiority &mdash; it was believing prayer, available to
          any Christian.
        </p>
        <ScriptureTagList refs={["James 5:17-18"]} />
      </WeekSection>

      <WeekSection id="christ" kicker="Conclusion" title="Everything Points to Christ">
        <p>
          Over four weeks we have traced Elijah through drought and fire, provision and despair, a
          quiet mountain voice and a fiery departure. None of it was ever the whole story on its
          own. Elijah defends the first commandment; Jesus is the one that commandment was always
          preparing Israel to recognize when God Himself came in the flesh. Elijah calls down fire
          in judgment; Jesus absorbs judgment in Himself at the cross. Elijah is taken up without
          dying; Jesus dies, and is raised, and ascends bodily &mdash; permanently answering the
          questions Elijah&rsquo;s strange departure could only gesture toward.
        </p>
        <p>
          &ldquo;I have not come to abolish the Law or the Prophets... but to fulfill them&rdquo;
          (Matthew 5:17) is not a slogan pasted onto Elijah&rsquo;s story from outside. It is the
          only ending his story was ever building toward.
        </p>
        <p className="pt-1 text-sm">
          <Link href="/theology" className="font-medium text-gold-700 hover:underline dark:text-gold-400">
            Continue into the Theology section →
          </Link>
        </p>
      </WeekSection>
    </WeekLayout>
  );
}
