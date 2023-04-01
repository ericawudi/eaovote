import { CircularProgress } from "@mui/material";
import classes from "./Loading.module.css";
function Loader({ size = 24, fetching = "data" }) {
  return (
    <div className={classes.container}>
      <CircularProgress color="inherit" size={size} />
      <div className={classes.loading}>fetching {fetching}...</div>
    </div>
  );
}

export default Loader;
