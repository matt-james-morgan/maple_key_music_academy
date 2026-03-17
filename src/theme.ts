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
    fontFamily: 'calder-dark, sans-serif',
    h1: {
      fontFamily: 'chippewa-falls, sans-serif',
    },
    h2: {
      fontFamily: 'chippewa-falls, sans-serif',
    },
    h3: {
      fontFamily: 'chippewa-falls, sans-serif',
    },
    h4: {
      fontFamily: 'calder-dark, sans-serif',
    },
    h5: {
      fontFamily: 'calder-dark, sans-serif',
    },
    h6: {
      fontFamily: 'calder-dark, sans-serif',
    },
    body1: {
      fontFamily: 'calder-dark, sans-serif',
    },
    body2: {
      fontFamily: 'calder-dark, sans-serif',
    },
    button: {
      fontFamily: 'calder-dark, sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
          overflowX: "hidden",
        },
        body: {
          color: "#26394F",
          backgroundColor: "#96B3AD",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          overflowX: "hidden",
        },
      },
    },
  },
});

export default theme;
