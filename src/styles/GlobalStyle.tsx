import { createGlobalStyle } from 'styled-components';
import { StyledComponentsThemeType } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: StyledComponentsThemeType }>`
  html{
      background-color: ${(props) => props.theme.color.background};
  }

  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Oxygen,
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

  .gray-border {
    border-color: rgba(221,224,228);
  }
`;
