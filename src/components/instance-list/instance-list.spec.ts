import { render } from '@stencil/core/testing';
import { InstanceList } from './instance-list';

describe('instance-list', () => {
  it('should build', () => {
    expect(new InstanceList()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [InstanceList],
        html: '<instance-list></instance-list>'
      });
    });
  });
});