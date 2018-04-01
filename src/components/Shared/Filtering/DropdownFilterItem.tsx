import * as React from "react";
import { DropdownItem } from "bloomer";

export interface DropdownFilterItemProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function DropdownCheckboxFilterItem(props: DropdownFilterItemProps) {
  return (
    <DropdownItem>
      <input type="checkbox" value={props.value} onChange={props.onChange} />
      {props.value}
    </DropdownItem>
  );
}
