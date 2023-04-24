import DeleteActorTemplate from "../../components/deleteActorTemplate";

import { useCompetitionsContext } from "../context/competionProvider";

export default function DeleteCompetition() {
  const { competitionsState, deleteCompetitionState } =
    useCompetitionsContext();
  const { selectedCompetition } = competitionsState.state;
  const { handleCancel, handleDelete } = deleteCompetitionState;

  console.log({ competitionsState });
  return (
    <DeleteActorTemplate
      actor="Competition"
      name={selectedCompetition.name}
      cancel={handleCancel}
      confirm={handleDelete}
    />
  );
}
