const FETCH_ON_MOUNT = true;
const QUERY_KEYS = {
  VOTERS: ["voters", "admin"],
  CATEGORIES: ["category", "admin"],
  COMPETITIONS: ["competition", "admin"],
  PARTICIPANTS: ["participants", "category"],
};
const ADMIN_URLS = {
  VOTERS: "voters",
  COMPETITIONS: "competition",
  CATEGORIES: "category",
  PARTICIPANTS: "participants",
};

export { ADMIN_URLS, FETCH_ON_MOUNT, QUERY_KEYS };
