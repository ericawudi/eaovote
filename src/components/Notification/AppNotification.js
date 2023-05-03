import { forwardRef } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { DEFAULT_OPTIONS } from "./notificationConstants";

const Alert = forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

export default function AppNotification(props) {
  const { isOpen, message, severity, handleClose } = props;

  return (
    <Stack spacing={2}>
      <Snackbar
        open={isOpen}
        autoHideDuration={DEFAULT_OPTIONS.autoHideDuration}
        onClose={handleClose}
        anchorOrigin={{
          vertical: DEFAULT_OPTIONS.vertical,
          horizontal: DEFAULT_OPTIONS.horizontal,
        }}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
