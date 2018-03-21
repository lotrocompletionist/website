import * as React from "react";
import { create } from "react-test-renderer";
import { Bosses } from "./Bosses";

test("<Bosses> renders correctly", () => {
  const bosses = ["Barrow-wight Caller", "Gaerdring", "Gaerthel"];
  const tree = create(<Bosses bosses={bosses} />).toJSON();
  expect(tree).toMatchSnapshot();
});
