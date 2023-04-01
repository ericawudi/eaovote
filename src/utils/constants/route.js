import BallotIcon from "@mui/icons-material/Ballot";
import PollIcon from "@mui/icons-material/Poll";
import GroupsIcon from "@mui/icons-material/Groups";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

export const routes = {
  ADMIN: [
    { id: "voters", name: "Voters", Icon: GroupsIcon },
    {
      id: "competitions",
      name: "Competitions",
      Icon: PollIcon,
    },
    {
      id: "categories",
      name: "Categories",
      Icon: BallotIcon,
    },
    {
      id: "participants",
      name: "Participants",
      Icon: Diversity2Icon,
    },
    { id: "report", name: "Report", Icon: QueryStatsIcon },
  ],
  SUPERADMIN: [
    {
      id: "admin",
      name: "Admins",
      Icon: AdminPanelSettingsIcon,
    },
    { id: "report", name: "Reports", Icon: QueryStatsIcon },
  ],
};
