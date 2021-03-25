// NOTE: 本来はDefaultThemeをベースとしたいがstyled-componentsのバグで応急処置をとっている
//       https://github.com/styled-components/styled-components-website/issues/392
// import { DefaultTheme } from 'styled-components';
// export const theme: DefaultTheme = {

export const theme = {
  color: {
    text: '#212121',
    background: '#EFF2F5',
    primary: '#1E81D0',
  },
};
export type ThemeType = typeof theme;
