import {
  SET_COMPETIONS,
  SET_CURRENT_COMPETITION,
  SET_CATEGORIES,
} from "../actions/competitions";

const initialState = {
  currentCompetitionId: null,
  competitions: [],
  categories: [],
};

export default function competionReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_COMPETIONS:
      return { ...state, competitions: payload };
    case SET_CURRENT_COMPETITION:
      return { ...state, currentCompetitionId: payload };
    case SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
}
