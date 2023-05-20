import { createContext, useContext } from "react";
import useParticipantsLogic from "../logic-hooks/participants";
import useCreateAndEditParticipantLogic from "../logic-hooks/createAndEditParticipant";
import useDeleteParticipantLogic from "../logic-hooks/deleteParticipant";
import { useAppContext } from "../../../../contest/AppContextProvider";

const ParticipantContext = createContext();
export const useParticipantContext = () => useContext(ParticipantContext);

export default function ParticipantsContextProvider({ children }) {
  const { addNotification } = useAppContext();
  const participantsState = useParticipantsLogic(addNotification);
  const { closeActionModal } = participantsState.handlers;
  const deleteParticipantState = useDeleteParticipantLogic({
    closeActionModal,
    addNotification,
  });
  const createAndEditParticipantState = useCreateAndEditParticipantLogic({
    addNotification,
    closeActionModal,
    participant: participantsState.state.selectedVoter,
  });

  const state = {
    participantsState,
    createAndEditParticipantState,
    deleteParticipantState,
  };

  return (
    <ParticipantContext.Provider value={state}>
      {children}
    </ParticipantContext.Provider>
  );
}
