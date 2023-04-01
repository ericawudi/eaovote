import { useState } from "react";

export default function useParticipantsLogicHook(participants = []) {
  const [selectedParticipantId, setSelectedParticipantId] = useState();

  const alreadyVoted = Boolean(
    participants.find((participant) => participant.voted === 1)
  );

  //This function can keep track of all selected votes.
  //We can have an array of category and selected participants
  //[1=>{},] {catId:{},}. Either pass a handler from categories
  // or use context to acheive this
  // let votes = {};
  // let votesArr = [];
  const handleVote = (participant) => {
    console.log({ chosenPar: participant });
    // votes[participant.category_id] = participant;
    // votesArr.push(participant);
    // console.log({ votesSoFarSelected: votes });
    // console.log({ votesSoFarSelectedArr: votesArr });
    setSelectedParticipantId(participant.id);
  };

  return {
    alreadyVoted,
    handleVote,
    selectedParticipantId,
  };
}
