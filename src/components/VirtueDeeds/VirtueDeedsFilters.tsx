import * as React from "react";
import { virtues, regions } from "@app/data/virtue-deeds";
import { DropdownFilter } from "@app/components/Shared/Filtering/DropdownFilter";
import { DropdownCheckboxFilterItem } from "@app/components/Shared/Filtering/DropdownFilterItem";

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
