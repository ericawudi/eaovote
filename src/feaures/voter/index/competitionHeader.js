import { Paper, Button } from "@mui/material";
import classes from "../styles/voter.module.css";
import useCompetitionHeaderLogicHook from "../logic-hooks/competition";

export default function CompetitionHeader() {
  const { submitVotes } = useCompetitionHeaderLogicHook();
  return (
    <Paper className={classes.competition__header}>
      <p className={classes.competition__title}>Competion name</p>
      <Button className={classes.submit_votes_btn} onClick={submitVotes}>
        Submit Vote
      </Button>
    </Paper>
  );
}
