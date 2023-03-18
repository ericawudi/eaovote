const SET_COMPETIONS = "FETCH_ALL_COMPETITIONS";
const SET_CURRENT_COMPETITION = "SET_CURRENT_COMPETITIONS";

const setCompetitons = (payload) => ({ type: SET_COMPETIONS, payload });
const setCurrentCompetiton = (id) => ({
  type: SET_CURRENT_COMPETITION,
  payload: id,
});

export {
  SET_COMPETIONS,
  SET_CURRENT_COMPETITION,
  setCompetitons,
  setCurrentCompetiton,
};
