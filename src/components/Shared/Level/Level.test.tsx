import * as React from "react";
import { create } from "react-test-renderer";
import { Level } from "./Level";

test("<Level> renders correctly", () => {
  const level = 5;
  const tree = create(<Level level={level} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("<LevelRange> renders correctly with  only mimimum specified", () => {
  const tree = create(<Level level={undefined} />).toJSON();
  expect(tree).toMatchSnapshot();
});
