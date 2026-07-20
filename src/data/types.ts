/**
 * Shared content types for The Prophet Elijah study app.
 *
 * `certainty` is used throughout to keep the accuracy requirements explicit:
 * every claim in the app should be traceable to one of these categories
 * rather than presented as flat, undifferentiated fact.
 */
export type Certainty =
  | "biblical" // an explicit statement of the biblical text
  | "historical-background" // uncontroversial ANE historical/cultural background
  | "scholarly-consensus" // a widely held scholarly reconstruction (e.g. Thiele chronology)
  | "theological-tradition" // a longstanding Christian theological reading
  | "speculative"; // a plausible but unproven inference, always flagged as such

export type Kingdom = "United Kingdom" | "Israel" | "Judah" | "N/A";
export type Evaluation = "good" | "evil" | "mixed";
export type Testament = "OT" | "NT";

export interface ScriptureUsage {
  /** Reference string, e.g. "1 Kings 18:20-40" */
  ref: string;
  /** Where this reference is used in the app, for the Scripture Index back-links */
  context: string;
  /** Route to link back to */
  href: string;
}

export interface MapCoordinates {
  /** Percentage position (0-100) on the stylized map SVG/viewBox */
  x: number;
  y: number;
}

export interface Location {
  id: string;
  name: string;
  alternateNames?: string[];
  coordinates: MapCoordinates;
  region: "Northern Kingdom" | "Southern Kingdom" | "Phoenicia" | "Aram" | "Transjordan" | "Coastal Plain";
  description: string;
  importance: string;
  scriptureRefs: string[];
  journeys: JourneyId[];
  relatedPeople?: string[];
  certainty: Certainty;
}

export type JourneyId =
  | "joshua-conquest"
  | "divided-kingdom"
  | "elijah"
  | "elisha";

export interface JourneyStep {
  locationId: string;
  order: number;
  note: string;
  scriptureRefs: string[];
}

export interface Journey {
  id: JourneyId;
  title: string;
  description: string;
  color: string;
  steps: JourneyStep[];
}

export interface FamilyRelation {
  relation: string;
  personId?: string;
  name?: string;
}

export interface TimelineNote {
  dateBC?: string;
  event: string;
}

export interface Person {
  id: string;
  name: string;
  title?: string;
  kingdom?: Kingdom;
  era: string;
  approxDates?: string;
  role: string;
  bio: string[];
  timeline: TimelineNote[];
  family: FamilyRelation[];
  keyScriptures: string[];
  themeIds: string[];
  locationIds: string[];
  relationships: { personId: string; description: string }[];
  certaintyNote?: string;
}

export interface King {
  id: string;
  name: string;
  kingdom: "United Kingdom" | "Israel" | "Judah";
  father?: string;
  mother?: string;
  yearsReigned: string;
  datesBC: string;
  capital: string;
  evaluation: Evaluation;
  mainEvents: string;
  prophets: string[];
  references: string[];
  personId?: string;
}

export interface TimelineEvent {
  id: string;
  label: string;
  dateBC?: string;
  era:
    | "Conquest"
    | "Judges"
    | "United Kingdom"
    | "Divided Kingdom"
    | "Elijah's Ministry"
    | "Later Kingdom"
    | "New Testament";
  kingdom?: Kingdom;
  description: string;
  scriptureRefs: string[];
  certainty: Certainty;
  personIds?: string[];
  locationIds?: string[];
}

export interface ThemePassage {
  ref: string;
  note: string;
}

export interface Theme {
  id: string;
  name: string;
  summary: string;
  explanation: string[];
  passages: ThemePassage[];
  relatedThemeIds: string[];
  relatedPersonIds: string[];
  weekRefs: number[];
}

export interface FamilyTreePerson {
  id: string;
  name: string;
  role?: string;
  personId?: string;
  parents?: string[];
  spouses?: string[];
  children?: string[];
  note?: string;
}

export interface FamilyTree {
  id: string;
  title: string;
  description: string;
  members: FamilyTreePerson[];
}
