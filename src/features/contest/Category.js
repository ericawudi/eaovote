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
import { Grid } from "@mui/material";

export default function Category() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const data = [1, 2, 3, 4];

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
          <ListItemText primary="Competion Category" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Grid
            container
            alignItems="center"
            // gap={2}
            justifyContent="space-around"
            sx={{ padding: "20px", width: "100%", background: "yellow" }}
          >
            {data.map((item) => (
              <Grid item key={item}>
                <Participant />
              </Grid>
            ))}
          </Grid>
        </Collapse>
      </List>
    </div>
  );
}
