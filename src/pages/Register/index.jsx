import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  registerSocialNetwork,
  registerWithFirebase,
} from "../../redux/actions/auth";
import useForm from "../../hooks/useForm";
import { validationRegisterSchema } from "../../schemas/registerValidator";
import { TextFieldPrimary } from "../../styles/shared/textField";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Register({ closeregister }) {
  const dispatch = useDispatch();
  const authState = useSelector((item) => item.auth);
  const navigate = useNavigate();

  const loginSocialNetwork = async (type) => {
    dispatch(registerSocialNetwork(type));
  };

  useEffect(() => {
    if (authState.name) {
      navigate("/");
    }
  }, [authState]);

  const handleSubmit = async (data) => {
    return new Promise((resolve, _reject) => {
      dispatch(
        registerWithFirebase({
          name: data.name,
          password: data.password,
          email: data.email,
        })
      );
      resolve();
      closeregister();
    });
  };

  const [formik] = useForm(
    {
      name: "",
      email: "",
      password: "",
      validatePassword: "",
    },
    validationRegisterSchema,
    handleSubmit
  );

  return (
    <Box display="flex" justifyContent="center" marginTop={4}>
      <Card style={{ padding: 20, width: 600 }} elevation={2}>
        <CardContent>
          <Typography marginBottom={3} variant="h5">
            Registro
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextFieldPrimary
              fullWidth
              name="name"
              autoComplete="off"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              label="Ingrese su nombre"
            />
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
            <TextFieldPrimary
              fullWidth
              label="Repita contrasenia"
              type="password"
              name="validatePassword"
              autoComplete="off"
              value={formik.values.validatePassword}
              onChange={formik.handleChange}
              error={
                formik.touched.validatePassword &&
                Boolean(formik.errors.validatePassword)
              }
              helperText={
                formik.touched.validatePassword &&
                formik.errors.validatePassword
              }
            />
            <Button
              type="submit"
              fullWidth
              startIcon={<LoginIcon />}
              variant="contained"
            >
              Registrarme
            </Button>
            <Box style={{ width: "100%" }} marginTop={1} display="flex" gap={1}>
              <Button
                style={{ background: "#4267B2", flexGrow: 1 }}
                onClick={() => loginSocialNetwork("facebook")}
                startIcon={<FacebookIcon />}
                variant="contained"
                color="secondary"
              >
                Facebook
              </Button>
              <Button
                style={{
                  background: "#DB4437",
                  color: "white",
                  flexGrow: 1,
                }}
                onClick={() => loginSocialNetwork("google")}
                startIcon={<GoogleIcon />}
                variant="contained"
              >
                Google
              </Button>
            </Box>
          </form>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
}

export default Register;
