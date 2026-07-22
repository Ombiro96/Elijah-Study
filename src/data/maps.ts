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
    title: "Canaan During Joshua's Conquest",
    era: "Depicting events traditionally dated c. 1400 BC",
    description:
      "An 18th-century engraved map compiled directly from the Book of Joshua, marking the Canaanite city-states Israel encountered on entering the land — Jericho, Ai, Jerusalem, Bethel, and Hazor among them. It reflects the cartographic understanding of its own time, not modern archaeology, but is a faithful visual guide to the conquest narrative's geography.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/84/A_map_of_the_Land_of_Promise.compiled_out_of_the_book_of_Joshua_%28FL37121979_3898256%29.jpg",
      alt: "1730 engraved map of Canaan titled 'A Map of the Land of Promise, compiled out of the Book of Joshua'",
      caption: "“A Map of the Land of Promise, compiled out of the Book of Joshua” (London, c. 1730)",
      attribution: "Eran Laor Cartographic Collection, National Library of Israel — Public Domain",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:A_map_of_the_Land_of_Promise.compiled_out_of_the_book_of_Joshua_(FL37121979_3898256).jpg",
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
