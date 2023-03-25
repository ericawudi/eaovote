import BallotIcon from "@mui/icons-material/Ballot";
import PollIcon from "@mui/icons-material/Poll";
import GroupsIcon from "@mui/icons-material/Groups";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

const PARENT_PATH = "admins";
const getFullPath = (path) => {
  if (path === "Reports") return PARENT_PATH + "/";
  if (path === "Admins") return `${PARENT_PATH}/admin-list`;
  return `${PARENT_PATH}/${path.toLowerCase()}`;
};

const ADMIN_NAVS = [
  { name: "Admins", Icon: AdminPanelSettingsIcon },
  { name: "Voters", Icon: GroupsIcon },
  { name: "Competitions", Icon: PollIcon },
  { name: "Categories", Icon: BallotIcon },
  { name: "Participants", Icon: Diversity2Icon },
  { name: "Reports", Icon: QueryStatsIcon },
].map(({ name, Icon }) => ({ name, Icon, id: getFullPath(name) }));

export default ADMIN_NAVS;
