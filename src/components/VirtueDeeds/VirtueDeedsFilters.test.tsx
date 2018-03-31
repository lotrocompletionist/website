import * as React from "react";
import { create } from "react-test-renderer";
import { VirtueDeedsFilters } from "./VirtueDeedsFilters";

test("<VirtueDeedsFilters> renders correctly", () => {
  const onVirtueChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const onRegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const tree = create(
    <VirtueDeedsFilters
      onVirtueChange={onVirtueChange}
      onRegionChange={onRegionChange}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
