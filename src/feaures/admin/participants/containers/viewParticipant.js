import ViewActorTemplate from "../../components/viewActorTemplate";
import { useParticipantContext } from "../context/participantProvider";

export default function ViewParticipant() {
  const { participantsState } = useParticipantContext();
  const { selectedParticipant } = participantsState.state;
  return (
    <ViewActorTemplate
      actor="Voter"
      keys={["fullname", "competition", "category"]}
      details={selectedParticipant}
    />
  );
}
