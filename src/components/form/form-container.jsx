import { Box, Button } from "@mui/material";

export default function FormContainer(props) {
  const { loading, handleSubmit, onSubmit, children } = props;

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      {children}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ height: "55px", mt: 3, mb: 2 }}
        disabled={loading}
      >
        Confirm & Submit
      </Button>
    </Box>
  );
}
