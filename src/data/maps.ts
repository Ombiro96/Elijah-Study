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
    id: "pre-conquest-canaan",
    title: "Canaan Before the Conquest",
    era: "c. 1500–1250 BC — the land as the Canaanite nations held it",
    description:
      "Canaan before Israel entered it: a patchwork of Canaanite city-states and peoples — Hittites, Amorites, Perizzites, Girgashites, Hivites, and Jebusites among them — with no tribal divisions yet drawn. This is the land Joshua's spies scouted and the twelve tribes would later be allotted.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/05/John_Bartholomew_%26_Co.%2C_Palestine_Before_the_coming_of_Israel_1500_-_1250_B.C_%28FL36567138_3907206%29.jpg",
      alt: "1915 map titled 'Palestine Before the coming of Israel, 1500-1250 B.C.'",
      caption: "“Palestine Before the coming of Israel, 1500–1250 B.C.” (London, 1915)",
      attribution: "Eran Laor Cartographic Collection, National Library of Israel — Public Domain",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:John_Bartholomew_%26_Co.,_Palestine_Before_the_coming_of_Israel_1500_-_1250_B.C_(FL36567138_3907206).jpg",
    },
  },
  {
    id: "canaanite-nations",
    title: "The Nations of Canaan",
    era: "Before & at the time of the Exodus, c. 1740 engraving",
    description:
      "An older sibling to the Bartholomew map above, naming the specific peoples Israel encountered on every side — Canaanites, Moabites, Ammonites, Midianites, Edomites, and Amalekites — as they stood before and during the Exodus generation. Deuteronomy 7:1 lists seven of these nations by name as the ones Israel was warned against.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/1/14/S.W.%2C_A_Map_of_the_Divisions_%26_Situations_of_the_Tribes_of_Canaanites%2C_Moabites%2C_Ammonites%2C_Midianites%2C_Edomites%2C_Amalekites_%26_C_%28FL199992192_2369214%29.jpg",
      alt: "1740 engraved map titled 'A Map of the Divisions & Situations of the Tribes of Canaanites, Moabites, Ammonites, Midianites, Edomites, Amalekites &c., before & at the time of the Exodus of the Children of Israel'",
      caption:
        "“A Map of the Divisions & Situations of the Tribes of Canaanites, Moabites, Ammonites, Midianites, Edomites, Amalekites &c.” (S.W., London, c. 1740)",
      attribution: "Eran Laor Cartographic Collection, National Library of Israel — Public Domain",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:S.W.,_A_Map_of_the_Divisions_%26_Situations_of_the_Tribes_of_Canaanites,_Moabites,_Ammonites,_Midianites,_Edomites,_Amalekites_%26_C_(FL199992192_2369214).jpg",
    },
  },
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
