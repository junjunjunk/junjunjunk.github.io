// NOTE: 本来はDefaultThemeをベースとしたいがstyled-componentsのバグで応急処置をとっている
//       https://github.com/styled-components/styled-components-website/issues/392
// import { DefaultTheme } from 'styled-components';
// export const theme: DefaultTheme = {
import { createMuiTheme, PaletteColorOptions } from '@material-ui/core';

// styled-components
export const styledComponentsTheme = {
  color: {
    text: '#212121',
    background: '#ffecde',
    primary: '#1E81D0',
  },
};
export type StyledComponentsThemeType = typeof styledComponentsTheme;

// material-ui

export const primaryPalatte: PaletteColorOptions = {
  light: '#70a3a6',
  main: '#427477',
  dark: '#12484b',
  contrastText: '#FFFFFF',
};

export const secondaryPalette: PaletteColorOptions = {
  light: '#ff8f8a',
  main: '#cb5f5d',
  dark: '#963033',
  contrastText: '#FFFFFF',
};

// --font-base: -apple-system,"BlinkMacSystemFont","Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif,"Segoe UI Emoji";
//     --font-code: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,monospace,"Segoe UI Emoji";
//     --font-alphabet-only: "Inter","BlinkMacSystemFont",Arial,sans-serif;

export const muiTheme = createMuiTheme({
  palette: {
    primary: primaryPalatte,
    secondary: secondaryPalette,
  },

  shape: {
    borderRadius: 0,
  },

  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'ヒラギノ角ゴシック',
      '"ヒラギノ角ゴ ProN"',
      '"Hiragino Kaku Gothic ProN"',
      '"Hiragino Sans"',
      'Meiryo',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    fontSize: 12,
    h3: {
      fontSize: 32,
      fontFamily: [
        'ヒラギノ角ゴシック',
        '"ヒラギノ角ゴ ProN"',
        'Inter',
        '"Hiragino Kaku Gothic ProN"',
        '"Hiragino Sans"',
        'Roboto',
        '--apple-system',
      ].join(','),
    },
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
