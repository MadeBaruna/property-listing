import React from 'react';
import 'jest-styled-components'
import { render } from 'enzyme';

import Header from '../Header';

it('renders <Header />', () => {
  const wrapper = render(
    <Header />
  );

  expect(wrapper).toMatchSnapshot();
});
