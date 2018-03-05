import { Component } from '@stencil/core';

@Component({
  tag: 'nav-header',
  styleUrl: 'nav-header.scss'
})
export class NavHeader {
  
  render() {
    return (
      <header>
        <h1>LoTRO completionist</h1>
      </header>
    );
  }
}
