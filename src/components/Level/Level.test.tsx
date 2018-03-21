import * as React from "react";
import { create } from "react-test-renderer";
import { Level } from "./Level";
import { ILevel } from "../../data/level";

test("<Level> renders correctly", () => {
  const level: ILevel = {
    minimum: 10,
    maximum: 20
  };
  const tree = create(<Level level={level} />).toJSON();
  expect(tree).toMatchSnapshot();
});
