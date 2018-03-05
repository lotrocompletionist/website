import { Component, Prop } from '@stencil/core';
import { raids } from "../../global/data";
import { Instance, Level } from '../../global/models';

@Component({
  tag: 'raid-list',
  styleUrl: 'raid-list.scss'
})
export class RaidList {

  @Prop() instances: Instance[];

  constructor() {
    this.instances = raids;

    console.log(this.instances);
  }

  renderLevel(level: Level) {
    if (level.maximum)
      return `${level.minimum} - ${level.maximum}`;

    return level.minimum.toString();
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Abbr.</th>
            <th>Region</th>
            <th>Level</th>
            <th>Bosses</th>
            <th>Tiers</th>
            <th>Group</th>
            <th>Available</th>
            <th>Prereqs.</th>
            <th>Challenge</th>
          </tr>
        </thead>
        <tbody>
          {this.instances.map((instance) =>
            <tr>
              <td>{instance.name}</td>
              <td>{instance.abbreviations.join(', ')}</td>
              <td>{instance.region}</td>
              <td>{this.renderLevel(instance.level)}</td>
              <td>{instance.bossEncounters}</td>
              <td>{instance.tiers}</td>
              <td>{instance.groups}</td>
              <td>{instance.availability.join(', ')}</td>
              <td>{instance.prerequisites}</td>
              <td>{instance.challenge}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}