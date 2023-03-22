import { CAST_VOTE, SET_PARTICIPANTS, UNDO_VOTE } from "../actions/votes";
import { addNewVote, removeVote } from "../utils/votes";
const initialState = {
  participants: [1, 2, 3, 4],
  votes: [],
};

export default function votesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CAST_VOTE: {
      const { votes } = state;
      const updatedVotes = addNewVote(votes, payload);
      return { ...state, votes: updatedVotes };
    }
    case UNDO_VOTE: {
      const { votes } = state;
      const updatedVotes = removeVote(votes, payload);
      return { ...state, votes: updatedVotes };
    }
    case SET_PARTICIPANTS:
      return { ...state, participants: payload };
    default:
      return state;
  }
}
