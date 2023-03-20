const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const setUserInfo = (payload) => {
  console.log({ ACTION: payload });
  return { type: LOGIN_SUCCESS, payload };
};

export { LOGIN_SUCCESS, setUserInfo };
