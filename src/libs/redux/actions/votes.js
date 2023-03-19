const CAST_VOTE = "CAST_VOTE";
const UNDO_VOTE = "UNDO_CASTED_VOTE";
const SET_PARTICIPANTS = "SET_ALL_PARTICIPANTS";

const castNewVote = (payload) => ({ type: CAST_VOTE, payload });
const cancelVote = (id) => ({ type: UNDO_VOTE, payload: id });

export { CAST_VOTE, UNDO_VOTE, SET_PARTICIPANTS, castNewVote, cancelVote };
