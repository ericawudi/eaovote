import { useState } from "react";
import { useSelector } from "react-redux";
import Notification from "../../components/Notification";
import Competition from "../../competition/index/competition";
import AdminComponent from "../../admin/index/admin-component";

function MainPageComponent() {
  const { isAdmin } = useSelector((state) => state.authSlice);
  const [open, setOpen] = useState(false);
  const [notificationMessage] = useState("error");

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <div>
      {isAdmin ? <AdminComponent /> : <Competition />}
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
