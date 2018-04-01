import * as React from "react";
import { remove } from "lodash";
import { virtueDeeds, IVirtueDeed } from "@app/data/virtue-deed";
import { VirtueDeedsFilters } from "./VirtueDeedsFilters";
import { VirtueDeed } from "./VirtueDeed";

interface VirtueDeedsProps {}

interface VirtueDeedsState {
  filteredVirtueDeeds: IVirtueDeed[];
  filteredVirtues: string[];
  filteredRegions: string[];
}

export default class VirtueDeeds extends React.Component<
  VirtueDeedsProps,
  VirtueDeedsState
> {
  constructor(props: VirtueDeedsProps) {
    super(props);

    this.state = {
      filteredVirtueDeeds: virtueDeeds,
      filteredVirtues: [],
      filteredRegions: []
    };
  }

  onVirtueChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedVirtues = event.target.checked
      ? [...this.state.filteredVirtues, event.target.value]
      : remove(this.state.filteredVirtues, event.target.value);

    const filteredVirtues = this.setState({
      filteredVirtues: updatedVirtues,
      filteredVirtueDeeds: this.filterVirtueDeeds(
        updatedVirtues,
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
      filteredVirtueDeeds: this.filterVirtueDeeds(
        this.state.filteredVirtues,
        updatedRegions
      )
    });
  }

  filterVirtueDeeds(filteredVirtues: string[], filteredRegions: string[]) {
    const matchesFilteredVirtues = (virtueDeed: IVirtueDeed) =>
      filteredVirtues.length === 0 ||
      filteredVirtues.indexOf(virtueDeed.virtue) !== -1;

    const matchesFilteredRegions = (virtueDeed: IVirtueDeed) =>
      filteredRegions.length === 0 ||
      filteredRegions.indexOf(virtueDeed.region) !== -1;

    return virtueDeeds.filter(
      virtueDeed =>
        matchesFilteredVirtues(virtueDeed) && matchesFilteredRegions(virtueDeed)
    );
  }

  render() {
    return (
      <>
        <VirtueDeedsFilters
          onVirtueChange={this.onVirtueChange.bind(this)}
          onRegionChange={this.onRegionChange.bind(this)}
        />
        {this.state.filteredVirtueDeeds.map(virtueDeed => (
          <VirtueDeed key={virtueDeed.id} virtueDeed={virtueDeed} />
        ))}
      </>
    );
  }
}
