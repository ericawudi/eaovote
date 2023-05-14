import { createContext, useContext } from "react";
import useCreateAndEditVoterLogic from "../logic-hooks/createAndEditVoter";
import useDeleteVoterLogic from "../logic-hooks/deleteVoter";
import useVotersLogic from "../logic-hooks/voters";

const VoterContext = createContext();
export const useVotersContext = () => useContext(VoterContext);

export default function VotersContextProvider({ children }) {
  const votersState = useVotersLogic();
  const { closeActionModal } = votersState.handlers;
  const deleteVoterState = useDeleteVoterLogic(closeActionModal);
  const createAndEditVoterState = useCreateAndEditVoterLogic({
    closeActionModal,
    showCreateContent: votersState.modal.showCreateContent,
    voter: votersState.state.selectedVoter,
  });

  const state = { votersState, createAndEditVoterState, deleteVoterState };

  return (
    <VoterContext.Provider value={state}>{children}</VoterContext.Provider>
  );
}
