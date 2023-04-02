import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";
import {
  CircularProgress,
  Typography,
  Radio,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import Notification from "../Notification";
import useLoginLogic from "./useLoginLogic";
import { PasswordInput, TextInput } from "../Form/FormsInputs";
// import { PasswordInput, TextInput } from "../Form/formsInputs";

export default function LoginForm() {
  const { state, handlers, fetchResponse } = useLoginLogic();
  const { register, errors, open, notificationMessage } = state;
  const { isLoading } = fetchResponse;
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

      <TextInput
        register={register}
        name="username"
        label="Username*"
        error={errors?.username}
        autoFocus
      />
      <PasswordInput register={register} error={errors?.username} />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={isLoading}
      >
        Login
      </Button>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue="voter"
        >
          <FormControlLabel
            value="voter"
            control={<Radio {...register("level")} />}
            label="Voter"
          />
          <FormControlLabel
            value="admin"
            control={<Radio {...register("level")} />}
            label="Admin"
          />
          <FormControlLabel
            value="superadmin"
            control={<Radio {...register("level")} />}
            label="Superadmin"
          />
        </RadioGroup>
      </FormControl>
      {isLoading && (
        <CircularProgress
          size={24}
          sx={{
            color: green[500],
            position: "absolute",
            top: "52.2%",
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
