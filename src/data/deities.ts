import type { Certainty, SourcedImage } from "./types";

/**
 * The gods of Canaan Israel was warned against before ever crossing the
 * Jordan (Deuteronomy) and repeatedly turned to anyway (Judges through
 * Kings). Images here are real archaeological photographs or period
 * illustrations from museum/library collections — never AI-generated —
 * each carrying its own attribution and certainty note.
 */
export interface Deity {
  id: string;
  name: string;
  alternateNames?: string[];
  epithet: string;
  domain: string[];
  origin: string;
  worshipPractices: string[];
  cultSites: string;
  encouragedBy: string;
  image: SourcedImage;
  imageCertainty: Certainty;
  imageNote?: string;
}

export const canaaniteDeities: Deity[] = [
  {
    id: "baal",
    name: "Baal",
    alternateNames: ["Hadad"],
    epithet: "God of storm, rain, lightning, and harvest",
    domain: ["Storms", "Rain", "Lightning", "Fertility", "Harvest"],
    origin:
      "The leading storm-and-fertility god of the Canaanite pantheon, known from mythological texts recovered at ancient Ugarit (modern Ras Shamra, Syria). \"Baal\" simply means \"lord\" or \"master\" — a title as much as a name.",
    worshipPractices: [
      "Farmers prayed to Baal for the seasonal rains agriculture in Canaan depended on — precisely why an agrarian people found him tempting to worship alongside, or instead of, the LORD.",
      "Worship centered on altars and \"high places\" — open-air hilltop shrines — often paired with an Asherah pole nearby.",
      "1 Kings 18 describes Baal's prophets crying out for hours and cutting themselves in ecstatic ritual to summon his attention — self-laceration as an act of devotion.",
      "Under Ahab, worship became state-funded: a dedicated temple and altar were built in the capital, Samaria, with an organized priesthood (1 Kings 16:32).",
    ],
    cultSites:
      "Temple and altar in Samaria (built by Ahab); countless local \"high places\" throughout the hill country of both kingdoms.",
    encouragedBy:
      "Rooted in Canaanite religion before Israel arrived; reintroduced and institutionalized in Israel by Jezebel, a Phoenician princess, after her marriage to Ahab (1 Kings 16:31-33).",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Baal_thunderbolt_from_Ugarit_%28Louvre_AO15775%29.jpg",
      alt: "Limestone stele of Baal holding a thunderbolt, from Ugarit, now in the Louvre",
      caption: "Stele of “Baal with Thunderbolt,” Ugarit, c. 15th–13th century BC (Louvre, AO 15775)",
      attribution: "Photo: Rama, Wikimedia Commons — CC BY-SA 2.0 FR",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Baal_thunderbolt_from_Ugarit_(Louvre_AO15775).jpg",
    },
    imageCertainty: "historical-background",
  },
  {
    id: "asherah",
    name: "Asherah",
    epithet: "Mother goddess of fertility",
    domain: ["Fertility", "Motherhood", "Trees/sacred groves"],
    origin:
      "A mother-and-fertility goddess of the wider Canaanite pantheon, sometimes cast as a consort figure in Canaanite mythology. Archaeologists have recovered small pillar-based female figurines across Israelite house sites, widely (though not universally) associated with her cult.",
    worshipPractices: [
      "Represented by \"Asherah poles\" — wooden cult objects, likely carved poles or living trees, set up beside altars (Deuteronomy 16:21 forbids planting one \"beside the altar of the LORD your God\").",
      "Small clay pillar figurines, common in Israelite households, are widely read by archaeologists as reflecting folk devotion to a fertility goddess alongside, not only instead of, official worship.",
      "1 Kings 18:19 pairs 400 prophets of Asherah with Baal's 450 at Mount Carmel, showing the two cults operated side by side under royal patronage.",
    ],
    cultSites:
      "Asherah poles stood at local high places throughout Israel and Judah; Jezebel maintained an organized Asherah priesthood alongside Baal's in the Northern Kingdom.",
    encouragedBy:
      "Native to Canaanite religion the Israelites encountered on entering the land; Deuteronomy 16:21 and Judges show the temptation predates any single king.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/98/Asherah_13th_century_BC_Israel_Museum.jpg",
      alt: "Bronze Age Canaanite fertility-goddess plaque figurine, Israel Museum",
      caption: "Canaanite fertility-goddess plaque figurine, 13th century BC (Israel Museum, Jerusalem)",
      attribution: "Photo: Sigal Lea Raveh, Wikimedia Commons — CC BY-SA 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Asherah_13th_century_BC_Israel_Museum.jpg",
    },
    imageCertainty: "historical-background",
    imageNote:
      "Scholars debate whether this specific figurine type depicts Asherah herself or a generic fertility image; it is shown here as representative material culture, not a confirmed cult statue.",
  },
  {
    id: "ashtoreth",
    name: "Ashtoreth",
    alternateNames: ["Astarte"],
    epithet: "Sidonian/Phoenician goddess of fertility, love, and war",
    domain: ["Fertility", "Love", "War", "Astral power (linked to Venus)"],
    origin:
      "The West Semitic form of Astarte, chief goddess of Sidon and the Phoenician coast — 1 Kings 11:5 names her plainly as \"the goddess of the Sidonians.\" Closely related to Asherah in function but distinct in origin, cult, and iconography; the biblical writers treat them as separate figures even though popular worship sometimes blurred the lines.",
    worshipPractices: [
      "Worshiped through small mold-made terracotta plaques and figurines, mass-produced and kept in homes for protection and fertility — not only at central temples.",
      "Solomon builds her a high place \"on the mountain east of Jerusalem\" for his Sidonian wives (1 Kings 11:5-7), later destroyed by Josiah three centuries later (2 Kings 23:13).",
    ],
    cultSites: "A high place east of Jerusalem (built by Solomon); her home cult centered in Sidon and the Phoenician coastal cities.",
    encouragedBy:
      "Brought into Israel's court by Solomon's foreign, Sidonian wives (1 Kings 11:1-8) — the text's clearest single example of intermarriage leading directly to institutionalized idolatry.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Hittite_and_Egyptian_types_of_Astarte_plaques_Wellcome_M0008436.jpg",
      alt: "Hittite and Egyptian types of Astarte plaques and figurines",
      caption: "Astarte/Ashtoreth plaques and figurines, Hittite and Egyptian types, c. 1800–1400 BC",
      attribution: "Wellcome Collection, London — CC BY 4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hittite_and_Egyptian_types_of_Astarte_plaques_Wellcome_M0008436.jpg",
    },
    imageCertainty: "historical-background",
  },
  {
    id: "molech",
    name: "Molech",
    alternateNames: ["Moloch"],
    epithet: "Ammonite deity associated with child sacrifice",
    domain: ["Mentioned only briefly here — a warning, not a focus"],
    origin:
      "Named in Scripture as the god of the Ammonites (1 Kings 11:7); Leviticus 18:21 and 20:2-5 forbid Israelites from giving their children \"to Molech\" on pain of death, indicating the danger was recognized long before Solomon.",
    worshipPractices: [
      "Later tradition (post-biblical, not archaeologically confirmed in detail) describes child sacrifice by fire, sometimes at a site called Topheth in the Valley of Hinnom outside Jerusalem (2 Kings 23:10, Jeremiah 7:31).",
      "No confirmed cult statue of Molech survives from the biblical period — depictions of a bronze, bull-headed idol are a much later (post-medieval) tradition, not an archaeological find.",
    ],
    cultSites: "Traditionally associated with the Valley of Hinnom (Topheth), near Jerusalem, and destroyed by Josiah (2 Kings 23:10).",
    encouragedBy:
      "Solomon builds Molech a high place for his Ammonite wives (1 Kings 11:7) — grouped by the text alongside Ashtoreth and Chemosh as the direct fruit of his foreign marriages.",
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Foster_Bible_Pictures_0074-1_Offering_to_Molech.jpg",
      alt: "19th-century engraving imagining an offering to Molech",
      caption: "“Offering to Molech” — a traditional 19th-century illustration, not an archaeological artifact",
      attribution: "Charles Foster, Bible Pictures and What They Teach Us, 1897 — Public Domain",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Foster_Bible_Pictures_0074-1_Offering_to_Molech.jpg",
    },
    imageCertainty: "speculative",
    imageNote:
      "No genuine ancient statue of Molech has been identified. This engraving reflects later popular imagination, included here only to show how the tradition was later pictured — not as evidence of what Molech worship actually looked like.",
  },
];

export function getDeityById(id: string): Deity | undefined {
  return canaaniteDeities.find((d) => d.id === id);
}
