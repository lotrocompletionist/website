import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
  tag: 'instance-page',
  styleUrl: 'instance-page.scss'
})
export class InstancePage {
  
  @Prop() match: MatchResults;

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class='instance-page'>
          <p>
            Hello! My name is {this.match.params.name}.
            My name was passed in through a route param!
          </p>
        </div>
      );
    }
  }
}
