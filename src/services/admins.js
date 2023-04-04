import { makeGetRequest, makePostRequest } from "../libs/axios";

const ADD_ADMIN_URL = "";
const GET_ADMIN_URL = "";
const GET_ALL_ADMINS_URL = "";

const getAdminAPIRequest = makeGetRequest(GET_ADMIN_URL);
const getAllAdminsAPIRequest = makeGetRequest(GET_ALL_ADMINS_URL);

const addAdminAPIRequest = (data, authToken) =>
  makePostRequest(ADD_ADMIN_URL, { data, authToken });

export { getAdminAPIRequest, getAllAdminsAPIRequest, addAdminAPIRequest };
