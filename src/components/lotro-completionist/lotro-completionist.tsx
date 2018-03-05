import { Component } from '@stencil/core';

@Component({
  tag: 'lotro-completionist',
  styleUrl: 'lotro-completionist.scss'
})
export class LotroCompletionist {

  render() {
    return (
      <div>
        <nav-header></nav-header>

        <main>
          <stencil-router>
            <stencil-route url={[',', '/instances']} component='instance-list' />
            <stencil-route url='/raids' component='raid-list' />
          </stencil-router>
        </main>
      </div>
    );
  }
}