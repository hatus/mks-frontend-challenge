import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.colors['base-white']};
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }

  ul, li, a {
    text-decoration: none;
    list-style: none;
  }

  h1, h2 , h3, h4, h5, h6, strong {
    font-family: 'Montserrat', sans-serif;
  }
`;
