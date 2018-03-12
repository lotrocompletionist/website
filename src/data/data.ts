import { Instance, Group, Tiers, Availability, Challenge } from "./models";

export const raids: Instance[] = [
    {
        "name": "Helegrod: Spider Wing",
        "abbreviations": [
            "Spider-wing"
        ],
        "region": "The Misty Mountains",
        "level": {
            "minimum": 50,
            "maximum": 115
        },
        "bossEncounters": 1,
        "tiers": Tiers.One,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Helegrod: Giant Wing",
        "abbreviations": [
            "Giant-wing"
        ],
        "region": "The Misty Mountains",
        "level": {
            "minimum": 50,
            "maximum": 115
        },
        "bossEncounters": 1,
        "tiers": Tiers.One,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Helegrod: Dragon Wing",
        "abbreviations": [
            "Thorog"
        ],
        "region": "The Misty Mountains",
        "level": {
            "minimum": 50,
            "maximum": 115
        },
        "bossEncounters": 1,
        "tiers": Tiers.One,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "Zaudru",
        "challenge": Challenge.None,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "The Rift of Nûrz Ghâshu",
        "abbreviations": [
            "Rift"
        ],
        "region": "Angmar",
        "level": {
            "minimum": 50
        },
        "bossEncounters": 8,
        "tiers": Tiers.One,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.None,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Bogbereth",
        "abbreviations": [
            "Bogbereth"
        ],
        "region": "Angmar",
        "level": {
            "minimum": 50
        },
        "bossEncounters": 1,
        "tiers": Tiers.One,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.Free
        ],
        "prerequisites": "Landscape raid",
        "challenge": Challenge.None,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Ferndúr the Virulent",
        "abbreviations": [
            "Ferndur"
        ],
        "region": "Angmar",
        "level": {
            "minimum": 50
        },
        "bossEncounters": 1,
        "tiers": Tiers.One,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.Free
        ],
        "prerequisites": "Landscape Raid",
        "challenge": Challenge.None,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "The Vile Maw",
        "abbreviations": [
            "VM/Watcher"
        ],
        "region": "The Water-works",
        "level": {
            "minimum": 60
        },
        "bossEncounters": 1,
        "tiers": Tiers.One,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.Expansion,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.None,
        "cluster": "Mines of Moria"
    },
    {
        "name": "Filikul",
        "abbreviations": [
            "Turtle"
        ],
        "region": "The Water-works",
        "level": {
            "minimum": 60
        },
        "bossEncounters": 1,
        "tiers": Tiers.One,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.Expansion,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.None,
        "cluster": "Mines of Moria"
    },
    {
        "name": "Dâr Narbugud",
        "abbreviations": [
            "DN"
        ],
        "region": "Foundations of Stone",
        "level": {
            "minimum": 60
        },
        "bossEncounters": 6,
        "tiers": Tiers.One,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.None,
        "cluster": "Scourge of Khazad-dûm"
    },
    {
        "name": "Barad Guldur",
        "abbreviations": [
            "BG"
        ],
        "region": "Dol Guldur",
        "level": {
            "minimum": 65,
            "maximum": 115
        },
        "bossEncounters": 3,
        "tiers": Tiers.Two,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Tower of Dol Guldur"
    },
    {
        "name": "Ost Dunhoth",
        "abbreviations": [
            "OD"
        ],
        "region": "Enedwaith",
        "level": {
            "minimum": 65,
            "maximum": 115
        },
        "bossEncounters": 6,
        "tiers": Tiers.Two,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Daily,
        "cluster": "In Their Absence"
    },
    {
        "name": "Draigoch's Lair",
        "abbreviations": [
            "Draigoch"
        ],
        "region": "Enedwaith",
        "level": {
            "minimum": 75
        },
        "bossEncounters": 1,
        "tiers": Tiers.One,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.Expansion,
            Availability.Buy
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Daily,
        "cluster": "Rise of Isengard"
    },
    {
        "name": "Tower of Orthanc",
        "abbreviations": [
            "ToO"
        ],
        "region": "Isengard",
        "level": {
            "minimum": 75
        },
        "bossEncounters": 5,
        "tiers": Tiers.Two,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.Expansion,
            Availability.Buy
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Daily,
        "cluster": "Rise of Isengard"
    },
    {
        "name": "Flight to the Lonely Mountain",
        "abbreviations": [
            "Flight"
        ],
        "region": "Erebor",
        "level": {
            "minimum": 20,
            "maximum": 115
        },
        "bossEncounters": 1,
        "tiers": Tiers.Two,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.Expansion,
            Availability.Buy
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "The Road to Erebor (Introduced via the Riders of Rohan)"
    },
    {
        "name": "The Fires of Smaug",
        "abbreviations": [
            "Smaug"
        ],
        "region": "Erebor",
        "level": {
            "minimum": 20,
            "maximum": 115
        },
        "bossEncounters": 1,
        "tiers": Tiers.Two,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.Expansion,
            Availability.Buy
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "The Road to Erebor (Introduced via the Riders of Rohan)"
    },
    {
        "name": "The Battle for Erebor",
        "abbreviations": [
            "BfE"
        ],
        "region": "Erebor",
        "level": {
            "minimum": 20,
            "maximum": 115
        },
        "bossEncounters": 1,
        "tiers": Tiers.Two,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.Expansion,
            Availability.Buy
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "The Road to Erebor (Introduced via the Riders of Rohan)"
    },
    {
        "name": "The Deeping Wall",
        "abbreviations": [
            "Wall",
            "DW"
        ],
        "region": "West Rohan",
        "level": {
            "minimum": 10,
            "maximum": 100
        },
        "bossEncounters": 1,
        "tiers": Tiers.One,
        "groups": [
            Group.SoloDuo,
            Group.Raid
        ],
        "availability": [
            Availability.Expansion
        ],
        "prerequisites": "Epic Battles",
        "challenge": Challenge.None,
        "cluster": "Helm's Deep"
    },
    {
        "name": "Throne of the Dread Terror",
        "abbreviations": [
            "Throne"
        ],
        "region": "Old Anórien",
        "level": {
            "minimum": 115
        },
        "bossEncounters": 6,
        "tiers": Tiers.Two,
        "groups": [
            Group.Raid
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Battle of Pelennor"
    }
];

export const instances: Instance[] = [
    {
        "name": "Great Barrow: Thadúr",
        "abbreviations": [
            "Thadur"
        ],
        "region": "Bree-land",
        "level": {
            "minimum": 20,
            "maximum": 115
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.Free
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Great Barrow: Sambrog",
        "abbreviations": [
            "Sammy"
        ],
        "region": "Bree-land",
        "level": {
            "minimum": 20,
            "maximum": 115
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.Free
        ],
        "prerequisites": "Maze and Thadúr",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Inn of the Forsaken",
        "abbreviations": [
            "IoF",
            "IotF"
        ],
        "region": "The Lone-lands",
        "level": {
            "minimum": 20,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.Buy
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Garth Agarwen: Arboretum",
        "abbreviations": [
            "GA"
        ],
        "region": "The Lone-lands",
        "level": {
            "minimum": 32
        },
        "tiers": Tiers.One,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.Free
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Garth Agarwen: Barrows",
        "abbreviations": [
            "GA"
        ],
        "region": "The Lone-lands",
        "level": {
            "minimum": 32
        },
        "tiers": Tiers.One,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.Free
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Garth Agarwen: Fortress",
        "abbreviations": [
            "GA"
        ],
        "region": "The Lone-lands",
        "level": {
            "minimum": 32
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.Free
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Goblin-town Throne Room",
        "abbreviations": [
            "n/a"
        ],
        "region": "The Misty Mountains",
        "level": {
            "minimum": 45
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.None,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Fornost: Wraith of Water",
        "abbreviations": [
            "Water"
        ],
        "region": "The North Downs",
        "level": {
            "minimum": 25,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Fornost: Wraith of Earth",
        "abbreviations": [
            "Earth"
        ],
        "region": "The North Downs",
        "level": {
            "minimum": 25,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "Water",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Fornost: Wraith of Fire",
        "abbreviations": [
            "Fire"
        ],
        "region": "The North Downs",
        "level": {
            "minimum": 25,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "Earth",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Fornost: Wraith of Shadow",
        "abbreviations": [
            "Shadow"
        ],
        "region": "The North Downs",
        "level": {
            "minimum": 25,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "Fire",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "The Halls of Night",
        "abbreviations": [
            "HoN"
        ],
        "region": "Angmar",
        "level": {
            "minimum": 40,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.Buy
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Glinghant",
        "abbreviations": [
            "Gling",
            "Gardens"
        ],
        "region": "Evendim",
        "level": {
            "minimum": 40,
            "maximum": 115
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Ost Elendil",
        "abbreviations": [
            "OE"
        ],
        "region": "Evendim",
        "level": {
            "minimum": 40,
            "maximum": 115
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Haudh Valandil",
        "abbreviations": [
            "HV"
        ],
        "region": "Evendim",
        "level": {
            "minimum": 40,
            "maximum": 115
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Urugarth",
        "abbreviations": [
            "Uru"
        ],
        "region": "Angmar",
        "level": {
            "minimum": 50
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.None,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Carn Dûm",
        "abbreviations": [
            "CD"
        ],
        "region": "Angmar",
        "level": {
            "minimum": 50
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.None,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "Barad Gúlaran",
        "abbreviations": [
            "BG"
        ],
        "region": "Angmar",
        "level": {
            "minimum": 50
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.None,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "The Library at Tham Mírdain",
        "abbreviations": [
            "Lib"
        ],
        "region": "Eregion",
        "level": {
            "minimum": 50,
            "maximum": 115
        },
        "tiers": Tiers.One,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "The School at Tham Mírdain",
        "abbreviations": [
            "School",
            "Sch"
        ],
        "region": "Eregion",
        "level": {
            "minimum": 50,
            "maximum": 115
        },
        "tiers": Tiers.One,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Shadows of Angmar"
    },
    {
        "name": "The Dark Delving",
        "abbreviations": [
            "DD"
        ],
        "region": "The Foundations of Stone",
        "level": {
            "minimum": 58
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Mines of Moria"
    },
    {
        "name": "The Forgotten Treasury",
        "abbreviations": [
            "FT"
        ],
        "region": "The Silvertine Lodes",
        "level": {
            "minimum": 54
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.None,
        "cluster": "Mines of Moria"
    },
    {
        "name": "The Grand Stair",
        "abbreviations": [
            "GS"
        ],
        "region": "The Redhorn Lodes",
        "level": {
            "minimum": 56
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Mines of Moria"
    },
    {
        "name": "Forges of Khazad-dûm",
        "abbreviations": [
            "Forges"
        ],
        "region": "The Flaming Deeps",
        "level": {
            "minimum": 58
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Mines of Moria"
    },
    {
        "name": "Fil Gashan",
        "abbreviations": [
            "FG"
        ],
        "region": "The Flaming Deeps",
        "level": {
            "minimum": 58
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Mines of Moria"
    },
    {
        "name": "The Sixteenth Hall",
        "abbreviations": [
            "16th"
        ],
        "region": "Nud-melek",
        "level": {
            "minimum": 58
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Mines of Moria"
    },
    {
        "name": "Skûmfil",
        "abbreviations": [
            "Skum"
        ],
        "region": "The Foundations of Stone",
        "level": {
            "minimum": 58
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Mines of Moria"
    },
    {
        "name": "The Mirror-halls of Lumul-nar",
        "abbreviations": [
            "HoM"
        ],
        "region": "Zirakzigil",
        "level": {
            "minimum": 58
        },
        "tiers": Tiers.One,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Scourge of Khazad-dûm (Introduced via Mirkwood)"
    },
    {
        "name": "The Water Wheels: Nalâ-dûm",
        "abbreviations": [
            "WW"
        ],
        "region": "The Water-works",
        "level": {
            "minimum": 58
        },
        "tiers": Tiers.One,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Scourge of Khazad-dûm (Introduced via Mirkwood)"
    },
    {
        "name": "Halls of Crafting",
        "abbreviations": [
            "HoC"
        ],
        "region": "The Flaming Deeps",
        "level": {
            "minimum": 58
        },
        "tiers": Tiers.One,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Scourge of Khazad-dûm (Introduced via Mirkwood)"
    },
    {
        "name": "Sword-hall of Dol Guldur",
        "abbreviations": [
            "SH"
        ],
        "region": "Dol Guldur",
        "level": {
            "minimum": 65,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Tower of Dol Guldur"
    },
    {
        "name": "Dungeons of Dol Guldur",
        "abbreviations": [
            "Dungeons"
        ],
        "region": "Dol Guldur",
        "level": {
            "minimum": 65,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Tower of Dol Guldur"
    },
    {
        "name": "Warg-pens of Dol Guldur",
        "abbreviations": [
            "WP"
        ],
        "region": "Dol Guldur",
        "level": {
            "minimum": 65,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Tower of Dol Guldur"
    },
    {
        "name": "Sammath Gûl",
        "abbreviations": [
            "SG"
        ],
        "region": "Dol Guldur",
        "level": {
            "minimum": 65,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Tower of Dol Guldur"
    },
    {
        "name": "Lost Temple",
        "abbreviations": [
            "LT"
        ],
        "region": "The Trollshaws",
        "level": {
            "minimum": 65,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Daily,
        "cluster": "In Their Absence"
    },
    {
        "name": "Sâri-surma",
        "abbreviations": [
            "SS"
        ],
        "region": "Forochel",
        "level": {
            "minimum": 65,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Daily,
        "cluster": "In Their Absence"
    },
    {
        "name": "Northcotton Farms",
        "abbreviations": [
            "NF",
            "Ncf"
        ],
        "region": "Evendim",
        "level": {
            "minimum": 65,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Daily,
        "cluster": "In Their Absence"
    },
    {
        "name": "Stoneheight",
        "abbreviations": [
            "Sth"
        ],
        "region": "The North Downs",
        "level": {
            "minimum": 65,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Daily,
        "cluster": "In Their Absence"
    },
    {
        "name": "Dargnákh Unleashed",
        "abbreviations": [
            "DU"
        ],
        "region": "Isengard",
        "level": {
            "minimum": 75
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.Buy
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Biweekly,
        "cluster": "Rise of Isengard"
    },
    {
        "name": "Fangorn's Edge",
        "abbreviations": [
            "FE"
        ],
        "region": "Isengard",
        "level": {
            "minimum": 75
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.Buy
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Biweekly,
        "cluster": "Rise of Isengard"
    },
    {
        "name": "Pits of Isengard",
        "abbreviations": [
            "PoI",
            "Pits"
        ],
        "region": "Isengard",
        "level": {
            "minimum": 75
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.Buy
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Biweekly,
        "cluster": "Rise of Isengard"
    },
    {
        "name": "The Foundry",
        "abbreviations": [
            "Foundry"
        ],
        "region": "Isengard",
        "level": {
            "minimum": 75
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.Buy
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Biweekly,
        "cluster": "Rise of Isengard"
    },
    {
        "name": "Roots of Fangorn",
        "abbreviations": [
            "RoF"
        ],
        "region": "Great River",
        "level": {
            "minimum": 75
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "Discover",
        "challenge": Challenge.Biweekly,
        "cluster": "Rise of Isengard"
    },
    {
        "name": "Seat of the Great Goblin",
        "abbreviations": [
            "SGG"
        ],
        "region": "The Misty Mountains",
        "level": {
            "minimum": 20,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.Buy
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "The Road to Erebor (Introduced via the Riders of Rohan)"
    },
    {
        "name": "Iorbar's Peak",
        "abbreviations": [
            "IP"
        ],
        "region": "The Misty Mountains",
        "level": {
            "minimum": 20,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.Buy
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "The Road to Erebor (Introduced via the Riders of Rohan)"
    },
    {
        "name": "Webs of the Scuttledells",
        "abbreviations": [
            "Webs"
        ],
        "region": "Mirkwood",
        "level": {
            "minimum": 20,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.Buy
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "The Road to Erebor (Introduced via the Riders of Rohan)"
    },
    {
        "name": "The Bells of Dale",
        "abbreviations": [
            "Bells"
        ],
        "region": "Erebor",
        "level": {
            "minimum": 20,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.Expansion,
            Availability.Buy
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "The Road to Erebor (Introduced via the Riders of Rohan)"
    },
    {
        "name": "Helm's Dike",
        "abbreviations": [
            "Dike"
        ],
        "region": "West Rohan",
        "level": {
            "minimum": 10,
            "maximum": 115
        },
        "tiers": Tiers.None,
        "groups": [
            Group.SoloDuo,
            Group.Fellowship
        ],
        "availability": [
            Availability.Free
        ],
        "prerequisites": "Epic Battles",
        "challenge": Challenge.None,
        "cluster": "Helm's Deep"
    },
    {
        "name": "The Deeping Wall",
        "abbreviations": [
            "Wall",
            "DW"
        ],
        "region": "West Rohan",
        "level": {
            "minimum": 10,
            "maximum": 115
        },
        "tiers": Tiers.None,
        "groups": [
            Group.SoloDuo,
            Group.Raid
        ],
        "availability": [
            Availability.Expansion
        ],
        "prerequisites": "Epic Battles",
        "challenge": Challenge.None,
        "cluster": "Helm's Deep"
    },
    {
        "name": "The Deeping-coomb",
        "abbreviations": [
            "Coomb",
            "DC"
        ],
        "region": "West Rohan",
        "level": {
            "minimum": 10,
            "maximum": 115
        },
        "tiers": Tiers.None,
        "groups": [
            Group.SoloDuo
        ],
        "availability": [
            Availability.Expansion
        ],
        "prerequisites": "Epic Battles",
        "challenge": Challenge.None,
        "cluster": "Helm's Deep"
    },
    {
        "name": "The Glittering Caves",
        "abbreviations": [
            "GC"
        ],
        "region": "West Rohan",
        "level": {
            "minimum": 10,
            "maximum": 115
        },
        "tiers": Tiers.None,
        "groups": [
            Group.SoloDuo,
            Group.SmallFellowship
        ],
        "availability": [
            Availability.Expansion
        ],
        "prerequisites": "Epic Battles",
        "challenge": Challenge.None,
        "cluster": "Helm's Deep"
    },
    {
        "name": "The Hornburg",
        "abbreviations": [
            "Hornburg"
        ],
        "region": "West Rohan",
        "level": {
            "minimum": 10,
            "maximum": 115
        },
        "tiers": Tiers.None,
        "groups": [
            Group.SoloDuo
        ],
        "availability": [
            Availability.Expansion
        ],
        "prerequisites": "Epic Battles",
        "challenge": Challenge.None,
        "cluster": "Helm's Deep"
    },
    {
        "name": "Retaking Pelargir",
        "abbreviations": [
            "Pela",
            "Pel",
            "Pelargir"
        ],
        "region": "Central Gondor",
        "level": {
            "minimum": 10,
            "maximum": 115
        },
        "tiers": Tiers.None,
        "groups": [
            Group.SoloDuo,
            Group.Fellowship
        ],
        "availability": [
            Availability.Free
        ],
        "prerequisites": "Epic Battles",
        "challenge": Challenge.None,
        "cluster": "War for Gondor"
    },
    {
        "name": "Defence of Minas Tirith",
        "abbreviations": [
            "MT",
            "Defence"
        ],
        "region": "Old Anórien",
        "level": {
            "minimum": 10,
            "maximum": 115
        },
        "tiers": Tiers.None,
        "groups": [
            Group.SoloDuo,
            Group.SmallFellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "Epic Battles",
        "challenge": Challenge.None,
        "cluster": "War for Gondor"
    },
    {
        "name": "Hammer of the Underworld",
        "abbreviations": [
            "Hammer"
        ],
        "region": "Old Anórien",
        "level": {
            "minimum": 10,
            "maximum": 115
        },
        "tiers": Tiers.None,
        "groups": [
            Group.SoloDuo,
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "Epic Battles",
        "challenge": Challenge.None,
        "cluster": "War for Gondor"
    },
    {
        "name": "Sunken Labyrinth",
        "abbreviations": [
            "SL"
        ],
        "region": "Eastern Gondor",
        "level": {
            "minimum": 50,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Osgiliath"
    },
    {
        "name": "The Ruined City",
        "abbreviations": [
            "RC"
        ],
        "region": "Eastern Gondor",
        "level": {
            "minimum": 50,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Osgiliath"
    },
    {
        "name": "The Dome of Stars",
        "abbreviations": [
            "DoS",
            "Dome"
        ],
        "region": "Eastern Gondor",
        "level": {
            "minimum": 50,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Osgiliath"
    },
    {
        "name": "Blood of the Black Serpent",
        "abbreviations": [
            "BBS"
        ],
        "region": "Old Anórien",
        "level": {
            "minimum": 75,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Battle of Pelennor"
    },
    {
        "name": "The Quays of the Harlond",
        "abbreviations": [
            "Quays"
        ],
        "region": "Old Anórien",
        "level": {
            "minimum": 75,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.SmallFellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Battle of Pelennor"
    },
    {
        "name": "The Silent Street",
        "abbreviations": [
            "TSS"
        ],
        "region": "Old Anórien",
        "level": {
            "minimum": 75,
            "maximum": 115
        },
        "tiers": Tiers.Two,
        "groups": [
            Group.Fellowship
        ],
        "availability": [
            Availability.VIP,
            Availability.QuestPack
        ],
        "prerequisites": "",
        "challenge": Challenge.Daily,
        "cluster": "Battle of Pelennor"
    }
];