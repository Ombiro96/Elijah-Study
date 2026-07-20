import type { Location, Journey } from "./types";

/**
 * Coordinates are hand-placed percentages on a stylized map of the Levant
 * (viewBox roughly covering Damascus in the north-east, Tyre/Sidon in the
 * north-west, the Negev in the south, and the Transjordan plateau in the
 * east). They are illustrative, not surveyed GIS data.
 */
export const locations: Location[] = [
  {
    id: "jerusalem",
    name: "Jerusalem",
    coordinates: { x: 52, y: 62 },
    region: "Southern Kingdom",
    featureType: "temple",
    description:
      "Capital of the united kingdom under David and Solomon, and of Judah after the division. Site of Solomon's Temple.",
    importance:
      "The city of David, the location of the Temple, and the theological center of gravity for the whole Old Testament — the place golden-calf worship at Bethel and Dan was designed to compete with.",
    scriptureRefs: ["2 Samuel 5:6-10", "1 Kings 8", "1 Kings 12:26-27"],
    journeys: ["divided-kingdom"],
    relatedPeople: ["david", "solomon", "rehoboam"],
    certainty: "biblical",
  },
  {
    id: "samaria",
    name: "Samaria",
    coordinates: { x: 47, y: 46 },
    region: "Northern Kingdom",
    featureType: "capital",
    description:
      "Capital of the Northern Kingdom, built by Omri on a hill he purchased, and expanded by Ahab, who added a temple to Baal there.",
    importance:
      "Assyrian and other extra-biblical records refer to Israel as \"the House of Omri\" (Bit-Humri) for generations, confirming the dynasty's real historical footprint even though the biblical text gives Omri only a few verses.",
    scriptureRefs: ["1 Kings 16:24", "1 Kings 16:32-33"],
    journeys: ["divided-kingdom", "elijah", "elisha"],
    relatedPeople: ["omri", "ahab", "jezebel"],
    certainty: "historical-background",
  },
  {
    id: "bethel",
    name: "Bethel",
    coordinates: { x: 51, y: 55 },
    region: "Northern Kingdom",
    featureType: "shrine",
    description:
      "Southern border sanctuary of the Northern Kingdom, site of one of Jeroboam I's two golden calves and later condemned by prophets including the unnamed man of God in 1 Kings 13.",
    importance:
      "Already sacred ground from Jacob's ladder (Genesis 28), which made it a plausible — and dangerous — substitute for Jerusalem's Temple worship.",
    scriptureRefs: ["1 Kings 12:29", "1 Kings 13:1-10", "Amos 7:10-13"],
    journeys: ["divided-kingdom"],
    relatedPeople: ["jeroboam"],
    certainty: "biblical",
  },
  {
    id: "dan",
    name: "Dan",
    coordinates: { x: 55, y: 12 },
    region: "Northern Kingdom",
    featureType: "shrine",
    description: "Northernmost sanctuary city of Israel, site of Jeroboam I's second golden calf.",
    importance:
      "Placed at the kingdom's far northern edge to Bethel's southern edge, the two calves bracketed the entire Northern Kingdom, offering worship \"close to home\" as a substitute for the Jerusalem pilgrimage.",
    scriptureRefs: ["1 Kings 12:29-30", "Judges 18:30-31"],
    journeys: ["divided-kingdom"],
    relatedPeople: ["jeroboam"],
    certainty: "biblical",
  },
  {
    id: "jericho",
    name: "Jericho",
    coordinates: { x: 54, y: 63 },
    region: "Northern Kingdom",
    featureType: "town",
    description:
      "The first Canaanite city conquered by Joshua; famously destroyed after the walls fell, then placed under a curse against rebuilding.",
    importance:
      "Centuries later, Hiel of Bethel rebuilds it during Ahab's reign and loses two sons exactly as Joshua's curse specified — a deliberate narrative bridge showing that God's word, spoken generations earlier, still governs events in Elijah's own day.",
    scriptureRefs: ["Joshua 6", "Joshua 6:26", "1 Kings 16:34"],
    journeys: ["joshua-conquest", "elijah", "elisha"],
    relatedPeople: ["joshua", "elijah", "elisha"],
    certainty: "biblical",
  },
  {
    id: "jordan-river",
    name: "Jordan River",
    coordinates: { x: 56, y: 45 },
    region: "Transjordan",
    featureType: "river",
    description:
      "The river Israel crossed on dry ground to enter the land under Joshua, and which Elijah and later Elisha strike with Elijah's rolled-up cloak to cross on dry ground.",
    importance:
      "The Jordan crossing under Joshua and the Jordan crossing at Elijah's departure deliberately echo one another, framing Elijah's whole ministry within Israel's founding story.",
    scriptureRefs: ["Joshua 3", "2 Kings 2:6-8", "2 Kings 2:13-14"],
    journeys: ["joshua-conquest", "elijah", "elisha"],
    relatedPeople: ["joshua", "elijah", "elisha"],
    certainty: "biblical",
  },
  {
    id: "cherith",
    name: "Brook Cherith",
    alternateNames: ["Wadi Cherith"],
    coordinates: { x: 58, y: 58 },
    region: "Transjordan",
    featureType: "river",
    uncertainLocation: true,
    description:
      "A wadi east of the Jordan where Elijah hides after announcing the drought, fed by ravens twice daily.",
    importance:
      "The exact location is not certainly identified today; \"east of the Jordan\" is all the text specifies. It is the first of several places God provides for Elijah outside Israel's ordinary channels of provision.",
    scriptureRefs: ["1 Kings 17:2-7"],
    journeys: ["elijah"],
    relatedPeople: ["elijah"],
    certainty: "biblical",
  },
  {
    id: "zarephath",
    name: "Zarephath",
    coordinates: { x: 33, y: 25 },
    region: "Phoenicia",
    featureType: "town",
    description:
      "A Sidonian (Phoenician) town on the coast, home of the widow whose flour and oil miraculously do not run out, and whose son Elijah raises from death.",
    importance:
      "Located in Jezebel's own homeland, outside Israel entirely — Jesus himself cites this episode in Luke 4:25-26 as evidence that God's grace was never confined to ethnic Israel, foreshadowing the gospel going to the nations.",
    scriptureRefs: ["1 Kings 17:8-24", "Luke 4:25-26"],
    journeys: ["elijah"],
    relatedPeople: ["elijah"],
    certainty: "biblical",
  },
  {
    id: "mount-carmel",
    name: "Mount Carmel",
    coordinates: { x: 38, y: 33 },
    region: "Northern Kingdom",
    featureType: "mountain",
    description:
      "A prominent coastal mountain range where Elijah confronts 450 prophets of Baal and 400 of Asherah in the contest to determine whose god is truly God.",
    importance:
      "Baal was believed by his worshipers to control storm and fire; Elijah deliberately challenges him on exactly those terms, on high, visible ground, before all Israel.",
    scriptureRefs: ["1 Kings 18:19-40"],
    journeys: ["elijah"],
    relatedPeople: ["elijah", "ahab"],
    certainty: "biblical",
  },
  {
    id: "kishon",
    name: "Kishon Valley/Brook",
    coordinates: { x: 40, y: 34 },
    region: "Northern Kingdom",
    featureType: "valley",
    description: "The valley below Mount Carmel where the prophets of Baal are executed after the contest.",
    importance:
      "The same valley figures earlier in Judges 4-5 as the site of Israel's deliverance from Sisera — another place where the LORD's power over the storm-and-fertility domain Baal claimed for himself is demonstrated.",
    scriptureRefs: ["1 Kings 18:40", "Judges 4:7", "Judges 5:21"],
    journeys: ["elijah"],
    relatedPeople: ["elijah"],
    certainty: "biblical",
  },
  {
    id: "jezreel",
    name: "Jezreel",
    coordinates: { x: 43, y: 39 },
    region: "Northern Kingdom",
    featureType: "valley",
    description:
      "A royal residence of Ahab's dynasty in the fertile valley of the same name; site of Naboth's vineyard, and later of Jehu's massacre of the house of Ahab.",
    importance:
      "Elijah runs ahead of Ahab's chariot to Jezreel after Carmel (1 Kings 18:46), and it is from Jezreel that Jezebel's death threat sends him fleeing south in fear.",
    scriptureRefs: ["1 Kings 18:45-46", "1 Kings 19:1-3", "1 Kings 21", "2 Kings 9"],
    journeys: ["elijah"],
    relatedPeople: ["elijah", "ahab", "jezebel"],
    certainty: "biblical",
  },
  {
    id: "beersheba",
    name: "Beersheba",
    coordinates: { x: 46, y: 84 },
    region: "Southern Kingdom",
    featureType: "town",
    description: "Southernmost town of Judah, where Elijah leaves his servant before continuing alone into the wilderness.",
    importance:
      "Marks the edge of \"civilized\" Israelite territory — from here Elijah goes fully alone into the wilderness, a picture of total despair and withdrawal.",
    scriptureRefs: ["1 Kings 19:3"],
    journeys: ["elijah"],
    relatedPeople: ["elijah"],
    certainty: "biblical",
  },
  {
    id: "horeb",
    name: "Mount Horeb",
    alternateNames: ["Mount Sinai"],
    coordinates: { x: 38, y: 100 },
    region: "Transjordan",
    featureType: "mountain",
    uncertainLocation: true,
    description:
      "\"The mountain of God,\" traditionally identified with Sinai, where Elijah travels forty days and nights and encounters the LORD in the still small voice.",
    importance:
      "The same mountain where Moses received the covenant; Elijah's journey there deliberately recalls Moses' forty days on the mountain and positions Elijah as a new Moses figure who nonetheless meets God very differently.",
    scriptureRefs: ["1 Kings 19:8-18", "Exodus 24:18", "Exodus 33:18-23"],
    journeys: ["elijah"],
    relatedPeople: ["elijah", "moses"],
    certainty: "biblical",
  },
  {
    id: "damascus",
    name: "Damascus",
    coordinates: { x: 66, y: 5 },
    region: "Aram",
    featureType: "capital",
    description: "Capital of the Aramean kingdom; Elijah is instructed to travel there to anoint Hazael as king.",
    importance:
      "Represents the commission's outward reach beyond Israel's borders — the LORD raising up a foreign king as an instrument of judgment on His own covenant people.",
    scriptureRefs: ["1 Kings 19:15", "2 Kings 8:7-15"],
    journeys: ["elijah", "elisha"],
    relatedPeople: ["elijah", "elisha", "hazael"],
    certainty: "biblical",
  },
  {
    id: "abel-meholah",
    name: "Abel-meholah",
    coordinates: { x: 51, y: 43 },
    region: "Northern Kingdom",
    featureType: "town",
    description: "Home town of Elisha, where Elijah finds him plowing with twelve yoke of oxen and casts his cloak on him.",
    importance:
      "The call scene — Elisha slaughtering his oxen and burning the plow equipment to feed the people — signals a complete, irreversible break with his old life.",
    scriptureRefs: ["1 Kings 19:16", "1 Kings 19:19-21"],
    journeys: ["elijah"],
    relatedPeople: ["elijah", "elisha"],
    certainty: "biblical",
  },
  {
    id: "ramoth-gilead",
    name: "Ramoth-Gilead",
    coordinates: { x: 60, y: 45 },
    region: "Transjordan",
    featureType: "fortress",
    description:
      "A contested border fortress-city in the Transjordan, object of repeated wars between Israel and Aram; site of Ahab's death and, later, of Jehu's anointing as king.",
    importance:
      "Ahab dies here in disguise, fulfilling Micaiah's prophecy that he would not return alive; Jehu is anointed here by a young prophet sent from Elisha (2 Kings 9), completing the commission Elijah received at Horeb.",
    scriptureRefs: ["1 Kings 22:1-38", "2 Kings 9:1-13"],
    journeys: ["elisha"],
    relatedPeople: ["ahab", "micaiah", "jehu"],
    certainty: "biblical",
  },
  {
    id: "tyre",
    name: "Tyre",
    coordinates: { x: 34, y: 8 },
    region: "Phoenicia",
    featureType: "capital",
    description: "Major Phoenician port city; likely the political and commercial capital that Jezebel's father Ethbaal ruled.",
    importance:
      "Represents the Baal-worshiping Phoenician culture Jezebel imported into Israel when she married Ahab.",
    scriptureRefs: ["1 Kings 16:31"],
    journeys: [],
    relatedPeople: ["jezebel"],
    certainty: "historical-background",
  },
  {
    id: "sidon",
    name: "Sidon",
    coordinates: { x: 32, y: 15 },
    region: "Phoenicia",
    featureType: "town",
    description: "Phoenician coastal city named as Jezebel's and the Zarephath widow's homeland region.",
    importance:
      "Ironic setting: it is in Baal's own territory that the LORD demonstrates His provision and power over life and death through the widow of Zarephath.",
    scriptureRefs: ["1 Kings 17:9", "1 Kings 16:31"],
    journeys: ["elijah"],
    relatedPeople: ["elijah", "jezebel"],
    certainty: "biblical",
  },
  {
    id: "shechem",
    name: "Shechem",
    coordinates: { x: 49, y: 51 },
    region: "Northern Kingdom",
    featureType: "capital",
    description: "City where Rehoboam went to be made king and where the kingdom split occurred; Jeroboam I's first capital.",
    importance: "A city already loaded with covenant significance from Joshua 24, making the split there especially poignant.",
    scriptureRefs: ["1 Kings 12:1", "1 Kings 12:25"],
    journeys: ["divided-kingdom"],
    relatedPeople: ["rehoboam", "jeroboam"],
    certainty: "biblical",
  },
  {
    id: "ai",
    name: "Ai",
    coordinates: { x: 51, y: 57 },
    region: "Northern Kingdom",
    featureType: "town",
    description: "Second city conquered by Joshua after Jericho, following Israel's initial defeat there because of Achan's sin.",
    importance: "Shows that the conquest was not automatic — covenant faithfulness mattered even in Israel's earliest days in the land.",
    scriptureRefs: ["Joshua 7-8"],
    journeys: ["joshua-conquest"],
    relatedPeople: ["joshua"],
    certainty: "biblical",
  },
];

export const journeys: Journey[] = [
  {
    id: "joshua-conquest",
    title: "Joshua's Conquest",
    description: "Israel's entry into and initial conquest of Canaan.",
    color: "var(--color-chart-4)",
    steps: [
      { locationId: "jordan-river", order: 1, note: "Israel crosses the Jordan on dry ground.", scriptureRefs: ["Joshua 3"] },
      { locationId: "jericho", order: 2, note: "Jericho's walls fall; the city is placed under a curse.", scriptureRefs: ["Joshua 6"] },
      { locationId: "ai", order: 3, note: "Initial defeat, then victory, at Ai.", scriptureRefs: ["Joshua 7-8"] },
      { locationId: "shechem", order: 4, note: "Covenant renewal between Ebal and Gerizim.", scriptureRefs: ["Joshua 24"] },
    ],
  },
  {
    id: "divided-kingdom",
    title: "The Divided Kingdom",
    description: "Key sites of the split between Israel and Judah.",
    color: "var(--color-chart-2)",
    steps: [
      { locationId: "shechem", order: 1, note: "The kingdom splits when Rehoboam refuses the elders' counsel.", scriptureRefs: ["1 Kings 12:1-19"] },
      { locationId: "jerusalem", order: 2, note: "Rehoboam retains Jerusalem and the Temple as Judah's capital.", scriptureRefs: ["1 Kings 12:21-24"] },
      { locationId: "bethel", order: 3, note: "Jeroboam sets up a golden calf at Israel's southern sanctuary.", scriptureRefs: ["1 Kings 12:29-33"] },
      { locationId: "dan", order: 4, note: "Jeroboam sets up a second golden calf at Israel's northern sanctuary.", scriptureRefs: ["1 Kings 12:29-30"] },
      { locationId: "samaria", order: 5, note: "Omri builds the new Northern capital.", scriptureRefs: ["1 Kings 16:24"] },
    ],
  },
  {
    id: "elijah",
    title: "Elijah's Journeys",
    description: "Elijah's movements across his ministry, from the drought announcement to his ascension.",
    color: "var(--color-chart-1)",
    steps: [
      { locationId: "samaria", order: 1, note: "Elijah announces the drought to Ahab.", scriptureRefs: ["1 Kings 17:1"] },
      { locationId: "cherith", order: 2, note: "Fed by ravens beside the brook.", scriptureRefs: ["1 Kings 17:2-7"] },
      { locationId: "zarephath", order: 3, note: "Provision and resurrection at the widow's house.", scriptureRefs: ["1 Kings 17:8-24"] },
      { locationId: "mount-carmel", order: 4, note: "The contest with the prophets of Baal; fire falls.", scriptureRefs: ["1 Kings 18:19-40"] },
      { locationId: "kishon", order: 5, note: "The prophets of Baal are executed.", scriptureRefs: ["1 Kings 18:40"] },
      { locationId: "jezreel", order: 6, note: "Elijah runs ahead of Ahab's chariot; Jezebel's threat arrives.", scriptureRefs: ["1 Kings 18:45-46", "1 Kings 19:1-3"] },
      { locationId: "beersheba", order: 7, note: "Elijah leaves his servant at the edge of Judah.", scriptureRefs: ["1 Kings 19:3"] },
      { locationId: "horeb", order: 8, note: "Forty days' journey to the mountain of God; the still small voice.", scriptureRefs: ["1 Kings 19:4-18"] },
      { locationId: "damascus", order: 9, note: "Commissioned to anoint Hazael.", scriptureRefs: ["1 Kings 19:15"] },
      { locationId: "abel-meholah", order: 10, note: "Elisha called from the plow.", scriptureRefs: ["1 Kings 19:19-21"] },
      { locationId: "jordan-river", order: 11, note: "Elijah is taken up in a whirlwind after crossing the Jordan.", scriptureRefs: ["2 Kings 2:1-11"] },
    ],
  },
  {
    id: "elisha",
    title: "Elisha's Journeys",
    description: "Selected sites from Elisha's extended ministry, continuing and multiplying Elijah's.",
    color: "var(--color-chart-3)",
    steps: [
      { locationId: "abel-meholah", order: 1, note: "Called by Elijah while plowing.", scriptureRefs: ["1 Kings 19:19-21"] },
      { locationId: "jordan-river", order: 2, note: "Receives a double portion of Elijah's spirit; parts the Jordan.", scriptureRefs: ["2 Kings 2:9-14"] },
      { locationId: "jericho", order: 3, note: "Heals the city's water.", scriptureRefs: ["2 Kings 2:19-22"] },
      { locationId: "damascus", order: 4, note: "Sends word that leads to Hazael becoming king of Aram.", scriptureRefs: ["2 Kings 8:7-15"] },
      { locationId: "ramoth-gilead", order: 5, note: "Sends a young prophet to anoint Jehu.", scriptureRefs: ["2 Kings 9:1-10"] },
    ],
  },
];

export function getLocationById(id: string): Location | undefined {
  return locations.find((l) => l.id === id);
}

export function getJourneyById(id: string): Journey | undefined {
  return journeys.find((j) => j.id === id);
}
