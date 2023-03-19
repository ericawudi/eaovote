const SET_COMPETIONS = "SET_ALL_COMPETITIONS";
const SET_CURRENT_COMPETITION = "SET_CURRENT_COMPETITIONS";
const SET_CATEGORIES = "SET_ALL_CATEGORIES";

const setCompetitons = (payload) => ({ type: SET_COMPETIONS, payload });
const setCategories = (payload) => ({ type: SET_CATEGORIES, payload });
const setCurrentCompetition = (id) => ({
  type: SET_CURRENT_COMPETITION,
  payload: id,
});

export {
  SET_COMPETIONS,
  SET_CATEGORIES,
  SET_CURRENT_COMPETITION,
  setCompetitons,
  setCategories,
  setCurrentCompetition,
};
