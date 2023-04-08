import { TextField, MenuItem } from "@mui/material";
import classes from "./forms.module.css";

export function TextInput(props) {
  const { register, error, name, label, autoFocus, disabled = false } = props;
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
      error={!!error}
      margin="normal"
      fullWidth
      label={label}
      autoComplete="username"
      helperText={error?.message}
      className={classes.form__input}
      autoFocus={autoFocus}
      disabled={disabled}
    />
  );
}

export function PasswordInput(props) {
  const { register, error } = props;
  return (
    <TextField
      {...register("password", {
        required: {
          value: true,
          message: "Field is required",
        },
        minLength: {
          value: 8,
          message: "Must be more than 8 characters",
        },
        pattern: {
          value: /^(?=.*[a-zA-Z])(?=.*\d)[!@#$%^&*+(){ }?></a-zA-Z\d]{8,}$/,
          message: "Must be alphanumeric with no unacceptable character(s)",
        },
      })}
      error={!!error}
      margin="normal"
      fullWidth
      label="Password*"
      type="password"
      helperText={error?.message}
      autoComplete="current-password"
      className={classes.form__input}
    />
  );
}

export function NumberInput(props) {
  const { register, error, name, label } = props;
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
      error={!!error}
      margin="normal"
      fullWidth
      label={label}
      autoComplete="username"
      helperText={error?.message}
      type="number"
      className={classes.form__input}
    />
  );
}

export function SelectInput(props) {
  const { register, error, name, label, options } = props;
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
      error={!!error}
      margin="normal"
      fullWidth
      label={label}
      autoComplete="username"
      helperText={error?.message}
      select
      defaultValue={options[0]?.value}
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

export function TextAreaInput(props) {
  const { register, error, name, label } = props;
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
      error={!!error}
      margin="normal"
      fullWidth
      label={label}
      multiline
      minRows={3}
      maxRows={6}
      helperText={error?.message}
      className={classes.form__input}
    />
  );
}
