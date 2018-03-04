import { render } from '@stencil/core/testing';
import { MainPage } from './main-page';

describe('main-page', () => {
  it('should build', () => {
    expect(new MainPage()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [MainPage],
        html: '<main-page></main-page>'
      });
    });
  });
});