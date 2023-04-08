import { useState } from "react";
import { useVoterContext } from "../context";

export default function useParticipantsLogicHook(participants = []) {
  const [selectedParticipantId, setSelectedParticipantId] = useState();

  const alreadyVoted = Boolean(
    participants.find((participant) => participant.voted === 1)
  );

  const { handleVoterVotes } = useVoterContext();

  const handleVote = (participant) => {
    handleVoterVotes(participant);
    setSelectedParticipantId(participant.id);
  };

  return {
    alreadyVoted,
    handleVote,
    selectedParticipantId,
  };
}
