import React from "react";
import { Grid, Typography, Button, Paper } from "@mui/material";

const styles = {
  main: {
    marginTop: "30px",
  },
  table: {
    marginTop: "50px",
  },
  btn: {
    height: "55px",
    background: "gray",
    color: "white",
    marginRight: "10px",
  },
};
export default function PageTemplateLayout(props) {
  const { createButtonClick, helperText, children } = props;

  return (
    <div style={styles.main}>
      <Paper
        elevation={1}
        style={{
          display: "flex",
          alignItems: "center",
          height: "80px",
          padding: "10px",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Grid item>
            <Typography>{helperText}</Typography>
          </Grid>
          <Grid item>
            {/* <AddButton createButtonClick={createButtonClick} /> */}
            <Button style={styles.btn} onClick={createButtonClick}>
              Create New
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <div style={styles.table}>{children}</div>
    </div>
  );
}
