import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import Copyright from "../components/Copyright";
import LoginForm from "../authentication/login";

function Login() {
  return (
    <div className="login">
      <Container
        component="main"
        maxWidth="xs"
        style={{
          display: "flex",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        <Paper>
          <Box
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <LoginForm />
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
