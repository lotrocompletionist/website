import * as React from "react";
import { create } from "react-test-renderer";
import { RaidsFilters } from "./RaidsFilters";

test("<RaidsFilters> renders correctly", () => {
  const onClusterChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const onRegionChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const tree = create(
    <RaidsFilters
      onClusterChange={onClusterChange}
      onRegionChange={onRegionChange}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
