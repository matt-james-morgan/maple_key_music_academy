import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    navy: Palette["primary"];
    red: Palette["primary"];
    teal: Palette["primary"];
    cream: Palette["primary"];
  }
  interface PaletteOptions {
    navy?: PaletteOptions["primary"];
    red?: PaletteOptions["primary"];
    teal?: PaletteOptions["primary"];
    cream?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    navy: { main: "#26394F", contrastText: "#FFFBEF" },
    red: { main: "#AC3F30", light: "#8e3427", contrastText: "#FFFBEF" },
    teal: { main: "#96B3AD", contrastText: "#26394F" },
    cream: { main: "#FFFBEF", contrastText: "#26394F" },
    background: {
      default: "#96B3AD",
    },
    text: {
      primary: "#26394F",
    },
  },
  typography: {
    fontFamily: '"Nunito", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
    },
    h3: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
    },
    h4: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
    },
    h5: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
    },
    h6: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
    },
    body1: {
      fontFamily: '"Nunito", "Helvetica Neue", Arial, sans-serif',
    },
    body2: {
      fontFamily: '"Nunito", "Helvetica Neue", Arial, sans-serif',
    },
    button: {
      fontFamily: '"Nunito", "Helvetica Neue", Arial, sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          color: "#26394F",
          backgroundColor: "#96B3AD",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
      },
    },
  },
});

export default theme;
