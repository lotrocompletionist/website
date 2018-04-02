import * as React from "react";
import { factions, types } from "@app/data/skirmishes";
import { DropdownFilter } from "@app/components/Shared/Filtering/DropdownFilter";
import { DropdownCheckboxFilterItem } from "@app/components/Shared/Filtering/DropdownFilterItem";

interface SkirmishesFiltersProps {
  onFactionChange: React.ReactEventHandler<HTMLInputElement>;
  onTypeChange: React.ReactEventHandler<HTMLInputElement>;
}

export function SkirmishesFilters(props: SkirmishesFiltersProps) {
  return (
    <>
      <DropdownFilter
        filterItem={DropdownCheckboxFilterItem}
        header="Faction"
        values={factions}
        onChange={props.onFactionChange}
      />
      <DropdownFilter
        filterItem={DropdownCheckboxFilterItem}
        header="Type"
        values={types}
        onChange={props.onTypeChange}
      />
    </>
  );
}
