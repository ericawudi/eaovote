import { Grid } from "@mui/material";
import Participant from "./participant";
import useCategoryLogicHook from "../logic-hooks/category";

export default function Participants() {
  const { state, handlers } = useCategoryLogicHook();
  const { voteParticipant } = handlers;
  const data = [1, 2, 3, 4];

  return data.map((item) => (
    <Grid item key={item}>
      <Participant
        onSelect={() => voteParticipant(item)}
        isSelected={item === state.selectedPartipantId}
      />
    </Grid>
  ));
}
