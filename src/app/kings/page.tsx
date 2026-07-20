import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { KingsTable } from "@/components/kings-table";

export const metadata: Metadata = { title: "Kings — The Prophet Elijah" };

export default function KingsPage() {
  return (
    <div>
      <PageHero
        kicker="Reference"
        title="Kings of the United, Northern, and Southern Kingdoms"
        subtitle="Every king from Saul through the exile, filterable by kingdom and moral evaluation. Regnal dates follow Edwin Thiele's chronology, the reconstruction most widely used in evangelical scholarship — see a king's page for notes where other reconstructions differ."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <KingsTable />
      </div>
    </div>
  );
}
