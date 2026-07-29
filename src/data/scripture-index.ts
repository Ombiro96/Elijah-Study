import type { ScriptureUsage } from "./types";

export interface ScriptureIndexEntry {
  ref: string;
  book: string;
  testament: "OT" | "NT";
  usages: ScriptureUsage[];
}

const raw: ScriptureUsage[] = [
  // Torah / Law
  { ref: "Exodus 3", context: "Moses at the burning bush, Horeb", href: "/people/moses" },
  { ref: "Exodus 19-24", context: "The Law given at Sinai", href: "/theology/law-and-prophets" },
  { ref: "Exodus 20:3", context: "The first commandment", href: "/themes/covenant" },
  { ref: "Exodus 20:4-6", context: "The second commandment, against idols", href: "/themes/idolatry" },
  { ref: "Exodus 20:25", context: "An altar must be built of unworked stone", href: "/week/2" },
  { ref: "Deuteronomy 11:13-17", context: "Rain as covenant blessing/curse", href: "/themes/rain" },
  { ref: "Deuteronomy 12:5-14", context: "Centralized worship commanded", href: "/themes/temple" },
  { ref: "Deuteronomy 17:14-20", context: "The law of the king", href: "/themes/kingship" },
  { ref: "Deuteronomy 13:1-5", context: "The covenant penalty for leading Israel into apostasy", href: "/week/2" },
  { ref: "Deuteronomy 18:15-22", context: "The prophetic office instituted; a prophet like Moses", href: "/theology/prophetic-office" },
  { ref: "Deuteronomy 30:6", context: "God circumcises the heart so that Israel will love Him", href: "/themes/turned-hearts" },
  { ref: "Deuteronomy 34", context: "Death of Moses", href: "/people/moses" },
  // Joshua / Judges
  { ref: "Joshua 3", context: "Israel crosses the Jordan", href: "/week/1" },
  { ref: "Joshua 6", context: "The fall of Jericho", href: "/week/1" },
  { ref: "Joshua 6:26", context: "Joshua's curse on rebuilding Jericho", href: "/week/1" },
  { ref: "Joshua 7-8", context: "Ai: defeat, then victory", href: "/maps" },
  { ref: "Joshua 24", context: "Covenant renewal at Shechem", href: "/people/joshua" },
  { ref: "Judges 2:11-19", context: "The cycle of the Judges", href: "/timeline" },
  { ref: "Judges 4:7", context: "The Kishon in Deborah and Barak's victory", href: "/maps" },
  { ref: "Judges 5:21", context: "The Kishon sweeps away Sisera's army", href: "/maps" },
  { ref: "Judges 6:25-32", context: "Gideon tears down a Baal altar", href: "/themes/baal" },
  // Samuel / Kings — United Kingdom
  { ref: "1 Samuel 8-10", context: "Israel demands a king; Saul anointed", href: "/timeline" },
  { ref: "1 Samuel 8:11", context: "A king will make your sons run before his chariots", href: "/week/2" },
  { ref: "1 Samuel 16-17", context: "David anointed; defeats Goliath", href: "/people/david" },
  { ref: "1 Samuel 31", context: "Death of Saul", href: "/timeline" },
  { ref: "2 Samuel 5", context: "David becomes king over all Israel", href: "/people/david" },
  { ref: "2 Samuel 7", context: "The Davidic covenant", href: "/themes/covenant" },
  { ref: "2 Samuel 15:1", context: "Absalom acquires runners to go before him", href: "/week/2" },
  { ref: "2 Samuel 11-12", context: "David and Bathsheba; Nathan's rebuke", href: "/people/david" },
  { ref: "1 Kings 1-11", context: "Solomon's reign", href: "/people/solomon" },
  { ref: "1 Kings 3", context: "Solomon asks for wisdom", href: "/people/solomon" },
  { ref: "1 Kings 6-8", context: "Solomon builds and dedicates the Temple", href: "/themes/temple" },
  { ref: "1 Kings 11", context: "Solomon's foreign wives and idolatry", href: "/people/solomon" },
  { ref: "1 Kings 11:9", context: "Solomon's heart turns away — from the God who appeared to him twice", href: "/themes/turned-hearts" },
  // Divided Kingdom / Week 1
  { ref: "1 Kings 12", context: "The kingdom divides", href: "/week/1" },
  { ref: "1 Kings 12:25-33", context: "Jeroboam's golden calves", href: "/week/1" },
  { ref: "1 Kings 13", context: "The man of God and the old prophet", href: "/week/1" },
  { ref: "1 Kings 14", context: "Judgment announced on Jeroboam's house", href: "/people/jeroboam" },
  { ref: "1 Kings 15:1-8", context: "Abijah's reign", href: "/kings" },
  { ref: "1 Kings 15:9-24", context: "Asa's reforms", href: "/kings" },
  { ref: "1 Kings 15:16-16:7", context: "Baasha's reign", href: "/kings" },
  { ref: "1 Kings 16:8-14", context: "Elah's assassination", href: "/kings" },
  { ref: "1 Kings 16:15-20", context: "Zimri's brief reign", href: "/kings" },
  { ref: "1 Kings 16:15-28", context: "Omri founds Samaria", href: "/people/omri" },
  { ref: "1 Kings 16:29-33", context: "Ahab marries Jezebel; the Baal temple", href: "/people/ahab" },
  { ref: "1 Kings 16:34", context: "Hiel rebuilds Jericho; Joshua's curse fulfilled", href: "/week/1" },
  // Week 2 — 1 Kings 17-18
  { ref: "1 Kings 17:1", context: "Elijah announces the drought", href: "/week/2" },
  { ref: "1 Kings 17:2-7", context: "Elijah at the Brook Cherith", href: "/week/2" },
  { ref: "1 Kings 17:8-16", context: "The widow's flour and oil do not run out", href: "/week/2" },
  { ref: "1 Kings 17:8-24", context: "The widow of Zarephath; provision and resurrection", href: "/week/2" },
  { ref: "1 Kings 17:17-24", context: "The widow's son raised — the first resurrection in Scripture", href: "/week/2" },
  { ref: "1 Kings 18", context: "The contest on Mount Carmel", href: "/week/2" },
  { ref: "1 Kings 18:1", context: "The rain promised before Carmel — the outcome settled in advance", href: "/themes/prayer" },
  { ref: "1 Kings 18:19-24", context: "The terms of the test: 'The God who answers by fire, he is God'", href: "/week/2" },
  { ref: "1 Kings 18:19-40", context: "Fire falls on Carmel", href: "/week/2" },
  { ref: "1 Kings 18:20-24", context: "The terms of the test on Mount Carmel", href: "/week/2" },
  { ref: "1 Kings 18:21", context: "'How long will you go limping between two different opinions?'", href: "/week/2" },
  { ref: "1 Kings 18:25-29", context: "Six hours of maximum human effort, answered by silence", href: "/week/2" },
  { ref: "1 Kings 18:26-29", context: "The prophets of Baal cry out in vain", href: "/themes/idolatry" },
  { ref: "1 Kings 18:30-32", context: "Twelve uncut stones — one for each tribe of Jacob", href: "/week/2" },
  { ref: "1 Kings 18:30-35", context: "The altar rebuilt with twelve stones and drenched in water", href: "/week/2" },
  { ref: "1 Kings 18:36-37", context: "Elijah's prayer: 'that you have turned their hearts back'", href: "/themes/turned-hearts" },
  { ref: "1 Kings 18:36-39", context: "The people declare 'The LORD, he is God'", href: "/week/2" },
  { ref: "1 Kings 18:37", context: "God, not Elijah, is the one who turns hearts", href: "/themes/turned-hearts" },
  { ref: "1 Kings 18:38", context: "The fire of the LORD falls", href: "/themes/fire" },
  { ref: "1 Kings 18:38-39", context: "Fire, then worship — God acts before the people respond", href: "/week/2" },
  { ref: "1 Kings 18:39", context: "The confession that follows the fire, not the other way round", href: "/themes/turned-hearts" },
  { ref: "1 Kings 18:40", context: "The prophets of Baal executed at the Kishon", href: "/week/2" },
  { ref: "1 Kings 18:41-45", context: "The sevenfold prayer; Elijah's face between his knees", href: "/themes/prayer" },
  { ref: "1 Kings 18:41-46", context: "Rain returns", href: "/week/2" },
  { ref: "1 Kings 18:42-44", context: "Praying seven times for a promise already given", href: "/themes/prayer" },
  { ref: "1 Kings 18:44-45", context: "A cloud like a man's hand; the drought breaks", href: "/themes/rain" },
  { ref: "1 Kings 18:46", context: "\"The hand of the LORD was on Elijah\" — even his strength is God's", href: "/week/2" },
  // Week 3 — 1 Kings 19
  { ref: "1 Kings 19", context: "Elijah flees to Horeb; the still small voice", href: "/week/3" },
  { ref: "1 Kings 19:1-3", context: "Jezebel's death threat; Elijah flees in fear", href: "/week/3" },
  { ref: "1 Kings 19:4-8", context: "The broom tree and the angel's provision", href: "/week/3" },
  { ref: "1 Kings 19:9-18", context: "The still small voice; the 7,000", href: "/week/3" },
  { ref: "1 Kings 19:1-18", context: "From flight to Horeb to the 7,000 God kept for Himself", href: "/week/3" },
  { ref: "1 Kings 19:10", context: "Elijah insists the nation has forsaken the covenant — after Carmel", href: "/themes/turned-hearts" },
  { ref: "1 Kings 19:10, 14", context: "Elijah's lament: 'I, even I only, am left'", href: "/themes/covenant" },
  { ref: "1 Kings 19:14-18", context: "God's answer: 'I have kept for myself seven thousand'", href: "/theology/romans-11" },
  { ref: "1 Kings 19:15-16", context: "The threefold commission: Hazael, Jehu, Elisha", href: "/week/3" },
  { ref: "1 Kings 19:18", context: "The 7,000 who have not bowed to Baal", href: "/themes/grace" },
  { ref: "1 Kings 19:19-21", context: "The call of Elisha", href: "/week/3" },
  // Week 4
  { ref: "1 Kings 20", context: "Ahab's wars with Aram", href: "/people/ahab" },
  { ref: "1 Kings 21", context: "Naboth's vineyard", href: "/week/4" },
  { ref: "1 Kings 21:17-29", context: "Elijah confronts Ahab; Ahab's partial repentance", href: "/week/4" },
  { ref: "1 Kings 22", context: "Micaiah's warning; death of Ahab", href: "/week/4" },
  { ref: "1 Kings 22:1-38", context: "Ahab and Jehoshaphat at Ramoth-gilead", href: "/week/4" },
  { ref: "2 Kings 1", context: "Ahaziah consults Baal-zebub; fire on the soldiers", href: "/week/4" },
  { ref: "2 Kings 1:8", context: "Elijah's distinctive appearance", href: "/people/john-the-baptist" },
  { ref: "2 Kings 2", context: "Elijah's ascension; cloak passed to Elisha", href: "/week/4" },
  { ref: "2 Kings 2:1-14", context: "Elijah taken up in a whirlwind", href: "/week/4" },
  // Elisha's ministry
  { ref: "2 Kings 2:19-22", context: "Elisha heals the water at Jericho", href: "/people/elisha" },
  { ref: "2 Kings 3", context: "Jehoram of Israel's campaign against Moab", href: "/kings" },
  { ref: "2 Kings 4", context: "Elisha multiplies oil; raises the Shunammite's son", href: "/people/elisha" },
  { ref: "2 Kings 5", context: "Naaman healed of leprosy", href: "/people/elisha" },
  { ref: "2 Kings 8:7-15", context: "Elisha weeps over Hazael's future cruelty", href: "/people/hazael" },
  { ref: "2 Kings 8:16-24", context: "Jehoram of Judah's reign", href: "/kings" },
  { ref: "2 Kings 9-10", context: "Jehu's purge of the house of Ahab", href: "/people/jehu" },
  { ref: "2 Kings 9:1-13", context: "Jehu anointed king", href: "/people/jehu" },
  { ref: "2 Kings 9:30-37", context: "Death of Jezebel", href: "/people/jezebel" },
  { ref: "2 Kings 11", context: "Athaliah's massacre; Joash hidden", href: "/family-trees" },
  { ref: "2 Kings 13:1-9", context: "Jehoahaz oppressed by Hazael", href: "/kings" },
  { ref: "2 Kings 13:14-21", context: "Death of Elisha; his bones revive a corpse", href: "/people/elisha" },
  { ref: "2 Kings 17", context: "Fall of Samaria, 722 BC", href: "/timeline" },
  { ref: "2 Kings 18-20", context: "Hezekiah's reign", href: "/kings" },
  { ref: "2 Kings 21", context: "Manasseh's reign", href: "/kings" },
  { ref: "2 Kings 22-23", context: "Josiah's reforms", href: "/kings" },
  { ref: "2 Kings 25", context: "Fall of Jerusalem, 586 BC", href: "/timeline" },
  // Chronicles
  { ref: "2 Chronicles 18", context: "Micaiah's prophecy (Chronicles' parallel account)", href: "/people/micaiah" },
  { ref: "2 Chronicles 21", context: "Jehoram of Judah receives Elijah's letter", href: "/kings" },
  { ref: "2 Chronicles 33:10-13", context: "Manasseh's later repentance", href: "/themes/repentance" },
  // Wisdom
  { ref: "Proverbs 21:1", context: "The king's heart is a stream of water in the LORD's hand", href: "/themes/turned-hearts" },
  // Prophets
  { ref: "Isaiah 6", context: "Isaiah's call, 'in the year King Uzziah died'", href: "/kings" },
  { ref: "Isaiah 7", context: "The Syro-Ephraimite crisis under Ahaz", href: "/kings" },
  { ref: "Jeremiah 31:31-34", context: "The promise of a new covenant", href: "/themes/covenant" },
  { ref: "Ezekiel 36:26-27", context: "A new heart and a new spirit, given by God", href: "/themes/turned-hearts" },
  { ref: "Hosea 2:16-17", context: "Hosea plays on 'Baal' versus 'my husband'", href: "/themes/baal" },
  { ref: "Malachi 4:5-6", context: "The promise that Elijah will return before the Day of the LORD", href: "/theology/john-the-baptist-and-elijah" },
  // New Testament — Gospels
  { ref: "Matthew 1", context: "The genealogy of Jesus through David", href: "/family-trees" },
  { ref: "Matthew 3", context: "John the Baptist's ministry; Jesus' baptism", href: "/people/john-the-baptist" },
  { ref: "Matthew 5:17", context: "'I have not come to abolish but to fulfill'", href: "/week/1" },
  { ref: "Matthew 11:7-15", context: "Jesus on John as the Elijah who was to come", href: "/theology/john-the-baptist-and-elijah" },
  { ref: "Matthew 14:3-12", context: "Death of John the Baptist", href: "/people/john-the-baptist" },
  { ref: "Matthew 17", context: "The Transfiguration", href: "/week/1" },
  { ref: "Matthew 17:1-13", context: "Moses and Elijah appear with Jesus", href: "/theology/transfiguration" },
  { ref: "Luke 1:5-17", context: "John's birth announced; 'in the spirit and power of Elijah'", href: "/people/john-the-baptist" },
  { ref: "Luke 1:32-33", context: "Jesus as heir to David's eternal throne", href: "/themes/kingship" },
  { ref: "Luke 3", context: "The genealogy of Jesus (Luke's account)", href: "/family-trees" },
  { ref: "Luke 3:7-14", context: "John's call to repentance with concrete fruit", href: "/themes/repentance" },
  { ref: "Luke 4:25", context: "Jesus gives the drought's length as three years and six months", href: "/theology/james-5" },
  { ref: "Luke 4:25-26", context: "Jesus cites the widow of Zarephath", href: "/week/2" },
  { ref: "Luke 18:1-8", context: "Jesus on persistent prayer that does not lose heart", href: "/themes/prayer" },
  { ref: "Luke 9:28-36", context: "The Transfiguration (Luke's account)", href: "/theology/transfiguration" },
  { ref: "Luke 9:31", context: "Moses and Elijah discuss Jesus' 'departure' at Jerusalem", href: "/theology/transfiguration" },
  { ref: "Luke 24:27", context: "Jesus explains himself from Moses and all the Prophets", href: "/theology/law-and-prophets" },
  { ref: "John 1:21", context: "John the Baptist denies being Elijah literally returned", href: "/theology/john-the-baptist-and-elijah" },
  { ref: "John 2:19-21", context: "Jesus as the true Temple", href: "/themes/temple" },
  { ref: "Acts 14:15", context: "\"Men of like nature with you\" — the only other use of James's word for Elijah", href: "/theology/james-5" },
  { ref: "Acts 16:14", context: "The Lord opens Lydia's heart to respond", href: "/themes/turned-hearts" },
  // New Testament — Epistles / Revelation
  { ref: "Romans 1:21-23", context: "Idolatry as exchanging the truth of God", href: "/themes/idolatry" },
  { ref: "Romans 11", context: "Paul on the remnant and Israel's future", href: "/theology/romans-11" },
  { ref: "Romans 11:1-6", context: "Paul applies the 7,000 'remnant' pattern", href: "/theology/romans-11" },
  { ref: "Romans 11:2-6", context: "God kept the 7,000 for Himself; a remnant chosen by grace", href: "/themes/turned-hearts" },
  { ref: "Romans 11:4", context: "'I have kept for myself seven thousand' — God is the one keeping", href: "/week/2" },
  { ref: "Romans 11:5", context: "'A remnant, chosen by grace'", href: "/theology/romans-11" },
  { ref: "Romans 11:5-6", context: "If it is by grace, it is no longer on the basis of works", href: "/week/2" },
  { ref: "Hebrews 1:1-2", context: "God spoke by the prophets, and now by his Son", href: "/theology/law-and-prophets" },
  { ref: "Hebrews 8", context: "Christ as mediator of a better covenant", href: "/themes/covenant" },
  { ref: "James 5:13-18", context: "Elijah's prayers as the model for ordinary believing prayer", href: "/themes/prayer" },
  { ref: "James 5:16-18", context: "The New Testament application: pray like Elijah, not admire him", href: "/week/2" },
  { ref: "James 5:17", context: "\"A man with a nature like ours\" — the legend deliberately deflated", href: "/themes/prayer" },
  { ref: "James 5:17-18", context: "Elijah as a model of a man 'with a nature like ours'", href: "/theology/james-5" },
  { ref: "1 Corinthians 3:16", context: "Believers as God's temple", href: "/themes/temple" },
  { ref: "Revelation 11", context: "The two witnesses — Interpretive Perspectives", href: "/theology/revelation-11" },
  { ref: "Revelation 11:5", context: "The two witnesses can call down fire", href: "/theology/revelation-11" },
];

function parseBook(ref: string): { book: string; testament: "OT" | "NT" } {
  const ntBooks = [
    "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians",
    "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians",
    "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "Revelation",
  ];
  const match = ref.match(/^\d?\s?[A-Za-z]+/);
  const book = ref.replace(/\s+\d.*$/, "").trim();
  const isNT = ntBooks.some((b) => ref.startsWith(b));
  return { book: match ? book : ref, testament: isNT ? "NT" : "OT" };
}

export const scriptureIndex: ScriptureIndexEntry[] = (() => {
  const map = new Map<string, ScriptureIndexEntry>();
  for (const usage of raw) {
    const { book, testament } = parseBook(usage.ref);
    if (!map.has(usage.ref)) {
      map.set(usage.ref, { ref: usage.ref, book, testament, usages: [] });
    }
    map.get(usage.ref)!.usages.push(usage);
  }
  return Array.from(map.values());
})();

export const bookOrderOT = [
  "Exodus", "Deuteronomy", "Joshua", "Judges", "1 Samuel", "2 Samuel",
  "1 Kings", "2 Kings", "2 Chronicles", "Proverbs", "Isaiah", "Jeremiah",
  "Ezekiel", "Hosea", "Malachi",
];
export const bookOrderNT = [
  "Matthew", "Luke", "John", "Acts", "Romans", "1 Corinthians", "Hebrews", "James", "Revelation",
];
