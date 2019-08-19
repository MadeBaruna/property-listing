import React from 'react';
import styled from 'styled-components/macro';
import MdiSearchIcon from 'mdi-react/SearchIcon';
import { withRouter, RouteComponentProps } from 'react-router';

const Container = styled.div<{ focused: boolean }>`
  background: white;
  margin-left: 20px;
  box-shadow: ${({ focused }) => focused ? `0 0 0 2px #04ACF4` : `0 0 0 2px rgba(0, 0, 0, .1)`};
  max-width: 500px;
  width: 100%;
  border-radius: 2px;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
  }
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

const SearchIcon = styled(MdiSearchIcon)`
  fill: black;

  &.focused {
    fill: white;
  }
`;

interface IProps extends RouteComponentProps {
  search?: string;
  type?: string;
}

const SearchBar: React.FC<IProps> = ({ search, type, history }) => {
  const [focused, setFocused] = React.useState(false);
  const [query, setQuery] = React.useState(search || '');
  const [selectedType, setSelectedType] = React.useState(type || 'APARTMENT');

  return (
    <Container focused={focused}>
      <form onSubmit={(e) => {
        e.preventDefault();
        history.push(`/?search=${query}&type=${selectedType}`);
      }}>
        <Input
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)} />
        <Select
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <option value="APARTMENT">Apartment</option>
          <option value="OFFICE">Office</option>
        </Select>
        <SearchIconButton onClick={() => history.push(`/?search=${query}&type=${selectedType}`)} focused={focused}>
          <SearchIcon className={focused ? 'focused' : ''} size={30} />
        </SearchIconButton>
      </form>
    </Container>
  );
}

export default withRouter(SearchBar);
