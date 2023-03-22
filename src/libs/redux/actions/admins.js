const ADD_ADMIN = "ADD_ADMIN";
const UPDATE_ADMIN = "UPDATE_ADMIN";
const DELETE_ADMIN = "DELETE_ADMIN";

const addAdmin = (payload) => ({ type: ADD_ADMIN, payload });

export { ADD_ADMIN, addAdmin };
