import * as React from "react";
import { create } from "react-test-renderer";
import { default as VirtueDeeds } from "./VirtueDeeds";

test("<VirtueDeeds> renders correctly", () => {
  const tree = create(<VirtueDeeds />).toJSON();
  expect(tree).toMatchSnapshot();
});
