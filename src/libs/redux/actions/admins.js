const ADD_ADMIN = "ADD_ADMIN";
const SET_ADMINS = "SET_ALL_ADMINS";
const UPDATE_ADMIN = "UPDATE_ADMIN";
const DELETE_ADMIN = "DELETE_ADMIN";

const addAdmin = (payload) => ({ type: ADD_ADMIN, payload });
const setAllAdmins = (payload) => ({ type: SET_ADMINS, payload });

export { ADD_ADMIN, SET_ADMINS, addAdmin, setAllAdmins };
