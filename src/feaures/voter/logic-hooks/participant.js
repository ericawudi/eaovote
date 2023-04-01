import { useEffect, useState } from "react";

export default function useParticipantLogicHook(
  alreadyVoted,
  participant,
  isSelected,
  onSelect
) {
  const [voted, setVoted] = useState(participant.voted === 1 && true);

  useEffect(() => {
    if (!alreadyVoted) {
      if (isSelected === participant.id) {
        return setVoted(true);
      }
      return setVoted(false);
    }
  }, [isSelected, participant.id, alreadyVoted]);

  const handleSelectedVote = (participant) => {
    if (!alreadyVoted) {
      onSelect(participant);
    }
  };

  return { voted, handleSelectedVote };
}
