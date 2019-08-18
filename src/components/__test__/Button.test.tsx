import React from 'react';
import 'jest-styled-components'
import { render } from 'enzyme';

import Button from '../Button';

it('renders <Button />', () => {
  const wrapper = render(
    <Button />
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders <Button /> with style', () => {
  const wrapper = render(
    <Button style={{ float: "right" }} />
  );

  expect(wrapper).toMatchSnapshot();
});
