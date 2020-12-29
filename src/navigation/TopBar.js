import { AppBar, Toolbar } from "@material-ui/core";
import GridItemSpacer from "../components/GridItemSpacer";
import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MainMenu from "./MainMenu";

const topBarTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#2b3337",
    },
  },
});

const TopBar = () => {
  return (
    <ThemeProvider theme={topBarTheme}>
      <AppBar position="sticky">
        <Toolbar>
          <MainMenu />
          <GridItemSpacer />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default TopBar;
