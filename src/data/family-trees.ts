import type { FamilyTree } from "./types";

export const familyTrees: FamilyTree[] = [
  {
    id: "davidic-line",
    title: "The Davidic Line",
    description:
      "The line of promise from David through Solomon, on to Jesus — the thread the Southern Kingdom's kings are consistently measured against. Only key figures relevant to the study are shown; the full genealogy of Judah's kings continues unbroken to the exile (see the Kings module).",
    members: [
      { id: "jesse", name: "Jesse", role: "Father of David" },
      { id: "david", name: "David", role: "King, recipient of the covenant", personId: "david", parents: ["jesse"] },
      { id: "bathsheba", name: "Bathsheba", role: "Wife of David, mother of Solomon" },
      { id: "solomon", name: "Solomon", role: "King, Temple-builder", personId: "solomon", parents: ["david", "bathsheba"] },
      { id: "rehoboam", name: "Rehoboam", role: "First king of Judah", personId: "rehoboam", parents: ["solomon"] },
      { id: "davidic-succession", name: "Abijah → Asa → Jehoshaphat → … → Zedekiah", role: "Unbroken line of Judah's kings (see Kings module)", parents: ["rehoboam"] },
      { id: "jesus", name: "Jesus Christ", role: "\"Great David's greater Son\"; the eternal fulfillment of 2 Samuel 7", personId: "jesus", parents: ["davidic-succession"], note: "Matthew 1 and Luke 3 trace the full genealogy; shown here as the theological terminus of the promise." },
    ],
  },
  {
    id: "omri-dynasty",
    title: "The Dynasty of Omri",
    description:
      "Omri's house dominates the Northern Kingdom for four generations and, through Athaliah's marriage, briefly infiltrates Judah's throne as well.",
    members: [
      { id: "omri", name: "Omri", role: "Founder of Samaria", personId: "omri" },
      { id: "ahab", name: "Ahab", role: "King of Israel", personId: "ahab", parents: ["omri"] },
      { id: "jezebel", name: "Jezebel", role: "Queen consort, Sidonian princess", personId: "jezebel" },
      { id: "ahaziah-israel", name: "Ahaziah", role: "King of Israel", parents: ["ahab", "jezebel"] },
      { id: "jehoram-israel", name: "Jehoram (Joram)", role: "King of Israel, killed by Jehu", parents: ["ahab", "jezebel"] },
      { id: "athaliah", name: "Athaliah", role: "Daughter of Ahab and Jezebel; later queen of Judah", parents: ["ahab", "jezebel"] },
    ],
  },
  {
    id: "ahab-family",
    title: "Ahab's Immediate Family",
    description: "Ahab and Jezebel's household and its direct entanglement with Judah's royal line through Athaliah's marriage.",
    members: [
      { id: "ahab-2", name: "Ahab", role: "King of Israel", personId: "ahab" },
      { id: "jezebel-2", name: "Jezebel", role: "Queen consort", personId: "jezebel", spouses: ["ahab-2"] },
      { id: "athaliah-2", name: "Athaliah", role: "Married to Jehoram of Judah", parents: ["ahab-2", "jezebel-2"] },
      { id: "jehoram-judah", name: "Jehoram of Judah", role: "King of Judah; imports Baal worship through this marriage" },
      { id: "ahaziah-judah", name: "Ahaziah of Judah", role: "King of Judah, killed alongside Jehoram of Israel by Jehu", parents: ["jehoram-judah", "athaliah-2"] },
      { id: "joash-judah", name: "Joash (Jehoash)", role: "Hidden from Athaliah's massacre; later restored as king of Judah", parents: ["ahaziah-judah"] },
    ],
  },
  {
    id: "prophetic-succession",
    title: "Prophetic Succession",
    description:
      "Elijah personally commissions only Elisha as his direct successor; Hazael and Jehu are named in the same Horeb commission but are anointed only later, through Elisha's ministry — showing that God's purposes extend beyond any one prophet's lifetime or personal reach.",
    members: [
      { id: "elijah-p", name: "Elijah", role: "Receives the threefold Horeb commission (1 Kings 19:15-16)", personId: "elijah" },
      { id: "elisha-p", name: "Elisha", role: "Personally called and anointed by Elijah; direct prophetic successor", personId: "elisha", parents: ["elijah-p"] },
      { id: "hazael-p", name: "Hazael", role: "Named in Elijah's commission; anointed king of Aram only later, through Elisha", personId: "hazael", parents: ["elijah-p"], note: "Anointing carried out through Elisha (2 Kings 8:7-15), not Elijah personally." },
      { id: "jehu-p", name: "Jehu", role: "Named in Elijah's commission; anointed king of Israel only later, through Elisha", personId: "jehu", parents: ["elijah-p"], note: "Anointed by a young prophet sent by Elisha (2 Kings 9:1-10), not Elijah personally." },
    ],
  },
];

export function getFamilyTreeById(id: string): FamilyTree | undefined {
  return familyTrees.find((t) => t.id === id);
}
