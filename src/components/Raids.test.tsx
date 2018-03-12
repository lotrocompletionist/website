import React from "react";
import renderer from "react-test-renderer";
import { default as Raids } from "./Raids";

test("Raids renders correctly", () => {
  const tree = renderer.create(<Raids />).toJSON();
  expect(tree).toMatchSnapshot();
});
