import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { styledComponentsTheme, muiTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { StylesProvider } from '@material-ui/core';

const AppStyleProvider: React.FC = ({ children }) => (
  <StylesProvider injectFirst>
    <ThemeProvider theme={styledComponentsTheme}>
      <GlobalStyle />
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeProvider>
  </StylesProvider>
);

export { AppStyleProvider };
