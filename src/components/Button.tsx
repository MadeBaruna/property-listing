import React from 'react';
import styled from 'styled-components/macro';

const ButtonStyled = styled.button`
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  line-height: 24px;
  font-size: 16px;
  background: #04ACF4;
  color: white;
  cursor: pointer;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: 200ms ease-out;

  &.outlined {
    background: white;
    border: 1px solid #04ACF4;
    color: #04ACF4;

    &:hover {
      background: #04ACF4;
      color: white;
    }
  }

  &.disabled {
    background: grey;
  }

  &:hover {
    background: #0484f4;
    transition: 200ms ease-out;

    &.disabled {
      background: grey;
      cursor: default;
    }
  }
`;

interface IProps extends React.HTMLProps<HTMLButtonElement> {
  outlined?: boolean;
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({ children, outlined, disabled, style, onClick }) => (
  <ButtonStyled
    style={style}
    onClick={disabled ? () => { } : onClick}
    className={`${outlined ? 'outlined' : ''} ${disabled ? 'disabled' : ''}`}>
    {children}
  </ButtonStyled>
);

export default Button;
