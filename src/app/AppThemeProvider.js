import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";

const Wrapper = ({ children }) => {
  return <AppThemeProvider>{children}</AppThemeProvider>;
};

const AppThemeProvider = ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      typography: {
        fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
        fontWeight: 600,
        h1: {
          fontSize: "3.5em",
        },
        h2: {
          fontSize: "3em",
        },
        h3: {
          fontSize: "2em",
        },
        h4: {
          fontSize: "1.5em",
        },
      },
      primary: {
        main: "#ef6c00",
      },
      secondary: {
        main: "#426189",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "*": {
            overflowY: "scroll" /* Internet Explorer 10+ */,
            scrollbarWidth: "none" /* Firefox */,
          },
          "*::-webkit-scrollbar": {
            display: "none" /* Safari and Chrome */,
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Wrapper;
