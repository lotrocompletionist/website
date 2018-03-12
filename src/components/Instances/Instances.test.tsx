import * as React from "react";
import { create } from "react-test-renderer";
import { default as Instances } from "./Instances";

test("Instances renders correctly", () => {
  const tree = create(<Instances />).toJSON();
  expect(tree).toMatchSnapshot();
});
