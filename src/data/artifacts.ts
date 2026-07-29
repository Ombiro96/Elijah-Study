import type { Certainty, SourcedImage } from "./types";

/**
 * Real, sourced photographs of excavated sites and objects — museum,
 * archive, and Wikimedia Commons material, never AI-generated art.
 *
 * IMPORTANT: nothing here is a photograph of an object named in the Elijah
 * narrative. No trace of either Mount Carmel altar survives; both were
 * temporary field structures, and 1 Kings describes only Elijah's. These
 * are the closest genuine archaeological parallels, and every one carries
 * an explicit `note` saying what it is and what it is not.
 */
export interface Artifact {
  id: string;
  title: string;
  /** Short dating/period line shown under the title. */
  era: string;
  description: string;
  image: SourcedImage;
  certainty: Certainty;
  /** Required: states plainly what this image is NOT, so it is never oversold. */
  note: string;
}

export const artifacts: Artifact[] = [
  {
    id: "canaanite-altar-megiddo",
    title: "A Canaanite Altar",
    era: "Megiddo, Early Bronze Age — excavated round altar / high place",
    description:
      "The large circular stone platform at the centre of this excavation at Megiddo has been interpreted as an altar or open-air \"high place\" of the Canaanite period. Approached by a short flight of steps and built of unworked field stones, it is the kind of installation the Old Testament has in view when it speaks of the high places scattered across the hill country — the physical setting of the worship Israel was told to tear down.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Rounded_altar_in_megiddo_temple.jpg",
      alt: "Large circular stone altar platform among excavated ruins at Megiddo, with the Jezreel Valley beyond",
      caption: "Round altar (\"high place\") in the Canaanite temple precinct at Megiddo",
      attribution: "Photo: Avishai Teicher, Wikimedia Commons — Public Domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Rounded_altar_in_megiddo_temple.jpg",
    },
    certainty: "historical-background",
    note:
      "This is not Baal's altar from Mount Carmel, and it is far older than Ahab — Early Bronze Age, roughly two thousand years before Elijah. 1 Kings 18 never describes the shape of Baal's altar at all. Shown here only as a real example of Canaanite open-air altar architecture; the identification as an altar is itself an archaeological interpretation.",
  },
  {
    id: "israelite-altar-beersheba",
    title: "An Israelite Altar",
    era: "Tel Be'er Sheva, Iron Age (8th century BC) — reconstructed horned altar",
    description:
      "A reconstruction of a four-horned Israelite altar, assembled from the original excavated blocks. The \"horns\" projecting from each corner are a distinctive feature of Israelite altars described repeatedly in the Pentateuch, and the ones a fugitive could grab hold of when seeking sanctuary (1 Kings 1:50; 2:28). Its stones were not found standing: they turned up reused inside a later wall, which is how the altar came to be known at all.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Tel_Be%27er_Sheva%2C_Altar_01.jpg",
      alt: "Reconstructed four-horned Israelite stone altar standing in the open at Tel Be'er Sheva",
      caption: "Reconstructed Israelite horned altar, Tel Be'er Sheva",
      attribution: "Photo: Daniel Baránek, Wikimedia Commons — CC BY-SA 3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tel_Be%27er_Sheva,_Altar_01.jpg",
    },
    certainty: "historical-background",
    note:
      "This is not Elijah's altar, and it differs from it in an important way: Elijah built with twelve uncut stones (1 Kings 18:31-32), following the requirement that an altar use unworked stone (Exodus 20:25), whereas this one is dressed ashlar. It is also from Judah, a century or so after Elijah. Excavated dismantled and reused in a later wall; Aharoni linked its dismantling to Hezekiah's centralising reforms, though the dating was disputed by Yadin.",
  },
  {
    id: "carmel-view-1915",
    title: "The View from Carmel",
    era: "Photographed 1915 — the Carmel ridge looking out over the Jezreel Valley",
    description:
      "A lantern-slide photograph taken from the slopes of Mount Carmel, looking north-east across the plain of Jezreel. This is the actual ground the chapter moves across: the ridge where the altars were built, the valley below where the Kishon runs, and the open plain that Elijah ran across ahead of Ahab's chariot to the entrance of Jezreel.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Elijahs_Place_or_Sacrifice%2C_Mount_Carmel_%284879681290%29.jpg",
      alt: "Sepia 1915 photograph from the rocky slopes of Mount Carmel looking across the broad Jezreel plain, with travellers and horses on a path",
      caption: "“Elijah's Place of Sacrifice, Mount Carmel” — lantern slide, 1915",
      attribution:
        "Oregon State University Special Collections & Archives, via Wikimedia Commons — No known copyright restrictions",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Elijahs_Place_or_Sacrifice,_Mount_Carmel_(4879681290).jpg",
    },
    certainty: "historical-background",
    note:
      "The photograph is genuine, but its title reflects a traditional identification, not an established one. The exact spot of the contest is unknown; el-Muhraqa, at the south-eastern end of the ridge, is the site pilgrims have long been shown. What the image reliably conveys is the terrain and the distances involved — not the location of the altars.",
  },
];

export function getArtifactById(id: string): Artifact | undefined {
  return artifacts.find((a) => a.id === id);
}
