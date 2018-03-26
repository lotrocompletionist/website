import * as React from "react";
import { create } from "react-test-renderer";
import { default as WorldInstances } from "./WorldInstances";

test("<WorldInstances> renders correctly", () => {
  const tree = create(<WorldInstances />).toJSON();
  expect(tree).toMatchSnapshot();
});
