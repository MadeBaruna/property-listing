import React from 'react';
import styled from 'styled-components';
import MdiSearchIcon from 'mdi-react/SearchIcon';

const Container = styled.div<{ focused: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  height: 40px;
  margin-left: 20px;
  box-shadow: ${({ focused }) => focused ? `0 0 0 2px #04ACF4` : `0 0 0 2px rgba(0, 0, 0, .1)`};
  max-width: 500px;
  width: 100%;
  border-radius: 2px;
`;

const Input = styled.input`
  display: flex;
  height: 100%;
  border: none;
  padding: 0 10px;
  flex: 1;
  font-size: 16px;
  width: 100%;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  margin-right: 5px;
  height: 100%;
  border: none;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

const SearchIconButton = styled.button<{ focused: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ focused }) => focused ? '#04ACF4' : 'rgba(0, 0, 0, .1)'};
  width: 50px;
  height: 100%;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(MdiSearchIcon)<{ focused: boolean }>`
  fill: ${({ focused }) => focused ? 'white' : 'black'};
`;

const SearchBar: React.FC = () => {
  const [focused, setFocused] = React.useState(false);

  return (
    <Container focused={focused}>
      <Input onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
      <Select onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
        <option>Apartment</option>
        <option>Office</option>
      </Select>
      <SearchIconButton focused={focused}>
        <SearchIcon focused={focused} size={30} />
      </SearchIconButton>
    </Container>
  );
}

export default SearchBar;
