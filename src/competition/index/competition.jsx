import { Grid, Paper, Button } from "@mui/material";
import Categories from "../category/categories";
import useCompetitionLogicHook from "../logic-hooks/competition";
import classes from "../styles/competition.module.css";

export default function Competition() {
  const { submitVotes } = useCompetitionLogicHook();
  return (
    <div className={classes.competition__main}>
      <Paper className={classes.competition__header}>
        <p className={classes.competition__title}>Competion name</p>
        <Button className={classes.submit_votes_btn} onClick={submitVotes}>
          Submit Vote
        </Button>
      </Paper>
      <div>
        <Categories />
      </div>
    </div>
  );
}
