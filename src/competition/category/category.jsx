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
import classes from "../styles/contest.module.css";
import useCategoryLogicHook from "../logic-hooks/category";

export default function Category(id) {
  const {
    state: { showParticipants },
    handlers: { toggleShowParticipants },
  } = useCategoryLogicHook(id);

  return (
    <div className={classes.contest__category_main}>
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
          {showParticipants ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={showParticipants} timeout="auto" unmountOnExit>
          <Grid
            container
            alignItems="center"
            // gap={2}
            justifyContent="space-around"
            sx={{ padding: "20px", width: "100%", background: "yellow" }}
          >
            <Participants />
          </Grid>
        </Collapse>
      </List>
    </div>
  );
}
