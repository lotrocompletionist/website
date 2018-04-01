import { ILevelRange } from "./level-range";
import { IBoss } from "./boss";

export interface IWorldInstance {
  id: number;
  name: string;
  abbreviations: string[];
  region: string;
  level: ILevelRange;
  tiers: number;
  groups: string[];
  availability: string[];
  prerequisites?: string;
  challenge: string;
  cluster: string;
  note?: string;
  bosses: IBoss[];
}

export const worldInstances: IWorldInstance[] = [
  {
    id: 1,
    name: "Great Barrow: The Maze",
    abbreviations: ["Maze"],
    region: "Bree-land",
    level: { minimum: 20, maximum: 115 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["Free"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "Located in Southern Barrow-downs, see also the Great Barrow",
    bosses: [
      { id: 1, name: "Barrow-wight Caller" },
      { id: 2, name: "Gaerdring" },
      { id: 3, name: "Gaerthel" }
    ]
  },
  {
    id: 2,
    name: "Great Barrow: Thadúr",
    abbreviations: ["Thadur"],
    region: "Bree-land",
    level: { minimum: 20, maximum: 115 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["Free"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "Located in Southern Barrow-downs, see also the Great Barrow",
    bosses: [{ id: 4, name: "Thadúr" }]
  },
  {
    id: 3,
    name: "Great Barrow: Sambrog",
    abbreviations: ["Sammy"],
    region: "Bree-land",
    level: { minimum: 20, maximum: 115 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["Free"],
    prerequisites: "Maze and Thadúr",
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "Located in Southern Barrow-downs, see also the Great Barrow",
    bosses: [{ id: 5, name: "Sambrog" }]
  },
  {
    id: 4,
    name: "Inn of the Forsaken",
    abbreviations: ["IoF", "IotF"],
    region: "The Lone-lands",
    level: { minimum: 20, maximum: 115 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["VIP", "Buy"],
    prerequisites: "Discover[3]",
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "Located inside the Forsaken Inn, in the basement",
    bosses: [{ id: 6, name: "Umín" }, { id: 7, name: "Spirit of the Necklace" }]
  },
  {
    id: 5,
    name: "Garth Agarwen: Arboretum",
    abbreviations: ["GA"],
    region: "The Lone-lands",
    level: { minimum: 32 },
    tiers: 1,
    groups: ["Small Fellowship"],
    availability: ["Free"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "In Garth Agarwen",
    bosses: [{ id: 8, name: "Grimbark" }, { id: 9, name: "Rot-heart" }]
  },
  {
    id: 6,
    name: "Garth Agarwen: Barrows",
    abbreviations: ["GA"],
    region: "The Lone-lands",
    level: { minimum: 32 },
    tiers: 1,
    groups: ["Small Fellowship"],
    availability: ["Free"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "In Garth Agarwen",
    bosses: [{ id: 10, name: "Ivar" }, { id: 11, name: "Blogkritar" }]
  },
  {
    id: 7,
    name: "Garth Agarwen: Fortress",
    abbreviations: ["GA"],
    region: "The Lone-lands",
    level: { minimum: 32 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["Free"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "In Garth Agarwen",
    bosses: [
      { id: 12, name: "Dúnlang" },
      { id: 13, name: "Edan" },
      { id: 14, name: "Esyld" },
      { id: 15, name: "Raugzdrok" },
      { id: 16, name: "Vatar" },
      { id: 17, name: "Naruhel" }
    ]
  },
  {
    id: 8,
    name: "Goblin-town Throne Room",
    abbreviations: ["n/a"],
    region: "The Misty Mountains",
    level: { minimum: 45 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "None",
    cluster: "Shadows of Angmar",
    note: "The heart of Goblin-town",
    bosses: [
      { id: 18, name: "Ashûrz" },
      { id: 19, name: "Bhoghad" },
      { id: 20, name: "Horm" }
    ]
  },
  {
    id: 9,
    name: "Fornost: Wraith of Water",
    abbreviations: ["Water"],
    region: "The North Downs",
    level: { minimum: 25, maximum: 115 },
    tiers: 2,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "See also Fornost",
    bosses: [
      { id: 21, name: "Zhurmat" },
      { id: 22, name: "Shiruk" },
      { id: 23, name: "Kamordî" },
      { id: 24, name: "Megoriath" }
    ]
  },
  {
    id: 10,
    name: "Fornost: Wraith of Earth",
    abbreviations: ["Earth"],
    region: "The North Downs",
    level: { minimum: 25, maximum: 115 },
    tiers: 2,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    prerequisites: "Water",
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "See also Fornost",
    bosses: [
      { id: 25, name: "Warchief Búrzghâsh" },
      { id: 26, name: "Gurkâmâb" },
      { id: 27, name: "Rhavameldir" }
    ]
  },
  {
    id: 11,
    name: "Fornost: Wraith of Fire",
    abbreviations: ["Fire"],
    region: "The North Downs",
    level: { minimum: 25, maximum: 115 },
    tiers: 2,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    prerequisites: "Earth",
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "See also Fornost",
    bosses: [
      { id: 28, name: "Riamul" },
      { id: 29, name: "Zanthrug" },
      { id: 30, name: "Brogadan" }
    ]
  },
  {
    id: 12,
    name: "Fornost: Wraith of Shadow",
    abbreviations: ["Shadow"],
    region: "The North Downs",
    level: { minimum: 25, maximum: 115 },
    tiers: 2,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    prerequisites: "Fire",
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "See also Fornost",
    bosses: [
      { id: 31, name: "Krithmog" },
      { id: 32, name: "Einiora" },
      { id: 33, name: "Remmenaeg" }
    ]
  },
  {
    id: 13,
    name: "The Halls of Night",
    abbreviations: ["HoN"],
    region: "Angmar",
    level: { minimum: 40, maximum: 115 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["VIP", "Buy"],
    prerequisites: "Discover[3]",
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "East of Aughaire",
    bosses: [
      { id: 34, name: "Nightmare" },
      { id: 35, name: "Panic" },
      { id: 36, name: "Terror" }
    ]
  },
  {
    id: 14,
    name: "Glinghant",
    abbreviations: ["Gling", "Gardens"],
    region: "Evendim",
    level: { minimum: 40, maximum: 115 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "The former gardens of Annúminas, now corrupted by evil",
    bosses: [{ id: 37, name: "Nengon" }]
  },
  {
    id: 15,
    name: "Ost Elendil",
    abbreviations: ["OE"],
    region: "Evendim",
    level: { minimum: 40, maximum: 115 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "The throne room and outlying chambers of Annúminas",
    bosses: [{ id: 38, name: "Guloth" }, { id: 39, name: "Balhest" }]
  },
  {
    id: 16,
    name: "Haudh Valandil",
    abbreviations: ["HV"],
    region: "Evendim",
    level: { minimum: 40, maximum: 115 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "The tomb of Valandil, third King of Arnor",
    bosses: [
      { id: 40, name: "Shingrinder" },
      { id: 41, name: "Dolvaethor" },
      { id: 42, name: "Valandil of Arnor" }
    ]
  },
  {
    id: 17,
    name: "Urugarth",
    abbreviations: ["Uru"],
    region: "Angmar",
    level: { minimum: 50 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "None",
    cluster: "Shadows of Angmar",
    note: "South-east of Carn Dûm in NE Angmar",
    bosses: [
      { id: 43, name: "Sorkrank" },
      { id: 44, name: "Burzfîl" },
      { id: 45, name: "Dushkâl" },
      { id: 46, name: "Akrûr" },
      { id: 47, name: "Dafrim" },
      { id: 48, name: "Kughûrz" },
      { id: 49, name: "Gríshakrum" },
      { id: 50, name: "Lâmkarn" },
      { id: 51, name: "Athpukh" },
      { id: 52, name: "Lhugrien" },
      { id: 53, name: "Brízrip" },
      { id: 54, name: "Thordragh" },
      { id: 55, name: "Morthrâng" },
      { id: 56, name: "Gruglok" },
      { id: 57, name: "Lagmâs" }
    ]
  },
  {
    id: 18,
    name: "Carn Dûm[4]",
    abbreviations: ["CD"],
    region: "Angmar",
    level: { minimum: 50 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "None",
    cluster: "Shadows of Angmar",
    note: "North-eastern Angmar",
    bosses: [
      { id: 58, name: "Urro" },
      { id: 59, name: "Barashal" },
      { id: 60, name: "Helchgam" },
      { id: 61, name: "Sálvakh" },
      { id: 62, name: "Azgoth" },
      { id: 63, name: "Avalgaith" },
      { id: 64, name: "Tárlakh" },
      { id: 65, name: "Târlug" },
      { id: 66, name: "Mormoz" },
      { id: 67, name: "Rodakhan" },
      { id: 68, name: "Múra" },
      { id: 69, name: "Gúrthul" },
      { id: 70, name: "Mordirith" }
    ]
  },
  {
    id: 19,
    name: "Barad Gúlaran",
    abbreviations: ["BG"],
    region: "Angmar",
    level: { minimum: 50 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "None",
    cluster: "Shadows of Angmar",
    note: "The fortress of the Witch-king, in north-eastern Angmar",
    bosses: [
      { id: 71, name: "Forvengwath" },
      { id: 72, name: "Afraig" },
      { id: 73, name: "Coblaith" },
      { id: 74, name: "Castellan Wisdán" },
      { id: 75, name: "Múlvuirë" },
      { id: 76, name: "Udúnion" }
    ]
  },
  {
    id: 20,
    name: "The Library at Tham Mírdain",
    abbreviations: ["Lib"],
    region: "Eregion",
    level: { minimum: 50, maximum: 115 },
    tiers: 1,
    groups: ["Small Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "An ancient library near the ring-forges of Mirobel",
    bosses: [
      { id: 77, name: "Commander Piztor" },
      { id: 78, name: "Commander Unudhu" },
      { id: 79, name: "Chieftain Gûrsh" }
    ]
  },
  {
    id: 21,
    name: "The School at Tham Mírdain",
    abbreviations: ["School", "Sch"],
    region: "Eregion",
    level: { minimum: 50, maximum: 115 },
    tiers: 1,
    groups: ["Small Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Shadows of Angmar",
    note: "An ancient school near the ring-forges of Mirobel",
    bosses: [
      { id: 80, name: "Llygad the Blade" },
      { id: 81, name: "Chief Warrior Thurgtârk" },
      { id: 82, name: "Commander Târsh" }
    ]
  },
  {
    id: 22,
    name: "The Dark Delving",
    abbreviations: ["DD"],
    region: "The Foundations of Stone",
    level: { minimum: 58 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["Expansion", "QuestPack"],
    challenge: "Daily",
    cluster: "Mines of Moria",
    bosses: [
      { id: 83, name: "Void-eater" },
      { id: 84, name: "Doom-speaker" },
      { id: 85, name: "Gurvand" }
    ]
  },
  {
    id: 23,
    name: "The Forgotten Treasury",
    abbreviations: ["FT"],
    region: "The Silvertine Lodes",
    level: { minimum: 54 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["Expansion", "QuestPack"],
    challenge: "None",
    cluster: "Mines of Moria",
    note: "A treasure-vault infiltrated by Uruks from Dol Guldur",
    bosses: [
      { id: 86, name: "Darûkûrz" },
      { id: 87, name: "Frûzgûl" },
      { id: 88, name: "Lorzgûl" },
      { id: 89, name: "Mokza" },
      { id: 90, name: "Nardurgûl" },
      { id: 91, name: "Narghug" },
      { id: 92, name: "Morhûn" },
      { id: 93, name: "Skûm" },
      { id: 94, name: "Urauth" }
    ]
  },
  {
    id: 24,
    name: "The Grand Stair",
    abbreviations: ["GS"],
    region: "The Redhorn Lodes",
    level: { minimum: 56 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["Expansion", "QuestPack"],
    challenge: "Daily",
    cluster: "Mines of Moria",
    bosses: [
      { id: 95, name: "Ilzkâl the Pummeler" },
      { id: 96, name: "Gothghaash the Firecaller" },
      { id: 97, name: "Dorozg the Beast Tamer" },
      { id: 98, name: "The Beast" },
      { id: 99, name: "Glothrok the Vile" },
      { id: 100, name: "Nardur the Shield" },
      { id: 101, name: "Igash the Fanatic" }
    ]
  },
  {
    id: 25,
    name: "Forges of Khazad-dûm",
    abbreviations: ["Forges"],
    region: "The Flaming Deeps",
    level: { minimum: 58 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["Expansion", "QuestPack"],
    challenge: "Daily",
    cluster: "Mines of Moria",
    bosses: [
      { id: 102, name: "Narkû" },
      { id: 103, name: "Dhaub" },
      { id: 104, name: "Thrug" },
      { id: 105, name: "Kranklûk" }
    ]
  },
  {
    id: 26,
    name: "Fil Gashan",
    abbreviations: ["FG"],
    region: "The Flaming Deeps",
    level: { minimum: 58 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["Expansion", "QuestPack"],
    challenge: "Daily",
    cluster: "Mines of Moria",
    bosses: [
      { id: 106, name: "Vrarz" },
      { id: 107, name: "Greb" },
      { id: 108, name: "Talug" }
    ]
  },
  {
    id: 27,
    name: "The Sixteenth Hall",
    abbreviations: ["16th"],
    region: "Nud-melek",
    level: { minimum: 58 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["Expansion", "QuestPack"],
    challenge: "Daily",
    cluster: "Mines of Moria",
    bosses: [
      { id: 109, name: "Tramug" },
      { id: 110, name: "Dhûrz" },
      { id: 111, name: "The Lost One" }
    ]
  },
  {
    id: 28,
    name: "Skûmfil",
    abbreviations: ["Skum"],
    region: "The Foundations of Stone",
    level: { minimum: 58 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["Expansion", "QuestPack"],
    challenge: "Daily",
    cluster: "Mines of Moria",
    bosses: [
      { id: 112, name: "Bonetooth" },
      { id: 113, name: "Rockjaw" },
      { id: 114, name: "Shalebiter" },
      { id: 115, name: "Old Gnawer" },
      { id: 116, name: "Cracktooth" },
      { id: 117, name: "Brúmbereth" },
      { id: 118, name: "Uammaethor" },
      { id: 119, name: "Grog" },
      { id: 120, name: "Grothulun" },
      { id: 121, name: "Nestaduan" },
      { id: 122, name: "Ulugon" },
      { id: 123, name: "Longpincer" },
      { id: 124, name: "Grimreaver" },
      { id: 125, name: "Hwandrin" }
    ]
  },
  {
    id: 29,
    name: "The Mirror-halls of Lumul-nar",
    abbreviations: ["HoM"],
    region: "Zirakzigil",
    level: { minimum: 58 },
    tiers: 1,
    groups: ["Small Fellowship"],
    availability: ["QuestPack"],
    challenge: "Daily",
    cluster: "Scourge of Khazad-dûm",
    bosses: [{ id: 126, name: "Frost-tail" }, { id: 127, name: "Ergoth" }]
  },
  {
    id: 30,
    name: "The Water Wheels: Nalâ-dûm",
    abbreviations: ["WW"],
    region: "The Water-works",
    level: { minimum: 58 },
    tiers: 1,
    groups: ["Small Fellowship"],
    availability: ["QuestPack"],
    challenge: "Daily",
    cluster: "Scourge of Khazad-dûm",
    bosses: [{ id: 128, name: "Spit-tail" }, { id: 129, name: "Caerlûg" }]
  },
  {
    id: 31,
    name: "Halls of Crafting",
    abbreviations: ["HoC"],
    region: "The Flaming Deeps",
    level: { minimum: 58 },
    tiers: 1,
    groups: ["Fellowship"],
    availability: ["QuestPack"],
    challenge: "Daily",
    cluster: "Scourge of Khazad-dûm",
    bosses: [
      { id: 130, name: "Âmbal" },
      { id: 131, name: "Bashkuga" },
      { id: 132, name: "Thaguzg" }
    ]
  },
  {
    id: 32,
    name: "Sword-hall of Dol Guldur",
    abbreviations: ["SH"],
    region: "Dol Guldur",
    level: { minimum: 65, maximum: 115 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["QuestPack"],
    challenge: "Daily",
    cluster: "Tower of Dol Guldur",
    bosses: [
      { id: 133, name: "Urcheron" },
      { id: 134, name: "Carchrien" },
      { id: 135, name: "Durkâr" }
    ]
  },
  {
    id: 33,
    name: "Dungeons of Dol Guldur",
    abbreviations: ["Dungeons"],
    region: "Dol Guldur",
    level: { minimum: 65, maximum: 115 },
    tiers: 2,
    groups: ["Fellowship"],
    availability: ["QuestPack"],
    challenge: "Daily",
    cluster: "Tower of Dol Guldur",
    bosses: [
      { id: 136, name: "Guldur Keeper" },
      { id: 137, name: "Guldur Sentinel" },
      { id: 138, name: "Palefolk Prisoner" },
      { id: 139, name: "Broken Prisoner" },
      { id: 140, name: "The Warden" }
    ]
  },
  {
    id: 34,
    name: "Warg-pens of Dol Guldur",
    abbreviations: ["WP"],
    region: "Dol Guldur",
    level: { minimum: 65, maximum: 115 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["QuestPack"],
    challenge: "Daily",
    cluster: "Tower of Dol Guldur",
    bosses: [{ id: 141, name: "Athgrat" }, { id: 142, name: "Kranklob" }]
  },
  {
    id: 35,
    name: "Sammath Gûl",
    abbreviations: ["SG"],
    region: "Dol Guldur",
    level: { minimum: 65, maximum: 115 },
    tiers: 2,
    groups: ["Fellowship"],
    availability: ["QuestPack"],
    challenge: "Daily",
    cluster: "Tower of Dol Guldur",
    bosses: [
      { id: 143, name: "Urchír" },
      { id: 144, name: "Alagossír" },
      { id: 145, name: "Gorothúl" },
      { id: 146, name: "Demafaer" }
    ]
  },
  {
    id: 36,
    name: "Lost Temple",
    abbreviations: ["LT"],
    region: "The Trollshaws",
    level: { minimum: 65, maximum: 115 },
    tiers: 2,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    prerequisites: "Discover[3]",
    challenge: "Daily",
    cluster: "In Their Absence",
    bosses: [
      { id: 147, name: "Angaidh" },
      { id: 148, name: "Sidhág" },
      { id: 149, name: "Vernon Thistlethorn" },
      { id: 150, name: "Múl Dúin" },
      { id: 151, name: "Frûmolog" },
      { id: 152, name: "Ferndúr the Virulent" }
    ]
  },
  {
    id: 37,
    name: "Sâri-surma",
    abbreviations: ["SS"],
    region: "Forochel",
    level: { minimum: 65, maximum: 115 },
    tiers: 2,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    prerequisites: "Discover[3]",
    challenge: "Daily",
    cluster: "In Their Absence",
    bosses: [
      { id: 153, name: "Coldbear the Wight" },
      { id: 154, name: "Ghost of Coldbear" },
      { id: 155, name: "Osan" },
      { id: 156, name: "Drugoth the Death-monger" }
    ]
  },
  {
    id: 38,
    name: "Northcotton Farms",
    abbreviations: ["NF", "Ncf"],
    region: "Evendim",
    level: { minimum: 65, maximum: 115 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["VIP", "QuestPack"],
    prerequisites: "Discover[3]",
    challenge: "Daily",
    cluster: "In Their Absence",
    bosses: [
      { id: 157, name: "Legbarthil" },
      { id: 158, name: "Thadúr" },
      { id: 159, name: "Úmheryn" }
    ]
  },
  {
    id: 39,
    name: "Stoneheight",
    abbreviations: ["Sth"],
    region: "The North Downs",
    level: { minimum: 65, maximum: 115 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["VIP", "QuestPack"],
    prerequisites: "Discover[3]",
    challenge: "Daily",
    cluster: "In Their Absence",
    bosses: [
      { id: 160, name: "Gundúl" },
      { id: 161, name: "Búbhosh-grat" },
      { id: 162, name: "Dale Truitt" },
      { id: 163, name: "Gundúl" },
      { id: 164, name: "Búbhosh-grat" },
      { id: 165, name: "Dale Truitt" },
      { id: 166, name: "Búbhosh-grat" }
    ]
  },
  {
    id: 40,
    name: "Dargnákh Unleashed",
    abbreviations: ["DU"],
    region: "Isengard",
    level: { minimum: 75 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["Expansion", "Buy"],
    prerequisites: "Discover[3]",
    challenge: "Biweekly",
    cluster: "Rise of Isengard",
    bosses: [{ id: 167, name: "Huva" }, { id: 168, name: "Dargnákh" }]
  },
  {
    id: 41,
    name: "Fangorn's Edge",
    abbreviations: ["FE"],
    region: "Isengard",
    level: { minimum: 75 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["Expansion", "Buy"],
    prerequisites: "Discover[3]",
    challenge: "Biweekly",
    cluster: "Rise of Isengard",
    bosses: [
      { id: 169, name: "Undúrz" },
      { id: 170, name: "Gathaz" },
      { id: 171, name: "Kabor" },
      { id: 172, name: "Zagh" }
    ]
  },
  {
    id: 42,
    name: "Pits of Isengard",
    abbreviations: ["PoI", "Pits"],
    region: "Isengard",
    level: { minimum: 75 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["Expansion", "Buy"],
    prerequisites: "Discover[3]",
    challenge: "Biweekly",
    cluster: "Rise of Isengard",
    bosses: [
      { id: 173, name: "Zabúrz" },
      { id: 174, name: "Fúshbraf" },
      { id: 175, name: "Ironarm" }
    ]
  },
  {
    id: 43,
    name: "The Foundry",
    abbreviations: ["Foundry"],
    region: "Isengard",
    level: { minimum: 75 },
    tiers: 2,
    groups: ["Fellowship"],
    availability: ["Expansion", "Buy"],
    prerequisites: "Discover[3]",
    challenge: "Biweekly",
    cluster: "Rise of Isengard",
    bosses: [
      { id: 176, name: "Dhâr" },
      { id: 177, name: "Gurbák" },
      { id: 178, name: "Ghashanuz" },
      { id: 179, name: "Penrith" },
      { id: 180, name: "The Ring-Forge of Orthanc" }
    ]
  },
  {
    id: 44,
    name: "Roots of Fangorn",
    abbreviations: ["RoF"],
    region: "Great River",
    level: { minimum: 75 },
    tiers: 2,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    prerequisites: "Discover[3]",
    challenge: "Biweekly",
    cluster: "Rise of Isengard",
    bosses: [{ id: 181, name: "Frûshkul" }, { id: 182, name: "Gurthúl" }]
  },
  {
    id: 45,
    name: "Seat of the Great Goblin",
    abbreviations: ["SGG"],
    region: "The Misty Mountains",
    level: { minimum: 20, maximum: 115 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["Expansion", "Buy"],
    challenge: "Daily",
    cluster: "The Road to Erebor",
    note: "See also Erebor Instances.",
    bosses: [
      { id: 183, name: "Uloga" },
      { id: 184, name: "Mârubhis" },
      { id: 185, name: "Brosh" }
    ]
  },
  {
    id: 46,
    name: "Iorbar's Peak",
    abbreviations: ["IP"],
    region: "The Misty Mountains",
    level: { minimum: 20, maximum: 115 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["Expansion", "Buy"],
    challenge: "Daily",
    cluster: "The Road to Erebor",
    note: "See also Erebor Instances.",
    bosses: [{ id: 186, name: "Guthfinn" }, { id: 187, name: "Helf" }]
  },
  {
    id: 47,
    name: "Webs of the Scuttledells",
    abbreviations: ["Webs"],
    region: "Mirkwood",
    level: { minimum: 20, maximum: 115 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["Expansion", "Buy"],
    challenge: "Daily",
    cluster: "The Road to Erebor",
    note: "See also Erebor Instances.",
    bosses: [{ id: 188, name: "Beremud" }, { id: 189, name: "Dígelir" }]
  },
  {
    id: 48,
    name: "The Bells of Dale",
    abbreviations: ["Bells"],
    region: "Erebor",
    level: { minimum: 20, maximum: 115 },
    tiers: 2,
    groups: ["Fellowship"],
    availability: ["Expansion", "Buy"],
    challenge: "Daily",
    cluster: "The Road to Erebor",
    note: "See also Erebor Instances.",
    bosses: [{ id: 190, name: "Graz" }]
  },
  {
    id: 49,
    name: "Helm's Dike",
    abbreviations: ["Dike"],
    region: "West Rohan",
    level: { minimum: 10, maximum: 115 },
    tiers: 0,
    groups: ["Solo/Duo", "Fellowship"],
    availability: ["Free"],
    prerequisites: "Epic Battles",
    challenge: "None",
    cluster: "Helm's Deep",
    bosses: []
  },
  {
    id: 50,
    name: "The Deeping Wall",
    abbreviations: ["Wall", "DW"],
    region: "West Rohan",
    level: { minimum: 10, maximum: 115 },
    tiers: 0,
    groups: ["Solo/Duo", "Raid"],
    availability: ["Expansion"],
    prerequisites: "Epic Battles",
    challenge: "None",
    cluster: "Helm's Deep",
    bosses: []
  },
  {
    id: 51,
    name: "The Deeping-coomb",
    abbreviations: ["Coomb", "DC"],
    region: "West Rohan",
    level: { minimum: 10, maximum: 115 },
    tiers: 0,
    groups: ["Solo/Duo"],
    availability: ["Expansion"],
    prerequisites: "Epic Battles",
    challenge: "None",
    cluster: "Helm's Deep",
    bosses: []
  },
  {
    id: 52,
    name: "The Glittering Caves",
    abbreviations: ["GC"],
    region: "West Rohan",
    level: { minimum: 10, maximum: 115 },
    tiers: 0,
    groups: ["Solo/Duo", "Small Fellowship"],
    availability: ["Expansion"],
    prerequisites: "Epic Battles",
    challenge: "None",
    cluster: "Helm's Deep",
    bosses: []
  },
  {
    id: 53,
    name: "The Hornburg",
    abbreviations: ["Hornburg"],
    region: "West Rohan",
    level: { minimum: 10, maximum: 115 },
    tiers: 0,
    groups: ["Solo/Duo"],
    availability: ["Expansion"],
    prerequisites: "Epic Battles",
    challenge: "None",
    cluster: "Helm's Deep",
    bosses: []
  },
  {
    id: 54,
    name: "Retaking Pelargir",
    abbreviations: ["Pela", "Pel", "Pelargir"],
    region: "Central Gondor",
    level: { minimum: 10, maximum: 115 },
    tiers: 0,
    groups: ["Solo/Duo", "Fellowship"],
    availability: ["Free"],
    prerequisites: "Epic Battles",
    challenge: "None",
    cluster: "War for Gondor",
    bosses: [
      { id: 191, name: "Kang-kethek" },
      { id: 192, name: "Ugturu" },
      { id: 193, name: "Kisung Teng" },
      { id: 194, name: "Thisarti" },
      { id: 195, name: "Okurayo" },
      { id: 196, name: "Zagarôth" }
    ]
  },
  {
    id: 55,
    name: "Defence of Minas Tirith",
    abbreviations: ["MT", "Defence"],
    region: "Old Anórien",
    level: { minimum: 10, maximum: 115 },
    tiers: 0,
    groups: ["Solo/Duo", "Small Fellowship"],
    availability: ["VIP", "QuestPack"],
    prerequisites: "Epic Battles",
    challenge: "None",
    cluster: "War for Gondor",
    bosses: [{ id: 197, name: "Ahârta" }, { id: 198, name: "Raghathai" }]
  },
  {
    id: 56,
    name: "Hammer of the Underworld",
    abbreviations: ["Hammer"],
    region: "Old Anórien",
    level: { minimum: 10, maximum: 115 },
    tiers: 0,
    groups: ["Solo/Duo", "Fellowship"],
    availability: ["VIP", "QuestPack"],
    prerequisites: "Epic Battles",
    challenge: "None",
    cluster: "War for Gondor",
    bosses: [{ id: 199, name: "Mâsorgh" }, { id: 200, name: "Ughâsh" }]
  },
  {
    id: 57,
    name: "Sunken Labyrinth",
    abbreviations: ["SL"],
    region: "Eastern Gondor",
    level: { minimum: 50, maximum: 115 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Osgiliath",
    note: "Destroy the hidden forces beneath Osgiliath",
    bosses: [{ id: 201, name: "Dagron" }, { id: 202, name: "Muzgásh" }]
  },
  {
    id: 58,
    name: "The Ruined City",
    abbreviations: ["RC"],
    region: "Eastern Gondor",
    level: { minimum: 50, maximum: 115 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Osgiliath",
    note: "Fight through Osgiliath in search of Faramir",
    bosses: [
      { id: 203, name: "Jukotor" },
      { id: 204, name: "Thrug" },
      { id: 205, name: "Lúmithil" }
    ]
  },
  {
    id: 59,
    name: "The Dome of Stars",
    abbreviations: ["DoS", "Dome"],
    region: "Eastern Gondor",
    level: { minimum: 50, maximum: 115 },
    tiers: 2,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Osgiliath",
    note: "Reclaim the Dome of Stars from the Nazgûl",
    bosses: [
      { id: 206, name: "Upâl-keng" },
      { id: 207, name: "The Lord of Pinions" },
      { id: 208, name: "The Black Blade of Lebenni" }
    ]
  },
  {
    id: 60,
    name: "Blood of the Black Serpent",
    abbreviations: ["BBS"],
    region: "Old Anórien",
    level: { minimum: 75, maximum: 115 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Battle of Pelennor",
    note: "The Riders of Rohan face the Haradrim and Variags",
    bosses: []
  },
  {
    id: 61,
    name: "The Quays of the Harlond",
    abbreviations: ["Quays"],
    region: "Old Anórien",
    level: { minimum: 75, maximum: 115 },
    tiers: 2,
    groups: ["Small Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Battle of Pelennor",
    note: "Assault the Harlond alongside Aragorn's army!",
    bosses: [
      { id: 209, name: "Kálmok" },
      { id: 210, name: "Barash" },
      { id: 211, name: "Akhun" },
      { id: 212, name: "Khurat" },
      { id: 213, name: "Mumak" },
      { id: 214, name: "The Forsaken Reave" }
    ]
  },
  {
    id: 62,
    name: "The Silent Street",
    abbreviations: ["TSS"],
    region: "Old Anórien",
    level: { minimum: 75, maximum: 115 },
    tiers: 2,
    groups: ["Fellowship"],
    availability: ["VIP", "QuestPack"],
    challenge: "Daily",
    cluster: "Battle of Pelennor",
    note: "Rath Dínen, the tombs of the Kings and Stewards of Gondor",
    bosses: [
      { id: 215, name: "Lintanar" },
      { id: 216, name: "Boromir" },
      { id: 217, name: "Telemnar" },
      { id: 218, name: "Tarannon Falastur" },
      { id: 219, name: "Atanatar II" },
      { id: 220, name: "The Gloom of Nurn" }
    ]
  }
];

export const clusters = [
  "Battle of Pelennor",
  "Helm's Deep",
  "In Their Absence",
  "Mines of Moria",
  "Osgiliath",
  "Rise of Isengard",
  "Scourge of Khazad-dûm",
  "Shadows of Angmar",
  "The Road to Erebor",
  "Tower of Dol Guldur",
  "War for Gondor"
];

export const regions = [
  "Angmar",
  "Bree-land",
  "Central Gondor",
  "Dol Guldur",
  "Eastern Gondor",
  "Erebor",
  "Eregion",
  "Evendim (Annúminas)",
  "Evendim",
  "Forochel",
  "Great River",
  "Isengard",
  "Mirkwood",
  "Nud-melek",
  "Old Anórien",
  "The Flaming Deeps",
  "The Foundations of Stone",
  "The Lone-lands",
  "The Misty Mountains",
  "The North Downs",
  "The Redhorn Lodes",
  "The Silvertine Lodes",
  "The Trollshaws",
  "The Water-works",
  "West Rohan",
  "Zirakzigil"
];

export const groups = ["Solo/Duo", "Small Fellowship", "Fellowship", "Raid"];
