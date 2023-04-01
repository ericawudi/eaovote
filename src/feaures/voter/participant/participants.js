import { Grid } from "@mui/material";
import Participant from "./participant";
import useParticipantsLogicHook from "../logic-hooks/participants";

export default function Participants({ participants }) {
  const { alreadyVoted, handleVote, selectedParticipantId } =
    useParticipantsLogicHook(participants);

  return (
    participants && (
      <Grid container rowSpacing={3}>
        {participants.map((participant) => (
          <Grid item key={participant.id} sm={12} md={6} lg={4} xl={3}>
            <Participant
              participant={participant}
              alreadyVoted={alreadyVoted}
              onSelect={handleVote}
              isSelected={selectedParticipantId}
            />
          </Grid>
        ))}
      </Grid>
    )
  );
}
