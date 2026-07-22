import type { SourcedImage } from "./types";

/**
 * Real, historically-sourced map images (public domain or CC-licensed
 * scans from the National Library of Israel / Wikimedia Commons) — used
 * in place of any AI-generated map art. The stylized illustrative SVG map
 * on /maps is hand-coded (not AI-generated either), and remains the
 * interactive reference for Elijah's own travels in later weeks.
 */
export interface HistoricalMap {
  id: string;
  title: string;
  era: string;
  description: string;
  image: SourcedImage;
}

export const historicalMaps: HistoricalMap[] = [
  {
    id: "conquest",
    title: "The Twelve Tribes of Israel",
    era: "Depicting the allotment following Joshua's conquest, c. 1400 BC",
    description:
      "Map of the territories allotted to the twelve tribes of Israel according to the Book of Joshua, chapters 13–19, before Dan moved northward. Some tribes had trouble conquering their allotted territories; the map does not show successful conquests.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c2/12_Tribes_of_Israel_Map.svg",
      alt: "Map of the twelve tribal territories of Israel as allotted in the Book of Joshua",
      caption: "The Twelve Tribes of Israel — territorial allotment per Joshua 13–19",
      attribution:
        "Richardprins (derivative of Kordas, יוסי, and Janz), Wikimedia Commons — CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:12_Tribes_of_Israel_Map.svg",
    },
  },
  {
    id: "united-monarchy",
    title: "The United Monarchy",
    era: "c. 1020 BC — Saul, David, and Solomon",
    description:
      "Israel united under a single throne, at its greatest traditional territorial extent, before Solomon's death splits it permanently in two. This is the kingdom Rehoboam inherits — and loses ten-twelfths of within a single chapter.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Kingdom_of_Israel_1020_map.svg",
      alt: "Map of the united Kingdom of Israel under Saul, David, and Solomon, c. 1020 BC",
      caption: "The United Monarchy under Saul, David, and Solomon (c. 1020 BC)",
      attribution: "Richardprins, Wikimedia Commons — CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kingdom_of_Israel_1020_map.svg",
    },
  },
  {
    id: "divided-kingdom",
    title: "The Divided Kingdom",
    era: "c. 830 BC — Israel (north) and Judah (south)",
    description:
      "By the time of Ahab and Elijah, the united throne has been split for a century: Israel in the north (capital Samaria, under the house of Omri) and Judah in the south (capital Jerusalem, under the house of David). This is the political map behind every scene in Elijah's ministry.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Kingdoms_of_Israel_and_Judah_map_830.svg",
      alt: "Map of the divided kingdoms of Israel (blue) and Judah (orange), c. 830 BC",
      caption: "The Divided Kingdom: Israel (blue) and Judah (orange), c. 830 BC",
      attribution: "FinnWikiNo / Richardprins, Wikimedia Commons — CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kingdoms_of_Israel_and_Judah_map_830.svg",
    },
  },
];

export function getMapById(id: string): HistoricalMap | undefined {
  return historicalMaps.find((m) => m.id === id);
}
