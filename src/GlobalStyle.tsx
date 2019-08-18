import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(232, 232, 232) !important;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, p, span {
    color: #525252;
    margin: 0;
    padding: 0;
  }
`;