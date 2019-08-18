import React from 'react';
import 'jest-styled-components'
import { render } from 'enzyme';

import SearchBar from '../SearchBar';

it('renders <SearchBar />', () => {
  const wrapper = render(
    <SearchBar />
  );

  expect(wrapper).toMatchSnapshot();
});
