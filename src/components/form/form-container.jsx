import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";

export default function FormContainer(props) {
  const { errors, loading, handleSubmit, onSubmit, children } = props;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      //   noValidate
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
      {children}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ height: "55px", mt: 3, mb: 2 }}
        disabled={loading}
      >
        Login
      </Button>
    </Box>
  );
}
