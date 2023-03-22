const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const UPDATE_ADMIN_STATUS = "UPDATE_ADMIN_STATUS";

const setUserInfo = (payload) => ({ type: LOGIN_SUCCESS, payload });
const updateAdminStatus = (isAdmin) => ({ type: UPDATE_ADMIN_STATUS, isAdmin });

export { LOGIN_SUCCESS, UPDATE_ADMIN_STATUS, setUserInfo, updateAdminStatus };
