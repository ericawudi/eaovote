import { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Participant from "./ParticipantCard";

export default function Category() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const data = [1];

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "stretch",
        alignContent: "stretch",
        flexDirection: "column",
        height: "100%",
        width: "inherit",
        // background: "yellow",
      }}
    >
      <List
        style={{
          display: "flex",
          // flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          onClick={handleClick}
          sx={{ bgcolor: "ButtonHighlight" }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {data.map((item) => {
            return <Participant />;
          })}
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
}
