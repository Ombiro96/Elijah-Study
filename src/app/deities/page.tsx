import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { DeityGrid } from "@/components/deity-card";
import { canaaniteDeities } from "@/data/deities";

export const metadata: Metadata = { title: "Gods & Idols of Canaan — The Prophet Elijah" };

export default function DeitiesIndexPage() {
  return (
    <div>
      <PageHero
        kicker="Reference"
        title="Gods and idols of Canaan"
        subtitle="Before Israel ever crossed the Jordan, God warned them about these gods by name. Every major idolatry scene from Judges through Ahab — golden calves, Asherah poles, Solomon's high places, Jezebel's temple — is Israel giving in to one of them."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <DeityGrid ids={canaaniteDeities.map((d) => d.id)} className="sm:grid-cols-2 lg:grid-cols-2" />
      </div>
    </div>
  );
}
