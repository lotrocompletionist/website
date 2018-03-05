import { render } from '@stencil/core/testing';
import { LotroCompletionist } from './lotro-completionist';

describe('lotro-completionist', () => {
  it('should build', () => {
    expect(new LotroCompletionist()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [LotroCompletionist],
        html: '<lotro-completionist></lotro-completionist>'
      });
    });
  });
});