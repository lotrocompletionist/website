import * as React from "react";
import { virtues, regions } from "../../data/virtue-deed";
import { DropdownFilter } from "../Shared/DropdownFilter";
import { DropdownCheckboxFilterItem } from "../Shared/DropdownFilterItem";

interface VirtueDeedsFiltersProps {
  onVirtueChange: React.ReactEventHandler<HTMLInputElement>;
  onRegionChange: React.ReactEventHandler<HTMLInputElement>;
}

export function VirtueDeedsFilters(props: VirtueDeedsFiltersProps) {
  return (
    <>
      <DropdownFilter
        filterItem={DropdownCheckboxFilterItem}
        header="Virtue"
        values={virtues}
        onChange={props.onVirtueChange}
      />
      <DropdownFilter
        filterItem={DropdownCheckboxFilterItem}
        header="Region"
        values={regions}
        onChange={props.onRegionChange}
      />
    </>
  );
}
