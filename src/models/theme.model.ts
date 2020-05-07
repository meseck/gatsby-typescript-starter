interface ThemeModel {
  colors: {
    primary: string,
    secondary: string,
  },
  font: {
    family: string,
    colors: {
      dark: string,
      light: string,
      purple: string,
    },
    sizes: {
      rem: string,
      title: string,
      subtitle: string,
    },
  },
}

export default ThemeModel;
