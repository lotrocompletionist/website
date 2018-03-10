import React from 'react';
import renderer from 'react-test-renderer';
import { default as NotFound } from './NotFound';

test('NotFound renders correctly', () => {
  const tree = renderer
    .create(<NotFound />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
