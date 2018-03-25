import * as React from "react";
import { create } from "react-test-renderer";
import { Raid } from "./Raid";
import { IRaid } from "../../data/raid";

test("<Raid> renders correctly", () => {
  const raid: IRaid = {
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
  };
  const tree = create(<Raid raid={raid} />).toJSON();
  expect(tree).toMatchSnapshot();
});
