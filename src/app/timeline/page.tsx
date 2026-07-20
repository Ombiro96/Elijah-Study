import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BackboneTimeline } from "@/components/backbone-timeline";
import { SynchronizedKingsTimeline } from "@/components/synchronized-kings-timeline";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

export const metadata: Metadata = { title: "Timeline — The Prophet Elijah" };

export default function TimelinePage() {
  return (
    <div>
      <PageHero
        kicker="Reference"
        title="From Joshua to the Transfiguration"
        subtitle="Two ways to see the same story: a single narrative thread through the whole Old Testament, and a synchronized view of Israel and Judah's kings reigning side by side."
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Tabs defaultValue="story">
          <TabsList>
            <TabsTrigger value="story">Story Timeline</TabsTrigger>
            <TabsTrigger value="kingdoms">Synchronized Kingdoms</TabsTrigger>
          </TabsList>
          <TabsContent value="story" className="pt-8">
            <BackboneTimeline />
          </TabsContent>
          <TabsContent value="kingdoms" className="pt-8">
            <SynchronizedKingsTimeline />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
