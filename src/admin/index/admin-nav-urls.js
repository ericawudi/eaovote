import PollIcon from "@mui/icons-material/Poll";
import BallotIcon from "@mui/icons-material/Ballot";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import GroupsIcon from "@mui/icons-material/Groups";
import Diversity2Icon from "@mui/icons-material/Diversity2";

const BASE = "admin";
const getUrl = (path) => {
  if (path === "Reports") return BASE + "/";
  if (path === "Admins") return `${BASE}/admin-list`;
  return `${BASE}/${path.toLowerCase()}`;
};

const ADMIN_NAVS = [
  { name: "Admins", Icon: SupervisorAccountIcon },
  { name: "Voters", Icon: GroupsIcon },
  { name: "Competitions", Icon: PollIcon },
  { name: "Categories", Icon: BallotIcon },
  { name: "Participants", Icon: Diversity2Icon },
  { name: "Reports", Icon: QueryStatsIcon },
].map(({ name, Icon }) => ({ name, Icon, id: getUrl(name) }));

export default ADMIN_NAVS;
