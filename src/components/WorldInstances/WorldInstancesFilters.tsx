import * as React from "react";
import { clusters, regions, groups } from "@app/data/world-instance";
import { DropdownFilter } from "@app/components/Shared/Filtering/DropdownFilter";
import { DropdownCheckboxFilterItem } from "@app/components/Shared/Filtering/DropdownFilterItem";

interface WorldInstancesFiltersProps {
  onClusterChange: React.ReactEventHandler<HTMLInputElement>;
  onRegionChange: React.ReactEventHandler<HTMLInputElement>;
  onGroupChange: React.ReactEventHandler<HTMLInputElement>;
}

export function WorldInstancesFilters(props: WorldInstancesFiltersProps) {
  return (
    <>
      <DropdownFilter
        filterItem={DropdownCheckboxFilterItem}
        header="Cluster"
        values={clusters}
        onChange={props.onClusterChange}
      />
      <DropdownFilter
        filterItem={DropdownCheckboxFilterItem}
        header="Region"
        values={regions}
        onChange={props.onRegionChange}
      />
      <DropdownFilter
        filterItem={DropdownCheckboxFilterItem}
        header="Group"
        values={groups}
        onChange={props.onGroupChange}
      />
    </>
  );
}
