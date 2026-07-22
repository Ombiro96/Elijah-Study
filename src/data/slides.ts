export type SlideLayout =
  | "standard"
  | "mystery" // a question posed on-screen, deliberately left unanswered
  | "flashback" // a large "N Years Earlier..." transition card
  | "map" // a real, sourced historical map (see src/data/maps.ts)
  | "compare" // two scripture passages set side by side
  | "cliffhanger"; // fades to black, then teases the next week

export interface CompareBlock {
  leftLabel: string;
  leftRef: string;
  leftText: string;
  rightLabel: string;
  rightRef: string;
  rightText: string;
  /** The near-identical wording shared by both passages, surfaced on its own. */
  sharedPhrase: string;
  note?: string;
}

export interface Slide {
  id: string;
  week: 0 | 1 | 2 | 3 | 4;
  kicker: string;
  title: string;
  bullets: string[];
  notes: string;
  scriptureRefs?: string[];
  layout?: SlideLayout;
  /** A short scripture quotation displayed large, e.g. for mystery/cliffhanger slides. */
  quote?: { text: string; ref: string };
  /** Big transition label for "flashback" slides, e.g. "800 Years Earlier...". */
  flashbackLabel?: string;
  /** References src/data/maps.ts for "map" slides. */
  mapId?: string;
  compare?: CompareBlock;
  /** What to tease at the end of a "cliffhanger" slide, e.g. "Week 2 — The Prophet Appears". */
  nextLabel?: string;
  /** Visual weight hook for scenes that should read as heavier/darker. */
  tone?: "dark";
}

export const slides: Slide[] = [
  {
    id: "intro",
    week: 0,
    kicker: "Introduction",
    title: "The Prophet Elijah",
    bullets: [
      "A four-week study of Elijah's ministry",
      "History, geography, and theology together",
      "Every thread leads to Jesus Christ",
    ],
    notes: "Open by asking: what do people already associate with Elijah? Fire from heaven? The Transfiguration? Use this to set expectations that we'll cover far more than the highlight reel.",
  },
  // Week 1
  {
    id: "w1-mountain-moses",
    week: 1,
    kicker: "Week 1 · Scene 1 — The Mountain",
    title: "Why Moses?",
    layout: "mystery",
    quote: {
      text: "And after six days Jesus took with him Peter and James and John his brother, and led them up a high mountain... And behold, there appeared to them Moses and Elijah, talking with him.",
      ref: "Matthew 17:1-3",
    },
    bullets: [
      "Two figures appear beside the transfigured Jesus.",
      "Moses and Elijah.",
    ],
    notes: "Ask the room out loud: why Moses? The answer comes instantly, almost every time — \"the Law.\" Let someone answer before moving on; don't rush past how easy this one is, because it sets up how hard the next question feels.",
    scriptureRefs: ["Matthew 17:1-3"],
  },
  {
    id: "w1-mountain-elijah",
    week: 1,
    kicker: "Week 1 · Scene 1 — The Mountain",
    title: "Why Elijah?",
    layout: "mystery",
    bullets: [
      "Moses represents the Law.",
      "Elijah represents...?",
    ],
    notes: "Sit in the silence here — do not let anyone answer yet. This is the central question the entire week exists to answer; don't resolve it now. The payoff is Scene 13.",
    scriptureRefs: ["Matthew 17:1-13"],
  },
  {
    id: "w1-lens",
    week: 1,
    kicker: "Week 1 · Scene 2 — The Lens",
    title: "The Law and the Prophets",
    layout: "compare",
    quote: { text: "I did not come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them.", ref: "Matthew 5:17" },
    compare: {
      leftLabel: "LAW",
      leftRef: "Moses",
      leftText: "The covenant Moses mediated at Sinai — the terms of Israel's relationship with God.",
      rightLabel: "PROPHETS",
      rightRef: "Elijah",
      rightText: "Everyone from Joshua to Malachi who enforced, defended, and spoke that covenant back to Israel.",
      sharedPhrase: "Jesus fulfills both.",
    },
    bullets: [
      "\"The Law and the Prophets\" was first-century shorthand for the whole Old Testament.",
      "Moses represents the Law.",
      "Elijah represents the Prophets.",
      "This becomes the lens for the rest of the study.",
    ],
    notes: "This is the interpretive key for all four weeks: Elijah is not a stand-alone hero story — he lives entirely inside the 'Prophets' half of this phrase, and this section should introduce the prophetic office before introducing any prophet by name.",
    scriptureRefs: ["Matthew 5:17"],
  },
  {
    id: "w1-what-is-a-prophet",
    week: 1,
    kicker: "Week 1 · Scene 3 — What Is a Prophet?",
    title: "God's Covenant Messengers",
    bullets: [
      "Deuteronomy 18 defines the office before Israel ever meets a prophet.",
      "God raises up prophets Himself — it is never a human career choice.",
      "God puts His own words into their mouths.",
      "They speak for God, not merely about God.",
      "Rejecting a true prophet is rejecting God Himself.",
      "A false prophet who speaks presumptuously is judged.",
    ],
    notes: "Emphasize: prophets are not fortune-tellers. Prediction is one small tool among many; their core task is holding Israel to a covenant that already exists.",
    scriptureRefs: ["Deuteronomy 18:15-22"],
  },
  {
    id: "w1-flashback",
    week: 1,
    kicker: "Week 1 · Scene 4",
    title: "800 Years Earlier...",
    layout: "flashback",
    flashbackLabel: "800 Years Earlier...",
    bullets: [],
    notes: "Let this land with almost no explanation, like a film cutting backward in time. The audience should briefly wonder why we've suddenly landed in Joshua — that confusion is intentional. Scene 5 answers it.",
  },
  {
    id: "w1-enter-canaan",
    week: 1,
    kicker: "Week 1 · Scene 5 — Enter Canaan",
    title: "A Land Full of Kings",
    layout: "map",
    mapId: "conquest",
    bullets: [
      "Israel is not yet a kingdom — it is a nation entering someone else's land.",
      "Canaan is not one country but dozens of independent city-states, each with its own king.",
      "Joshua leads a real but incomplete conquest: Jericho, Ai, Jerusalem, Bethel, Hazor, and more.",
      "Joshua 13: \"There remains yet very much land to be possessed.\"",
    ],
    notes: "The incompleteness matters — the Canaanite populations (and gods) left in the land are exactly who Israel keeps intermarrying with and worshiping alongside for the next 800 years.",
    scriptureRefs: ["Joshua 13:1"],
  },
  {
    id: "w1-gods-of-canaan",
    week: 1,
    kicker: "Week 1 · Scene 6 — The Gods of Canaan",
    title: "Who Israel Was Warned About",
    bullets: [
      "Every nation in Canaan worshiped its own gods, tied to weather, fertility, and the land itself.",
      "Baal (storm and harvest), Asherah (fertility), Ashtoreth (Sidon's goddess), Molech (the Ammonites' god).",
      "These were not exotic curiosities — they were the default religion of the ground Israel was about to farm.",
    ],
    notes: "This is the most important background section of the week — nearly everything from Judges through Ahab is a variation on Israel giving in to exactly these gods. Pull up /deities on the reference site if the group wants the images, cult sites, and sourcing for each one — it's deliberately left off this slide so it doesn't get crowded.",
  },
  {
    id: "w1-warnings",
    week: 1,
    kicker: "Week 1 · Scene 6 — The Warnings",
    title: "God Warned Israel First",
    bullets: [
      "Do not intermarry with the nations already in the land (Deuteronomy 7:3-4).",
      "Tear down their altars, pillars, and Asherah poles — don't merely add them alongside the LORD's worship (Deuteronomy 7:5; 12:2-3).",
      "Do not worship at Canaanite \"high places.\"",
      "The reason given is explicit: foreign wives \"will turn away your sons from following me, to serve other gods\" (Deuteronomy 7:4).",
    ],
    notes: "This is the Chekhov's gun of the whole storyline — every major idolatry scene still to come (Solomon, Ahab) is this exact warning coming true, stated before Israel even crosses the Jordan.",
    scriptureRefs: ["Deuteronomy 7:1-6", "Deuteronomy 12:2-3", "Deuteronomy 16:21-22"],
  },
  {
    id: "w1-united-monarchy-map",
    week: 1,
    kicker: "Centuries Later",
    title: "One Kingdom, One Throne",
    layout: "map",
    mapId: "united-monarchy",
    bullets: [
      "Fast-forward through Judges, Saul, and David to Solomon's reign.",
      "This is the kingdom Solomon inherits, near its greatest extent — united, wealthy, at peace.",
      "It will not stay this way.",
    ],
    notes: "A brief geographic anchor before Solomon's fall — let the map do the talking here.",
  },
  {
    id: "w1-solomon-falls",
    week: 1,
    kicker: "Week 1 · Scene 7 — Solomon Falls",
    title: "Knowing God Is Not the Same as Surrendering to Him",
    bullets: [
      "God appeared to Solomon twice, personally (1 Kings 3:5; 9:2).",
      "Despite this, \"his heart was turned away after other gods\" (1 Kings 11:4).",
      "His foreign wives turn him toward Ashtoreth, Chemosh, and Molech.",
      "Judgment: the kingdom will divide — but not in Solomon's own lifetime, for David's sake.",
    ],
    notes: "Major application for the whole series: proximity to God, even direct personal revelation, is not the same thing as a surrendered heart. Solomon wrote wisdom literature and still ended here.",
    scriptureRefs: ["1 Kings 11:1-13"],
  },
  {
    id: "w1-ahijah-jeroboam",
    week: 1,
    kicker: "Week 1 · Scene 8 — Ahijah and Jeroboam",
    title: "The Torn Cloak",
    bullets: [
      "The prophet Ahijah tears his cloak into twelve pieces in front of Jeroboam.",
      "Ten pieces given to Jeroboam — representing the ten tribes about to break away.",
      "Two pieces retained for Solomon's son, for David's sake.",
      "God offers Jeroboam a dynasty as enduring as David's, if he simply obeys.",
      "Jeroboam does not trust God to keep that promise.",
    ],
    notes: "Let the offer land before the failure: Jeroboam isn't fated to fail. He's offered everything, and chooses fear and control instead — which sets up the golden calves immediately.",
    scriptureRefs: ["1 Kings 11:29-39", "1 Kings 12:15"],
  },
  {
    id: "w1-divided-kingdom-map",
    week: 1,
    kicker: "The Kingdom Splits",
    title: "Israel and Judah",
    layout: "map",
    mapId: "divided-kingdom",
    bullets: [
      "Rehoboam's harshness triggers the ten northern tribes to secede under Jeroboam.",
      "Judah (south) keeps Jerusalem, the Temple, and the Davidic line.",
      "Israel (north) has land and numbers, but no temple of its own.",
    ],
    notes: "This is the political map standing behind every remaining scene in Elijah's story.",
    scriptureRefs: ["1 Kings 12:1-24"],
  },
  {
    id: "w1-golden-calves",
    week: 1,
    kicker: "Week 1 · Scene 9 — The Golden Calves",
    title: "Aaron's Sin, Repeated",
    layout: "compare",
    compare: {
      leftLabel: "Exodus 32:4 — Aaron, at Sinai",
      leftRef: "Exodus 32:4",
      leftText: "\"...he made a golden calf... and they said, 'Here are your gods, O Israel, who brought you up out of the land of Egypt!'\"",
      rightLabel: "1 Kings 12:28 — Jeroboam, at Bethel",
      rightRef: "1 Kings 12:28",
      rightText: "\"...he made two calves of gold. And he said to the people, 'Here are your gods, O Israel, who brought you up out of the land of Egypt.'\"",
      sharedPhrase: "\"Here are your gods, O Israel, who brought you up out of Egypt.\"",
      note: "Almost word for word — Jeroboam is deliberately repeating Aaron's sin, four centuries later.",
    },
    bullets: [
      "One calf at Bethel, one at Dan — bracketing the entire northern kingdom.",
      "A new, non-Levitical priesthood.",
      "New feast days, timed to compete with Jerusalem's calendar.",
      "A complete alternative worship system, not a minor compromise.",
    ],
    notes: "Let the side-by-side wording do the work before you explain it — the near-identical phrasing is the whole point of this scene.",
    scriptureRefs: ["Exodus 32:1-6", "1 Kings 12:25-33"],
  },
  {
    id: "w1-sins-of-jeroboam",
    week: 1,
    kicker: "The Phrase That Follows Every King",
    title: "\"He Did Not Depart From the Sins of Jeroboam\"",
    quote: { text: "He did not depart from the sins of Jeroboam son of Nebat, which he made Israel to sin.", ref: "e.g. 1 Kings 15:34; 16:19, 26" },
    bullets: [
      "This exact verdict recurs over nearly every king of the Northern Kingdom.",
      "The golden calves outlive Jeroboam by two centuries — never removed until Israel's fall.",
      "One act of institutional idolatry comes to define an entire national identity.",
    ],
    notes: "Make this phrase visually memorable — it's the refrain of the whole Northern Kingdom narrative, and in two scenes it will describe Ahab too.",
    scriptureRefs: ["1 Kings 15:34", "1 Kings 16:19", "1 Kings 16:26"],
  },
  {
    id: "w1-young-prophet",
    week: 1,
    kicker: "Week 1 · Scene 10 — The Young Prophet",
    title: "Even Prophets Must Obey",
    bullets: [
      "God is already sending prophets against Bethel's altar — long before Elijah.",
      "An unnamed man of God confronts Jeroboam directly at the altar (1 Kings 13).",
      "The altar splits, and Jeroboam's hand withers when he reaches for the prophet — then is restored.",
      "An old prophet in Bethel lies about a new revelation from an angel; the man of God believes him, and disobeys.",
      "He is killed on the road home for that disobedience.",
    ],
    notes: "Key application: a genuine, already-given word from God cannot be overridden by someone else's later claim to 'new' revelation, however plausible it sounds.",
    scriptureRefs: ["1 Kings 13"],
  },
  {
    id: "w1-omri",
    week: 1,
    kicker: "Week 1 · Scene 11 — Omri",
    title: "Historically Great, Biblically Condemned",
    bullets: [
      "Omri receives only eight verses in Scripture (1 Kings 16:23-28).",
      "Yet he is historically significant enough that Assyria calls Israel \"the House of Omri\" for a century after his death.",
      "Scripture's own verdict: \"Omri did what was evil in the sight of the LORD, and did more evil than all who were before him.\"",
    ],
    notes: "Keep this brief, on purpose — Omri exists mainly to set up his son.",
    scriptureRefs: ["1 Kings 16:23-28"],
  },
  {
    id: "w1-ahab-jezebel",
    week: 1,
    kicker: "Week 1 · Scene 12 — Ahab and Jezebel",
    title: "Institutionalized Rebellion",
    tone: "dark",
    bullets: [
      "Jezebel: a Sidonian princess, daughter of King Ethbaal, brings Phoenician Baal worship with her.",
      "Ahab builds Baal a temple and altar in Samaria itself, alongside an Asherah pole.",
      "This is royal, state-sponsored idolatry — not private compromise at the margins.",
      "Jezebel actively funds Baal's and Asherah's prophets, and hunts down the LORD's.",
      "Israel has now reached its spiritual lowest point.",
    ],
    notes: "Everything before this — Jeroboam's calves, the young prophet's warning, Omri's rise — has been building toward this exact moment. Let this section feel heavier and darker than what came before.",
    scriptureRefs: ["1 Kings 16:29-33", "1 Kings 18:4", "1 Kings 18:13"],
  },
  {
    id: "w1-cliffhanger",
    week: 1,
    kicker: "Week 1 · Scene 13",
    title: "Now Elijah the Tishbite...",
    layout: "cliffhanger",
    quote: { text: "Now Elijah the Tishbite...", ref: "1 Kings 17:1" },
    nextLabel: "Week 2 — The Prophet Appears",
    bullets: [],
    notes: "Read only the opening words. Do not explain. Do not continue. Let it go quiet, then fade to black.",
    scriptureRefs: ["1 Kings 17:1"],
  },
  // Week 2
  {
    id: "w2-drought",
    week: 2,
    kicker: "Week 2 — Who is God?",
    title: "The Drought Announced",
    bullets: ["Elijah confronts Ahab directly", "No rain except by Elijah's word", "A direct challenge to Baal's claimed domain"],
    notes: "",
    scriptureRefs: ["1 Kings 17:1"],
  },
  {
    id: "w2-widow",
    week: 2,
    kicker: "Week 2 — Who is God?",
    title: "The Widow of Zarephath",
    bullets: ["Provision: flour and oil do not run out", "Resurrection: her son is raised", "Sent to a foreigner, in Baal's own territory"],
    notes: "Reference Luke 4:25-26 — Jesus cites this as evidence grace was never confined to Israel.",
    scriptureRefs: ["1 Kings 17:8-24"],
  },
  {
    id: "w2-carmel",
    week: 2,
    kicker: "Week 2 — Who is God?",
    title: "Mount Carmel",
    bullets: ["450 prophets of Baal vs. one altar of the LORD", "'How long will you go limping between two opinions?'", "Fire falls; the people cry out"],
    notes: "",
    scriptureRefs: ["1 Kings 18:19-40"],
  },
  {
    id: "w2-rain-jezreel",
    week: 2,
    kicker: "Week 2 — Who is God?",
    title: "Rain Returns; the Run to Jezreel",
    bullets: ["A cloud 'like a man's hand'", "The drought ends", "Elijah outruns Ahab's chariot"],
    notes: "Set up the contrast with next week: the highest moment is about to collapse into the lowest.",
    scriptureRefs: ["1 Kings 18:41-46"],
  },
  // Week 3
  {
    id: "w3-fear",
    week: 3,
    kicker: "Week 3 — When Servants Break",
    title: "Jezebel's Threat",
    bullets: ["One message undoes a mountaintop victory", "Elijah runs for his life", "Scripture does not smooth over the contradiction"],
    notes: "",
    scriptureRefs: ["1 Kings 19:1-3"],
  },
  {
    id: "w3-broom-tree",
    week: 3,
    kicker: "Week 3 — When Servants Break",
    title: "The Broom Tree",
    bullets: ["'It is enough; take my life'", "Real despair, not staged", "God's first response: sleep and food"],
    notes: "",
    scriptureRefs: ["1 Kings 19:4-8"],
  },
  {
    id: "w3-horeb",
    week: 3,
    kicker: "Week 3 — When Servants Break",
    title: "Forty Days to Horeb",
    bullets: ["Same mountain as Moses", "Wind, earthquake, fire — God is not in them", "A still small voice"],
    notes: "",
    scriptureRefs: ["1 Kings 19:8-13"],
  },
  {
    id: "w3-7000",
    week: 3,
    kicker: "Week 3 — When Servants Break",
    title: "The 7,000",
    bullets: ["'I, even I only, am left'", "God: 7,000 have not bowed to Baal", "Romans 11 cites this as the pattern of a faithful remnant"],
    notes: "",
    scriptureRefs: ["1 Kings 19:14-18", "Romans 11:1-6"],
  },
  {
    id: "w3-commission",
    week: 3,
    kicker: "Week 3 — When Servants Break",
    title: "The Threefold Commission",
    bullets: ["Elisha: anointed personally by Elijah", "Hazael & Jehu: named now, anointed later — through Elisha", "God's purposes outlast any one prophet"],
    notes: "",
    scriptureRefs: ["1 Kings 19:15-21"],
  },
  // Week 4
  {
    id: "w4-naboth",
    week: 4,
    kicker: "Week 4 — The Legacy of Elijah",
    title: "Naboth's Vineyard",
    bullets: ["Jezebel's false accusation and murder", "Elijah's direct confrontation", "Judgment pronounced on Ahab's house"],
    notes: "",
    scriptureRefs: ["1 Kings 21"],
  },
  {
    id: "w4-micaiah",
    week: 4,
    kicker: "Week 4 — The Legacy of Elijah",
    title: "Micaiah's Warning; Death of Ahab",
    bullets: ["One honest prophet vs. 400 court prophets", "Ahab disguises himself — and dies anyway", "Fulfilled exactly as foretold"],
    notes: "",
    scriptureRefs: ["1 Kings 22"],
  },
  {
    id: "w4-departure",
    week: 4,
    kicker: "Week 4 — The Legacy of Elijah",
    title: "Elijah's Departure",
    bullets: ["The Jordan parts again, echoing Joshua and Moses", "A chariot of fire; a whirlwind", "Elijah does not die"],
    notes: "",
    scriptureRefs: ["2 Kings 2:1-11"],
  },
  {
    id: "w4-cloak",
    week: 4,
    kicker: "Week 4 — The Legacy of Elijah",
    title: "The Cloak to Elisha",
    bullets: ["A double portion — the firstborn's inheritance", "Elisha parts the Jordan himself", "'The spirit of Elijah rests on Elisha'"],
    notes: "",
    scriptureRefs: ["2 Kings 2:9-15"],
  },
  {
    id: "w4-christ",
    week: 4,
    kicker: "Week 4 — The Legacy of Elijah",
    title: "Everything Points to Christ",
    bullets: [
      "John the Baptist — Elijah's spirit and power",
      "The Transfiguration — Law, Prophets, and Fulfillment",
      "James 5 — Elijah's prayer, and ours",
      "'I have not come to abolish... but to fulfill'",
    ],
    notes: "Close by inviting reflection: what in this series most reshaped how you read the Old Testament?",
    scriptureRefs: ["Matthew 5:17", "James 5:17-18"],
  },
];
