import React from 'react';
import styled from 'styled-components/macro';
import { withRouter, RouteComponentProps } from 'react-router';
import queryString from 'query-string';

import SearchBar from './SearchBar';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  height: 70px;
  padding: 0px 20px;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.05);
`;

const Header: React.FC<RouteComponentProps> = ({ location }) => {
  const query = queryString.parse(location.search);
  const search = query.search && !Array.isArray(query.search) ? query.search : undefined;
  const type = query.type && !Array.isArray(query.type) ? query.type.toUpperCase() : undefined;

  return (
    <Container>
      <h3>Property Listing</h3>
      <SearchBar search={search} type={type} />
    </Container>
  );
}

export default withRouter(Header);
