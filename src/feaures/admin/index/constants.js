const FETCH_ON_MOUNT = true;
const QUERY_KEYS = {
  VOTERS: ["voters", "admin"],
  PARTICIPANTS: ["participants"],
  CATEGORIES: ["category", "admin"],
  COMPETITIONS: ["competition", "admin"],
};
const ADMIN_URLS = {
  VOTERS: "voters",
  COMPETITIONS: "competition",
  CATEGORIES: "category",
};

export { ADMIN_URLS, FETCH_ON_MOUNT, QUERY_KEYS };
