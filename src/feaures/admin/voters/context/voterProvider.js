import { createContext, useContext } from "react";
import useCreateAndEditVoterLogic from "../logic-hooks/createAndEditVoter";
import useDeleteVoterLogic from "../logic-hooks/deleteVoter";
import useVotersLogic from "../logic-hooks/voters";
import { useAppContext } from "../../../../contest/AppContextProvider";

const VoterContext = createContext();
export const useVotersContext = () => useContext(VoterContext);

export default function VotersContextProvider({ children }) {
  const { addNotification } = useAppContext();
  const votersState = useVotersLogic(addNotification);
  const { closeActionModal } = votersState.handlers;
  const createAndEditVoterState = useCreateAndEditVoterLogic({
    addNotification,
    closeActionModal,
    showCreateContent: votersState.modal.showCreateContent,
    voter: votersState.state.selectedVoter,
  });
  const deleteVoterState = useDeleteVoterLogic({
    addNotification,
    closeActionModal,
  });
  const state = { votersState, createAndEditVoterState, deleteVoterState };

  return (
    <VoterContext.Provider value={state}>{children}</VoterContext.Provider>
  );
}
