import { ILevelRange } from "./level-range";
import { IBoss } from "./boss";

export interface IRaid {
  id: number;
  name: string;
  abbreviations: string[];
  region: string;
  level: ILevelRange;
  bossEncounters?: number;
  tiers: number;
  groups: string[];
  availability: string[];
  prerequisites?: string;
  challenge: string;
  cluster: string;
  note?: string;
  bosses: IBoss[];
}

export const raids: IRaid[] = [
  {
    id: 1,
    name: "Helegrod: Drake Wing",
    abbreviations: ["Drake-wing"],
    region: "The Misty Mountains",
    level: { minimum: 50, maximum: 115 },
    bossEncounters: 1,
    tiers: 1,
    groups: ["Raid"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note:
      "In this wing of Helegrod, Drakes and Drakelings have built their nests.",
    bosses: [
      { id: 1, name: "Grisgart" },
      { id: 2, name: "Praunk-Goj" },
      { id: 3, name: "Rémgoj" },
      { id: 4, name: "Burzdyr" },
      { id: 5, name: "Burzgost" }
    ]
  },
  {
    id: 2,
    name: "Helegrod: Spider Wing",
    abbreviations: ["Spider-wing"],
    region: "The Misty Mountains",
    level: { minimum: 50, maximum: 115 },
    bossEncounters: 1,
    tiers: 1,
    groups: ["Raid"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "In this wing of Helegrod, giant spiders are gathering.",
    bosses: [
      { id: 6, name: "Adhargal" },
      { id: 7, name: "Ansach" },
      { id: 8, name: "Breosal" },
      { id: 9, name: "Grisgart" },
      { id: 10, name: "Zaudru" }
    ]
  },
  {
    id: 3,
    name: "Helegrod: Giant Wing",
    abbreviations: ["Giant-wing"],
    region: "The Misty Mountains",
    level: { minimum: 50, maximum: 115 },
    bossEncounters: 1,
    tiers: 1,
    groups: ["Raid"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note:
      "In this wing of Helegrod, Stone-giants swear fealty to the Thunder-lord.",
    bosses: [{ id: 11, name: "Storvâgûn" }]
  },
  {
    id: 4,
    name: "Helegrod: Dragon Wing",
    abbreviations: ["Thorog"],
    region: "The Misty Mountains",
    level: { minimum: 50, maximum: 115 },
    bossEncounters: 1,
    tiers: 1,
    groups: ["Raid"],
    availability: ["VIP", "QuestPack"],
    prerequisites: "Defeat Zaudru, Storvâgûn, and Grisgart",
    challenge: "None",
    cluster: "Shadows of Angmar",
    note:
      "At the central courtyard of Helegrod, a fell ritual is taking place...",
    bosses: [
      { id: 12, name: "Coldbear" },
      { id: 13, name: "Drugoth the Death-monger" },
      { id: 14, name: "Thorog" }
    ]
  },
  {
    id: 5,
    name: "The Rift of Nûrz Ghâshu",
    abbreviations: ["Rift"],
    region: "Angmar",
    level: { minimum: 50 },
    bossEncounters: 8,
    tiers: 1,
    groups: ["Raid"],
    availability: ["VIP", "QuestPack"],
    challenge: "None",
    cluster: "Shadows of Angmar",
    note:
      "In the far east of Angmar, an ancient evil of the First Age has been uncovered...",
    bosses: [
      { id: 15, name: "Barz" },
      { id: 16, name: "Zurm" },
      { id: 17, name: "Frûz" },
      { id: 18, name: "Zogtark" },
      { id: 19, name: "Narnûlubat" },
      { id: 20, name: "Shadow-eater" },
      { id: 21, name: "Thrâng" },
      { id: 22, name: "Thaurlach" }
    ]
  },
  {
    id: 6,
    name: "Bogbereth",
    abbreviations: ["Bogbereth"],
    region: "Angmar",
    level: { minimum: 50 },
    bossEncounters: 1,
    tiers: 1,
    groups: ["Raid"],
    availability: ["Free"],
    prerequisites: "Landscape raid",
    challenge: "None",
    cluster: "Shadows of Angmar",
    note: "Beneath Himbar, the spider queen Bogbereth gains power.",
    bosses: [{ id: 23, name: "Bogbereth" }]
  },
  {
    id: 7,
    name: "Ferndúr the Virulent",
    abbreviations: ["Ferndur"],
    region: "Angmar",
    level: { minimum: 50 },
    bossEncounters: 1,
    tiers: 1,
    groups: ["Raid"],
    availability: ["Free"],
    prerequisites: "Landscape Raid",
    challenge: "None",
    cluster: "Shadows of Angmar",
    note:
      "In Imlad Balchorth, the Gaunt-lord Ferndúr raises the Dead for his dark plans.",
    bosses: [{ id: 24, name: "Ferndúr" }]
  },
  {
    id: 8,
    name: "The Vile Maw",
    abbreviations: ["VM/Watcher"],
    region: "The Water-works",
    level: { minimum: 60 },
    bossEncounters: 1,
    tiers: 1,
    groups: ["Raid"],
    availability: ["Expansion", "QuestPack"],
    challenge: "None",
    cluster: "Mines of Moria",
    note: "In the deepest waters of Moria, an ancient terror looms...",
    bosses: [{ id: 25, name: "The Watcher in the Water" }]
  },
  {
    id: 9,
    name: "Filikul",
    abbreviations: ["Turtle"],
    region: "The Water-works",
    level: { minimum: 60 },
    bossEncounters: 1,
    tiers: 1,
    groups: ["Raid"],
    availability: ["Expansion", "QuestPack"],
    challenge: "None",
    cluster: "Mines of Moria",
    note:
      "Nornúan, a beast of enormous size, has been discovered in the Water-works.",
    bosses: [{ id: 26, name: "Nornúan" }]
  },
  {
    id: 10,
    name: "Dâr Narbugud",
    abbreviations: ["DN"],
    region: "Foundations of Stone",
    level: { minimum: 60 },
    bossEncounters: 6,
    tiers: 1,
    groups: ["Raid"],
    availability: ["VIP", "QuestPack"],
    challenge: "None",
    cluster: "Scourge of Khazad-dûm",
    note:
      "Beneath the foundations of Moria, nameless creatures stir as an unspeakable plague threatens to spread througout the Mines.",
    bosses: [
      { id: 27, name: "Blagh" },
      { id: 28, name: "Rung" },
      { id: 29, name: "Zholuga" },
      { id: 30, name: "Flâgît" },
      { id: 31, name: "Îstum" },
      { id: 32, name: "The Blind One" },
      { id: 33, name: "The Mistress of Pestilence" }
    ]
  },
  {
    id: 11,
    name: "Barad Guldur",
    abbreviations: ["BG"],
    region: "Dol Guldur",
    level: { minimum: 65, maximum: 115 },
    bossEncounters: 3,
    tiers: 2,
    groups: ["Raid"],
    availability: ["QuestPack"],
    challenge: "Daily",
    cluster: "Tower of Dol Guldur",
    note: "The tower of the Lieutenant of Dol Guldur is under attack!",
    bosses: [
      { id: 34, name: "Dúrchest" },
      { id: 35, name: "Cargaraf" },
      { id: 36, name: "Morgaraf" },
      { id: 37, name: "Lieutenant of Dol Guldur" }
    ]
  },
  {
    id: 12,
    name: "Ost Dunhoth",
    abbreviations: ["OD"],
    region: "Enedwaith",
    level: { minimum: 65, maximum: 115 },
    bossEncounters: 6,
    tiers: 2,
    groups: ["Raid"],
    availability: ["VIP", "QuestPack"],
    prerequisites: "Discover",
    challenge: "Daily",
    cluster: "In Their Absence",
    note:
      "In the hills of Enedwaith, the Gaunt-lord Gortheron rallies his forces in secret.",
    bosses: [
      { id: 38, name: "Dúrchest" },
      { id: 39, name: "Dungarth" },
      { id: 40, name: "Vark" },
      { id: 41, name: "Kaveran" },
      { id: 42, name: "Durin's Bane" },
      { id: 43, name: "Frothmar" },
      { id: 44, name: "Baleleaf" },
      { id: 45, name: "Dourbark" },
      { id: 46, name: "Ivar" },
      { id: 47, name: "Matumáth" },
      { id: 48, name: "Matúrz-olog" },
      { id: 49, name: "Narslaug" },
      { id: 50, name: "Dúngorth" },
      { id: 51, name: "Gortheron" }
    ]
  },
  {
    id: 13,
    name: "Draigoch's Lair",
    abbreviations: ["Draigoch"],
    region: "Enedwaith",
    level: { minimum: 75 },
    bossEncounters: 1,
    tiers: 1,
    groups: ["Raid"],
    availability: ["Expansion", "Buy"],
    prerequisites: "Discover",
    challenge: "Daily",
    cluster: "Rise of Isengard",
    note:
      "In a cave west of the Misty Mountains, one of the last great Dragons slumbers.",
    bosses: [{ id: 52, name: "Draigoch" }]
  },
  {
    id: 14,
    name: "Tower of Orthanc",
    abbreviations: ["ToO"],
    region: "Isengard",
    level: { minimum: 75 },
    bossEncounters: 5,
    tiers: 2,
    groups: ["Raid"],
    availability: ["Expansion", "Buy"],
    prerequisites: "Discover",
    challenge: "Daily",
    cluster: "Rise of Isengard",
    note:
      "Saruman holds command over Isengard and has forged his very own Rings of Power.",
    bosses: [
      { id: 53, name: "Crisiant" },
      { id: 54, name: "Usgarren" },
      { id: 55, name: "Kâlbak" },
      { id: 56, name: "Iorweth" },
      { id: 57, name: "Bukot" },
      { id: 58, name: "Saruman" }
    ]
  },
  {
    id: 15,
    name: "Flight to the Lonely Mountain",
    abbreviations: ["Flight"],
    region: "Erebor",
    level: { minimum: 20, maximum: 115 },
    bossEncounters: 1,
    tiers: 2,
    groups: ["Raid"],
    availability: ["Expansion", "Buy"],
    challenge: "Daily",
    cluster: "The Road to Erebor",
    note:
      "The army of Rhûn has conquered Dale and pursues its inhabitants towards Erebor.",
    bosses: []
  },
  {
    id: 16,
    name: "The Fires of Smaug",
    abbreviations: ["Smaug"],
    region: "Erebor",
    level: { minimum: 20, maximum: 115 },
    bossEncounters: 1,
    tiers: 2,
    groups: ["Raid"],
    availability: ["Expansion", "Buy"],
    challenge: "Daily",
    cluster: "The Road to Erebor",
    note:
      "As the Easterlings lay siege to Erebor, the dwarves struggle to defend their home.",
    bosses: []
  },
  {
    id: 17,
    name: "The Battle for Erebor",
    abbreviations: ["BfE"],
    region: "Erebor",
    level: { minimum: 20, maximum: 115 },
    bossEncounters: 1,
    tiers: 2,
    groups: ["Raid"],
    availability: ["Expansion", "Buy"],
    challenge: "Daily",
    cluster: "The Road to Erebor",
    note:
      "The final assault on Erebor is at hand and the commanders of the besieging army step forward to fight.",
    bosses: []
  },
  {
    id: 18,
    name: "The Deeping Wall",
    abbreviations: ["Wall", "DW"],
    region: "West Rohan",
    level: { minimum: 10, maximum: 100 },
    bossEncounters: 1,
    tiers: 1,
    groups: ["Solo/Duo", "Raid"],
    availability: ["Expansion"],
    prerequisites: "Epic Battles",
    challenge: "None",
    cluster: "Helm's Deep",
    note:
      "The host of Isengard besieges Helm's Deep, the strongest fortress of Rohan.",
    bosses: []
  },
  {
    id: 19,
    name: "Throne of the Dread Terror",
    abbreviations: ["Throne"],
    region: "Old Anórien",
    level: { minimum: 115 },
    bossEncounters: 6,
    tiers: 2,
    groups: ["Raid"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Battle of Pelennor",
    note:
      "As the Battle of Pelennor Fields rages, a new commander arises after the fall of the Witch-king.",
    bosses: [
      { id: 59, name: "Gothmog" },
      { id: 60, name: "Rakothas" },
      { id: 61, name: "Set-Akaji" },
      { id: 62, name: "Arpong-Dokh" },
      { id: 63, name: "Ku-Nerpag" },
      { id: 64, name: "Vadokhar" },
      { id: 65, name: "The Unbroken One" },
      { id: 66, name: "The Woe of Khand" },
      { id: 67, name: "The High Sorcerer of Harad" },
      { id: 68, name: "Gothmog" }
    ]
  }
];

export const clusters = [
  "Battle of Pelennor",
  "Helm's Deep",
  "In Their Absence",
  "Mines of Moria",
  "Rise of Isengard",
  "Scourge of Khazad-dûm",
  "Shadows of Angmar",
  "The Road to Erebor",
  "Tower of Dol Guldur"
];

export const regions = [
  "Angmar",
  "Dol Guldur",
  "Enedwaith",
  "Erebor",
  "Foundations of Stone",
  "Isengard",
  "Old Anórien",
  "The Misty Mountains",
  "The Water-works",
  "West Rohan"
];
