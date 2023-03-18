import { makeGetRequest } from "../../libs/axios";

const GET_COMPETIONS_URL = "competition";
const fetchAllCompetionsAPIRequest = async () => {
  try {
    const { data } = await makeGetRequest(GET_COMPETIONS_URL);
    return { err: false, data };
  } catch (err) {
    return { err: true, message: err.message };
  }
};

export { fetchAllCompetionsAPIRequest };
