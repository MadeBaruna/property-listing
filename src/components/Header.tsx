import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Container = styled.div`
  display: flex;
  align-items: center;
  background: white;
  height: 70px;
  padding: 0px 20px;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.05);

  div {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;

const Header: React.FC = () => (
  <Container>
    <h3>Property Listing</h3>
    <div>
      <SearchBar />
    </div>
  </Container>
);

export default Header;
