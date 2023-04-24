import { createContext, useContext } from "react";
import useParticipantsLogic from "../logic-hooks/participants";
import useCreateAndEditParticipantLogic from "../logic-hooks/createAndEditParticipant";
import useDeleteParticipantLogic from "../logic-hooks/deleteParticipant";

const ParticipantContext = createContext();
export const useParticipantContext = () => useContext(ParticipantContext);

export default function ParticipantsContextProvider({ children }) {
  const participantsState = useParticipantsLogic();
  const { closeActionModal } = participantsState.handlers;
  const deleteParticipantState = useDeleteParticipantLogic(closeActionModal);
  const createAndEditParticipantState = useCreateAndEditParticipantLogic({
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
