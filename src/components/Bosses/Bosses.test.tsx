import * as React from "react";
import { create } from "react-test-renderer";
import { Bosses } from "./Bosses";
import { IBoss } from "../../data/boss";

test("<Bosses> renders correctly", () => {
  const bosses: IBoss[] = [
    { id: 1, name: "Barrow-wight Caller" },
    { id: 2, name: "Gaerdring" },
    { id: 3, name: "Gaerthel" }
  ];
  const tree = create(<Bosses bosses={bosses} />).toJSON();
  expect(tree).toMatchSnapshot();
});
