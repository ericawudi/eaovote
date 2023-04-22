import { createContext, useContext } from "react";
// import useVotersLogic from "../logic-hooks/voters";
// import useCreateAndEditVoterLogic from "../logic-hooks/createAndEditVoter";
// import useDeleteVoterLogic from "../logic-hooks/deleteVoter";

const CompetitionsContext = createContext();
export const useCompetitionsContext = () => useContext(CompetitionsContext);

export default function CompetitionsContextProvider({ children }) {
  //   const votersState = useVotersLogic();
  //   const { closeActionModal } = votersState.handlers;
  //   const deleteVoterState = useDeleteVoterLogic(closeActionModal);
  //   const createAndEditVoterState = useCreateAndEditVoterLogic({
  //     closeActionModal,
  //     showCreateContent: votersState.modal.showCreateContent,
  //     voter: votersState.state.selectedVoter,
  //   });

  const state = {};

  return (
    <CompetitionsContext.Provider value={state}>
      {children}
    </CompetitionsContext.Provider>
  );
}
