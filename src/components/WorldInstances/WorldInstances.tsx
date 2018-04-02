import * as React from "react";

import { WorldInstance } from "./WorldInstance";
import { worldInstances, IWorldInstance } from "@app/data/world-instances";
import { WorldInstancesFilters } from "./WorldInstancesFilters";
import { remove } from "lodash";

interface WorldInstancesProps {}

interface WorldInstancesState {
  filteredWorldInstances: IWorldInstance[];
  filteredClusters: string[];
  filteredRegions: string[];
  filteredGroups: string[];
}

export default class WorldInstances extends React.Component<
  WorldInstancesProps,
  WorldInstancesState
> {
  constructor(props: WorldInstancesProps) {
    super(props);

    this.state = {
      filteredWorldInstances: worldInstances,
      filteredClusters: [],
      filteredRegions: [],
      filteredGroups: []
    };
  }

  onClusterChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedClusters = event.target.checked
      ? [...this.state.filteredClusters, event.target.value]
      : remove(this.state.filteredClusters, event.target.value);

    const filteredClusters = this.setState({
      filteredClusters: updatedClusters,
      filteredWorldInstances: this.filterWorldInstances(
        updatedClusters,
        this.state.filteredRegions,
        this.state.filteredGroups
      )
    });
  }
  onRegionChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedRegions = event.target.checked
      ? [...this.state.filteredRegions, event.target.value]
      : remove(this.state.filteredRegions, event.target.value);

    this.setState({
      filteredRegions: updatedRegions,
      filteredWorldInstances: this.filterWorldInstances(
        this.state.filteredClusters,
        updatedRegions,
        this.state.filteredGroups
      )
    });
  }

  onGroupChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedGroups = event.target.checked
      ? [...this.state.filteredGroups, event.target.value]
      : remove(this.state.filteredGroups, event.target.value);

    this.setState({
      filteredGroups: updatedGroups,
      filteredWorldInstances: this.filterWorldInstances(
        this.state.filteredClusters,
        this.state.filteredRegions,
        updatedGroups
      )
    });
  }

  filterWorldInstances(
    filteredClusters: string[],
    filteredRegions: string[],
    filteredGroups: string[]
  ) {
    const matchesFilteredClusters = (worldInstance: IWorldInstance) =>
      filteredClusters.length === 0 ||
      filteredClusters.indexOf(worldInstance.cluster) !== -1;

    const matchesFilteredRegions = (worldInstance: IWorldInstance) =>
      filteredRegions.length === 0 ||
      filteredRegions.indexOf(worldInstance.region) !== -1;

    const matchesFilteredGroups = (worldInstance: IWorldInstance) =>
      filteredGroups.length === 0 ||
      filteredGroups.findIndex(
        filteredGroup => worldInstance.groups.indexOf(filteredGroup) !== -1
      ) !== -1;

    return worldInstances.filter(
      worldInstance =>
        matchesFilteredClusters(worldInstance) &&
        matchesFilteredRegions(worldInstance) &&
        matchesFilteredGroups(worldInstance)
    );
  }

  render() {
    return (
      <>
        <WorldInstancesFilters
          onClusterChange={this.onClusterChange.bind(this)}
          onRegionChange={this.onRegionChange.bind(this)}
          onGroupChange={this.onGroupChange.bind(this)}
        />
        {this.state.filteredWorldInstances.map(worldInstance => (
          <WorldInstance key={worldInstance.id} worldInstance={worldInstance} />
        ))}
      </>
    );
  }
}
