import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Grid, Paper } from "@mui/material";
import Participants from "../participant/participants";
import useCategoryLogicHook from "../logic-hooks/category";
import Loader from "../../../components/Loader/Loader";
import Error from "../../../components/Error/Error";
import classes from "../styles/voter.module.css";

export default function Category(props) {
  const { category, showParticipants, toggleOpen } = props;
  const { participants, isLoading, isError, error } = useCategoryLogicHook(
    category?.id
  );

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
        <Paper>
          <ListItemButton
            onClick={toggleOpen}
            sx={{ bgcolor: "ButtonHighlight" }}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={category.name} />
            {showParticipants ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </Paper>
        <Collapse in={showParticipants} timeout="auto" /* unmountOnExit */>
          <Grid
            container
            alignItems="center"
            gap={3}
            justifyContent="center"
            sx={{ padding: "20px", width: "100%" }}
          >
            {isLoading ? (
              <div className={classes.comp_fetch}>
                <Loader fetching="participants" />
              </div>
            ) : isError ? (
              <Error message={error?.message} />
            ) : (
              participants && <Participants participants={participants?.data} />
            )}
          </Grid>
        </Collapse>
      </List>
    </div>
  );
}
