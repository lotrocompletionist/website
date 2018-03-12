import * as React from "react";
import { create } from "react-test-renderer";
import { Instance } from "./Instance";
import { Challenge, Availability, Tiers, Group } from "../../data/models";

test("<Instance> renders correctly", () => {
  const instance = {
    name: "The Sixteenth Hall",
    abbreviations: ["16th"],
    region: "Nud-melek",
    level: {
      minimum: 58
    },
    tiers: Tiers.One,
    groups: [Group.Fellowship],
    availability: [Availability.Expansion, Availability.QuestPack],
    prerequisites: "",
    challenge: Challenge.Daily,
    cluster: "Mines of Moria"
  };
  const tree = create(<Instance instance={instance} />).toJSON();
  expect(tree).toMatchSnapshot();
});
