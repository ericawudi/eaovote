import { Grid } from "@mui/material";
import Participant from "./participant";
import useParticipantsLogicHook from "../logic-hooks/participants";

export default function Participants({ categoryId }) {
  const { participants, selectedParticipantId, onVoteClick } =
    useParticipantsLogicHook(categoryId);

  const getv = (item, selectedParticipantId) => {
    // console.log({ item, selectedParticipantId });
    return item === selectedParticipantId;
  };
  return participants.map((item) => (
    <Grid item key={item}>
      <Participant
        onSelect={() => onVoteClick(item)}
        isSelected={getv(item, selectedParticipantId)}
      />
    </Grid>
  ));
}
