const NOTIFICATION_ACTIONS = {
  LOGIN_USER: "LOGIN_USER",
  VOTER: {
    CREATE: "CREATE_VOTER",
    UPDATE: "UPDATE_VOTER",
    DELETE: "DELETE_VOTER",
    FETCH_ALL: "FETCH_ALL_VOTERS",
  },
};

const DEFAULT_OPTIONS = {
  vertical: "bottom",
  horizontal: "center",
  openNotification: false,
  autoHideDuration: 5000,
};

const NOTIFICATION_SEVERITY = {
  error: "error",
  warning: "warning",
  info: "info",
  success: "success",
};

export { NOTIFICATION_ACTIONS, DEFAULT_OPTIONS, NOTIFICATION_SEVERITY };
