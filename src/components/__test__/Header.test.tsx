import React from 'react';
import 'jest-styled-components'
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Header from '../Header';

it('renders <Header />', () => {
  const wrapper = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(wrapper).toMatchSnapshot();
});
