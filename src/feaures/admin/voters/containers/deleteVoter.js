import DeleteActorTemplate from "../../components/deleteActorTemplate";
import { useVotersContext } from "../context/voterProvider";

export default function DeleteVoter() {
  const { votersState, deleteVoterState } = useVotersContext();
  const { selectedVoter } = votersState.state;
  const { handleCancel, handleDelete } = deleteVoterState;

  return (
    <DeleteActorTemplate
      actor="Voter"
      name={selectedVoter.fullname}
      cancel={handleCancel}
      confirm={handleDelete}
    />
  );
}
