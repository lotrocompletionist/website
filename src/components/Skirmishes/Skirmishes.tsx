import * as React from "react";
import { remove } from "lodash";
import { skirmishes, types, factions, ISkirmish } from "@app/data/skirmish";
import { Skirmish } from "./Skirmish";
import { SkirmishesFilters } from "./SkirmishesFilters";

interface SkirmishsProps {}

interface SkirmishsState {
  filteredSkirmishes: ISkirmish[];
  filteredFactions: string[];
  filteredTypes: string[];
}

export default class Skirmishs extends React.Component<
  SkirmishsProps,
  SkirmishsState
> {
  constructor(props: SkirmishsProps) {
    super(props);

    this.state = {
      filteredSkirmishes: skirmishes,
      filteredFactions: [],
      filteredTypes: []
    };
  }

  onFactionChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedFactions = event.target.checked
      ? [...this.state.filteredFactions, event.target.value]
      : remove(this.state.filteredFactions, event.target.value);

    const filteredFactions = this.setState({
      filteredFactions: updatedFactions,
      filteredSkirmishes: this.filterSkirmishs(
        updatedFactions,
        this.state.filteredTypes
      )
    });
  }
  onTypeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedTypes = event.target.checked
      ? [...this.state.filteredTypes, event.target.value]
      : remove(this.state.filteredTypes, event.target.value);

    this.setState({
      filteredTypes: updatedTypes,
      filteredSkirmishes: this.filterSkirmishs(
        this.state.filteredFactions,
        updatedTypes
      )
    });
  }

  filterSkirmishs(filteredFactions: string[], filteredTypess: string[]) {
    const matchesFilteredFactions = (skirmish: ISkirmish) =>
      filteredFactions.length === 0 ||
      (skirmish.faction !== undefined &&
        filteredFactions.indexOf(skirmish.faction) !== -1);

    const matchesFilteredTypes = (skirmish: ISkirmish) =>
      filteredTypess.length === 0 ||
      filteredTypess.indexOf(skirmish.type) !== -1;

    return skirmishes.filter(
      skirmish =>
        matchesFilteredFactions(skirmish) && matchesFilteredTypes(skirmish)
    );
  }

  render() {
    return (
      <>
        <SkirmishesFilters
          onFactionChange={this.onFactionChange.bind(this)}
          onTypeChange={this.onTypeChange.bind(this)}
        />
        {this.state.filteredSkirmishes.map(skirmish => (
          <Skirmish key={skirmish.id} skirmish={skirmish} />
        ))}
      </>
    );
  }
}
