import React, { useState } from "react";

import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Notification from "../../components/Notification";
import { useFetch } from "../../services/hooks/useFetch";
import Category from "../contest/Category";

function MainPageComponent() {
  const [open, setOpen] = useState(false);
  const [notificationMessage] = useState("error");
  const { competitionId } = useParams();
  const result = useFetch(["competition", competitionId]);
  console.log({ result });

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Category />
        <Category />
      </div>

      <Notification
        severity="error"
        message={notificationMessage}
        openNotification={open}
        handleClose={handleClose}
        vertical="top"
        horizontal="right"
      />
    </div>
  );
}

export default MainPageComponent;
