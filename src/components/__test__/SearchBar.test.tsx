import React from 'react';
import 'jest-styled-components'
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router';

import SearchBar from '../SearchBar';

it('renders <SearchBar />', () => {
  const wrapper = render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders <SearchBar /> with initial query', () => {
  const wrapper = render(
    <MemoryRouter initialEntries={['/?search=apartment&type=OFFICE']}>
      <SearchBar />
    </MemoryRouter>
  );

  expect(wrapper).toMatchSnapshot();
});
