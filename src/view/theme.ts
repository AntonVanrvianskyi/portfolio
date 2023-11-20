import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {}
  interface ThemeOptions {}
  interface Palette {
    colorText: string;
    gradient: string;
    colorChild: string;
    bgColorWidget: string;
    colorTextWidget: string;
    borderColor: string;
  }
  interface PaletteOptions {
    colorText?: string;
    gradient?: string;
    colorChild?: string;
    bgColorWidget?: string;
    colorTextWidget?: string;
    borderColor?: string;
  }

}

const theme = createTheme({
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },

  },
  typography: {
    fontFamily: ["DM Sans", "Poppins"].join(","),
  },
  palette: {
    gradient:
      "linear-gradient(0deg, rgba(0,192,253,1) 21%, rgba(231,15,170,1) 76%)",
    colorText: "rgba(102, 102, 102, 1)",
    colorChild: "rgba(66, 68, 110, 1)",
    bgColorWidget: "rgba(215, 255, 224, 1)",
    colorTextWidget: "rgba(1, 140, 15, 1)",
    borderColor: "rgba(235, 234, 237, 1)",
  },
});

export { theme };
