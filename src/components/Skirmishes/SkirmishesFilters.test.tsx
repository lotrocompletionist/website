import * as React from "react";
import { create } from "react-test-renderer";
import { SkirmishesFilters } from "./SkirmishesFilters";

test("<SkirmishesFilters> renders correctly", () => {
  const onFactionChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const onTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const tree = create(
    <SkirmishesFilters
      onFactionChange={onFactionChange}
      onTypeChange={onTypeChange}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
