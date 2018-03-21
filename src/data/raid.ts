import { ILevel } from "./level";

export interface IRaid {
  name: string;
  abbreviations: string[];
  region: string;
  level: ILevel;
  bossEncounters?: number;
  tiers: number;
  groups: string[];
  availability: string[];
  prerequisites?: string;
  challenge: string;
  cluster: string;
  note?: string;
  bosses: string[];
}

export const raids: IRaid[] = [
  {
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
    bosses: ["Grisgart", "Praunk-Goj", "Rémgoj", "Burzdyr", "Burzgost"]
  },
  {
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
    bosses: ["Adhargal", "Ansach", "Breosal", "Grisgart", "Zaudru"]
  },
  {
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
    bosses: ["Storvâgûn"]
  },
  {
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
    bosses: ["Coldbear", "Drugoth the Death-monger", "Thorog"]
  },
  {
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
      "Barz",
      "Zurm",
      "Frûz",
      "Zogtark",
      "Narnûlubat",
      "Shadow-eater",
      "Thrâng",
      "Thaurlach"
    ]
  },
  {
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
    bosses: ["Bogbereth"]
  },
  {
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
    bosses: ["Ferndúr"]
  },
  {
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
    bosses: ["The Watcher in the Water"]
  },
  {
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
    bosses: ["Nornúan"]
  },
  {
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
      "Blagh",
      "Rung",
      "Zholuga",
      "Flâgît",
      "Îstum",
      "The Blind One",
      "The Mistress of Pestilence"
    ]
  },
  {
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
    bosses: ["Dúrchest", "Cargaraf", "Morgaraf", "Lieutenant of Dol Guldur"]
  },
  {
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
      "Dúrchest",
      "Dungarth",
      "Vark",
      "Kaveran",
      "Durin's Bane",
      "Frothmar",
      "Baleleaf",
      "Dourbark",
      "Ivar",
      "Matumáth",
      "Matúrz-olog",
      "Narslaug",
      "Dúngorth",
      "Gortheron"
    ]
  },
  {
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
    bosses: ["Draigoch"]
  },
  {
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
    bosses: ["Crisiant", "Usgarren", "Kâlbak", "Iorweth", "Bukot", "Saruman"]
  },
  {
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
      "Gothmog",
      "Rakothas",
      "Set-Akaji",
      "Arpong-Dokh",
      "Ku-Nerpag",
      "Vadokhar",
      "The Unbroken One",
      "The Woe of Khand",
      "The High Sorcerer of Harad",
      "Gothmog"
    ]
  }
];
