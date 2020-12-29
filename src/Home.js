import React from "react";
import {
  Button,
  Divider,
  TextField,
  Typography,
  Grid,
} from "@material-ui/core";

const Home = () => {
  return (
    <>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="h5">Home</Typography>
        </Grid>
        <Divider />
        <Grid item>
          <Button variant="contained" color="primary">
            I'm a Button
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary">
            I'm a Button
          </Button>
        </Grid>
        <Grid item>
          <TextField label="Name" />
        </Grid>
        <Grid item>
          <TextField label="Name" color="secondary" />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
