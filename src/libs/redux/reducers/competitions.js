import {
  SET_COMPETIONS,
  SET_CURRENT_COMPETITION,
} from "../actions/competitions";

const initialState = {
  competitions: [],
  currentCompetionId: null,
};

export default function competionReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_COMPETIONS:
      return { ...state, competitions: payload };
    case SET_CURRENT_COMPETITION:
      return { ...state, currentCompetionId: payload };
    default:
      return state;
  }
}
