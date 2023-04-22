import { Grid } from "@mui/material";
import classes from "../styles/components.module.css";

export default function ViewActorTemplate(props) {
  const { actor, keys, details } = props;
  const data = transformDetails(details, keys);
  return (
    <div>
      <h1 className={classes.template_title}>{actor} Details</h1>
      <Grid container justifyContent="space-between">
        {data.map(({ key, value }, idx) => (
          <Grid item sm={6} className={classes.view__info_container} key={idx}>
            <p className={classes.view__key}>{key}</p>
            <p className={classes.view__value}>{value}</p>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const transformDetails = (detail, keys) =>
  keys.reduce((data, key) => [...data, { key, value: detail[key] }], []);
