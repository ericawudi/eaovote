import { Paper, Button } from "@mui/material";
import Categories from "../category/categories";
import classes from "../styles/competition.module.css";
import CompetitionProvider from "./competition-provider";

export default function Competition() {
  return (
    <CompetitionProvider>
      <div className={classes.competition__main}>
        <Paper className={classes.competition__header}>
          <p className={classes.competition__title}>Competion name</p>
          <Button
            className={classes.submit_votes_btn}
            onClick={() => console.log(1)}
          >
            Submit Vote
          </Button>
        </Paper>
        <div>
          <Categories />
        </div>
      </div>
    </CompetitionProvider>
  );
}
