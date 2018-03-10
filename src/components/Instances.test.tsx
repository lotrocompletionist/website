import React from 'react';
import renderer from 'react-test-renderer';
import { default as Instances } from './Instances';

test('Instances renders correctly', () => {
  const tree = renderer
    .create(<Instances />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
