import * as React from "react";
import { create } from "react-test-renderer";
import { DropdownFilter } from "./DropdownFilter";
import { DropdownFilterItemProps } from "./DropdownFilterItem";

test("<DropdownFilter> renders correctly", () => {
  const header = "Regions";
  const values = ["Ered-Luin", "The Shire", "The North Downs"];
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const filterItem = (props: DropdownFilterItemProps) => <div />;

  const tree = create(
    <DropdownFilter
      header={header}
      values={values}
      onChange={onchange}
      filterItem={filterItem}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
