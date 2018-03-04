import { Component } from '@stencil/core';


@Component({
  tag: 'main-page',
  styleUrl: 'main-page.scss'
})
export class MainPage {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route url='/' component='instance-list' exact={true}>
            </stencil-route>

            <stencil-route url='/instances/:name' component='instance-page'>
            </stencil-route>
          </stencil-router>
        </main>
      </div>
    );
  }
}
