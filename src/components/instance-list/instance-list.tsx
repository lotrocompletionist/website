import { Component, Prop } from '@stencil/core';
import { worldInstances } from "../../global/data";
import { Instance, Level } from '../../global/models';

@Component({
  tag: 'instance-list',
  styleUrl: 'instance-list.scss'
})
export class InstanceList {

  @Prop() instances: Instance[];

  constructor() {
    this.instances = worldInstances;
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