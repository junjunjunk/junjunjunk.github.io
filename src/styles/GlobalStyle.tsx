import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
      background-color: ${(props) => props.theme.color.background};
  }

  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: ${(props) => props.theme.color.text};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
`;

export { GlobalStyle };
