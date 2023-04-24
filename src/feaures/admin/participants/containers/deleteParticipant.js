import DeleteActorTemplate from "../../components/deleteActorTemplate";
import { useParticipantContext } from "../context/participantProvider";

export default function DeleteParticipant() {
  const { participantsState, deleteParticipantState } = useParticipantContext();
  const { selectedParticipant } = participantsState.state;
  const { handleCancel, handleDelete } = deleteParticipantState;

  return (
    <DeleteActorTemplate
      actor="Participant"
      name={selectedParticipant.fullname}
      cancel={handleCancel}
      confirm={handleDelete}
    />
  );
}
