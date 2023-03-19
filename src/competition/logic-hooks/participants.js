import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { castNewVote, cancelVote } from "../../libs/redux/actions/votes";

export default function useParticipantsLogicHook(categoryId) {
  const dispatch = useDispatch();
  const { participants } = useSelector((state) => state.votesSlice);
  const { currentCompetitionId } = useSelector(
    (state) => state.competitionSlice
  );
  const [selectedParticipantId, setSelectedParticipantId] = useState(null);

  // const { state, handlers } = useCompetitionContext();
  // const { participants, selectedParticipantId } = state.participantSlice;
  // const { currentCategoryId } = state.categorySlice;
  // const { currentCompetitionId } = state.competitionSlice;
  // const { castVote, undoVote } = handlers;

  const castVote = (data) => dispatch(castNewVote(data));
  const undoVote = (id) => dispatch(cancelVote(id));

  const onVoteClick = (id) => {
    const alreadyVoted = selectedParticipantId === id;
    setSelectedParticipantId(alreadyVoted ? null : id);
    return alreadyVoted
      ? undoVote(categoryId)
      : castVote({
          categoryId,
          participantId: id,
          competitionId: currentCompetitionId,
        });
  };

  return { participants, selectedParticipantId, onVoteClick };
}
