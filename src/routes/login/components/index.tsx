import { useLogin } from "@/routes/login/hooks/useLogin";
import {
  Container,
  styled,
  Typography,
  TextField,
  Box,
  Switch,
  Link,
} from "@mui/material";

export default function Login() {
  const bgImagePath = "/src/assets/images/login_background.png";
  const BackgroundImage = styled(Container)(() => ({
    backgroundImage: `url(${bgImagePath})`,
    backgroundSize: "cover",
    height: "100vh",
  }));
  const PageContainer = styled(Container)(() => ({ display: "flex" }));
  const LoginContainer = styled(Container)(() => ({}));
  const RememberContainer = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
  }));

  return (
    <PageContainer>
      <BackgroundImage></BackgroundImage>
      <LoginContainer>
        <Typography variant="h5" align="center">
          LessonAide
        </Typography>
        <TextField
          id="login-username"
          label="username"
          variant="outlined"
        ></TextField>
        <TextField
          id="login-username"
          label="passowrd"
          variant="outlined"
        ></TextField>
        <RememberContainer>
          <Switch />
          <Typography>Remember Me</Typography>
        </RememberContainer>
        <Link>Forgot Password?</Link>
      </LoginContainer>
    </PageContainer>
  );
}
