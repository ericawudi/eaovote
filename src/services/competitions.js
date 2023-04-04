import { makeGetRequest } from "../libs/axios";

const GET_COMPETIONS_URL = "/competition";
const GET_CATEGORIES_URL = "/category/";

const fetchAllCompetionsAPIRequest = makeGetRequest(GET_COMPETIONS_URL);
const fetchAllCategoriesAPIRequest = makeGetRequest(GET_CATEGORIES_URL);

export { fetchAllCompetionsAPIRequest, fetchAllCategoriesAPIRequest };
