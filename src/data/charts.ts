export interface BattleEntry {
  name: string;
  dateBC?: string;
  combatants: string;
  outcome: string;
  refs: string[];
}

export interface MiracleEntry {
  miracle: string;
  worker: "Elijah" | "Elisha";
  refs: string[];
}

export const majorBattles: BattleEntry[] = [
  {
    name: "Fall of Jericho",
    dateBC: "c. 1400s–1200s BC",
    combatants: "Israel vs. Jericho",
    outcome: "City walls fall; Jericho destroyed and placed under a curse against rebuilding.",
    refs: ["Joshua 6"],
  },
  {
    name: "Battle at Ai (initial defeat, then victory)",
    combatants: "Israel vs. Ai",
    outcome: "Israel is defeated because of Achan's sin, then victorious after judgment is dealt with.",
    refs: ["Joshua 7-8"],
  },
  {
    name: "Deborah and Barak vs. Sisera",
    combatants: "Israel vs. Canaanite forces under Sisera",
    outcome: "The Kishon River sweeps away Sisera's chariots; Sisera killed by Jael.",
    refs: ["Judges 4-5"],
  },
  {
    name: "Ahab's wars with Ben-Hadad of Aram",
    dateBC: "c. 860s BC",
    combatants: "Israel (Ahab) vs. Aram (Ben-Hadad)",
    outcome: "Israel wins two campaigns; Ahab controversially spares Ben-Hadad's life and is rebuked by a prophet.",
    refs: ["1 Kings 20"],
  },
  {
    name: "Battle of Ramoth-Gilead",
    dateBC: "c. 853 BC",
    combatants: "Israel & Judah (Ahab, Jehoshaphat) vs. Aram",
    outcome: "Ahab, disguised, is struck by a stray arrow and dies exactly as Micaiah had prophesied.",
    refs: ["1 Kings 22:29-38"],
  },
  {
    name: "Jehu's coup against the house of Ahab",
    dateBC: "c. 841 BC",
    combatants: "Jehu vs. the royal house of Israel",
    outcome: "Jehoram, Jezebel, and the rest of Ahab's house are killed; the Baal cult in Samaria is destroyed.",
    refs: ["2 Kings 9-10"],
  },
  {
    name: "The Syro-Ephraimite War",
    dateBC: "c. 734–732 BC",
    combatants: "Aram & Israel (Pekah) vs. Judah (Ahaz)",
    outcome: "Ahaz refuses Isaiah's call to trust the LORD and instead pays Assyria for help, becoming its vassal.",
    refs: ["2 Kings 16", "Isaiah 7"],
  },
  {
    name: "Siege and fall of Samaria",
    dateBC: "722 BC",
    combatants: "Assyria (Shalmaneser V, Sargon II) vs. Israel (Hoshea)",
    outcome: "After a three-year siege, Samaria falls; Israel's population is deported, ending the Northern Kingdom.",
    refs: ["2 Kings 17"],
  },
  {
    name: "Sennacherib's siege of Jerusalem",
    dateBC: "701 BC",
    combatants: "Assyria (Sennacherib) vs. Judah (Hezekiah)",
    outcome: "Jerusalem is miraculously spared; the Assyrian army withdraws.",
    refs: ["2 Kings 18-19", "Isaiah 36-37"],
  },
  {
    name: "Siege and fall of Jerusalem",
    dateBC: "586 BC",
    combatants: "Babylon (Nebuchadnezzar) vs. Judah (Zedekiah)",
    outcome: "Jerusalem and the Temple are destroyed after an 18-month siege; Judah is exiled.",
    refs: ["2 Kings 25"],
  },
];

export const majorMiracles: MiracleEntry[] = [
  { miracle: "Ravens feed Elijah at the Brook Cherith", worker: "Elijah", refs: ["1 Kings 17:2-7"] },
  { miracle: "The widow of Zarephath's flour and oil do not run out", worker: "Elijah", refs: ["1 Kings 17:8-16"] },
  { miracle: "The widow of Zarephath's son is raised", worker: "Elijah", refs: ["1 Kings 17:17-24"] },
  { miracle: "Fire falls from heaven on Mount Carmel", worker: "Elijah", refs: ["1 Kings 18:36-39"] },
  { miracle: "Rain returns after three and a half years", worker: "Elijah", refs: ["1 Kings 18:41-45"] },
  { miracle: "An angel provides food that sustains a forty-day journey", worker: "Elijah", refs: ["1 Kings 19:5-8"] },
  { miracle: "Fire consumes two companies of soldiers", worker: "Elijah", refs: ["2 Kings 1:9-12"] },
  { miracle: "The Jordan River parts for Elijah and Elisha", worker: "Elijah", refs: ["2 Kings 2:8"] },
  { miracle: "Elijah is taken up to heaven in a whirlwind", worker: "Elijah", refs: ["2 Kings 2:11"] },
  { miracle: "The Jordan River parts again for Elisha alone", worker: "Elisha", refs: ["2 Kings 2:13-14"] },
  { miracle: "The waters of Jericho are healed", worker: "Elisha", refs: ["2 Kings 2:19-22"] },
  { miracle: "A widow's jar of oil multiplies to pay her debts", worker: "Elisha", refs: ["2 Kings 4:1-7"] },
  { miracle: "The Shunammite woman's son is raised from death", worker: "Elisha", refs: ["2 Kings 4:18-37"] },
  { miracle: "A poisonous stew is made safe to eat", worker: "Elisha", refs: ["2 Kings 4:38-41"] },
  { miracle: "A hundred men are fed from twenty loaves, with leftovers", worker: "Elisha", refs: ["2 Kings 4:42-44"] },
  { miracle: "Naaman the Aramean general is healed of leprosy", worker: "Elisha", refs: ["2 Kings 5:1-14"] },
  { miracle: "A borrowed axe head floats", worker: "Elisha", refs: ["2 Kings 6:1-7"] },
  { miracle: "An Aramean army is struck with blindness, then healed", worker: "Elisha", refs: ["2 Kings 6:15-20"] },
  { miracle: "A dead man revives on touching Elisha's bones", worker: "Elisha", refs: ["2 Kings 13:20-21"] },
];
