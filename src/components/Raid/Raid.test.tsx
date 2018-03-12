import React from "react";
import renderer from "react-test-renderer";
import { Raid } from "./Raid";
import { Challenge, Availability, Tiers, Group } from "../../data/models";

test("<Raid> renders correctly", () => {
  const raid = {

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
};
  const tree = renderer.create(<Raid raid={raid} />).toJSON();
  expect(tree).toMatchSnapshot();
});
