import { useState } from "react";
import useCompetitionLogicHook from "./competition";

export default function useCategoryLogicHook() {
  const { addNewVote, removeVote } = useCompetitionLogicHook();
  const [showParticipants, setShowParticipants] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [selectedPartipantId, setSelectedParticipantId] = useState(null);
  const [participants, setParticipants] = useState([]);

  const toggleShowParticipants = () => setShowParticipants((prev) => !prev);

  const voteParticipant = (participantId) => {
    addNewVote({ categoryId, participantId });
    setSelectedParticipantId(participantId);
    return toggleShowParticipants();
  };

  return {
    state: {
      showParticipants,
      selectedPartipantId,
    },
    handlers: { voteParticipant, toggleShowParticipants },
  };
}
