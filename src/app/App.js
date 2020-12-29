import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import TopBar from "../navigation/TopBar";
import AppRoutes from "./AppRoutes";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    height: "calc(100vh - 64px)",
    padding: "30px 40px 40px 40px",
  },
}));

const AppLayout = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <TopBar />
      </Grid>
      <Grid item className={classes.mainContent}>
        <AppRoutes />
      </Grid>
    </Grid>
  );
};

export default AppLayout;
