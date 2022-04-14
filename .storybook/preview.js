import { create } from "@storybook/theming";
import "../stories/assets/style/global.scss";

const lightTheme = create({
  base: "light",
  appBg: "#FFFFFF",
  colorSecondary: "#0097AC",
  textColor:"#000000",
  appContentBg: "#FFFFFF",
  barTextColor: '#999999',
  barSelectedColor: '#0097AC',
  barBg: '#FFFFFF',
  brandTitle: '<h2><strong>UST</strong> BlueConch</h2>',
});

const darkTheme = create({
  base: "dark",
  appBg: "#000000",
  colorPrimary: "#FF0000",
  colorSecondary: "#0097AC",
  appContentBg: "#919191",
  inputBg: '#FFFFFF',
  inputTextColor: '#333333',
  barBg: '#fff',
  textColor:"#FFFFFF",
  brandTitle: '<h2><strong>UST</strong> BlueConch</h2>',
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    stylePreview: true,
  },
};