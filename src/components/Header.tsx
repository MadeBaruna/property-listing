import React from 'react';
import styled from 'styled-components/macro';
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

const Header: React.FC = () => (
  <Container>
    <h3>Property Listing</h3>
    <SearchBar />
  </Container>
);

export default Header;
