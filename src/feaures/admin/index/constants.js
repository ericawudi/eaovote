const FETCH_ON_MOUNT = true;
const QUERY_KEYS = {
  VOTERS: ["voters", "all"],
  PARTICIPANTS: ["participants"],
  CATEGORIES: [],
  COMPETITIONS: [],
};
const ADMIN_URLS = Object.keys(QUERY_KEYS).reduce(
  (urls, current) => ({
    ...urls,
    [current]: current.toLowerCase(),
  }),
  {}
);

export { ADMIN_URLS, FETCH_ON_MOUNT, QUERY_KEYS };
