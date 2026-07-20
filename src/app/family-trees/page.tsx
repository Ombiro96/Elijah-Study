import type { Metadata } from "next";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { FamilyTreeDiagram } from "@/components/family-tree-diagram";
import { familyTrees } from "@/data/family-trees";

export const metadata: Metadata = { title: "Family Trees — The Prophet Elijah" };

export default function FamilyTreesPage() {
  return (
    <div>
      <PageHero
        kicker="Reference"
        title="Dynasties and prophetic succession"
        subtitle="Four family trees relevant to the study: the promise-bearing line of David, the dynasty of Omri, Ahab's immediate household, and the way prophetic ministry passed from Elijah onward."
      />
      <div className="mx-auto max-w-5xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
        {familyTrees.map((tree) => (
          <section key={tree.id}>
            <SectionHeading title={tree.title} subtitle={tree.description} />
            <div className="overflow-x-auto">
              <FamilyTreeDiagram tree={tree} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
