import { useState } from "react";
import { useParams } from "react-router-dom";
import Notification from "../../components/Notification";
import { useFetch } from "../../services/useFetch";
import Competition from "../../competition/index/competition";

function MainPageComponent() {
  const [open, setOpen] = useState(false);
  const [notificationMessage] = useState("error");
  const { competitionId } = useParams();
  // const result = useFetch(["competition", competitionId]);
  // console.log({ result });

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Competition />
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
