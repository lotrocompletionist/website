import { render } from '@stencil/core/testing';
import { RaidList } from './raid-list';

describe('raid-list', () => {
  it('should build', () => {
    expect(new RaidList()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [RaidList],
        html: '<raid-list></raid-list>'
      });
    });
  });
});