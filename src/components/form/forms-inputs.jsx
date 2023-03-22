import { TextField, MenuItem } from "@mui/material";
import classes from "./forms.module.css";

function TextInput(props) {
  const { register, errors, name, label } = props;
  return (
    <TextField
      {...register(name, {
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
      label={label}
      autoComplete="username"
      autoFocus
      className={classes.form__input}
    />
  );
}
function PasswordInput(props) {
  const { register, errors } = props;
  return (
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
      className={classes.form__input}
    />
  );
}

function NumberInput(props) {
  const { register, errors, name, label } = props;
  return (
    <TextField
      {...register(name, {
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
      label={label}
      autoComplete="username"
      autoFocus
      type="number"
      className={classes.form__input}
    />
  );
}

function SelectInput(props) {
  const { register, errors, name, label, options } = props;
  return (
    <TextField
      {...register(name, {
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
      label={label}
      autoComplete="username"
      autoFocus
      select
      className={classes.form__input}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
export { TextInput, PasswordInput, NumberInput, SelectInput };
