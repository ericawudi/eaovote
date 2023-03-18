import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import Participants from "../participant/participants";
import useCategoryLogicHook from "../logic-hooks/category";

export default function Category({ id }) {
  const { isShowParticipants, toggleShowParticipants } =
    useCategoryLogicHook(id);

  return (
    <div>
      <List
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        component="nav"
      >
        <ListItemButton
          onClick={toggleShowParticipants}
          sx={{ bgcolor: "ButtonHighlight" }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Competion Category" />
          {isShowParticipants ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={isShowParticipants} timeout="auto" unmountOnExit>
          <Grid
            container
            alignItems="center"
            gap={3}
            justifyContent="center"
            sx={{ padding: "20px", width: "100%" }}
          >
            <Participants />
          </Grid>
        </Collapse>
      </List>
    </div>
  );
}
