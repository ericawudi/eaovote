import { useCompetitionContext } from "../index/competition-provider";

export default function useParticipantsLogicHook() {
  const { state, handlers } = useCompetitionContext();
  const { participants, selectedParticipantId } = state.participantSlice;
  const { currentCategoryId } = state.categorySlice;
  const { currentCompetitionId } = state.competitionSlice;
  const { castVote, undoVote } = handlers;

  const onVoteClick = (id) => {
    const alreadyVoted = selectedParticipantId === id;
    return alreadyVoted
      ? undoVote(currentCategoryId)
      : castVote({
          participantId: id,
          currentCategoryId,
          currentCompetitionId,
        });
  };

  return { participants, selectedParticipantId, onVoteClick };
}
