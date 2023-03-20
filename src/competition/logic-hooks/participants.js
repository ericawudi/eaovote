import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { castNewVote, cancelVote } from "../../libs/redux/actions/votes";

export default function useParticipantsLogicHook(categoryId) {
  const dispatch = useDispatch();
  const { id: voterId } = useSelector((state) => state.authSlice);
  const { participants } = useSelector((state) => state.votesSlice);
  const { currentCompetitionId } = useSelector(
    (state) => state.competitionSlice
  );
  const [selectedParticipantId, setSelectedParticipantId] = useState(null);

  const castVote = (data) => dispatch(castNewVote(data));
  const undoVote = (id) => dispatch(cancelVote(id));

  const onVoteClick = (id) => {
    const alreadyVoted = selectedParticipantId === id;
    setSelectedParticipantId(alreadyVoted ? null : id);
    return alreadyVoted
      ? undoVote(categoryId)
      : castVote({
          categoryId,
          voterId,
          participantId: id,
          competitionId: currentCompetitionId,
        });
  };

  return { participants, selectedParticipantId, onVoteClick };
}
