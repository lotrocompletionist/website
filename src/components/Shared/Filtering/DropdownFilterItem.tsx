import * as React from "react";
import { DropdownItem } from "bloomer";

export interface DropdownFilterItemProps {
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export function DropdownCheckboxFilterItem(props: DropdownFilterItemProps) {
  return (
    <DropdownItem>
      <input
        id={props.id}
        className="is-checkradio"
        type="checkbox"
        value={props.value}
        onChange={props.onChange}
        name={props.value}
      />
      <label htmlFor={props.id}>{props.value}</label>
    </DropdownItem>
  );
}
