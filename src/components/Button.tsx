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

  &:hover {
    background: #0484f4;
    transition: 200ms ease-out;
  }
`;

interface IProps {
  style?: React.CSSProperties;
}

const Button: React.FC<IProps> = ({ children, style }) => (
  <ButtonStyled style={style}>{children}</ButtonStyled>
);

export default Button;
