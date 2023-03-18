import { PARTICIPANT_ACTIONS, CATEGORY_ACTIONS } from "./competion-actions";
import { addNewVote, removeVote } from "./utils";

export const initialState = {
  competitionSlice: {
    competitions: [],
    currentCompetitionId: null,
  },
  categorySlice: {
    categories: [],
    openedCategories: [],
    currentCategoryId: null,
  },
  participantSlice: {
    selectedPartipantId: null,
    participants: [1, 2, 3, 4],
  },
  voteSlice: [],
};

export default function reducer(state, action) {
  const { type } = action;
  switch (type) {
    case PARTICIPANT_ACTIONS.SHOW_PARTICIPANTS: {
      const updatedOpenedCategories = [
        ...state.categorySlice.openedCategories,
        action.payload,
      ];
      return {
        ...state,
        categorySlice: {
          ...state.categorySlice,
          openedCategories: updatedOpenedCategories,
        },
      };
    }
    case PARTICIPANT_ACTIONS.HIDE_PARTICIPANTS: {
      const updatedOpenedCategories =
        state.categorySlice.openedCategories.filter(
          (id) => id !== action.payload
        );
      return {
        ...state,
        categorySlice: {
          ...state.categorySlice,
          openedCategories: updatedOpenedCategories,
        },
      };
    }
    case PARTICIPANT_ACTIONS.CAST_VOTE: {
      const { voteSlice: votes } = state;
      const { payload } = action;
      const updatedVotes = addNewVote(votes, payload);
      return {
        ...state,
        voteSlice: updatedVotes,
        participantSlice: {
          ...state.participantSlice,
          selectedPartipantId: payload.participantId,
        },
      };
    }
    case PARTICIPANT_ACTIONS.UNDO_VOTE: {
      const { voteSlice: votes } = state;
      const { payload } = action;
      const updatedVotes = removeVote(votes, payload);
      return {
        ...state,
        voteSlice: updatedVotes,
        participantSlice: {
          ...state.participantSlice,
          selectedPartipantId: null,
        },
      };
    }
    default:
      return state;
  }
}
