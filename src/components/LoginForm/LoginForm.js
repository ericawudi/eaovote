import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import { CircularProgress, Typography, Radio, Grid, Box } from "@mui/material";
import Notification from "../Notification";
import useLoginLogic from "./useLoginLogic";

export default function LoginForm() {
  const { state, handlers } = useLoginLogic();
  const { register, errors, loading, open, notificationMessage } = state;
  const { handleSubmit, onSubmit, handleClose } = handlers;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      {Object.keys(errors).map((key, index) => (
        <div key={index++}>
          <Typography
            variant="caption"
            color={"red"}
            gutterBottom
            align="center"
          >
            {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${
              errors[key].message
            }`}
          </Typography>
        </div>
      ))}

      <TextField
        {...register("username", {
          required: {
            value: true,
            message: "Field is required",
          },
          minLength: {
            value: 3,
            message: "Must be more than 3 characters",
          },
          pattern: {
            value: /^[a-zA-Z0-9@_-\s]*$/,
            message: "Unacceptable character(s) found",
          },
        })}
        error={errors?.username && true}
        margin="normal"
        fullWidth
        label="Username*"
        autoComplete="username"
        autoFocus
      />

      <TextField
        {...register("password", {
          required: {
            value: true,
            message: "Field is required",
          },
          minLength: {
            value: 3,
            message: "Must be more than 3 characters",
          },
          pattern: {
            value: /^[a-zA-Z0-9@_-\s]*$/,
            message: "Unacceptable character(s) found",
          },
        })}
        error={errors?.password && true}
        margin="normal"
        fullWidth
        label="Password*"
        type="password"
        autoComplete="current-password"
      />
      <Grid container justifyContent="flex-end">
        <p>I am an admin</p>
        <Radio
          {...register("isAdmin", {
            // required: { value: true, message: "Field is required" },
          })}
          error={errors?.isAdmin && true}
        />
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
      >
        Login
      </Button>
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            color: green[500],
            position: "absolute",
            top: "54.7%",
            left: "49%",
          }}
        />
      )}
      <Notification
        severity="error"
        message={notificationMessage}
        openNotification={open}
        handleClose={handleClose}
      />
    </Box>
  );
}
