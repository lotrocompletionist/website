import * as React from "react";
import { create } from "react-test-renderer";
import { Instance } from "./Instance";
import { IInstance } from "../../data/instance";

test("<Instance> renders correctly", () => {
  const instance: IInstance = {
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
    bosses: ["Barrow-wight Caller", "Gaerdring", "Gaerthel"]
  };
  const tree = create(<Instance instance={instance} />).toJSON();
  expect(tree).toMatchSnapshot();
});
