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

export default function Category(props) {
  const { name, showParticipants, toggleOpen } = props;

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
          onClick={toggleOpen}
          sx={{ bgcolor: "ButtonHighlight" }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={name} />
          {showParticipants ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={showParticipants} timeout="auto" unmountOnExit>
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
