import * as React from "react";
import { create } from "react-test-renderer";
import { DropdownCheckboxFilterItem } from "./DropdownFilterItem";

test("<DropdownCheckboxFilterItem> renders correctly", () => {
  const id = "region-id";
  const value = "Ered-Luin";
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {};
  const tree = create(
    <DropdownCheckboxFilterItem id={id} value={value} onChange={onChange} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
