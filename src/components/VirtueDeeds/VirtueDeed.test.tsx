import * as React from "react";
import { create } from "react-test-renderer";
import { VirtueDeed } from "./VirtueDeed";
import { IVirtueDeed } from "@app/data/virtue-deed";

test("<VirtueDeed> renders correctly", () => {
  const virtueDeed: IVirtueDeed = {
    id: 1,
    virtue: "Charity",
    deed: "Bree-land Adventurer (Advanced)",
    region: "Bree-land Deeds",
    level: 4
  };
  const tree = create(<VirtueDeed virtueDeed={virtueDeed} />).toJSON();
  expect(tree).toMatchSnapshot();
});
