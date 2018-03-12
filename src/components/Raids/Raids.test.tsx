import * as React from "react";
import { create } from "react-test-renderer";
import { default as Raids } from "./Raids";

test("<Raids> renders correctly", () => {
  const tree = create(<Raids />).toJSON();
  expect(tree).toMatchSnapshot();
});
