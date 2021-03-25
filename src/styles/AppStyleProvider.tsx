import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { styledComponentsTheme, muiTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';

const AppStyleProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={styledComponentsTheme}>
    <GlobalStyle />
    <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
  </ThemeProvider>
);

export { AppStyleProvider };
