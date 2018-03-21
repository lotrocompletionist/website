import * as React from "react";
import { create } from "react-test-renderer";
import { Skirmish } from "./Skirmish";
import { ISkirmish } from "../../data/skirmish";

test("<Skirmish> renders correctly", () => {
  const instance: ISkirmish = {
    name: "The Siege of Gondamon",
    level: { minimum: 20, maximum: 115 },
    faction: "Thorin's Hall",
    type: "Defense",
    requirements: ["None"],
    bosses: ["Thrastar", "Hergill", "Agi Gatebreaker", "Ghashnâkh", "Sigurmar"]
  };
  const tree = create(<Skirmish skirmish={instance} />).toJSON();
  expect(tree).toMatchSnapshot();
});
