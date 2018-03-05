import { Component } from '@stencil/core';


@Component({
  tag: 'instance-list',
  styleUrl: 'instance-list.scss'
})
export class InstanceList {

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/instances/sambor'>
          <button>
            Instance
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
