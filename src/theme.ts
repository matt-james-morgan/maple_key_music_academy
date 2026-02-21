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
      default: "#FFFBEF",
    },
    text: {
      primary: "#26394F",
    },
  },
  typography: {
    fontFamily: '"Calder", Georgia, "Times New Roman", serif',
    h1: {
      fontFamily: '"Calder", Georgia, "Times New Roman", serif',
      fontStyle: "italic",
    },
    h2: {
      fontFamily: '"Calder", Georgia, "Times New Roman", serif',
      fontStyle: "italic",
    },
    h3: {
      fontFamily: '"Calder", Georgia, "Times New Roman", serif',
      fontStyle: "italic",
    },
    h4: {
      fontFamily: '"Calder", Georgia, "Times New Roman", serif',
    },
    h5: {
      fontFamily: '"Calder", Georgia, "Times New Roman", serif',
    },
    h6: {
      fontFamily: '"Calder", Georgia, "Times New Roman", serif',
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
          backgroundColor: "#FFFBEF",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
      },
    },
  },
});

export default theme;
