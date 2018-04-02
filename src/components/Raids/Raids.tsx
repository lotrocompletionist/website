import * as React from "react";

import { Raid } from "./Raid";
import { raids, IRaid } from "@app/data/raid";
import { remove } from "lodash";
import { RaidsFilters } from "./RaidsFilters";

interface RaidsProps {}

interface RaidsState {
  filteredRaids: IRaid[];
  filteredClusters: string[];
  filteredRegions: string[];
}

export default class Raids extends React.Component<RaidsProps, RaidsState> {
  constructor(props: RaidsProps) {
    super(props);

    this.state = {
      filteredRaids: raids,
      filteredClusters: [],
      filteredRegions: []
    };
  }

  onClusterChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedClusters = event.target.checked
      ? [...this.state.filteredClusters, event.target.value]
      : remove(this.state.filteredClusters, event.target.value);

    const filteredClusters = this.setState({
      filteredClusters: updatedClusters,
      filteredRaids: this.filterRaids(
        updatedClusters,
        this.state.filteredRegions
      )
    });
  }
  onRegionChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedRegions = event.target.checked
      ? [...this.state.filteredRegions, event.target.value]
      : remove(this.state.filteredRegions, event.target.value);

    this.setState({
      filteredRegions: updatedRegions,
      filteredRaids: this.filterRaids(
        this.state.filteredClusters,
        updatedRegions
      )
    });
  }

  filterRaids(filteredClusters: string[], filteredRegions: string[]) {
    const matchesFilteredClusters = (worldInstance: IRaid) =>
      filteredClusters.length === 0 ||
      filteredClusters.indexOf(worldInstance.cluster) !== -1;

    const matchesFilteredRegions = (worldInstance: IRaid) =>
      filteredRegions.length === 0 ||
      filteredRegions.indexOf(worldInstance.region) !== -1;

    return raids.filter(
      raid => matchesFilteredClusters(raid) && matchesFilteredRegions(raid)
    );
  }

  render() {
    return (
      <>
        <RaidsFilters
          onClusterChange={this.onClusterChange.bind(this)}
          onRegionChange={this.onRegionChange.bind(this)}
        />
        {this.state.filteredRaids.map(raid => (
          <Raid key={raid.id} raid={raid} />
        ))}
      </>
    );
  }
}
