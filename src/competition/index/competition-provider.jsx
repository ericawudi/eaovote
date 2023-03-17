import { useState, createContext, useContext } from "react";

const CompetitionContext = createContext();
export const useCompetitionContext = () => useContext(CompetitionContext);

export default function CompetitionProvider({ children }) {
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

  const value = { addNewVote, removeVote, submitVotes };

  return (
    <CompetitionContext.Provider value={value}>
      {children}
    </CompetitionContext.Provider>
  );
}
