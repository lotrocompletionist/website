import * as React from "react";
import { create } from "react-test-renderer";
import { WorldInstancesFilters } from "./WorldInstancesFilters";

test("<WorldInstancesFilters> renders correctly", () => {
  const onClusterChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const onRegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const onGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const tree = create(
    <WorldInstancesFilters
      onClusterChange={onClusterChange}
      onRegionChange={onRegionChange}
      onGroupChange={onGroupChange}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
