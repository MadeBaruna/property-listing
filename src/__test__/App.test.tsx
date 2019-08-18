import React from 'react';
import { render } from 'enzyme';
import 'jest-styled-components'

import App from '../App';

it('renders without crashing', () => {
  const wrapper = render(<App />);
  expect(wrapper).toMatchSnapshot();
});
