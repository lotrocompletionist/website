import * as React from "react";
import { create } from "react-test-renderer";
import { default as NotFound } from "./NotFound";

test("<NotFound> renders correctly", () => {
  const tree = create(<NotFound />).toJSON();
  expect(tree).toMatchSnapshot();
});
