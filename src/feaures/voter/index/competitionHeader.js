import { Paper, Button, CircularProgress } from "@mui/material";
import classes from "../styles/voter.module.css";
import useCompetitionHeaderLogicHook from "../logic-hooks/competition";
import Notification from "../../../components/Notification";
import { green } from "@mui/material/colors";

export default function CompetitionHeader() {
  const { submitVotes, isLoading, notificationMessage, open, handleClose } =
    useCompetitionHeaderLogicHook();
  return (
    <>
      <Paper className={classes.competition__header}>
        <p className={classes.competition__title}>Competion name</p>
        <Button
          variant="contained"
          className={classes.submit_votes_btn}
          onClick={submitVotes}
          disabled={isLoading}
        >
          {isLoading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
              }}
            />
          )}
          Submit Vote
        </Button>
      </Paper>
      <Notification
        severity="error"
        message={notificationMessage}
        openNotification={open}
        handleClose={handleClose}
      />
    </>
  );
}
