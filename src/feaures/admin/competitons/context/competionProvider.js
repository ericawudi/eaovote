import { createContext, useContext } from "react";
import useCompetitionsLogic from "../logic-hooks/competition";
import useCreateAndEditCompetitionLogic from "../logic-hooks/createAndEditCompetition";
import useDeleteCompetitionLogic from "../logic-hooks/deleteCompetition";

const CompetitionsContext = createContext();
export const useCompetitionsContext = () => useContext(CompetitionsContext);

export default function CompetitionsContextProvider({ children }) {
  const competitionsState = useCompetitionsLogic();
  const { closeActionModal } = competitionsState.handlers;
  const deleteCompetitionState = useDeleteCompetitionLogic(closeActionModal);
  const createAndEditCompetitionState = useCreateAndEditCompetitionLogic({
    closeActionModal,
    competition: competitionsState.state.selectedCompetition,
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
