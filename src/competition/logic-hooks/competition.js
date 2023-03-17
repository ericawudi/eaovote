import { useState } from "react";

export default function useCompetitionLogicHook() {
  const [votes, setVotes] = useState([]);

  const addNewVote = ({ categoryId, participantId }) => {
    const duplicate = votes.find((vote) => vote.categoryId === categoryId);
    const updatedVotes = duplicate
      ? votes.map((vote) =>
          vote.categoryId === categoryId ? { ...vote, participantId } : vote
        )
      : [...votes, { categoryId, participantId }];

    return setVotes(updatedVotes);
  };
  const removeVote = (categoryId) => {
    const upddatedVotes = votes.filter(
      (vote) => categoryId === vote.categoryId
    );
    return setVotes(upddatedVotes);
  };

  const submitVotes = () => console.log({ SUMBIT: votes });

  return { addNewVote, removeVote, submitVotes };
}
