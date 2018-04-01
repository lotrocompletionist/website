import * as React from "react";
import { create } from "react-test-renderer";
import { DropdownCheckboxFilterItem } from "./DropdownFilterItem";

test("<DropdownCheckboxFilterItem> renders correctly", () => {
  const value = "Ered-Luin";
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const tree = create(
    <DropdownCheckboxFilterItem value={value} onChange={onChange} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
