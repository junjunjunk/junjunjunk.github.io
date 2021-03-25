// NOTE: 本来はDefaultThemeをベースとしたいがstyled-componentsのバグで応急処置をとっている
//       https://github.com/styled-components/styled-components-website/issues/392
// import { DefaultTheme } from 'styled-components';
// export const theme: DefaultTheme = {
import { createMuiTheme } from '@material-ui/core';

// styled-components
export const styledComponentsTheme = {
  color: {
    text: '#212121',
    background: '#EFF2F5',
    primary: '#1E81D0',
  },
};
export type StyledComponentsThemeType = typeof styledComponentsTheme;

// material-ui

export const primaryPalatte = {
  light: '#65AEFF',
  main: '#1E81D0',
  dark: '#00539F',
  contrastText: '#FFFFFF',
};

export const muiTheme = createMuiTheme({
  palette: {
    primary: primaryPalatte,
  },

  shape: {
    borderRadius: 0,
  },

  props: {
    MuiTextField: {
      variant: 'outlined',
      size: 'small',
      autoComplete: 'on',
      fullWidth: true,
    },
    MuiTypography: {
      variant: 'body2',
    },
  },
});
