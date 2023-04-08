import { createContext, useContext, useState } from "react";

const VoterContext = createContext();

export const useVoterContext = () => {
  return useContext(VoterContext);
};

function VoterContextProvider({ children }) {
  const [votes, setVotes] = useState({});

  const handleVoterVotes = (newVote) => {
    setVotes((prevVoted) => {
      return { ...prevVoted, [newVote.category_id]: newVote };
    });
  };

  return (
    <VoterContext.Provider value={{ handleVoterVotes, votes }}>
      {children}
    </VoterContext.Provider>
  );
}

export default VoterContextProvider;
