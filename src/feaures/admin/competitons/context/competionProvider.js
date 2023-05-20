import { createContext, useContext } from "react";
import useCompetitionsLogic from "../logic-hooks/competition";
import useCreateAndEditCompetitionLogic from "../logic-hooks/createAndEditCompetition";
import useDeleteCompetitionLogic from "../logic-hooks/deleteCompetition";
import { useAppContext } from "../../../../contest/AppContextProvider";

const CompetitionsContext = createContext();
export const useCompetitionsContext = () => useContext(CompetitionsContext);

export default function CompetitionsContextProvider({ children }) {
  const { addNotification } = useAppContext();
  const competitionsState = useCompetitionsLogic(addNotification);
  const { closeActionModal } = competitionsState.handlers;
  const deleteCompetitionState = useDeleteCompetitionLogic({
    closeActionModal,
    addNotification,
  });
  const createAndEditCompetitionState = useCreateAndEditCompetitionLogic({
    addNotification,
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
