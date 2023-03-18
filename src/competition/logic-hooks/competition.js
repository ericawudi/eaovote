import { useReducer } from "react";
import reducer, { initialState } from "../store/competion-duck";
import { PARTICIPANT_ACTIONS } from "../store/competion-actions";

export default function useCompetitionLogicHook() {
  const [store, dispatch] = useReducer(reducer, initialState);

  const castVote = (data) =>
    dispatch({ type: PARTICIPANT_ACTIONS.CAST_VOTE, payload: data });
  const undoVote = (data) =>
    dispatch({ type: PARTICIPANT_ACTIONS.UNDO_VOTE, payload: data });

  // const submitVotes = () => console.log({ SUMBIT: votes });

  const showParticipants = (id) =>
    dispatch({
      type: PARTICIPANT_ACTIONS.SHOW_PARTICIPANTS,
      payload: id,
    });

  const hideParticipants = (id) =>
    dispatch({
      type: PARTICIPANT_ACTIONS.HIDE_PARTICIPANTS,
      payload: id,
    });

  // const voteParticipant = (participantId) => {
  //   console.log({ categoryId, participantId });
  //   setSelectedParticipantId(participantId);
  //   setShowParticipants(false);
  //   return;
  // };

  return {
    state: store,
    handlers: {
      showParticipants,
      hideParticipants,
      castVote,
      undoVote,
      // submitVotes,
    },
  };
}
