import * as React from "react";
import { clusters, regions } from "@app/data/raids";
import { DropdownFilter } from "@app/components/Shared/Filtering/DropdownFilter";
import { DropdownCheckboxFilterItem } from "@app/components/Shared/Filtering/DropdownFilterItem";

interface RaidsProps {
  onClusterChange: React.ReactEventHandler<HTMLInputElement>;
  onRegionChange: React.ReactEventHandler<HTMLInputElement>;
}

export function RaidsFilters(props: RaidsProps) {
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
    </>
  );
}
