import * as React from "react";
import { create } from "react-test-renderer";
import { Main } from "./Main";

test("<Main> renders correctly", () => {
  const tree = create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();
});
