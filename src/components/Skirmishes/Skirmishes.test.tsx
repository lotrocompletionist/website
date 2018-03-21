import * as React from "react";
import { create } from "react-test-renderer";
import { default as Skirmishes } from "./Skirmishes";

test("<Skirmishes> renders correctly", () => {
  const tree = create(<Skirmishes />).toJSON();
  expect(tree).toMatchSnapshot();
});
