import DeleteActorTemplate from "../../components/deleteActorTemplate";
import { useVotersContext } from "../context/voterProvider";

export default function DeleteVoter() {
  const { votersState, deleteVoterState } = useVotersContext();
  const { selectedVoter } = votersState.state;
  const { isLoading, handleCancel, handleDelete } = deleteVoterState;

  const { id, fullname } = selectedVoter;
  const onConfirm = () => handleDelete(id);

  return (
    <DeleteActorTemplate
      actor="Voter"
      name={fullname}
      cancel={handleCancel}
      confirm={onConfirm}
      isLoading={isLoading}
    />
  );
}
