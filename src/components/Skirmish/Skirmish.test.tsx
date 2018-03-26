import * as React from "react";
import { create } from "react-test-renderer";
import { Skirmish } from "./Skirmish";
import { ISkirmish } from "../../data/skirmish";

test("<Skirmish> renders correctly", () => {
  const skirmish: ISkirmish = {
    id: 1,
    name: "The Siege of Gondamon",
    level: { minimum: 20, maximum: 115 },
    faction: "Thorin's Hall",
    type: "Defense",
    requirements: ["None"],
    bosses: [
      { id: 1, name: "Thrastar" },
      { id: 2, name: "Hergill" },
      { id: 3, name: "Agi Gatebreaker" },
      { id: 4, name: "Ghashnâkh" },
      { id: 5, name: "Sigurmar" }
    ]
  };
  const tree = create(<Skirmish skirmish={skirmish} />).toJSON();
  expect(tree).toMatchSnapshot();
});
