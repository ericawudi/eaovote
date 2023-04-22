import { createContext, useContext } from "react";
import useCompetitionsLogic from "../logic-hooks/competition";
import useCreateAndEditCompetitionLogic from "../logic-hooks/createAndEditCompetition";
import useDeleteVoterLogic from "../logic-hooks/deleteCompetition";

const CompetitionsContext = createContext();
export const useCompetitionsContext = () => useContext(CompetitionsContext);

export default function CompetitionsContextProvider({ children }) {
  const competitionsState = useCompetitionsLogic();
  const { closeActionModal } = competitionsState.handlers;
  const deleteCompetitionState = useDeleteVoterLogic(closeActionModal);
  const createAndEditCompetitionState = useCreateAndEditCompetitionLogic({
    closeActionModal,
    showCreateContent: competitionsState.modal.showCreateContent,
    competition: competitionsState.state.selectedVoter,
  });

  const state = {
    competitionsState,
    createAndEditCompetitionState,
    deleteCompetitionState,
  };

  return (
    <CompetitionsContext.Provider value={state}>
      {children}
    </CompetitionsContext.Provider>
  );
}
