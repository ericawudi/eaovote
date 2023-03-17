import { Grid } from "@mui/material";
import Participant from "./participant";

export default function Participants() {
  const data = [1, 2, 3, 4];
  return data.map((item) => (
    <Grid item key={item}>
      <Participant />
    </Grid>
  ));
}
