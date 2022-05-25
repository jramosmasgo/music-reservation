import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginIcon from "@mui/icons-material/Login";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { TextFieldPrimary } from "../../styles/shared/textField";
import { validationLoginSchema } from "../../schemas/loginValidator";
import {
  loginWithFirebase,
  registerSocialNetwork,
} from "../../redux/actions/auth";
import useForm from "../../hooks/useForm";

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    dispatch(loginWithFirebase(data.email, data.password));
  };

  const loginSocialNetwork = async () => {
    dispatch(registerSocialNetwork());
  };

  const [formik] = useForm(
    {
      email: "",
      password: "",
    },
    validationLoginSchema,
    handleSubmit
  );

  return (
    <Box display="flex" justifyContent="center" padding={10}>
      <Card sx={{ padding: 2 }} elevation={2}>
        <CardContent>
          <Typography marginBottom={3} variant="h5">
            Inicio se Sesion
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextFieldPrimary
              fullWidth
              name="email"
              autoComplete="off"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              label="Ingrese su correo"
            />
            <TextFieldPrimary
              fullWidth
              label="password"
              type="password"
              name="password"
              autoComplete="off"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <LoadingButton
              fullWidth
              type="submit"
              endIcon={<LoginIcon />}
              loading={false}
              loadingPosition="end"
              variant="contained"
              loadingIndicator="Loading..."
            >
              Ingresar
            </LoadingButton>
            <Divider />
            <Box style={{ width: "100%" }} marginTop={2} display="flex" gap={1}>
              <Button
                style={{ background: "#4267B2", flexGrow: 1 }}
                startIcon={<FacebookIcon />}
                variant="contained"
                color="secondary"
              >
                Facebook
              </Button>
              <Button
                onClick={() => loginSocialNetwork()}
                style={{
                  background: "#DB4437",
                  color: "white",
                  flexGrow: 1,
                }}
                startIcon={<GoogleIcon />}
                variant="contained"
              >
                Google
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
