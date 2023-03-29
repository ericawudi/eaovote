import { useState } from "react";
import Notification from "../components/Notification";
import Categories from "../feaures/voter/category/categories";
import CompetitionHeader from "../feaures/voter/index/competitionHeader";
import classes from "../feaures/voter/styles/voter.module.css";

export default function VoterDashboard() {
  const [open, setOpen] = useState(false);
  const [notificationMessage] = useState("error");

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  return (
    <>
      <div className={classes.competition__main}>
        <CompetitionHeader />
        <Categories />
      </div>
      <Notification
        severity="error"
        message={notificationMessage}
        openNotification={open}
        handleClose={handleClose}
        vertical="top"
        horizontal="right"
      />
    </>
  );
}
