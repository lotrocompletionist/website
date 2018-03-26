import * as React from "react";
import { create } from "react-test-renderer";
import { LevelRange } from "./LevelRange";
import { ILevelRange } from "../../data/level-range";

test("<LevelRange> renders correctly with minimum and maximum specified", () => {
  const levelRange: ILevelRange = {
    minimum: 10,
    maximum: 20
  };
  const tree = create(<LevelRange range={levelRange} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("<LevelRange> renders correctly with only mimimum specified", () => {
  const levelRange: ILevelRange = {
    minimum: 10
  };
  const tree = create(<LevelRange range={levelRange} />).toJSON();
  expect(tree).toMatchSnapshot();
});
